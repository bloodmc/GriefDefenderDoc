---
title: Optimizations
tag: Info
category: info
icon: optimization-timer
---

GriefDefender provides built-in control for nearly every action in your minecraft world. However, attempting to control too much can sometimes cause resource issues depending on your server load. The solution to this issue is to make use of built-in optimization configuration found in [`global.conf`](/wiki/advanced/Global-Config.html) and by learning how to use [blacklists](/wiki/Configuration.html#blacklist). 

## Use Aikar's Flags
Aikar's flags are an optimized set of flags that can increase your server's performance with little effort on your part. By default, Java's garbage collector is not optimized for running Minecraft servers, but Aikar's flags is a set of tuned flags that is specifically designed for running Minecraft servers. These flags will reduce your server's pause times due to garbage collection and will cause the JVM to avoid lengthy old-gen garbage collection cycles.  
See [PaperMC - Aikar's Flags](https://docs.papermc.io/paper/aikars-flags)  

### Global Optimization config

Below is a snippet of the [optimization](/wiki/advanced/Global-Config.html#optimization) settings you can find in GD's [`global.conf`](/wiki/advanced/Global-Config.html)

<details>
  <summary>Global Optimization Config</summary>

```
    optimization {
    # Whether to process player claim tool actions async for performance. (Default: true)
    # Note: If you encounter any async thread issues, disable this setting.
    async-claim-tool-actions=true
    # Whether to process player claim visuals async for performance. (Default: true)
    # Note: If you encounter any async thread issues, disable this setting.
    async-player-claim-visuals=true
    # Controls whether to ignore item drops from block sources.
    # Note: This is only triggered when a player breaks a block.
    block-item-drops=true
    # Controls the amount of time, in seconds, for the permission cache of all entity damage actions in world. If the cache is accessed before expiration then the time is reset.
    # Note: Setting this too high may result in wrong entity damage permission results.
    cache-entity-damage-expiration=5
    # Controls the amount of time, in seconds, for the permission lookup cache of all actions in world. If the cache is accessed before expiration then the time is reset.
    # Note: This cache will occur after special caches such as entity damage, explosions, and physics.
    # Note: Setting this too high may result in players not seeing proper results with their actions.
    cache-permission-lookup-expiration=3
    # Controls the amount of time, in seconds, for the permission cache of all block physic changes in world.
    # Note: Blocks such as redstone will usually cache longer due to the repeated calls made.
    # Note: Setting this too high may result in players not being tracked properly during block changes.
    cache-physics-tracking-expiration=5
    # Controls whether dispener item spawns are ignored.
    dispenser-item-spawns=true
    # Controls whether entity damage events that contain both a source/target living passive entity, such as two animals fighting, are ignored.
    entity-damage-living-passive=true
    # Controls whether entity damage events that contain both a source/target monster are ignored.
    entity-damage-monster=true
    # Controls whether entity damage events that contain a monster and other entity, except players, are ignored.
    entity-damage-monster-other=true
    # Controls whether entity damage source or block that target a living passive are ignored.
    entity-damage-source-living-passive=true
    # Controls whether entity damage source or block that target a monster are ignored.
    entity-damage-source-monster=true
    # Controls whether an entity interacting with a block is ignored.
    entity-interact-block=true
    # Controls whether entity item pickups made by non-players are ignored.
    entity-item-pickup-non-player=true
    # Controls whether non-player falls are ignored.
    fall-non-player=true
    # Controls whether monster attacks against a player are ignored.
    # Note: This does not include explosion damage.
    # Note: If you need to prevent damage from monsters in claims then this should remain false.
    monster-player-damage=false
    # Controls whether player attacks against a monster are ignored.
    # Note: This does not include explosion damage.
    player-monster-damage=true
    # Controls whether ambient spawns, such as bats, are ignored in wilderness.
    # Note: If you want to control aquatic spawns in wilderness, set this to false.
    wilderness-ambient-spawns=true
    # Controls whether animal spawns, such as pigs, are ignored in wilderness.
    # Note: If you want to control animal spawns in wilderness, set this to false.
    wilderness-animal-spawns=true
    # Controls whether aquatic spawns, such as squids, are ignored in wilderness.
    # Note: If you want to control aquatic spawns in wilderness, set this to false.
    wilderness-aquatic-spawns=true
    # Controls whether liquid flow is ignored in wilderness.
    # Note: If you want to control liquid flow in wilderness, set this to false.
    wilderness-liquid-flow=true
    # Controls whether monster spawns, such as creepers, are ignored in wilderness.
    # Note: If you want to control monster spawns in wilderness, set this to false.
    wilderness-monster-spawns=true
    # Controls whether experience orbs are ignored when dropped.
    xp-orb-drop=true
    }
```

</details>


### Optimization Contributions

Below you will find user contributed configs for servers that have worked heavily on improving GD performance for their needs

### IMPORTANT
:::: warning Warning
These settings are tweaked for individual servers and may not work on yours. It is HIGHLY recommended to test these configs before using them in production.  
The blacklist system supports [`tags`](/wiki/basic/Tags.html)  
:::: 

## Dino's Optimization

<details>
  <summary>Dino's Blacklist</summary>

```
blacklist {
    # A global list of entity damage sources that are ignored in events by default.
    # https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageEvent.DamageCause.html
        entity-damage-source-blacklist=[
            contact,
            cramming,
            drowning,
            "falling_block",
            flyintowall,
            "fire_tick",
            "hot_floor",
            poison,
            starvation,
            suffocation,
            suicide,
            void
    ]
        # A list of id's ignored by flags.
        flag-id-blacklist {
            block-break=[]
            block-grow=[]
            block-modify=[
                "minecraft:water",
                "minecraft:dirt",
                "minecraft:big_dripleaf",
                "minecraft:grass_block",
                "minecraft:warped_nylium",
                "minecraft:netherrack",
                "minecraft:ice"
            ]
            block-place=[
                "minecraft:snow"
            ]
            block-pre=[]
            block-spread=[
                "minecraft:vine",
                "minecraft:grass_block",
                "minecraft:mycelium",
                "minecraft:twisting_vines",
                "minecraft:weeping_vines"
            ]
            collide-block=[]
            collide-entity=[]
            command-execute=[]
            command-execute-pvp=[]
            enter-claim=[
                "minecraft:hopper_minecart"
            ]
            entity-chunk-spawn=[]
            entity-damage=[]
            entity-riding=[
                "minecraft:minecart"
            ]
            entity-spawn=[
                "minecraft:axolotl",
                "minecraft:bat",
                "minecraft:squid",
                "minecraft:pig",
                "minecraft:cow",
                "minecraft:sheep",
                "minecraft:egg",
                "minecraft:chicken",
                "minecraft:rabbit",
                "minecraft:bee",
                "minecraft:cat",
                "minecraft:fox",
                "minecraft:horse",
                "minecraft:cod",
                "minecraft:dolphin",
                "minecraft:firework_rocket",
                "minecraft:turtle",
                "minecraft:glow_squid",
                "minecraft:fishing_bobber",
                "minecraft:salmon",
                "minecraft:snowball",
                "minecraft:trident"
            ]
            entity-teleport-from=[]
            entity-teleport-to=[]
            exit-claim=[
                "minecraft:hopper_minecart"
            ]
            explosion-block=[]
            explosion-entity=[]
            interact-block-primary=[]
            interact-block-secondary=[
                "minecraft:#banners",
                "minecraft:#logs",
                "minecraft:#planks",
                "minecraft:#saplings",
                "minecraft:#signs",
                "minecraft:#wooden_slabs",
                "minecraft:#wooden_stairs",
                "minecraft:#walls",
                "minecraft:#shulker_boxes",
                "minecraft:#cauldrons",
                "minecraft:#rails",
                "minecraft:#deepslate_blocks",
                "minecraft:#dirt",
                "minecraft:#sand",
                "minecraft:#terracotta",
                "minecraft:#small_flowers",
                "minecraft:#tall_flowers",
                "minecraft:#climbable",
                "minecraft:#gold_ores",
                "minecraft:#wool",
                "minecraft:stone",
                "minecraft:dirt",
                "minecraft:deepslate",
                "minecraft:spruce_fence",
                "minecraft:oak_leaves",
                "minecraft:basalt",
                "minecraft:grass_block",
                "minecraft:andesite",
                "minecraft:#corals"
            ]
            interact-entity-primary=[
                "minecraft:minecart"
            ]
            interact-entity-secondary=[
                "minecraft:minecart"
            ]
            interact-inventory=[]
            interact-inventory-click=[]
            interact-item-primary=[]
            interact-item-secondary=[]
            inventory-item-move=[]
            item-drop=[]
            item-pickup=[]
            item-spawn=[]
            item-use=[]
            leaf-decay=[]
            liquid-flow=[
                "minecraft:water"
            ]
            portal-use=[]
            projectile-impact-block=[
                "minecraft:arrow",
                "minecraft:trident"
            ]
            projectile-impact-entity=[
                "minecraft:ender_pearl"
            ]
        }
        # A global list of source id's that are ignored by events. 
        # Note: This only affects events where the id specified is the source.
        global-source=[]
        # A global list of target id's that are ignored by events. 
        # Note: This only affects events where the id specified is the target.
        global-target=[]
    }
```
</details>

<details>
  <summary>Dino's Flag Control</summary>

```
    flag-control {
        block-break=true
        block-grow=false
        block-modify=true
        block-place=true
        block-spread=false
        collide-block=false
        collide-entity=false
        command-execute=false
        command-execute-pvp=false
        enter-claim=true
        entity-chunk-spawn=false
        entity-damage=true
        entity-riding=true
        entity-spawn=true
        entity-teleport-from=false
        entity-teleport-to=false
        exit-claim=true
        explosion-block=true
        explosion-entity=false
        interact-block-primary=false
        interact-block-secondary=true
        interact-entity-primary=false
        interact-entity-secondary=true
        interact-inventory=true
        interact-inventory-click=false
        interact-item-primary=false
        interact-item-secondary=false
        inventory-item-move=true
        item-drop=false
        item-pickup=false
        item-spawn=false
        item-use=false
        leaf-decay=false
        liquid-flow=true
        portal-use=false
        projectile-impact-block=true
        projectile-impact-entity=true
    }
```
</details>

<details>
  <summary>Dino's Option Control</summary>

```
    option-control {
        player-command-enter=false
        player-command-exit=false
        player-deny-flight=false
        player-deny-godmode=false
        player-deny-hunger=false
        player-fly-speed=false
        player-gamemode=false
        player-health-regen=false
        player-item-drop-lock=false
        player-keep-inventory=false
        player-keep-level=false
        player-teleport-cost=false
        player-teleport-delay=false
        player-walk-speed=false
        player-weather=false
        pvp=false
        pvp-combat-command=false
        pvp-combat-teleport=false
        pvp-combat-timeout=false
        pvp-item-drop-lock=false
        raid=false
        spawn-limit=false
    }
```
</details>

<details>
  <summary>Dino's Known Issues</summary>

```
- Water can grief claims from outside going in of region claims (removing water from the liquid flow blacklist flag will prevent that but keep in mind that active water flow has a big performance impact)
- Players can activate wooden pressure plates by dropping an item on them
- Players can shear other peoples sheep
- Players can leash entities in other people claims (mostly an issue if you use a plugin that leases villagers and other entities that is not possible with vanilla minecraft)
- Creepers can kill entities in claims
- Players can interact with item frames only when they interact with an item in hand (spin around the items)
```
</details>

<hr>

## FITFC's Optimization

:::: note Recommendation
if you are going to create new flags, remove this optimization and leave the GD default, as the optimizations remove some events from gddebug.  
These optimizations were focused on a server that tries its best to get close to vanilla - Last revision 1.20.1  
* [Optimization for PixelMon](/mods/Pixelmon.html#fitfc-s-optimization-for-pixelmon)
::::

<details>
  <summary>FIT's Blacklist</summary>

```
GriefDefender {
    # A global list of entity damage sources that are ignored in events by default.
    # https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageEvent.DamageCause.html
    entity-damage-source-blacklist=[
        "block_explosion",
        contact,
        cramming,
        "dragon_breath",
        drowning,
        dryout,
        "falling_block",
        fall,
        fire,
        "fly_into_wall",
        lava,
        melting,
        "fire_tick",
        "hot_floor",
        poison,
        "sonic_boom",
        starvation,
        suffocation,
        suicide,
        void
    ]
    # A list of id's ignored by flags.
    flag-id-blacklist {
        block-break=[]
        block-grow=[
    # Trees generate noise, which can cause a slight lag on the server, if you want to control it, comment.
            "minecraft:oak_leaves",
            "minecraft:spruce_leaves",
            "minecraft:birch_leaves",
            "minecraft:jungle_leaves",
            "minecraft:acacia_leaves",
            "minecraft:dark_oak_leaves",
            "minecraft:mangrove_leaves",
            "minecraft:azalea_leaves",
            "minecraft:flowering_azalea_leaves",
            "minecraft:cherry_leaves",
            "minecraft:oak_log",
            "minecraft:spruce_log",
            "minecraft:birch_log",
            "minecraft:jungle_log",
            "minecraft:acacia_log",
            "minecraft:dark_oak_log",
            "minecraft:mangrove_log",
            "minecraft:cherry_log",
            "minecraft:cherry_sapling",
            "minecraft:oak_sapling",
            "minecraft:spruce_sapling",
            "minecraft:birch_sapling",
            "minecraft:jungle_sapling",
            "minecraft:acacia_sapling",
            "minecraft:dark_oak_sapling",
    # Plants generate noise, which can cause a slight lag on the server, if you want to control it, comment.
            "minecraft:pumpkin",
            "minecraft:melon",
            "minecraft:wheat",
            "minecraft:sugar_cane",
            "minecraft:beetroots",
            "minecraft:cactus",
            "minecraft:carrots",
            "minecraft:potatoes",
            "minecraft:#mushroom",
            "minecraft:grass",
            "minecraft:podzol",
            "minecraft:sweet_berry_bush",
            "minecraft:air"
    # If you want to block crop growth via /claimflags, comment above.
        ]
        block-modify=[
    # Redstone ores change state to create the glow.
            "minecraft:deepslate_redstone_ore",
            "minecraft:redstone_ore",
    # frosted ice is in relation to the enchantment of Frost Walker, only to remove the player's permission to generate minecraft:ice in the waters.
            "minecraft:frosted_ice",
            "minecraft:grass_block",
            "minecraft:dirt",
            "minecraft:weathered_*",
            "minecraft:netherrack",
            "minecraft:big_dripleaf",
            "minecraft:farmland",
            "minecraft:warped_nylium",
            "minecraft:ice",
            "minecraft:villager",
            "minecraft:sheep",
            "minecraft:fox",
        # Comment if you want players/foxes not to get minecraft:sweet_berry
            "minecraft:sweet_berry_bush"
        ]
        block-place=[
    # Enable it if you experience lag with RealisticSeasons, however this will allow other players to be able to claim minecraft:snow for others.
            #"minecraft:snow"
        ]
        block-pre=[]
        block-spread=[
            "minecraft:bamboo",
    # if you want to use /claimflags in the vine-growth section, comment minecraft:vine.
            "minecraft:vine",
            "minecraft:cave_vines",
            "minecraft:cave_air",
            "minecraft:glow_lichen",
            "minecraft:grass_block",
            "minecraft:mycelium",
            "minecraft:twisting_vines",
            "minecraft:brown_mushroom",
            "minecraft:budding_amethyst",
            "minecraft:weeping_vines",
            "minecraft:kelp",
            "minecraft:air"
        ]
        collide-block=[
    # This makes the big dripleaf interact with the player always, if you want to control it, comment.
            "minecraft:big_dripleaf"
        ]
        collide-entity=[]
        command-execute=[]
        command-execute-pvp=[]
        enter-claim=[
    # Monsters and Minecart generate a lot of noise, if you want to control it, comment them all.
            "#minecraft:monster",
            "minecraft:minecart",
            "minecraft:hopper_minecart",
            "minecraft:chest_minecart",
            "minecraft:furnace_minecart",
            "minecraft:tnt_minecart"
        ]
        entity-chunk-spawn=[]
        entity-damage=[
            "minecraft:fire",
            "minecraft:lava",
            "minecraft:fall",
            "minecraft:freeze"
        ]
        entity-riding=[
    # Horses by default already have mount protection.
            "minecraft:horse",
        ]
        entity-spawn=[
    # minecraft:armor_stand Some plugins like Hologram/Damage Indicators plugins generate these entities, which end up generating lag in GD because there are too many events to check, if you use it, comment.
            "minecraft:armor_stand",
    # comment out all peaceful animals to control their spawn in /cf
            "minecraft:axolotl",
            "minecraft:bat",
            "minecraft:squid",
            "minecraft:pig",
            "minecraft:cow",
            "minecraft:sheep",
            "minecraft:egg",
            "minecraft:chicken",
            "minecraft:rabbit",
            "minecraft:bee",
            "minecraft:cat",
            "minecraft:fox",
            "minecraft:horse",
    # comment out all aquatic animals to control their spawn in /cf
            "minecraft:cod",
            "minecraft:dolphin",
            "minecraft:firework_rocket",
            "minecraft:fireworks",
            "minecraft:turtle",
            "minecraft:glow_squid",
            "minecraft:tropical_fish",
            "#minecraft:fishes",
            "#minecraft:ambient",
            "minecraft:fishing_bobber",
            "minecraft:salmon",
            "minecraft:snowball",
            "minecraft:trident",
            "minecraft:xp_orb",
    # comment if you want to control phantom spawn in claims.
            "minecraft:phantom",
            "minecraft:sniffer",
            "spawnreason:village_defense"
        ]
        entity-teleport-from=[
    # If you use any teleport plugins that are giving you problems like elevator plugins, enable this.
            #"minecraft:plugin"
        ]
        entity-teleport-to=[
    # If you use any teleport plugins that are giving you problems like elevator plugins, enable this.
            #"minecraft:plugin"
        ]
        exit-claim=[
            "#minecraft:monster",
            "minecraft:minecart",
            "minecraft:hopper_minecart",
            "minecraft:chest_minecart",
            "minecraft:furnace_minecart",
            "minecraft:tnt_minecart"
        ]
        explosion-block=[]
        explosion-entity=[]
        interact-block-primary=[]
    # Avoid adding anything in interact-block-secondary as it creates vulnerabilities in the protection.
        interact-block-secondary=[]
        interact-entity-primary=[]
        interact-entity-secondary=[
            "minecraft:falling_block"
        ]
        interact-inventory=[
    # This makes the inventory of these blocks public, comment if you want to control.
            "minecraft:crafting_table",
            "minecraft:stonecutter",
            "minecraft:grindstone",
            "minecraft:smithing_table",
            "minecraft:cartography_table",
            "minecraft:loom",
            "minecraft:ender_chest",
            "minecraft:enchanting_table"
        ]
        interact-inventory-click=[
    # This makes the inventory of these blocks public, comment if you want to control.
            "minecraft:crafting",
            "minecraft:crafting_table",
            "minecraft:stonecutter",
            "minecraft:grindstone",
            "minecraft:smithing_table",
            "minecraft:cartography_table",
            "minecraft:loom",
            "minecraft:ender_chest",
            "minecraft:enchanting_table"
        ]
        interact-item-primary=[]
        interact-item-secondary=[
            "minecraft:ender_pearl",
            "minecraft:firework_rocket",
            "minecraft:#food",
            "minecraft:spyglass",
            "#food"
        ]
        inventory-item-move=[]
        item-drop=[]
        item-pickup=[]
        item-spawn=[]
        item-use=[
            "minecraft:#food",
            "minecraft:any",
            "#any",
            "minecraft:player",
            "#food"
        ]
        leaf-decay=[]
        liquid-flow=[]
        portal-use=[]
        projectile-impact-block=[]
        projectile-impact-entity=[
            "minecraft:ender_pearl"
        ]
    }
    # A global list of source id's that are ignored by events. 
    # Note: This only affects events where the id specified is the source.
    global-source=[]
    # A global list of target id's that are ignored by events. 
    # Note: This only affects events where the id specified is the target.
    global-target=[]
}
```
</details>

<details>
  <summary>FIT's Flag Control</summary>

```
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
        entity-chunk-spawn=false
        entity-damage=true
        entity-riding=true
        entity-spawn=true
        entity-teleport-from=false
        entity-teleport-to=false
        exit-claim=true
        explosion-block=true
        explosion-entity=true
        interact-block-primary=true
        interact-block-secondary=true
        interact-entity-primary=true
        interact-entity-secondary=true
        interact-inventory=true
        interact-inventory-click=false
        interact-item-primary=true
        interact-item-secondary=true
        inventory-item-move=true
        item-drop=true
        item-pickup=true
        item-spawn=true
        item-use=true
        leaf-decay=false
        liquid-flow=true
        portal-use=false
        projectile-impact-block=true
        projectile-impact-entity=true
    }
```
</details>

<details>
  <summary>FIT's Option Control</summary>

```
    option-control {
        player-command-enter=false
        player-command-exit=false
        player-deny-flight=false
        player-deny-godmode=false
        player-deny-hunger=false
        player-fly-speed=false
        player-gamemode=false
        player-health-regen=false
        player-item-drop-lock=false
        player-keep-inventory=false
        player-keep-level=false
        player-teleport-cost=false
        player-teleport-delay=false
        player-walk-speed=false
        player-weather=true
        pvp=true
        pvp-combat-command=false
        pvp-combat-teleport=false
        pvp-combat-timeout=false
        pvp-item-drop-lock=false
        raid=true
        spawn-limit=false
    }
```
</details>

<details>
  <summary>FIT's Known Issues</summary>

```
- Do not block teleportation caused by plugins
- big_dripleaf moves when a player interacts with it
- Does not disable vine/grass/crop growth
- Is it possible to get fruits from sweet_berry
- Other problems are being cataloged
```
</details>

## GriefDefender Default

<hr>
Version based on build file: GriefDefender 2.5.5
<hr>

<details>
  <summary>GD Blacklist</summary>

```
GriefDefender {
    # A global list of entity damage sources that are ignored in events by default.
    entity-damage-source-blacklist=[
        contact,
        cramming,
        drowning,
        "falling_block",
        flyintowall,
        fire,
        "fire_tick",
        "hot_floor",
        poison,
        starvation,
        suffocation,
        suicide,
        void
    ]
    # A list of id's ignored by flags.
    flag-id-blacklist {
        block-break=[
            "minecraft:fire"
        ]
        block-grow=[]
        block-modify=[
            "minecraft:weathered_*",
            "minecraft:netherrack",
            "minecraft:farmland",
            "minecraft:sheep",
            "minecraft:dirt",
            "minecraft:frosted_ice"
        ]
        block-place=[]
        block-spread=[
            "minecraft:vine",
            "minecraft:grass_block",
            "minecraft:mycelium",
            "minecraft:twisting_vines",
            "minecraft:weeping_vines",
            "minecraft:kelp"
        ]
        collide-block=[]
        collide-entity=[]
        command-execute=[]
        command-execute-pvp=[]
        enter-claim=[]
        entity-chunk-spawn=[]
        entity-damage=[]
        entity-riding=[]
        entity-spawn=[]
        entity-teleport-from=[]
        entity-teleport-to=[]
        exit-claim=[]
        explosion-block=[]
        explosion-entity=[]
        interact-block-primary=[]
        interact-block-secondary=[]
        interact-entity-primary=[]
        interact-entity-secondary=[
            "minecraft:villager",
            "minecraft:falling_block"
        ]
        interact-inventory=[]
        interact-inventory-click=[]
        interact-item-primary=[]
        interact-item-secondary=[]
        inventory-item-move=[]
        item-damage=[]
        item-drop=[]
        item-pickup=[]
        item-spawn=[]
        item-use=[]
        leaf-decay=[]
        liquid-flow=[]
        portal-use=[]
        projectile-impact-block=[]
        projectile-impact-entity=[
            "minecraft:ender_pearl"
        ]
    }
    # A global list of source id's that are ignored by events. 
    # Note: This only affects events where the id specified is the source.
    global-source=[]
    # A global list of target id's that are ignored by events. 
    # Note: This only affects events where the id specified is the target.
    global-target=[]
}
```

</details>

<details>
  <summary>GD Flag Control</summary>

```
    flag-control {
        block-break=true
        block-grow=false
        block-modify=true
        block-place=true
        block-spread=true
        collide-block=true
        collide-entity=true
        command-execute=true
        command-execute-pvp=false
        enter-claim=true
        entity-chunk-spawn=false
        entity-damage=true
        entity-riding=true
        entity-spawn=true
        entity-teleport-from=true
        entity-teleport-to=true
        exit-claim=true
        explosion-block=true
        explosion-entity=true
        interact-block-primary=false
        interact-block-secondary=true
        interact-entity-primary=true
        interact-entity-secondary=true
        interact-inventory=true
        interact-inventory-click=false
        interact-item-primary=false
        interact-item-secondary=true
        inventory-item-move=true
        item-damage=true
        item-drop=true
        item-pickup=false
        item-spawn=true
        item-use=true
        leaf-decay=false
        liquid-flow=true
        portal-use=false
        projectile-impact-block=true
        projectile-impact-entity=true
    }
```

</details>



<details>
  <summary>GD Option Control</summary>

```
    option-control {
        player-command-enter=false
        player-command-exit=false
        player-deny-flight=false
        player-deny-glide=false
        player-deny-godmode=false
        player-deny-hunger=false
        player-fly-speed=false
        player-gamemode=false
        player-health-regen=false
        player-item-drop-lock=false
        player-keep-inventory=false
        player-keep-level=false
        player-teleport-cost=false
        player-teleport-delay=false
        player-walk-speed=false
        player-weather=false
        pvp=false
        pvp-combat-command=false
        pvp-combat-teleport=false
        pvp-combat-timeout=false
        pvp-item-drop-lock=false
        raid=false
        spawn-limit=false
    }
```
</details>