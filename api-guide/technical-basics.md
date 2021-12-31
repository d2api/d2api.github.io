# API technical basics

## REST

the destiny 2/bungie API is a REST API.  
to keep things simple, REST just means you make simple HTTP requests to it, extremely similar to how web browsing works.  
a GET request downloads data from a URL. you got this page via a GET request.  
a POST request sends data to a URL and then downloads data in return.  
there's other methods but it's not really relevant here.

what does this mean to you? if you are programming and want to use the API,  
priority one is learning how to program,  
and priority 2 is learning how to make HTTP requests (or finding an [api library](libraries) to do it for you)

## authorization

for destiny 2 operations, there are 2 different levels of privacy:
- things you can do anonymously (without a user account, but with an API key)
- things you can do as the user, involving the user's account (like move an item around)

there's no middle option, "things you can do as a user, involving other people's accounts"  
things are either public, or locked to only the user involved. so there's no need to be logged in as Person X unless it's for information specific to Person X's account. [more here](privacy)

for logged in operations, there are also per-app permissions

## authentication

the API uses OAuth to authenticate uesrs