---
title: Configuration
tag: Info
category: info
icon: config
---

## Configuration

GriefDefender includes various configuration files for admins. The current available config files are the following  

```
bans.conf
blacklist.conf
claimnames.conf
flags.conf
global.conf
gui.conf
options.conf
storage.conf
```

### Bans  

The `bans.conf` file stores all global and world ban data performed by the ban command `/claimban`.  

| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| blocks | A map of banned block id's and messages | [ ] |
| entities | A map of banned entity id's and messages | [ ] |
| items | A map of banned item id's and messages | [ ] |

You will find two sections within this file : `global` and `worlds`.  
The global section is used to store a list of global banned blocks, entities, and items. 
The worlds section is used to store a list of world specific banned blocks, entities, and items.

Bans will be stored in format `"modid:id"=<message>""`  
Ex. `"minecraft:axolotl_bucket"=""`  

#### Ban command  

The following commands can be used to ban a block, entity, or item :  `/claimban` or `/gd ban`  
This command supports the following arguments `hand | <type> <target> [worldname] [message]`  

`hand` - Uses the item held in main hand. Note: This only works when banning items.  
`type` - The type to ban : `block`, `entity`, or `item`.  
`<target>` - The target id to ban. This is tab complete supported. You can specific a single id or use a tag. Ex. `minecraft:tnt` , `minecraft:enderpearl`, `#minecraft:signs`  
`[worldname]` - A world name can be specified at end of command which will instruct GD to only ban in the world the player is in.  
`[message]` - A ban message can be added to end of command which will be shown to player if interacting with a banned block, entity, or item.  


### Blacklist
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| flag-id-blacklist | A list of id's ignored by flags. | [ ] |
| global-source | A global list of source id's that are ignored by events. <br />Note: This only affects events where the id specified is the source. | [ ] |
| global-target | A global list of target id's that are ignored by events. <br />Note: This only affects events where the id specified is the target. | [ ] |
| entity-damage-source-blacklist | A global list of entity damage sources that are ignored in events by default. | [contact,cramming,drowning,<br />"falling_block",flyintowall,"fire_tick",<br />"hot_floor",poison,starvation,suffocation,<br />suicide,void] |

The blacklist controls events from interacting with items, blocks, or entities on either a per-flag or global basis. Blacklists are extremely useful as it allows you to force GD to ignore actions in a world you do not need protected. By doing this, you prevent GD from wasting resources when it attempts to protect. To determine what you want to prevent GD from controlling, you will need to run a [GDDebug](https://github.com/bloodmc/GriefDefender/wiki/Debugging) in order to gather the data needed for the config. See [User Contributions](https://github.com/bloodmc/GriefDefender/wiki/Optimizations#optimization-contributions) for some examples on how to use it.  

It supports wildcards `?` and `*` where `?` represents a single character and `*` represents zero or more characters.
For more info you can go to [Apache's wildcard matcher.](https://commons.apache.org/proper/commons-io/javadocs/api-2.5/org/apache/commons/io/FilenameUtils.html#wildcardMatch(java.lang.String,%20java.lang.String))

To add an item into the blacklist simply add the ID between a set of quotation marks.

An example of how to block items from being checked by GD is as shown

`block-break=["modID:itemID"]`


### Claimnames  

See [Claim Identifiers](https://github.com/bloodmc/GriefDefender/wiki/Claim-Management#claim-identifiers)  

The `claimnames.conf` file is used to store a mapping of player UUID to friendly claim names.  

```
e035f345-1234-5678-b341-cb1c91fe2123 {
    store_front=e5da3742-c916-48a0-b2af-283092fd6ef8
    valhalla=bdc6ca20-f62a-4c8a-a549-ec903fd63772
}
```

The above example shows player with UUID `e035f345-1234-5678-b341-cb1c91fe2123`.  
The player has configured 2 friendly claim identifiers.  
The first claim identifier is `store_front` which is mapped to claim UUID `e5da3742-c916-48a0-b2af-283092fd6ef8`  
The second claim identifier is `valhalla` which is mapped to claim UUID `bdc6ca20-f62a-4c8a-a549-ec903fd63772`  


There are 2 built-in UUID's that GriefDefender uses for friendly identifiers.  

`00000000-0000-0000-0000-000000000000` - This UUID represents the world user and is used to set friendly identifiers in wilderness claims.  
`11111111-1111-1111-1111-111111111111` - This UUID represents the admin user and is used to set friendly identifiers in admin claims.  


### Flags  

The `flags.conf` file is not to be confused with flag definitions and/or presets. This file controls all core flags that GD uses in events.  

#### Default claim flag section  

The first section in this file is `default-claim-flags` which is responsible for setting default transient flag permissions.  Transient permissions only exist in memory and do not persist. These permissions are designed as fallback permissions when there is no permission found for a LP user or group.  

There are 2 configured types in this file  

`user` - This configures default transient flag permissions for all claims EXCEPT wilderness.  
`wilderness` - This confingures default transient flag permissions for all wilderness claims.  


#### Flag Control  
The flag control section lets you enable/disable flag functionality on a per-flag basis. By default, all flags are enabled. If you have no use for a specific flag, set the flag to false in this section.  By disabling a flag, this will cause GriefDefender to ignore all events related to the flag.  

```
# Controls which flags are enabled.
# Note: Disabling a flag will cause GD to bypass all functionality for it.
# Note: If you want full protection, it is recommended to keep everything enabled.
flag-control {
    block-break=true
    block-grow=true
    block-modify=true
    block-place=true
    block-spread=true
    collide-block=true
    collide-entity=true
    command-execute=true
    command-execute-pvp=true
    enter-claim=true
    entity-chunk-spawn=true
    entity-damage=true
    entity-riding=true
    entity-spawn=true
    entity-teleport-from=true
    entity-teleport-to=true
    exit-claim=true
    explosion-block=true
    explosion-entity=true
    interact-block-primary=true
    interact-block-secondary=true
    interact-entity-primary=true
    interact-entity-secondary=true
    interact-inventory=true
    interact-inventory-click=true
    interact-item-primary=true
    interact-item-secondary=true
    inventory-item-move=true
    item-drop=true
    item-pickup=true
    item-spawn=true
    item-use=true
    leaf-decay=true
    liquid-flow=true
    portal-use=true
    projectile-impact-block=true
    projectile-impact-entity=true
}
```

### Global  

See [Global Config](https://github.com/bloodmc/GriefDefender/wiki/Global-Config)  



### Gui  

The `gui.conf` file is responsible for all settings related to Chat and Inventory GUI.  

#### Chat section  

`capture-clear-timeout` - The timeout in seconds when chat GUI will clear all captured chat.  
`capture-idle-timeout` - The idle timeout in seconds when chat GUI will stop capturing chat.  
`protocol-lib` - Whether to use ProtocolLib, if detected, to capture all messages directed toward a player.  

#### General section  

`command-input-idle-timeout` - The idle timeout in seconds when a command GUI will stop waiting for player input.  


#### Inventory section  

The inventory section controls what icons and titles will be used when loading the GD inventory GUI for players.  

`enchanted` - Controls if the icon will have an enchanted effect.  
`id` - The icon item id.  Ex. `minecraft:diamond_shovel`  
`title` - The icon title to display on hover.  
`lore` - The icon lore.  
`quantity` - The item quantity amount.  
`meta` - The item identifier associated with icon. <br />Note: Meta is used instead of a material identifier when needed to be compatible across MC versions or for modded items that do not have an associated name identifier.  

`icon-flags`  
Icon flags are a special attribute of an icon and are stored as such  
```
icon-flags=[
    "hide_attributes"
]
```  
The following icon flags are available to use with an icon  

`HIDE_ENCHANTS` - Controls whether to show enchants.  
`HIDE_ATTRIBUTES` - Controls whether to show attributes.  
`HIDE_UNBREAKABLE` - Controls whether to show the unbreakable state.  
`HIDE_DESTROYS` - Controls whether to show what can break or destroy.  
`HIDE_PLACED_ON` - Controls whether to show what can be built or placed on.  
`HIDE_POTION_EFFECTS` - Controls whether to show potion effects.  
`HIDE_DYE` - Controls whether to show dyes.  


### Options  

The `options.conf` file controls all default claim and player settings.  


#### Default Options   

`default-user-basic-options` - Controls min/max claim size limits for basic claims.  
The default min basic limit is `5x5x5`.  
Note: Y is not used unless claim is a 3D claim.  
Note: A value of `0` means no limit.  


`default-user-subdivision-options` - Controls min/max claim size limits for subdivision claims.  
The default min subdivision limit is `5x5x5`.  
The default max subdivision limit is `1000x0x1000` where `0` represents no limit in height.  
Note: Y is not used unless claim is a 3D claim.  
Note: A value of `0` means no limit.  


`default-user-town-options` - Controls min/max claim size limits for basic claims.  
The default town limit is `32x32x32`.  
Note: Y is not used unless claim is a 3D claim.  
Note: A value of `0` means no limit.  


`default-user-options` - Controls default player options such as `player-deny-flight` in claims.  
Note: Applying an option to a specific claim type section as shown above will override the option in this section.  

#### Option Control  
The option control section lets you enable/disable option functionality. By default, all player/pvp and spawn options are disabled. To enable this functionality, you will need to set the corresponding option to true.  

Here are the delivered options that can be controlled  
```
option-control {
    player-command-enter=false
    player-command-exit=false
    player-deny-flight=false
    player-deny-godmode=false
    player-deny-hunger=false
    player-fly-speed=false
    player-gamemode=false
    player-health-regen=false
    player-keep-inventory=false
    player-keep-level=false
    player-teleport-cost=false
    player-teleport-delay=false
    player-walk-speed=false
    player-weather=false
    pvp=false
    pvp-combat-command=false
    pvp-combat-teleport=false
    pvp-combat-timeout=false
    pvp-item-drop-lock=false
    raid=false
    spawn-limit=false
}
```

#### Vanilla fallback values  
This section is currently only used for player fly and walk default speeds. If your server uses a different default value, you can adjust it here.  

The delivered defaults are  
```
vanilla-fallback-values {
    player-fly-speed="0.1"
    player-walk-speed="0.2"
}
```


### Storage  

The `storage.conf` file controls GriefDefender storage settings.  

