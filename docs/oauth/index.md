# OAuth

the Bungie API uses OAuth to authenticate users, with an authorization code flow. this means users perform a series of steps, some or all of them in a web browser. then the application receives an `authorization code` which it can exchange for an `access token`.

the `access token` is used to make authenticated requests. it's sent as a header.  
this proves it's doing something with the user's permission.

## The Flow

the Bungie API uses an authorization code flow. this means
- the application offers to log the user in⠀
- the user is linked or redirected to a **Bungie.net page** like [this](/img/authorize.png)
  - they see the name of the app that's requesting access to their account
  - they see the permissions the app is requesting
  - and confirm they are ok with that
- the user is **redirected to a URL** of the developer's choosing, with an `authorization code` appended to the url
  - whatever application or webpage lives at that URL, now has an `authorization code`, that's all it needs from the user/flow
- the application exchanges the `authorization code` for a full `access token`
  - this is done as a POST request to `https://www.bungie.net/platform/app/oauth/token/`

#### "this doesn't work for me"

if something about this flow doesn't seem compatible with your use case, see [here](/oauth/weird-cases).

## what now

that `access token` is kept and re-used to make authenticated requests to the API. see [here](/data-structures/access-token) for more information about its structure.

following the timeframes in the access code, the application will use the `/token/` endpoint to refesh the `access token`.
