---
title: Permissions
tag: Info
category: info
icon: node-tree
---

Grant ```griefdefender.user.*``` to your players and both ```griefdefender.user.*``` and ```griefdefender.admin.*``` to your staff/admins then deny permissions you do NOT want.  

### IMPORTANT
:::: warning Warning
If you do NOT grant the permission nodes above and instead grant singular permission nodes, you will not be supported as this goes against our recommendation.  
::::
If you alter any admin permissions while in-game, make sure you run `/gdreload` as GD caches various permissions for performance gains.  
Wildcard permission ```*``` is currently not supported.  
Use ```griefdefender.user.*``` and ```griefdefender.admin.*``` for admins instead. 
 
As GD makes heavy use of LP's `default` group, the following MUST be setup properly or GD will not function properly 

- All non-griefdefender LP groups have a path in inheritance to the `default` group.  
- The `default` group is inheriting GD's delivered groups : `griefdefender_option` `griefdefender_override`
- The `default` group is NOT disabled. LP strongly recommends to never disable this group.  
See [LuckPerms - Default Groups](https://luckperms.net/wiki/Default-Groups)

## LuckPerms

::: tip For large minecraft networks
If you manage a large network of minecraft servers and are using a centralized Luckperms database, make sure to follow [Luckperms - Syncing data between servers](https://luckperms.net/wiki/Syncing-data-between-servers) if you want Luckperms updates to be synchronized across all servers instantly.
:::

On first server boot of GriefDefender, 5 LP groups will automatically be created if they do not already exist.  

* `griefdefender_claim` - Stores all flag permissions applied to single claims via `/cf` command.  
ex. Executing the command `/cf block-place minecraft:wool true` would have the permission stored in this group.  
Note: This does not store permissions made through Flag Preset GUI.  
* `griefdefender_default` - Stores all flag permissions that contain `gd_claim_default` contexts via `/cf` command.  
ex. Executing the command `/cf block-place minecraft:wool true default=user` would have the permission stored in this group.  
Note: This does not store permissions made through Flag Preset GUI.  
* `griefdefender_definition` - Stores all flag definition permissions applied via `/cf` GUI.  
Note: This does not store permissions made through Flag Advanced GUI.  
* `griefdefender_option` - Stores all option meta permissions applied via command or GUI.  
* `griefdefender_override` - Stores all flag permissions that contain `gd_claim_override` context.  

* `griefdefender_claim_group` - Stores all flag permissions applied to group claims via `/cf` command.  
* `griefdefender_trust_resident` - Stores all trust permissions that have resident.  
* `griefdefender_trust_accessor` - Stores all trust permissions that have accessor.  
* `griefdefender_trust_builder` - Stores all trust permissions that have builder.  
* `griefdefender_trust_container` - Stores all trust permissions that have container.  
* `griefdefender_trust_manager` - Stores all trust permissions that have manager.  

## Luckperms default node weight
`griefdefender_option` should have `0` weight  
`griefdefender_override` should have `-40` weight  
`griefdefender_claim` should have `-60` weight  
`griefdefender_trust_manager` should have `-70` weight  
`griefdefender_trust_builder` should have `-71` weight  
`griefdefender_trust_container` should have `-72` weight  
`griefdefender_trust_accessor` should have `-73` weight  
`griefdefender_trust_resident` should have `-74` weight  
`griefdefender_claim_group` should have `-75` weight  
`griefdefender_definition` should have `-80` weight  
`griefdefender_default` should have `-100` weight  

### Useful MySQL DB queries

:warning: Replace `minecraft` with LuckPerms DB name and `griefdefender` with GD DB name

#### Select all admin claim permissions

```sql
SELECT A.* FROM minecraft.luckperms_group_permissions A, griefdefender.gd_claim_data B WHERE A.contexts LIKE CONCAT('%', BIN_TO_UUID(B.claim_uuid), '%') AND B.claim_type = 'admin'
UNION
SELECT * FROM minecraft.luckperms_group_permissions WHERE contexts LIKE CONCAT('%gd_claim_default":"admin"%')
```

#### Select all user claim permissions

```sql
SELECT A.* FROM minecraft.luckperms_group_permissions A, griefdefender.gd_claim_data B WHERE A.contexts LIKE CONCAT('%', BIN_TO_UUID(B.claim_uuid), '%') AND B.claim_type <> 'admin'
UNION
SELECT * FROM minecraft.luckperms_group_permissions WHERE contexts LIKE CONCAT('%gd_claim_default":"basic"%') OR contexts LIKE CONCAT('%gd_claim_default":"user"%') 
```

#### Delete all user claim permissions

:::: warning Warning
Backup LuckPerms database before performing deletes.  
You have been WARNED!
::::

```sql
DELETE FROM minecraft.luckperms_group_permissions A, griefdefender.gd_claim_data B WHERE A.contexts LIKE CONCAT('%', BIN_TO_UUID(B.claim_uuid), '%') AND B.claim_type <> 'admin'
DELETE FROM minecraft.luckperms_group_permissions WHERE contexts LIKE CONCAT('%gd_claim_default":"basic"%') OR contexts LIKE CONCAT('%gd_claim_default":"user"%') 
```


# User Permissions

## Claims
| Permission Node | Description |
| --------- | ----------- |
| griefdefender.user.claim.command.abandon.basic | Allows to abandon basic claims |
| griefdefender.user.claim.command.abandon.town | Allows to abandon town claims |
| griefdefender.user.claim.command.abandon-all | Allows to abandon all claims |
| griefdefender.user.claim.command.abandon-top-level  | Allows to abandon a claim and all its subdivisions |
| griefdefender.user.claim.command.basic-mode  | Allows to use basic claim shovel mode |
| griefdefender.user.claim.command.bank | Allows to use claim bank |
| griefdefender.user.claim.command.buy | Allows to buy a claim (Requires economy plugin) |
| griefdefender.user.claim.command.buy-blocks | Allows to buy claim blocks (Requires economy plugin) |
| griefdefender.user.claim.command.claim.tax | Allows to check/pay tax balance |
| griefdefender.user.claim.command.contract | Allows to contract(shrink) a claim in a direction |
| griefdefender.user.claim.command.cuboid | Allows to toggle cuboid claims mode |
| griefdefender.user.claim.command.expand | Allows to expand a claim in a direction |
| griefdefender.user.claim.command.farewell | Allows to set a claim farewell |
| griefdefender.user.claim.command.give.blocks | Allows to give claim blocks to another player |
| griefdefender.user.claim.command.give.pet | Allows a player to give away a pet they tamed |
| griefdefender.user.claim.command.greeting | Allows to set a claim greeting |
| griefdefender.user.claim.command.info.others | Allows to get information about others claims |
| griefdefender.user.claim.command.info.base | Allows to get information about claims |
| griefdefender.user.claim.command.info.teleport.others | Allows a user to use the teleport feature in claiminfo on other claims |
| griefdefender.user.claim.command.info.teleport.base | Allows a user to use the teleport feature in claiminfo |
| griefdefender.user.claim.command.inherit | Allows to toggle inheritance from parent claim |
| griefdefender.user.claim.command.list.base | Allows to list your claims |
| griefdefender.user.claim.command.list.others | Allows to list other players claims |
| griefdefender.user.claim.command.list-flags | Allows to list claim flags |
| griefdefender.user.claim.command.name | Allows to set a claimname |
| griefdefender.user.claim.command.sell | Allows to sell a claim (Requires economy plugin) |
| griefdefender.user.claim.command.sell-blocks | Allows to sell claim blocks (Requires economy plugin) |
| griefdefender.user.claim.command.set-spawn | Allows to set claim spawn |
| griefdefender.user.claim.command.spawn | Allows to use claim spawn |
| griefdefender.user.claim.command.subdivide-mode | Allows to use subdivide shovel mode |
| griefdefender.user.claim.command.town-mode | Allows to use town shovel mode |
| griefdefender.user.claim.command.transfer  | Allows to transfer own claims |
| griefdefender.user.claim.command.trapped | Teleports the player to a safe location if stuck and unable to build |
| griefdefender.user.claim.command.unlock-drops | Allows other players to pickup any items dropped from death |
| griefdefender.user.claim.command.worldedit-claim | Allows to use a worldedit selection to create a claim. |
| griefdefender.user.claim.command.claim-tool  | Allows whether players can use the claim tool. |
| griefdefender.user.claim.create.base  | Allows to create a basic claim |
| griefdefender.user.claim.create.basic | Allows to create/resize basic claims |
| griefdefender.user.claim.create.subdivision | Allows to create/resize subdivision claims |
| griefdefender.user.claim.create.town | Allows to create/resize town claims |
| griefdefender.user.claim.create.cuboid.basic | Allows to create/resize basic claims in 3D mode |
| griefdefender.user.claim.create.cuboid.subdivision | Allows to create/resize subdivision claims in 3D mode |
| griefdefender.user.claim.create.cuboid.town | Allows to create/resize town claims in 3D mode |
| griefdefender.user.claim.resize | Allows to resize claims |
| griefdefender.user.claim.show-tutorial | Allows to see claim tutorial text when creating/resizing claims |
| griefdefender.user.claim.list.other | Allows to list other player claims |
| griefdefender.user.claim.visualize.base | Allows player to visualize their claims |
| griefdefender.user.claim.visualize.nearby | Allows player to visualize nearby claims |
| griefdefender.user.command.info.base | Allows to get information about self |
| griefdefender.user.command.info.others | Allows to get information about another player |
| griefdefender.user.command.version | Allows to get information about GD, server and LP versions |
| griefdefender.user.town.command.bank |  |
| griefdefender.user.town.command.info.base | Allows to get information about town claims |
| griefdefender.user.town.command.info.others | Allows to get information about others town claims |
| griefdefender.user.town.command.name | Allows to set a town claimname |
| griefdefender.user.town.command.tag | Allows to set the tag of your town |

## Plots
| Permission Node | Description |
| --------- | ----------- |
| griefdefender.user.claim.create.plot | Allow players to claim a nearby plot or a plot in specified plot container identifier.​ |
| griefdefender.admin.claim.create.plot | Allow admins to create a container of plots for players.​ |
| griefdefender.user.claim.plot.merge | Allows players to merge plots in the direction they are facing.​ |
| griefdefender.admin.claim.plot.unmerge | Allows admins to unmerge plots they are standing in.​ |

## Flags
| Permission Node | Description |
| --------- | ----------- |
| griefdefender.admin.claim.command.flag.arg | Allows to use the claimflag command with command line arguments |
| griefdefender.user.claim.command.flag.base | Allows to use the claimflag command |
| griefdefender.user.claim.command.flag.gui | Allows to use the claimflag command GUI |
| griefdefender.user.claim.command.flag.debug | Allows to toggle claim flag debug mode |
| griefdefender.user.claim.command.flag.player | Allows to use the claimflag for players command |
| griefdefender.user.claim.command.flag.group | Allows to use the claimflag for groups command |
| griefdefender.user.claim.command.flag.reset | Allows to use the claimreset command |
| griefdefender.user.claim.flag | Base permission used to check if user has access to use a specific core flag. <br />The format is `griefdefender.user.claim.flag.<flag_name>`.<br />Note: This is checked when accessing the flag ADVANCED GUI section and when using the flag command with arguments.<br />Note: The flag name is not to be confused with a definition flag name. This checks for GD's core flags. The list can be found [here](/wiki/advanced/Flags.html#available-flags) |

## Flag Definitions
| Permission Node | Description |
| --------- | ----------- |
| griefdefender.admin.custom.flag | Base permission used to check if user has access to a specific admin flag definition. <br />The format is   `griefdefender.admin.custom.flag.<preset>.<group>.<definition_flag_name>`. <br />Note: By default, this manages the delivered admin group which is mapped to the ADMIN tab. |
| griefdefender.user.custom.flag | Base permission used to check if user has access to a specific user flag definition. <br />The format is   `griefdefender.user.custom.flag.<preset>.<group>.<definition_flag_name>`. <br />Note: By default, this manages the delivered user group which is mapped to the USER tab.|

_*See [Flag Definitions GUI](/wiki/basic/Flag-Definitions-GUI.html) for information on how to manage the flag GUI for both users and admins._

## Options
| Permission Node | Description |
| --------- | ----------- |
| griefdefender.admin.claim.command.option.base | Allows to use the claimoption command |
| griefdefender.admin.claim.command.option.group | Allows to set group options in claims |
| griefdefender.admin.claim.command.option.player | Allows to set player options in claims |
| griefdefender.admin.claim.option | Allows to set options in claims |
| griefdefender.admin.option.perk.fly.owner | Allows owners to fly in their own claim |
| griefdefender.admin.option.perk.fly.resident | Allows users to fly in claims where they have resident trust |
| griefdefender.admin.option.perk.fly.accessor | Allows users to fly in claims where they have accessor trust |
| griefdefender.admin.option.perk.fly.builder | Allows users to fly in claims where they have builder trust |
| griefdefender.admin.option.perk.fly.container | Allows users to fly in claims where they have container trust |
| griefdefender.admin.option.perk.fly.manager | Allows users to fly in claims where they have manager trust |

## Trust
| Permission Node | Description |
| --------- | ----------- |
| griefdefender.user.claim.command.trust.player | Allows to grant player trust |
| griefdefender.user.claim.command.trust.list | Allows to list trusted players |
| griefdefender.user.claim.command.trustall.group | Allows to grant group trust to all claims|
| griefdefender.user.claim.command.trustall.player | Allows to grant player trust to all claims |
| griefdefender.user.claim.command.untrust.group | Allows to revoke group trust |
| griefdefender.user.claim.command.untrust.player | Allows to revoke player trust |
| griefdefender.user.claim.command.untrustall.group | Allows to revoke group trust to all claims|
| griefdefender.user.claim.command.untrustall.player | Allows to revoke player trust to all claims |
| griefdefender.user.claim.trust.resident | Allows to add residents |
| griefdefender.user.claim.trust.accessor | Allows to add accessors |
| griefdefender.user.claim.trust.container | Allows to add containers |
| griefdefender.user.claim.trust.builder | Allows to add builders |
| griefdefender.user.claim.trust.manager | Allows to add managers |
| griefdefender.user.claim.trust.remove | Allows to untrust players |

## Trust interface
| Permission Node | Description |
| --------- | ----------- |
| griefdefender.advanced.user.gui.flag.group.owner | Adds a button to the interface to control the trust of owner |
| griefdefender.advanced.user.gui.flag.group.accessor | Adds a button to the interface to control the trust of accessor |
| griefdefender.advanced.user.gui.flag.group.container | Adds a button to the interface to control the trust of container |
| griefdefender.advanced.user.gui.flag.group.builder | Adds a button to the interface to control the trust of builder |
| griefdefender.advanced.user.gui.flag.group.manager | Adds a button to the interface to control the trust of manager |
| griefdefender.advanced.user.gui.flag.group.resident | Allows user to see RESIDENT tab in flag GUI. |

# Admin Permissions

| Permission Node | Description |
| --------- | ----------- |
| griefdefender.advanced.admin.flag | Determines if user can use a specific flag as argument in a flag command. |
| griefdefender.advanced.admin.flags | Allows usage of advanced mode in flag GUI |
| griefdefender.advanced.admin.flags.arg | Allows user to use flag commands /cf, /cfg, /cfp with arguments. |
| griefdefender.advanced.admin.option | Determines if user can use a specific option as argument in an option command. |
| griefdefender.advanced.admin.options.arg | Allows user to use option commands /co, /cog, /cop with arguments |
| griefdefender.admin.bypass.ban | Allows bypass of bans |
| griefdefender.admin.bypass.border-check | Allows bypass of claim border checks |
| griefdefender.admin.bypass.option | Allows bypass of options |
| griefdefender.admin.bypass.override.resize | Allows bypass of claim resize restrictions |
| griefdefender.admin.bypass.override.limit | Allows bypass of claim creation limit restrictions |
| griefdefender.admin.claim.command.trust.group | Allows to grant group trust |
| griefdefender.admin.claim.command.adjust-claim-blocks | Allows to edit amount of bonus claim blocks |
| griefdefender.admin.claim.command.admin-mode | Allows to use admin claim shovel mode |
| griefdefender.admin.claim.command.ban | Allows to ban or unban an item, block, or entity id from all usage |
| griefdefender.admin.claim.command.clear | Allows to clear entities within one or more claims |
| griefdefender.admin.claim.command.schematic | Allows to manage claim schematics |
| griefdefender.admin.claim.command.debug | Allows to use GDdebug |
| griefdefender.admin.claim.command.delete.base | Allows to use the deleteclaim command |
| griefdefender.admin.claim.command.delete.basic | Allows to delete basic claims |
| griefdefender.admin.claim.command.delete.admin | Allows to delete admin claims |
| griefdefender.admin.claim.command.delete-claims | Allows to delete all of another player's claims |
| griefdefender.admin.claim.command.ignore.base | Allows to use the ignore claims command |
| griefdefender.admin.claim.command.ignore.basic | Allows to ignore basic claim flags |
| griefdefender.admin.claim.command.ignore.admin | Allows to ignore admin claim flags |
| griefdefender.admin.claim.command.ignore.town | Allows to ignore town claim flags |
| griefdefender.admin.claim.command.ignore.wilderness | Allows to ignore wilderness claim flags |
| griefdefender.admin.claim.command.permission-group | Allows to use the claim command for group permissions |
| griefdefender.admin.claim.command.permission-player | Allows to use the claim command for player permissions |
| griefdefender.admin.claim.command.reserve-name | Allows to reserve claim names |
| griefdefender.admin.claim.cuboid | Allows to create/resize admin claims in 3D mode |
| griefdefender.admin.claim.list.admin | Allows to list admin claims |
| griefdefender.admin.claim.option.global | Allows to manage global options |
| griefdefender.admin.claim.resize | Allows to resize claims |
| griefdefender.admin.claim.resize.admin | Allows to resize admin claims |
| griefdefender.admin.claim.resize.admin.subdivision | Allows to resize admin claim subdivisions |
| griefdefender.admin.claim.resize.basic | Allows to resize basic claims |
| griefdefender.admin.claim.resize.basic.subdivision | Allows to resize basic claim subdivisions |
| griefdefender.admin.claim.resize.town | Allows to resize town claims |
| griefdefender.admin.claim.set-admin-flags | Allows to edit flags in an admin claim |
| griefdefender.admin.claim.use-reserved-names | Allows to use reserved claim names |
| griefdefender.admin.claim.wilderness | Allows to edit wilderness claims |
| griefdefender.admin.command.delete-admin-claims | Allows to delete all admin claims |
| griefdefender.admin.command.reload | Allows to reload GP |
| griefdefender.admin.command.restore-claim.base | Allows to restore claim to its natural state |
| griefdefender.admin.command.restore-nature.base | Allows to switch shovel tool to restoration mode. |
| griefdefender.admin.command.set-accrued-claim-blocks | Allows to edit amount of accrued claim blocks |
| griefdefender.admin.custom.flag | Allows to use advanced claim flags in GUI |
| griefdefender.admin.flag-defaults | Allows to edit flag defaults |
| griefdefender.admin.flag-overrides | Allows to edit flag overrides |

## Snapshot
| Permission Node | Description |
| --------- | ----------- |
| griefdefender.advanced.user.claim.command.snapshot | Allows user to use /claimsnapshot command. |
| griefdefender.advanced.user.claim.command.player | Allows user to use /claimgroup command. |
| griefdefender.advanced.user.snapshot.create.user | Allows user to create claim snapshots stored with user. |
| griefdefender.advanced.user.snapshot.create.claim | Allows user to create claim snapshots stored with claim. |
| griefdefender.advanced.admin.snapshot.create.admin | Allows user to create admin claim snapshots. |
| griefdefender.advanced.admin.snapshot.create.public | Allows user to create public claim snapshots that all users with public view access can see. |
| griefdefender.advanced.user.snapshot.view-public | Allows user to view/use public claim snapshots. |

## Options
| Permission Node | Description |
| --------- | ----------- |
| griefdefender.admin.claim.command.option.group.base | Allows to set group options in claims |
| griefdefender.admin.claim.command.option.player.base | Allows to set player options in claims |

# Misc
| Permission Node | Description |
| --------- | ----------- |
| griefdefender.user.command.help | Allows to you the view the help |
| griefdefender.user.chat.capture | Allows to record chat in command GUI's |
| griefdefender.login.inventory-gui | Sets user or group to use the Inventory GUI on login |