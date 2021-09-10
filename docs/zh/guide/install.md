---
title: 安装
tags: 安装
category: 配置
icon: install
---

### 装前预备
#### 插件前置
* [LuckPerms](https://luckperms.github.io/) --- 一个权限插件，GD 高强度依赖。(仅支持 v5) 
:::: warning 
GD 大量使用了 LP 的 `default` 权限组，请不要删除 `default` 中有关 GriefDefender 的父组，任何不恰当的更改都会导致 GD 无法正常使用。:warning:
::::
#### 运行平台

* SpongeVanllia(最新) & SpongeForge(1.12.2/1.16.5)
* Bukkit 及其分系(诸如 Spigot, Paper 此类) `v2 支持 1.12.2-1.19.x, v1 支持 1.8-1.16.5`
* 默认支持 Purpur 等 Paper 的分支，但测试其基准 Paper。

### 安装
:::: warning
在 `server.properties` 中设置 `spawn-protection` 为 `0` 以允许 GD 接管出生保护. 如果此项设置错误, GD 将无法正常接管出生保护.   
::::

从 [SpigotMC](https://www.spigotmc.org/resources/griefdefender.68900/) 下载最新的 GriefDefender，而 Sponge 版通过 Discord 分发。

现在启动你的服务器以生成所有的配置文件，检查 GriefDefender 是否成功加载，你可以检查控制台是否出现 `[GriefDefender] Loaded successfully`. 接下来关闭你的服务器并开始配置流程.

### 配置

1. 打开您所属平台对应的 GriefDefender 配置文件夹。
2. 打开 global.conf, 通过 `Ctrl+F` 搜索 `locale`。
3. 将 locale 的值从默认 en_US 更改为 zh_CN。
4. 控制台输入 /gd reload 完成汉化。
:::: info 
更详细的配置请参阅 [配置页面](./config)
::::
 
### 权限

:::: info 
继续进行本项配置之前需要查阅 [权限页面](./permission)
且请您注意，玩家默认是没有任何权限的！
::::


