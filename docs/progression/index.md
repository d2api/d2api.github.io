# User Progression Data

### You may want
- [Season Pass Progression]()
- [Season Artifact Progression]()

Player progression data comes from the live data endpoints (not the definitions). 

An example of this data could be what level that player is on their season pass. 
This can be found on the endpoint `GetProfile` with components `104` and `202`.

Component `104` refers to profile progressions<br>
Component `202` refers to character progressions

The endpoint URL will look like this:
`https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${destinyMembershipId}/?components=104,202`

Encase the URL string in template literals so that you can concatenate `membershipType` and `destinyMembershipId`, as seen above.

## This does include

- Pinnacle Challenges (Awards pinnacle item)
- Powerful Challenges (Awards powerful item)
- Vendor Ranks (e.g. Banshee-44 vendor rank)

## This doesn't include

- Bounties
- Quests
- Seasonal Challenges

Note: Bounties are returned as an inventory item and can be differentiated via `itemType === 26`
