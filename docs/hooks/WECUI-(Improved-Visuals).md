---
title: WorldEdit CUI
tag: Info
category: hooks
icon: visual
---

GriefDefender now supports WorldEdit CUI!

![WECUI Preview](https://i.IMGur.com/dYyUx6m.gif)

To use WorldEdit CUI, you need to have it installed on both the client and the server. 

## Client 

#### 1.19+
* WECUI (Fabric/Quilt Version) - [Download](https://www.curseforge.com/minecraft/mc-mods/worldeditcui-fabric/files/all?filter-game-version=1738749986%3A73407)

#### 1.18+ 
* WECUI (Fabric Version) - [Download](https://www.curseforge.com/minecraft/mc-mods/worldeditcui-fabric/files/all?filter-game-version=1738749986%3a73250)
* WECUI (Forge Version) - [Download](https://www.curseforge.com/minecraft/mc-mods/worldeditcui-forge-edition-3/files/all?filter-game-version=1738749986%3a73250)

#### 1.17+
 * WECUI (Forge Version) - [Download](https://www.curseforge.com/minecraft/mc-mods/worldeditcui-forge-edition-3/files/all?filter-game-version=1738749986%3a73242)

#### 1.16+
* WECUI (Fabric Version) - [Download](https://www.curseforge.com/minecraft/mc-mods/worldeditcui-fabric/files/all?filter-game-version=1738749986%3a70886)
* WECUI (Forge Version) - [Download](https://www.curseforge.com/minecraft/mc-mods/worldeditcui-forge-edition-3/files/all?filter-game-version=1738749986%3a70886)

#### 1.14+
* WECUI (Fabric Version) - [Download](https://github.com/mikroskeem/WorldEditCUI#installation) 

#### 1.12 and under
* WECUI (LiteLoader version) - [Download](https://minecraft.curseforge.com/projects/worldeditcui)  
Liteloader Vanilla - [Download](https://www.liteloader.com/download)  
Liteloader Forge - [Download](https://jenkins.liteloader.com/job/LiteLoader%201.12.2/lastSuccessfulBuild/artifact/build/libs/liteloader-1.12.2-SNAPSHOT-release.jar)  
<hr>

### FabricAPI/QuiltAPI
Simply place both WECUI and FabricAPI/QuiltAPI jars into the mods client folder.

If installed correctly, you should be able to see the same visuals as above when you right-click on a claim using a stick.

## Server
* FastAsyncWorldEdit - [Download](https://intellectualsites.github.io/download/fawe.html)
* WorldEdit - [Download](https://builds.enginehub.org/job/worldedit?branch=master)

### Server-side only
WorldEditSelectionVisualizer (WESV) is essentially the famous WorldEdit CUI mod in the form of a bukkit plugin, which means that players don't need to install anything on their client. 

* WorldEditSelectionVisualizer  - [Download](https://www.spigotmc.org/resources/17311/)
* WorldEditSUI - [Download](https://www.spigotmc.org/resources/60726/)

![WESV Preview](/cuboid_wesv.webp)

## Permission

Permission Node                                    | Description | 
-------------------------------------------------| --------------|
worldedit.cui | Allow Promiscuous mode client

## Disclaimer

It's a known issue that Shaders don't get along with this feature due to Optifine having its own rendering pipeline. Shaders are probably even more custom and just plain break certain things. Resource packs, on the other hand, will work fine. Therefore, use at your own risk.