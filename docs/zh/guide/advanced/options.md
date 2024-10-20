---
title: 选项
tag: options
category: 领地
icon: Options
---

选项，也被称为 元数据(Meta), 是一种通过你的权限系统来配置插件的方法，这使你能够为不同的玩家、权限组、世界等设置不同的设置。  

:warning: 我们推荐学习 LP Meta 的运作方式，这将有助于更好地使用。阅览 [LuckPerms - Prefixes, Suffixes & Meta](https://luckperms.net/wiki/Prefixes,-Suffixes-&-Meta#meta)

简言之，选项将极大提升客制化体验，它不局限于 是(true) 和 否(false)，可以是数字，也可以是字符，常被用于设置领地过期时间，税率，玩家持有领地上限等功能。

## Configuration  
选项的默认值都存储在 `options.yml`  
请查看 [*选项配置*](未实现)  

## 指令

选项支持类似于标签的指令

对领地设置 - `/claimoption <选项> <值> [情境]`  
对玩家设置 - `/cop <玩家> <选项> <值> [情境]`  
对组设置 - `/cog <权限组> <选项> <值> [情境]`  

#### 情境

所有选项适用于多个情境。   
查看 [情境](/guide/advanced/Contexts.html) 知晓更多。 

#### 示例

* 当玩家进入领地发送消息  
`/claimoption player-command-enter "/tellraw %player% [\"\",{\"text\":\"Welcome %player%!\",\"color\":\"gold\"},{\"text\":\"\\nYou are visiting %owner%s claim.\\nEnjoy your stay!\\n\\n-\"}]" run_for=member run_as=console`  
* 设置权限组 vip 的 `create-limit` (领地创建限制) 至 100，其中领地类型为基础领地。
`/cog vip create-limit 100 default=basic`  
* 设置玩家 JoeSmith's 的 `expiration` 为 30 天。  
`/cop JoeSmith expiration 30 default=basic`  
* 在该领地内禁用饱食度。
`/claimoption player-deny-hunger true`  

Note: If you get a message stating the option is not enabled, enable it under `option-control` in `options.yml`.
Note: Using `/claimoption` with no arguments opens up the GUI and displays all claim options for claim you are standing in including default options that affect all claims.  

## LuckPerms

`/lp user/group <user|group> meta set <选项> <值> [情境]`

Ex1. Set create basic claim limit of 50 for a group called `vip`  
`/lp group vip meta set griefdefender.create-limit 50 gd_claim_default=basic server=global`

Ex1. Set create basic claim limit of 50 for a group called `vip` on server mc01  
`/lp group vip meta set griefdefender.create-limit 50 gd_claim_default=basic server=mc01`

Reset all users accrued claimblocks  
`/lp bulkupdate users delete "permission ~~ meta.griefdefender\\.accrued-blocks.%"`

Reset all users bonus claimblocks  
`/lp bulkupdate users delete "permission ~~ meta.griefdefender\\.bonus-blocks.%"`  

### Useful LP DB queries  
Note: Change table prefix if not using default `luckperms`


List all user accrued blocks
```sql
SELECT B.username, REGEXP_REPLACE(A.permission, '[^0-9]+', '') FROM luckperms_user_permissions A LEFT JOIN luckperms_players B ON A.uuid=B.uuid WHERE permission LIKE '%accrued-blocks%'
```


List all user bonus blocks
```sql
SELECT B.username, REGEXP_REPLACE(A.permission, '[^0-9]+', '') FROM luckperms_user_permissions A LEFT JOIN luckperms_players B ON A.uuid=B.uuid WHERE permission LIKE '%bonus-blocks%'
```


Reset ALL user accrued blocks  
:warning:  This will wipe ALL user accrued block data. Use with caution.

```sql
DELETE FROM luckperms_user_permissions WHERE permission LIKE '%griefdefender\\\\.accrued-blocks%';
```


Reset ALL user bonus blocks  
:warning:  This will wipe ALL user bonus block data. Use with caution.

```sql
DELETE FROM luckperms_user_permissions WHERE permission LIKE '%griefdefender\\\\.bonus-blocks%';
```


See [Prefixes, Suffixes & Meta](https://luckperms.net/wiki/Prefixes,-Suffixes-&-Meta) and [Meta Commands](https://luckperms.net/wiki/Meta-Commands) for more information on how to use it directly in LuckPerms

## Global Options

Global Options can be set globally, or on a server, world, group or player.  
They cannot be set on individual claims or claim types.  

Global option usage in GD commands and GUI can be managed with permission `griefdefender.admin.claim.option.global.<optionname>`.  
Note: Leave out `griefdefender.` from `<optionname>`.

To use GD options in LP commands, use the meta key format `griefdefender.<optionname>`  

Option                                           | Default Value | Description | 
-------------------------------------------------|---------------|--------------|
```griefdefender.abandon-return-ratio```       |   1.0         | The portion of claim blocks returned to a player when a claim is abandoned. Note: When using Economy Mode, this is the ratio of funds returned when abandoning a claim.
```griefdefender.accrued-blocks```       |   0        | The total number of claim blocks accrued by a player. <br />Note: This does not account for bonus blocks, and has no use/effect being set on a group.
```griefdefender.blocks-accrued-per-hour```    |   120         | Blocks earned per hour. By default, each 'active' player should receive 6 blocks every 5 min.  Note: The player must have moved at least 3 blocks since last delivery. If using 'wilderness-cuboids', this value is 30720 by default with 1536 blocks every 5 min to players. Minimum setting is 12 due to 5 minute check interval, setting it lower will result in no blocks accruing.
```griefdefender.bonus-blocks```       |   0        | The total number of bonus claim blocks given to a player, and has no use/effect being set on a group.
```griefdefender.chest-expiration```     |   7           | Number of days of inactivity before an automatic chest claim will be deleted.
```griefdefender.economy-block-cost``` | 0.0 | The economy amount to charge per block of a claim. <br />Note: If set to 0 or less, the buy block feature will be disabled.
```griefdefender.economy-block-sell-return``` | 0.0 | The return value for selling claim blocks. <br />Note: If set to 0 or less, the sell block feature will be disabled.
```griefdefender.expiration```    |   14          | Number of days of inactivity before a claim will be deleted.<br />Note: If set to 0, it will disable claim expiration for user/group.
```griefdefender.initial-blocks```       |   120         | The number of bonus starter claim blocks a player has initially. <br />Note: This number is not counted as part of accrued blocks. <br />Note: If using 'wilderness-cuboids', this value is 25600 by default.
```griefdefender.max-accrued-blocks```   |   80000       | The limit on accrued blocks (over time). doesn't limit purchased or admin-gifted blocks. <br />Note: If using 'wilderness-cuboids', this value is 20480000 by default. <br />Note: This setting will affect `/scb` command.
```griefdefender.max-bonus-blocks```   |   -1      | The maximum amount of bonus blocks a player can obtain. <br />Note: Set to -1 or less to make unlimited. <br />Note: This setting will affect commands `/acb` and `/buyclaimblocks`, use with caution.
```griefdefender.radius-inspect``` | 100 | The radius in blocks used to search for nearby claims while inspecting.

## Claim Options

Claim Options can be set on individual claims, claim types, server, world, group or player.  

Global option usage in GD commands and GUI can be managed with permission `griefdefender.admin.claim.option.<optionname>`.  
Note: Leave out `griefdefender.` from `<optionname>`.

To use GD options in LP commands, use the meta key format `griefdefender.<optionname>`  

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
```griefdefender.tax-rate``` | 0.1 | Tax is calculated by the number of claimblocks in the claim. ```Number of claimblocks * tax-rate```

## Admin Options

Admin Options can be set on individual claims, claim types, server, world, group or player.  

Global option usage in GD commands and GUI can be managed with permission `griefdefender.admin.claim.option.admin.<optionname>`.   
Note: Leave out `griefdefender.` from `<optionname>`.

To use GD options in LP commands, use the meta key format `griefdefender.<optionname>`  

Option                                           | Default Value | Description | 
-------------------------------------------------|---------------|--------------|
```griefdefender.player-deny-godmode``` | false | Used to determine if a player can be in godmode within a claim.  Note: This does not give players the ability to be in godmode, it merely removes the ability if set. This provides the greatest compatibility with plugins.
```griefdefender.player-deny-hunger``` | false | Used to if a player's hunger is denied in a claim.
```griefdefender.player-gamemode``` | undefined | Used to determine the gamemode of a player in a claim. Accepts the following values : ADVENTURE, CREATIVE, SURVIVAL, SPECTATOR, UNDEFINED.
```griefdefender.player-health-regen``` | 0.0 | Used to set the health regen amount for a player in a claim.  Note: If the player is at max health, this will have no effect.
```griefdefender.player-item-drop-lock``` | false | Used to determine if a player's dropped items should be locked from pickup by others on death.
```griefdefender.player-keep-inventory``` | undefined | Used to determine if a player can keep inventory after death in a claim.
```griefdefender.player-keep-level``` | undefined | Used to determine if a player can keep their level after death in a claim.
```griefdefender.player-teleport-cost``` | undefined | Used to determine the cost to teleport a player to a new location.
```griefdefender.player-teleport-delay``` | 0.0 | Used to determine the delay, in seconds, before teleporting a player to a new location.
```griefdefender.player-walk-speed``` | -1.0 | Used to set a player's walk speed in a claim.  Note: (-1 = undefined)
```griefdefender.spawn-limit``` | 0 | The limit of entity spawns a claim can have.
