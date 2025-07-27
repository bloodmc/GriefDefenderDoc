---
title: Commands
tag: Info
category: info
icon: shell
---

# GriefDefender Commands

This document outlines all available `/gd` commands in **GriefDefender**, organized for clarity and usability. Each section includes aliases, permissions, arguments, and usage notes.

## 🛠️ Command Overview


### `/gd`

When used without any arguments, `/gd` opens the **GriefDefender GUI**. This interface may appear as either a **chat-based GUI** or an **inventory-based GUI**, depending on the player's toggle setting:

* Use `/gd toggle gui` to switch between chat and inventory modes.
* See [GUI Documentation ↗](https://docs.griefdefender.com/wiki/basic/GUI) for a full breakdown of features and usage tips.

This is the primary command to access all major GriefDefender functionality in a user-friendly interface. This interface may appear as either a **chat-based GUI** or an **inventory-based GUI**, depending on the player's toggle setting:

* Use `/gd toggle gui` to switch between chat and inventory modes.

This is the primary command to access all major GriefDefender functionality in a user-friendly interface.

**Arguments Key:** `<required>` `[optional]`

### 📌 Claim Identifier

Many commands support the new argument [`[identifier]`](/wiki/basic/Claim-Management#claim-identifiers) which is the claim id set by the claim owner.  If you do not want to be required to stand in a claim for a specific command, set the claim identifier using `/gd claim id <identifier>` then pass the identifier at the end of the command.
If using an identifier for an admin claim, the format is `admin:<identifier>`
If using an identifier for wilderness, the format is `wilderness:<identifier>`
If using an identifier for another player, the format is `<playername>:<identifier>`

---


## 📒 Table of Contents

### 🙋 User Commands

#### 🏗️ Creation & Modification

* [/gd claim create](#gd-claim-create)
* [/gd claim expand](#gd-claim-expand)
* [/gd claim contract](#gd-claim-contract)
* [/gd claim displayname](#gd-claim-displayname)
* [/gd claim title](#gd-claim-title)
* [/gd claim setspawn](#gd-claim-setspawn)
* [/gd claim we](#gd-claim-we)
* [/gd claim id](#gd-claim-id)

#### 🎚️ Toggles

* [/gd toggle claim](#gd-toggle-claim)
* [/gd toggle cuboid](#gd-toggle-cuboid)
* [/gd toggle inherit](#gd-toggle-inherit)
* [/gd toggle tool](#gd-toggle-tool)
* [/gd toggle gui](#gd-toggle-gui)

#### 📜 Info & Inspection

* [/gd claim info](#gd-claim-info)
* [/gd claim inspect](#gd-claim-inspect)
* [/gd claim list](#gd-claim-list)
* [/gd claim debug](#gd-claim-debug)
* [/gd player info](#gd-player-info)

#### 🔁 Transfers & Grouping

* [/gd claim transfer](#gd-claim-transfer)
* [/gd player transferblocks](#gd-player-transferblocks)
* [/gd claimgroup admin](#gd-claimgroup-admin)
* [/gd givepet](#gd-givepet)

#### 💵 Economy & Rentals

* [/gd buy blocks](#gd-buy-blocks)
* [/gd sell blocks](#gd-sell-blocks)
* [/gd buy claim](#gd-buy-claim)
* [/gd sell claim](#gd-sell-claim)
* [/gd claim bank](#gd-claim-bank)
* [/gd claim rent](#gd-claim-rent)
* [/gd claim tax](#gd-claim-tax)

#### 🧩 Plot Management

* [/gd plot claim](#gd-plot-claim)
* [/gd plot create](#gd-plot-create)
* [/gd plot merge](#gd-plot-merge)
* [/gd plot unmerge](#gd-plot-unmerge)

#### 🚪 Greetings & Messages

* [/gd claim greeting](#gd-claim-greeting)
* [/gd claim farewell](#gd-claim-farewell)

#### 🚶 Movement & Trapped

* [/gd claim spawn](#gd-claim-spawn)
* [/gd player trapped](#gd-player-trapped)
* [/gd player unlockdrops](#gd-player-unlockdrops)

#### 🧹 Abandoning & Confirmation

* [/gd abandon claim](#gd-abandon-claim)
* [/gd abandon all](#gd-abandon-all)
* [/gd abandon top](#gd-abandon-top)
* [/gd confirm](#gd-confirm)

#### ⚙️ Claim Modes

* [/gd mode basic](#gd-mode-basic)
* [/gd mode subdivide](#gd-mode-subdivide)
* [/gd mode town](#gd-mode-town)

#### 🚩 Flag Management

* [/gd flag claim](#gd-flag-claim)
* [/gd flag group](#gd-flag-group)
* [/gd flag player](#gd-flag-player)
* [/gd flag reset](#gd-flag-reset)
* [/gd flagdefinition](#gd-flagdefinition)
* [/gd flagdefinition group](#gd-flagdefinition-group)
* [/gd flagdefinition player](#gd-flagdefinition-player)

#### 🛠️ Option Management

* [/gd option claim](#gd-option-claim)
* [/gd option group](#gd-option-group)
* [/gd option player](#gd-option-player)

#### 🤝 Trust Management

* [/gd trust player](#gd-trust-player)
* [/gd trust group](#gd-trust-group)
* [/gd trustall player](#gd-trustall-player)
* [/gd trustall group](#gd-trustall-group)
* [/gd trustalladmin group](#gd-trustalladmin-group)
* [/gd trust list](#gd-trust-list)
* [/gd untrust player](#gd-untrust-player)
* [/gd untrust group](#gd-untrust-group)
* [/gd untrustall player](#gd-untrustall-player)
* [/untrustall group](#untrustall-group)

### 🛡️ Admin Commands

#### 🧹 Claim & User Cleanup

* [/gd abandon allother](#gd-abandon-all-other)
* [/gd abandon world](#gd-abandon-world)
* [/gd delete claim](#gd-delete-claim)
* [/gd delete all](#gd-delete-all)
* [/gd delete alladmin](#gd-delete-alladmin)
* [/gd delete top](#gd-delete-top)
* [/gd player adjustbonusblocks](#gd-player-adjustbonusblocks)
* [/gd player adjustbonusblocksall](#gd-player-adjustbonusblocksall)
* [/gd player setaccruedblocks](#gd-player-setaccruedblocks)

#### 🧱 Claim Management

* [/gd claim clear](#gd-claim-clear)
* [/gd claim reserve](#gd-claim-reserve)
* [/gd claim restore](#gd-claim-restore)
* [/gd claim schematic](#gd-claim-schematic)

#### ⚙️ Admin Modes & Toggles

* [/gd mode admin](#gd-mode-admin)
* [/gd mode nature](#gd-mode-nature)
* [/gd toggle ignore](#gd-toggle-ignore)

#### 🔐 Permissions

* [/gd permission group](#gd-permission-group)
* [/gd permission player](#gd-permission-player)

#### 💸 Economy Tools

* [/gd economy blocktransfer](#gd-economy-blocktransfer)

#### 🔧 Utility & Debug

* [/gd debug](#gd-debug)
* [/gd reload](#gd-reload)

#### 🚫 Ban Management

* [/gd ban](#gd-ban)
* [/gd unban](#gd-unban)

### 📦 Misc

* [/gd help](#gd-help)
* [/gd version](#gd-version)


# Command Detail

### Claims
___

### `/gd abandon claim`

**Aliases**: `abandon`, `abandonclaim`  
**Arguments**: `[identifier]`  
**Permission**: `griefdefender.user.claim.command.abandon.base`

**Additional Permissions:**  
* `griefdefender.user.claim.command.abandon.basic` – Required to abandon a **basic** claim  
* `griefdefender.user.claim.command.abandon.subdivision` – Required to abandon a **subdivision**  
* `griefdefender.user.claim.command.abandon.town` – Required to abandon a **town**  

**Description**:  
Abandons the claim the player is currently standing in or the one specified by a [claim identifier](/wiki/basic/Claim-Management.html#claim-identifiers).

**Notes**:  
* This command is for **user claims only**. To delete an **admin claim**, use [`/gd delete claim`](#gd-delete-claim).  
* Only works on claims with **no child claims**. To abandon a claim with children, use [`/gd abandon top`](#gd-abandon-top).

___

### `/gd abandon all`

**Aliases**: `abandonall`, `abandonallclaims`  
**Permission**: `griefdefender.user.claim.command.abandon-all`

**Description**:  
Abandons **all** user claims owned by the player.

___

### `/gd abandon top`

**Aliases**: `abandontop`  
**Arguments**: `[identifier]`  
**Permission**: `griefdefender.user.claim.command.abandon-top-level`

**Description**:  
Abandons the top-level claim the player is currently standing in or the one specified by a [claim identifier](/wiki/basic/Claim-Management.html#claim-identifiers), including any child subdivisions.

**Notes**:  
* If used on a **town** claim, it will also abandon all **basic claims** owned by the town owner.

___

### `/gd buy blocks`

**Aliases**: `buyblocks`, `buyclaimblocks`  
**Arguments**: `<amount>`  
**Permission**: `griefdefender.user.claim.command.buy-blocks`  
**Requires**: Economy plugin  

**Description**:  
Purchases additional claim blocks using in-game currency.

**Notes**:  
* The `economy-block-cost` option must be greater than `0` in [`options.yml`](/wiki/basic/Options.html) for this command to function.

___

### `/gd buy claim`

**Aliases**: `claimbuy`  
**Permission**: `griefdefender.user.claim.command.buy`  
**Requires**: Economy plugin  

**Description**:  
Displays a list of claims that are available for sale. Players can purchase claims by clicking the `[Buy]` button.

___

### `/gd claim bank`

**Aliases**: `claimbank`  
**Arguments**: `<withdraw|deposit> <amount> <name> [identifier]`  
**Permission**: `griefdefender.user.claim.command.bank`  
**Requires**: Economy plugin with virtual bank support and `bank-system: true` in [`global.yml`](/wiki/advanced/Global-Config.html)

**Description**:  
Withdraws or deposits currency into the virtual bank account of a claim.

**Notes**:  
* Affects the claim the player is currently standing in, unless a [claim identifier](/wiki/basic/Claim-Management.html#claim-identifiers) is provided.

___

### `/gd claim contract`

**Aliases**: `claimcontract`, `contractclaim`  
**Arguments**: `<amount> [direction] [identifier]`  
**Permission**: `griefdefender.user.claim.command.contract`

**Description**:  
Contracts (shrinks) the current claim or the one specified, from the direction the player is facing or the one provided.

**Notes**:  
* Supports use of [claim identifiers](/wiki/basic/Claim-Management.html#claim-identifiers).
___

### `/gd claim create`

**Aliases**: `claimcreate`  
**Arguments**: `<radius>|chunk [type]`  
**Permission**: `griefdefender.user.claim.create.base`

**Additional Permissions:**  
* `griefdefender.user.claim.create.basic` – Required to create a **basic** claim.  
* `griefdefender.user.claim.create.subdivision` – Required to create a **subdivision**.  
* `griefdefender.user.claim.create.town` – Required to create a **town**.  
* `griefdefender.admin.claim.command.admin-mode` – Required to create an **admin** claim.

**Description**:  
Creates a claim around the player based on the specified type. If no type or an invalid one is provided, a basic claim will be created by default.

**Notes**:  
* If `chunk` is used instead of a `<radius>`, the entire chunk the player is standing in will be claimed.


___

### `/gd claim debug`

**Aliases**: `cfdebug`  
**Permission**: `griefdefender.user.claim.command.flag.debug`

**Description**:  
Toggles **claim debug mode** for the player, allowing claim owners to simulate behavior as a **non-trusted user** to test protection settings.

___

### `/gd claim displayname`

**Aliases**: `claimdisplayname`  
**Arguments**: `<name>|clear`  
**Permission**: `griefdefender.user.claim.command.display-name`

**Description**:  
Sets or clears the display name of the claim you're standing in.

**Notes**:  
* Use `clear` to remove the current display name.  
* Display names are validated against reserved entries in [`global.yml`](/wiki/advanced/Global-Config.html). Only admins can set names that are reserved.

___

### `/gd claim expand`

**Aliases**: `claimexpand`, `expandclaim`  
**Arguments**: `<amount> [direction] [identifier]`  
**Permission**: `griefdefender.user.claim.command.expand`

**Description**:  
Expands the size of the current claim or the one specified by a [claim identifier](/wiki/basic/Claim-Management.html#claim-identifiers), in the direction you are facing or the one provided.

___

### `/gd claim farewell`

**Aliases**: `claimfarewell`  
**Arguments**: `<message>|clear|none [identifier]`  
**Permission**: `griefdefender.user.claim.command.farewell`

**Description**:  
Sets the **farewell message** for a claim when players exit.

**Notes**:  
* Applies to the claim you're standing in unless a [claim identifier](/wiki/basic/Claim-Management.html#claim-identifiers) is used.  
* Use `clear` to remove the farewell message.

___

### `/gd claim greeting`

**Aliases**: `claimgreeting`  
**Arguments**: `<message>|clear|none [identifier]`  
**Permission**: `griefdefender.user.claim.command.greeting`

**Description**:  
Sets the **greeting message** for a claim when players enter.

**Notes**:  
* Applies to the claim you're standing in unless a [claim identifier](/wiki/basic/Claim-Management.html#claim-identifiers) is used.  
* Use `clear` to remove the greeting message.

___

### `/gd claim id`

**Aliases**: `claimid`  
**Arguments**: `<identifier>`  
**Permission**: `griefdefender.user.claim.command.id`

**Description**:  
Assigns a **custom identifier** to the claim you're standing in.

**Notes**:  
* Reserved identifiers in [`global.yml`](/wiki/advanced/Global-Config.html) can only be assigned by admins.

___

### `/gd claim info`

**Aliases**: `claiminfo`  
**Arguments**: `[identifier]`  
**Permission**: `griefdefender.user.claim.command.info.base`

**Additional Permissions:**  
* `griefdefender.user.claim.command.info.others` – View info for claims not owned by you.  
* `griefdefender.user.claim.create.town` – Required to change claim type to town.  
* `griefdefender.user.claim.command.info.raid` – Toggle raid mode.  
* `griefdefender.user.claim.command.greeting` – Set greeting message.  
* `griefdefender.user.claim.command.farewell` – Set farewell message.  
* `griefdefender.user.claim.command.enter-title` – Set enter title.  
* `griefdefender.user.claim.command.exit-title` – Set exit title.  
* `griefdefender.user.chat.capture` – Toggle chat capture.  
* `griefdefender.user.claim.command.info.others.creation-date` – View creation date on others’ claims.  
* `griefdefender.user.claim.command.info.others.last-active` – View last active on others’ claims.  
* `griefdefender.user.claim.command.info.others.claim-uuid` – View UUID on others’ claims.

**Description**:  
Displays detailed information about the current claim or one specified by a [claim identifier](/wiki/basic/Claim-Management.html#claim-identifiers).

___

### `/gd claim inspect`

**Aliases**: `claiminspect`  
**Arguments**: `[area|hide|hideall]`  
**Permission**: `griefdefender.user.claim.command.inspect`

**Description**:  
Displays information about the block the player is looking at or reveals nearby claims.

___

### `/gd claim list`

**Aliases**: `claimlist`  
**Arguments**: `[<player> [world]]`  
**Permission**: `griefdefender.user.claim.command.list.base`

**Additional Permissions:**  
* `griefdefender.user.claim.command.list.others` – List claims owned by others.  
* `griefdefender.user.claim.create.town` – List towns owned by others.  
* `griefdefender.user.chat.capture` – Toggle chat capture.

**Description**:  
Lists all claims owned by the specified player or yourself.


___

### `/gd claim rent`

**Aliases**: `claimrent`  
**Arguments**: `[create <rate> [max_days] | list | cancel]`  
**Permission**: `griefdefender.user.claim.command.rent`  
**Requires**: Economy plugin and `rent-system` enabled in [`global.yml`](/wiki/advanced/Global-Config.html)

**Description**:  
Used to list claims for rent, view available rentals, or cancel existing rentals.

**Notes**:  
* `create` – Lists the claim you're standing in for rent at the specified rate, with an optional maximum duration in days.  
* `list` – Displays a list of claims currently for rent.  
* `cancel` – Cancels the rental of the claim you're standing in.  
* Only applies to the built-in GD rent system. For a more robust rental experience, consider using the [RealEstate plugin](https://www.spigotmc.org/resources/realestate.44306/).

___

### `/gd claim setspawn`

**Aliases**: `claimsetspawn`  
**Permission**: `griefdefender.user.claim.command.set-spawn`

**Description**:  
Sets the spawn point of your current claim to your current location.

___

### `/gd claim spawn`

**Aliases**: `claimspawn`  
**Arguments**: `[identifier]`  
**Permission**: `griefdefender.user.claim.command.spawn`  
**Requires**: Economy plugin if `player-teleport-cost` is configured

**Description**:  
Teleports the player to the spawn point of the current claim, or a specified claim using [claim identifier](/wiki/basic/Claim-Management.html#claim-identifiers).

**Notes**:  
* To delay teleport, set `player-teleport-delay` in [`options.yml`](/wiki/basic/Options.html).  
* To charge for teleport, set `player-teleport-cost` in [`options.yml`](/wiki/basic/Options.html).

___

### `/gd claim tax`

**Arguments**: `balance | force | reset | resetall | pay <amount>`  
**Permission**: `griefdefender.user.claim.command.claim.tax`  
**Requires**: Economy plugin and `tax-system` enabled in [`global.yml`](/wiki/advanced/Global-Config.html)

**Description**:  
Manages taxes for a claim. See the [Tax System Guide](/wiki/basic/Tax-System.html) for configuration and usage details.

**Notes**:  
* `balance` – Shows the current tax balance.  
* `pay <amount>` – Pays the specified amount toward the claim's tax.  
* `force` – Allows an admin to pay another claim's tax.  
* `reset` – Resets tax on the current claim (requires `admin-mode` or ignore flag).  
* `resetall` – Resets tax on all claims (requires `admin-mode` or ignore flag).  
* It is recommended to thoroughly test before enabling in production.

___

### `/gd claim title`

**Aliases**: `claimtitle`  
**Arguments**: `enter|exit main|sub <message>|clear|none`  
**Permission**: `griefdefender.user.claim.command.enter-title`

**Description**:  
Sets a **title message** that appears when players enter or exit a claim.

**Notes**:  
* Use `clear` or `none` to remove the title.  
* `main` applies to the main claim; `sub` applies to subdivisions.

___

### `/gd claim transfer`

**Aliases**: `claimtransfer`, `transferclaim`  
**Arguments**: `<player> [identifier]`  
**Permission**: `griefdefender.user.claim.command.transfer`

**Description**:  
Transfers ownership of the claim you're standing in (or the one identified) to the specified player.

___

### `/gd claim we`

**Aliases**: `gdwe`, `gdworldedit`  
**Arguments**: `claim | clear | select [identifier]`  
**Permission**: `griefdefender.user.claim.command.worldedit.create`  
**Requires**: [WorldEdit](https://enginehub.org/worldedit)

**Description**:  
Integrates claim creation and selection with WorldEdit.

**Modes**:  
* `claim` – Creates a claim from current WorldEdit selection.  
* `clear` – Clears your WorldEdit selection.  
* `select` – Selects an existing claim as a WorldEdit region.

**Note**:  
WorldEdit must be installed on the server for this to work.

___

### `/gd claimgroup admin`

**Aliases**: `cga`, `claimgroupadmin`  
**Arguments**:  
* `join <group> [identifier]`  
* `unjoin [identifier]`  
* `create <group>`  
* `delete <group>`  
**Permission**: `griefdefender.admin.claim.command.group`

**Description**:  
Used to manage **admin claim groups**. See [Claim Groups](/wiki/basic/Claim-Management.html#claim-groups) for details on group behavior and use cases.


___

### `/gd confirm`

**Aliases**: `gdconfirm`  
**Permission**: `griefdefender.user.command.ymlirm`  

**Description**:  
Confirms pending chat-based confirmations. This is typically required for certain sensitive actions like abandoning large claims or transferring ownership.

___

### `/gd givepet`

**Aliases**: `givepet`  
**Arguments**: `<player>`  
**Permission**: `griefdefender.user.claim.command.give.pet`  

**Description**:  
Transfers a tamed pet (e.g., wolf) that you own to the specified player.

___

### `/gd mode basic`

**Aliases**: `bc`, `basicclaims`, `modeadmin`  
**Permission**: `griefdefender.user.claim.command.basic-mode`  

**Description**:  
Switches the modification tool into **basic claims mode**, allowing players to create and manage standard personal claims.

___

### `/gd mode subdivide`

**Aliases**: `sc`, `modesubdivide`, `subdivideclaims`  
**Permission**: `griefdefender.user.claim.command.subdivide-mode`  

**Description**:  
Switches the modification tool into **subdivision mode**, used to divide an existing claim into smaller areas with independent trust and permissions.

___

### `/gd mode town`

**Aliases**: `modetown`, `townclaims`  
**Permission**: `griefdefender.user.claim.command.town-mode`  

**Description**:  
Switches the modification tool into **town claims mode**, allowing creation and management of town-type claims that can contain child claims owned by other players.

___

### `/gd player info`

**Aliases**: `gdplayerinfo`, `playerinfo`  
**Arguments**: `[<player>] [<world>]`  
**Permission**: `griefdefender.user.command.info.base`  
**Additional Permissions**:  
* `griefdefender.user.command.info.others` – View data for players other than yourself.  
* `griefdefender.user.command.info.others.last-active` – View last active time of other players.  
* `griefdefender.user.claim.create.town` – View town information.  
* `griefdefender.user.chat.capture` – Toggle chat capture.

**Description**:  
Displays claim-related data for the specified player, including claim block balances, claim limits, and town stats.

___

### `/gd player transferblocks`

**Aliases**: `transferblocks`  
**Arguments**: `<player> <amount>`  
**Permission**: `griefdefender.user.claim.command.give.blocks`  

**Description**:  
Transfers a specified number of your **claim blocks** to another player.

**Note**:  
This action **cannot be undone**. Use caution when transferring claim blocks.

___

### `/gd player trapped`

**Aliases**: `trapped`  
**Permission**: `griefdefender.user.claim.command.trapped`  

**Description**:  
Teleports you to a safe nearby location if you're stuck in a claim and unable to build or move.

___

### `/gd player unlockdrops`

**Aliases**: `unlockdrops`  
**Permission**: `griefdefender.user.claim.command.unlock-drops`  

**Description**:  
Unlocks your **death drops**, allowing other players to pick them up.

___

### `/gd sell blocks`

**Aliases**: `sellblocks`, `sellclaim`, `sellclaimblocks`  
**Arguments**: `[amount]`  
**Permission**: `griefdefender.user.claim.command.sell-blocks`  
**Requires**: Economy plugin  

**Description**:  
Sells a specified number of your claim blocks in exchange for currency.

**Note**:  
* `economy-block-sell-return` in [`options.yml`](/wiki/basic/Options.html) must be set higher than `0`.

___

### `/gd sell claim`

**Aliases**: `claimsell`  
**Arguments**: `<price> | cancel`  
**Permission**: `griefdefender.user.claim.command.sell`  

**Description**:  
Puts your current claim up for sale at the specified price.

**Notes**:  
* Use `/claimsell cancel` to remove the claim from the sale list.


___

### `/gd toggle claim`

**Aliases**: `claim`, `toggleclaim`  
**Permission**: `griefdefender.user.claim.command.claim-mode.base`  

**Description**:  
Toggles claim creation mode without using a tool. Enables manual claim creation through mouse clicks.

**Notes**:  
* Defaults to **basic** claim mode.  
* **Left-click** – Visualize or hide nearby claims.  
* **Right-click** – Begin creating a new claim.

___

### `/gd toggle cuboid`

**Aliases**: `cuboid`, `togglecuboid`  
**Permission**: `griefdefender.user.claim.command.cuboid`  

**Description**:  
Toggles **cuboid (3D)** claim mode, allowing you to define claims with specific height rather than defaulting from bedrock to sky.

___

### `/gd toggle gui`

**Aliases**: `claimgui`  
**Permission**: `griefdefender.user.claim.command.gui`  

**Description**:  
Toggles between **Chat GUI** and **Inventory GUI** interfaces when using GriefDefender commands and menus.

___

### `/gd toggle inherit`

**Aliases**: `claiminherit`, `toggleclaiminherit`  
**Permission**: `griefdefender.user.claim.command.inherit`  

**Description**:  
Toggles whether a claim inherits **trust** and **flag settings** from its parent claim.

**Note**:  
* This has no effect on **child claims in towns**—inheritance is always enforced in those cases.

___

### `/gd toggle notifications`

**Aliases**: `claimnotifications`  
**Permission**: `griefdefender.user.claim.command.toggle.notifications`  

**Description**:  
Enables or disables **greeting** and **farewell** message notifications on trusted claims you enter or leave.

___

### `/gd toggle tool`

**Aliases**: `claimtool`  
**Permission**: `griefdefender.user.claim.command.claim-tool`  

**Description**:  
Toggles the use of the **claim tool**, typically a golden shovel or item defined by the server, used for visualizing and creating claims.

___


### Plots


___

### `/gd plot claim`

**Aliases**: `claimplot`  
**Arguments**: `[plot_identifier]`  
**Permission**: `griefdefender.user.claim.create.plot`  

**Description**:  
Allows a player to claim a nearby unclaimed plot, or a specific plot inside a plot container using the given `[plot_identifier]`.

___

### `/gd plot create`

**Aliases**: `claimcreateplot`  
**Arguments**: `<name> <child_radius> <quantity> <spacing> [X Z]`  
**Permission**: `griefdefender.admin.claim.create.plot`  

**Description**:  
Allows an admin to generate a plot container containing multiple child plots that can be claimed by players.

**Notes**:  
* `<child_radius>` defines the size of each plot.  
* `<quantity>` is the total number of plots to generate.  
* `<spacing>` sets the space between plots.  
* `[X Z]` (optional) specifies the center coordinates. If omitted, the player’s current location is used.

___

### `/gd plot merge`

**Aliases**: `claimplotmerge`  
**Arguments**: `[identifier]`  
**Permission**: `griefdefender.user.claim.plot.merge`  

**Description**:  
Allows a player to merge their plot with an adjacent plot in the direction they are facing.  
Useful for combining multiple owned plots into one larger claim.

___

### `/gd plot unmerge`

**Aliases**: `claimplotunmerge`  
**Arguments**: `[identifier]`  
**Permission**: `griefdefender.admin.claim.plot.unmerge`  

**Description**:  
Allows an admin to unmerge previously merged plots.  
The command must be executed while standing inside the merged plot or by specifying a claim identifier.

___


### Flags


___

### `/gd flag claim`

**Aliases**: `cf`, `claimflag`  
**Arguments**: `[<flag> <target> <value> [contexts]]`  
**Permission**: `griefdefender.user.claim.command.flag.base`  

**Additional Permissions:**  
* `griefdefender.user.claim.command.flag.gui` – Enables the flag GUI when no arguments are provided.  
* `griefdefender.advanced.admin.flag.<flag_name>` – Required to set specific advanced flags.  
* `griefdefender.user.claim.command.list-flags` – Allows listing of flags in the claim.  
* `griefdefender.user.definition.flag.<preset>.<group>.<definition>` – Grants access to user flag definitions in GUI.  
* `griefdefender.admin.definition.flag.<preset>.<group>.<definition>` – Grants access to admin flag definitions in GUI.  
* `griefdefender.user.chat.capture` – Enables chat capture feature in the GUI.  
* `griefdefender.advanced.admin.flags.base` – Required to view the `ADVANCED` tab in GUI.  
* `griefdefender.advanced.user.gui.flag.group.owner` – Enables access to the `OWNER` tab in GUI.  
* `griefdefender.advanced.user.gui.flag.group.accessor` – Enables access to the `ACCESSOR` tab.  
* `griefdefender.advanced.user.gui.flag.group.builder` – Enables access to the `BUILDER` tab.  
* `griefdefender.advanced.user.gui.flag.group.container` – Enables access to the `CONTAINER` tab.  
* `griefdefender.advanced.user.gui.flag.group.manager` – Enables access to the `MANAGER` tab.

**Description**:  
Gets or sets flag permissions in the claim the player is standing in. If no arguments are used, opens a GUI (if permitted).

___

### `/gd flag group`

**Aliases**: `cfg`  
**Arguments**: `<group> [<flag> <target> <value> [contexts]]`  
**Permission**: `griefdefender.admin.claim.command.flag.group`  

**Description**:  
Gets or sets flag permissions for a specified LuckPerms group in the current claim.

___

### `/gd flag player`

**Aliases**: `cfp`  
**Arguments**: `<player> <flag> <target> <value> [contexts]`  
**Permission**: `griefdefender.user.claim.command.flag.player`  

**Description**:  
Adds or modifies a flag permission for a specific player within the claim.

___

### `/gd flag reset`

**Aliases**: `cfr`  
**Arguments**: `[identifier]`  
**Permission**: `griefdefender.user.claim.command.flag.reset`  

**Description**:  
Resets all flags in the claim to their defaults by removing any LuckPerms permissions tied to the claim UUID.

___

### `/gd flagdefinition`

**Aliases**: `claimflagdefinition`, `flagdefinition`  
**Arguments**: `<preset:group:public|owner> <definition> <value> [identifier]`  
**Permission**: `griefdefender.user.claim.command.flag.definition`  

**Additional Permissions:**  
* `griefdefender.user.definition.flag.<preset>.<group>.<definition>` – Required to use the specified flag definition.

**Example**:  
To enable `tnt-block-explosion` for the `public` group in the `minecraft` preset:  

___

### Options

___

### `/gd option claim`

**Aliases**: `cod`, `claimoption`  
**Arguments**: `[<option> <value> [contexts]]`  
**Permission**: `griefdefender.admin.claim.command.option.base`  

**Additional Permissions:**  
* `griefdefender.user.claim.command.option.gui` – Enables the option GUI when no arguments are used.  
* `griefdefender.advanced.admin.options.arg` – Required to use command arguments.  
* `griefdefender.advanced.admin.option.<option_name>` – Required to set specific advanced options.  
* `griefdefender.user.claim.command.list-options` – Allows listing options currently applied to the claim.  
* `griefdefender.user.definition.option.<preset>.<group>.<definition>` – Grants access to user option definitions in GUI.  
* `griefdefender.admin.definition.option.<preset>.<group>.<definition>` – Grants access to admin option definitions in GUI.

**Description:**  
Gets or sets an option on the claim you are currently standing in. If no arguments are provided, opens the GUI (if permitted).

___

### `/gd option group`

**Aliases**: `cog`  
**Arguments**: `<group> [<option> <value> [contexts]]`  
**Permission**: `griefdefender.admin.claim.command.option.group`  

**Description:**  
Gets or sets claim-specific options for the specified LuckPerms group in the current claim.

___

### `/gd option player`

**Aliases**: `cop`  
**Arguments**: `<player> [<option> <value> [contexts]]`  
**Permission**: `griefdefender.admin.claim.command.option.player`  

**Description:**  
Gets or sets claim-specific options for a specified player in the current claim.

___



### Trusts
Note: `public` is for all users.

___

### `/gd trust player`

**Aliases**: `trust`  
**Arguments**: `<player>|public <accessor|builder|container|manager|resident>`  

**Trust Types:**  
* **Accessor** – Grants entry to your claim(s) and use of beds.  
* **Container** – Grants access to containers, crops, animals, buttons, levers, and beds.  
* **Builder** – Grants full build/edit permissions.  
* **Manager** – Grants access to all of the above, plus claim settings.  
* **Resident** – Grants ability to create claims within yours (for towns), includes accessor permissions.

**Description:**  
Grants a player access to your current claim based on the selected trust type.

___

### `/gd trust group`

**Aliases**: `trustgroup`  
**Arguments**: `<group> [<accessor|builder|container|manager|resident>] [identifier]`  
**Permission**: `griefdefender.admin.claim.command.trust.group`  

**Description:**  
Grants a LuckPerms group access to the specified claim or the claim you are standing in.

___

### `/gd trustall player`

**Aliases**: `trustall`  
**Arguments**: `<player>|public <accessor|builder|container|manager|resident>`  
**Permission**: `griefdefender.user.claim.command.trustall.player`  

**Description:**  
Grants a player access to ***ALL*** your claims using the specified trust type.

___

### `/gd trustall group`

**Aliases**: `trustallgroup`  
**Arguments**: `<group>|public <accessor|builder|container|manager|resident>`  
**Permission**: `griefdefender.admin.claim.command.trustall.group`  

**Description:**  
Grants a LuckPerms group access to ***ALL*** your claims using the specified trust type.

___

### `/gd trustalladmin group`

**Aliases**: `trustallgroup`  
**Arguments**: `<group>|public <accessor|builder|container|manager|resident>`  
**Permission**: `griefdefender.admin.claim.command.trustalladmin.group`  

**Description:**  
Grants a LuckPerms group access to ***ALL*** admin claims using the specified trust type.

___

### `/gd trust list`

**Aliases**: `trustlist`  
**Arguments**: `[type] [identifier]`  
**Permission**: `griefdefender.user.claim.command.trust.list`  

**Description:**  
Displays or manages trust list for the current claim or specified claim identifier.

___

### `/gd untrust player`

**Aliases**: `untrust`  
**Arguments**: `<player>|public [<accessor|builder|container|manager|resident>] [identifier]`  
**Permission**: `griefdefender.user.claim.command.untrust.player`  

**Description:**  
Revokes a player's trust from the current claim or specified claim.

___

### `/gd untrust group`

**Aliases**: `untrustgroup`  
**Arguments**: `<group>|public [<accessor|builder|container|manager|resident>] [identifier]`  
**Permission**: `griefdefender.admin.claim.command.untrust.group`  

**Description:**  
Revokes a group's trust from the current claim or specified claim.

___

### `/gd untrustall player`

**Aliases**: `untrustall`  
**Arguments**: `<player>|public [<accessor|builder|container|manager|resident>]`  
**Permission**: `griefdefender.user.claim.command.untrustall.player`  

**Description:**  
Revokes a player's trust from ***ALL*** your claims.

___

### `/gd untrustall group`

**Aliases**: `untrustallgroup`  
**Arguments**: `<group>|public [<accessor|builder|container|manager|resident>]`  
**Permission**: `griefdefender.admin.claim.command.untrustall.group`  

**Description:**  
Revokes a group's trust from ***ALL*** your claims.

___



### Admin



___
### `/gd abandon allother`

**Aliases**: `abandonallother`  
**Arguments**: `<player> <world>`  
**Permission**: `griefdefender.admin.claim.command.abandon.all-other`  

**Description**:  
Allows an admin to abandon ***all*** claims owned by the specified player in the given world.

___
### `/gd abandon world`  

**Aliases**: `abandonworld`  
**Arguments**: `[world]`  
**Permission**: `griefdefender.admin.claim.command.abandon.world`  

**Description**:  
Abandons ***all*** user claims in the current world, or the specified world if provided.

___
### `/gd ban`  

**Aliases**: `claimban`  
**Arguments**: `hand | <type> <target> [world] [<message>]`  
**Permission**: `griefdefender.admin.claim.command.ban`  

**Description**:  
Bans the specified entity, item, or block (or item in hand) from being used.  
Valid types: `entity`, `item`, `block`  
**Example**:  
`/gd ban block minecraft:sticky_piston valhalla "You are not allowed to use sticky pistons in this world."`

___
### `/gd claim clear`

**Aliases**: `claimclear`  
**Arguments**: `<target> [identifier]`  
**Permission**: `griefdefender.admin.claim.command.clear`  

**Description**:  
Clears the specified entity type(s) within the current claim, or target claim if identifier is provided.  
**Example**:  
`/gd claim clear minecraft:pig`

___
### `/gd claim reserve`

**Aliases**: `claimreserve`  
**Arguments**: `[name]`  
**Permission**: `griefdefender.admin.claim.command.reserve-name`  

**Description**:  
Reserves a claim name for administrator use. Use no arguments to list reserved names.

___
### `/gd claim restore`

**Aliases**: `claimrestore, restoreclaim`  
**Permission**: `griefdefender.admin.command.restore-claim.base`  
**Requires**: WorldEdit  

**Description**:  
Restores a claim to its original natural state using world generation. Use with caution — custom worlds are not supported.

___
### `/gd claim schematic`

**Aliases**: `claimschematic`  
**Arguments**: `[<apply|create|delete> <name>]`  
**Permission**: `griefdefender.admin.claim.command.reserve-name`  

**Description**:  
Manages claim schematics. Use `/claimschematic create <name>` to save a live backup of the current claim.  
Use no arguments to open the schematic GUI.

___
### `/gd debug`

**Aliases**: `gddebug`  
**Arguments**: `on|off|record|paste [filter]`  
**Permission**: `griefdefender.admin.claim.command.debug`  

**Description**:  
Enables debugging mode to log claim-related actions. Use `/gddebug paste` to generate a link.  
**Example**:  
`/gddebug record claim` — records all actions in the current claim.  
See [Debugging](/wiki/advanced/Debugging.html) for more info.

___
### `/gd delete claim`

**Aliases**: `deleteclaim`    
**Arguments**: `[identifier]`  
**Permission**: `griefdefender.admin.claim.command.delete-claims`  

**Description**:  
Deletes the claim you're standing in or the one specified.  
**Note**: This will not refund blocks or currency. Use with caution.

___
### `/gd delete all`

**Aliases**: `deleteall`  
**Arguments**: `<player> [world]`  
**Permission**: `griefdefender.admin.claim.command.delete-claims`  

**Description**:  
Deletes all claims belonging to another player.  
**Note**: Refunds are not processed — use with caution.

___
### `/gd delete alladmin`

**Aliases**: `deletealladmin`  
**Arguments**: `[world]`  
**Permission**: `griefdefender.admin.claim.command.delete-claims`  

**Description**:  
Deletes all administrative claims in the current or specified world.

___
### `/gd delete top`

**Aliases**: `deletetop`  
**Permission**: `griefdefender.admin.claim.command.delete-claims`  

**Description**:  
Deletes the current top-level claim and all subdivisions, or specified claim by identifier.

___
### `/gd economy blocktransfer`

**Aliases**: `gdblocktransfer`  
**Permission**: `griefdefender.admin.claim.command.block-transfer`  

**Description**:  
Transfers all remaining player claim blocks (accrued + bonus) into currency and resets both to zero.  
**Note**: Required when migrating from block-based to economy-based system.

___
### `/gd mode admin`

**Aliases**: `ac, adminclaims, modeadmin`  
**Permission**: `griefdefender.admin.claim.command.admin-mode`  

**Description**:  
Enables admin claim mode for creating and managing administrative claims.

___
### `/gd mode nature`

**Aliases**: `modenature`  
**Permission**: `griefdefender.admin.command.restore-nature.base`  

**Description**:  
Switches the claim tool to nature restore mode.  
**Note**: Currently not available.

___
### `/gd player adjustbonusblocks`

**Aliases**: `adjustbonusblocks`  
**Arguments**: `<player> <amount> [world]`  
**Permission**: `griefdefender.admin.command.set-accrued-claim-blocks`  

**Description**:  
Adjusts a player's bonus claim block total by adding or subtracting the specified amount.

___
### `/gd player adjustbonusblocksall`

**Aliases**: `adjustbonusblocksall`  
**Arguments**: `<amount>`  
**Permission**: `griefdefender.admin.command.set-accrued-claim-blocks-all`  

**Description**:  
Adjusts bonus claim block total for ***all online players***.

___
### `/gd player setaccruedblocks`

**Aliases**: `scb, setaccruedblocks`  
**Arguments**: `<player> <amount> [world]`  
**Permission**: `griefdefender.admin.command.set-accrued-claim-blocks`  

**Description**:  
Sets a player's total accrued claim blocks to the specified value.

___
### `/gd permission group`

**Aliases**: `cpg`  
**Arguments**: `<group> [<permission> <value>]`  
**Permission**: `griefdefender.admin.claim.command.permission-group`  

**Description**:  
Sets a permission for a LuckPerms group with claim context.  
**Note**: The command executor must have the target permission themselves.

___
### `/gd permission player`

**Aliases**: `cpp`  
**Arguments**: `<player> [<permission> <value>]`  
**Permission**: `griefdefender.admin.claim.command.permission-player`  

**Description**:  
Sets a permission for a player with claim context.  
**Note**: The command executor must have the target permission themselves.

___
### `/gd reload`

**Aliases**: `gdreload`  
**Permission**: `griefdefender.admin.command.reload`  

**Description**:  
Reloads GriefDefender configuration files and settings.

___
### `/gd schematic`

**Aliases**: `claimschematic`  
**Arguments**: `<create|delete> <name>`  
**Permission**: `griefdefender.admin.claim.command.schematic`  

**Description**:  
Creates or deletes live backups of claims via schematics.

___
### `/gd toggle ignore`

**Aliases**: `claimignore, ic, ignoreclaims, toggleclaimignore`  
**Permission**: `griefdefender.admin.claim.command.ignore.base`  
**Additional Permissions**:  
* `griefdefender.admin.claim.command.ignore.admin`  
* `griefdefender.admin.claim.command.ignore.basic`  
* `griefdefender.admin.claim.command.ignore.town`  
* `griefdefender.admin.claim.command.ignore.wilderness`  

**Description**:  
Toggles ignore mode for various claim types. Useful for bypassing claim restrictions.

___
### `/gd unban`  

**Aliases**: `claimunban`  
**Arguments**: `hand | <type> <target>`  
**Permission**: `griefdefender.admin.claim.command.ban`  

**Description**:  
Removes a ban on an entity, item, or block — or item currently held.  
**Example**:  
`/gd unban block minecraft:sticky_piston`
___

### Advanced


___
### `/gd claimgroup player`

**Aliases**: `claimgroup`  
**Arguments**:  
- `join <group> [<identifier>]`  
- `unjoin [<identifier>]`  
- `create <group>`  
- `delete <group>`  

**Permission**: `griefdefender.advanced.user.claim.command.player`  

**Description**:  
Manages player claim groups, allowing users to create, join, leave, or delete groups for collaborative claim management.  
See [Claim Groups](/wiki/basic/Claim-Management.html#claim-groups) for more information.

___
### `/gd snapshot`

**Aliases**: `claimsnapshot`  
**Arguments**: `<apply|create|delete> <name> [contexts]`  
**Permission**: `griefdefender.advanced.user.claim.command.snapshot`  

**Description**:  
Manages claim snapshots to back up, restore, or replace permission, option, trust, and claim settings.  
See [Claim Snapshots](/wiki/basic/Claim-Management.html#claim-snapshots) for more information.

___

### Misc


___
### `/gd`

**Description**:  
Displays a general overview of available GriefDefender commands, organized by category. Useful for discovering what commands are accessible based on your permissions.

___
### `/gd help`

**Permission**: `griefdefender.user.command.help`  

**Description**:  
Displays detailed usage instructions for GriefDefender commands. Use this to learn how to structure commands and see available arguments.

___
### `/gd version`

**Aliases**: `gdversion`  
**Permission**: `griefdefender.user.command.version`  

**Description**:  
Displays the currently installed versions of GriefDefender, LuckPerms (if present), and the server platform (e.g., Paper, Sponge).
