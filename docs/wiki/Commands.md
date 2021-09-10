---
title: Commands
tag: Info
category: info
icon: shell
---

# Command Overview

Arguments Key: \<required\> [optional]

### Claim Identifier  

Many commands support the new argument `[identifier]` which is the claim id set by the claim owner.  If you do not want to be required to stand in a claim for a specific command, set the claim identifier using `/gd claim id <identifier>` then pass the identifier at the end of the command.  
If using an identifier for an admin claim, the format is `admin:<identifier>`     
If using an identifier for wilderness, the format is `wilderness:<identifier>`  
If using an identifier for another player, the format is `<playername>:<identifier>`  


### Claims

* [/gd abandon claim [identifier]](#gd-abandon-claim)
* [/gd abandon all](#gd-abandon-all)
* [/gd abandon top [identifier]](#gd-abandon-top)
* [/gd buy blocks [numberOfBlocks]](#gd-buy-blocks)
* [/gd buy claim](#gd-buy-claim)
* [/gd claim contract \<amount\> [direction] [identifier]](#gd-claim-contract)
* [/gd claim create \<radius\>|\<chunk\> [type]](#gd-claim-create)
* [/gd claim expand \<amount\> [direction] [identifier]](#gd-claim-expand)
* [/gd claim farewell \<message\> [identifer]](#gd-claim-farewell)
* [/gd claim greeting \<message\> [identifer]](#gd-claim-greeting)
* [/gd claim id \<identifier\>](#gd-claim-id)
* [/gd claim info [identifier]](#gd-claim-info)
* [/gd claim inherit](#gd-claim-inherit)
* [/gd claim inspect [\<area\>|\<hide\>|\<hideall\>]](#gd-claim-inspect)
* [/gd claim list [\<player\> [world]]](#gd-claim-list)
* [/gd claim displayname [name]](#gd-claim-displayname)
* [/gd claim rent create [\<rate\> [max_days]]|info|list|cancel](#gd-claim-rent)
* [/gd claim setspawn](#gd-claim-setspawn)
* [/gd claim spawn](#gd-claim-spawn)
* [/gd claim tax [balance|force|pay \<amount>]](#gd-claim-tax)
* [/gd claim transfer [player]](#gd-claim-transfer)
* [/gd claim we](#gd-claim-we)
* [/gd claimgroup admin [\<join\>|\<unjoin\>|\<create\>|\<delete\>]](#gd-claimgroup-admin)
* [/gd claimgroup player [\<join\>|\<unjoin\>|\<create\>|\<delete\>]](#gd-claimgroup-player)
* [/gd cuboid](#gd-cuboid)
* [/gd mode basic](#gd-mode-basic)
* [/gd mode subdivide](#gd-mode-subdivide)
* [/gd mode town](#gd-mode-town)
* [/gd player info \<player\> \<world\>|\<player\>|[world]](#gd-player-info)
* [/gd player transferblocks](#gd-player-transferblocks)
* [/gd player trapped](#gd-player-trapped)
* [/gd player unlockdrops](#gd-player-unlockdrops)
* [/gd sell blocks [numberOfBlocks]](#gd-sell-blocks)
* [/gd sell claim \<price\>](#gd-sell-claim-price)

### Flags

* [/gd flag debug](#gd-flag-debug)
* [/gd flag claim [\<flag\> \<target\> \<value\> [contexts]]](#gd-flag-claim)
* [/gd flag definition \<preset:group\> \<definition\> \<value\> [identifier]](#gd-flag-definition)
* [/gd flag group \<group\> [\<flag\> \<target\> \<value\> [contexts]]](#gd-flag-group)
* [/gd flag player \<player\> [\<flag\> \<target\> \<value\> [contexts]]](#gd-flag-player)
* [/gd flag reset](#gd-flag-reset)

### Options
* [/gd option claim [\<option\> \<value\> [contexts]]](#gd-option-claim)
* [/gd option group \<group\> [\<option\> \<value\> [contexts]]](#gd-option-group)
* [/gd option player \<player\> [\<option\> \<value\> [contexts]]](#gd-option-player)

### Trust  

Note: Use `public` if you want to trust all users.

* [/gd trust player \<player\>|public <accessor|container|builder|manager> ](#gd-trust-player)
* [/gd trust group \<group\>|public <accessor|container|builder|manager> ](#gd-trust-group)
* [/gd trustall player \<player\>|public](#gd-trustall-player)
* [/gd trustall group \<group\>|public](#gd-trustall-group)
* [/gd untrust player \<player\>|public ](#gd-untrust-player)
* [/gd untrust group \<group\>|public ](#gd-untrust-group)
* [/gd untrustall player \<player\>|public](#gd-untrustall-player)
* [/gd untrustall group \<group\>|public](#gd-untrustall-group)
* [/gd trust list](#gd-trust-list)

### Admin

* [/gd abandon world [world]](#gd-abandon-world)
* [/gd ban [hand | \<type\> \<target\> [message]]](#gd-ban)
* [/gd claim clear \<target\> [identifier]](#gd-claim-clear)
* [/gd claim ignore](#gd-claim-ignore)
* [/gd claim restore](#gd-claim-restore)
* [/gd claim schematic \<create|delete\> \<name\>](#gd-claim-schematic)
* [/gd delete claim [identifier]](#gd-delete-claim)
* [/gd delete all \<player\> [world]](#gd-delete-all)
* [/gd delete alladmin [world]](#gd-delete-alladmin)
* [/gd mode admin](#gd-mode-admin)
* [/gd mode nature](#gd-mode-nature)
* [/gd permission group \<group\> [\<permission\> \<value\>]](#gd-permission-group)
* [/gd permission player \<player\> [\<permission\> \<value\>]](#gd-permission-player)
* [/gd player adjustbonusblocks \<player\> \<amount\> [world]](#gd-player-adjustbonusblocks)
* [/gd player adjustbonusblocksall \<amount\>](#gd-player-adjustbonusblocksall)
* [/gd player setaccruedblocks \<player\> \<amount\> [world]](#gd-player-setaccruedblocks)
* [/gd debug \<on\>\<off\>\<record\>\<paste\> [player]](#gd-debug)
* [/gd reload](#gd-reload)
* [/gd unban [hand | \<type\> \<target\>]](#gd-unban)

### Main Command

* [/gd](#gd)

### Misc

* [/gd version](#gd-version)


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
**Arguments**: `<numberOfBlocks>`  

Purchases additional claim blocks with server money. Doesn't work on servers without any economy plugin.

___
#### `/gd buy claim`

View a list of claims for sale. Click [Buy] to purchase.

___
#### `/gd claim contract`
**Aliases**: `claimcontract`, `contractclaim`  
**Arguments**: `<amount> [direction] [identifier]`  
Contracts/Shrinks the claim from the direction you are facing.   

___
#### `/gd claim create`
**Aliases**: `claimcreate`  
**Arguments**: `<radius> [type]`  
Creates a claim around the player of the given type. If no claimtype (or an incorrect one) is specified, a basic claim will be created.   

___
#### `/gd claim expand`
**Aliases**: `claimexpand`, `expandclaim`  
**Arguments**: `<amount> [direction] [identifier]`  
Expands the claim in the direction you are facing.   

___
#### `/gd claim farewell`
**Arguments**: `<message> [identifier]`  
Sets the farewell message of your claim

To unset, `/gd claim farewell clear`

___
#### `/gd claim greeting`
**Arguments**: `<message> [identifier]`  
Sets the greeting message of your claim

To unset, `/gd claim greeting clear`


___
#### `/gd claim id`
**Arguments**: `<identifier>`  
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
#### `/gd claim inspect`
**Aliases**: `claiminspect`  
**Arguments**: `[area|hide|hideall]`  

Inspects the target block player is looking at or nearby claims.

___
#### `/gd claim list`
**Aliases**: `claimlist`  
**Arguments**: `[<player> [world]]`  

List information about a player's claims.

___
#### `/gd claim displayname`
**Arguments**: `<name>`  
Sets the display name of your claim

___
#### `/gd claim rent`
**Arguments**: `create [<rate> [<max_days>]]|info|list|cancel]`  
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
#### `/gd claim tax`
**Arguments**: `balance|force|pay <amount>]`  
Used to manage taxes of a claim.  
Note: The argument `force` allows an admin to pay a claim's tax balance for another player.  
Note: Requires economy plugin.


___
#### `/gd claim transfer`
**Aliases**: `transferclaim`  
**Arguments**: `<player> [identifier]`  

Transfer the claim you're standing in to a player.

___
#### `/gd claim we`
**Arguments**: `claim|clear|select [identifier]`  
`claim` - creates GD claim from WE selection.  
`clear` - clears worldedit selection.  
`select` - creates new WE selection from GD claim.

Used to manage GD claims with worldedit.  
Note: This command will not work unless the server has WorldEdit.

___
#### `/gd claimgroup admin`
**Arguments**: `join <group> [<identifier>]|unjoin [<identifier>]|create <group>|delete <group>`  
Used to manage admin claim groups. 


___
#### `/gd claimgroup player`
**Arguments**: `join <group> [<identifier>]|unjoin [<identifier>]|create <group>|delete <group>`  
Used to manage player claim groups. 


___
#### `/gd cuboid`
**Aliases**: `cuboid`  

Toggles 3D cuboid claims mode.

___
#### `/gd mode basic`
**Aliases**: `modebasic`

Switches the shovel tool back to basic claims mode.

___
#### `/gd mode subdivide`
**Aliases**: `modesubdivide`  

Switches the shovel tool to subdivision mode, used to subdivide your claims

___
#### `/gd mode town`
**Aliases**: `modetown`

Switches the shovel tool back to town claims mode.
___
#### `/gd player info`
**Arguments**: `<player> <world>|<player>|[<world>]`  

Gets information about a player and their claimblocks

___
#### `/gd player transferblocks`
**Aliases**: `transferblocks`  
**Arguments**: `<player> <amount>`

Gives claim blocks to another player

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
**Arguments**: `<numberOfBlocks>`  

Sell your claim blocks for server money. Doesn't work on servers without any economy plugin.

___
#### `/gd sell claim`
**Arguments**: `<price>`  

Puts your claim up for sale at the set price. To disable sale, set the price to -1 or set ForSale setting in /claiminfo to false.


### Flags

___
#### `/gd flag debug`
**Aliases**: `cfd`

Toggles claim flag debug mode

___
#### `/gd flag claim`
**Aliases**: `cf`  
**Arguments**: `[<flag> <target> <value> [<\contexts>]]`  

Gets/Sets claim flags in the claim you are standing in.


___
#### `/gd flag definition`
**Aliases**: `cf`  
**Arguments**: `<preset:group> <definition> <value> [identifier]`  

Sets claim flag definitions in the claim you are standing in or claim identifier.

___
#### `/gd flag group`
**Aliases**: `cfg`  
**Arguments**: `<group> <flag> <target> <value> [<\contexts>]]`  

Gets/Sets flag permission for a group in claim you are standing in.

___
#### `/gd flag player`
**Aliases**: `cfp`  
**Arguments**: `<player> <flag> <target> <value> [<\contexts>]]`  

Adds flag permission to player.

___
#### `/gd flag reset`
**Aliases**: `cfr`

Resets a claim to flag defaults.


### Options
___
#### `/gd option claim `
**Aliases**: `co`  
**Arguments**: `[<option> <value> [<contexts>]]`  

Gets/Sets options in the claim you are standing in.

___
#### `/gd option group`
**Aliases**: `cog`  
**Arguments**: `<group> [<option> <value> [<contexts>]]`  

Gets/Sets options for a group in claim you are standing in.

___
#### `/gd option player`
**Aliases**: `cop`  
**Arguments**: `<player> [<option> <value> [<contexts>]]`  

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
**Arguments**: `<player>|public <trusttype>`  

Grants a player access to your claim(s).

___
#### `/gd trust group`
*Accessor*: `Grants a group entry to your claim(s) and use of your bed`  
*Container*: `Grants a group access to your claim's containers, crops, animals, bed, buttons, and levers`  
*Builder*: `Grants a group edit access to your claim(s)`  
*Manager*: `Grants a group access to all of the above including claim settings`  
**Aliases**: `trustgroup`  
**Arguments**: `<group>|public <trusttype>`  

Grants a group access to your claim(s)

___
#### `/gd trustall player`
*Accessor*: `Grants a player entry to ALL your claim(s) and use of your bed`  
*Container*: `Grants a player access to ALL your claim's containers, crops, animals, bed, buttons, and levers`  
*Builder*: `Grants a player edit access to ALL your claim(s)`  
*Manager*: `Grants a player access to all of the above including claim settings`
**Aliases**: `trust`  
**Arguments**: `<player>|public <trusttype>`  

Grants a player access to ***ALL*** your claim(s).

___
#### `/gd trustall group`
*Accessor*: `Grants a group entry to ALL your claim(s) and use of your bed`  
*Container*: `Grants a group access to ALL your claim's containers, crops, animals, bed, buttons, and levers`  
*Builder*: `Grants a group edit access to ALL your claim(s)`  
*Manager*: `Grants a group access to all of the above including claim settings`
**Aliases**: `trustallgroup`  
**Arguments**: `<group>|public <trusttype>`  

Grants a group access to ***ALL*** your claim(s).

___
#### `/gd untrust player`
**Aliases**: `untrust`  
**Arguments**: `<player>|public`  

Revokes a player's access to your claim.

___
#### `/gd untrust group`
**Aliases**: `untrustgroup`  
**Arguments**: `<group>|public`  

Revokes a group's access to your claim.

___
#### `/gd untrustall player`
**Aliases**: `untrustall`  
**Arguments**: `<player>|public`  

Revokes a player's access to ***ALL*** your claim(s).

___
#### `/untrustall group`
**Aliases**: `untrustallgroup`  
**Arguments**: `<group>|public`  

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
**Arguments**: `hand | <type> <target> [<message>]`  
Note: Valid types are `entity`, `item`, `block`  
Bans target or item in hand from all usage.  

___
#### `/gd player adjustbonusblocks`
**Aliases**: `adjustbonusblocks`  
**Arguments**: `<player> <amount> [world]`  

Adds or subtracts bonus claim blocks for a player

___
#### `/gd player adjustbonusblocksall`
**Aliases**: `adjustbonusblocksall`  
**Arguments**: `<amount>`  

Adjusts bonus claim block total for all online players by amount specified.

___
#### `/gd player setaccruedblocks`
**Aliases**: `setaccruedblocks`  
**Arguments**: `<player> <amount> [<world>]`  

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
**Arguments**: `<player> [world]`  

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
**Arguments**: `<target> [<claim> [<world>]]`  
Allows clearing of entities within one or more claims.

___
#### `/gd permission group`
**Aliases**: `cpg`  
**Arguments**: `<group> [<permission> <value>]`  

Sets a permission on a group with a claim context

___
#### `/gd permission player`
**Aliases**: `cpp`  
**Arguments**: `<player> [<permission> <value>]`  

Sets a permission on a player with a claim context

___
#### `/gd mode nature`
**Aliases**: `rn`  

Switches the shovel tool to restoration mode

___
#### `/gd debug`
**Aliases**: `gddebug`  
**Arguments**: `<on>|<off>|<record>|<paste> [<player>]`  

Toggles debug

___
#### `/gd reload`

Reloads Grief Prevention's configuration settings

___
#### `/gd schematic`  
**Aliases**: `claimschematic`  
**Arguments**: `<create|delete> <name>`  

Manages claim schematics. Use '/claimschematic create \<name\>' to create a live backup of claim. 

___
#### `/gd unban`  
**Aliases**: `claimunban`  
**Arguments**: `hand | <type> <target> [<message>]`  
Note: Valid types are `entity`, `item`, `block`  

Unbans target id allowing it to be used again. 


### Misc

___
#### `/gd`

Lists detailed information on each command.

___
#### `/gd version`

Lists version information.