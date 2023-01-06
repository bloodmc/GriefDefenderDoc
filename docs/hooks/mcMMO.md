---
title: mcMMO
tag: Info
category: hooks
icon: quill
---

The following extensions have been added for [mcMMO](https://mcmmo.org/#home) in GriefDefender

![Claim Options Preview](https://i.imgur.com/d38LRkv.gif)

Manage from `/claimoption` or more information in the dedicated section [Options](/wiki/basic/Options.html)  

## Setup

### Install mcMMO Flag Definition  

* [presets/mcmmo.conf](https://raw.githubusercontent.com/bloodmc/GriefDefenderDefinitions/master/mcMMO/presets/mcmmo.conf)

Right click on the page and select "Save as", save as `mcmmo.conf` in `config/griefdefender/presets`

* [lang/presets/mcmmo/en_US.conf](https://raw.githubusercontent.com/bloodmc/GriefDefenderDefinitions/master/mcMMO/lang/presets/mcmmo/en_US.conf) ([pt_BR](#))

Right click on the page and select "Save as", save as `en_US.conf` in `config/griefdefender/lang/presets/mcmmo`    

After doing both, `/gdreload`  

Execute command `/claimoption` and you should see a new preset named `mcmmo`. Click that to load and configure per claim as needed.  

Note: If you do not see the preset in GUI, make sure the files above end in `.conf`.  

See [Flag Definitions GUI](/wiki/basic/Flag-Definitions-GUI.html) for more info on how to work with presets and default settings for flags.  

## Flags

- `ability-activate` - Controls whether or not a mcmmo ability can be activated in claim.
The following contexts are supported by this flag
    - `mcmmo:skill_level` - The skill level of mcmmo player
    - `mcmmo:skill_type` - The skill type.
* `player-disarm` - Controls whether or not a player can be disarmed in claim.
- `rupture-damage` - Controls whether or not rupture damage can be applied in claim.
The following contexts are supported by this flag
    - `mcmmo:damage_amount` - The damage amount of rupture.
- `skill-use` - Controls whether or not a mcmmo skill can be used in claim.
The following contexts are supported by this flag
    - `mcmmo:brewing_block` - The brewing block used during alchemy brew event.
    - `mcmmo:brewing_ingredient` - The brewing ingredient used during alchemy brew event.
    - `mcmmo:repair_amount` - The repair amount used during repair check event.
    - `mcmmo:repair_material` - The repair material used during repair check event.
    - `mcmmo:repar_object` - The object that was repaired.
    - `mcmmo:salvage_item` - The salvaged item during salvage event.
    - `mcmmo:skill_level` - The skill level of mcmmo player
    - `mcmmo:skill_type` - The skill type.
    - `mcmmo:speed` - The speed during player catalysis event.

## Options

* `death-penalty` - Controls whether or not the death penalty will be applied in claim.
* `xp-gain-modifier` - Controls the xp gain modifier applied to player in claim.
The following contexts are supported by this option
    - `mcmmo:skill_level` - The skill level of mcmmo player
    - `mcmmo:skill_type` - The skill type.
    - `mcmmo:reason` - The reason for xp gained.

## Party

Joining a party will grant accessor trust to mcmmo party in all owned claims.  
Joining an ally will grant accessor trust to mcmmo ally in all owned claims.  
Leaving a party will remove all trust to mcmmo party in all owned claims.  
Removing an ally will remove all trust to mcmmo ally in all owned claims.  
To trust a party, use GD's `/trustgroup` command.  
Ex.

`/trustgroup <partyname> <trust_type>`

`/trustgroup mmoparty builder`

## Debug

All mcmmo flags will show up in [GriefDefender's debug](/wiki/advanced/Debugging.html) just like any other flag.