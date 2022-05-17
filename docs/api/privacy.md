# privacy

for destiny 2 operations, there are 2 different levels of privacy:

- things you can do anonymously (meaning "without a user account", but you still need an API key)
- things you can do authenticated as a user, involving that user's account ([some examples here](/api/privacy))

there's no middle option, "things you can do as a user, involving other people's accounts".  
things are either public, or locked to only the user involved.  
so there's no need to be logged in as X unless it's for information specific to X's account.

what sorts of things are private?
- inventory changes
  - moving items around/pulling from postmaster/equipping
  - plugging operations
  - locking/unlocking

what sorts of things *may* be private?
- activity history
- collections/triumphs data
- non-equipped inventory

what sorts of things are always public?
- account information
  - Bungie name
  - information about what other accounts are linked/cross-saved
- a player/character's participation entry in a [pgcr](activities/pgcrs)
- an account's characters
- each character's equipped items

things that *may* be private are configured by each Bungie.net user at  
https://www.bungie.net/7/en/User/Account/Privacy
![](/img/privacy.png)