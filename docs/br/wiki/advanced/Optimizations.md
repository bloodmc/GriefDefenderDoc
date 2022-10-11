---
title: Otimizações
tag: Info
category: info
icon: optimization-timer
---

O Griefdefender fornece controle interno para quase todas as ações do seu mundo Minecraft.No entanto, tentar controlar muito às vezes pode causar problemas de recursos, dependendo da carga do servidor.A solução para esse problema é usar a configuração de otimização interna encontrada em `global.conf` e aprendendo a usar [listas negras](https://github.com/bloodmc/GriefDefender/wiki/Configuration#blacklist). 

### Configuração de otimização global

Abaixo está um trecho das configurações de otimização que você pode encontrar em GD's `global.conf`

<details>
  <summary>Configuração de otimização global</summary>

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
        # Controls the amount of time, in seconds, for the permission cache of all block physic changes in world. If the cache is accessed before expiration then the time is reset.
        # Note: Blocks such as redstone will usually cache longer due to the repeated calls made.
        # Note: Setting this too high may result in players not being tracked properly during block changes.
        cache-physics-tracking-expiration=5
        # Controls whether dispener item spawns are ignored.
        dispenser-item-spawns=true
        # Controls whether entity damage events that contain both a source/target living passive entity, such as two animals fighting, are ignored.
        entity-damage-living-passive=true
        # Controls whether entity damage events that contain both a source/target monster are ignored.
        entity-damage-monster=true
        # Controls whether entity damage source or block that target a living passive are ignored.
        entity-damage-source-living-passive=true
        # Controls whether entity damage source or block that target a monster are ignored.
        entity-damage-source-monster=true
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
        # Controls whether monster spawns, such as creepers, are ignored in wilderness.
        # Note: If you want to control monster spawns in wilderness, set this to false.
        wilderness-monster-spawns=true
        # Controls whether experience orbs are ignored when dropped.
        xp-orb-drop=true
    }
```

</details>


### Contribuições de otimização

Abaixo, você encontrará configurações contribuídas pelo usuário para servidores que trabalharam fortemente para melhorar o desempenho do GD para suas necessidades

### IMPORTANTE
:warning:  Essas configurações são ajustadas para servidores individuais e podem não funcionar na sua.É altamente recomendável testar essas configurações antes de usá -las na produção.
:warning:  

<details>
  <summary>Dino's Lista negra</summary>

```
blacklist {
        # A global list of entity damage sources that are ignored in events by default.
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
  <summary>Dino's Controle de bandeira</summary>

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
  <summary>Dino's Controle de opção</summary>

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
  <summary>Problemas conhecidos de Dino's</summary>

```
- A água pode sofrer reivindicações de fora, de reivindicações de região (remover a água da bandeira da lista negra de fluxo líquido impedirá isso, mas lembre -se de que o fluxo de água ativo tem um grande impacto de desempenho)
- Os jogadores podem ativar as placas de pressão de madeira soltando um item neles
- Os jogadores podem cismar ovelhas de outras pessoas
- Os jogadores podem colar entidades em outras pessoas reivindicações (principalmente um problema se você usar um plug -in que aluga moradores e outras entidades que não é possível com o baunilha minecraft)
- As trepadeiras podem matar entidades em reivindicações
- Os jogadores podem interagir com os quadros de itens apenas quando interagem com um item na mão (gire os itens)
```
</details>