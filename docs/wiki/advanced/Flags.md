---
title: Flags
tag: Info
category: info
icon: flag
---

# Flags

Flags allow for very specific control of actions by Players or Groups both inside and outside of claims.  
Default Flags can be overridden or per claim specific Flags can be used.

Using `/cf` Provides you a UI to edit the default flags for the claim you are in.

Flags do not apply to the owner of a claim, this includes Admins in Wilderness or Admin claims.  
Use overrides if you want to force flags on all users in a claim type.

Note: Flag commands are just wrappers around LuckPerm's API. Everything set via GD flags, can be set directly using LP. See [Usage with LuckPerms](https://github.com/bloodmc/GriefDefender/wiki/Flags#usage-with-luckperms)  
Note: In order to use flags with command arguments, you must have the `griefdefender.advanced.admin.flags.*` permission. 

## Default Claim Flags
All default flags can be customized per claim type. Currently, GriefDefender supports default flags for Admin, Basic, Town and Wilderness. You can modify the defaults in `flags.conf` and `presets/minecraft.conf`.

## Index

* [Commands](https://github.com/bloodmc/GriefDefender/wiki/Flags#commands)
  * [Arguments](https://github.com/bloodmc/GriefDefender/wiki/Flags#arguments)
  * [Commandlist](https://github.com/bloodmc/GriefDefender/wiki/Flags#commandlist)
* [Usage Examples](https://github.com/bloodmc/GriefDefender/wiki/Flags#usage-examples)
* [Usage with LuckPerms](https://github.com/bloodmc/GriefDefender/wiki/Flags#usage-with-luckperms)
* [Available Flags](https://github.com/bloodmc/GriefDefender/wiki/Flags#available-flags)


## Contexts

All flags require one or more contexts when applied as a permission in LuckPerms.  
See https://github.com/bloodmc/GriefDefender/wiki/Contexts on what contexts you can use and how they work.  

## Commands

### Arguments

`<mandatory> [optional]`

| Arguments | Description |
| --------- | ----------- |
| `<flag>` | The action or event to manage [`flag`](#available-flags) |
| `<target>` | What is to be affected by the action ie. `minecraft:dirt`. Use `any` or `modid:any` as wildcard.|
| `<value>` | Whether to allow, deny or remove the flag `false\|undefined\|true` , instead of `undefined` you can use `0` |
| `[key=value]`| Optional current contexts:<br>`override=type` will apply it to all claims of that type.<br>`default` will set as default for type you're standing in so all newly created claims will get that flag<br>`source` what triggers the flag ie. `minecraft:player`<br>`used_item` The used item of player<br>Ex. `/cf entity-damage pig false used_item=diamond_sword override=basic` This would deny damage to a pig only when a diamond sword is used in a basic claim|

### Commandlist
___
#### `/gd claim debug`
**Aliases**: `cfd|claimflagdebug`

Toggles claim flag debug mode. Used to test flags in claims as a user with no permissions.

___
#### `/gd flag claim [<flag> <target> <value> [contexts]`
**Aliases**: `cf|claimflag`

Edits flags, can apply to claim types or specific claims.

Note: reason is only supported in Wilderness claim when using override context to ban usage in ALL claim types.

___
#### `/gd flag group <group> [<flag> <target> <value> [contexts]`
**Aliases**: `cfg|claimflaggroup`

Edits flags that apply to a group.

___
#### `/gd flag player <player> [<flag> <target> <value> [contexts]`
**Aliases**: `cfp|claimflagplayer`

Edits flags that apply to a player.

___
#### `/gd flag reset`
**Aliases**: `cfr|claimflagreset`

Resets a claim to flag defaults, the defaults can be edited in the configs.

## Usage Examples

Flags can be applied to Players, Groups with or without a specific claim context. They can also be applied to all Basic|Wilderness|Admin Claims directly. More examples can be found in-game, just run `/cf` and hover over the different flags!

### Example 1

To prevent any source from breaking lime wool blocks, in the claim you are standing in.  
`/cf block-break minecraft:wool.5 false`

Specifying no modid will always default to minecraft. The format for blocks is `modid:blockid.meta`, if meta sn't specified 0 is used.


### Example 2

To allow Pixelmon Pokeballs to interact with any blocks in all basic claims, has to be run while standing in a basic claim.

`/cf projectile-impact-block any true source=pixelmon:occupiedpokeball override=basic`

### Example 3

To prevent only players from using portals that are in the group "Jailed" in all admin claims. Has to execute while standing in an admin claim.

`/cfg Jailed portal-use any false source=minecraft:player override=admin`

### Example 4

To prevent a player called "notch" from rightlicking any bed, in the claim you are standing in.

`/cfp notch interact-block-secondary minecraft:bed false`

### Example 5
To prevent pixelmon's command '/shop select' from being run, in the claim you are standing in.

`/cf command-execute pixelmon:shop[select] false`

### Example 6
To prevent a specific item to be right-clicked on an entity.

`/cf interact-entity-secondary entity_id false used_item=<item_id>`

Note: Use `interact-entity-primary` for left-click

### Example 7
To prevent a specific item to be right-clicked on a block.

`/cf interact-block-secondary block_id false used_item=<item_id>`

Note: Use `interact-block-primary` for left-click

## Usage with LuckPerms

### Example 1
Disable animal damage in all basic claim's for group `starters`

GD:  
```
/cfg starters entity-damage #animal false default=basic
```

LP: 
```
/lp group starters permission set griefdefender.flag.entity-damage false gd_claim_default=basic target=#animal
```


## Available Flags
All Info provided inside () will be one of the examples.

**_The most current list will always be available [here](https://github.com/bloodmc/GriefDefenderAPI/blob/master/src/main/java/com/griefdefender/api/permission/flag/Flags.java)._**
- **block-break** - Use to manage block breaking (Allowing to break a Dirt Block)
- **block-grow** - Use to manage block growth
- **block-modify** - Used to manage block modifications such as ice melting.
- **block-place** - Use to manage block placing (Allowing to place a Dirt Block)
- **block-spread** - Use to manage things spreading from one block to another(Fire spread, vine growth etc)
- **command-execute** - Use to manage execution of commands (Doing /msg inside claim)
- **command-execute-pvp** - Use to manage execution of commands made by a player during PvP combat.  
- **enter-claim** - Use to manage entering claims (Not Allowing a Random Player to walk into the Claim)
- **collide-block** - Use to manage collisions with blocks (Colliding with pressure plates)
- **collide-entity** - Use to manage collisions with entities (Colliding with a Pixelmon)
- **entity-chunk-spawn** - Use to manage entity spawns during chunk load.  (Note: Not used on Bukkit platform due to no event)
- **entity-damage**[<sup>1</sup>](#note1) - Use to manage damage taken by entities (A Zombie hurting Random Player)
- **entity-riding**[<sup>1</sup>](#note1) - Use to manage riding of entities (Riding Horses,Pixelmon,Boats,etc)
- **entity-spawn**[<sup>1</sup>](#note1) - Use to manage entity spawning (This includes any spawn into the world including chunk spawns.)
- **entity-teleport-from**[<sup>1</sup>](#note1) - Use to manage entity teleporting from claim (An Enderman teleporting from inside the claim)
- **entity-teleport-to**[<sup>1</sup>](#note1) - Use to manage entity teleporting inside claim (An Enderman teleporting to inside the claim)
- **exit-claim** - Use to manage exiting claims (Not allowing Random Player to walk out of claim)
- **explosion-block** - Use to manage explosions affecting blocks
- **explosion-entity** - Use to manage explosions affecting entities
- **interact-block-primary** - Use to manage left-click interaction with blocks (Hitting a Dragon Egg)
- **interact-block-secondary** - Use to manage right-click interaction with blocks (Opening a Pixelmon PC)
- **interact-entity-primary**[<sup>1</sup>](#note1) - Use to manage left-click interaction with entities (Hitting a Chicken to deal damage)
- **interact-entity-secondary**[<sup>1</sup>](#note1) - Use to manage right-click interaction with entities (Feeding seeds to Chicken)
- **interact-inventory** - Use to manage interaction with inventories (Being able to open Chest)
- **interact-inventory-click** - Use to manage interaction when clicking slots in inventory. (Used to block crafting)
- **interact-item-primary** - Use to manage left-click interaction with items ()
- **interact-item-secondary** - Use to manage right-click interaction with items ()
- **inventory-item-move** - Use to manage item movement from hoppers.  (Note: Currently not used due to performance impact)
- **item-drop** - Use to manage Players dropping items (Random Player not being able to drop a dirt block)
- **item-pickup** - Use to manage picking up dropped items (Random Player not being to pick up a dropped dirt block)
- **item-spawn** - Use to manage spawning of items from blocks or items in the world (Like Pixelmon Gift Box)
- **item-use** - Use to manage use of items (Random player using potions|Ender pearls|Exp all)
- **leaf-decay** - Use to manage leaf decay on trees.  
- **liquid-flow** - Use to manage liquid flow (Control the flow of water or lava flow)
- **portal-use** - Use to manage use portals (Control the use of Nether portals)
- **projectile-impact-block** - Use to manage a projectile hitting a block (When an arrow hits a dirt block)
- **projectile-impact-entity**[<sup>1</sup>](#note1) - Use to manage a projectile hitting a entity (When an arrow hits a Pixelmon|Mobs)

## Custom GD context group types

GD provides a few context group types that can be used to specify all of a type of something, for instance all monsters.  
> **Note: Starting with MC versions 1.14+, GD integrates with vanilla's tag system. It is highly recommended to use the vanilla tag system. See https://minecraft.gamepedia.com/Tag for more information and https://minecraft.gamepedia.com/Tutorials/Creating_a_data_pack for more info.

### Available Keys

- #any
- #ambient
- #animal
- #aquatic
- #crops
- #food
- #hanging
- #monster
- #pet
- #vehicle

### Example 1

To prevent all monsters from entering admin claims by default.  
`/cf enter-claim #monster false default=admin`  
or  
`/cf enter-claim false default=admin target=#monster`

### Notes
<a name="note1"><sup>1</sup></a> Entity type (`modid:monster|aquatic|ambient|animal`) may also be used to target all entities of that type from a specific mod.


## Flag Control  
The flag control section lets you enable/disable flag functionality on a per-flag basis. By default, all flags are enabled. If you have no use for a specific flag, set the flag to false in this section.  

```
# Controls which flags are enabled.
# Note: Disabling a flag will cause GD to bypass all functionality for it.
# Note: If you want full protection, it is recommended to keep everything enabled.
flag-control {
    block-break=true
    block-grow=true
    block-modify=true
    block-place=true
    block-spread=true
    collide-block=true
    collide-entity=true
    command-execute=true
    command-execute-pvp=true
    enter-claim=true
    entity-chunk-spawn=true
    entity-damage=true
    entity-riding=true
    entity-spawn=true
    entity-teleport-from=true
    entity-teleport-to=true
    exit-claim=true
    explosion-block=true
    explosion-entity=true
    interact-block-primary=true
    interact-block-secondary=true
    interact-entity-primary=true
    interact-entity-secondary=true
    interact-inventory=true
    interact-inventory-click=true
    interact-item-primary=true
    interact-item-secondary=true
    inventory-item-move=true
    item-drop=true
    item-pickup=true
    item-spawn=true
    item-use=true
    leaf-decay=true
    liquid-flow=true
    portal-use=true
    projectile-impact-block=true
    projectile-impact-entity=true
}
```