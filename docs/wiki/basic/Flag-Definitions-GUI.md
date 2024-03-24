---
title: Flag Definitions GUI
tag: flags
category: claim
icon: screen
---

## Config

The flag definition system provides both users and admins the ability to manage their claim flags in a [chat](/wiki/basic/GUI.html#chat) or [inventory](/wiki/basic/GUI.html#inventory) GUI.  
GriefDefender delivers a bundle of flag definitions by default to provide the best compatibility across servers.  
The delivered vanilla flag definition data can be found in the following location

Fabric, Forge, and Sponge preset vanilla config is located in  

`./config/GriefDefender/presets/minecraft.conf`  

Bukkit and Hybrid preset vanilla config is located in  

`./plugins/GriefDefender/presets/minecraft.conf`  



Admins are given full control to add/remove/customize flag definitions.   

To add a flag definition to an existing delivered minecraft preset, open the `./presets/minecraft.conf` file.  
Within this section, you will see 2 delivered groups `admin` and `user`.   

All flag definitions located within the `admin` group are accessible by only admins. This is due to the `admin-group` setting be set to `true`.  
All flag definitions located within the `user` group are accessible by all users.  
You can add/remove/move flag definitions as you please and even create new preset files from scratch which will get read when GUI is loaded.  

### Flag Definition

If you want to add a flag to the 'admin' section, do the following  
1. Clone an existing flag definition. We will use `villager-trade` for this example.  

```
villager-trade {
    contexts=[
        "gd_claim_default=user"
    ]
    default-groups {}
    default-value=true
    enabled=true
    icon {
        enchanted=false
        icon-flags=[
            "hide_attributes"
        ]
        id="minecraft:emerald"
        title="&6villager-trade"
    }
    owner-mode=false
    permissions=[
        "flag=interact-entity-secondary, target=minecraft:villager, source=minecraft:player"
    ]
}
```

Lets break this example down  

#### Name  

`villager-trade` - This is the name of your definition that will be displayed to users when they open it up in the flag GUI. It can be whatever you like.  
Note: These are not actual GD core flags but rather a `flag definition` and cannot be used with the `/cf` command.  If you want to toggle a flag definition with a command then use `/claimflagdefinition` or `/gd flag definition`  

#### Contexts  

:::: warning Important  
Contexts set in flag definition do NOT apply when toggled in GUI. They are only used during server startup.  GUI will always apply flags to the claim player is standing in by using the `gd_claim` context.  
::::  

```
contexts=[
    "gd_claim_default=user"
]
```
These are the definition contexts that will be used with all permissions defined within `permissions=[...]`.  
It currently only supports context keys `gd_claim_default` and `gd_claim_override`.  

`gd_claim_default` - This context is used with most definitions. It instructs GD to apply the definition at server startup to all existing/new claims.   
This context accepts the following values :   
`admin` - Only apply definition to admin claims.   
`basic` - Only apply definition to basic claims.  
`subdivision` - Only apply definition to subdivisions.  
`town`  - Only apply definition to towns.  
`global`  - Apply definition to ALL claims including wilderness.  
`user` - Apply definition to ALL claims excluding wilderness.  

Note: The default context ALWAYS applies permissions as transient in LuckPerms. In otherwords, the permissions only exist in memory while server is running. If the flag definition is toggled in GD GUI or set by an admin via command or editor, it will take priority over defaults as it will persist in LP storage.  
Note: Toggled flags in GUI will be stored in `griefdefender_definition` and will take priority over the `default-value` set in definition. Removing these permissions from `griefdefender_definition` will force GD to fallback to the default values of definitions in preset.  


`gd_claim_override` - This context is used with a few definitions. It instructs GD to apply the definition at server startup as an override to all existing/new claims.  
This context accepts the following values :  
`admin` - Only apply definition to admin claims.  
`basic` - Only apply definition to basic claims.  
`subdivision` - Only apply definition to subdivisions.  
`town`  - Only apply definition to towns.  
`global`  - Apply definition to ALL claims including wilderness.  
`user` - Apply definition to ALL claims excluding wilderness.  

Note: This context has higher priority than `gd_claim_default`. During server startup, GD will apply any flag definition using the override context as a persistent permission in the `griefdefender_override` LP group which has the highest priority of GD flag groups.  

See [GriefDefender - Context](https://docs.griefdefender.com/wiki/advanced/Contexts.html) for more information on how contexts work in GD.  
See [LuckPerms - Context](https://luckperms.net/wiki/Context) for more information on how contexts work with LP.  

#### Default Groups

The `default-groups` section allows admins to segment specific LP groups with their own default values. These permissions will always be applied as persistent in LP which means they will exist in storage.  

##### Example 1

If you want to provide default values based on trust you could do the following :  

```
default-groups {
    accessor=false,
    container=false
}
```

This would prevent users with accessor and container trust from interacting with villagers by default. However, a claim owner could override this default by toggling the `villager-trade` flag under `ACCESSOR` or `CONTAINER` menu in GUI.  
Note: By default, users will only be able to control `PUBLIC` flags in GUI. In order for a user to control user trust flags, they must be assigned the following permissions :  

```
griefdefender.advanced.user.gui.flag.group.owner
griefdefender.advanced.user.gui.flag.group.accessor
griefdefender.advanced.user.gui.flag.group.builder
griefdefender.advanced.user.gui.flag.group.container
griefdefender.advanced.user.gui.flag.group.manager
```

Note: These LP groups are actually prefixed with `griefdefender_` but GD allows you to omit the prefix. Other LP groups require the full group name.  


##### Example 2

Deny users in `novice` group to interact with all villagers in claims by default.  

```
default-groups {
    novice=false
}
```

Even though the `default-value` is set to `true` by default, this setting would instruct GD to deny any user part of the `novice` group from interacting with villagers.  


##### Example 3

Set default that affects all claim owners in existing claims.  

```
default-groups {
    manager=false
}
```

The manager trust group has a special use case for the `default-groups` section. It not only affects users with manager trust but also affects owners. Admins can utilize this group to control claim owner defaults.  

Note: If you want to restrict claim owners from overriding this default value, you should deny the permission `griefdefender.advanced.user.gui.flag.group.manager` so they are not able to see the group in GUI.  

#### Default value  

`default-value=true` - This is the default-value GD will use when applying the definition during startup.  
GD will only apply this value during startup as a transient permission to the if the context is `gd_claim_default` . If the context is `gd_claim_override` then it will apply the value as a persistent permission to the `griefdefender_override` group.  
If the definition does not contain one of these contexts then the default value is ignored.  

#### Enabled  

`enabled=true` - This controls whether the definition is enabled in GD. If set to `false`, the definition will not be applied at server startup and will NOT be shown to users in GUI.  

#### Icon

This setting controls the icon settings that will be used when the flag definition is displayed in the inventory GUI. It does NOT affect anything within the Chat GUI.  
The following icon settings can be used within the icon section :  

Key            |  Type | Description | 
---------------|---------------|--------------|
```enchanted``` | Boolean      | Controls whether the icon glows when displayed.
```icon-flags``` | List  | Controls what shows up on overlay of the icon via flags. Accepts the following flag values : <br>    ```hide_attributes``` - Controls whether icon attributes are displayed. <br> ```hide_destroys``` - Controls whether to show what can break or destroy. <br>  ```hide_dye``` - Controls whether to show dyes. <br>  ```hide_enchants``` - Controls whether to show enchants. <br> ```hide_placed_on``` - Controls whether to show what can be built or placed on.<br>```hide_potion_effects``` - Controls whether to show potion effects.<br>```hide_unbreakable``` - Controls whether to show the unbreakable state.
```lore``` | String | Controls the lore displayed when hovering over icon.
```quantity``` | Integer | Controls the quantity displayed with icon.
```model-data``` | Integer | Controls the custom model data associated with icon.
```id``` | String | The identifier used for the icon. <br> Ex. ```minecraft:emerald``` <br> See [Minecraft ID List](https://minecraft-ids.grahamedgecombe.com/) for a complete list of identifiers that can be used for icons.
```title``` | String | Controls the hover title displayed when hovering over icon. <br> Ex. ```&6villager-trade```.

#### Owner mode
:::: warning Important  
In order for players to utilize owner mode, they must have the following permission `griefdefender.advanced.user.gui.flag.group.owner`. If a player does not have this permission, they will not see the owner section in GUI.  
::::  

Owner mode is only applicable when a flag definition action can be caused by a player.  
For example, `fall-player-damage` affects whether a player can receive damage when falling. If this flag is set under the `PUBLIC` section, it will only affect non-trusted users. However, if the flag definition has `owner-mode` set to `true` then this flag will also be displayed under the `OWNER` section allowing claim owners to control whether or not they should receive fall damage in their claims.  

Note: In most cases, `owner-mode` is set to false and not used.  


#### Permissions  

```
permissions=[
    "flag=interact-entity-secondary, target=minecraft:villager, source=minecraft:player"
]
```

This flag definition only contains 1 permission entry.  

`flag=interact-entity-secondary` - Uses the base flag `interact-entity-secondary` which is triggered when a player right-clicks on an entity in the world.  
`target=minecraft:villager` - Sets the target to villager.  
`source=minecraft:player` - Sets the source to player.  

In order for this definition to be triggered, a player must right-click on a villager in the world.  

Permissions can hold one or more flag entries. To add an additional line, add a `,` at end of previous then insert a new line.     
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

See [Contexts](/wiki/advanced/Contexts.html) for more information on how contexts work.  
See [Minecraft ID List](https://minecraft-ids.grahamedgecombe.com/)  


### Minecraft Flag Definition Preset Config  

For more information on what you can do with the flags config, see below

<details>
  <summary>Minecraft Preset</summary>

```
# A collection of definitions designed for vanilla minecraft.
# Each group defined will be displayed in the flag or option GUI for users.
# Groups can have the following settings : 
# enabled=<true|false>: Whether the group is enabled.
# admin-group=<true|false>: Whether this group is considered for admin use only.
# Note: GUI toggles in PRESETS will always apply to current claim only.
#    It is recommended not to assign this permission to users for best experience.
# value=<true|false>: This is used to set a default value for the definition. It is only used in conjunction with 'override=<type>, default=<type> settings.
# contexts=["key=value"]: A list of definition contexts that will be applied to all permissions.
# Note: This is primary used with 'default' and 'override' contexts. Ex. contexts=["default=global"]
# Note: You must specify one of the following contexts :'gd_claim_default=<type>' or 'gd_claim_override=<type>''
# Note: Context values support wildcards '?' and '*' by using Apache's wildcard matcher.
# The wildcard '?' represents a single character.
# The wildcard '*' represents zero or more characters.
# Each group will have an associated permission in order to be viewable.
# The user groups will use the permission : 'griefdefender.user.definition.flag.<preset>.<group>' and 'griefdefender.user.definition.option.<preset>.<group>'
# The admin groups will use the permission : 'griefdefender.admin.definition.flag.<preset>.<group>' and 'griefdefender.admin.definition.option.<preset>.<group>'
# Within each group, you can define definitions.
# Each flag definition must be defined in the following format:
# enabled: Controls whether the definition is enabled. Accepts a value of 'true' or 'false'
# default-value: The default value to assign flag definition.
# description: The flag description to display on hover. Uses the legacy text format.
# permissions: The list of permissions to link to definition. Permissions can accept various contexts such as :
# flag=<linked-flag>: This context is used to link the permission to a GD specific flag. Ex. 'flag=block-break' would link permission to GD's block-break flag
# source=<id>: This context is used to specify a source id such as 'minecraft:creeper'.
# target=<id>: This context is used to specify a target id such as 'minecraft:chest'.
# state=<properties>: This context is used to specify a blockstate property such as 'state=lit:true'.
# Note: All definitions that contain a definition context of 'gd_claim_default' or 'gd_claim_override' will be applied to permissions during server startup.
# Note: Required if no source or target context is specified, the permission will default to ALL.
# Note: Commonly used contexts are : flag, source, target, state, used_item, item_name, world, server
# These contexts may change, See https://github.com/bloodmc/GriefDefender/wiki/Contexts for latest information.

minecraft {
    # The plugin id's that this preset depends on in order to load. Note: Plugin id's should be separated by comma. Note: Leave blank if only using GriefDefender flags/options.
    depend=""
    enabled=true
    groups {
        admin {
            # Set to true if this definition group is for admin use only.
            # Note: If admin group, the permission is 'griefdefender.admin.custom.flag.<groupname>
            # Note: If user group (admin set false), the permission is 'griefdefender.user.definition.flag.<preset>.<group>.<flagname>
            admin-group=true
            definitions {
                ambient-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:bat_spawn_egg"
                        title="&6ambient-spawn"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-spawn, target=#ambient"
                    ]
                }
                animal-block-modify {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:chorus_plant"
                        title="&6animal-block-modify"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=block-break, source=#animal",
                        "flag=block-modify, source=#animal"
                    ]
                }
                animal-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:pig_spawn_egg"
                        title="&6animal-spawn"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-spawn, target=#animal"
                    ]
                }
                aquatic-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:squid_spawn_egg"
                        title="&6aquatic-spawn"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-spawn, target=#aquatic"
                    ]
                }
                armorstand-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:armor_stand"
                        title="&6armorstand-use"
                    }
                    owner-mode=true
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
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:chorus_fruit"
                        title="&6chorus-fruit-teleport"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=item-use, target=minecraft:chorus_fruit, source=minecraft:player"
                    ]
                }
                commandblock-block-break {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:command_block"
                        title="&6commandblock-block-break"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=block-break, source=minecraft:command_block, source=minecraft:chain_command_block, source=minecraft:repeating_command_block"
                    ]
                }
                commandblock-block-place {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:command_block"
                        title="&6commandblock-block-place"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=block-place, source=minecraft:command_block, source=minecraft:chain_command_block, source=minecraft:repeating_command_block"
                    ]
                }
                creeper-block-explosion {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:creeper_head"
                        title="&6creeper-block-explosion"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=explosion-block, source=minecraft:creeper"
                    ]
                }
                creeper-entity-explosion {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:creeper_head"
                        title="&6creeper-entity-explosion"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=explosion-entity, source=minecraft:creeper"
                    ]
                }
                endcrystal-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:end_crystal"
                        title="&6endcrystal-use"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=projectile-impact-entity, target=minecraft:end_crystal, source=minecraft:arrow",
                        "flag=interact-item-secondary, target=minecraft:end_crystal, source=minecraft:player",
                        "flag=entity-damage, target=minecraft:end_crystal, source=minecraft:player",
                        "flag=interact-entity-secondary, target=minecraft:end_crystal, source=minecraft:player"
                    ]
                }
                entity-armorstand-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=true
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:armor_stand"
                        title="&6entity-armorstand-damage"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-damage, target=minecraft:armor_stand, source=minecraft:player",
                        "flag=projectile-impact-entity, target=minecraft:armor_stand, source=minecraft:player",
                        "flag=entity-damage, source=#monster, target=minecraft:armor_stand",
                        "flag=projectile-impact-entity, source=#monster, target=minecraft:armor_stand"
                    ]
                }
                entity-itemframe-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=true
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:item_frame"
                        title="&6entity-itemframe-damage"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-damage, target=minecraft:glow_item_frame, target=minecraft:item_frame",
                        "flag=projectile-impact-entity, target=minecraft:glow_item_frame, target=minecraft:item_frame"
                    ]
                }
                exp-drop {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:experience_bottle"
                        title="&6exp-drop"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-spawn, target=minecraft:xp_orb"
                    ]
                }
                fall-entity-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=true
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:feather"
                        title="&6fall-entity-damage"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-damage, source=minecraft:fall"
                    ]
                }
                fall-player-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:feather"
                        title="&6fall-player-damage"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-damage, target=minecraft:player, source=minecraft:fall"
                    ]
                }
                falling-block-break {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:sand"
                        title="&6falling-block-break"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-break, source=minecraft:fall"
                    ]
                }
                fire-block-damage {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:magma_block"
                        title="&6fire-block-damage"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=block-modify, source=minecraft:fire"
                    ]
                }
                fire-entity-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:magma_cream"
                        title="&6fire-entity-damage"
                    }
                    owner-mode=true
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
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:dead_bush"
                        title="&6lightning-damage"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-damage, source=minecraft:lightning_bolt"
                    ]
                }
                monster-animal-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:skeleton_skull"
                        title="&6monster-animal-damage"
                    }
                    owner-mode=false
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
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:zombie_head"
                        title="&6monster-player-damage"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=entity-damage, source=#monster, target=minecraft:player",
                        "flag=projectile-impact-entity, source=#monster, target=minecraft:player"
                    ]
                }
                monster-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:zombie_spawn_egg"
                        title="&6monster-spawn"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-spawn, target=#monster"
                    ]
                }
                piston-item-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:piston"
                        title="&6piston-item-spawn"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=item-spawn, source=minecraft:piston",
                        "flag=item-spawn, source=minecraft:sticky_piston"
                    ]
                }
                piston-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:sticky_piston"
                        title="&6piston-use"
                    }
                    owner-mode=true
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
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:diamond_pickaxe"
                        title="&6player-block-break"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=block-break, source=minecraft:player"
                    ]
                }
                player-block-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:stone_button"
                        title="&6player-block-interact"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=interact-block-secondary, source=minecraft:player"
                    ]
                }
                player-block-place {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:grass_block"
                        title="&6player-block-place"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=block-place, source=minecraft:player"
                    ]
                }
                player-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:cactus"
                        title="&6player-damage"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=entity-damage, target=minecraft:player",
                        "flag=projectile-impact-entity, target=minecraft:player"
                    ]
                }
                player-deny-flight {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="false"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:feather"
                        title="&6player-deny-flight"
                    }
                    permissions=[
                        "option=player-deny-flight"
                    ]
                }
                player-deny-glide {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="false"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:elytra"
                        title="&6player-deny-glide"
                    }
                    permissions=[
                        "option=player-deny-glide"
                    ]
                }
                player-deny-godmode {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="false"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:totem_of_undying"
                        title="&6player-deny-godmode"
                    }
                    permissions=[
                        "option=player-deny-godmode"
                    ]
                }
                player-deny-hunger {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="false"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:cooked_beef"
                        title="&6player-deny-hunger"
                    }
                    permissions=[
                        "option=player-deny-hunger"
                    ]
                }
                player-enderpearl-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:ender_pearl"
                        title="&6player-enderpearl-interact"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=interact-item-secondary, source=minecraft:player, target=minecraft:ender_pearl"
                    ]
                }
                player-endportal-use {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:end_portal_frame"
                        title="&6player-endportal-use"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-teleport-from, source=minecraft:end_portal, target=minecraft:player"
                    ]
                }
                player-entity-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:carrot_on_a_stick"
                        title="&6player-entity-interact"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=interact-entity-secondary, source=minecraft:player"
                    ]
                }
                player-exit {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:iron_door"
                        title="&6player-exit"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=exit-claim, source=minecraft:player"
                    ]
                }
                player-fly-speed {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="0"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:firework_rocket"
                        title="&6player-fly-speed"
                    }
                    permissions=[
                        "option=player-fly-speed"
                    ]
                }
                player-gamemode {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=undefined
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:emerald_block"
                        title="&6player-gamemode"
                    }
                    permissions=[
                        "option=player-gamemode"
                    ]
                }
                player-health-regen {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="0"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:glistering_melon_slice"
                        title="&6player-health-regen"
                    }
                    permissions=[
                        "option=player-health-regen"
                    ]
                }
                player-item-drop {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:dropper"
                        title="&6player-item-drop"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=item-drop, source=minecraft:player"
                    ]
                }
                player-item-drop-lock {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="false"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:piston"
                        title="&6player-item-drop-lock"
                    }
                    permissions=[
                        "option=player-item-drop-lock"
                    ]
                }
                player-item-pickup {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:hopper"
                        title="&6player-item-pickup"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=item-pickup, source=minecraft:player"
                    ]
                }
                player-itemframe-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:item_frame"
                        title="&6player-itemframe-interact"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=interact-entity-secondary, target=minecraft:glow_item_frame, target=minecraft:item_frame, source=minecraft:player"
                    ]
                }
                player-itemhanging-place {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:item_frame"
                        title="&6player-itemhanging-place"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=interact-item-secondary, target=#hanging, source=minecraft:player"
                    ]
                }
                player-keep-inventory {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=undefined
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:ender_chest"
                        title="&6player-keep-inventory"
                    }
                    permissions=[
                        "option=player-keep-inventory"
                    ]
                }
                player-keep-level {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=undefined
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:experience_bottle"
                        title="&6player-keep-level"
                    }
                    permissions=[
                        "option=player-keep-level"
                    ]
                }
                player-netherportal-use {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:obsidian"
                        title="&6player-netherportal-use"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-teleport-from, source=minecraft:nether_portal, target=minecraft:player"
                    ]
                }
                player-teleport-cost {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="0"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:ender_eye"
                        title="&6player-teleport-cost"
                    }
                    permissions=[
                        "option=player-teleport-cost"
                    ]
                }
                player-teleport-delay {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="0"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:clock"
                        title="&6player-teleport-delay"
                    }
                    permissions=[
                        "option=player-teleport-delay"
                    ]
                }
                player-teleport-from {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:magenta_glazed_terracotta"
                        title="&6entity-itemframe-damage"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-teleport-from, target=minecraft:player"
                    ]
                }
                player-teleport-to {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=true
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:magenta_glazed_terracotta"
                        title="&6entity-itemframe-damage"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-teleport-to, target=minecraft:player"
                    ]
                }
                player-villager-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:tripwire_hook"
                        title="&6player-villager-damage"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=entity-damage, target=minecraft:villager, source=minecraft:player",
                        "flag=projectile-impact-entity, target=minecraft:villager, source=minecraft:player"
                    ]
                }
                player-walk-speed {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="0"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:leather_boots"
                        title="&6player-walk-speed"
                    }
                    permissions=[
                        "option=player-walk-speed"
                    ]
                }
                player-weather {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=undefined
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:lightning_rod"
                        title="&6player-weather"
                    }
                    permissions=[
                        "option=player-weather"
                    ]
                }
                pvp-combat-command {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="false"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:command_block"
                        title="&6pvp-combat-command"
                    }
                    permissions=[
                        "option=pvp-combat-command"
                    ]
                }
                pvp-combat-teleport {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="false"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:ender_pearl"
                        title="&6pvp-combat-teleport"
                    }
                    permissions=[
                        "option=pvp-combat-teleport"
                    ]
                }
                ravager-block-break {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:ravager_spawn_egg"
                        title="&6ravager-block-break"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-break, source=minecraft:ravager"
                    ]
                }
                silverfish-block-infest {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:infested_cobblestone"
                        title="&6silverfish-block-infest"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-modify, source=minecraft:silverfish"
                    ]
                }
                tnt-block-explosion {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:tnt"
                        title="&6tnt-block-explosion"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=explosion-block, source=minecraft:tnt"
                    ]
                }
                tnt-entity-explosion {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:tnt"
                        title="&6tnt-entity-explosion"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=explosion-entity, source=minecraft:tnt"
                    ]
                }
                turtle-egg-hatch {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:egg"
                        title="&6turtle-egg-hatch"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-place, source=minecraft:turtle, target=minecraft:turtle_egg",
                        "flag=block-break, source=minecraft:turtle_egg, target=minecraft:turtle_egg",
                        "flag=block-modify, source=minecraft:turtle_egg, target=minecraft:turtle_egg",
                        "flag=entity-damage, source=minecraft:turtle_egg, target=minecraft:turtle_egg"
                    ]
                }
                villager-farm {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:composter"
                        title="&6villager-farm"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-break, source=minecraft:villager, target=#crops",
                        "flag=block-place, source=minecraft:villager, target=#crops"
                    ]
                }
                villager-raid {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="false"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:crossbow"
                        title="&6villager-raid"
                    }
                    permissions=[
                        "option=raid"
                    ]
                }
                wither-block-break {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:wither_skeleton_skull"
                        title="&6wither-block-break"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-break, source=minecraft:wither"
                    ]
                }
                wither-entity-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:nether_star"
                        title="&6wither-entity-damage"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=entity-damage, source=minecraft:wither"
                    ]
                }
            }
            # Whether definition group is enabled.
            enabled=true
            icon {
                enchanted=false
                id="minecraft:enchanted_golden_apple"
                title="&cAdmin"
            }
        }
        user {
            # Set to true if this definition group is for admin use only.
            # Note: If admin group, the permission is 'griefdefender.admin.custom.flag.<groupname>
            # Note: If user group (admin set false), the permission is 'griefdefender.user.definition.flag.<preset>.<group>.<flagname>
            admin-group=false
            definitions {
                block-fertilize {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:bone_meal"
                        title="&6block-fertilize"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=block-grow, used_item=minecraft:bone_meal, target=#crops, source=minecraft:player",
                        "flag=block-grow, used_item=minecraft:bone_meal, target=#plants, source=minecraft:player",
                        "flag=interact-item-secondary, target=minecraft:bonemeal, source=minecraft:player"
                    ]
                }
                block-trampling {
                    contexts=[
                        "gd_claim_override=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:dirt"
                        title="&6block-trampling"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=collide-block, target=minecraft:turtle_egg, target=minecraft:farmland"
                    ]
                }
                chest-access {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:chest"
                        title="&6chest-access"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=interact-block-secondary, target=minecraft:chest_minecart, target=minecraft:chest, source=minecraft:player, target=minecraft:trapped_chest",
                        "flag=interact-inventory, target=minecraft:chest_minecart, target=minecraft:chest, source=minecraft:player, target=minecraft:trapped_chest"
                    ]
                }
                crop-growth {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:wheat"
                        title="&6crop-growth"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-grow, target=#crops"
                    ]
                }
                damage-animals {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:mutton"
                        title="&6damage-animals"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-damage, target=#animal",
                        "flag=projectile-impact-entity, target=#animal",
                        "flag=entity-damage, target=#fishes",
                        "flag=projectile-impact-entity, target=#fishes"
                    ]
                }
                enderman-grief {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:ender_eye"
                        title="&6enderman-grief"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-break, source=minecraft:enderman",
                        "flag=block-place, source=minecraft:enderman"
                    ]
                }
                fire-spread {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:blaze_powder"
                        title="&6fire-spread"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=block-spread, source=minecraft:fire",
                        "flag=block-spread, source=minecraft:lava"
                    ]
                }
                grass-growth {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:tall_grass"
                        title="&6grass-growth"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-grow, target=minecraft:grass"
                    ]
                }
                ice-form {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:packed_ice"
                        title="&6ice-form"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-modify, target=minecraft:ice"
                    ]
                }
                ice-melt {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:blue_stained_glass"
                        title="&6ice-melt"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-modify, target=minecraft:water, source=minecraft:ice"
                    ]
                }
                lava-flow {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:lava_bucket"
                        title="&6lava-flow"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=liquid-flow, source=minecraft:lava, target=minecraft:air"
                    ]
                }
                leaf-decay {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:oak_leaves"
                        title="&6leaf-decay"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=leaf-decay"
                    ]
                }
                lighter {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:flint_and_steel"
                        title="&6lighter"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=interact-item-secondary, target=minecraft:flint_and_steel, source=minecraft:player"
                    ]
                }
                mushroom-growth {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:brown_mushroom_block"
                        title="&6mushroom-growth"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-grow, target=#mushroom"
                    ]
                }
                mycelium-spread {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:mycelium"
                        title="&6mycelium-spread"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-spread, target=minecraft:mycelium"
                    ]
                }
                painting-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:painting"
                        title="&6painting-damage"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-damage, target=minecraft:painting"
                    ]
                }
                player-enter {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:oak_door"
                        title="&6player-enter"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=enter-claim, source=minecraft:player"
                    ]
                }
                pvp {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:diamond_sword"
                        title="&6pvp"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=entity-damage, target=minecraft:player, source=minecraft:player",
                        "flag=projectile-impact-entity, target=minecraft:player, source=minecraft:player"
                    ]
                }
                ride {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:saddle"
                        title="&6ride"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-riding, target=#vehicle, source=minecraft:player",
                        "flag=interact-entity-secondary, target=#vehicle, source=minecraft:player"
                    ]
                }
                sign-edit {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:oak_sign"
                        title="&6sign-edit"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-modify, target=#signs, source=minecraft:player"
                    ]
                }
                sign-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:oak_sign"
                        title="&6sign-use"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=interact-block-primary, target=#signs, source=minecraft:player",
                        "flag=interact-block-secondary, target=#signs, source=minecraft:player"
                    ]
                }
                sleep {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:red_bed"
                        title="&6sleep"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=interact-block-secondary, target=#beds, source=minecraft:player",
                        "flag=interact-item-secondary, target=#beds, source=minecraft:player"
                    ]
                }
                snow-fall {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:snowball"
                        title="&6snow-fall"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-place, target=minecraft:snow, source=minecraft:air"
                    ]
                }
                snow-melt {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:snow_block"
                        title="&6snow-melt"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-break, source=minecraft:snow"
                    ]
                }
                snowman-trail {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:snow"
                        title="&6snowman-trail"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-place, source=minecraft:snow_golem, target=minecraft:snow"
                    ]
                }
                soil-dry {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:farmland"
                        title="&6soil-dry"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-modify, source=minecraft:farmland, state=moisture:0"
                    ]
                }
                vehicle-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:oak_boat"
                        title="&6vehicle-use"
                    }
                    owner-mode=true
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
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:emerald"
                        title="&6villager-trade"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=interact-entity-secondary, target=minecraft:villager, source=minecraft:player"
                    ]
                }
                vine-growth {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:vine"
                        title="&6vine-growth"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-spread, target=minecraft:vine"
                    ]
                }
                water-flow {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:water_bucket"
                        title="&6water-flow"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=liquid-flow, source=minecraft:water, target=minecraft:air",
                        "flag=liquid-flow, source=minecraft:water, target=#crops"
                    ]
                }
            }
            # Whether definition group is enabled.
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
This depends on what permission the user has set and the toggle status of `/claimgui`.  See the [Main GUI](/wiki/basic/GUI.html) page for more details.  

All flag definitions will have a value of `true` or `false` and will represent the current active value for the claim you are in.

Once the flag definition GUI has been displayed, the user will see a subsection labeled `PUBLIC` and additional subsections based on permissions.  
These subsections work as follows  :

### PUBLIC  

The public section of GUI controls flag permissions for non-trusted users. Toggling flags under this section will NOT affect trusted users or claim owner.

Note: All flag definitions will always support the `PUBLIC` type and thus will always be listed under it.  
Note: All permissions will be set on LP group `griefdefender_definition`  

### OWNER  

The owner section of GUI controls flag permissions for trusted users including the claim owner.  

Note: A flag definition will only be displayed under `OWNER` if the flag definition has `owner-mode` set to `true`.  
Note: All claim flag permissions will be set on LP user that owns the claim.   
Note: For wilderness claims, all claim flag permissions are set on the LP wilderness user `_GDWorld_` with UUID `00000000-0000-0000-0000-000000000000`  
Note: For admin claims, all claim flag permissions are set on the LP admin user `_GDAdmin_` with UUID `11111111-1111-1111-1111-111111111111`   


### Permissions  

The following permission controls the user's ability to toggle flag definitions in GUI  
`griefdefender.user.definition.flag.<preset>.<group>.<definition_name>`

As an example, lets assume you want to deny user access to toggle the `damage-animals` flag in GUI.  
You would enter the following in LuckPerms  
`/lp group <groupname> permission set griefdefender.user.definition.flag.minecraft.user.damage-animals false`

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
```block-trampling``` |  false  | Controls whether farmland and turtle eggs can be trampled.
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
```player-enter``` | true | Controls whether a player can enter this claim.
```pvp``` | true | Controls whether PvP combat is allowed.
```ride``` | false | Controls whether vehicles(including animals), not owned by the player, can be mounted.
```sign-edit``` | true | Controls whether players can edit signs.
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
