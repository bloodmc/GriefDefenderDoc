---
title: 选项
category: 
tags: Meta
icon: set
---
:::: details 名词辨析
Options - 选项
Meta - 元数据
Global - 全局
set - 集
permission - 权限
group - 权限组
::::

Options, also known as Meta, are a way to configure plugins using player/group contexts through your permission system, this gives you the benefit of being able to set different settings for different players, groups, worlds etc.  

Default values can be changed in `options.conf`, for finer control continue reading below.

## Built-in Commands

Options support the same format as flags  

Claim - `/claimoption <option> <value> [contexts]`  
Player - `/cop <player> <option> <value> [contexts]`  
Group - `/cog <group> <option> <value> [contexts]`  

### Contexts

All options may use one or more contexts when applied as meta in LuckPerms.   
See https://github.com/bloodmc/GriefDefender/wiki/Contexts on what contexts you can use and how they work.   

### Examples  

* Send a welcome message to players entering a claim as console.  
`/claimoption player-command-enter "/tellraw %player% [\"\",{\"text\":\"Welcome %player%!\",\"color\":\"gold\"},{\"text\":\"\\nYou are visiting %owner%s claim.\\nEnjoy your stay!\\n\\n-\"}]" context[run_for=member, run_as=console]`  
* Set group vip's `create-limit` to 100 default for basic claims.  
`/cog vip create-limit 100 context[default=basic]`  
* Set player JoeSmith's `expiration` to 30 days default for basic claims.  
`/cop JoeSmith expiration 30 context[default=basic]`  


Using `/claimoption` with no arguments opens up the GUI and displays all claim options for claim you are standing in including default options that affect all claims.  

## LuckPerms

`/lp user/group <user|group> meta set <option> <value> [contexts]`

Ex1. Set create basic claim limit of 50 for a group called `vip`  
`/lp group vip meta set griefdefender.create-limit 50 gd_claim_default=basic server=global`

Ex1. Set create basic claim limit of 50 for a group called `vip` on server mc01  
`/lp group vip meta set griefdefender.create-limit 50 gd_claim_default=basic server=mc01`

Reset all users accrued claimblocks  
`/lp bulkupdate users delete "permission ~~ meta.griefdefender\\.accrued-blocks.%"`

Reset all users bonus claimblocks  
`/lp bulkupdate users delete "permission ~~ meta.griefdefender\\.bonus-blocks.%"`  

See https://luckperms.net/wiki/Prefixes,-Suffixes-&-Meta and https://luckperms.net/wiki/Meta-Commands for more information on how to use it directly in LuckPerms

## Global Options

Global Options can be set globally, or on a server, world, group or player.  
They cannot be set on individual claims or claim types.  

Permissions for using Global Options are `griefdefender.admin.claim.option.global.<optionname>`

Option                                           | Default Value | Description | 
-------------------------------------------------|---------------|--------------|
```griefdefender.abandon-return-ratio```       |   1.0         | The portion of claim blocks returned to a player when a claim is abandoned. Note: When using Economy Mode, this is the ratio of funds returned when abandoning a claim.
```griefdefender.accrued-blocks```       |   0        | The total number of claim blocks accrued by a player. <br />Note: This does not account for bonus blocks, and has no use/effect being set on a group.
```griefdefender.blocks-accrued-per-hour```    |   120         | Blocks earned per hour. By default, each 'active' player should receive 6 blocks every 5 min.  Note: The player must have moved at least 3 blocks since last delivery. If using 'wilderness-cuboids', this value is 30720 by default with 1536 blocks every 5 min to players. Minimum setting is 12 due to 5 minute check interval, setting it lower will result in no blocks accruing.
```griefdefender.bonus-blocks```       |   0        | The total number of bonus claim blocks given to a player, and has no use/effect being set on a group.
```griefdefender.chest-expiration```     |   7           | Number of days of inactivity before an automatic chest claim will be deleted.
```griefdefender.economy-block-cost``` | 0.0 | The economy amount to charge per block of a claim. <br />Note: If set to 0 or less, the buy block feature will be disabled.
```griefdefender.economy-block-sell-return``` | 0.0 | The return ratio for selling claim blocks. <br />Note: If set to 0 or less, the sell block feature will be disabled.
```griefdefender.expiration```    |   14          | Number of days of inactivity before a claim will be deleted.<br />Note: If set to 0, it will disable claim expiration for user/group.
```griefdefender.initial-blocks```       |   120         | The number of bonus starter claim blocks a player has initially. <br />Note: This number is not counted as part of accrued blocks. <br />Note: If using 'wilderness-cuboids', this value is 25600 by default.
```griefdefender.max-accrued-blocks```   |   80000       | The limit on accrued blocks (over time). doesn't limit purchased or admin-gifted blocks. <br />Note: If using 'wilderness-cuboids', this value is 20480000 by default. <br />Note: This setting will affect `/scb` command.
```griefdefender.max-bonus-blocks```   |   -1      | The maximum amount of bonus blocks a player can obtain. <br />Note: Set to -1 or less to make unlimited. <br />Note: This setting will affect commands `/acb` and `/buyclaimblocks`, use with caution.
```griefdefender.radius-inspect``` | 100 | The radius in blocks used to search for nearby claims while inspecting.

## Claim Options

Claim Options can be set on individual claims, claim types, server, world, group or player.  

Permissions for using Claim Options are `griefdefender.user.claim.option.<optionname>`

Option                                           | Default Value | Description | 
-------------------------------------------------|---------------|--------------|
```griefdefender.abandon-delay```  | 0 | The number of days to delay before allowing a player to abandon a newly created claim.
```griefdefender.create-mode```    | area | The default claiming mode set for players on login. (area = 2D, volume = 3D)
```griefdefender.create-limit```         |   -1           | Maximum number of claims per player. (-1 = unlimited)
```griefdefender.min-level```<br>```griefdefender.max-level```    |   0/255          | The minimum/maximum level that a claim can be created in.
```griefdefender.min-size-x```<br>```griefdefender.max-size-x```    |   10/5000          | The min/max size in blocks that the x-axis can be.
```griefdefender.min-size-y```<br>```griefdefender.max-size-y```    |   5/256          | The min/max size in blocks that the y-axis can be.
```griefdefender.min-size-z```<br>```griefdefender.max-size-z```    |   10/5000          | The min/max size in blocks that the z-axis can be.
```griefdefender.player-command-enter``` | undefined | Used for executing a command on claim enter with specific contexts. Accepts the following placeholders : %player%, %owner%, %uuid%, %world%, %server%, %location%
```griefdefender.player-command-exit``` | undefined | Used for executing a command on claim exit with specific contexts. Accepts the following placeholders : %player%, %owner%, %uuid%, %world%, %server%, %location%
```griefdefender.player-deny-flight``` | false | Used to determine if a player is unable to fly in a claim.  Note: This does not give players the ability to fly, it merely removes the ability if set. This provides the greatest compatibility with plugins.
```griefdefender.player-weather``` | undefined | Used to a set player's weather in a claim. Supported types are clear and rain.
```griefdefender.pvp``` | undefined | Used to determine if players can combat each other.
```griefdefender.pvp-combat-command``` | false | Used to determine if a player can use commands during PvP combat.
```griefdefender.pvp-combat-teleport``` | false | Used to determine if a player can teleport during PvP combat.
```griefdefender.pvp-combat-timeout``` | 15 | Used to determine how many seconds PvP combat is considered to continue after the most recent damage.
```griefdefender.rent-restore``` | false | Used to determine if a rent owner has permission to have their claim automatically restored on rent end date.<br />Note: This requires the claim rental to have an end date.
```griefdefender.tax-expiration``` | 7		| Number of days after not paying taxes before a claim will be frozen.
```griefdefender.tax-expiration-days-keep``` | 7 		| Number of days to keep a claim after frozen and before being deleted 
```griefdefender.tax-rate``` | 1.0 | Tax is calculated by the number of claimblocks in the claim. ```Number of claimblocks * tax-rate```

## Admin Options

Admin Options can be set on individual claims, claim types, server, world, group or player.  

Permissions for using Admin Options are `griefdefender.admin.claim.option.admin.<optionname>`

Option                                           | Default Value | Description | 
-------------------------------------------------|---------------|--------------|
```griefdefender.player-deny-godmode``` | false | Used to determine if a player can be in godmode within a claim.  Note: This does not give players the ability to be in godmode, it merely removes the ability if set. This provides the greatest compatibility with plugins.
```griefdefender.player-deny-hunger``` | false | Used to if a player's hunger is denied in a claim.
```griefdefender.player-gamemode``` | undefined | Used to determine the gamemode of a player in a claim. Accepts the following values : ADVENTURE, CREATIVE, SURVIVAL, SPECTATOR, UNDEFINED.
```griefdefender.player-health-regen``` | 0.0 | Used to set the health regen amount for a player in a claim.  Note: If the player is at max health, this will have no effect.
```griefdefender.player-keep-inventory``` | undefined | Used to determine if a player can keep inventory after death in a claim.
```griefdefender.player-keep-level``` | undefined | Used to determine if a player can keep their level after death in a claim.
```griefdefender.player-teleport-delay``` | undefined | Used to determine the delay before teleporting a player to a new location.
```griefdefender.player-walk-speed``` | -1.0 | Used to set a player's walk speed in a claim.  Note: (-1 = undefined)
```griefdefender.spawn-limit``` | 0 | The limit of entity spawns a claim can have.

## Option Config  
On server startup, GD will generate a file named `options.conf` which will have various settings to manage options.  

### Default Options  
The default options section `default-options` controls the default transient meta values that GD will set in LP at server startup.  
There are 4 subsections within this section.  

| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| default-user-options | The default user options for all players. <br />Note: Setting default claim type options will override this. | [ ] |
| default-user-basic-options | The default options applied to users for basic claims. <br />Note: These options override default global options. | [ ] |
| default-user-subdivision-options | The default options applied to users for subdivisions. <br />Note: These options override default global options. | [ ] |
| default-user-town-options | The default options applied to users for towns. <br />Note: These options override default global options. | [ ] |

### Option Control  
The option control section lets you enable/disable option functionality. By default, all player/pvp and spawn options are disabled. To enable this functionality, you will need to set the corresponding option to true.  

Here are the delivered options that can be controlled  
```
option-control {
    player-command-enter=false
    player-command-exit=false
    player-deny-flight=false
    player-deny-godmode=false
    player-deny-hunger=false
    player-fly-speed=false
    player-gamemode=false
    player-health-regen=false
    player-keep-inventory=false
    player-keep-level=false
    player-teleport-delay=false
    player-walk-speed=false
    player-weather=false
    pvp=false
    pvp-combat-command=false
    pvp-combat-teleport=false
    pvp-combat-timeout=false
    spawn-limit=false
}
```

### Vanilla fallback values  
This section is currently only used for player fly and walk default speeds. If your server uses a different default value, you can adjust it here.  

The delivered defaults are  
```
vanilla-fallback-values {
    player-fly-speed="0.1"
    player-walk-speed="0.2"
}
```