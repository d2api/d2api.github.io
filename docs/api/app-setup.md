# setting up an app

step one is creating an application at Bungie.net.  
here, specifically: https://www.bungie.net/en/Application.  
you may need to re-click this ^ link after logging in, it tends to dump you at the site root after login

don't stress or overthink this: you can change the app's name, you can re-issue its keys, you can create a bunch of different applications. it costs nothing and Bungie won't yell at you for making ten apps, or for never using your keys

some fields you'll see:

#### Application Name

whatever makes you happy. this will display in all caps when someone goes through the process of granting your application access to their game account

#### Website

this mainly shows up in your application details if someone visits their app history or "authorized apps" page

#### Origin Header

this is only needed if your application is a website and makes API calls directly from a page

for security purposes, browsers disallow a page at "mydomain.com" from getting info from "otherdomain.com", unless "otherdomain.com" grants permission. this is called [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). the Origin Header field will cause the API to send back a security header allowing your page to get info from Bungie.net

this should be your domain name, including protocol, with no trailing slash. like  
`https://www.myapplication.com`  
you can cover more than one domain, using one application/api key. just enter multiple URLs here separated by commas.

### OAuth fields

a API key is your app's permission to talk to the Destiny 2 API, but OAuth is permission granted by an individual Bungie.net user, to see certain info, or perform certain actions on their behalf. you may not need these following fields.

#### OAuth Client Type

a Public client requires the user to reauthenticate every hour. a Confidential client gets issued a refresh token, which can keep the access token refreshed for a long time. everyone uses Confidential.

#### Redirect URL

when a user grants permission to your app, they're sent to this URL with an authorization code. this is where you'd have a webpage or app capable of completing the [OAuth flow](/oauth).

#### Scope

permissions to request when the user logs in. **if you change these checkboxes** it doesn't change what your app is allowed to do, until the user re-completes auth/login
