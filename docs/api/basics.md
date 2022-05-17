# API technical basics

## REST

the Destiny 2/Bungie API is a REST API.  
REST just means you make simple HTTP requests to it, extremely similar to how web browsing works.  
- a GET request downloads data from a URL. you got this webpage via a GET request.  
- a POST request sends data to a URL and then downloads data in return.  
  - there's other HTTP methods but it's not really relevant here.

if you are programming and want to use the API, you're gonna need to know 
- how to program :)  
- how to make HTTP requests (or use an [api library](/api/libraries) to do it for you)

## authorization

### privacy

for destiny 2 operations, there are 2 different levels of privacy:

- things you can do anonymously (meaning "without a user account", but you still need an API key)
- things you can do authenticated as a user, involving that user's account ([some examples here](/api/privacy))

there's no middle option, "things you can do as a user, involving other people's accounts".  
things are either public, or locked to only the user involved.  
so there's no need to be logged in as X unless it's for information specific to X's account.

### scope

for logged-in operations, there are also permissions a user grants, when they log into an application.  
each [application](/api/app-setup) chooses a set of permissions it asks for, and when the user logs in, they can see, and agree to those permissions.

for destiny 2, there are separate read and write permissions. an app can request permission solely to view user's deeper destiny 2 information, or request permission to make inventory changes as well.

## authentication

the Bungie API uses OAuth to authenticate users, with an authorization code flow. this means users perform a series of steps, some or all of them in a web browser. then the application receives an `authorization code` which it can exchange for an `access token`.

the `access token` is used to make authenticated requests, proving with each request that the application is acting on the user's behalf.

more about OAuth [here](/oauth)

