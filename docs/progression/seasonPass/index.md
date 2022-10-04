## Fetching Season Pass Progression

### You'll need
- [DestinySeasonPassDefinition](https://bungie-net.github.io/multi/schema_Destiny-Definitions-Seasons-DestinySeasonPassDefinition.html#schema_Destiny-Definitions-Seasons-DestinySeasonPassDefinition)
- [DestinySeasonDefinition](https://bungie-net.github.io/multi/schema_Destiny-Definitions-Seasons-DestinySeasonDefinition.html#schema_Destiny-Definitions-Seasons-DestinySeasonDefinition)

## How-To
You can fetch all character progression data from the `GetProfile` endpoint with the `104` component present in the request URL:<br>
`https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${destinyMembershipId}/?components=104,202`

Once you have the response you are able to see all of the progressions that are global to the entire profile, as opposed to a specified character. This is because we also used component `202`. You can remove this component if you do not need to access this data.

From the initial response you can find progression data, concatenating a `characterId` like this:<br>
`.data.Response.characterProgressions.data[characterId].progressions`

You should now be able to access something like this:

![image](https://user-images.githubusercontent.com/56489848/193789416-8e4d4db4-2da4-42ae-933c-8c8b7e0fcb69.png)

This is an object that contains `key:values` for all progressions, present on the specified character (using `characterId`).

Each key represents a progression hash and the value contains the progression data.

## Getting the current season

We have a characters progressional data but now we have to fetch the progression hash for the current season, and use the manifest/definitions to "translate" it.

You are easily able to get the current season hash from the same `GetProfile` response object.
`.data.Response.profile.data.currentSeasonHash`

We then need to use DestinySeasonDefinitions to get the current season pass `seasonPassProgressionHash`, by doing this:
`DestinySeasonDefinitions[currentSeasonHash].seasonPassProgressionHash`

## Putting it all together

### We have

- Character progressions
- seasonPassProgressionHash

Index our character progressions using the seasonPassProgressionHash. That should return something like this:
<img width="226" alt="image" src="https://user-images.githubusercontent.com/56489848/193799439-a2578a37-e3b7-4de0-8b8d-0414dd73ec63.png">

**Note:** *If a user is over level 100 on the season pass, this progression will no longer be touched. This means that the player has now "prestiged". (I know right, sounds unique for Destiny) Progression data for season pass levels now exists in its prestige progression counterpart.*

### Prestige progressions

When a user exceeds level 100, the above season progression is no longer used.
todo



