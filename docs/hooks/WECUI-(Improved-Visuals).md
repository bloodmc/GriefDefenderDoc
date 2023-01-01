---
title: WorldEdit CUI
tag: Info
category: hooks
icon: visual
---

GriefDefender now supports WorldEdit CUI!

![WECUI Preview](https://i.IMGur.com/dYyUx6m.gif)

In order to use WorldEdit CUI, the following is required to be installed  

## Client 

#### 1.19+
* WECUI (Fabric Version) - [Download](https://github.com/EngineHub/WorldEditCUI)

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
* Liteloader Vanilla - [Download](https://www.liteloader.com/download)    OR    Liteloader Forge - [Download](https://jenkins.liteloader.com/job/LiteLoader%201.12.2/lastSuccessfulBuild/artifact/build/libs/liteloader-1.12.2-SNAPSHOT-release.jar)
* WECUI (LiteLoader version) - [Download](https://minecraft.curseforge.com/projects/worldeditcui)

Simply place both WECUI and Fabric API jars into the mods client folder.

If installed correctly, you should be able to see the same visuals as above when you right-click on a claim using a stick.

## Server
* FastAsyncWorldEdit - [Download](https://intellectualsites.github.io/download/fawe.html)
* WorldEdit - [Download](https://builds.enginehub.org/job/worldedit?branch=master)

## Permission

Permission Node                                    | Description | 
-------------------------------------------------| --------------|
worldedit.cui | Allow Promiscuous mode client

## Disclaimer

It's a known issue that Shaders don't get along with this feature due to Optifine having its own rendering pipeline. Shaders are probably even more custom and just plain break certain things. Resource packs, on the other hand, will work fine. Therefore, use at your own risk.