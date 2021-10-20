---
title: 预制标签
tags: 设置
category: 标签
icon: activity
---

## 概览

预制标签系统为用户及管理员提供了简便管理领地标签的可能。
GriefDefender 默认提供了一些较为通用的预制标签，默认提供的标签数据只适用于纯净且可以于以下文件找到
### Sponge
`./config/GriefDefender/presets/minecraft.conf`
### Bukkit
`./plugins/GriefDefender/presets/minecraft.conf`

:::: details 名词详解
flag definitions - 预制标签
flag - 基础标签
permission - 规则
PUBLC - 公众
OWNER - 受信者
::::

## 管理标签

管理员能根据需要对预制标签进行**增删改**，以便最大程度的客制化用户的标签使用体验。

如果要向默认提供的 minecraft 预制标签组添加新标签，请打开 `./presets/minecraft.conf` 文件。
在本节，您将看到两个预制标签页 'admin' 和 'user'。  

### 添加新的预制标签

我们假设您要往 'admin' 标签页添加新标签。
1. 克隆一个预制标签，我们以 `ambient-spawn` 作为样例。

```
ambient-spawn {
    contexts=[
        "gd_claim_default=user"
    ]
    default-value=true
    enabled=true
    permissions=[
        "flag=entity-spawn, target=#ambient"
    ]
}
```

让我们一步步拆分其组成

#### 名称  

`ambient-spawn` - 这是定义的名称，当用户在标签 GUI中打开它时，该名称将显示给用户。它可以是你喜欢的任何东西。

#### 情境  

```
contexts=[
        "gd_claim_default=user"
    ]
```
这是预制标签中所包含权限 `permissions=[...]` 的作用情境。
其目前只接受以下值 `gd_claim_default`, `gd_claim_override`，或 `gd_claim`。
预知更多，详见 https://github.com/bloodmc/GriefDefender/wiki/Contexts 来进一步了解情境的作用。

#### 默认值  

`default-value=true` - 这是 GD 在启动期间应用预制标签时使用的默认值。
GD 仅在启动期间将此值作为临时权限应用，前提是情境包括 `gd_claim_default` 或 `gd_claim_override`。
如果定义不包含这些情境之一，则忽略默认值。

#### 启用与否  

`enabled=true` - 该选项决定了 GD 是否使用该预制标签，如果设为 `false`，该预制标签将被忽略。


#### 规则

```
permissions=[
    "flag=entity-spawn, target=#ambient",
    "flag=xxx"
]
```
这里定义了该预制标签中包含的基础标签。一个预制标签可以拥有一个乃至多个基础标签。如果要将多条基础标签整合进预制标签，那么应在每行末尾插入一个 `,` 再添加新行。
在每行中需要定义 `flag=<基础标签>` 及其紧接着的目标和来源。  
因为 GD 会自动应用到所有检测目标，如果您想要一条规则应用到全部可能的目标，则不填 `target` 。
因为 GD 会自动检测所有来源，如果您想要一条规则应用到全部可能的来源，则不填 `source`。

一些常用的规则情境
```
source  行为来源
target  作用目标
used_item  使用物品
item_name  物品名称
server  所处服务器
state  状态
world  世界
```

提供的情境必须是有效且适用于标签。要在游戏中找到合适的值，请执行以下操作

1. 运行命令 `/gddebug record claim` - 这将在您所在的领地中启动调试会话。
2. 做您想通过领地标签来限制的事
3. 运行命令 `/gddebug paste` - 这将显示一个 web链接 以查看调试结果。
4. 打开链接，您将看到 GD 为领地检查的操作列表。您会在 `source` `target` 列看到您所需要的值。

要知晓 `used_item` 或任何其他情境，找到情境列，您将会在特定行看到该操作所支持的情境。

另一个找到您想获取的情境的方法是查阅相关资料。


### Minecraft 预制标签预设  

有关如何使用标志配置的更多信息，请参见下文

<details>
  <summary>Minecraft 预设</summary>

```
# A collection of flag definitions designed for vanilla minecraft.
# Each group defined will be displayed in the flag GUI for users.
# Groups can have the following settings : 
# enabled=<true|false>: Whether the group is enabled.
# admin-group=<true|false>: Whether this group is considered for admin use only.
# Note: GUI toggles in PRESETS will always apply to current claim only.
# Note: If you assign users the permission 'griefdefender.admin.advanced-flags', they will be able to access admin presets within the claim tab.
#      It is recommended not to assign this permission to users for best experience.
# value=<true|false>: This is used to set a default value for the flag definition. It is only used in conjunction with 'override=<type>, default=<type> settings.
# contexts=["key=value"]: A list of definition contexts that will be applied to all permissions.
# Note: This is primary used with 'default' and 'override' contexts. Ex. contexts=["default=global"]
# Note: You must specify one of the following contexts :'gd_claim_default=<type>' or 'gd_claim_override=<type>''
# Note: Context values support wildcards '?' and '*' by using Apache's wildcard matcher.
# The wildcard '?' represents a single character.
# The wildcard '*' represents zero or more characters.
# Each group will have an associated permission in order to be viewable.
# The user groups will use the permission : 'griefdefender.user.custom.flag.<preset>.<group>
# The admin groups will use the permission : 'griefdefender.admin.custom.flag.<preset>.<group>
# Within each group, you can define flag definitions.
# Each flag definition must be defined in the following format:
# enabled: Controls whether the definition is enabled. Accepts a value of 'true' or 'false'
# default-value: The default value to assign flag definition.
# description: The flag description to display on hover. Uses the legacy text format.
# permissions: The list of permissions to link to definition. Permissions can accept various contexts such as :
# flag=<linked-flag>: This context is used to link the permission to a GD specific flag. Ex. 'flag=block-break' would link permission to GD's block-break flag
# source=<id>: This context is used to specify a source id such as 'minecraft:creeper'.
# target=<id>: This context is used to specify a target id such as 'minecraft:chest'.
# state=<properties>: This context is used to specify a blockstate property such as 'state=lit:true'.
# Note: All flag definitions that contain a definition context of 'gd_claim_default' or 'gd_claim_override' will be applied to permissions during server startup.
# Note: Required if no source or target context is specified, the permission will default to ALL.
# Note: Commonly used contexts are : flag, source, target, state, used_item, item_name, world, server
# These contexts may change, See https://github.com/bloodmc/GriefDefender/wiki/Contexts for latest information.

minecraft {
    groups {
        admin {
            # Set to true if this flag group is for admin use only.
            # Note: If admin group, the permission is 'griefdefender.admin.custom.flag.<groupname>
            # Note: If user group (admin set false), the permission is 'griefdefender.user.custom.flag.<groupname>
            admin-group=true
            definitions {
                ambient-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-spawn, target=#ambient"
                    ]
                }
                animal-block-modify {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-modify, source=#animal"
                    ]
                }
                animal-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-spawn, target=#animal"
                    ]
                }
                aquatic-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-spawn, target=#aquatic"
                    ]
                }
                armorstand-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=interact-item-secondary, target=minecraft:armor_stand, source=minecraft:player",
                        "flag=entity-damage, target=minecraft:armor_stand, source=minecraft:player",
                        "flag=interact-entity-secondary, target=minecraft:armor_stand, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:armor_stand, source=minecraft:player"
                    ]
                }
                block-trampling {
                    contexts=[
                        "gd_claim_override=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=collide-block, target=minecraft:turtle_egg, target=minecraft:farmland"
                    ]
                }
                chorus-fruit-teleport {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=item-use, target=minecraft:chorus_fruit, source=minecraft:player"
                    ]
                }
                commandblock-block-break {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-break, source=minecraft:command_block, source=minecraft:chain_command_block, source=minecraft:repeating_command_block"
                    ]
                }
                commandblock-block-place {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-place, source=minecraft:command_block, source=minecraft:chain_command_block, source=minecraft:repeating_command_block"
                    ]
                }
                creeper-block-explosion {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=explosion-block, source=minecraft:creeper"
                    ]
                }
                creeper-entity-explosion {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=explosion-entity, source=minecraft:creeper"
                    ]
                }
                endcrystal-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=projectile-impact-entity, target=minecraft:end_crystal, source=minecraft:arrow, source=minecraft:player",
                        "flag=interact-item-secondary, target=minecraft:end_crystal, source=minecraft:arrow, source=minecraft:player",
                        "flag=entity-damage, target=minecraft:end_crystal, source=minecraft:arrow, source=minecraft:player",
                        "flag=interact-entity-secondary, target=minecraft:end_crystal, source=minecraft:arrow, source=minecraft:player"
                    ]
                }
                entity-armorstand-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=entity-damage, target=minecraft:armor_stand, source=minecraft:player",
                        "flag=projectile-impact-entity, target=minecraft:armor_stand, source=minecraft:player"
                    ]
                }
                entity-itemframe-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=entity-damage, target=minecraft:glow_item_frame, target=minecraft:item_frame",
                        "flag=projectile-impact-entity, target=minecraft:glow_item_frame, target=minecraft:item_frame"
                    ]
                }
                exp-drop {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-spawn, target=minecraft:xp_orb"
                    ]
                }
                fall-entity-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-damage, source=minecraft:fall"
                    ]
                }
                fall-player-damage {
                    contexts=[
                        "gd_claim_override=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-damage, target=minecraft:player, source=minecraft:fall"
                    ]
                }
                falling-block-break {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-break, source=minecraft:fall"
                    ]
                }
                fire-block-damage {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-break, source=minecraft:fire"
                    ]
                }
                fire-entity-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
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
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-damage, source=minecraft:lightning_bolt"
                    ]
                }
                monster-animal-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
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
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-damage, source=#monster, target=minecraft:player",
                        "flag=projectile-impact-entity, source=#monster, target=minecraft:player"
                    ]
                }
                monster-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-spawn, target=#monster"
                    ]
                }
                piston-item-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=item-spawn, source=minecraft:piston",
                        "flag=item-spawn, source=minecraft:sticky_piston"
                    ]
                }
                piston-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
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
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=block-break, source=minecraft:player"
                    ]
                }
                player-block-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, source=minecraft:player"
                    ]
                }
                player-block-place {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=block-place, source=minecraft:player"
                    ]
                }
                player-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-damage, target=minecraft:player",
                        "flag=projectile-impact-entity, target=minecraft:player"
                    ]
                }
                player-enderpearl-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-item-secondary, source=minecraft:player, target=minecraft:ender_pearl"
                    ]
                }
                player-endportal-use {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-teleport-from, source=minecraft:end_portal, target=minecraft:player"
                    ]
                }
                player-enter {
                    contexts=[
                        "gd_claim=claim"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=enter-claim, source=minecraft:player"
                    ]
                }
                player-entity-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-entity-secondary, source=minecraft:player"
                    ]
                }
                player-exit {
                    contexts=[
                        "gd_claim=claim"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=exit-claim, source=minecraft:player"
                    ]
                }
                player-item-drop {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=item-drop, source=minecraft:player"
                    ]
                }
                player-item-pickup {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=item-pickup, source=minecraft:player"
                    ]
                }
                player-itemframe-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=interact-entity-secondary, target=minecraft:glow_item_frame, target=minecraft:item_frame, source=minecraft:player"
                    ]
                }
                player-itemhanging-place {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=interact-item-secondary, target=#hanging, source=minecraft:player"
                    ]
                }
                player-netherportal-use {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-teleport-from, source=minecraft:nether_portal, target=minecraft:player"
                    ]
                }
                player-teleport-from {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-teleport-from, target=minecraft:player"
                    ]
                }
                player-teleport-to {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-teleport-to, target=minecraft:player"
                    ]
                }
                player-villager-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=entity-damage, target=minecraft:villager, source=minecraft:player",
                        "flag=projectile-impact-entity, target=minecraft:villager, source=minecraft:player"
                    ]
                }
                ravager-block-break {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-break, source=minecraft:ravager"
                    ]
                }
                silverfish-block-infest {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=block-modify, source=minecraft:silverfish"
                    ]
                }
                tnt-block-explosion {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=explosion-block, source=minecraft:tnt"
                    ]
                }
                tnt-entity-explosion {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=explosion-entity, source=minecraft:tnt"
                    ]
                }
                turtle-egg-hatch {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-break, source=minecraft:turtle_egg, target=minecraft:turtle_egg"
                    ]
                }
                villager-farm {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-break, source=minecraft:villager, target=#crops",
                        "flag=block-place, source=minecraft:villager, target=#crops"
                    ]
                }
                villager-trade {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-entity-secondary, target=minecraft:villager, source=minecraft:player"
                    ]
                }
                wither-block-break {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=block-break, source=minecraft:wither"
                    ]
                }
                wither-entity-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-damage, source=minecraft:wither"
                    ]
                }
            }
            # Whether flag definition group is enabled.
            enabled=true
        }
        user {
            # Set to true if this flag group is for admin use only.
            # Note: If admin group, the permission is 'griefdefender.admin.custom.flag.<groupname>
            # Note: If user group (admin set false), the permission is 'griefdefender.user.custom.flag.<groupname>
            admin-group=false
            definitions {
                block-fertilize {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=block-grow, used_item=minecraft:bone_meal, target=#crops, source=minecraft:player",
                        "flag=block-grow, used_item=minecraft:bone_meal, target=#plants, source=minecraft:player"
                    ]
                }
                chest-access {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, target=minecraft:chest, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:chest, source=minecraft:player"
                    ]
                }
                crop-growth {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-grow, target=#crops"
                    ]
                }
                damage-animals {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=entity-damage, target=#animal",
                        "flag=projectile-impact-entity, target=#animal"
                    ]
                }
                enderman-grief {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=block-break, source=minecraft:enderman",
                        "flag=block-place, source=minecraft:enderman"
                    ]
                }
                fire-spread {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=block-spread, source=minecraft:fire",
                        "flag=block-spread, source=minecraft:lava"
                    ]
                }
                grass-growth {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-grow, target=minecraft:grass"
                    ]
                }
                ice-form {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-modify, target=minecraft:ice"
                    ]
                }
                ice-melt {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-modify, target=minecraft:water, source=minecraft:ice"
                    ]
                }
                lava-flow {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=liquid-flow, source=minecraft:lava, target=minecraft:air"
                    ]
                }
                leaf-decay {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=leaf-decay"
                    ]
                }
                lighter {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=interact-item-secondary, target=minecraft:flint_and_steel, source=minecraft:player"
                    ]
                }
                mushroom-growth {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-grow, target=#mushroom"
                    ]
                }
                mycelium-spread {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-spread, target=minecraft:mycelium"
                    ]
                }
                pvp {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-damage, target=minecraft:player, source=minecraft:player",
                        "flag=projectile-impact-entity, target=minecraft:player, source=minecraft:player"
                    ]
                }
                ride {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-riding, target=#vehicle, source=minecraft:player",
                        "flag=interact-entity-secondary, target=#vehicle, source=minecraft:player"
                    ]
                }
                sign-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-block-primary, target=#signs, source=minecraft:player",
                        "flag=interact-block-secondary, target=#signs, source=minecraft:player"
                    ]
                }
                sleep {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, target=#beds, source=minecraft:player",
                        "flag=interact-item-secondary, target=#beds, source=minecraft:player"
                    ]
                }
                snow-fall {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-place, target=minecraft:snow, source=minecraft:air"
                    ]
                }
                snow-melt {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-break, source=minecraft:snow"
                    ]
                }
                snowman-trail {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-place, source=minecraft:snow_golem, target=minecraft:snow"
                    ]
                }
                soil-dry {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-modify, source=minecraft:farmland, state=moisture:0"
                    ]
                }
                vehicle-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=interact-item-secondary, target=minecraft:minecart, target=#boats, source=minecraft:player",
                        "flag=entity-damage, target=minecraft:minecart, target=minecraft:boat, source=minecraft:player",
                        "flag=entity-riding, target=minecraft:minecart, target=minecraft:boat, source=minecraft:player",
                        "flag=interact-entity-secondary, target=minecraft:minecart, target=minecraft:boat, source=minecraft:player"
                    ]
                }
                villager-trade {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-entity-secondary, target=minecraft:villager, source=minecraft:player"
                    ]
                }
                vine-growth {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=block-grow, target=minecraft:vine"
                    ]
                }
                water-flow {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=liquid-flow, source=minecraft:water, target=minecraft:air"
                    ]
                }
            }
            # Whether flag definition group is enabled.
            enabled=true
        }
    }
    version="1.0"
}
```

</details>

## GUI 组成及工作方式

标签 GUI旨在允许用户和管理员轻松管理其领地标签。

打开标签界面的指令是 `/cf` 或 `/gd flag claim`

在 GD 2.0 中, 所有预制标签可以应用到两种新玩家类型，即 : PUBLIC 和 OWNER。

`PUBLIC` - 在标签界面中切换预制标签页为 `PUBLIC`，所有未被信任的玩家都将被影响。
`OWNER` - 在标签界面中切换预制标签页为 `OWNER`，所有领地受信者及所有者本身都将被影响。


### 权限  

以下权限控制着用户对预制标签的访问 `griefdefender.user.custom.flag.<标签组>.<预制标签名称>`.
我们假设您不想让用户有权控制 `damage-animals` 预制标签。 您需要在 LuckPerms 输入以下命令 `/lp group <groupname> set griefdefender.user.custom.flag.user.damage-animals false`

### 标签值

如下所示，两个 管理/用户 预制标签都以 `true` 或 `false` 来显示您所处领地的标签影响。

### 管理员GUI相关
:warning: 管理员标签组的标签只会影响您所在领地。

![Admin GUI](https://i.imgur.com/tSVSC7q.png)


默认情况下，管理员可以访问2种模式 `PRESET` 和 `ADVANCED`。
`PRESET` 模式直接链接到 minecraft 预设标签定义预设文件。每个组都作为一个选项页并将该选项页定义的内容读入 GUI。
GD 随附 2 个预制标签组，即 `USER` 和 `ADMIN`。
 
这两个小组都将使用预制标签。如果需要将标志设置为默认值，请在配置中进行设置，如上所示。

### 用户GUI
:warning: 用户标签组的预制标签只会影响您所在的领地。
:warning: 如果您想要更改 `USER` 于别人的领地中，那您必须有忽略领地的权限并输入 `/ignoreclaims`，之后就能使用 `/cf` 命令了。


作为用户，如果您输入 `/cf` 命令，您将看到以下内容

![User GUI](https://i.imgur.com/LTeNaaD.png)



