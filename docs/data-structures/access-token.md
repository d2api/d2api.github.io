# access token

an `access token` is used to do authenticated requests.
it's a string that looks like this:  
`Jq+R9ULSA1VWPGB/TBTDcuUcFJiI2Du/Cj8KUkQqkyXFGsAwwT7MakG/3ntvZNHrPHz=`  
(the refresh token looks like this too)

the `access token` is sent along with the request as an HTTP header. the header's name is  
`Authorization`  
and its value looks like  
`Bearer Jq+R9ULSA1VWPGB/TBTDcuUcFJiI2Du/Cj8KUkQqkyXFGsAwwT7MakG/3ntvZNHrPHz=`

when a new `access token` is fetched from the bungie API, the JSON response looks like this:
```ts
{
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  refresh_expires_in: number;
  membership_id: string;
}
```

your application should **save** the `access_token` and `refresh_token`

`expires_in` says how many seconds in the future the `access_token` will expire,  
so if `expires_in` says `3600` seconds, your application should calculate and **save** whatever time is 1 hour from right now. at that time, if you need to make another request, you should refresh the token instead of trying to use it.

`refresh_expires_in` says how many seconds in the future the `refresh_token` will expire,  
so if `refresh_expires_in` says `7776000` seconds, your application should calculate and **save** whatever time is 90 days from right now. at that time, if the token hasn't been refreshed, the user will probably need to log in again.

when you refresh access token data, use all the fields and **discard any old data**. the timeframes will be updated, and apply to the new tokens