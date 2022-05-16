# API technical basics

## REST

the Destiny 2/Bungie API is a REST API.  
to keep things simple, REST just means you make simple HTTP requests to it, extremely similar to how web browsing works.  
- a GET request downloads data from a URL. you got this webpage via a GET request.  
- a POST request sends data to a URL and then downloads data in return.  
  - there's other HTTP methods but it's not really relevant here.

what does this mean to you? if you are programming and want to use the API,  
priority 1 is learning how to program :)  
and priority 2 is learning how to make HTTP requests (or finding an [api library](libraries) to do it for you)

## authorization

### privacy

for destiny 2 operations, there are 2 different levels of privacy:
- things you can do anonymously (without a user account, but with an API key)
- things you can do authenticated as a user, involving that user's account ([some examples here](privacy))

there's no middle option, "things you can do as a user, involving other people's accounts"  
things are either public, or locked to only the user involved. so there's no need to be logged in as Person X unless it's for information specific to Person X's account.

### scope

for logged-in operations, there are also permissions a user grants, when they log into an application.  
each [application](app-setup) chooses a set of permissions it asks for, and when the user logs in, they can see, and agree to those permissions.

for destiny 2, there are separate read and write permissions. an app can request permission solely to view user's deeper destiny 2 information, or request permission to make inventory changes as well.

## authentication

the Bungie API uses OAuth to authenticate users, with an authorization code flow. this means users perform a series of steps, some of them in a web browser, which in the application's code receiving an `authorization code` which it can exchange for an `access token`.

the `access token` is used to make authenticated requests, proving with each request that the application is acting on the user's behalf.

more about OAuth [here](oauth)

