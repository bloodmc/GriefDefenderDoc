---
title: 安装
tags: 安装
category: 配置
icon: install
---

:::: info 
在本页面, 我们将手把手教你如何在你的 Bukkit/Sponge 服务器上开始使用 GriefDefender.
::::

## 入门

### 需求

* [LuckPerms](https://luckperms.github.io/) 权限插件.  
> **提示: GD 只支持 LuckPerms v5.**

:warning: GD 大量使用了 LP 的 `default` 权限组. 请确保你的 LP 权限组均已继承 `default` 组，否则 GD 将无法正常工作. LP 也强烈建议不要禁用该权限组. 查阅 https://github.com/lucko/LuckPerms/wiki/Default-Groups#where-to-start :warning: 

##### Sponge
* 最新版本的 [Sponge].

##### Bukkit
* 最新版本的 [Paper] 或 [Spigot].

### 安装
:::: warning
 如果你在使用 `spark` 插件, 请在此链接下载并更新到最新版本 https://ci.lucko.me/job/spark/
 
在 `server.properties` 中设置 `spawn-protection` 为 `0` 以允许 GD 接管出生保护. 如果此项设置错误, GD 将无法正常接管出生保护.   
::::

从 Spigot 的插件页面下载最新的 GriefDefender.请务必选择正确的 Minecraft 版本，并保持它为最新版本 下载后,将其放入你服务器的插件文件夹.

现在启动你的服务器以生成所有的配置文件，检查 GriefDefender 是否成功加载，你可以检查控制台是否出现 `[GriefDefender] Loaded successfully`. 接下来关闭你的服务器并开始配置流程.

### 配置

> **提示: 还有一些选项必须使用你的权限系统来设置，你可以在 [选项 wiki 页面](https://github.com/bloodmc/GriefDefender/wiki/Advanced-Options) 上阅读更多关于这些选项的信息.**

所有的配置文件都在你的 config 或 plugin 文件夹中名为 `GriefDefender` 的文件夹中找到.

```
config/
└── GriefDefender/
    ├── logs/
    ├── worlds/
    │   ├── minecraft/
    │   │   ├── normal/
    │   │   │   ├── world/
    │   │   │   │   ├── ClaimData/
    │   │   │   │   ├── SchematicData/
    │   │   │   │   └── world.conf
    │   │   │   └── dimension.conf
    │   │   └── other...
    │   └── 
    ├── flags.conf
    ├── global.conf
    └── options.conf
```

你可以更改 [配置文件](https://github.com/bloodmc/GriefDefender/wiki/Global-Config) 中的很多设置. 这些文件有详细的注释可以让你了解每个选项的作用. 一共有 3 种类型的配置文件:

* 全局 (Global)
* 纬度 (Dimension)
* 世界 (World)

全局配置文件可以影响一个服务器的所有世界和维度. 这是配置文件的默认级别.
维度配置文件是用来影响某个维度或一组世界的. 这些类型的配置文件将覆盖全局配置文件的设置. 世界配置文件仅用于修改单个世界.
世界配置文件将覆盖维度和全局配置文件的设置.

领地数据可以在领地所处维度的文件夹中找到, 例如，所有 A 纬度的世界领地都保存在

Sponge: `config/GriefDefender/worlds/minecraft/A/world/ClaimData`

Bukkit: `plugins/GriefDefender/worlds/minecraft/A/world/ClaimData`

 
### 权限

:::: info 
**非常重要**的是在你继续进行本项配置之前需要查阅 https://github.com/bloodmc/GriefDefender/wiki/Permissions#important
::::

在正确安装 GriefDefender 后, 你需要给玩家领地相关的权限, 玩家默认是没有这些权限的. 对于基础 GD 权限只需要给予 `griefdefender.user.*`. 对于管理员权限, 给予管理员 `griefdefender.admin.*` 和 `griefdefender.user.*` 权限. 

你可以在 [这里](https://github.com/bloodmc/GriefDefender/wiki/Permissions) 找到更详细的权限节点, 查看所有指令权限和用法请在 [这里](https://github.com/bloodmc/GriefDefender/wiki/Commands-Usage-&-Permissions) 查看. 

如果你觉得指令过长或难于记忆, 可以考虑使用指令别名. [点击这里获取更多相关信息](https://github.com/bloodmc/GriefDefender/wiki/Custom-Alias-Creation)

要对某个权限组应用上述权限, 请运行此命令

```
/lp group <权限组> permission set griefdefender.user.*
```

在 ´权限组´ 处填写你的默认权限组, 如果你不知道，请使用 "default".

当 GD 已安装并运行, 查阅 https://github.com/bloodmc/GriefDefender/wiki/Claim-Management 学习如何创建和管理领地.

[Paper]: https://papermc.io/downloads
[Spigot]: https://www.spigotmc.org/wiki/buildtools/
[Sponge]: https://www.spongepowered.org/downloads
