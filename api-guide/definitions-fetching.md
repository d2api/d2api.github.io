## fetching definitions

step 1 of fetching definitions data is learning where to download the current defs.  
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