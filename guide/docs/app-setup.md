# setting up at Bungie.net
step one is creating an application at Bungie.net. here, specifically: [https://www.bungie.net/en/Application]. you may need to re-click the link after logging in, it tends to dump you at the site root after authenticating

don't stress or overthink it: you can change the app's name, you can re-issue its keys, you can create a bunch of different applications. it costs nothing and Bungie won't yell at you for making ten apps, or for never using your keys

some fields you'll see:

### Application Name
whatever makes you happy. this will display in all caps when someone goes through the process of granting your application access to their game account

### Website
this mainly shows up in your application details if someone visits their app history or "authorized apps" page

### Origin Header
this is only needed if your application is a website which makes API calls from the page

for security purposes, browsers disallow a page at "mydomain.com" from getting info from "otherdomain.com", unless "otherdomain.com" grants permission. this is called [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). the Origin Header field will cause the API to send back a security header allowing your website to get info from Bungie.net

## OAuth fields
a API key is permission to talk to the destiny 2 API, but OAuth is permission granted by an individual Bungie.net user, to perform certain actions or see certain info. you may not need the following fields.

### OAuth Client Type
a Public client requires

### Redirect URL


### Scope