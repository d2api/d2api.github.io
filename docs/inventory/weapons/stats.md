# weapon stats

### where do weapon stats come from?
weapon stats are a combination of the weapon's base stats, plus any bonuses or penalties added by its perks, mods, and masterworks

### how do i get a real (instanced) weapon's stats?
- easy mode: get its live stats via the `ItemStats` component (304).
  - look its stats up using its instanceId. voila.
  - what's the downside? no details. if stability is 94, we don't know *why* stability is 94.  
  is the masterwork contributing? did fluted barrel help? all we know is bungie.net calculates the stability is 94.
- harder mode: build weapon stats from its sockets, using the `ItemSockets` component (305).
  - an item's sockets is represented as an array of `DestinyItemSocketState`
  - each `DestinyItemSocketState` has a `plugHash` property that shows what item is plugged into that socket, and a `isEnabled` property to say whether that item's contribution should be included
  - each plugged item (a `DestinyInventoryItemDefinition`) may contribute stats to the weapon. check to see if that item has an `investmentStats` property
  - once you've combined the stat contributions of all items plugged into the sockets, that total is transformed using [investment scaling](/inventory/weapons/investment-scaling)

### how do i get a fake/default/definitions-only weapon's stats?
- same as above, except using only the definition, and the weapon's default sockets
  - `DestinyInventoryItemDefinition.sockets.sockets.socketEntries` shows an item's default & possible sockets
  - each socket's `singleInitialItemHash` is the default thing plugged into that socket
  - calculate as above
  - or get really complex and use various `PlugSetHash`es to see all possibilities for that socket