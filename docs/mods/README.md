---
title: Mods
tag: mods
category: mods
---

#### Designed from the ground up for mods

[Archlight](https://github.com/IzzelAliz/Arclight)/[Mohist](https://mohistmc.com/)/[Forge](https://files.minecraftforge.net/net/minecraftforge/forge/)/[Fabric](https://fabricmc.net/) supported.

Compatible with almost all interactions of Forge mods, from [debugging](/wiki/advanced/Debugging.html) you can create rules for your mods!
Using [debugging](/wiki/advanced/Debugging.html) to create new [flags](/wiki/advanced/Flags.html) controls!

::: info Mods with presets available
- Pixelmon [Details](/mods/Pixelmon) | [Optimization](/mods/Pixelmon.html#fitfc-s-optimization-for-pixelmon)
:::

::: danger Mods with incompatibility
Note: Some mods bypass events due to the platform not supporting the action or the mod not following standards, causing GD to not be able to capture these events to control them.  
[Snow! Real Magic! - Modrinth](https://modrinth.com/mod/snow-real-magic) (Problem with Mixins)  
[Lycanites Mobs - CurseForge](https://www.curseforge.com/minecraft/mc-mods/lycanites-mobs) (Mob spawn control)  
To fix it go to `config/lycanitesmobs/spawners/`  
look for `ignoreForgeCanSpawnEvent` in each file and change it to `false`  
:::