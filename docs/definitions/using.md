# Using the definitions programatically

**Required reading** 
* [fetching stuff](/api)
* [definitions overview](/definitions)
* [fetching definitions](/definitions/fetching)
* [fetching inventories](/inventory)
* [itemType API reference](https://bungie-net.github.io/multi/schema_Destiny-DestinyItemType.html#schema_Destiny-DestinyItemType).

Once the definitions have been fetched, you should decide if you want to use the JSON or SQLite format.

In this example we will use the response to get the [DestinyInventoryItemDefinition](https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyInventoryItemDefinition.html#schema_Destiny-Definitions-DestinyInventoryItemDefinition) object. The response also separates all the definition objects via language, for obvious reasons, which means we have to use the corresponding country code to get the correct object. In this scenario the country code will be `en` (english).

**JSON**

> `Response.jsonWorldComponentContentPaths.en.DestinyInventoryItemDefinition`

**SQLite**

> `query goes here`


To make the process easier for yourself later on, consider declaring a variable that you assign the definitions object to; using whichever route you went to fetch the definitions (SQLite or JSON).

```js
const inventoryItemDefinitions = Response.jsonWorldComponentContentPaths.en.DestinyInventoryItemDefinition;
```

Now we should have our correct definitions object, from the example above we have the `DestinyInventoryItemDefinition` object.

## Looking up items

We will now go through how to reference an item, using the `DestinyInventoryItemDefinition` object. The process (shown below) of referencing an item is always the same, no matter the definitions object.

Use the variable that contains the definitions for inventory items to cross reference with your desired items' `itemHash`. Note this example shows how to reference an item given a specific item hash.
```js
console.log(inventoryItemDefinitions[934704429]);
```
```js
// Output
displayProperties: {
    description: "",
    name: "Reverie Dawn Plate",
    icon: "https://www.bungie.net/common/destiny2_content/icons/80c7cb82785df99640cab3d4d643cd03.jpg",
    hasIcon: true
},
tooltipNotifications: [],
iconWatermark: "https://www.bungie.net/common/destiny2_content/icons/0669efb55951e8bc9e99f3989eacc861.png",
iconWatermarkShelved: "https://www.bungie.net/common/destiny2_content/icons/02478e165d7d8d2a9f39c2796e7aac12.png",
backgroundColor: {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 0
},
screenshot: "https://www.bungie.net/common/destiny2_content/screenshots/934704429.jpg",
... etc
```

A definition of any given item (or most) will include an `itemType` key:value that denotes what type of item it is. For example `itemType: 2` is armour, `itemType: 3` is a weapon etc. [API reference](https://bungie-net.github.io/multi/schema_Destiny-DestinyItemType.html#schema_Destiny-DestinyItemType).

To check if the above item (Reverie Dawn Plate) is armour, we take the output and check the itemType, like so:

```js
if (output.itemType === 2) {
    // This item is an armour piece, do something
};
```

A more conventional form of referencing items would be to request the inventory of a character to, for example, "single out" weapons or armour respectively. [Read here](/inventory) for fetching inventories.

```js
// Fetch character inventory here
const inventoryResponse = '';

// Use your desired character id in the sqaure brackets
const characterInventory = inventoryResponse.Response.characterInventories.data[characterId].items;

// Declare a variable (array) that will contain all armour from the specified character
let characterArmour = [];

for (let item of characterInventory) {
    if (item.itemType === 2) {
        characterArmour.push(item);
    };
};
```

Now, `characterArmour` contains all the armour from the specified character and can be used in whatever way you like.

## Various definitions

The object that is returned from the definitions endpoint contains all the definition objects that could be used to translate items, from hashes, numbers and other unreadable information, into plain english. Below you will find a brief description of some of the most commonly used definition objects.

#### DestinyInventoryItemDefinition
>Contains information on general items such as: weapons, armour, currency, quests, emblems, shaders etc. [API Reference](https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyInventoryItemDefinition.html#schema_Destiny-Definitions-DestinyInventoryItemDefinition).

#### DestinyProgressionDefinition
>Contains information on progression items such as: factions, war table, clan levels, vendor levels etc. These definitions are generally only useful when combined with live data, as definitions never contain live data such as a given profiles' progress on the seasonal artifact or season pass. [API Reference](https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyProgressionDefinition.html#schema_Destiny-Definitions-DestinyProgressionDefinition).

#### DestinyVendorDefinition
>Contains information on vendors such as: Commander Zavala, Banshsee-44, Ikora Rey, Hawthorne etc. Generally the NPCs in-game that you can buy stuff from are considered to be vendors. These definitions are also commonly used with live data. [API Reference](https://bungie-net.github.io/multi/schema_Destiny-Definitions-DestinyVendorDefinition.html#schema_Destiny-Definitions-DestinyVendorDefinition)

#### DestinySeasonDefinition
>Contains information on the current season. This contains general information about the season like: The name of the season, Start date, End Date etc. It also includes all the hashes for the seasonal progression items such as the season pass, seasonal artifact, and season pass progression. These definitions are also commonly used with live data. [API Reference](https://bungie-net.github.io/multi/schema_Destiny-Definitions-Seasons-DestinySeasonDefinition.html#schema_Destiny-Definitions-Seasons-DestinySeasonDefinition)