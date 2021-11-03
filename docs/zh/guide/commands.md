---
title: Command Overview
tags: Info
category: Command
icon: shell
---

# Command Overview

Arguments Key: \<required\> [optional]

### Claim Identifier  

Many commands support the new argument `[identifier]` which is the claim id set by the claim owner.  If you do not want to be required to stand in a claim for a specific command, set the claim identifier using `/gd claim id \<identifier\>` then pass the identifier at the end of the command.  
If using an identifier for an admin claim, the format is `admin:\<identifier\>`     
If using an identifier for wilderness, the format is `wilderness:\<identifier\>`  
If using an identifier for another player, the format is `\<playername\>:\<identifier\>`  


### Claims

* [/gd abandon claim](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-abandon-claim)
* [/gd abandon all](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-abandon-all)
* [/gd abandon top](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-abandon-top)
* [/gd buy blocks [numberOfBlocks]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-buy-blocks)
* [/gd buy claim](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-buy-claim)
* [/gd claim contract \<amount\> [direction]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-contract)
* [/gd claim create \<radius\> [type]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-create)
* [/gd claim expand \<amount\> [direction]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-expand)
* [/gd claim farewell \<message\>](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-farewell)
* [/gd claim greeting \<message\>](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-greeting)
* [/gd claim id \<identifier\>](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-id)
* [/gd claim info [id]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-info)
* [/gd claim inherit](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-inherit)
* [/gd claim investigate](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-investigate)
* [/gd claim list [\<player\> [world]]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-list)
* [/gd claim displayname [name]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-displayname)
* [/gd claim rent create [\<rate\> [max_days]]|info|list|cancel](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-rent)
* [/gd claim setspawn](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-setspawn)
* [/gd claim spawn](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-spawn)
* [/gd claim transfer [player]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-transfer)
* [/gd claim we](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-we)
* [/gd claimgroup admin [\<join\>|\<unjoin\>|\<create\>|\<delete\>]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claimgroup-admin)
* [/gd claimgroup player [\<join\>|\<unjoin\>|\<create\>|\<delete\>]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claimgroup-player)
* [/gd cuboid](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-cuboid)
* [/gd mode basic](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-mode-basic)
* [/gd mode subdivide](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-mode-subdivide)
* [/gd mode town](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-mode-town)
* [/gd player info \<player\> \<world\>|\<player\>|[\<world\>]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-player-info)
* [/gd player trapped](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-player-trapped)
* [/gd player unlockdrops](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-player-unlockdrops)
* [/gd sell blocks [numberOfBlocks]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-sell-blocks)
* [/gd sell claim \<price\>](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-sell-claim-price)
* [/gd transferblocks](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-transferblocks)

### Flags

* [/gd flag debug](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-flag-debug)
* [/gd flag claim [\<flag\> \<target\> \<value\> [\<contexts\>]]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-flag-claim)
* [/gd flag definition \<preset:definition\> \<value\> [identifier]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-flag-definition)
* [/gd flag group \<group\> [\<flag\> \<target\> \<value\> [\<\contexts\>]]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-flag-group)
* [/gd flag player \<player\> [\<flag\> \<target\> \<value\> [\<\contexts\>]]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-flag-player)
* [/gd flag reset](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-flag-reset)

### Options
* [/gd option [\<option\> \<value\>]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-option-claim)
* [/gd option group \<group\> [\<option\> \<value\>]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-option-group)
* [/gd option player \<player\> [\<option\> \<value\>]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-option-player)

### Trust  

Note: Use `public` if you want to trust all users.

* [/gd trust player \<player\>|public \<accessor|container|builder|manager\> ](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-trust-player)
* [/gd trust group \<group\>|public \<accessor|container|builder|manager\> ](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-trust-group)
* [/gd trustall player \<player\>|public](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-trustall-player)
* [/gd trustall group \<group\>|public](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-trustall-group)
* [/gd untrust player \<player\>|public ](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-untrust-player)
* [/gd untrust group \<group\>|public ](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-untrust-group)
* [/gd untrustall player \<player\>|public](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-untrustall-player)
* [/gd untrustall group \<group\>|public](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-untrustall-group)
* [/gd trust list](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-trust-list)

### Admin

* [/gd abandon world [world]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-abandon-world)
* [/gd ban [hand | \<type\> \<target\> [\<message\>]]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-ban)
* [/gd claim clear \<target\> [\<claim\> [\<world\>]]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-clear)
* [/gd claim ignore](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-ignore)
* [/gd claim restore](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-restore)
* [/gd claim schematic \<create|delete\> \<name\>](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-schematic)
* [/gd delete claim](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-delete-claim)
* [/gd delete all \<player\> [world]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-delete-all)
* [/gd delete alladmin [world]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-delete-alladmin)
* [/gd mode admin](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-mode-admin)
* [/gd mode nature](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-mode-nature)
* [/gd permission group \<group\> [\<permission\> \<value\>]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-permission-group)
* [/gd permission player \<player\> [\<permission\> \<value\>]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-permission-player)
* [/gd player adjustbonusblocks \<player\> \<amount\> [world]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-player-adjustbonusblocks)
* [/gd player setaccruedblocks \<player\> \<amount\> [\<world\>]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-player-setaccruedblocks)
* [/gd debug \<on\>\<off\>\<record\>\<paste\> [\<player\>]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-debug)
* [/gd reload](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-reload)
* [/gd unban [hand | \<type\> \<target\>]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-unban)

### Main Command

* [/gd](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd)

### Misc

* [/gd version](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-version)


# Command Detail

### Claims
___
#### `/gd abandon claim`
**Arguments**: `[identifier]` 
Abandons a claim

___
#### `/gd abandon all`
Abandons ALL your claims

___
#### `/gd abandon top`
Abandons a claim and all its subdivisions

___
#### `/gd buy blocks`
**Aliases**: `buyblocks`  
**Arguments**: `\<numberOfBlocks\>`  

Purchases additional claim blocks with server money. Doesn't work on servers without any economy plugin.

___
#### `/gd buy claim`

View a list of claims for sale. Click [Buy] to purchase.

___
#### `/gd claim contract`
**Aliases**: `claimcontract`, `contractclaim`  
**Arguments**: `\<amount\> [direction] [identifier]`  
Contracts/Shrinks the claim from the direction you are facing.   

___
#### `/gd claim create`
**Aliases**: `claimcreate`  
**Arguments**: `\<radius\> [type]`  
Creates a claim around the player of the given type. If no claimtype (or an incorrect one) is specified, a basic claim will be created.   

___
#### `/gd claim expand`
**Aliases**: `claimexpand`, `expandclaim`  
**Arguments**: `\<amount\> [direction] [identifier]`  
Expands the claim in the direction you are facing.   

___
#### `/gd claim farewell`
**Arguments**: `\<message\> [identifier]`  
Sets the farewell message of your claim

To unset, `/gd claim farewell clear`

___
#### `/gd claim greeting`
**Arguments**: `\<message\> [identifier]`  
Sets the greeting message of your claim

To unset, `/gd claim greeting clear`


___
#### `/gd claim id`
**Arguments**: `\<identifier\>`  
Sets the friendly identifier of your claim.  


___
#### `/gd claim info`
**Aliases**: `claiminfo`  
**Arguments**: `[identifier]`  

Gets information about a claim you are standing in or by claim id.

___
#### `/gd claim inherit`
**Aliases**: `inherit`  

Toggles parent claim inherit mode

___
#### `/gd claim investigate`
**Aliases**: `claiminvestigate`  
**Arguments**: `[area|hide|hideall]`  

Investigates the target block player is looking at or nearby claims.

___
#### `/gd claim list`
**Aliases**: `claimlist`  
**Arguments**: `[\<player\> [world]]`  

List information about a player's claims.

___
#### `/gd claim displayname`
**Arguments**: `\<name\>`  
Sets the display name of your claim

___
#### `/gd claim rent`
**Arguments**: `create [\<rate\> [\<max_days\>]]|info|list|cancel]`  
Used to rent/list claims.  
Note: Requires economy plugin.

___
#### `/gd claim setspawn`
**Aliases**: `claimsetspawn`  

Sets the spawn of your claim to the location you are standing in.

___
#### `/gd claim spawn`
**Aliases**: `claimspawn`  

Teleports you to claim spawn, if available.

___
#### `/gd claim transfer`
**Aliases**: `transferclaim`  
**Arguments**: `\<player\> [identifier]`  

Transfer the claim you're standing in to a player.

___
#### `/gd claim we`
**Arguments**: `[identifier]`  
Claims a selection made in WorldEdit.  
Note: This command will not work unless the server has WorldEdit.


___
#### `/gd claimgroup admin`
**Arguments**: `join \<group\> [\<identifier\>]|unjoin [\<identifier\>]|create \<group\>|delete \<group\>`  
Used to manage admin claim groups. 


___
#### `/gd claimgroup player`
**Arguments**: `join \<group\> [\<identifier\>]|unjoin [\<identifier\>]|create \<group\>|delete \<group\>`  
Used to manage player claim groups. 


___
#### `/gd cuboid`
**Aliases**: `cuboid`  

Toggles 3D cuboid claims mode.

___
#### `/gd transferblocks`
**Aliases**: `transferblocks`  
**Arguments**: `\<player\> \<amount\>`

Gives claim blocks to another player
___
#### `/gd mode basic`
**Aliases**: `modebasic`

Switches the shovel tool back to basic claims mode.

___
#### `/gd mode subdivide`
**Aliases**: `modesubdivide`  

Switches the shovel tool to subdivision mode, used to subdivide your claims

___
#### `/gd player info`
**Arguments**: `\<player\> \<world\>|\<player\>|[\<world\>]`  

Gets information about a player and their claimblocks

___
#### `/gd player trapped`  
**Aliases**: `trapped`  

Teleports the player to a safe location if stuck and unable to build.

___
#### `/gd player unlockdrops`  
**Aliases**: `unlockdrops`  

Allows other players to pickup any items dropped from death.  

___
#### `/gd sell blocks`
**Aliases**: `sellblocks`  
**Arguments**: `\<numberOfBlocks\>`  

Sell your claim blocks for server money. Doesn't work on servers without any economy plugin.

___
#### `/gd sell claim`
**Arguments**: `\<price\>`  

Puts your claim up for sale at the set price. To disable sale, set the price to -1 or set ForSale setting in /claiminfo to false.


### Flags

___
#### `/gd flag debug`
**Aliases**: `cfd`

Toggles claim flag debug mode

___
#### `/gd flag claim`
**Aliases**: `cf`  
**Arguments**: `[\<flag\> \<target\> \<value\> [\<\contexts\>]]`  

Gets/Sets claim flags in the claim you are standing in.


___
#### `/gd flag definition`
**Aliases**: `cf`  
**Arguments**: `\<preset:definition\> \<value\> [identifier]`  

Sets claim flag definitions in the claim you are standing in or claim identifier.

___
#### `/gd flag group`
**Aliases**: `cfg`  
**Arguments**: `\<group\> \<flag\> \<target\> \<value\> [\<\contexts\>]]`  

Gets/Sets flag permission for a group in claim you are standing in.

___
#### `/gd flag player`
**Aliases**: `cfp`  
**Arguments**: `\<player\> \<flag\> \<target\> \<value\> [\<\contexts\>]]`  

Adds flag permission to player.

___
#### `/gd flag reset`
**Aliases**: `cfr`

Resets a claim to flag defaults.


### Options
___
#### `/gd option claim `
**Aliases**: `co`  
**Arguments**: `[\<option\> \<value\>]`  

Gets/Sets options in the claim you are standing in.

___
#### `/gd option group`
**Aliases**: `cog`  
**Arguments**: `\<group\> [\<option\> \<value\>]`  

Gets/Sets options for a group in claim you are standing in.

___
#### `/gd option player`
**Aliases**: `cop`  
**Arguments**: `\<player\> [\<option\> \<value\>]`  

Gets/Sets options for a player in claim you are standing in.


### Trust
Note: `public` is for all users.
___
#### `/gd trust player`
*Accessor*: `Grants a player entry to your claim(s) and use of your bed`  
*Container*: `Grants a player access to your claim's containers, crops, animals, bed, buttons, and levers`  
*Builder*: `Grants a player edit access to your claim(s)`  
*Manager*: `Grants a player access to all of the above including claim settings`  
**Aliases**: `trust`  
**Arguments**: `\<player\>|public \<trusttype\>`  

Grants a player access to your claim(s).

___
#### `/gd trust group`
*Accessor*: `Grants a group entry to your claim(s) and use of your bed`  
*Container*: `Grants a group access to your claim's containers, crops, animals, bed, buttons, and levers`  
*Builder*: `Grants a group edit access to your claim(s)`  
*Manager*: `Grants a group access to all of the above including claim settings`  
**Aliases**: `trustgroup`  
**Arguments**: `\<group\>|public \<trusttype\>`  

Grants a group access to your claim(s)

___
#### `/gd trustall player`
*Accessor*: `Grants a player entry to ALL your claim(s) and use of your bed`  
*Container*: `Grants a player access to ALL your claim's containers, crops, animals, bed, buttons, and levers`  
*Builder*: `Grants a player edit access to ALL your claim(s)`  
*Manager*: `Grants a player access to all of the above including claim settings`
**Aliases**: `trust`  
**Arguments**: `\<player\>|public \<trusttype\>`  

Grants a player access to ***ALL*** your claim(s).

___
#### `/gd trustall group`
*Accessor*: `Grants a group entry to ALL your claim(s) and use of your bed`  
*Container*: `Grants a group access to ALL your claim's containers, crops, animals, bed, buttons, and levers`  
*Builder*: `Grants a group edit access to ALL your claim(s)`  
*Manager*: `Grants a group access to all of the above including claim settings`
**Aliases**: `trustallgroup`  
**Arguments**: `\<group\>|public \<trusttype\>`  

Grants a group access to ***ALL*** your claim(s).

___
#### `/gd untrust player`
**Aliases**: `untrust`  
**Arguments**: `\<player\>|public`  

Revokes a player's access to your claim.

___
#### `/gd untrust group`
**Aliases**: `untrustgroup`  
**Arguments**: `\<group\>|public`  

Revokes a group's access to your claim.

___
#### `/gd untrustall player`
**Aliases**: `untrustall`  
**Arguments**: `\<player\>|public`  

Revokes a player's access to ***ALL*** your claim(s).

___
#### `/untrustall group`
**Aliases**: `untrustallgroup`  
**Arguments**: `\<group\>|public`  

Revokes a group's access to ***ALL*** your claim(s).
___
#### `/gd trust list`
Lists permissions for the claim you're standing in


### Admin

___
#### `/gd abandon world`  
**Aliases**: `abandonworld`  
**Arguments**: `[world]`  

Special admin command used to abandon ALL user claims in world.  
___
#### `/gd ban`  
**Aliases**: `claimban`  
**Arguments**: `hand | \<type\> \<target\> [\<message\>]`  
Note: Valid types are `entity`, `item`, `block`  
Bans target or item in hand from all usage.  

___
#### `/gd player adjustbonusblocks`
**Aliases**: `adjustbonusblocks`  
**Arguments**: `\<player\> \<amount\> [world]`  

Adds or subtracts bonus claim blocks for a player

___
#### `/gd player setaccruedblocks`
**Aliases**: `setaccruedblocks`  
**Arguments**: `\<player\> \<amount\> [\<world\>]`  

Updates a player's accrued claim block total.

___
#### `/gd mode admin`
**Aliases**: `modeadmin`  

Switches the shovel tool to administrative claims mode

___
#### `/gd delete claim`
**Aliases**: `deleteclaim`  

Deletes the claim you're standing in, even if it's not your claim

___
#### `/gd delete all`
**Aliases**: `deleteall`  
**Arguments**: `\<player\> [world]`  

Delete all of another player's claims

___
#### `/gd delete alladmin`
**Aliases**: `deletealladmin`  
**Arguments**: `[world]`  

Deletes all administrative claims

___
#### `/gd claim ignore`
**Aliases**: `ignoreclaims`  

Toggles ignore claims mode

___
#### `/gd claim clear`
**Aliases**: `claimclear`  
**Arguments**: `\<target\> [\<claim\> [\<world\>]]`  
Allows clearing of entities within one or more claims.

___
#### `/gd permission group`
**Aliases**: `cpg`  
**Arguments**: `\<group\> [\<permission\> \<value\>]`  

Sets a permission on a group with a claim context

___
#### `/gd permission player`
**Aliases**: `cpp`  
**Arguments**: `\<player\> [\<permission\> \<value\>]`  

Sets a permission on a player with a claim context

___
#### `/gd mode nature`
**Aliases**: `rn`  

Switches the shovel tool to restoration mode

___
#### `/gd debug`
**Aliases**: `gddebug`  
**Arguments**: `\<on\>|\<off\>|\<record\>|\<paste\> [\<player\>]`  

Toggles debug

___
#### `/gd reload`

Reloads Grief Prevention's configuration settings

___
#### `/gd schematic`  
**Aliases**: `claimschematic`  
**Arguments**: `\<create|delete\> \<name\>`  

Manages claim schematics. Use '/claimschematic create \<name\>' to create a live backup of claim. 

___
#### `/gd unban`  
**Aliases**: `claimunban`  
**Arguments**: `hand | \<type\> \<target\> [\<message\>]`  
Note: Valid types are `entity`, `item`, `block`  

Unbans target id allowing it to be used again. 


### Misc

___
#### `/gd`

Lists detailed information on each command.

___
#### `/gd version`

Lists version information.