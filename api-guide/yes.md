# yes, this is how OAuth flow works

the **Bungie.net authorization page** does need to be involved. sorry.  
it's [well-justified](https://github.com/Bungie-net/api/wiki/OAuth-Documentation#signing-in-via-the-system-web-browser). and it's OAuth standard.

the **Redirect URL** cannot be `http:`. it's 2021, and `https:` is how we do things.  
for local dev, you can set up a self-signed local certificate. google how to do so for your own dev server.  
for production use, SSL certificates are free nowadays. get one set up.

the **Redirect URL** does **not** have to be a webpage! so stop panicking.  
you can build a native/local app that receives an authorization code from the redirect.  
you'll need to register a protocol handler (in [windows](https://docs.microsoft.com/en-us/windows/win32/search/-search-3x-wds-ph-install-registration)/[iOS](https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app)/[android](https://developer.android.com/training/app-links)/one of those other things that nobody uses)