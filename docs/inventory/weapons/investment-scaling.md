# investment scaling

the most obvious example of how investment stats work is for weapon magazines

- go here: https://data.destinysets.com/i/InventoryItem:1096206669/StatGroup:770484158
- open up `▶ 6`
- open up `▶ displayInterpolation`
- open up `▶ 0` through `▶ 10`

this shows how a `0` magazine stat, gives you 4 shots in your shotgun,  
and a `50` magazine stat, gives you 6 shots,  
and at most, you can fit 8 shots

note how the ranges work: it takes very few stat points to bump 4 up to 5, but a bunch to get 7 up to 8.  
the purpose of investment scaling is to control maximums, minimums, and how hard it is to improve/change stats with mods/perks/barrels, magazines, etc.

here's some more information on implementing this kind of thing:  
https://www.reddit.com/r/DestinyTheGame/comments/d8ahdl/dim_updates_stat_calculation_for_shadowkeep/
