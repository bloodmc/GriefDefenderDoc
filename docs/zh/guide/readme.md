---
title: GriefDefender
category: 配置
tags: 信息
---
:::: danger 施工中
这个文档还不稳定，我们正尽力地积极改进它!
如果您遇到了什么问题，请报告给我们
::::
:::: info 贡献
帮助我们改善 GD 的文档
::: center
[贡献指南](../Contribution.md)
::::
# GriefDefender Wiki
*For Bukkit/Sponge servers.*

* [Discord Server](https://discord.gg/jy4FQDz) - for support, questions, or general GriefDefender related talk.

A universal solution for protecting your servers against grief.  
It works out of the box and fully integrates with [LuckPerms](https://ci.lucko.me/job/LuckPerms/).

> **Note: Since GriefDefender relies heavily on permission contexts, it has a hard dependency on [LuckPerms]. See <https://github.com/lucko/LuckPerms/wiki/Migration> on how to migrate to LP from another permissions plugin.

## Features
* **NEW!** Rent System - Allow your users to establish hotels, apartments, cabins and much more to be rented! (Still in current development)
* **NEW!** Spawn-limits to avoid having farms with huge amount of entities in the same place/chunk (configurabe per claim, all claims, wilderness and much more) - Boost your server performance with this feature!
* **NEW!** Customizable options per claim, such as teleport delay, pvp handlers, player gamemodes, player flight mode, and much more.
* Advanced permission options (meta).
* Command system built on Aikar's [ACF] library.
* Economy mode to buy/sell claims with currency.
* Extendable API.
* Flag system powered by permission contexts to handle any protection combination you wish.
* GriefPrevention Bukkit migrator.
* HOCON configuration system with ability to override settings per world, dimension, or globally.
* Inherit system that allows parent claims to enforce protection to children.
* Interactive chat UI for managing claims and flags.
* Redstone protection.
* Restore claims back to world gen state.
* Schematics for admins to backup/restore claims. (Useful for events)
* Tracking system for improved protection.  
* WorldGuard support.
* Vault support.
* Dynmap support.
* McMMO support.

[ACF]: https://github.com/aikar/commands
[Discord]: https://discord.gg/jy4FQDz
[Forge]: http://files.minecraftforge.net
[Java 8]: http://java.oracle.com
[LuckPerms]: https://github.com/lucko/LuckPerms
[Source]: https://github.com/bloodmc/GriefDefender
[SpongeForge]: https://www.spongepowered.org/downloads/spongeforge
[SpongeVanilla]: https://www.spongepowered.org/downloads/spongevanilla