# armor stats

### where do armor stats come from?
armor stats are a combination of the armor's base stats, plus any bonuses or penalties added by its mods, masterwork, and rolled stats

### how do i get a real (instanced) armor's stats?
- easy mode: get its live stats via the `ItemStats` component (304).
  - look its stats up using its instanceId. voila.
  - what's the downside? no details. if mobility is 30, we don't know *why* mobility is 30.  
  is the masterwork contributing? is a mobility mod attached? all we know is bungie.net calculates the mobility is 30.
- medium mode, don't do this:
  - get its live stats via the `ItemStats` component (304)
  - assume 10 is from the mobility mod you see attached, and assume 2 is from the masterwork because it's masterworked
  - why this doesn't work: if an armor stat is 0 or 42 in `ItemStats`, it may just have its value capped. armor can actually controbute negative or >42 to a character's overall stats.
- harder but correct mode: build armor stats from its sockets, using the `ItemSockets` component (305).
  - an item's sockets is represented as an array of `DestinyItemSocketState`
  - each `DestinyItemSocketState` has a `plugHash` property that shows what item is plugged into that socket, and a `isEnabled` property to say whether that item's contribution should be included
  - each plugged item (a `DestinyInventoryItemDefinition`) may contribute investmentStats to the armor.

#### example time

we have some orpheus rigs. instanced, real ones. in someone's inventory. this item's instance ID is 11111222223333344444

we can see they have 12 sockets, 
<details>
  <summary>from their definition</summary>

https://data.destinysets.com/i/InventoryItem:193869523

![](/img/origs.png)

</details>

<details>
  <summary>and from their live data</summary>

```json
{
  "itemComponents": {
    "sockets": {
      "data": {
        "11111222223333344444": {
          "sockets": [
            // socket 0
            {    "plugHash": 2623485440,
                 "isEnabled": true,
                 "isVisible": true         },
            // socket 1
            {    "plugHash": 573150099,
                 "isEnabled": true,
                 "isVisible": true         },
            // socket 2
            {    "plugHash": 573150099,
                 "isEnabled": true,
                 "isVisible": true         },
            // socket 3
            {    "plugHash": 3523075120,
                 "isEnabled": true,
                 "isVisible": true         },
            // socket 4
            {    "plugHash": 4248210736,
                 "isEnabled": true,
                 "isVisible": true         },
            // socket 5
            {    "plugHash": 4264493517,
                 "isEnabled": true,
                 "isVisible": true         },
            // socket 6
            {    "plugHash": 2287381891,
                 "isEnabled": true,
                 "isVisible": false         },
            // socket 7
            {    "plugHash": 2411971911,
                 "isEnabled": true,
                 "isVisible": false         },
            // socket 8
            {    "plugHash": 3976251931,
                 "isEnabled": true,
                 "isVisible": false         },
            // socket 9
            {    "plugHash": 2417304911,
                 "isEnabled": true,
                 "isVisible": false         },
            // socket 10
            {    "plugHash": 702981643,
                 "isEnabled": true,
                 "isVisible": true         },
            // socket 11
            {    "plugHash": 1694242449,
                 "isEnabled": true,
                 "isVisible": true         }
          ]
        }
      }
    }
  }
}

```

</details>

orpheus rigs themselves have some built in stats. 2 points of mobility.

<details>
  <summary>we can see this in their definition</summary>

```json
"stats": {
  "disablePrimaryStatDisplay": false,
  "statGroupHash": 3568793270,
  "stats": {
    // [...]
    "2996146975": {
      "statHash": 2996146975, // Mobility
      "value": 2,
      "minimum": 0,
      "maximum": 0,
      "displayMaximum": 42
    },
    // [...]
  },
  "hasDisplayableStats": true,
  "primaryBaseStatHash": 3897883278
}
```

</details>

to get the total stats of this item, we add up its stats, plus the investmentStats of its plugged items.

socket 0 has the item [2623485440](https://data.destinysets.com/i/InventoryItem:2623485440) plugged in.  
we look this InventoryItem up and get "Minor Discipline Mod". it contributes 5 Discipline (and uses up 1 armor energy)
```json
"investmentStats": [
  {    "statTypeHash": 3578062600, // Any Energy Type Cost
       "value": 1,
       "isConditionallyActive": false                       },

  {    "statTypeHash": 1735777505, // Discipline
       "value": 5,
       "isConditionallyActive": false                       }
],
```

sockets 1 and 2 contain [573150099](https://data.destinysets.com/i/InventoryItem:573150099)  
we look these up and they're "Empty Mod Socket" and contribute no investmentStats.  
same stats on sockets 4 (Default Shader) and 10 (Default Ornament)
```json
"investmentStats": [],
```

socket 3 is [3523075120](https://data.destinysets.com/i/InventoryItem:3523075120) Protective Light  
it adds -10 Strength (and uses up 2 void armor energy)
```json
"investmentStats": [
  {    "statTypeHash": 2399985800, // Void Cost
       "value": 2,
       "isConditionallyActive": false            },

  {    "statTypeHash": 4244567218, // Strength
       "value": -10,
       "isConditionallyActive": false            }
],
```

socket 5 is [4264493517](https://data.destinysets.com/i/InventoryItem:4264493517) "Upgrade Armor", the armor's energy level.  
from its definition we can see this is a masterwork, because it adds 2 to each armor stat, and contributes 10 void energy capacity.
note how in its definition, under `plug`, its various styles note it should be displayed as a masterwork.
```json
"investmentStats": [
  {    "statTypeHash": 16120457, // Void Energy Capacity
       "value": 10,
       "isConditionallyActive": false    },
  {    "statTypeHash": 2996146975, // Mobility
       "value": 2,
       "isConditionallyActive": false    },
  {    "statTypeHash": 392767087, // Resilience
       "value": 2,
       "isConditionallyActive": false    },
  {    "statTypeHash": 1735777505, // Discipline
       "value": 2,
       "isConditionallyActive": false    },
  {    "statTypeHash": 144602215, // Intellect
       "value": 2,
       "isConditionallyActive": false    },
  {    "statTypeHash": 1943323491, // Recovery
       "value": 2,
       "isConditionallyActive": false    },
  {    "statTypeHash": 4244567218, // Strength
       "value": 2,
       "isConditionallyActive": false    }
],
```

sockets 6, 7, 8, and 9 are random roll stat plugs. #6 is [2287381891](https://data.destinysets.com/i/InventoryItem:2287381891)  
these 4 sockets contain plug items with no name, which contribute stat points across up to 3 stats.  
note how they say `"isVisible": false` and their definitions have various forms of `plugStyle: none`  
these plugs have nothing to display in an app, but do contribute to the item's stats

the last socket [1694242449](https://data.destinysets.com/i/InventoryItem:1694242449) is Uncanny Arrows, the exotic item's perk. this contribute's no stats, per its definition.

adding up the stats we collected from the masterwork, mods, and random stat plugs, **and those bonus 2 mobility from orpheus rigs itself**, we get the item's final stat total.  
this method can properly handle single-stat totals above 42, or below 0.

### how do i get the stats for the collection roll?
- same as above, except using only the definition, and the armor's default sockets
  - `DestinyInventoryItemDefinition.sockets.sockets.socketEntries` shows an item's default & possible sockets
  - each socket's `singleInitialItemHash` is the default thing plugged into that socket
  - calculate as above
