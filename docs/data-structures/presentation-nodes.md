# presentation nodes

node trees are used to hold lots of data, like Collections, Triumphs, Catalysts, Metrics, Medals, etc.

they're a hierarchical structure where each branch node can have multiple children.  
a node's children can be other presentation nodes, collectibles, metrics, craftables, or records (triumphs)

an example:
```
                                      PresentationNode
                                         Collections
                                       ↙            ↘
                            PresentationNode      armor, mods,
                                "Weapons"          flair, etc
                              ↙           ↘
                   PresentationNode       special,
                       "Primary"         heavy, etc
                    ↙             ↘
          PresentationNode      sidearms, bows
           "Hand Cannons"      auto rifles, etc
          ↙              ↘
  Collectible           some other hand
"Kindled Orchid"      cannon collectibles
```

## root nodes
many of the top level nodes are available through the `destiny2CoreSettings` key in [the settings endpoint](/api/endpoints/settings)'s data

if you want to enumerate collections data, instead of hardcoding `3790247699` in your app, just load the current d2 settings and check the value of `collectionRootNode`

there's lots of these, including node hashes for `collection`, `badges`, `records`, `medals`, `metrics`, `activeTriumphs`, `activeSeals`, `legacyTriumphs`, `legacySeals`, `medals`, `exoticCatalysts`, `lore`, `crafting`