---
title: 配置
tags: 信息
category: 信息
icon: tool
---

### 文件

> **提示: 还有一些选项必须使用你的权限系统来设置，你可以在 [选项页面](./feature) 上阅读更多关于这些选项的信息。**

所有的配置文件都在你的 config 或 plugin 文件夹中名为 `GriefDefender` 的文件夹中找到.

```
config/
└── GriefDefender/
    ├── logs/
    ├── worlds/ 阅览 作用域
    │   ├── minecraft/
    │   │   ├── normal/
    │   │   │   ├── world/
    │   │   │   │   ├── ClaimData/
    │   │   │   │   ├── SchematicData/
    │   │   │   │   └── world.conf
    │   │   │   └── dimension.conf
    │   │   └── 由其他方式引入的世界(如 Mod/数据包...)
    │   └── 
    ├── flags.conf 阅览 标签页面
    ├── global.conf 阅览 作用域
    └── options.conf 阅览 选项页面
```
worlds/ --- [作用域](#作用域)
<br>flags.conf --- [标签页面](./advanced/flags.html/#配置选章-flags-conf)
<br>options.conf --- [选项页面](./advanced/options)

### 作用域
默认的『全局』配置文件储存在 `global.conf`，
这些文件有详细的注释可以让你了解每个选项的作用。

一共有 3 种类型的配置文件:
* 全局 (Global)
* 纬度 (Dimension)
* 世界 (World)

全局配置文件可以影响一个服务器的所有世界和维度. 这是配置文件的默认级别.
维度配置文件是用来影响某个维度或一组世界的. 这些类型的配置文件将覆盖全局配置文件的设置. 世界配置文件仅用于修改单个世界.
世界配置文件将**覆盖维度和全局配置文件**的设置。
:::: info 例子
你想在主世界更改`global.conf`已经定义过的圈地工具。
你会找到 worlds/minecraft(游戏原版)/normal(即普通世界生成)/world/world.conf
仿制 global.conf 的结构，在里面输入
```
GriefDefender {
    claim {
        modification-tool="minecraft:golden_shovel"
    }
}
```
::::
领地数据可以在领地所处维度的文件夹中找到, 例如，所有 A 纬度的世界领地都保存在

Sponge: `config/GriefDefender/worlds/minecraft/A/world/ClaimData`

Bukkit: `plugins/GriefDefender/worlds/minecraft/A/world/ClaimData`