---
title: Flag Definition
tags: Settings
category: Flag
icon: activity
---

## Overview

The flag definition system provides both users and admins the ability to manage their claim flags with ease.
GriefDefender delivers a bundle of flag definitions by default to provide the best compatibility across servers.
The delivered vanilla flag definition data can be found in the following location
### Sponge
`./config/GriefDefender/presets/minecraft.conf`
### Bukkit
`./plugins/GriefDefender/presets/minecraft.conf`



## Admin

Admins are given full control to add/remove/customize flag definitions.

To add a flag definition to an existing delivered minecraft preset, open the `./presets/minecraft.conf` file.
Within this section, you will see 2 delivered groups 'admin' and 'user'.  

### Add new flag definition

If you want to add a flag to the 'admin' section, do the following
1. Clone an existing flag definition. We will use `ambient-spawn` for this example.

```
ambient-spawn {
    contexts=[
        "gd_claim_default=user"
    ]
    default-value=true
    enabled=true
    permissions=[
        "flag=entity-spawn, target=#ambient"
    ]
}
```

Lets break this example down

#### Name  

`ambient-spawn` - This is the name of your definition that will be displayed to users when they open it up in the flag GUI. It can be whatever you like.

#### Contexts  

```
contexts=[
        "gd_claim_default=user"
    ]
```
These are the definition contexts that will be used with all permissions defined within `permissions=[...]`.  
It currently only supports context keys `gd_claim_default`, `gd_claim_override`, or `gd_claim`.  
See https://github.com/bloodmc/GriefDefender/wiki/Contexts to learn how contexts work.  

#### Default value  

`default-value=true` - This is the default-value GD will use when applying the definition during startup.  
GD will only apply this value during startup as a transient permission if the contexts include either `gd_claim_default` or `gd_claim_override`.  
If the definition does not contain one of these contexts then the default value is ignored.

#### Enabled  

`enabled=true` - This controls whether the definition is enabled in GD or disabled. If set to `false`, the definition will be ignored.


#### Permissions  

```
permissions=[
    "flag=entity-spawn, target=#ambient"
]
```
These are the flag permissions to assign this definition. Permissions can hold one or more flag entries. To add an additional line, add a `,` at end of previous then insert a new line.  
Each line requires a `flag=<flag_name>` entry followed by either source or target  context.  
If you want to apply a permission to all possible targets then don't include `target` as GD will automatically apply to all targets.  
If you want to apply a permission to all possible sources then don't include `source` as GD will automatically apply to all sources.  

The most common contexts for permissions are as follows
```
source
target
used_item
item_name
server
state
world
```

The accepted context value must be a valid identifier. To locate the proper value in game, do the following

1. Run command `/gddebug record claim` - This will start a debug session in the claim you are in.
2. Perform an action you want to manage via flag definition.
3. Run command `/gddebug paste` - This will display a web link to view debug results.
4. Open link, and you will see a list of actions GD checked for the claim. You will a `source` and `target` column which will contain the values you need.

To locate a value for `used_item` or any other context, locate the Context column and you will see a list of all support contexts for the specific line action.

Another way to find an id you are looking for is to check a community run wiki for it

See https://minecraft-ids.grahamedgecombe.com/


### Minecraft Flag Definition Preset Config  

For more information on what you can do with the flags config, see below

<details>
  <summary>Minecraft Preset</summary>

```
# A collection of flag definitions designed for vanilla minecraft.
# Each group defined will be displayed in the flag GUI for users.
# Groups can have the following settings : 
# enabled=<true|false>: Whether the group is enabled.
# admin-group=<true|false>: Whether this group is considered for admin use only.
# Note: GUI toggles in PRESETS will always apply to current claim only.
# Note: If you assign users the permission 'griefdefender.admin.advanced-flags', they will be able to access admin presets within the claim tab.
#      It is recommended not to assign this permission to users for best experience.
# value=<true|false>: This is used to set a default value for the flag definition. It is only used in conjunction with 'override=<type>, default=<type> settings.
# contexts=["key=value"]: A list of definition contexts that will be applied to all permissions.
# Note: This is primary used with 'default' and 'override' contexts. Ex. contexts=["default=global"]
# Note: You must specify one of the following contexts :'gd_claim_default=<type>' or 'gd_claim_override=<type>''
# Note: Context values support wildcards '?' and '*' by using Apache's wildcard matcher.
# The wildcard '?' represents a single character.
# The wildcard '*' represents zero or more characters.
# Each group will have an associated permission in order to be viewable.
# The user groups will use the permission : 'griefdefender.user.custom.flag.<preset>.<group>
# The admin groups will use the permission : 'griefdefender.admin.custom.flag.<preset>.<group>
# Within each group, you can define flag definitions.
# Each flag definition must be defined in the following format:
# enabled: Controls whether the definition is enabled. Accepts a value of 'true' or 'false'
# default-value: The default value to assign flag definition.
# description: The flag description to display on hover. Uses the legacy text format.
# permissions: The list of permissions to link to definition. Permissions can accept various contexts such as :
# flag=<linked-flag>: This context is used to link the permission to a GD specific flag. Ex. 'flag=block-break' would link permission to GD's block-break flag
# source=<id>: This context is used to specify a source id such as 'minecraft:creeper'.
# target=<id>: This context is used to specify a target id such as 'minecraft:chest'.
# state=<properties>: This context is used to specify a blockstate property such as 'state=lit:true'.
# Note: All flag definitions that contain a definition context of 'gd_claim_default' or 'gd_claim_override' will be applied to permissions during server startup.
# Note: Required if no source or target context is specified, the permission will default to ALL.
# Note: Commonly used contexts are : flag, source, target, state, used_item, item_name, world, server
# These contexts may change, See https://github.com/bloodmc/GriefDefender/wiki/Contexts for latest information.

minecraft {
    groups {
        admin {
            # Set to true if this flag group is for admin use only.
            # Note: If admin group, the permission is 'griefdefender.admin.custom.flag.<groupname>
            # Note: If user group (admin set false), the permission is 'griefdefender.user.custom.flag.<groupname>
            admin-group=true
            definitions {
                ambient-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-spawn, target=#ambient"
                    ]
                }
                animal-block-modify {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-modify, source=#animal"
                    ]
                }
                animal-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-spawn, target=#animal"
                    ]
                }
                aquatic-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-spawn, target=#aquatic"
                    ]
                }
                armorstand-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=interact-item-secondary, target=minecraft:armor_stand, source=minecraft:player",
                        "flag=entity-damage, target=minecraft:armor_stand, source=minecraft:player",
                        "flag=interact-entity-secondary, target=minecraft:armor_stand, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:armor_stand, source=minecraft:player"
                    ]
                }
                block-trampling {
                    contexts=[
                        "gd_claim_override=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=collide-block, target=minecraft:turtle_egg, target=minecraft:farmland"
                    ]
                }
                chorus-fruit-teleport {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=item-use, target=minecraft:chorus_fruit, source=minecraft:player"
                    ]
                }
                commandblock-block-break {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-break, source=minecraft:command_block, source=minecraft:chain_command_block, source=minecraft:repeating_command_block"
                    ]
                }
                commandblock-block-place {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-place, source=minecraft:command_block, source=minecraft:chain_command_block, source=minecraft:repeating_command_block"
                    ]
                }
                creeper-block-explosion {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=explosion-block, source=minecraft:creeper"
                    ]
                }
                creeper-entity-explosion {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=explosion-entity, source=minecraft:creeper"
                    ]
                }
                endcrystal-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=projectile-impact-entity, target=minecraft:end_crystal, source=minecraft:arrow, source=minecraft:player",
                        "flag=interact-item-secondary, target=minecraft:end_crystal, source=minecraft:arrow, source=minecraft:player",
                        "flag=entity-damage, target=minecraft:end_crystal, source=minecraft:arrow, source=minecraft:player",
                        "flag=interact-entity-secondary, target=minecraft:end_crystal, source=minecraft:arrow, source=minecraft:player"
                    ]
                }
                entity-armorstand-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=entity-damage, target=minecraft:armor_stand, source=minecraft:player",
                        "flag=projectile-impact-entity, target=minecraft:armor_stand, source=minecraft:player"
                    ]
                }
                entity-itemframe-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=entity-damage, target=minecraft:glow_item_frame, target=minecraft:item_frame",
                        "flag=projectile-impact-entity, target=minecraft:glow_item_frame, target=minecraft:item_frame"
                    ]
                }
                exp-drop {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-spawn, target=minecraft:xp_orb"
                    ]
                }
                fall-entity-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-damage, source=minecraft:fall"
                    ]
                }
                fall-player-damage {
                    contexts=[
                        "gd_claim_override=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-damage, target=minecraft:player, source=minecraft:fall"
                    ]
                }
                falling-block-break {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-break, source=minecraft:fall"
                    ]
                }
                fire-block-damage {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-break, source=minecraft:fire"
                    ]
                }
                fire-entity-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-damage, source=minecraft:fire",
                        "flag=entity-damage, source=minecraft:fire_tick",
                        "flag=entity-damage, source=minecraft:magma_block",
                        "flag=entity-damage, source=minecraft:lava"
                    ]
                }
                lightning-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-damage, source=minecraft:lightning_bolt"
                    ]
                }
                monster-animal-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=entity-damage, source=#monster, target=#animal",
                        "flag=entity-damage, source=#monster, target=#aquatic",
                        "flag=projectile-impact-entity, source=#monster, target=#aquatic"
                    ]
                }
                monster-player-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-damage, source=#monster, target=minecraft:player",
                        "flag=projectile-impact-entity, source=#monster, target=minecraft:player"
                    ]
                }
                monster-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-spawn, target=#monster"
                    ]
                }
                piston-item-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=item-spawn, source=minecraft:piston",
                        "flag=item-spawn, source=minecraft:sticky_piston"
                    ]
                }
                piston-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=block-break, source=minecraft:piston",
                        "flag=block-place, source=minecraft:piston",
                        "flag=block-break, source=minecraft:sticky_piston",
                        "flag=block-place, source=minecraft:sticky_piston"
                    ]
                }
                player-block-break {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=block-break, source=minecraft:player"
                    ]
                }
                player-block-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, source=minecraft:player"
                    ]
                }
                player-block-place {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=block-place, source=minecraft:player"
                    ]
                }
                player-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-damage, target=minecraft:player",
                        "flag=projectile-impact-entity, target=minecraft:player"
                    ]
                }
                player-enderpearl-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-item-secondary, source=minecraft:player, target=minecraft:ender_pearl"
                    ]
                }
                player-endportal-use {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-teleport-from, source=minecraft:end_portal, target=minecraft:player"
                    ]
                }
                player-enter {
                    contexts=[
                        "gd_claim=claim"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=enter-claim, source=minecraft:player"
                    ]
                }
                player-entity-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-entity-secondary, source=minecraft:player"
                    ]
                }
                player-exit {
                    contexts=[
                        "gd_claim=claim"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=exit-claim, source=minecraft:player"
                    ]
                }
                player-item-drop {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=item-drop, source=minecraft:player"
                    ]
                }
                player-item-pickup {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=item-pickup, source=minecraft:player"
                    ]
                }
                player-itemframe-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=interact-entity-secondary, target=minecraft:glow_item_frame, target=minecraft:item_frame, source=minecraft:player"
                    ]
                }
                player-itemhanging-place {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=interact-item-secondary, target=#hanging, source=minecraft:player"
                    ]
                }
                player-netherportal-use {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-teleport-from, source=minecraft:nether_portal, target=minecraft:player"
                    ]
                }
                player-teleport-from {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-teleport-from, target=minecraft:player"
                    ]
                }
                player-teleport-to {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-teleport-to, target=minecraft:player"
                    ]
                }
                player-villager-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=entity-damage, target=minecraft:villager, source=minecraft:player",
                        "flag=projectile-impact-entity, target=minecraft:villager, source=minecraft:player"
                    ]
                }
                ravager-block-break {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-break, source=minecraft:ravager"
                    ]
                }
                silverfish-block-infest {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=block-modify, source=minecraft:silverfish"
                    ]
                }
                tnt-block-explosion {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=explosion-block, source=minecraft:tnt"
                    ]
                }
                tnt-entity-explosion {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=explosion-entity, source=minecraft:tnt"
                    ]
                }
                turtle-egg-hatch {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-break, source=minecraft:turtle_egg, target=minecraft:turtle_egg"
                    ]
                }
                villager-farm {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-break, source=minecraft:villager, target=#crops",
                        "flag=block-place, source=minecraft:villager, target=#crops"
                    ]
                }
                villager-trade {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-entity-secondary, target=minecraft:villager, source=minecraft:player"
                    ]
                }
                wither-block-break {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=block-break, source=minecraft:wither"
                    ]
                }
                wither-entity-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-damage, source=minecraft:wither"
                    ]
                }
            }
            # Whether flag definition group is enabled.
            enabled=true
        }
        user {
            # Set to true if this flag group is for admin use only.
            # Note: If admin group, the permission is 'griefdefender.admin.custom.flag.<groupname>
            # Note: If user group (admin set false), the permission is 'griefdefender.user.custom.flag.<groupname>
            admin-group=false
            definitions {
                block-fertilize {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=block-grow, used_item=minecraft:bone_meal, target=#crops, source=minecraft:player",
                        "flag=block-grow, used_item=minecraft:bone_meal, target=#plants, source=minecraft:player"
                    ]
                }
                chest-access {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, target=minecraft:chest, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:chest, source=minecraft:player"
                    ]
                }
                crop-growth {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-grow, target=#crops"
                    ]
                }
                damage-animals {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=entity-damage, target=#animal",
                        "flag=projectile-impact-entity, target=#animal"
                    ]
                }
                enderman-grief {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=block-break, source=minecraft:enderman",
                        "flag=block-place, source=minecraft:enderman"
                    ]
                }
                fire-spread {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=block-spread, source=minecraft:fire",
                        "flag=block-spread, source=minecraft:lava"
                    ]
                }
                grass-growth {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-grow, target=minecraft:grass"
                    ]
                }
                ice-form {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-modify, target=minecraft:ice"
                    ]
                }
                ice-melt {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-modify, target=minecraft:water, source=minecraft:ice"
                    ]
                }
                lava-flow {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=liquid-flow, source=minecraft:lava, target=minecraft:air"
                    ]
                }
                leaf-decay {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=leaf-decay"
                    ]
                }
                lighter {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=interact-item-secondary, target=minecraft:flint_and_steel, source=minecraft:player"
                    ]
                }
                mushroom-growth {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-grow, target=#mushroom"
                    ]
                }
                mycelium-spread {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-spread, target=minecraft:mycelium"
                    ]
                }
                pvp {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-damage, target=minecraft:player, source=minecraft:player",
                        "flag=projectile-impact-entity, target=minecraft:player, source=minecraft:player"
                    ]
                }
                ride {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-riding, target=#vehicle, source=minecraft:player",
                        "flag=interact-entity-secondary, target=#vehicle, source=minecraft:player"
                    ]
                }
                sign-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-block-primary, target=#signs, source=minecraft:player",
                        "flag=interact-block-secondary, target=#signs, source=minecraft:player"
                    ]
                }
                sleep {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, target=#beds, source=minecraft:player",
                        "flag=interact-item-secondary, target=#beds, source=minecraft:player"
                    ]
                }
                snow-fall {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-place, target=minecraft:snow, source=minecraft:air"
                    ]
                }
                snow-melt {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-break, source=minecraft:snow"
                    ]
                }
                snowman-trail {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-place, source=minecraft:snow_golem, target=minecraft:snow"
                    ]
                }
                soil-dry {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-modify, source=minecraft:farmland, state=moisture:0"
                    ]
                }
                vehicle-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=interact-item-secondary, target=minecraft:minecart, target=#boats, source=minecraft:player",
                        "flag=entity-damage, target=minecraft:minecart, target=minecraft:boat, source=minecraft:player",
                        "flag=entity-riding, target=minecraft:minecart, target=minecraft:boat, source=minecraft:player",
                        "flag=interact-entity-secondary, target=minecraft:minecart, target=minecraft:boat, source=minecraft:player"
                    ]
                }
                villager-trade {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-entity-secondary, target=minecraft:villager, source=minecraft:player"
                    ]
                }
                vine-growth {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-grow, target=minecraft:vine"
                    ]
                }
                water-flow {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=liquid-flow, source=minecraft:water, target=minecraft:air"
                    ]
                }
            }
            # Whether flag definition group is enabled.
            enabled=true
        }
    }
    version="1.0"
}
```

</details>

## GUI  

The flag GUI is designed to allow both users and admins to easily administer their claim flags.

The command to access the flags GUI is `/cf` or `/gd flag claim`

With GD 2.0, all flag definitions can be applied to two types of players : PUBLIC and OWNER.  

`PUBLIC` - When toggling a flag definition within `PUBLIC` in GUI, all non-trusted players will be affected.  
`OWNER` - When toggling a flag definition within `OWNER` in GUI, all trusted players including owner will be affected.  


### Permissions  

The following permission controls access to each user flag `griefdefender.user.custom.flag.<group>.<flagname>`.
As an example, lets assume you want to deny user access to the `damage-animals` flag. You would enter the following in LuckPerms , `/lp group <groupname> set griefdefender.user.custom.flag.user.damage-animals false`

### Flag Values

As shown below, both admin/user flags start off as either `true` or `false` and will represent the current active value of claim you are in.  

### ADMIN
:warning: Admin flags will ONLY affect the claim you are in.  

![Admin GUI](https://i.imgur.com/tSVSC7q.png)


By default, admins have access to 2 modes `PRESET` and `ADVANCED`.
The `PRESET` mode is directly linked to the minecraft flag definitions preset file. Each group is read into the GUI as a tab along with its definitions.
There are 2 delivered groups that GD ships with, `USER` and `ADMIN`. 
 
Both groups will apply flags to claim you are standing in. If you need flags set as a default, set it up in config as shown above.


Flag Definition                                  | Default Value | Description |
-------------------------------------------------|---------------|--------------|
```ambient-spawn``` |  true  | Controls whether ambients, such as bats, spawn.
```animal-block-modify``` |  true  | Controls whether animals can modify blocks such as rabbits eating carrots.
```animal-spawn``` |  true  | Controls whether animals, such as cows/pigs/horses/etc., spawn.
```aquatic-spawn``` |  true  | Controls whether aquatics that live in water, such as squids, spawn.
```armorstand-use``` |  false | Controls whether armorstands can be placed or broken.
```block-trampling``` |  false  | Controls whether farmland and turtle eggs can be trampled.
```chorus-fruit-teleport``` | false | Controls whether a player can use chorus fruit to teleport.
```commandblock-block-break``` | false | Controls whether command blocks can break blocks.
```commandblock-block-place``` | false | Controls whether command blocks can place blocks.
```creeper-block-explosion``` | false | Controls whether a creeper can explode blocks.
```creeper-entity-explosion``` | false | Controls whether a creeper can explode entities.
```endcrystal-use```      | false  | Controls whether endcrystals can be placed or broken.
```entity-armorstand-damage``` | false | Controls whether entities can deal damage to armorstands.
```entity-itemframe-damage``` | false | Controls whether entities can deal damage to item frames.
```exp-drop``` | true | Controls whether experience orbs can drop.
```fall-entity-damage``` | true | Controls whether entities can take fall damage.
```fall-player-damage``` | true | Controls whether players can take fall damage.
```falling-block-break``` | true | Controls whether falling blocks can break.
```fire-block-damage``` | true | Controls whether fire can cause block damage.
```fire-entity-damage``` | true |  Controls whether fire can cause entity damage.
```lightning-damage```  | true | Controls whether lightning can cause harm.
```monster-animal-damage``` | false |  Controls whether monsters can deal damage to animals.
```monster-player-damage``` | true | Controls whether monsters can deal damage to players.
```monster-spawn```  | true | Controls whether monsters, such as creepers and skeletons, can spawn.
```piston-item-spawn``` | true | Controls whether mycelium can spread.
```piston-use``` | false | Controls whether pistons can be used.
```player-block-break``` | false | Controls whether players can break blocks.
```player-block-interact``` | false | Controls whether players can interact with blocks.<br />Note: This does not include inventory blocks such as chests.
```player-block-place``` | false | Controls whether players can place blocks.
```player-damage``` | true | Controls whether players can be damaged.
```player-enderpearl-interact``` | true | Controls whether players can use an enderpearl.
```player-endportal-use``` | true | Controls whether players can use end portal.
```player-entity-interact``` | true | Controls whether players can interact with entities.<br />Note: This does not include chest access with entities such as horses.
```player-enter``` | true | Controls whether a player can enter this claim.
```player-exit``` | true | Controls whether a player can exit this claim.
```player-item-drop``` | true | Controls whether players can drop items.
```player-item-pickup``` | true | Controls whether players can pickup items.
```player-itemframe-interact``` | false | Controls whether players can interact with item frames.
```player-itemhanging-place``` | false | Controls whether players can place hanging items such as itemframes.
```player-netherportal-use``` | true | Controls whether players can use nether portal.
```player-teleport-from``` | true | Controls whether players can teleport from this claim.
```player-teleport-to``` | true | Controls whether players can teleport to this claim.
```player-villager-damage``` | false | Controls whether players can deal damage to villagers.
```ravager-block-break``` | true | Controls whether ravagers can break blocks during raids.
```silverfish-block-infest``` | false | Controls whether silverfish can infest blocks such as cobblestone.
```tnt-block-explosion``` | false | Controls whether tnt can explode blocks.
```tnt-entity-explosion``` | false | Controls whether tnt can explode entities.
```turtle-egg-hatch``` | true | Controls whether turtle eggs can hatch.
```villager-farm``` | true | Controls whether villages can farm crops.
```wither-block-break``` | false | Controls whether withers can break blocks.
```wither-entity-damage``` | true | Controls whether withers can damage entities.

### USER
:warning: User flags will ONLY affect the claim you are in.  
:warning: If you want to modify `USER` flag definitions in a claim that you do not own, you must have ignoreclaims permissions and enter `/ignoreclaims` before executing `/cf` command.


As a user, if you enter the `/cf` command, you will see the following

![User GUI](https://i.imgur.com/LTeNaaD.png)

Flag Definition                                  | Default Value | Description | 
-------------------------------------------------|---------------|--------------|
```block-fertilize``` | false | Controls whether a player can fertilize a block with bonemeal.
```chest-access``` | false | Controls whether a player can access chest inventories.
```crop-growth``` | true | Controls whether crops can grow.
```damage-animals``` | false | Controls whether animals can be damaged.
```enderman-grief``` | false | Controls whether enderman can grief.
```fire-spread``` | false | Controls whether fire can spread.
```grass-growth``` | true | Controls whether grass can grow.
```ice-form``` | true | Controls whether ice can form.
```ice-melt``` | true | Controls whether ice can melt.
```lava-flow``` | false | Controls whether lava can flow.
```leaf-decay``` | true | Controls whether leaves can decay.
```lighter``` | false | Controls whether a player can use flint and steel.
```mushroom-growth``` | true | Controls whether mushrooms can grow.
```mycelium-spread``` | true | Controls whether mycelium can spread.
```pvp``` | true | Controls whether PvP combat is allowed.
```ride``` | false | Controls whether vehicles(including animals), not owned by the player, can be mounted.
```sign-use``` | true | Controls whether players can use signs.
```sleep``` | true | Controls whether players can sleep in beds
```snow-fall``` | true | Controls whether snow can fall.
```snow-melt``` | true | Controls whether snow can melt.
```snowman-trail``` | true | Controls whether snowmen can create snow beneath them.
```soil-dry``` | true | Controls whether soil will dry.
```vehicle-use``` | false | Controls whether vehicles(boats, minecarts, etc.) can be placed, ridden and broken.
```villager-trade``` | true | Controls whether players can trade with villagers.
```vine-growth``` | true | Controls whether vines(and kelp) can grow.
```water-flow``` | false | Controls whether water can flow.

