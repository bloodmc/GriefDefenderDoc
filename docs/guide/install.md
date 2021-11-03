---
title: Install
tags: install
category: configurabe
icon: install
---

:warning: In this page, we will explain how to start using GriefDefender in your Bukkit/Sponge server step by step. :warning: 

## Getting Started

### Requirements

* [LuckPerms](https://luckperms.github.io/) permission plugin.  
> **NOTE: GD only supports LuckPerms v5.**

:warning: GD makes heavy use of LP's `default` group. Make sure your LP groups are inheriting the `default` group or GD will not function properly. LP also strongly recommends to never disable this group. See https://github.com/lucko/LuckPerms/wiki/Default-Groups#where-to-start :warning: 

##### Sponge
* An up-to-date [Sponge].

##### Bukkit
* An up-to-date [Paper] or [Spigot].

### Installation
::::warning
If using `spark`, update to latest version at https://ci.lucko.me/job/spark/

Set `spawn-protection` to `0` in `server.properties` to allow GD to protect spawn. If this is not set properly, the server will block actions before GD has a chance to see it. 
::::

Download the latest GriefDefender jar from spigot's plugin website. Be sure to choose your correct Minecraft version, and keep it always updated! After the download drop it into your server's plugins folder.

Now start your server once to generate all configuration files, to check if GriefDefender was loaded sucessfully you can check console for `[GriefDefender] Loaded successfully`. Next shut down your server and start configuring your server.

### Configuration

> **NOTE: There are also a few options that have to be set using your permission system, you can read more about those on the [Options wiki page](https://github.com/bloodmc/GriefDefender/wiki/Advanced-Options).**

All configuration files can be found in a folder called `GriefDefender` in your servers config or plugins directory.

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

You can change a number of settings in the [config file](https://github.com/bloodmc/GriefDefender/wiki/Global-Config). The file has detailed annotations that should make it clear what each option does. There are three types of configs:

* Global
* Dimension
* World

Global configuration files can affect all of a server’s worlds and dimensions. This is the default level for configs.  
Dimension configuration files are used to affect a certain dimension or group of worlds. These types of configs will override the global config files. World configuration files are used to modify individual worlds only.   
World configs override dimension and global configs.

Claim data can be found inside the folder of the dimension the claim is in, e.g. all overworld world claims are saved inside 

`config/GriefDefender/worlds/minecraft/overworld/world/ClaimData` for Sponge  
`plugins/GriefDefender/worlds/minecraft/overworld/world/ClaimData` for Bukkit  

 
### Permissions
:::: info
It is VERY IMPORTANT you follow https://github.com/bloodmc/GriefDefender/wiki/Permissions#important before proceeding.
::::

After install GriefDefender correctly, you need to give your players permission to claim land, they aren't given by default. The only permission needed for basic GD setup is `griefdefender.user.*`. For basic admin setup, give admins the permission `griefdefender.admin.*` and `griefdefender.user.*`. 

If you want more fine tuned permissions you can find all permissions [here](https://github.com/bloodmc/GriefDefender/wiki/Permissions) and for a list of all command permissions & their usage check [here](https://github.com/bloodmc/GriefDefender/wiki/Commands-Usage-&-Permissions). 

If you believe that commands might be a little longer or hard to memorize, consider creating custom alias. [Click here for more information](https://github.com/bloodmc/GriefDefender/wiki/Custom-Alias-Creation)

To apply the above permissions to a group in LuckPerms, run the following command

```
/lp group <group> permission set griefdefender.user.*
```

For ´group´ use your default group, use "default" if you don't have one.

Once GD is installed and running, see https://github.com/bloodmc/GriefDefender/wiki/Claim-Management to learn how to create a protection claim and manage it.

[Paper]: https://papermc.io/downloads
[Spigot]: https://www.spigotmc.org/wiki/buildtools/
[Sponge]: https://www.spongepowered.org/downloads