---
title: Commands
tag: Info
category: info
icon: shell
---

# Command Overview

Arguments Key: \<required\> [optional]

### Claim Identifier  

Many commands support the new argument [`[identifier]`](/wiki/basic/Claim-Management.html#claim-identifiers) which is the claim id set by the claim owner.  If you do not want to be required to stand in a claim for a specific command, set the claim identifier using `/gd claim id <identifier>` then pass the identifier at the end of the command.  
If using an identifier for an admin claim, the format is `admin:<identifier>`     
If using an identifier for wilderness, the format is `wilderness:<identifier>`  
If using an identifier for another player, the format is `<playername>:<identifier>`  

### Main Command

* [/gd](#gd)

### Claims

* [/gd abandon claim](#gd-abandon-claim)
* [/gd abandon all](#gd-abandon-all)
* [/gd abandon top](#gd-abandon-top)
* [/gd buy blocks](#gd-buy-blocks)
* [/gd buy claim](#gd-buy-claim)
* [/gd claim bank](#gd-claim-bank)
* [/gd claim contract](#gd-claim-contract)
* [/gd claim create](#gd-claim-create)
* [/gd claim debug](#gd-claim-debug)
* [/gd claim displayname](#gd-claim-displayname)
* [/gd claim expand](#gd-claim-expand)
* [/gd claim farewell](#gd-claim-farewell)
* [/gd claim greeting](#gd-claim-greeting)
* [/gd claim id](#gd-claim-id)
* [/gd claim info](#gd-claim-info)
* [/gd claim inspect](#gd-claim-inspect)
* [/gd claim list](#gd-claim-list)
* [/gd claim rent](#gd-claim-rent)
* [/gd claim setspawn](#gd-claim-setspawn)
* [/gd claim spawn](#gd-claim-spawn)
* [/gd claim tax](#gd-claim-tax)
* [/gd claim title](#gd-claim-title)
* [/gd claim transfer](#gd-claim-transfer)
* [/gd claim we](#gd-claim-we)
* [/gd claimgroup admin](#gd-claimgroup-admin)
* [/gd confirm](#gd-confirm)
* [/gd givepet](#gd-givepet)
* [/gd mode basic](#gd-mode-basic)
* [/gd mode subdivide](#gd-mode-subdivide)
* [/gd mode town](#gd-mode-town)
* [/gd player info](#gd-player-info)
* [/gd player transferblocks](#gd-player-transferblocks)
* [/gd player trapped](#gd-player-trapped)
* [/gd player unlockdrops](#gd-player-unlockdrops)
* [/gd sell blocks](#gd-sell-blocks)
* [/gd sell claim](#gd-sell-claim)
* [/gd toggle claim](#gd-toggle-claim)
* [/gd toggle cuboid](#gd-toggle-cuboid)
* [/gd toggle gui](#gd-toggle-gui)
* [/gd toggle inherit](#gd-toggle-inherit)
* [/gd toggle notifications](#gd-toggle-notifications)
* [/gd toggle tool](#gd-toggle-tool)

### Plots
* [/gd plot create](#gd-plot-create)
* [/gd plot merge](#gd-plot-merge)
* [/gd plot unmerge](#gd-plot-unmerge)

### Flags

* [/gd flag claim](#gd-flag-claim)
* [/gd flag group](#gd-flag-group)
* [/gd flag player](#gd-flag-player)
* [/gd flag reset](#gd-flag-reset)
* [/gd flagdefinition](#gd-flagdefinition)
* [/gd flagdefinition group](#gd-flagdefinition-group)
* [/gd flagdefinition player](#gd-flagdefinition-player)

### Options
* [/gd option claim](#gd-option-claim)
* [/gd option group](#gd-option-group)
* [/gd option player](#gd-option-player)

### Trust  

Note: Use `public` if you want to trust all users.

* [/gd trust player](#gd-trust-player)
* [/gd trust group](#gd-trust-group)
* [/gd trust list](#gd-trust-list)
* [/gd trustall player](#gd-trustall-player)
* [/gd trustall group](#gd-trustall-group)
* [/gd trustalladmin group](#gd-trustall-group)
* [/gd untrust player](#gd-untrust-player)
* [/gd untrust group](#gd-untrust-group)
* [/gd untrustall player](#gd-untrustall-player)
* [/gd untrustall group](#gd-untrustall-group)

### Admin

* [/gd abandon allother](#gd-abandon-all-other)
* [/gd abandon world](#gd-abandon-world)
* [/gd ban](#gd-ban)
* [/gd claim clear](#gd-claim-clear)
* [/gd claim reserve](#gd-claim-reserve)
* [/gd claim restore](#gd-claim-restore)
* [/gd claim schematic](#gd-claim-schematic)
* [/gd debug](#gd-debug)
* [/gd delete claim](#gd-delete-claim)
* [/gd delete all](#gd-delete-all)
* [/gd delete alladmin](#gd-delete-alladmin)
* [/gd delete top](#gd-delete-top)
* [/gd economy blocktransfer](#gd-economy-blocktransfer)
* [/gd mode admin](#gd-mode-admin)
* [/gd mode nature](#gd-mode-nature)
* [/gd permission group](#gd-permission-group)
* [/gd permission player](#gd-permission-player)
* [/gd player adjustbonusblocks](#gd-player-adjustbonusblocks)
* [/gd player adjustbonusblocksall](#gd-player-adjustbonusblocksall)
* [/gd player setaccruedblocks](#gd-player-setaccruedblocks)
* [/gd reload](#gd-reload)
* [/gd toggle ignore](#gd-toggle-ignore)
* [/gd unban](#gd-unban)


### Advanced

* [/gd claimgroup player](#gd-claimgroup-player)
* [/gd snapshot](#gd-snapshot)

### Misc

* [/gd help](#gd-help)
* [/gd version](#gd-version)


# Command Detail

### Claims
___
#### `/gd abandon claim`
**Aliases**: `abandon, abandonclaim`  
**Arguments**: `[identifier]`  
**Permission**: `griefdefender.user.claim.command.abandon.base`  
**Additional Permissions**:  
    `griefdefender.user.claim.command.abandon.basic` - Required if abandoning basic claim.  
    `griefdefender.user.claim.command.abandon.subdivision` - Required if abandoning subdivision.  
    `griefdefender.user.claim.command.abandon.town` - Required if abandoning town.  
**Note**: This is only used for user claims NOT admin claims. See [/gd delete claim [identifier]](#gd-delete-claim)  

Abandons the claim you are standing on unless a [claim identifier](/wiki/basic/Claim-Management.html#claim-identifiers) is specified.
Note: This command will only work on claims with no children. If you want to abandon a claim with children, you must use
[/gd abandon top](#gd-abandon-top) instead.

___
#### `/gd abandon all`
**Aliases**: `abandonall, abandonallclaims`  
 **Permission**: `griefdefender.user.claim.command.abandon-all`  
 
Abandons ALL your user claims.

___
#### `/gd abandon top`
**Aliases**:  `abandontop`  
**Arguments**: `[identifier]`   
**Permission**: `griefdefender.user.claim.command.abandon-top-level`  

Abandons the claim you are standing on and all its subdivisions unless a [claim identifier](/wiki/basic/Claim-Management.html#claim-identifiers) is specified.
Note: If used on a town claim, it will also include all basic children claims owned by the town owner.

___
#### `/gd buy blocks`
**Aliases**: `buyblocks, buyclaimblocks`  
**Arguments**: `<amount>`  
**Permission**: `griefdefender.user.claim.command.buy-blocks`  
**Requires**: Economy plugin  

Purchases additional claim blocks with currency. 
Note: `economy-block-cost` must be set higher than 0 in [`options.yml`](/wiki/basic/Options.html) for this command to work.

___
#### `/gd buy claim`
**Aliases**: `claimbuy`  
**Permission**: `griefdefender.user.claim.command.buy`  
**Requires**: Economy plugin.  

View a list of claims for sale. Click [Buy] to purchase.

___
#### `/gd claim bank`
**Aliases**: `claimbank`  
**Arguments**: `<withdraw|deposit> <amount> <name> [identifier]`  
**Permission**: `griefdefender.user.claim.command.bank`  
**Requires**: Economy plugin that supports virtual banks and config setting`bank-system` set to `true` in [`global.yml`](/wiki/advanced/Global-Config.html)  

Used to withdraw or deposit money for use in claim you are standing in unless a [claim identifier](/wiki/basic/Claim-Management.html#claim-identifiers) is specified.


___
#### `/gd claim contract`
**Aliases**: `claimcontract`, `contractclaim`  
**Arguments**: `<amount> [direction] [identifier]`  
**Permission**: `griefdefender.user.claim.command.contract`  

Contracts/Shrinks the claim you are standing in, unless a [claim identifier](/wiki/basic/Claim-Management.html#claim-identifiers) is specified, from the direction specified or facing.  

___
#### `/gd claim create`
**Aliases**: `claimcreate`  
**Arguments**: `<radius>|chunk [type]`  
**Permission**: `griefdefender.user.claim.create.base`  
**Additional Permissions**:  
    `griefdefender.user.claim.create.basic` - Required if creating basic claim.  
    `griefdefender.user.claim.create.subdivision` - Required if creating subdivision.  
    `griefdefender.user.claim.create.town` - Required if creating town.  
    `griefdefender.admin.claim.command.admin-mode` - Required if creating admin claim.  

Creates a claim around the player of the given type. If no claimtype (or an incorrect one) is specified, a basic claim will be created.   
Note: If `chunk` is used instead of `<radius>`, the claim will consume entire chunk you are standing in.  


#### `/gd claim debug`
**Aliases**: `cfdebug`  
**Permission**: `griefdefender.user.claim.command.flag.debug`  

Toggles user claim debugging mode for claim owners to test protection as a non-trusted user.

___
#### `/gd claim displayname`
**Aliases**: `claimdisplayname`  
**Arguments**: `<name>|clear`  
**Permission**: `griefdefender.user.claim.command.display-name`  

Sets the display name of your claim.  
Note: Use `clear` as argument to clear display name.  
Note: This command checks for reserved names set by admins in [`global.yml`](/wiki/advanced/Global-Config.html). If a reserved name is found, it will not be set unless set by an admin.  

___
#### `/gd claim expand`
**Aliases**: `claimexpand, expandclaim`  
**Arguments**: `<amount> [direction] [identifier]`  
**Permission**: `griefdefender.user.claim.command.expand`  
 
Expands the claim you are standing in, unless a [claim identifier](/wiki/basic/Claim-Management.html#claim-identifiers) is specified, in the direction specified or facing.  

___
#### `/gd claim farewell`
**Aliases**: `claimfarewell`  
**Arguments**: `<message>|clear|none [identifier]`  
**Permission**: `griefdefender.user.claim.command.farewell`  

Sets the farewell message of the claim you are standing in, unless a [claim identifier](/wiki/basic/Claim-Management.html#claim-identifiers) is specified.  
Note: To unset, use `/gd claim farewell clear`

___
#### `/gd claim greeting`
**Aliases**: `claimgreeting`  
**Arguments**: `<message>|clear|none [identifier]`  
**Permission**: `griefdefender.user.claim.command.greeting`  

Sets the greeting message of your claim.  
Note: To unset, use `/gd claim greeting clear`


___
#### `/gd claim id`
**Aliases**: `claimid`  
**Arguments**: `<identifier>`  
**Permission**: `griefdefender.user.claim.command.id`  

Sets the friendly identifier of your claim.  
Note: This command checks for reserved names set by admins in [`global.yml`](/wiki/advanced/Global-Config.html). If a reserved name is found, it will not be set unless set by an admin.

___
#### `/gd claim info`
**Aliases**: `claiminfo`  
**Arguments**: `[identifier]`  
**Permission**: `griefdefender.user.claim.command.info.base`  
**Additional Permissions**:  
    `griefdefender.user.claim.command.info.others` - Required to see other claim info not owned by you.  
    `griefdefender.user.claim.create.town` - Required to change a claim to a town type.  
    `griefdefender.user.claim.command.info.raid` - Required to toggle raids.  
    `griefdefender.user.claim.command.greeting` - Required to set claim greeting.  
    `griefdefender.user.claim.command.farewell` - Required to set claim farewell.  
    `griefdefender.user.claim.command.enter-title` - Required to set claim enter title.  
    `griefdefender.user.claim.command.exit-title` - Required to set claim exit title.  
    `griefdefender.user.chat.capture` - Required to toggle chat capture.  
    `griefdefender.user.claim.command.info.others.creation-date` - Required to see creation date in claims not owned by you.  
    `griefdefender.user.claim.command.info.others.last-active` - Required to see last active in claims not owned by you.  
    `griefdefender.user.claim.command.info.others.claim-uuid` - Required to see claim UUID in claims not owned by you.  

Gets information about the claim you are standing in unless a [claim identifier](/wiki/basic/Claim-Management.html#claim-identifiers) is specified.


___
#### `/gd claim inspect`
**Aliases**: `claiminspect`  
**Arguments**: `[area|hide|hideall]`  
**Permission**: `griefdefender.user.claim.command.inspect`  

Inspects the target block player is looking at or nearby claims.

___
#### `/gd claim list`
**Aliases**: `claimlist`  
**Arguments**: `[<player> [world]]`  
**Permission**: `griefdefender.user.claim.command.list.base`  
**Additional Permissions**:  
    `griefdefender.user.claim.command.list.others` - Required to list claims not owned by you.  
    `griefdefender.user.claim.create.town` - Required to list towns not owned by you.  
    `griefdefender.user.chat.capture` - Required to toggle chat capture.  

List information about a player's claims.

___
#### `/gd claim rent`
**Aliases**: `claimrent`  
**Arguments**: `[create <rate> [max_days]|list|cancel]`  
**Permission**: `griefdefender.user.claim.command.rent`  
**Requires**: Economy plugin and `rent-system` to be enabled in [`global.yml`](/wiki/advanced/Global-Config.html)  

Used to rent/list claims.  
Note: This command is only used for built-in GD rent system. It is recommended to use RealEstate instead.

___
#### `/gd claim setspawn`
**Aliases**: `claimsetspawn`  
**Permission**: `griefdefender.user.claim.command.set-spawn`  

Sets the spawn of your claim to the location you are standing in.

___
#### `/gd claim spawn`
**Aliases**: `claimspawn`  
**Arguments**: `[identifier]`  
**Permission**: `griefdefender.user.claim.command.spawn`  
**Requires**: Economy plugin if `player-teleport-cost` is used.  

Teleports you to claim spawn, if available.  
Note: To delay teleport, set option `player-teleport-delay` higher than `0` in [`options.yml`](/wiki/basic/Options.html).  
Note: To charge currency on teleport, set `player-teleport-cost` to a value higher than 0 in [`options.yml`](/wiki/basic/Options.html).

___
#### `/gd claim tax`
**Arguments**: `balance|force|reset|resetall|pay <amount>]`   
**Permission**: `griefdefender.user.claim.command.claim.tax`  
**Requires**: Economy plugin and config setting `tax-system` to be enabled in [`global.yml`](/wiki/advanced/Global-Config.html). It is highly recommended to test this feature before turning on.  

Used to manage taxes of a claim.  See [Tax System](/wiki/basic/Tax-System.html) for more info.  
Note: The argument `force` allows an admin to pay a claim's tax balance for another player.    
Note: The argument `reset` will reset tax owed in claim. Requires `griefdefender.admin.claim.command.admin-mode` or ability to ignore claim type.  
Note: The argument `resetall` will reset tax owed in all claims. Requires `griefdefender.admin.claim.command.admin-mode` or ability to ignore claim type.


___
#### `/gd claim title`
**Aliases**: `claimtitle`  
**Arguments**: `enter|exit main|sub <message>|clear|none`  
**Permission**: `griefdefender.user.claim.command.enter-title`  

Sets the enter or exit title of your claim.  
Note: Use `clear` or `none` to clear title.

___
#### `/gd claim transfer`
**Aliases**: `claimtransfer, transferclaim`  
**Arguments**: `<player> [identifier]`  
**Permission**: `griefdefender.user.claim.command.transfer`  

Transfer the claim you're standing in, unless [claim identifier](/wiki/basic/Claim-Management.html#claim-identifiers) is specified, to target player.

___
#### `/gd claim we`
**Aliases**: `gdwe, gdworldedit`  
**Arguments**: `claim|clear|select [identifier]`  
  `claim` - creates GD claim from WE selection.  
  `clear` - clears worldedit selection.  
  `select` - creates new WE selection from GD claim.  
**Permission**: `griefdefender.user.claim.command.worldedit.create`  
**Requires**: WorldEdit.  

Used to manage GD claims with worldedit.  
Note: This command will not work unless the server has WorldEdit.

___
#### `/gd claimgroup admin`
**Aliases**: `cga, claimgroupadmin`  
**Arguments**: `join <group> [<identifier>]|unjoin [<identifier>]|create <group>|delete <group>`  
**Permission**: `griefdefender.admin.claim.command.group`  

Used to manage global admin claim groups. See [Claim Groups](/wiki/basic/Claim-Management.html#claim-groups) for more info.

___
#### `/gd confirm`
**Aliases**: `gdconfirm`  
**Permission**: `griefdefender.user.command.ymlirm`  

Used to confirm chat confirmations by command.  

___
#### `/gd givepet`
**Aliases**: `givepet`  
**Arguments**: `<player>`  
**Permission**: `griefdefender.user.claim.command.give.pet`  

Transfers a pet you own to a new owner.


___
#### `/gd mode basic`
**Aliases**: `bc, basicclaims, modeadmin`  
**Permission**:   `griefdefender.user.claim.command.basic-mode`  

Switches the modification tool to basic claims mode which allows user to create basic claims.

___
#### `/gd mode subdivide`
**Aliases**: `sc, modesubdivide, subdivideclaims`  
**Permission**:   `griefdefender.user.claim.command.subdivide-mode`  

Switches the modification tool to subdivision mode, used to subdivide your claims.

___
#### `/gd mode town`
**Aliases**: `modetown, townclaims`  
**Permission**:   `griefdefender.user.claim.command.town-mode`  

Switches the modification tool to town claims mode.

___
#### `/gd player info`
**Aliases**: `gdplayerinfo, playerinfo`  
**Arguments**: `[<player>|<player> <world>]`  
**Permission**: `griefdefender.user.command.info.base`  
**Additional Permissions**:  
    `griefdefender.user.command.info.others` - Required to view other player's info.  
    `griefdefender.user.command.info.others.last-active` - Required to view other player's last active info.  
   `griefdefender.user.claim.create.town` - Required to view town info.  
    `griefdefender.user.chat.capture` - Required to toggle chat capture.  

Gets information about a player's data, claim blocks, and claim limits.

___
#### `/gd player transferblocks`
**Aliases**: `transferblocks`  
**Arguments**: `<player> <amount>`  
**Permission**: `griefdefender.user.claim.command.give.blocks`  

Transfers owned claim blocks to another player.  
Note: This will deduct claim blocks from player using command. Use with caution!

___
#### `/gd player trapped`  
**Aliases**: `trapped`  
**Permission**: `griefdefender.user.claim.command.trapped`  

Teleports the player to a safe location if stuck and unable to build.

___
#### `/gd player unlockdrops`  
**Aliases**: `unlockdrops`  
**Permission**: `griefdefender.user.claim.command.unlock-drops`  

Allows other players to pickup any items dropped from death.  

___
#### `/gd sell blocks`
**Aliases**: `sellblocks, sellclaim, sellclaimblocks`  
**Arguments**: `[amount]`  
**Permission**: `griefdefender.user.claim.command.sell-blocks`  
**Requires**: Economy plugin.  

Sell your claim blocks for server money.  
Note: `economy-block-sell-return` must be set higher than 0 in [`options.yml`](/wiki/basic/Options.html) for this command to work.

___
#### `/gd sell claim`
**Aliases**: `claimsell`  
**Arguments**: `<price>|cancel`  
**Permission**: `griefdefender.user.claim.command.sell`  

Puts your claim up for sale at the set price.  
Note: To cancel sale, execute `/claimsell cancel`

___
#### `/gd toggle claim`
**Aliases**: `claim, toggleclaim`  
**Permission**: `griefdefender.user.claim.command.claim-mode.base`  

Toggles claim mode creation. This mode does not use tools.  
Note: This will default to basic claim mode.  
Note: Use left-click to visualize/hide claims.  
Note: Use right-click to begin claiming.

___
#### `/gd toggle cuboid`
**Aliases**: `cuboid, togglecuboid`  
**Permission**: `griefdefender.user.claim.command.cuboid`  

Toggles 3D cuboid claims mode which takes height into account rather than claiming from bedrock to sky.

___
#### `/gd toggle gui`
**Aliases**: `claimgui`  
**Permission**: `griefdefender.user.claim.command.gui`  

Toggle interface between Chat/Inventory GUI.

___
#### `/gd toggle inherit`
**Aliases**: `claiminherit, toggleclaiminherit`  
**Permission**: `griefdefender.user.claim.command.inherit`  

Toggles whether claim inherits flags and trust from parent claim.  
Note: Does not affect children claims in towns as this is always enforced.

___
#### `/gd toggle notifications`
**Aliases**: `claimnotifications`  
**Permission**: `griefdefender.user.claim.command.toggle.notifications`  

To enable/disable greeting/farewell messages on trusted claims.

___
#### `/gd toggle tool`
**Aliases**: `claimtool`  
**Permission**: `griefdefender.user.claim.command.claim-tool`  

To enable/disable the claim tool.

### Plots

___
#### `/gd plot claim`
**Aliases**: claimplot
**Arguments**: [plot_identifier]
**Permission**: griefdefender.user.claim.create.plot

Allow players to claim a nearby plot or a plot in specified plot container identifier.​

___
#### `/gd plot create`
**Aliases**: `claimcreateplot`
**Arguments**: `<name> <child_radius> <quantity> <spacing> [X Z]`
**Permission**: `griefdefender.admin.claim.create.plot`

Allow admins to create a container of plots for players.​

___
#### `/gd plot merge`
**Aliases**: `claimplotmerge`
**Arguments**: `[identifier]`
**Permission**: `griefdefender.user.claim.plot.merge`

Allows players to merge plots in the direction they are facing.​

___
#### `/gd plot unmerge`
**Atalho**: `claimplotunmerge`
**Arguments**: `[identifier]`
**Permissão**: `griefdefender.admin.claim.plot.unmerge`

Allows admins to unmerge plots they are standing in.​

### Flags

___
#### `/gd flag claim`
**Aliases**: `cf, claimflag`   
**Arguments**: `[<flag> <target> <value> [contexts]]`  
**Permission**: `griefdefender.user.claim.command.flag.base`  
**Additional Permissions**:  
    `griefdefender.user.claim.command.flag.gui` - Required for using flag GUI if command specified with no args.  
    `griefdefender.advanced.admin.flag.<flag_name>` - Required for using this command for `<flag_name>` specified as argument.  
    `griefdefender.user.claim.command.list-flags` - Required for listing current flags used in claim.  
    `griefdefender.user.definition.flag.<preset_name>.<group>.<definition_name>` - Required to see user flag definitions presented in GUI.  
    `griefdefender.admin.definition.flag.<preset_name>.<group>.<definition_name>` - Required to see admin flag definitions presented in GUI.  
    `griefdefender.user.chat.capture` - Required to use chat capture feature in chat GUI.  
    `griefdefender.advanced.admin.flags.base` - Required to see `ADVANCED` button in chat GUI.  
    `griefdefender.advanced.user.gui.flag.group.owner` - Required to see `OWNER` tab in GUI.  
    `griefdefender.advanced.user.gui.flag.group.accessor` - Required to see `ACCESSOR` tab in GUI.  
    `griefdefender.advanced.user.gui.flag.group.builder` - Required to see `BUILDER` tab in GUI.  
    `griefdefender.advanced.user.gui.flag.group.container` - Required to see `CONTAINER` tab in GUI.  
    `griefdefender.advanced.user.gui.flag.group.manager` - Required to see `MANAGER` tab in GUI.  

Gets/Sets claim flags in the claim you are standing in.

___
#### `/gd flag group`
**Aliases**: `cfg`  
**Arguments**: `<group> [<flag> <target> <value> [contexts]]`  
**Permission**: `griefdefender.admin.claim.command.flag.group`  

Gets/Sets flag permission for a LP group in claim you are standing in.

___
#### `/gd flag player`
**Aliases**: `cfp`  
**Arguments**: `<player> <flag> <target> <value> [contexts]`  
**Permission**: `griefdefender.user.claim.command.flag.player`  

Adds flag permission to player.

___
#### `/gd flag reset`
**Aliases**: `cfr`  
**Arguments**: `[identifier]`  
**Permission**: `griefdefender.user.claim.command.flag.reset`  

Resets a claim to flag defaults by removing all persisted permissions with claim UUID in LP.

___
#### `/gd flagdefinition`
**Aliases**: `claimflagdefinition, flagdefinition`  
**Arguments**: `<preset:group:public|owner> <definition> <value> [identifier]`  
**Permission**: `griefdefender.user.claim.command.flag.definition`  
**Additional Permissions**:  
    `griefdefender.user.definition.flag.<preset_name>.<group>.<definition_name>` - The flag definition specified as argument will require this permission.  
**Example**: To toggle flag definition `tnt-block-explosion` in minecraft user group  
`/gd flagdefinition minecraft:user:public tnt-block-explosion true`  

Toggles specified flag definition to true or false.

___
#### `/gd flagdefinition group`
**Aliases**: `claimflagdefinitiongroup, flagdefinitiongroup`  
**Arguments**: `<group> <preset:group:public|owner> <definition> <value> [identifier]`  
**Permission**: `griefdefender.user.claim.command.flag.definition-group`  
**Additional Permissions**:  
    `griefdefender.user.definition.flag.<preset_name>.<group>.<definition_name>` - The flag definition specified as argument will require this permission.  
**Example**: To toggle flag definition `tnt-block-explosion` in minecraft user group on LP group named `vip`  
`/gd flagdefinition group vip minecraft:user:public tnt-block-explosion true`  

Toggles specified flag definition on LP group to true or false.

___
#### `/gd flagdefinition player`
**Aliases**: `claimflagdefinitionplayer, flagdefinitionplayer`  
**Arguments**: `<player> <preset:group:public|owner> <definition> <value> [identifier]`  
**Permission**: `griefdefender.user.claim.command.flag.definition-player`  
**Additional Permissions**:  
    `griefdefender.user.definition.flag.<preset_name>.<group>.<definition_name>` - The flag definition specified as argument will require this permission.  
**Example**: To toggle flag definition `tnt-block-explosion` in minecraft user group on LP player named `Player123`  
`/gd flagdefinition player Player123 minecraft:user:public tnt-block-explosion true`  

Toggles specified flag definition on LP player to true or false.



### Options
___
#### `/gd option claim `
**Aliases**: `cod, claimoption`    
**Arguments**: `[<option> <value> [contexts]]`  
**Permission**: `griefdefender.admin.claim.command.option.base`  
**Additional Permissions**:  
    `griefdefender.user.claim.command.option.gui` - Required for using option GUI.  
    `griefdefender.advanced.admin.options.arg` - Required for using command with args.  
    `griefdefender.advanced.admin.option.<option_name>` - Required for using this command for `<option_name>` specified as argument.  
    `griefdefender.user.claim.command.list-options` - Required for listing current options used in claim.  
    `griefdefender.user.definition.option.<preset_name>.<group>.<definition_name>` - Required to see user option definitions presented in GUI.  
    `griefdefender.admin.definition.option.<preset_name>.<group>.<definition_name>` - Required to see admin option definitions presented in GUI.  

Gets/Sets options in the claim you are standing in.

___
#### `/gd option group`
**Aliases**: `cog`  
**Arguments**: `<group> [<option> <value> [contexts]]`  
**Permission**: `griefdefender.admin.claim.command.option.group`  

Gets/Sets options for LP group in claim you are standing in.

___
#### `/gd option player`
**Aliases**: `cop`  
**Arguments**: `<player> [<option> <value> [contexts]]`   
**Permission**: `griefdefender.admin.claim.command.option.player`  

Gets/Sets options for a player in claim you are standing in.


### Trust
Note: `public` is for all users.
___
#### `/gd trust player`
*Resident*: `Grants a player/group ability to create claims, includes accessor trust.`  
*Accessor*: `Grants a player entry to your claim(s) and use of your bed`  
*Container*: `Grants a player access to your claim's containers, crops, animals, bed, buttons, and levers`  
*Builder*: `Grants a player edit access to your claim(s)`  
*Manager*: `Grants a player access to all of the above including claim settings`  
**Aliases**: `trust`  
**Arguments**: `<player>|public <trusttype>`  

Grants a player access to your claim(s).

___
#### `/gd trust group`
*Resident*: `Grants a player/group ability to create claims, includes accessor trust.`  
*Accessor*: `Grants a group entry to your claim(s) and use of your bed`  
*Container*: `Grants a group access to your claim's containers, crops, animals, bed, buttons, and levers`  
*Builder*: `Grants a group edit access to your claim(s)`  
*Manager*: `Grants a group access to all of the above including claim settings`  
**Aliases**: `trustgroup`  
**Arguments**: `<group> [<accessor|builder|container|manager|resident>] [identifier]`  
**Permission**: `griefdefender.admin.claim.command.trust.group`  

Grants a LP group access to the claim you are standing in unless a [claim identifier](/wiki/basic/Claim-Management.html#claim-identifiers) is specified.

___
#### `/gd trustall player`
*Resident*: `Grants a player/group ability to create claims, includes accessor trust.`  
*Accessor*: `Grants a player entry to ALL your claim(s) and use of your bed`  
*Container*: `Grants a player access to ALL your claim's containers, crops, animals, bed, buttons, and levers`  
*Builder*: `Grants a player edit access to ALL your claim(s)`  
*Manager*: `Grants a player access to all of the above including claim settings`  
**Aliases**: `trust`  
**Arguments**: `<player>|public <trusttype>`  
**Permission**: `griefdefender.user.claim.command.trustall.player`  

Grants a player access to ***ALL*** your claim(s).

___
#### `/gd trustall group`
*Resident*: `Grants a player/group ability to create claims, includes accessor trust.  `
*Accessor*: `Grants a group entry to ALL your claim(s) and use of your bed`  
*Container*: `Grants a group access to ALL your claim's containers, crops, animals, bed, buttons, and levers`  
*Builder*: `Grants a group edit access to ALL your claim(s)`  
*Manager*: `Grants a group access to all of the above including claim settings`  
**Aliases**: `trustallgroup`  
**Arguments**: `<group>|public <accessor|builder|container|manager|resident>`  
**Permission**: `griefdefender.admin.claim.command.trustall.group`  

Grants a LP group access to ***ALL*** your claim(s).

___
#### `/gd trustalladmin group`
*Resident*: `Grants a player/group ability to create claims, includes accessor trust.`  
*Accessor*: `Grants a group entry to ALL your claim(s) and use of your bed`  
*Container*: `Grants a group access to ALL your claim's containers, crops, animals, bed, buttons, and levers`  
*Builder*: `Grants a group edit access to ALL your claim(s)`  
*Manager*: `Grants a group access to all of the above including claim settings`  
**Aliases**: `trustallgroup`  
**Arguments**: `<group>|public <accessor|builder|container|manager|resident>`    
**Permission**: `griefdefender.admin.claim.command.trustalladmin.group`  

Grants a LP group access to ***ALL*** admin claim(s).

___
#### `/gd trust list`
**Aliases**: `trustlist`  
**Arguments**: `[type] [identifier]`  
 **Permission**: `griefdefender.user.claim.command.trust.list`  
 
Manages trust for the claim you're standing in.

___
#### `/gd untrust player`
**Aliases**: `untrust`  
**Arguments**: `<player>|public [<accessor|builder|container|manager|resident>] [identifier]`  
**Permission**: `griefdefender.user.claim.command.untrust.player`  

Revokes a player's access to your claim.

___
#### `/gd untrust group`
**Aliases**: `untrustgroup`  
**Arguments**: `<group>|public [<accessor|builder|container|manager|resident>] [identifier]`  
**Permission**: `griefdefender.admin.claim.command.untrust.group`  

Revokes a group's access to your claim.

___
#### `/gd untrustall player`
**Aliases**: `untrustall`  
**Arguments**: `<player>|public [<accessor|builder|container|manager|resident>]`  
**Permission**: `griefdefender.user.claim.command.untrustall.player`  

Revokes a player's access to ***ALL*** your claim(s).

___
#### `/untrustall group`
**Aliases**: `untrustallgroup`  
**Arguments**: `<group>|public [<accessor|builder|container|manager|resident>]`   
**Permission**: `griefdefender.admin.claim.command.untrustall.group`  

Revokes a group's access to ***ALL*** your claim(s).


### Admin


___
#### `/gd abandon allother`
**Aliases**: `abandonallother`  
**Arguments**: `<player> <world>`  
 **Permission**: `griefdefender.admin.claim.command.abandon.all-other`  
 
Allows an admin to abandon ALL claims of specified player for specified world.


___
#### `/gd abandon world`  
**Aliases**: `abandonworld`  
**Arguments**: `[world]`  
**Permission**: `griefdefender.admin.claim.command.abandon.world`  

Allows an to abandon ALL user claims in current world unless specified.  

___
#### `/gd ban`  
**Aliases**: `claimban`  
**Arguments**: `hand | <type> <target> [world] [<message>]`  
Note: Valid types are `entity`, `item`, `block`  
Note: Target represents the identifier of `entity, item, or block`  
**Permission**: `griefdefender.admin.claim.command.ban`  
**Example**:  To ban sticky piston usage in world named `valhalla` :  
`/gd ban block minecraft:sticky_piston valhalla "You are not allowed to use sticky pistons in this world."`  

Bans target entity, item, block, or item in hand from all usage.  

___
#### `/gd claim clear`
**Aliases**: `claimclear`  
**Arguments**: `<target> [identifier]`  
**Permission**: `griefdefender.admin.claim.command.clear`  
**Example**: To clear all pigs in current claim :  
`/gd claim clear minecraft:pig`  

Allows clearing of entities within one or more claims in claim you are standing on unless a [claim identifier](/wiki/basic/Claim-Management.html#claim-identifiers) is specified.

___
#### `/gd claim reserve`
**Aliases**: `claimreserve`  
**Arguments**: `[name]`  
**Permission**: `griefdefender.admin.claim.command.reserve-name`  

Reserves a claim name for administrator use.  
Note: Use no arguments to see current list of reserved names.

___
#### `/gd claim restore`
**Aliases**: `claimrestore, restoreclaim`  
**Permission**: `griefdefender.admin.command.restore-claim.base`  
**Requires**: WorldEdit.  

Restores claim to its natural world generated state. Use with caution.  
Note: This does not support custom worlds.

___
#### `/gd claim schematic`
**Aliases**: `claimschematic`  
**Arguments**: `[<apply|create|delete> <name>]`  
**Permission**: `griefdefender.admin.claim.command.reserve-name`  

Manages claim schematics. Use `/claimschematic create <name>` to create a live backup of claim.  
Note: Use no arguments to launch schematic GUI.

___
#### `/gd debug`
**Aliases**: `gddebug`  
**Arguments**: `on|off|record|paste [filter]`  
**Permission**: `griefdefender.admin.claim.command.debug`  
**Example**: To record all flag actions in claim you are standing in :  
`/gddebug record claim` then `/gddebug paste` to retrieve link.  

Toggles admin claim debugging mode to record actions in claim. See [Debugging](/wiki/advanced/Debugging.html) for more info.  
Note: Use `claim` filter to only include debug in claim you are standing in.

___
#### `/gd delete claim`
**Aliases**: `deleteclaim`    
**Arguments**: `[identifier]`  
**Permission**: `griefdefender.admin.claim.command.delete-claims`  

Deletes the claim you're standing in, even if it's not your claim.  
Note: This command will not refund player currency back or handle the abandon return ratio. Use with caution on user claims!

___
#### `/gd delete all`
**Aliases**: `deleteall`  
**Arguments**: `<player> [world]`  
**Permission**: `griefdefender.admin.claim.command.delete-claims`  

Delete all of another player's claims.  
Note: This command will not refund player currency back or handle the abandon return ratio. Use with caution on user claims!

___
#### `/gd delete alladmin`
**Aliases**: `deletealladmin`  
**Arguments**: `[world]`  
**Permission**: `griefdefender.admin.claim.command.delete-claims`  

Deletes all administrative claims.

___
#### `/gd delete top`
**Aliases**: `deletetop`  
**Permission**: `griefdefender.admin.claim.command.delete-claims`  

Deletes the claim you are standing on and all its subdivisions unless a [claim identifier](/wiki/basic/Claim-Management.html#claim-identifiers) is specified.  
Note: If used on a town claim, it will also include all basic children claims owned by the town owner.

___
#### `/gd economy blocktransfer`
**Aliases**: `gdblocktransfer`  
**Permission**: `griefdefender.admin.claim.command.block-transfer`  

Transfers ALL player remaining accrued/bonus claim blocks into currency then sets their accrued and bonus amounts to `0`.  
Note: This MUST be used if you are switching from claim blocks system to economy mode.


___
#### `/gd mode admin`
**Aliases**: `ac, adminclaims, modeadmin`  
**Permission**:   `griefdefender.admin.claim.command.admin-mode`  

Switches the modification tool to admin claims mode which allows user to create admin claims.

___
#### `/gd mode nature`
**Aliases**: `modenature`  
**Permission**: `griefdefender.admin.command.restore-nature.base`  

Switches the modification tool to restoration mode.  
Note: This command is current not available.

___
#### `/gd player adjustbonusblocks`
**Aliases**: `adjustbonusblocks`  
**Arguments**: `<player> <amount> [world]`  
**Permission**: `griefdefender.admin.command.set-accrued-claim-blocks`  

Adds or subtracts bonus claim blocks for a player

___
#### `/gd player adjustbonusblocksall`
**Aliases**: `adjustbonusblocksall`  
**Arguments**: `<amount>`  
**Permission**: `griefdefender.admin.command.set-accrued-claim-blocks-all`  


Adjusts bonus claim block total for all online players by amount specified.

___
#### `/gd player setaccruedblocks`
**Aliases**: `scb, setaccruedblocks`  
**Arguments**: `<player> <amount> [world]`  
**Permission**: `griefdefender.admin.command.set-accrued-claim-blocks`  

Updates a player's accrued claim block total.

___
#### `/gd permission group`
**Aliases**: `cpg`  
**Arguments**: `<group> [<permission> <value>]`  
**Permission**: `griefdefender.admin.claim.command.permission-group`  
**Requires**: The command source executing this command must have the permission specified as arg.  

Sets a permission on a group with a claim context.  
Note: Use this command when you want to override LP permissions in a claim.

___
#### `/gd permission player`
**Aliases**: `cpp`  
**Arguments**: `<player> [<permission> <value>]`  
**Permission**: `griefdefender.admin.claim.command.permission-player`  
**Requires**: The command source executing this command must have the permission specified as arg.  

Sets a permission on a player with a claim context.  
Note: Use this command when you want to override LP permissions in a claim.

___
#### `/gd reload`
**Aliases**: `gdreload`  
**Permission**: `griefdefender.admin.command.reload`  

Reloads GriefDefender's configuration settings.

___
#### `/gd schematic`  
**Aliases**: `claimschematic`  
**Arguments**: `<create|delete> <name>`  
**Permission**: `griefdefender.admin.claim.command.schematic`  

Manages claim schematics. Use `/claimschematic create <name>` to create a live backup of claim. 

___
#### `/gd toggle ignore`
**Aliases**: `claimignore, ic, ignoreclaims, toggleclaimignore`  
**Permission**: `griefdefender.admin.claim.command.ignore.base`  
**Additional Permissions**:  
    `griefdefender.admin.claim.command.ignore.admin` - Required to ignore admin claims.  
    `griefdefender.admin.claim.command.ignore.basic` - Required to ignore basic claims.  
    `griefdefender.admin.claim.command.ignore.town` - Required to ignore town claims.  
    `griefdefender.admin.claim.command.ignore.wilderness` - Required to ignore wilderness.  

Toggles ignore claims mode.

___
#### `/gd unban`  
**Aliases**: `claimunban`    
**Arguments**: `hand | <type> <target>`  
Note: Valid types are `entity`, `item`, `block`  
Note: Target represents the identifier of `entity, item, or block`  
**Permission**: `griefdefender.admin.claim.command.ban`  
**Example**:  To unban sticky piston usage in current world :  
`/gd unban block minecraft:sticky_piston`  

Unbans target entity, item, block, or item in hand allowing it to be used again.  


### Advanced

___
#### `/gd claimgroup player`
**Aliases**: `claimgroup`  
**Arguments**: `join <group> [<identifier>]|unjoin [<identifier>]|create <group>|delete <group>`  
**Permission**: `griefdefender.advanced.user.claim.command.player`  

Used to manage player claim groups. See [Claim Groups](/wiki/basic/Claim-Management.html#claim-groups) for more info.

___
#### `/gd snapshot`
**Aliases**: `claimsnapshot`  
**Arguments**: `<apply|create|delete> <name> [contexts]`  
**Permission**: `griefdefender.advanced.user.claim.command.snapshot`  

Manages claim snapshots used to backup/restore/replace a claim's permission, option, trust, or claim data. See [Claim Snapshots](/wiki/basic/Claim-Management.html#claim-snapshots) for more info.


### Misc

___
#### `/gd`

Lists detailed information on each command.

___
#### `/gd help`
**Permission**: `griefdefender.user.command.help`

Displays GriefDefender command help.

___
#### `/gd version`
**Aliases**: `gdversion`  
**Permission**: `griefdefender.user.command.version`  

Lists GD, LP, and platform version information.
