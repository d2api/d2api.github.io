#### the manifest/definitions

some people say "the manifest"  
if you're josh it's "the definitions"  
technically "the manifest" is what you check, to learn where to download "the definitions"  
  
definitions contain the words, titles, names, images, etc. which help translate raw data like  
`"itemHash":1022552290,"quantity":23962`  
into friendlier shapes like  
"the user has 10 ![](https://www.bungie.net/common/destiny2_content/icons/b3e829460a53354a92d8f893c44db3b7.png) Legendary Shards"

### exploring definitions

[data.destinysets.com](https://data.destinysets.com/) is a lovely interface that lets you explore the definitions data  
note things like:
- there's multiple tables (`Filters > Table name`)
  - each of these contains a different type of data: vendors, items, perks, activities, damage and energy types, etc  
  - however 90% of the ice berg is InventoryItems.  
  guns and armor are items, engrams are items, quests are items, emblems are items, emotes are items, mods are items.  
  rampage is an item. rampage _spec_ is an item. meat made of cabal is an item.
- within each table, the structure and properties of each entry are very similar.  
  - if you see one item has a `flavorText` or `stats` property, that's because many items will have those.
  no freeform one-off data here. they wouldn't be useful if you can't expect them to be there.
  - these expectations are established by the [API specification](api-spec)
- if you're comfortable in JavaScript, you can mess around with this data programatically in the browser console of this interface

this definitions data is [delivered](#fetching-definitions) from bungie.net as either sqlite database(s) containing JSON snippets, or large file(s) full of JSON data.  

they're not comfortable to read raw, nor easy to open or explore as text, so expect to use code or other interpreters to [work with the definitions data further](#using-definitions)

### fetching definitions

step 1 of getting definitions data is learning where to download the current defs.  
the defs URLs will change season-to-season as new items are introduced, and week-to-week as game updates happen or entries are declassified. so we need a consistent way to find out what they are:

you'll use the [/Manifest/ endpoint](https://bungie-net.github.io/multi/operation_get_Destiny2-GetDestinyManifest.html) to get this info.  
the returned format is a [JSON Object (dictionary)](https://bungie-net.github.io/multi/schema_Destiny-Config-DestinyManifest.html) with version numbers, and paths keyed by language and data table type. looks like this:

```json
{
  "Response": {
    "version": "97762.21.09.15.0038-0-bnet.40222",
    "mobileWorldContentPaths": {
      "en": "/common/destiny2_content/sqlite/en/world_sql_content_c41e799c128f0c26d2fea1676d9ee8b7.content",
      "fr": "/common/destiny2_content/sqlite/fr/world_sql_content_a3f6924b0d08251daf987f709b674053.content"
    },
    "jsonWorldContentPaths": {
      "en": "/common/destiny2_content/json/en/aggregate-df567aed-6547-48cc-8195-bfae095f6ed7.json",
      "fr": "/common/destiny2_content/json/fr/aggregate-df567aed-6547-48cc-8195-bfae095f6ed7.json"
    },
    "jsonWorldComponentContentPaths": {
      "en": {
        "DestinyActivityDefinition": "/common/destiny2_content/json/en/DestinyActivityDefinition-df567aed-6547-48cc-8195-bfae095f6ed7.json",
        "DestinyActivityTypeDefinition": "/common/destiny2_content/json/en/DestinyActivityTypeDefinition-df567aed-6547-48cc-8195-bfae095f6ed7.json",
        "DestinyClassDefinition": "/common/destiny2_content/json/en/DestinyClassDefinition-df567aed-6547-48cc-8195-bfae095f6ed7.json",
        "DestinyInventoryItemDefinition": "/common/destiny2_content/json/en/DestinyInventoryItemDefinition-df567aed-6547-48cc-8195-bfae095f6ed7.json",
```

choose your path, add the prefix `https://www.bungie.net`, and fetch those defs

### using definitions

???