# activities

some terminology:

**instance**: an ongoing slice of the game world, maintained for players to do stuff in. an instance generally ends when everyone leaves.

**PGCR**: a postgame carnage report. the "record of doing that activity" mentioned above. a PGCR is the data structure that describes what happened to **a certain group of people** in an instance.  
it has players, characters, kill counts, scores, teams, fireteams, medals, etc.

**instanceId**: this is an individual number that points to a PGCR, not an instance. if you run a strike, or a mission, or do a patrol, there's an instanceId that will point to a record of you doing that activity.


more details about:
- [postgame carnage reports](activities/pgcrs)
- collecting [a player's activity history](activities/history)
- collecting [everyone's activity history](activities/the-big-scrape)
