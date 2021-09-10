---
title: 标签
category: Flag
icon: token
---

## 概念认知
### 基础标签(Flags)
GD 对一些事件进行了包装，这些事件往往常用于领地设定，成为 『预设标签』 的组成部分，我们称之为 『基础标签(Flags)』
例子：`interact-block-primary` - (对方块左键) | `interact-inventory-click` - (背包内点击) | `entity-spawn` - (实体生成) 等等
在上述例子中，部分 『基础标签』 出于性能考量是关闭的[例如 entity-spawn]，您可以在 `flags.conf` 中开启。
### [预制标签(Flag-definitions)](./flag-definitions-gui)
由 『基础标签』 组成，『情境』 限定，可根据权限分发到游戏中介面供玩家使用，以 『预设集』 作为显示单位， GD 在初始化时自动生成 『预设集』 `./presets/minecraft.conf`。
### [情境(Contexts)](./contexts)
LuckPerms 中的情境系统，详见 [官方Wiki](https://luckperms.net/wiki/Context) ，GD 对 Luckperms 的 『情境』 进行了延展，添加了部分又能使其和 『基础标签』 限定作用情境。
例如：`source` - **标签触发的来源** | `target` - **标签作用的对象** | `boots` - **标签触发时装备的胸甲** | `gametime` - **游戏内所处时间**等等
注意：部分 『情境』 只能限定相应的标签，您不可能将 `boots` 限定 `entity-spawn` 这个标签。
### 判断阶段(抽象概念)
你可能注意到了，标签的判断是分阶段的
目前这个阶段可以分为 `默认(default)-->领地(claim)-->子领地(sub)-->覆写(override)`
注：`默认` 对应情境 `default=types`，`覆写` 对应情境 `override=types`。
检查优先级依次增高，`默认`指的是该标签在原封不动情况下的默认值，`领地`指的是后边更改的值，`子领地`指的是领地中子领地又整上的新值，`覆写`处于最高优先级，往往只有管理员能使用。
这意味着当有两个标签冲突时，比如在领地设定中设置在 `领地` 内**PVP禁止**，但覆写标签中添加了**PVP开启**，那么领地行为遵照`PVP开启这个行径`。
### 标签调试模式 (/cfdebug)
常用于测试标签状态，当该模式开启时，GD 将会视你为**一般的过路人**，所有关于领地标签的设定都将**不再**以你原来的权限进行判断，这有助于你在调整完 flag 后进行测试。

## 配置选章 Flags.conf
关乎标签的配置有 `flags.conf` 和 `presets`.
本页面着重关注基础标签，即 flags.conf 内容，presets 请阅览[预设标签](./flag-definitions)。
```
GriefDefender {
    default-flags { ### 管默认的 『基础标签』行为
        default-claim-flags { ### 管在任意类型领地『基础标签』行为
            user { ### 管在受用户影响的领地『基础标签』行为
                block-break=false
                ...
            }
            wilderness { ### 管在荒野中『基础标签』行为
                block-break=false
                ...
            }
        }
    }
    ### 当输入 /cf 时显示的『预设标签组』
    default-user-preset="minecraft:user"
    ### 全局开关『基础标签』的检查
    flag-control {
        block-break=true
        ...
    }
```
## 命令

### 参数

`<必填项> [选填项]`

|   参数类型   |                                               描述                                               |
| ------------ | ------------------------------------------------------------------------------------------------ |
| `<标签>`     | 要进行操作的 『基础标签』 类型                                                                   |
| `<作用对象>` | 该标签即将影响的对象，一个例子 `minecraft:dirt`。使用 `any` 或 `modid:any` 作通配符管理。             |
| `<值>`       | 设置标签返回的值，`false(否)\|undefined(未定义)\|true(是)` 三种状态，其中 `undefined` 可以用 `0` 代替 |
| `[键=值]`    | 可选项，尝用于 情境限定:<br>`override=type` 意味着会在指定的 领地类型(type) 中将该操作标签添加到 覆写   |

示例：/cf block-break minecraft:dirt false source=player override=admin 意味着在类型为 `管理员领地(admin)` 的 `覆写优先级(override)` 中 `禁用(false)` 由 `玩家(source=player)` 发出，对 `泥土(minecraft:dirt)` 进行`方块破坏(block-break)`的行为。
### 命令列表
___
#### `/gd claim debug`
**别称**: `cfd|claimflagdebug`

切换 `领地标签调试`

___
#### `/gd flag claim [<标签> <作用对象> <值> [情境]`
**别称**: `cf|claimflag`

编辑 『基础标签』


___
#### `/gd flag group <权限组> [<标签> <作用对象> <值> [情境]`
**别称**: `cfg|claimflaggroup`

编辑 『基础标签』，但影响的对象是权限组。
常用于限制某个权限组的行为，示例 /cfg default block-break minecraft:dirt false 就是让整个 default 权限组都不能破坏泥土。

___
#### `/gd flag player <player> [<标签> <作用对象> <值> [情境]`
**别称**: `cfp|claimflagplayer`

编辑 『基础标签』，但影响的对象是玩家。
和上述类似

___
#### `/gd flag reset`
**别称**: `cfr|claimflagreset`

重置一个领地的标签设定为默认，默认值可以在配置文件中更改。

## 一些用例
『基础标签』 可以应用到 `玩家|权限组`，各类型领地(基础，子领地，城镇，管理员) 上边。

### 用例 1

防止 `灰色羊毛` 被破坏
`/cf block-break minecraft:wool.5 false`

如果不指定 modid，默认 minecraft 开头， `modid:blockid.meta`，不指定 meta 默认返回 0。


### 用例 2

允许 `宝可梦精灵球` 在 `覆写优先级(override)` 的 `基础类型(basic)` 领地发生交互。

`/cf projectile-impact-block any true source=pixelmon:occupiedpokeball override=basic`

### 用例 3

防止在权限组 "Jailed" 中的 `玩家(source=minecraft:player)` 在 `覆写优先级(override)` 的 `管理员领地(admin)` 中无法使用 `任何(any)` 类型的传送门。

`/cfg Jailed portal-use any false source=minecraft:player override=admin`

### 用例 4

防止叫 "notch" 的玩家在当前领地中无法右键床。

`/cfp notch interact-block-secondary minecraft:bed false`

### 用例 5
防止运行宝可梦中 '/shop select' 命令运行。

`/cf command-execute pixelmon:shop[select] false`

### 用例 6
防止使用某物品右键某实体

`/cf interact-entity-secondary item_id entity_id false`

## 通过 LuckPerms 添加

### 用例 1
关闭 `starters` 权限组中对动物的伤害

GD:  
```
/cfg starters entity-damage #animal false default=basic
```

LP: 
```
/lp group starters permission set griefdefender.flag.entity-damage false gd_claim_default=basic target=#animal
```
