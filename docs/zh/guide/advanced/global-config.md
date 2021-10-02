---
title: Global Config
category: Configuration
icon: setting
---

GriefDefender's default config offers extended customization for your server. Below is a breakdown of all default variables for your convenience. 

> :warning: Some options can cause irreparable changes to your data. Please ensure that you have read the sub-text found next to the variables in your generated `global.conf` file. **All migration variables should ALWAYS be used AFTER a backup of your data is made.** :warning:

---

## Plugin Dependency
Do note, cost variables (such as Towns' `creation-cost`) **require** an Economy plugin. Similarly, MCClans is only needed if you plan on using it's integration across plugins. It is **not**, however, required to use GriefDefender's Town claims.

## Modular Configuration
GriefDefender allows for modular enabling. As per default configuration files however, all modules are enabled. Disabling a module will render all flags unusable. Only do it if you do not plan on using GriefDefender's management of said flag. You can choose to disable the following: 
* Block-Changes: block-break, block-grow, block-modify, block-place, block-pre, block-spread
* Collisions: collide-block, collide-entity
* Commands: command-execute
* Movements: enter-claim, exit-claim
* Entity: entity-damage, entity-riding, entity-spawn, entity-teleport-from, entity-teleport-to
* Explosions: explosion-block, explosion-entity
* Interacts: interact-block-primary, interact-block-secondary, interact-entity-primary, interact-entity-secondary, interact-inventory, interact-inventory-click, interact-item-primary, interact-item-secondary
* Item: item-drop, item-pickup, item-spawn, item-use
* Liquids: liquid-flow
* Portals: portal-use
* Projectiles: projectile-impact-block, projectile-impact-entity

# Ban
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| blocks | A map of banned block id's and messages | [ ] |
| entities | A map of banned entity id's and messages | [ ] |
| items | A map of banned item id's and messages | [ ] |

Used to store a list of global banned blocks, entities, and items. Use the `/claimban` command to set.

# Blacklist
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| flag-id-blacklist | A list of id's ignored by flags. | [ ] |
| global-source | A global list of source id's that are ignored by events. <br />Note: This only affects events where the id specified is the source. | [ ] |
| global-target | A global list of target id's that are ignored by events. <br />Note: This only affects events where the id specified is the target. | [ ] |
| entity-damage-source-blacklist | A global list of entity damage sources that are ignored in events by default. | [contact,cramming,drowning,<br />"falling_block",flyintowall,"fire_tick",<br />"hot_floor",poison,starvation,suffocation,<br />suicide,void] |

The blacklist controls events from interacting with items, blocks, or entities on either a per-flag or global basis.

It supports wildcards `?` and `*` where `?` represents a single character and `*` represents zero or more characters.
For more info you can go to [Apache's wildcard matcher.](https://commons.apache.org/proper/commons-io/javadocs/api-2.5/org/apache/commons/io/FilenameUtils.html#wildcardMatch(java.lang.String,%20java.lang.String))

To add an item into the blacklist simply add the ID between a set of quotation marks.

An example of how to block items from being checked by GD is as shown

`block-break=["modID:itemID"]`

# Claims
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| auto-chest-claim-block-radius | Radius used (in blocks) for auto-created claim when a chest is placed. Set to -1 to disable chest claim creation. | 4 |
| auto-nature-restore | Whether survival claims will be automatically restored to nature when auto-deleted. | FALSE |
| auto-schematic-restore | Whether survival claims will be automatically restored to its claim creation schematic on abandon/expiration. <br />Note: Enabling this feature will cause ALL newly created claims to automatically create a special schematic that will be used to restore claim on abandon/expiration.<br />Note: Enabling this feature will disable ability to resize claims.<br />Note: It is HIGHLY recommended to disable building in the wilderness before using this feature to avoid players exploiting.<br />Note: It is also recommended to ONLY use this feature in newly created worlds where there is no existing player data.<br />Note: This does NOT affect deletions. If admins want to restore back to original schematic, they can select '__restore__' by using /claimschematic command.| FALSE |
| border-block-radius | Set claim border of specified radius (in blocks), centered on claim. If set to 1, adds an additional 1 block protected radius around claim. <br />Note: It is not recommended to set this value too high as performance can degrade due to deeper claim searches. | 0 |
| claim-block-task | Whether claim block task should run to accrue blocks for players. <br />Note: If in economy-mode, use setting 'use-claim-block-task' under economy category. <br />Note: To configure amount accrued, see 'blocks-accrued-per-hour' option at https://github.com/bloodmc/GriefDefender/wiki/Options-(Meta)#global-options | FALSE |
| claim-block-task-move-threshold | The minimum threshold of movement (in blocks) required to receive accrued claim blocks. <br />Note: The claim block task runs every 5 minutes which is the time each player will get to move the required amount of blocks. | 0 |
| claim-create-radius-limit | The radius limit for the /claimcreate command. | 256 |
| claims-enabled | Whether claiming is enabled or not. (0 = Disabled, 1 = Enabled). | 1 |
| expiration-cleanup-interval | The interval in minutes for cleaning up expired claims. Set to 0 to disable. | 63 |
| explosion-block-surface-blacklist | A list of source id's that cannot cause explosion damage to blocks above sea level. | [ ] |
| explosion-entity-surface-blacklist | A list of id's that cannot cause explosion damage to entities above sea level. | [ ] |
| explosion-surface-block-level | The 'Y' block level that is considered the surface for explosions. | 0 |
| inspection-tool | The item used to inspect claims with a right-click. <br />Note: Set to empty quotes if you want to assign no item and use '/claim' mode exclusively. | "minecraft:stick" |
| modification-tool | The item used to create/resize claims with a right click.<br />Note: Set to empty quotes if you want to assign no item and use '/claim' mode exclusively. | "minecraft:golden_shovel" |
| piston-protection-in-claims | Whether piston protection should be enabled within claims. Note: This does not affect pistons crossing into another claim, that is always protected. This only determines whether or not GD should process pistons if it doesn't cross into another claim. | false |
| player-trapped-cooldown | The cooldown time, in seconds, when using the '/trapped' command. | 300 |
| protect-tamed-entities | Whether tamed entities should be protected in claims. | true |
| reserved-claim-names | A list of reserved claim names for use only by administrators. | [ ] |
| restrict-world-max-height | Whether to restrict claiming to world max height. | true |

# Context
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| player-equipment | Whether player equipment contexts should be applied during permission checks. | true |
| potion-effects | Whether potion effect contexts should be applied during permission checks. | true |
| enchantments | Whether potion effect contexts should be applied during permission checks. | false |

# Economy
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| bank-system | Whether to enable the bank system for claims. Set to true to enable. | FALSE |
| bank-transaction-log-limit | The amount of transactions to keep for history. | 60 |
| economy-mode | Uses economy instead of player claim blocks for claim creation. If true, disables the claim block system in favor of economy. <br />Note: Using this mode disables the '/buyblocks' command as claim creation will pull funds directly from a player's economy balance. <br />Note: If players have existing claimblocks from past configurations, an admin must use the '/ecomigrateblocks' command to convert remainder to currency. | FALSE |
| rent-delinquent-task-apply-hour | The specific hour in day to attempt to get owed claim rent balances from delinquent renters. <br />Note: This uses military time and accepts values between 0-23. | 0 |
| rent-max-time-limit | Controls the maximum time limit(hours or days) that a claim owner can have their rental max set to. <br />Note: This only affects claim rentals that have a max specified. If no max is specified by the claim owner, a renter may rent as long as they want. | false |
| rent-restore-day-warning | Controls which day a player should start to receive warnings about their rented claim nearing expiration. <br />Ex. If set to '5', this will begin to send players messaging on login and at the rent apply hour when 5 days are remaining before expiration. <br />Note: This only applies if the owner has 'rent-restore' option enabled and the rent owner sets a max. | 5 |
| rent-schematic-restore-admin | Controls whether rented admin claims will use a schematic for restoration. <br />Note: If set, the claim will create a schematic on rental start and restore it back when finished. <br />Note: This ONLY applies to rentals with a max date set. | false |
| rent-sign | Whether rent signs are enabled. | FALSE |
| rent-system | Controls whether the rent system is enabled. | FALSE |
| rent-task-interval | The interval in minutes for checking claim rent payments that are due. Set to '0' to disable | 1 |
| rent-transaction-log-limit | The amount of transactions to keep for history. | 60 |
| sell-sign | Whether sell signs are enabled. | false |
| sign-update-interval | The interval in minutes for updating sign data. Set to '0' to disable | 1 |
| tax-apply-hour | The specific hour in day to apply tax to all claims. <br />Note: This uses military time and accepts values between 0-23. | 0 |
| tax-system | Whether to enable the tax system for claims. Set to true to enable. | FALSE |
| tax-transaction-log-limit | The amount of transactions to keep for history. | 60 |


# GUI
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| chat-capture-idle-timeout | The idle timeout in seconds when a command GUI will stop capturing chat. | 15 |
| command-input-idle-timeout | The idle timeout in seconds when a command GUI will stop waiting for player input. | 15 |

# Message
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| deny-message-action-bar | Controls whether to send claim deny messages to action bar. <br />Note: Setting to false will send messages to chat. | TRUE |
| enable-exit-chat-messages | Controls whether exit chat messages are displayed when both enter and exit messages are being sent to a player at the same time.For example, if both an enter and exit title message is configured in a claim then the exit title would be sent to chat if this setting is true. | FALSE |
| enter-claim-player-messages | Controls whether to display playername and claim display name as enter message if not set. <br /> Set to '1' to send messages to chat. <br /> Set to '2' to send messages to actionbar. <br />  Set to '3' to send messages to title. <br /> Set to 0 to disable. | 2 |
| enter-exit-chat-show-gd-prefix | Whether GD prefix should be shown in enter/exit chat messages. | TRUE |
| greeting-farewell-action-bar | Controls whether to send greeting/farewell messages to action bar by default. <br />Note: Setting to true will send messages to actionbar. <br />Note: This will only be set if there is no actionbar already set in claim. If so, it will use chat instead. | FALSE |
| locale | Set the locale to use for GP messages. Available languages: de_DE, en_US, es_ES, fr_FR, pl_PL, ru_RU, zh_HK. The data is stored under assets in jar. <br />Note: The language code must be lowercase and the country code must be uppercase. | "en_US" |
| locale-unicode-fix | Attempts to adjust unicode fonts to represent minecraft default fonts better. <br />Note: If you are using 'pl_PL' or 'ru_RU', this setting should be set to false. <br />Note: Any other languages that experience misalignment in chat menus should disable this setting. | TRUE |

# Migrators
## Bukkit
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| classic | Set to true to enable the classic migrator. <br />Note: Migrates GP bukkit classic claim data and GPFlags data, if available, to current format.<br />Note: It is recommended to backup data before using. | FALSE | 
| classic-database | Migrates GP bukkit classic database. | FALSE |
| classic-playerdata-threshold | Controls the last active player day threshold in order to avoid migrating inactive GP playerdata. To disable, set value to 0. <br />Note: For example, with the default value of '180' the the migrator will only migrate playerdata for players that played within the past 180 days. <br />Note: This only handles a player's playerdata where accrued/bonus block information is stored. This setting has no effect on claim migration. <br />Note: This avoids storing inactive user data in LuckPerms which helps keep '/lp editor' view clean. | 180 |
| griefdefender-file-to-database | Set to true to migrate from file format to database. <br />Note: The storage method must be set to hocon in order for this to work properly. <br />Note: After migration is complete, switch storage to database. <br />Note: This will NOT remove existing files in case you want to go back. | FALSE |
| red-protect | Set to true to enable RedProtect data migrator. | FALSE |
| worldguard | Set to true to enable WorldGuard data migrator. <br />Note: Only cuboid regions are supported. <br />Note: It is recommended to backup data before using. | FALSE |

## Sponge
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| griefprevention-bukkit | Set to true to enable the griefprevention bukkit migrator. <br />Note: Migrates GP bukkit classic claim data and GPFlags data, if available, to current format. <br />Note: It is recommended to backup data before using. | FALSE |
| griefprevention-sponge | Set to true to enable the griefprevention sponge migrator. <br />Note: Migrates GP sponge claim data to current format. <br />Note: It is recommended to backup data before using. | FALSE |
| red-protect | Set to true to enable RedProtect data migrator. <br />Note: All RedProtect data will be converted into basic claim data. | FALSE |
| worldguard | Set to true to enable WorldGuard data migrator. <br />Note: Only cuboid regions are supported. <br />Note: It is recommended to backup data before using. | FALSE |

# Optimization
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| dispenser-item-spawns | Controls whether dispener item spawns are ignored. | TRUE |
| entity-damage-living-passive | Controls whether entity damage events that contain both a source/target living passive entity, such as two animals fighting, are ignored. | TRUE |
| entity-damage-monster | Controls whether entity damage events that contain both a source/target monster are ignored. | TRUE |
| entity-item-pickup-non-players | Controls whether entity item pickups made by non-players are ignored. | TRUE |
| fall-non-player | Controls whether non-player falls are ignored. | TRUE |
| monster-player-damage | Controls whether monster attacks against a player are ignored. <br />Note: This does not include explosion damage. <br />Note: If you need to prevent damage from monsters in claims then this should remain false. | FALSE |
| player-monster-damage | Controls whether player attacks against a monster are ignored. <br />Note: This does not include explosion damage. | TRUE |

# Permission
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| griefdefender-claim-group-priority | The claimgroup permission group priority. | -60 |
| griefdefender-claim-priority | The claim permission group priority. | -60 |
| griefdefender-default-priority | The default permission group priority. | -80 |
| griefdefender-option-priority | The option permission group priority. | 0 |
| griefdefender-override-priority | The override permission group priority. | -40 |

# Player Data
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| claim-block-system | Determines which claim block system to use for claims. <br />Note: If set to VOLUME, claim blocks will use the chunk count system to balance 3d claiming. <br />Note: If set to AREA, the standard 2d block count system will be used. | AREA |
| context-storage-type | The context type used when storing playerdata within a permissions database. <br /> Available types are : global, server, world. (Default: global) <br /> Global will store data globally shared by all servers. <br /> Server will store data per server. Note: This requires servername to be properly set in permissions config. <br /> World will store data per world. | GLOBAL |


# PvP
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| combat-logout | Whether players should be killed if they logout while in pvp combat. | false |
| combat-timeout | How long combat is considered to continue after the most recent damage. | 15 |
| enabled | Whether pvp protection is enabled for players. <br />Note: Turnings this off disables all PvP functionality in GriefDefender. | true |

# Town
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| auto-nature-restore | Whether survival towns will be automatically restored to nature when auto-deleted. | FALSE |
| clan-require-town | Requires a town to be owned for MCClans. <br />Note: This is for Sponge only. | TRUE |
| cleanup-task-interval | The interval in minutes for restoring blocks in an expired town. | 5 |
| creation-cost | The required amount of funds to create a town. <br />Note: This requires an Economy plugin. | 0.0 |

# Visual
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| active-claim-visual-time | The active time, in seconds, to keep a claim's visuals shown to a player. <br />Note: If value is <= 0, GD will use the default value. | 60 |
| active-create-block-visual-time | The active time, in seconds, to keep a claim's create block visual shown to a player. <br />Note: This only applies during claim creation. <br />Note: If value is <= 0, GD will use the default value. | 180 |
| client-visuals-per-tick | The amount of block visuals a client can receive per tick when showing/hiding claims. | 12 |
| cuboid-level-visuals-2d | Whether to use cuboid visuals, in 2D claims, during inspection with owner min/max claim levels between 0 and 255 or 0 and 319 for MC 1.17+. <br />Note: WECUI visuals are not associated to this option. <br />Note: If enabled, this will send many block updates to players causing more client strain depending on size of claim. Use with caution. | FALSE |
| fill-spacing | The space between each filler visual block. | 10 |
| hide-borders-when-using-wecui | Whether to hide the glowstone/gold block borders when using WECUI. | FALSE |
| hide-fillers-when-using-wecui | Whether to hide the block fillers when using WECUI. | TRUE |
| hide-wecui-drag-visuals-2d | Whether drag visuals should be shown while creating a claim in 2D mode. | TRUE |
| claim-create-block | The visual block used during claim creation. | minecraft:diamond_block |
| admin-accent-block | The visual accent block used for admin claims. | minecraft:pumpkin |
| admin-corner-block | The visual corner block used for admin claims. | minecraft:glowstone |
| admin-filler-block | The visual filler block used for admin claims. | minecraft:pumpkin |
| basic-accent-block | The visual accent block used for basic claims. | minecraft:gold_block |
| basic-corner-block | The visual corner block used for basic claims. | minecraft:glowstone |
| basic-filler-block | The visual filler block used for basic claims. | minecraft:gold_block |
| error-accent-block | The visual accent block used to visualize an error in a claim. | minecraft:netherrack |
| error-corner-block | The visual corner block used to visualize an error in a claim. | minecraft:redstone_ore |
| error-filler-block | The visual filler block used to visualize an error in a claim. | minecraft:diamond_block |
| subdivision-accent-block | The visual accent block used for subdivision claims. | minecraft:white_wool or minecraft:wool for legacy versions |