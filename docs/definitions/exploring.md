# exploring definitions

required reading: [definitions overview](definitions)

## how can i check the definitions out?

[data.destinysets.com](https://data.destinysets.com/) is a lovely interface that lets you explore the definitions data.  
things to note as you look around:
- there's multiple tables (the `Filters` button has a list, under `Table name`)
  - each table contains a different type of data: there's one for vendors, one for items, one for perks, activities, damage and energy types, etc
  - 90% of the iceberg is InventoryItems:  
  guns and armor are items, engrams are items, quests are items, emblems are items, emotes are items, mods are items.  
  Rampage is an item. Rampage _Spec_ is an item. meat made of cabal is an item
- within each table, the structure and properties of each entry are very similar
  - you may see one InventoryItem entry has a `flavorText` or `stats` property. this is a sign that many other InventoryItem entries will also have these properties
  - there aren't freeform or one-off properties. definitions entries aren't useful data if an application doesn't know where to look and what to expect
  - the [API specification](/api/spec) outlines what data you can expect inside definitions
- if you're comfortable writing JavaScript, you can play with this data programatically: there are examples shown if you open the console

## what's next?

this definitions data is retrieved from Bungie.net as sqlite database(s), or large file(s) full of JSON data. so:  
they're not comfortable to read raw, nor easy to open or explore as text.  
if you want to use these definitions for some purpose, you should
- learn how to [download the definitions data](/definitions/fetching)
- and expect to write code or use other utilities to [work with definitions data](/definitions/using)
