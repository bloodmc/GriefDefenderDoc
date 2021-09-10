---
title: 预制标签
tag: 设置
category: 标签
icon: sidebar
---

## 概览

注：『预制标签』依托于[『基础标签』](./flags)。

『预制标签』系统为用户及管理员提供了简便管理领地标签的可能，
它允许管理员将复杂的[『预制标签』]打包好，以游戏内GUI的方式呈现给使用者。

GriefDefender 内置一个适用于原版的标签预设`minecraft.conf`，里边有两个标签组为`admin`和`user`。
:::: details 名词详解
flag definitions - 预制标签
flag - 基础标签
permission - 规则
PUBLC - 公众
OWNER - 受信者
::::

## 配置简章 preset

管理员能根据需要对『预制标签』进行**增删改**，以便最大程度的客制化用户的标签使用体验。
<br>任何『预制标签』在游戏界面对应的翻译都可以通过`lang/presets/标签预设名称/语言代码.conf`进行更改。

以默认标签预设 `minecraft.conf` 为例，简析结构
```
minecraft {
    depend=""
    enabled=true
    groups {
        ### 标明该标签组组名为 admin
        admin { 
            ### 用来标明是否为管理员专用『预制标签』
            ### 为 true 则标签组权限为 griefdefender.admin.custom.flag.组名
            ### 为 false 则标签组权限为 griefdefender.user.custom.flag.组名
            admin-group=true
            ### 开始定义『预制标签』            
            definitions {
                ambient-spawn { ### 『预制标签』名称
                    contexts=[ ### 『预制标签』的作用『情境』
                        "gd_claim_default=user" ### 所有用户领地的默认配置
                    ]
                    default-value=true ### 代表该『预制标签』默认值为开启
                    enabled=true ### 管理一个预制标签是否启用
                    icon { ### 用于箱子界面
                        enchanted=false
                        id="minecraft:bat_spawn_egg"
                        title="&6ambient-spawn"
                    }
                    permissions=[ ### 『基础标签』作用
                        "flag=entity-spawn, target=#ambient"
                    ]
                }
                ...
            }
        }
        user {
            类同admin
        }
    }
    ### 整个标签组在箱子界面的图标
    icon {
        enchanted=false
        id="minecraft:light_blue_shulker_box"
        title="&dminecraft"
    }
    ### 标注配置结构版本，用于插件内部对配置文件结构识别
    version="1.0"
```

## GUI 组成及工作方式

标签 GUI旨在允许用户和管理员轻松管理其领地标签。

打开标签界面的指令是 `/cf` 或 `/gd flag claim`
<br>打开的标签预设可以在 `flags.conf` 进行更改，默认是 `minecraft:user`，其中 minecraft 指代预设名称，user 指代标签组名称。

在 GD 2.0 中, 所有预制标签可以应用到两种新玩家类型，即 : PUBLIC 和 OWNER。

`PUBLIC` - 在标签界面中切换预制标签页为 `PUBLIC`，所有未被信任的玩家都将被影响。
`OWNER` - 在标签界面中切换预制标签页为 `OWNER`，所有领地受信者及所有者本身都将被影响。

## 添加新的预制标签
- 您可以直接创建一个新的预设标签，只需在 `presets/预设标签名.conf` 中按照格式添加，
- 您也可以直接更改现在的`minecraft.conf`。

我们现在针对标签定义进行讲解。
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

### 名称  

`ambient-spawn` - 这是定义的名称，当用户在标签 GUI中打开它时，该名称将显示给用户。它可以是你喜欢的任何东西。

### 情境  

```
contexts=[
        "gd_claim_default=user"
    ]
```
这是预制标签中所包含权限 `permissions=[...]` 的作用情境。
其目前只接受以下值 `gd_claim_default`, `gd_claim_override`，或 `gd_claim`。
预知更多，详见 [情境页面](./contexts) 来进一步了解情境的作用。

### 默认值  

`default-value=true` - 这是 GD 在启动期间应用预制标签时使用的默认值。
GD 仅在启动期间将此值作为临时权限应用，前提是情境包括 `gd_claim_default` 或 `gd_claim_override`。
如果定义不包含这些情境之一，则忽略默认值。

### 启用与否  

`enabled=true` - 该选项决定了 GD 是否使用该预制标签，如果设为 `false`，该预制标签将被忽略。


### 规则

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
