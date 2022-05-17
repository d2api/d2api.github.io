# OAuth

the Bungie API uses OAuth to authenticate users, with an authorization code flow. this means users perform a series of steps, some or all of them in a web browser. then the application receives an `authorization code` which it can exchange for an `access token`.

the `access token` is used to make authenticated requests, proving with each request that the application is acting on the user's behalf.

## The Flow

the Bungie API uses OAuth to authenticate users, with an authorization code flow. this means
- the application offers to log the user in⠀
- the user is linked or redirected to a **Bungie.net page** like [this](/img/authorize.png)
  - they see the name of the app that's requesting access to their account
  - they see the permissions the app is requesting
  - and confirm they are ok with that
- the user is **redirected to a URL** of the developer's choosing, with an `authorization code` appended to the url
  - whatever application or webpage lives at that URL, now has an `authorization code`, that's all it needs from the user/flow
- the application exchanges the `authorization code` for a full `access token`

#### "this doesn't work for me"

if something about this flow doesn't seem compatible with your use case, see [here](/api/weird-cases).

## what now
