# Using the definitions programatically

**Required reading** 
* [definitions overview](definitions)
* [fetching definitions](/definitions/fetching)gi

Once the definitions have been fetched, you should decide if you want to use the JSON or SQLite format.

> **JSON**

`Response.jsonWorldComponentContentPaths.en[definitionObjectNameGoesHere]`

> **SQLite**

`SELECT idk FROM SQLite WHERE * lol`


## Looking up items

You should now have a definitions object for your desired item type; inventory items, progressions, etc.

Access the definition for your desired item by first assigning your definitions object to a variable so you can use it easier. Then you take your desired items' hash and you pass it into the definitions object as if you are finding an index in an array.

`definitionsVariable[item.itemHash]`

```json
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

From this point you will have access to all of the items' properties that could possibly be shown (from the definitions anyways).
Some commonly used item properties live in `.displayProperties` and `.inventory`.