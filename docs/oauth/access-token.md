# handling the access token

## overview

an `access token` is used to do authenticated requests.
it's a string that looks like this:  
`Jq+R9ULSA1VWPGB/TBTDcuUcFJiI2Du/Cj8KUkQqkyXFGsAwwT7MakG/3ntvZNHrPHz=`  
(the refresh token looks like this too)

## issuing a new access token

### requesting the token

after performing the first part of the OAuth flow, the user is returned to your app with an `authorization code`.  
this is a single string that proves to Bungie.net the user approved the login.  
it's used to complete the process and gets exchanged for an `access token`.

to get the `access token`, send a POST request to the endpoint at
`https://www.bungie.net/platform/app/oauth/token/`

the goal is to send 4 pieces of information to the server, using form encoding

- `grant_type` - always "authorization_code". just those 2 literal words and an underscore 
- `code` - the actual `authorization code` provided by bungie
- `client_id` - from your [application's details](/api/app-setup)
- `client_secret` - from your [application's details](/api/app-setup).  
or don't include this if you aren't using Confidential

depending on your http or REST library, it may be able to encode this for you and send appropriate headers.  

otherwise, you'll need to
- set a header with the name  
`Content-Type`  
and the value  
`application/x-www-form-urlencoded`
- send a POST body that looks like
`grant_type=authorization_code&code=8c66f9e519b7ec8498c8b4&client_id=123457&client_secret=TqlCb4VTZc89.7NKgBp9eFgjNb`  
this is the above data, encoded as form fields

### receiving the token data

more information on access token data [here](/data-structures/access-token)

your application should **save** the `access_token` and `refresh_token`.  
we need these strings until the next refresh.

your application should calculate and **save** the time then the `access_token` will expire.  
`expires_in` says how many seconds until that happens, so add those seconds to the current datetime.  

so if `expires_in` says `3600` seconds, then if you need to make another request more than 1 hour from right now, you should refresh the token instead of trying to use it.

your application should calculate and **save** the time then the `refresh_token` will expire.  
`refresh_expires_in` says how many seconds until that happens, so add those seconds to the current datetime.  

so if `refresh_expires_in` says `7776000` seconds, then if you need to refresh the token more than 90 days from right now, the user will probably need to log in again.

## using the access token

the `access token` is sent along with each [private](/api/privacy) request as an HTTP header.  
the header's name is  
`Authorization`  
and its value looks like  
`Bearer Jq+R9ULSA1VWPGB/TBTDcuUcFJiI2Du/Cj8KUkQqkyXFGsAwwT7MakG/3ntvZNHrPHz=`  
that's "Bearer", then a space, then the token.

## refreshing the access token

refreshing the access token uses the same endpoint as issuing it:  
`https://www.bungie.net/platform/app/oauth/token/`

once again, you'll send a form-encoded POST request to the endpoint, with similar fields

- `grant_type` - always "refresh_token". just those 2 literal words and an underscore 
- `refresh_token` - the `refresh_token` you set aside earlier 
- `client_id` - from your [application's details](/api/app-setup)
- `client_secret` - from your [application's details](/api/app-setup

:::caution important
**when you refresh tokens**, use **all** the new response fields and **discard any old data**. the expiration timeframes are updated to apply for the time **now**, and they apply to the new tokens
:::

:::info huh ???
**"what refresh token? i don't have one, only an access token."**  
you probably selected Public in your [application settings](/api/app-setup)
:::
