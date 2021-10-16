### exploring definitions

[data.destinysets.com](https://data.destinysets.com/) is a lovely interface that lets you explore the definitions data.  
note things like:
- there's multiple tables (`Filters > Table name`)
  - each of these contains a different type of data: vendors, items, perks, activities, damage and energy types, etc  
  - however 90% of the iceberg is InventoryItems.  
  guns and armor are items, engrams are items, quests are items, emblems are items, emotes are items, mods are items.  
  rampage is an item. rampage _spec_ is an item. meat made of cabal is an item.
- within each table, the structure and properties of each entry are very similar.  
  - if you see one item has a `flavorText` or `stats` property, that's because many items will have those.
  no freeform one-off data here. they wouldn't be useful if you can't expect them to be there.
  - these expectations are established by the [API specification](api-spec)
- if you're comfortable in JavaScript, you can mess around with this data programatically in the browser console of this interface. open the console and check out the examples.

this definitions data is retrieved from bungie.net as either sqlite database(s) containing JSON snippets, or large file(s) full of JSON data.  
they're not comfortable to read raw, nor easy to open or explore as text, so if you want to use these in an application, expect to use code or other interpreters to [work with the definitions data further](using)