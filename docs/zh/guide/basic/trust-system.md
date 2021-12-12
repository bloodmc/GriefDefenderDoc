---
title: 信任系统
category: 领地
tags: 权限
icon: profile
---

有四种不同类型的信任。访问者、建造师、容器和管理者.

### 选项
|选项 | 描述 |
| --------- | ----------- |
| `<player>`| 需要信任的玩家. |
| `<group>` | 需要信任的组. 注意: 如果你信任所有人, 使用 `public`. |
| `<type>`  | 信任类型 [none, accessor, builder, container, manager]. 注意: 如果你想移除信任, 使用 `none`. <br>*None*: `撤销一个玩家/权限组对你的领地的访问权`<br>*Accessor*: `授予玩家/权限组与除库存以外的所有方块互动的权限`<br>*Container*: `授予玩家/权限组与所有方块互动的权限，包括库存。`<br>*Builder*: `授予玩家/权限组编辑权限，包括放置和破坏方块的能力，以实现上述所有功能`<br>*Manager*: `授予玩家/权限组对上述所有内容的访问权，包括修改领地的能力`  |

### 信任玩家
**指令**: `/gd trust player <player> <type>`  
**别名**: `trust`  
**例子**: `/gd trust player Kratos basic`  

授予玩家访问你的领地.

### 信任权限组
**指令**: `/gd trust group <group> <type>`  
**别名**: `trust`  

授予权限组访问你的领地.

### 移除信任玩家
**指令**: `/gd trust player <player> none`  

撤销一个玩家对你领地的访问权.

### 移除信任权限组
**指令**: `/gd trust group <group> none`  

撤销一个权限组对你领地的访问权.

## 信任名单
**指令**: `/trustlist` 

列出当前受信任的玩家和信任类型.
