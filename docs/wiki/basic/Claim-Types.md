---
title: Claim Types
tag: Claim
category: claim
icon: type
---

_This is a work in progress page that will cover all claim types in GD - basic, subdivision, towns and admin claims._

## Claim Types
There are four types of user claims : admin, town, basic and subdivisions, with each having a 2D and 3D mode. To switch between types use `/adminclaims`, `/townclaims` and `/basicclaims`. To switch to subdivision mode, use `/claimsubdivide`. All three main claim types support direct child claims (subdivisions) - Town, Admin and Basic. 

Admin claims have no size limitations and different flags compared to basic claims which normal players can make. Towns can also be made by players, and supports the creation of basic claims within town claims. Basic claims are the go-to claim type for players, and can support a player's own management of claim flags. For more information, visit our [permission](https://github.com/bloodmc/GriefDefender/wiki/Permissions) page, which will help you assign proper permissions.

### Basic

Basic claims are the default claim type used for users.

A basic claim has the following capabilities  

* 5x5 size restriction in 2D mode. 5x5x5 size restriction in 3D mode.  
* Can be sold, rented, or transferred to another player.  
* Requires claim blocks.  

This is the default claim type mode when equipping the claiming tool (minecraft:golden_shovel).  
Note: Use `/basicclaims` or `/gd mode basic` to switch to this claim type mode.  

### Subdivision

Subdivision claims are used to subdivide top level claims such as basic/admin/town into smaller areas.

A subdivision claim has the following capabilities  

* 1x1 size restriction in 2D mode. 1x1x1 size restriction in 3D mode.
* Can be sold, rented, or transferred to another player.  
* Requires no claim blocks when created by owner. 

### Admin

Admin claims are the administrative tool by excellence. They can be overlapped over any claim type to enforce flags. To create an admin claim, the permission `griefdefender.admin.claim.command.admin-mode` is necessary. However, please note that `griefdefender.admin` is recommended - it'll allow the management of the admin typed claims.

An admin claim has the following capabilities  

* No size restrictions.
* Does not cost anything to create.
* Can be created around any existing claim.
* Can rented. 
* Used by administrators only.

Note: Use `/adminclaims` or `/gd mode admin` to switch to this claim type mode.

### Town Claims

Town claims are the third type of player claim introduced to GriefDefender. When holding the golden shovel, use `/townclaims`to switch to Town claim mode. Once created, town claims can house other basic claims, much like subdivisions to basic or admin claims.

A town claim has the following capabilities  

* 32x32 size restriction in 2D mode. 32x32x32 size restriction in 3D mode.
* Requires claim blocks.  
* Supports basic claims inside.  
* A creation limit of 1 which means you can only create 1 town by default.  
Note: This can be adjusted by changing `griefdefender.create-limit` to a value higher than 1 with `gd_claim_default=town` context. 

### Wilderness Claim

The wilderness claim is an administrative claim. It is automatically created on first time world load and uses any space not claimed by a user. It functions just like any other claim where you can assign flags and options to it. By default, all actions are allowed in the wilderness.