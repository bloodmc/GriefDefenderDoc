---
title: Flag Definitions GUI
tag: flags
category: claim
icon: screen
---

## Overview

The flag definition system provides both users and admins the ability to manage their claim flags in a [chat](https://github.com/bloodmc/GriefDefender/wiki/GUI#chat) or [inventory](https://github.com/bloodmc/GriefDefender/wiki/GUI#inventory) GUI.  
GriefDefender delivers a bundle of flag definitions by default to provide the best compatibility across servers.  
The delivered vanilla flag definition data can be found in the following location
### Sponge
`./config/GriefDefender/presets/minecraft.conf`
### Bukkit
`./plugins/GriefDefender/presets/minecraft.conf`



Admins are given full control to add/remove/customize flag definitions.  

To add a flag definition to an existing delivered minecraft preset, open the `./presets/minecraft.conf` file.
Within this section, you will see 2 delivered groups `admin` and `user`.  

All flag definitions located within the `admin` group are accessible by only admins. This is due to the `admin-group` setting be set to `true`.  
All flag definitions located within the `user` group are accessible by all users.  
You can add/remove/move flag definitions as you please and even create new preset files from scratch which will get read when GUI is loaded.  

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
Note: These are not actual GD core flags but rather a `flag definition` and cannot be used with the `/cf` command.  If you want to toggle a flag definition with a command then use `/claimflagdefinition` or `/gd flag definition`  

#### Contexts  

```
contexts=[
        "gd_claim_default=user"
    ]
```
These are the definition contexts that will be used with all permissions defined within `permissions=[...]`.  
It currently only supports context keys `gd_claim_default`, `gd_claim_override`, or `gd_claim`.  
See https://github.com/bloodmc/GriefDefender/wiki/Contexts to learn how contexts work.  
Note: These contexts do NOT apply in GUI. It is only used during server startup.  GUI will always apply flags to the claim player is standing in.

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
#    enabled=<true|false>: Whether the group is enabled.
#    admin-group=<true|false>: Whether this group is considered for admin use only.
#    Note: GUI toggles in PRESETS will always apply to current claim only.
#    Note: If you assign users the permission 'griefdefender.admin.advanced-flags', they will be able to access admin presets within the claim tab.
#          It is recommended not to assign this permission to users for best experience.
#    value=<true|false>: This is used to set a default value for the flag definition. It is only used in conjunction with 'override=<type>, default=<type> settings.
#    contexts=["key=value"]: A list of definition contexts that will be applied to all permissions.
# Note: This is primary used with 'default' and 'override' contexts. Ex. contexts=["default=global"]
# Note: You must specify one of the following contexts :'gd_claim_default=<type>' or 'gd_claim_override=<type>''
# Note: Context values support wildcards '?' and '*' by using Apache's wildcard matcher.
#  The wildcard '?' represents a single character.
#  The wildcard '*' represents zero or more characters.
# Each group will have an associated permission in order to be viewable.
# The user groups will use the permission : 'griefdefender.user.custom.flag.<preset>.<group>
# The admin groups will use the permission : 'griefdefender.admin.custom.flag.<preset>.<group>
# Within each group, you can define flag definitions.
# Each flag definition must be defined in the following format:
#  enabled: Controls whether the definition is enabled. Accepts a value of 'true' or 'false'
#  default-value: The default value to assign flag definition.
#  description: The flag description to display on hover. Uses the legacy text format.
#  permissions: The list of permissions to link to definition. Permissions can accept various contexts such as :
#    flag=<linked-flag>: This context is used to link the permission to a GD specific flag. Ex. 'flag=block-break' would link permission to GD's block-break flag
#    source=<id>: This context is used to specify a source id such as 'minecraft:creeper'.
#    target=<id>: This context is used to specify a target id such as 'minecraft:chest'.
#    state=<properties>: This context is used to specify a blockstate property such as 'state=lit:true'.
# Note: All flag definitions that contain a definition context of 'gd_claim_default' or 'gd_claim_override' will be applied to permissions during server startup.
# Note: Required if no source or target context is specified, the permission will default to ALL.
# Note: Commonly used contexts are : flag, source, target, state, used_item, item_name, world, server
# These contexts may change, See https://github.com/bloodmc/GriefDefender/wiki/Contexts for latest information.

minecraft {
    enabled=true
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
                    icon {
                        enchanted=false
                        id="minecraft:bat_spawn_egg"
                        title="&6ambient-spawn"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:chorus_plant"
                        title="&6animal-block-modify"
                    }
                    permissions=[
                        "flag=block-break, source=#animal",
                        "flag=block-modify, source=#animal"
                    ]
                }
                animal-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:pig_spawn_egg"
                        title="&6animal-spawn"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:squid_spawn_egg"
                        title="&6aquatic-spawn"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:armor_stand"
                        title="&6armorstand-use"
                    }
                    permissions=[
                        "flag=interact-item-secondary, target=minecraft:armor_stand, source=minecraft:player",
                        "flag=entity-damage, target=minecraft:armor_stand, source=minecraft:player",
                        "flag=interact-entity-secondary, target=minecraft:armor_stand, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:armor_stand, source=minecraft:player"
                    ]
                }
                chorus-fruit-teleport {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:chorus_fruit"
                        title="&6chorus-fruit-teleport"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:command_block"
                        title="&6commandblock-block-break"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:command_block"
                        title="&6commandblock-block-place"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:creeper_head"
                        title="&6creeper-block-explosion"
                    }
                    permissions=[
                        "flag=explosion-block, source=minecraft:creeper"
                    ]
                }
                creeper-entity-explosion {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:creeper_head"
                        title="&6creeper-entity-explosion"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:end_crystal"
                        title="&6endcrystal-use"
                    }
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
                    icon {
                        enchanted=true
                        id="minecraft:armor_stand"
                        title="&6entity-armorstand-damage"
                    }
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
                    icon {
                        enchanted=true
                        id="minecraft:item_frame"
                        title="&6entity-itemframe-damage"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:experience_bottle"
                        title="&6exp-drop"
                    }
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
                    icon {
                        enchanted=true
                        id="minecraft:feather"
                        title="&6fall-player-damage"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:feather"
                        title="&6fall-player-damage"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:sand"
                        title="&6falling-block-break"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:magma_block"
                        title="&6fire-block-damage"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:magma_cream"
                        title="&6fire-entity-damage"
                    }
                    permissions=[
                        "flag=entity-damage, source=minecraft:fire",
                        "flag=entity-damage, source=minecraft:fire_tick",
                        "flag=entity-damage, source=minecraft:magma_block",
                        "flag=entity-damage, source=minecraft:lava"
                    ]
                }
                lead-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:lead"
                        title="&6lead-interact"
                    }
                    permissions=[
                        "flag=interact-item-secondary, target=minecraft:lead, source=minecraft:player",
                        "flag=interact-entity-secondary, target=minecraft:leash_knot, source=minecraft:player"
                    ]
                }
                lightning-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:dead_bush"
                        title="&6lightning-damage"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:skeleton_skull"
                        title="&6monster-animal-damage"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:zombie_head"
                        title="&6monster-player-damage"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:zombie_spawn_egg"
                        title="&6monster-spawn"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:piston"
                        title="&6piston-item-spawn"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:sticky_piston"
                        title="&6piston-use"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:diamond_pickaxe"
                        title="&6player-block-break"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:stone_button"
                        title="&6player-block-interact"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:grass_block"
                        title="&6player-block-place"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:cactus"
                        title="&6player-damage"
                    }
                    permissions=[
                        "flag=entity-damage, target=minecraft:player",
                        "flag=projectile-impact-entity, target=minecraft:player"
                    ]
                }
                player-damage-pillager {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:red_banner"
                        title="&6player-damage"
                    }
                    permissions=[
                        "flag=entity-damage, source=minecraft:player, target=minecraft:pillager",
                        "flag=projectile-impact-entity, source=minecraft:player, target=minecraft:pillager",
                        "flag=entity-damage, source=minecraft:arrow, target=minecraft:pillager",
                        "flag=projectile-impact-entity, source=minecraft:arrow, target=minecraft:pillager"
                    ]
                }
                player-enderpearl-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:ender_pearl"
                        title="&6player-enderpearl-interact"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:end_portal_frame"
                        title="&6player-endportal-use"
                    }
                    permissions=[
                        "flag=entity-teleport-from, source=minecraft:end_portal, target=minecraft:player"
                    ]
                }
                player-entity-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:carrot_on_a_stick"
                        title="&6player-entity-interact"
                    }
                    permissions=[
                        "flag=interact-entity-secondary, source=minecraft:player"
                    ]
                }
                player-exit {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:iron_door"
                        title="&6player-exit"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:dropper"
                        title="&6player-item-drop"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:hopper"
                        title="&6player-item-pickup"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:item_frame"
                        title="&6player-itemframe-interact"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:item_frame"
                        title="&6player-itemhanging-place"
                    }
                    permissions=[
                        "flag=interact-item-secondary, target=#hanging, source=minecraft:player"
                    ]
                }
                player-monster-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:zombie_head"
                        title="&6monster-player-damage"
                    }
                    permissions=[
                        "flag=entity-damage, target=#monster, source=minecraft:player",
                        "flag=projectile-impact-entity, target=#monster, source=minecraft:player"
                    ]
                }
                player-netherportal-use {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:obsidian"
                        title="&6player-netherportal-use"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:magenta_glazed_terracotta"
                        title="&6entity-itemframe-damage"
                    }
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
                    icon {
                        enchanted=true
                        id="minecraft:magenta_glazed_terracotta"
                        title="&6entity-itemframe-damage"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:tripwire_hook"
                        title="&6player-villager-damage"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:ravager_spawn_egg"
                        title="&6ravager-block-break"
                    }
                    permissions=[
                        "flag=block-break, source=minecraft:ravager"
                    ]
                }
                safarinet-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:ghast_spawn_egg"
                        title="&6safarinet-use"
                    }
                    permissions=[
                        "flag=interact-item-secondary, target=minecraft:ghast_spawn_egg, source=minecraft:player"
                    ]
                }
                silverfish-block-infest {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:infested_cobblestone"
                        title="&6fall-player-damage"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:tnt"
                        title="&6tnt-block-explosion"
                    }
                    permissions=[
                        "flag=explosion-block, source=minecraft:tnt"
                    ]
                }
                tnt-entity-explosion {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:tnt"
                        title="&6tnt-entity-explosion"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:egg"
                        title="&6turtle-egg-hatch"
                    }
                    permissions=[
                        "flag=block-place, source=minecraft:turtle, target=minecraft:turtle_egg",
                        "flag=block-break, source=minecraft:turtle_egg, target=minecraft:turtle_egg"
                    ]
                }
                villager-farm {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:composter"
                        title="&6villager-farm"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:emerald"
                        title="&6villager-trade"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:wither_skeleton_skull"
                        title="&6wither-block-break"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:nether_star"
                        title="&6wither-entity-damage"
                    }
                    permissions=[
                        "flag=entity-damage, source=minecraft:wither"
                    ]
                }
            }
            # Whether flag definition group is enabled.
            enabled=true
            icon {
                enchanted=false
                id="minecraft:enchanted_golden_apple"
                title="&cAdmin"
            }
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
                    icon {
                        enchanted=false
                        id="minecraft:bone_meal"
                        title="&6block-fertilize"
                    }
                    permissions=[
                        "flag=block-grow, used_item=minecraft:bone_meal, target=#crops, source=minecraft:player",
                        "flag=block-grow, used_item=minecraft:bone_meal, target=#plants, source=minecraft:player"
                    ]
                }
                block-trampling {
                    contexts=[
                        "gd_claim_override=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:dirt"
                        title="&6block-trampling"
                    }
                    permissions=[
                        "flag=collide-block, target=minecraft:turtle_egg, target=minecraft:farmland"
                    ]
                }
                chest-access {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:chest"
                        title="&6chest-access"
                    }
                    permissions=[
                        "flag=interact-block-secondary, target=minecraft:chest, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:chest, source=minecraft:player"
                    ]
                }
                collide-pixelmon-grass {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=collide-block, target=pixelmon:pixelmon_grass, source=minecraft:player"
                    ]
                }
                crop-growth {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:wheat"
                        title="&6crop-growth"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:mutton"
                        title="&6damage-animals"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:ender_eye"
                        title="&6enderman-grief"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:blaze_powder"
                        title="&6fire-spread"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:tall_grass"
                        title="&6grass-growth"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:packed_ice"
                        title="&6ice-form"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:blue_stained_glass"
                        title="&6ice-melt"
                    }
                    permissions=[
                        "flag=block-modify, target=minecraft:water, source=minecraft:ice"
                    ]
                }
                interact-with-chattingnpc {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-entity-secondary, target=pixelmon:chattingnpc, source=minecraft:player"
                    ]
                }
                interact-with-endtable {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, source=minecraft:player, target=pixelmon:end_table",
                        "flag=interact-inventory, source=minecraft:player, target=pixelmon:end_table"
                    ]
                }
                interact-with-fridge {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, target=pixelmon:fridge, source=minecraft:player",
                        "flag=interact-inventory, target=pixelmon:fridge, source=minecraft:player"
                    ]
                }
                interact-with-healer {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, target=pixelmon:healer, source=minecraft:player"
                    ]
                }
                interact-with-move-relearner {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-entity-secondary, target=pixelmon:relearner, source=minecraft:player"
                    ]
                }
                interact-with-move-tutor {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-entity-secondary, target=pixelmon:tutor, source=minecraft:player"
                    ]
                }
                interact-with-nurses {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-entity-secondary, target=pixelmon:nursejoy, source=minecraft:player"
                    ]
                }
                interact-with-old-fisherman {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-entity-secondary, target=pixelmon:oldfisherman, source=minecraft:player"
                    ]
                }
                interact-with-shopkeepers {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-entity-secondary, target=pixelmon:shopkeeper, source=minecraft:player"
                    ]
                }
                interact-with-traders {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-entity-secondary, target=pixelmon:trader, source=minecraft:player"
                    ]
                }
                lava-flow {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:lava_bucket"
                        title="&6lava-flow"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:oak_leaves"
                        title="&6leaf-decay"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:flint_and_steel"
                        title="&6lighter"
                    }
                    permissions=[
                        "flag=interact-item-secondary, target=minecraft:flint_and_steel, source=minecraft:player"
                    ]
                }
                monster-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:zombie_spawn_egg"
                        title="&6monster-spawn"
                    }
                    permissions=[
                        "flag=entity-spawn, target=#monster"
                    ]
                }
                mushroom-growth {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:brown_mushroom_block"
                        title="&6mushroom-growth"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:mycelium"
                        title="&6mycelium-spread"
                    }
                    permissions=[
                        "flag=block-spread, target=minecraft:mycelium"
                    ]
                }
                occupied-pokeball-usage {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=projectile-impact-block, source=pixelmon:occupied_pokeball",
                        "flag=projectile-impact-entity, source=pixelmon:occupied_pokeball, target=pixelmon:any",
                        "flag=entity-spawn, source=pixelmon:occupied_pokeball, target=#pixelmon:animal"
                    ]
                }
                painting-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:painting"
                        title="&6painting-damage"
                    }
                    permissions=[
                        "flag=entity-damage, target=minecraft:painting"
                    ]
                }
                phantom-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:phantom_membrane"
                        title="&6phantom-spawn"
                    }
                    permissions=[
                        "flag=entity-spawn, target=minecraft:phantom"
                    ]
                }
                player-button-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:stone_button"
                        title="&6player-button-interact"
                    }
                    permissions=[
                        "flag=interact-block-secondary, target=minecraft:button, source=minecraft:player"
                    ]
                }
                player-enter {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:oak_door"
                        title="&6player-enter"
                    }
                    permissions=[
                        "flag=enter-claim, source=minecraft:player"
                    ]
                }
                player-item-drop {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:dropper"
                        title="&6player-item-drop"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:hopper"
                        title="&6player-item-pickup"
                    }
                    permissions=[
                        "flag=item-pickup, source=minecraft:player"
                    ]
                }
                poke-spawn {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-spawn, target=#pixelmon:animal"
                    ]
                }
                pvp {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:diamond_sword"
                        title="&6pvp"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:saddle"
                        title="&6ride"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:oak_sign"
                        title="&6sign-use"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:red_bed"
                        title="&6sleep"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:snowball"
                        title="&6snow-fall"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:snow_block"
                        title="&6snow-melt"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:snow"
                        title="&6snowman-trail"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:farmland"
                        title="&6soil-dry"
                    }
                    permissions=[
                        "flag=block-modify, source=minecraft:farmland, state=moisture:0"
                    ]
                }
                throw-any-pokeball {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=projectile-impact-block, source=pixelmon:empty_pokeball",
                        "flag=projectile-impact-entity, source=pixelmon:empty_pokeball"
                    ]
                }
                use-cushion-chairs {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, target=pixelmon:red_cushion_chair, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:yellow_cushion_chair, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:green_cushion_chair, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:pink_cushion_chair, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:blue_cushion_chair, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:black_cushion_chair, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:gray_cushion_chair, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:cyan_cushion_chair, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:white_cushion_chair, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:brown_cushion_chair, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:orange_cushion_chair, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:purple_cushion_chair, source=minecraft:player"
                    ]
                }
                use-fossil-cleaner {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, target=pixelmon:fossil_cleaner, source=minecraft:player"
                    ]
                }
                use-fossil-machines {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, target=pixelmon:fossil_machine, source=minecraft:player"
                    ]
                }
                use-pc {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, target=pixelmon:pc, source=minecraft:player"
                    ]
                }
                use-trade-machines {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, target=pixelmon:trade_machine, source=minecraft:player"
                    ]
                }
                use-vending-machines {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, target=pixelmon:pink_vending_machine, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:blue_vending_machine, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:green_vending_machine, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:orange_vending_machine, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:red_vending_machine, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:yellow_vending_machine, source=minecraft:player",
                        "flag=interact-block-secondary, source=minecraft:player, target=pixelmon:brown_vending_machine",
                        "flag=interact-block-secondary, target=pixelmon:white_vending_machine, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:gray_vending_machine, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:black_vending_machine, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:cyan_vending_machine, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:purple_vending_machine, source=minecraft:player"
                    ]
                }
                vehicle-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:oak_boat"
                        title="&6vehicle-use"
                    }
                    permissions=[
                        "flag=interact-item-secondary, target=minecraft:minecart, target=#vehicle, target=#boats, source=minecraft:player",
                        "flag=entity-damage, target=minecraft:minecart, target=minecraft:boat, target=#vehicle, source=minecraft:player",
                        "flag=entity-riding, target=minecraft:minecart, target=minecraft:boat, target=#vehicle, source=minecraft:player",
                        "flag=interact-entity-secondary, target=minecraft:minecart, target=minecraft:boat, target=#vehicle, source=minecraft:player"
                    ]
                }
                villager-trade {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:emerald"
                        title="&6villager-trade"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:vine"
                        title="&6vine-growth"
                    }
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
                    icon {
                        enchanted=false
                        id="minecraft:water_bucket"
                        title="&6water-flow"
                    }
                    permissions=[
                        "flag=liquid-flow, source=minecraft:water, target=minecraft:air"
                    ]
                }
                work-station-access {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:crafting_table"
                        title="&6work-station-access"
                    }
                    permissions=[
                        "flag=interact-block-secondary, target=minecraft:crafting_table, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:crafting_table, source=minecraft:player",
                        "flag=interact-block-secondary, target=minecraft:anvil, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:anvil, source=minecraft:player",
                        "flag=interact-block-secondary, source=minecraft:player, target=minecraft:brewing_stand",
                        "flag=interact-inventory, source=minecraft:player, target=minecraft:brewing_stand",
                        "flag=interact-block-secondary, target=minecraft:cartography_table, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:cartography_table, source=minecraft:player",
                        "flag=interact-block-secondary, target=minecraft:smithing_table, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:smithing_table, source=minecraft:player",
                        "flag=interact-block-secondary, target=minecraft:enchanting_table, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:enchanting_table, source=minecraft:player",
                        "flag=interact-block-secondary, target=minecraft:grindstone, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:grindstone, source=minecraft:player",
                        "flag=interact-block-secondary, target=minecraft:loom, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:loom, source=minecraft:player",
                        "flag=interact-block-secondary, target=minecraft:stonecutter, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:stonecutter, source=minecraft:player",
                        "flag=interact-block-secondary, source=minecraft:player, target=minecraft:ender_chest",
                        "flag=interact-inventory, source=minecraft:player, target=minecraft:ender_chest"
                    ]
                }
            }
            # Whether flag definition group is enabled.
            enabled=true
            icon {
                enchanted=false
                id="minecraft:apple"
                title="&aUser"
            }
        }
    }
    icon {
        enchanted=false
        id="minecraft:light_blue_shulker_box"
        title="&dminecraft"
    }
    version="1.0"
}
```

</details>

## GUI  

GD provides a flag definition GUI which is designed to allow both users and admins to easily administer their claim flags.  

In order to display the flag definition GUI, a user command must execute the following command `/cf` or `/gd flag claim`  

The GUI will then be displayed on screen in either CHAT or as an inventory GUI.  
This depends on what permission the user has set and the toggle status of `/claimgui`.  See the [Main GUI](https://github.com/bloodmc/GriefDefender/wiki/GUI#gui) page for more details.  

Once the flag definition GUI has been displayed, the user will see 2 subsections labeled `PUBLIC` and `OWNER`.  
These subsections work as follows  

### PUBLIC  

* All flag definitions will always support the `PUBLIC` type and thus will always be listed under it. 
* When toggling a flag definition within `PUBLIC` in GUI, all non-trusted players will be affected.  
* All permissions will be set on LP group `griefdefender_definition`  

### OWNER  

* A flag definition will only be displayed under `OWNER` if the flag definition has `owner-mode` set to `true`.  
* When toggling a flag definition within `OWNER` in GUI, all trusted players including owner will be affected.  
* All claim flag permissions will be set on LP user that owns the claim.   
Note: For wilderness claims, all claim flag permissions are set on the LP wilderness user `_GDWorld_` with UUID `00000000-0000-0000-0000-000000000000`  
Note: For admin claims, all claim flag permissions are set on the LP admin user `_GDAdmin_` with UUID `11111111-1111-1111-1111-111111111111`  


### Permissions  

The following permission controls the user's ability to toggle flag definitions in GUI  
`griefdefender.user.definition.flag.<preset>.<group>.<definition_name>`

As an example, lets assume you want to deny user access to toggle the `damage-animals` flag in GUI.  
You would enter the following in LuckPerms  
`/lp group <groupname> permission set griefdefender.user.definition.flag.minecraft.user.damage-animals false`

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
```painting-damage``` | false | Controls whether players can break paintings.
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

