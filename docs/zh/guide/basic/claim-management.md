---
title: Claim Management
category: Claim
tags: management
icon: operate
---

GriefDefender is a plugin that provides self-service region protection functionality, giving you additional options to fine tune aspects such as door, chest, and build permissions for users or groups of users! Below some basic instructions for claim management for more fine tuned control over your claims check out the [Flags page](https://github.com/bloodmc/GriefDefender/wiki/Flags).

All the examples are with the defaults at the time of writing this in mind.

## Claim Creation

A player can create claims in two types of modes.

### 2D 

A 2D claim creates a claim by `AREA` (X and Z). It creates the claim from bedrock (lowest block point) to sky (max Y level 255) in the world you are in. This mode is the most user friendly as it doesn't require the player to worry about block height or other players claiming above or below their claims. By default all players default to this mode unless the meta option `griefdefender.create-mode` is set to a different mode.  
See https://github.com/bloodmc/GriefDefender/wiki/Options-(Meta)#claim-options for more info on claim options.  

### 3D

A 3D claim creates a claim by `VOLUME` (X, Y, and Z). It is the same as 2D except it respects the block height from your selections. This mode is ideal perfect for subdivisions (child claims). For example, if you wanted to create a building with floors you could use this mode so the height is respected.  
Note: To switch to this mode, use the command `/cuboid` or  `/gd cuboid`. To exit back to 2D mode, enter the same command.

### Force players to default to 3D on login

If you want to force players to default to 3D claiming mode on login, set `griefdefender.create-mode` to `VOLUME` on a LP group or player.  
Note: This does not mean a player cannot switch modes, it just defaults them to what is set on login.  


In order to start creating a claim, first make sure you are in the correct claiming mode (2D or 3D) then do one of the following

1. Switch to the claiming tool which by default is a `minecraft:golden_shovel`.  
OR
2. Switch to claiming mode by using command `/claim` or `/claimmode`.  
Note: Claim mode requires no tools in hand.

Claim mode has the following functionality  

* Left-click to inspect existing claims based on your mouse cursor. The first non-air block hit will be the claim it inspects.  
* Shift Left-click to scan for existing claims around you.
* Right-click to create a new claim. This requires 2 block points to complete. If in 2D mode, simply select 2 points in a square format. If in 3D mode, do the same as 2D but block height will matter so choose the lowest and highest block position you want your claim to be.  


Once you have the proper claiming tool equipped or are in `/claimmode` , it is time to decide what claim type you want to create.


There are four types of claims a user can create

1. Admin - Use `/adminclaims` or `/gd mode admin` to switch.
2. Basic - Use `/basicclaims` or `/gd mode basic` to switch.
3. Subdivision - Use `/subdivideclaims` or `/gd mode subdivide` to switch.
4. Town - Use `/townclaims` or `/gd mode town` to switch.


### Admin Claim

An admin claim has the following capabilities  

* No size restrictions.
* Does not cost anything to create.
* Can be created around any existing claim.
* Can rented. 
* Used by administrators only.

Note: Use `/adminclaims` or `/gd mode admin` to switch to this claim type mode.

### Basic Claim

A basic claim has the following capabilities  

* 5x5 size restriction in 2D mode. 5x5x5 size restriction in 3D mode.  
* Can be sold, rented, or transferred to another player.  
* Requires claim blocks.  

This is the default claim type mode when equipping the claiming tool (minecraft:golden_shovel).  
Note: Use `/basicclaims` or `/gd mode basic` to switch to this claim type mode.  

### Subdivision Claim

A subdivision claim has the following capabilities  

* 1x1 size restriction in 2D mode. 1x1x1 size restriction in 3D mode.
* Can be sold, rented, or transferred to another player.  
* Requires no claim blocks when created by owner. 


### Town Claim

A town claim has the following capabilities  

* 32x32 size restriction in 2D mode. 32x32x32 size restriction in 3D mode.
* Requires claim blocks.  
* Supports basic claims inside.  
* A creation limit of 1 which means you can only create 1 town by default.  
Note: This can be adjusted by changing `griefdefender.create-limit` to a value higher than 1 with `gd_claim_default=town` context. 


Note: For a player to claim chunks they need the permissions and enough claim-blocks for the size of their claim which can be configured with [Options](https://github.com/bloodmc/GriefDefender/wiki/Options).

See https://github.com/bloodmc/GriefDefender/wiki/Claim-Types for more information on each claim type.

### Golden Shovel
You create claims with a golden shovel (item can be changed in the configs), which can also change claim size and position. Remember there are commands to switch claim type and mode, `/adminclaims`, `/townclaims`, `/basicclaims`, `/subdivideclaims`!

* Creating a new claim: Right click at two points to mark the corners
* Resizing a claim: Right click once in an existing claim to see the markers. Right click on a corner block and then again on a different position to move that corner.
* Cancelling operations: Putting away a golden shovel without completing an operation cancels all actions

The shovel can also be used to subdivide a basic. To switch to that mode, use `/claimsubdivide`. All three main claim types support direct child claims (subdivisions) - Town, Admin and Basic.

### Wooden stick
Basic tool, you can use it to indicate the position of claims, and identify who the owners of the claims are.

* Right clicking shows existing claim locations
* Shift right clicking searches for all claims in a 100 block radius and shows their location
* Left clicking hides the markers

## Claim Settings

To get general information about claims use `/claiminfo` while standing in them. Hover over things to find various details you can change directly without entering any commands.
There are also commands to change the claim name, greeting, and farewell.  


## Claim Entry Control

### Allowing other players to access your claim

You can give other players access to your basic claim using the [trust commands](https://github.com/bloodmc/GriefDefender/wiki/Commands#trust), e.g. to give your friend "Applehead" building permissions to your claim just run `/trust Applehead`.

### Require trust for players to enter claim

Toggle the user flag definition `player-enter` to `false`

Once the above is done, non-trusted players will not be able to enter your claim.

To allow entry for all users
`/at public`

To allow entry for a single user
`/at <playername>`

To remove entry for all users
`/untrust public`

To remove entry for a specific user
`/untrust <playername>`


## How to disable claiming/GD functionality

### Disable claiming in a specific world

To disable creating claims for a specific group of users in a world called `valhalla`, enter the following command  
`/lp group <group> permission set griefdefender.user.claim.create.* false world=valhalla`

### Disable GD in a specific world

To disable GD functionality in an overworld world named `valhalla`, go to GD config folder then to `worlds`

You will see the following folders
```
nether
normal
the_end
```

Since the world `valhalla` is of type `overworld` , go into `normal` folder. You will see a folder named `valhalla`.
Inside this folder will be a config folder named `world.conf`. Edit the config file to be the following

```
# 1.2.7
# # If you need help with the configuration or have any issues related to GriefDefender,
# # create a ticket on https://github.com/bloodmc/GriefDefender/issues.
# # Note: If you have not purchased GriefDefender, please consider doing so to get 
# # exclusive access to Discord for prompt support.
# 

GriefDefender {
    claim {
        # Whether claiming is enabled or not. (0 = Disabled, 1 = Enabled)
        claims-enabled=0
    }
}
```

## How to handle explosions above surface level

Open up the global.conf found under `./plugins/griefdefender` on Bukkit and `./config/griefdefender` on Sponge servers.  
You will find the following config settings  

* `explosion-block-surface-blacklist` - Allows you to blacklist specific block source, such as tnt, above the surface level defined by setting `explosion-surface-block-level`. To blacklist ALL blocks, use the id `any`.
* `explosion-entity-surface-blacklist` - Allows you to blacklist specific entity explosion sources, such as creeper, above the surface level defined by setting `explosion-surface-block-level`. To blacklist ALL entities, use the id `any`.
* `explosion-surface-block-level` - Allows you to configure the block surface level (Y coord) that GriefDefender will use to determine if an explosion is above the surface. (Default: 63)  
Note: You can configure these settings per world by copying the setting to your respective `world.conf` file.


## How to override default min/max world height

To override a world named `valhalla` with environment type `overworld`, the following config changes need to be made

#### Bukkit
* Locate world.conf in `./plugins/GriefDefender/worlds/normal/valhalla/world.conf`
* Copy claim create settings from `global.conf` to new world.conf
* Open `./plugins/GriefDefender/options.conf`
* Under `default-user-options` set `min-level` to match override setting
* Under `default-user-options` set `max-level` to match override setting

#### Sponge
* Locate world.conf in `./config/GriefDefender/worlds/overworld/valhalla/world.conf`
* Copy claim create settings from `global.conf` to new world.conf
* Open `./config/GriefDefender/options.conf`
* Under `default-user-options` set `min-level` to match override setting
* Under `default-user-options` set `max-level` to match override setting

If done right, it should look similar to

```
GriefDefender {
    claim {
        creation-settings {
            # Whether claims can expire by default. (Default: True)
            expirable=true
            # Whether claims should inherit their parent on creation. (Default: True)
            # Note: This setting does not affect a claim whose parent is a town.
            inherit-parent=true
            # The maximum world height override used during claim creation.
            # Note: Requires 'override-world-height' to be enabled.
            max-world-height-override=319
            # The minimum world height override used during claim creation.
            # Note: Requires 'override-world-height' to be enabled.
            min-world-height-override=-64
            # Whether claim heights are taken from config instead of world. (Default: False)
            # Note: Enable this setting if using custom datapack that alters the default world height.
            override-world-height=true
            # Whether claims requires claim blocks on creation. (Default: True)
            requires-claim-blocks=true
            # Whether claims can be resized on creation. (Default: True)
            resizable=true
            # Whether claims can show deny messages to players by default. (Default: True)
            show-deny-messages=true
        }
    }
}
```

Note: These settings will only work for newly created claims. If the world has already been created, make sure to adjust the wilderness claim data with appropriate height.

## FAQ

**1. How do allow all users to create claims for free?**

Set meta `griefdefender.initial-blocks` to a high value such as `999999999`. See https://github.com/bloodmc/GriefDefender/wiki/Options-(Meta)#luckperms. You should also disable `claim-block-task` under claim category in `global.conf` so players do not accrue claim blocks.  

**2. How do I transfer a claim to another player for free?**

Create claim, use `/claiminfo` -> `Admin Settings` and toggle `Requires Claim Blocks` to false. Then use `/claimtransfer <playername>` to transfer claim to player.  

**3. How do I create a claim using WorldEdit?**  

First make sure your wand is set for cuboid mode as GD only supports cuboid. Use the wand to select your 2 points. If you want to create a 2D claim from bedrock to sky then type `/claimwe`. If you want to create a 3D claim that respect the height of your selection then type `/cuboid` then `/claimwe`. Using `/cuboid` will put you into 3D claiming mode where your selection will always respect block height.  

**4. How do I make use of WECUI visuals with GD claims?**

Make sure you use the investigation tool (minecraft:stick by default) or are in `/claimmode` then right-click an area.
  
**5. How do I allow everyone to access my spawn?** 

Give them accessor trust by using `/at public` where public represents all players.  See https://github.com/bloodmc/GriefDefender/wiki/Trust-System.  If you need more detailed protection then use the flag system. See https://github.com/bloodmc/GriefDefender/wiki/Flag-Definitions-GUI

**6. How do I select a specific claim to work in? (change settings, etc..)**

Most GD commands will use the claim you are standing in. Simply stand in the claim and make your change. If the claim is far, use `/claimlist` and TP to it.  

**7. How do I test flags as a non-trusted user in a claim?**

Use `/cfdebug` to put yourself into claim flag debug mode then perform any action. This will internally set you as a non-trusted player for all claims. When done, simply run `/cfdebug` command again.  

**8. Is there a way to allow a permission within all claims but deny it in the wild?**

* To deny a specific player permission in wilderness

1. Assign permission to all players in LuckPerms.
2. Stand in wilderness claim.
3. Execute command `/cpp <playername> <permission> false`


* To deny a specific group permission in wilderness

1. Assign permission to all players in LuckPerms.
2. Stand in wilderness claim.
3. Execute command `/cpg <group> <permission> false`

Note: The same steps can be applied to any claim.

**9. How do I stop a player from executing a command in a claim like `/sethome` ?**  

* Deny the permission on a group in claim.  

1. Stand in claim where you want to deny the permission.  
2. Execute command `/cpg <group> <permission> false`  
ex. To deny the permission `essentials.sethome` for group `default`  
`/cpg default essentials.sethome false`  

* Deny the permission on a single player in claim.  

1. Stand in claim where you want to deny the permission.  
2. Execute command `/cpp <playername> <permission> false`  
ex. To deny the permission `essentials.sethome` for player `Mike`  
`/cpp Mike essentials.sethome false`  

OR  

* Deny the command-execute flag on a group in claim.  

1. Stand in claim where you want to deny the `command-execute` flag.  
2. Execute command `/cfg <group> command-execute <pluginid:command[arg]> false`  
ex. To deny the essentials command `/sethome` for group `default`  
`/cfg default command-execute essentials:sethome false`  

* Deny the command-execute flag on a single player in claim.

1. Stand in claim where you want to deny the `command-execute` flag.  
2. Execute command `/cfp <playername> command-execute <pluginid:command[arg]> false`  
ex. To deny the essentials command `/sethome` for player `Mike`  
`/cfp Mike command-execute essentials:sethome false`  

Note: Use `/gddebug record claim` to get the proper info for command.  
See https://github.com/bloodmc/GriefDefender/wiki/Debugging for more info.


**10. How do I allow my admins to bypass protection ?**  

Grant them access to use the `/ignoreclaims` command in order to toggle GriefDefender god-mode. 

**11. How do I allow essentials `/sethome` in only claims users are trusted in?**

Run the command `/cf command-execute essentials:sethome false default=user`

**12. How do I allow players to fly in their own claims?**

1. Deny flight globally in all claims by running command `/claimoption player-deny-flight true default=global`
2. Give players permission to use the `fly` command.
3. Assign the permission `griefdefender.admin.option.perk.fly.owner` to player or group.

**13. How do I give claim owners the ability to allow other players to fly in their claims?**

1. Admins need to assign all players the following perk permissions
```
griefdefender.admin.option.perk.fly.accessor
griefdefender.admin.option.perk.fly.builder
griefdefender.admin.option.perk.fly.container
griefdefender.admin.option.perk.fly.manager
```
Note: Don't forget to run `/gdreload` after changing permissions

These permissions allow the trusted player to fly in claims they are trusted to.

2. Have the claim owners trust players they wish to fly in their claims.