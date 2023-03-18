---
title: 安装
tags: 安装
category: 配置
icon: start
---

### 安装
::: tabs

@tab:active Bukkit(包含 Paper 及其分系)  
:warning: 在 `server.properties` 中将 `spawn-protection` 设置为 `0` 以让插件接管保护。
如果该项不正确设置会导致出现各类奇怪问题。 :warning:
1. 安装最新版 [LuckPerms](https://luckperms.net/download).
2. 在 [Spigot](https://www.spigotmc.org/resources/68900/) 获取最新版 GD。
3. 将 jar 丢进 `./plugins`
4. 启动服务器生成全部配置并检查日志是否出现 `[GriefDefender] Loaded successfully`，若出现即初始化成功。
5. 关闭服务器并开始配置。

@tab Sponge(API7 & API8)

:warning: LuckPerms 自 v5.3.98 不再支持 API7，如果你在运行 1.12.2 版本的 Sponge 
使用[此版本LP](https://ore.spongepowered.org/Luck/LuckPerms/versions/5.3.98)。
1. 从 Discord 获取 GD 针对 Sponge API 7/8 的不同版本。
2. 将 jar 丢进 `mods` 或 `mods/plugins`。
3. 启动服务器生成全部配置并检查日志是否出现 `[GriefDefender] Loaded successfully`，若出现即初始化成功。
4. 关闭服务器并开始配置。

@tab Forge(1.18+)

Coming soon!

@tab Fabric(1.19)

Coming soon!

:::
:::: warning 
GD 大量使用了 LP 的 `default` 权限组，请不要删除 `default` 中有关 GriefDefender 的父组，任何不恰当的更改都会导致 GD 无法正常使用。:warning:
::::

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


