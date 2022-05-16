# activity history

some terminology:

**instance**: an ongoing slice of the game world, maintained for players to do stuff in. an instance generally ends when everyone leaves.

**instanceId**: this is an individual number that points to an instance[*](footnote). if you run a strike, or a mission, or do a patrol, there's an instanceId that will point to a record of doing that activity.

**PGCR**: a postgame carnage report. the "record of doing that activity" mentioned above. a PGCR is the data structure that describes what happened in an instance. it has kill counts, scores, teams, fireteams, medals, etc.


more details about:
- [postgame carnage reports](pgcr)
- collecting [a player's activity history](activities)
- collecting [everyone's activity history](the-big-scrape)
