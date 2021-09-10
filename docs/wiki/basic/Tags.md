---
title: Tags
tag: misc
category: Misc
icon: tag
---

A `Tag` is a new system introduced in Minecraft 1.13 that allows users to group one or more item, block, entity identifiers under a single group known as a tag. GriefDefender integrates into the tag system and exposes all available tags as contexts that can applied with a flag or option.

For example, lets say you wanted to allow interaction with the following standing signs 

* oak_sign, spruce_sign, birch_sign, acacia_sign, jungle_sign, dark_oak_sign, crimson_sign, warped_sign 

Without tags, you would have to create a flag that targets each sign identifier like so via flag command

```
/cf interact-block-secondary oak_sign true
/cf interact-block-secondary spruce_sign true
/cf interact-block-secondary birch_sign true
etc..
```

This would become tedious very quickly and clutter up your permissions.  

With the tag system, you can use the delivered tag for all standing signs named [#standing_signs](https://minecraft.gamepedia.com/Tag#blocks_standing_signs)

So the above commands would become one single command

```
/cf interact-block-secondary #standing_signs
```

This gives the user extreme flexibility for protecting not just one thing but many.  
Note: Tag names will ALWAYS begin with the character `#`  

Now let's assume you have special needs and the delivered vanilla tags do not provide everything for your server.  
This is where a [Data Pack](https://minecraft.gamepedia.com/Data_Pack) would come into play.  

A [Data Pack](https://minecraft.gamepedia.com/Data_Pack) allows a server admin to enhance the minecraft experience with custom advancements, recipes, loot tables, tags, and more. 

To create a datapack to use custom tags for your server , the following would have to be done  

1. Navigate to world folder you want to use datapack in.  
Ex. `./world/datapacks`  
2. Create a datapack by following instructions [here](https://minecraft.gamepedia.com/Data_Pack)  
Note: The datapacks folder structure should be setup as follows within the world folder  
```
datapacks/
└── <datapack_name>/
    ├── data/
    │   ├── <namespace>/
    │   │   ├── tags/
    │   │   │   ├── blocks/
    │   │   │   ├── entity_types/
    │   │   │   ├── fluids/
    │   │   │   └── items/
    │   │   └── other...
    │   └── 
    └── pack.mcmeta

Note: An actual example can be found in the root of the minecraft server jar within folder `data`  
```  
3. Create as many tags as you want within your datapack and add any other custom data you require inside it.  
4. Launch server  
5. Verify your datapack has been loaded by running command `/datapack list enabled`. See [DataPack Command](https://minecraft.gamepedia.com/Data_Pack) for more info  
Note: If your datapack is not enabled then your datapack structure shown in step 2 is most likely wrong.  

If you managed to load your datapack successfully, GD will automatically load all tags into its context registry for you to use with flags.

To verify tags are working with specific actions in GriefDefender, run the `/gddebug` command and check the context column which will display any tags if used.