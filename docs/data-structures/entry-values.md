## DestinyPostGameCarnageReportEntry.values

inside each `DestinyPostGameCarnageReportEntry` is a `values` property that houses information about **that** character's data in the activity

this is advertised by the spec as a generic dictionary containing unknown keys, each of which points to a [`DestinyHistoricalStatsValue`](https://bungie-net.github.io/#/components/schemas/Destiny.HistoricalStats.DestinyHistoricalStatsValue)

in practice, here's some keys that are probably inside the `values` dictionary:
- globally
  - `assists`
  - `completed`
  - `completionReason`
  - `deaths`
  - `efficiency`
  - `fireteamId`
  - `kills`
  - `killsDeathsAssists`
  - `killsDeathsRatio`
  - `opponentsDefeated`
  - `score`
  - `teamScore`
  - `activityDurationSeconds` - the activity overall
  - `startSeconds` - how many seconds after start, that this character joined
  - `timePlayedSeconds` - how much time this character spent in the activity
- in team activities
  - `team` - yes this is usually "18" and "19". who knows why.
- in pvp activities
  - `averageScorePerKill`
  - `averageScorePerLife`

\* this may be a second or a couple seconds, even for characters who were there in the activity from launch.  
in PVE, it will typically be 0 for the fireteam leader.

## DestinyHistoricalStatsValue
it's is a complex beast in theory, offering fields like `statId`, `basic`, `pga`, `weighted`, `activityId`  
but in practice, in a PGCR, you'll just find a `basic` property, which stores a numeric, and a display value, for that stat.

```jsonc
// this is silly. we know 23 is 23
{
  "value": 23,
  "displayValue": "23"
}

// these are more helpful
{
  "value": 0,
  "displayValue": "Objective Completed"
}
{
  "value": 1223,
  "displayValue": "20m 23s"
}
```

## completionReason
`completed` and `completionReason` work in tandem to determind the "outcome" of the activity for this character.
see: [completionReason](/data-structures/completion-reasons)