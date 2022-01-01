# OAuth

## go with The Flow

the Bungie API uses OAuth to authenticate users, with an authorization code flow. this means
- the user is sent to a **Bungie.net page** like [this](/assets/images/authorize.png)
  - they see the name of the app that's requesting access to their account
  - they see the permissions the app is requesting
  - and confirm they are ok with that
- the user is **redirected to a URL** of the developer's choosing, with an authorization code appended to the url
  - whatever application or webpage is at that URL, makes an API request to exchange the authorization code for a full access token

### yes, this is how it is.

if something about this setup doesn't seem compatible with your use case, see [here](yes).

## what now
