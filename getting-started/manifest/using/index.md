# using the definitions programatically

## what are they?
the definitions contain the words, titles, names, images, etc. which help translate raw data like

> `"itemHash":1022552290,"quantity":23962`

into friendlier shapes like

> "the user has 10 ![](https://www.bungie.net/common/destiny2_content/icons/b3e829460a53354a92d8f893c44db3b7.png) Legendary Shards"

they are **exhaustive**:
- if you want "a list of **all weapons**" or **all perks**, or **all mods**, all versions of **all armor**, what you need is the definitions  
all tables are just JSON dictionaries. enumerate all their values and you have a list of everything
- **triumphs**, **seasonal challenges**, **collections**, etc. are node trees, structured like they are in-game
 - you can follow them through parent/child lists, and assemble the tree [more](../trees)

## what are't they?
- they are static data, updated every few weeks or months. they aren't anyone's current **inventory**
- they don't have **enemy units** (dreg/vandal/etc)
- they don't have a lot of **sandbox** and **gameplay** numbers/stats
 - no **range** in meters. no **damage numbers**. impact & range stats are abstractions
 - they don't have accurate **magazine stats**. these are adjusted by gameplay scripts, and though many seem right/almost, others just aren't

## procedures
- [fetch the defs](fetching)
- [decoding](decoding)
- [consuming defs data](consuming)