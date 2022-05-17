# weird OAuth cases

## yes, this is how the OAuth flow works. sorry.

### "why do i need to set this up, i just want to use my own account to query the API"

that's cool. fair.
- i set up a page here if you just want to generate an `access token`  
https://paracausal.science/oauth/
- you could put a fake or localhost URL in at bungie.net, then when it forwards you to a failed URL, just grab the `authorization code` out of the URL and perform the exchange yourself.

### "but i'm just developing! i don't have an SSL. i don't need an SSL."

the **Redirect URL** cannot be `http:`. it's 2021, and `https:` is how we do things. google *hates* you if you don't use https. browsers warn people if you don't have https.  
for local dev, you can set up a self-signed local certificate. look up how to do so for your own dev server. it's healthy. most people can figure it out in less time than they spend complaining about this in discord.

or just put https in at bungie.net and then delete the S after logging in.

for production use, SSL certificates are free nowadays. get one set up.

### "but my app isn't a webpage! it lives on discord/it's an exe/it's an overlay."

the **Bungie.net authorization page** does need to be involved. sorry.  
it's [well-justified](https://github.com/Bungie-net/api/wiki/OAuth-Documentation#signing-in-via-the-system-web-browser), and it's OAuth standard.

**however**  
the **Redirect URL** does **not** have to be a webpage! so stop panicking.  
"http" doesn't **need** do be anywhere in the Redirect URL  

#### if you're developing a local app that lives on a user's computer

you can build a native/local app that receives an authorization code from the redirect.  
you'll need to register a protocol handler (in [windows](https://docs.microsoft.com/en-us/windows/win32/search/-search-3x-wds-ph-install-registration)/[iOS](https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app)/[android](https://developer.android.com/training/app-links)/???)

#### if you're developing a discord app

congrats you've made this hard on yourself. you **will** need a site to accept the user's completed login flow, then send the results to your bot and let your bot hold onto the token.  
remember to warn users you're doing this in your privacy policy :)