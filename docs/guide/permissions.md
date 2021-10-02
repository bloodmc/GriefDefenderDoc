---
title: Permission
tags: Info
category: Info
icon: condition
---

If you want to have a quickstart, apply ```griefdefender.user.*``` to your players and both ```griefdefender.user.*``` and ```griefdefender.admin.*``` to your staff/admins.

It is recommended to use the base permission nodes above, and if you want a more fine control read all permissions below and deny accordingly.

### IMPORTANT
:warning:  

If you alter any admin permissions while in-game, make sure you run `/gdreload` as GD caches various permissions for performance gains.  
Wildcard permission ```*``` is currently not supported. Use ```griefdefender.user.*``` and ```griefdefender.admin.*``` for admins instead. 
 
As GD makes heavy use of LP's `default` group, the following MUST be setup properly or GD will not function properly 

- All non-griefdefender LP groups are inheriting the `default` group.  
- The `default` group is inheriting GD's delivered groups : `griefdefender_claim, griefdefender_default, griefdefender_definition, griefdefender_option, griefdefender_override`
- The `default` group is NOT disabled. LP strongly recommends to never disable this group.  
See https://luckperms.net/wiki/Default-Groups  

:warning:  

# User Permissions

## Claims
| Permission Node | Description |
| --------- | ----------- |
| griefdefender.user.claim.command.abandon.basic | Allows to abandon basic claims |
| griefdefender.user.claim.command.abandon.town | Allows to abandon town claims |
| griefdefender.user.claim.command.abandon-all | Allows to abandon all claims |
| griefdefender.user.claim.command.abandon-top-level  | Allows to abandon a claim and all its subdivisions |
| griefdefender.user.claim.command.ban-item | Allows to ban items in claims |
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
| griefdefender.user.claim.command.unban-item | Allows to unban items in claims |
| griefdefender.user.claim.command.unlock-drops | Allows other players to pickup any items dropped from death |
| griefdefender.user.claim.command.worldedit-claim | Allows to use a worldedit selection to create a claim. |
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
| griefdefender.user.town.command.tax |  |

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
| griefdefender.user.claim.flag | Base permission used to check if user has access to use a specific core flag. <br />The format is `griefdefender.user.claim.flag.<flag_name>`.<br />Note: This is checked when accessing the flag ADVANCED GUI section and when using the flag command with arguments.<br />Note: The flag name is not to be confused with a definition flag name. This checks for GD's core flags. The list can be found [here](https://github.com/bloodmc/GriefDefender/wiki/Flags#available-flags) |

## Flag Definitions
| Permission Node | Description |
| --------- | ----------- |
| griefdefender.admin.custom.flag | Base permission used to check if user has access to a specific admin flag definition. <br />The format is   `griefdefender.admin.custom.flag.<group>.<definition_flag_name>`. <br />Note: By default, this manages the delivered admin group which is mapped to the ADMIN tab. |
| griefdefender.user.custom.flag | Base permission used to check if user has access to a specific user flag definition. <br />The format is   `griefdefender.user.custom.flag.<group>.<definition_flag_name>`. <br />Note: By default, this manages the delivered user group which is mapped to the USER tab.|

_*See [Flag Definitions GUI](https://github.com/bloodmc/GriefDefender/wiki/Flag-Definitions-GUI) for information on how to manage the flag GUI for both users and admins._

## Options
| Permission Node | Description |
| --------- | ----------- |
| griefdefender.user.claim.command.option.base | Allows to use the claimoption command |
| griefdefender.user.claim.command.option.group | Allows to set group options in claims |
| griefdefender.user.claim.command.option.player | Allows to set player options in claims |
| griefdefender.user.claim.option | Allows to set options in claims |
| griefdefender.user.option.perk.owner-fly.basic | Allows to fly in own basic claim |
| griefdefender.user.option.perk.owner-fly.town | Allows to fly in own town claim |

## Trust
| Permission Node | Description |
| --------- | ----------- |
| griefdefender.user.claim.command.trust.group | Allows to grant group trust |
| griefdefender.user.claim.command.trust.player | Allows to grant player trust |
| griefdefender.user.claim.command.trust.list | Allows to list trusted players |
| griefdefender.user.claim.command.trustall.group | Allows to grant group trust to all claims|
| griefdefender.user.claim.command.trustall.player | Allows to grant player trust to all claims |
| griefdefender.user.claim.command.untrust.group | Allows to revoke group trust |
| griefdefender.user.claim.command.untrust.player | Allows to revoke player trust |
| griefdefender.user.claim.command.untrustall.group | Allows to revoke group trust to all claims|
| griefdefender.user.claim.command.untrustall.player | Allows to revoke player trust to all claims |
| griefdefender.user.claim.trust.accessor | Allows to add accessors |
| griefdefender.user.claim.trust.container | Allows to add containers |
| griefdefender.user.claim.trust.builder | Allows to add builders |
| griefdefender.user.claim.trust.manager | Allows to add managers |
| griefdefender.user.claim.trust.remove | Allows to untrust players |

# Admin Permissions

| Permission Node | Description |
| --------- | ----------- |
| griefdefender.admin.advanced-flags | Allows usage of advanced mode in flag GUI |
| griefdefender.admin.bypass.ban | Allows bypass of bans |
| griefdefender.admin.bypass.border-check | Allows bypass of claim border checks |
| griefdefender.admin.bypass.option | Allows bypass of options |
| griefdefender.admin.bypass.override.resize | Allows bypass of claim resize restrictions |
| griefdefender.admin.bypass.override.limit | Allows bypass of claim creation limit restrictions |
| griefdefender.admin.claim.command.adjust-claim-blocks | Allows to edit amount of bonus claim blocks |
| griefdefender.admin.claim.command.admin-mode | Allows to use admin claim shovel mode |
| griefdefender.admin.claim.command.ban | Allows to ban target id from all usage |
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
| griefdefender.admin.command.restore-nature.aggressive |  |
| griefdefender.admin.command.restore-nature.fill |  |
| griefdefender.admin.command.set-accrued-claim-blocks | Allows to edit amount of accrued claim blocks |
| griefdefender.admin.custom.flag | Allows to use advanced claim flags in GUI |
| griefdefender.admin.flag-defaults | Allows to edit flag defaults |
| griefdefender.admin.flag-overrides | Allows to edit flag overrides |

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