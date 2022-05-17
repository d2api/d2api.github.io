---
title: PGCRs
---

# postgame carnage reports

### about
a **postgame carnage report** (PGCR) is the data structure that describes what happened in an **instance**.  
it has players, characters, kill counts, scores, teams, fireteams, medals, etc.

for the purposes of a PGCR, an **instance** is a continuous activity, from start, until nobody's left in it.

fireteam-only instances:
- a party launches a raid, and completes it. now the instance is over.
- a party launches a raid, decides not to raid, everyone leaves. now the instance is over.
- a party launches a raid, completes some encounters, decides to finish tomorrow, everyone leaves. now the instance is over.
- a party launches a raid, some people leave, others join, more leave, eventually none of the original people are in that raid. it's **still not over** until all the replacements leave.

shared instances:
- a player launches a crucible match. the match ends. now the instance is over. teammates and opponents will show up on the PGCR.
- a player launches a crucible match. they leave midway. the instance is **still going** until all players have finished. teammates and opponents will show up on the PGCR. if someone matchmakes in as a replacement, that player & character will also be on the PGCR.
- a player launches a matchmade strike, hunt, or seasonal activity. they complete it. now the instance is over. their teammates will show up on the PGCR.
- planetary patrols and planetary matchmaking are a little different. a player runs around with blueberries on the tangled shore, or sees passerby while beginning a strike. this doesn't include them on the player's PGCR. the instance is over and the PGCR is generated when the player/fireteam leave the planet.

if your whole team leaves a raid halfway through, then launches it again and finishes, that's a new instance and a new PGCR. it may start from a checkpoint, but it's a separate copy of the game world. all the ammo drops and debris are gone, your kill counters are fresh, etc.  

API-wise, there's **no fixed/guaranteed way to link those two PGCRs.**  
if you want, you can assume they're related, from the fact that it's the same 6 people, and the first one wasn't completed, but that's up to you.  

raid/resumable PGCRs used to show whether they were fresh or started at a checkpoint,  
but ~~[they no longer do](https://github.com/Bungie-net/api/issues/1320)~~  
~~this was fixed~~  
[activityWasStartedFromBeginning is currently inconsistent/wrong](https://github.com/Bungie-net/api/issues/1601)

PGCR IDs increment serially. there's a PGCR 1, a PGCR 2, etc.  
say hi to StyxBoatman on https://www.bungie.net/en/PGCR/1 :)  
he has a twitter account last i checked.

### fetching PGCRs with the API

endpoint spec: https://bungie-net.github.io/#Destiny2.GetPostGameCarnageReport

all it takes to request a PGCR is its instanceId:
- you don't need to know any of the players involved.
- you don't need oauth for a participant.
- they can't be kept private.  

basically, just hit this URL with an API key  
`https://stats.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/123456789/`  
to get the PGCR for instance #123456789

if a PGCR doesn't exist, it's *usually* because it hasn't been created yet. you'll get a 404 HTTP status code, accompanied by this JSON:
```json
{
  "ErrorCode": 1653,
  "ThrottleSeconds": 0,
  "ErrorStatus": "DestinyPGCRNotFound",
  "Message": "The activity you were looking for was not found.",
  "MessageData": {}
}
```

### PGCR data
- `period` property is a timestamp of when the activity *began*
- `activityDetails` shows which activity was played, among other things
- `startingPhaseIndex` rest in peace. "no longer supported"
- `activityWasStartedFromBeginning` replacement for startingPhaseIndex. flaky?
- `teams` **exists even when there aren't teams**, but it will be empty