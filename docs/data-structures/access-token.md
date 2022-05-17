# access token

*see also [(/oauth/access-token)](/oauth/access-token)*

an `access token` is used to do authenticated requests.
it's a string that looks like this:  
`Jq+R9ULSA1VWPGB/TBTDcuUcFJiI2Du/Cj8KUkQqkyXFGsAwwT7MakG/3ntvZNHrPHz=`  
(the refresh token looks like this too)

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

the `access_token` is for using with each [private](/api/privacy) request

the `refresh_token` is used to [get a new access token](/oauth/access-token) when it expires

`expires_in` says how many **seconds** in the future the `access_token` will expire. it's usually `3600`.

`refresh_expires_in` says how many seconds in the future the `refresh_token` will expire. it's usually `7776000`.
