---
title: PGCRs
---

# postgame carnage reports

### about
a postgame carnage report is the data structure that describes what happened in an instance.  
it has kill counts, scores, teams, fireteams, medals, etc.

an **"instance"** for the purposes of a PGCR, might be a series of patrol areas on the same planet, excluding other fireteams who wander by.  
but in most other types of activity, it's the same shared instance for everyone on your team, on an opposing team, people who cycle in and out of the party, etc.  
an instance generally ends when everyone leaves. as long as someone is still in the instance, it continues.  
you can ship-of-theseus it, until none of the original players is there, but as long as there was always a player in it, it is still the same instance.

if your whole team leaves a raid halfway through, then launches it again, that's a new instance. it may start from a checkpoint, but it's a separate copy of the game world. all the ammo drops and debris are gone, your kill counters are fresh, etc.  
API-wise, there's no fixed/guaranteed way to link those two PGCRs.  
if you want, you can assume they're related, from the fact that it's the same 6 people, and the first one wasn't completed, but that's it.  
raid PGCRs used to show whether they were fresh or started at a checkpoint, but they [no longer do](https://github.com/Bungie-net/api/issues/1320)

they increment serially. there's a PGCR 1, a PGCR 2, etc.  
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

if a PGCR doesn't exist, *usually* because it hasn't been created yet, you'll probably get this error:
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
- `startingPhaseIndex` rest in peace
- `teams` **exists even when there aren't teams**, but it will be empty