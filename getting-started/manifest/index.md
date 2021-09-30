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

this definitions data is delivered from bungie.net as either sqlite database(s) containing JSON snippets, or large file(s) full of JSON data.  
they're not comfortable to read raw, nor easy to open or explore as text, so expect to use code or other interpreters to work with the definitions further

### fetching definitions

### using definitions