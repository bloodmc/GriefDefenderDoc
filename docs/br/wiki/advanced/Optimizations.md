---
title: Otimizações
tag: Info
category: info
icon: optimization-timer
---

O Griefdefender fornece controle interno para quase todas as ações do seu mundo Minecraft.No entanto, tentar controlar muito às vezes pode causar problemas de recursos, dependendo da carga do servidor.A solução para esse problema é usar a configuração de otimização interna encontrada em [`global.conf`](/br/wiki/advanced/Global-Config.html) e aprendendo a usar [listas negras](/br/wiki/Configuration.html#blacklist-lista-negra). 

### Configuração de otimização global

Abaixo está um trecho das configurações de [otimização](/br/wiki/advanced/Global-Config.html#otimizacao) que você pode encontrar no GriefDefender na parte do [`global.conf`](/br/wiki/advanced/Global-Config.html)

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


### Contribuições de otimização

Abaixo, você encontrará configurações contribuídas pelo usuário para servidores que trabalharam fortemente para melhorar o desempenho do GD para suas necessidades

### IMPORTANTE
:::: warning Warning
Essas configurações são ajustadas para servidores individuais e podem não funcionar na sua.É altamente recomendável testar essas configurações antes de usá-las em seu servidor principal.
:::: 

# Dino's Otimização

<details>
  <summary>Dino's Blacklist</summary>

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
  <summary>Problemas conhecidos de Dino's</summary>

```
- A água pode griefar reivindicações de outros jogadores, de reivindicações de região (remover a água da bandeira da lista negra de fluxo da água impedirá isso, mas lembre -se de que o fluxo de água ativo tem um grande impacto de desempenho)
- Os jogadores podem ativar as placas de pressão de madeira soltando um item neles
- Os jogadores podem tosquiar a ovelha de outros jogadores
- Os jogadores podem colar entidades em outras pessoas reivindicações (principalmente um problema se você usar um plug -in que aluga moradores e outras entidades que não é possível com o baunilha minecraft)
- Os creepers podem matar entidades em reivindicações
- Os jogadores podem interagir com os quadros de itens apenas quando interagem com um item na mão (gire os itens)
```
</details>

<hr>

# FITFC's Otimização

:::: note Recomendação
Se for criar novos flags, remova esta otimização e deixe padrão do GD, pois as otimizações removem alguns eventos do gddebug.  
Essas otimizações tiveram foco em um servidor que tenta ao máximo chegar próximo do vanilla - Ultima revisão 1.19.4  
::::

<details>
  <summary>FIT's Blacklist</summary>

```
GriefDefender {
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
        block-grow=[
    # Arvores geram barulhos, oque pode causar um ligeiro lag no servidor, caso queira controlar, comente.
            "minecraft:oak_leaves",
            "minecraft:spruce_leaves",
            "minecraft:birch_leaves",
            "minecraft:jungle_leaves",
            "minecraft:acacia_leaves",
            "minecraft:dark_oak_leaves",
            "minecraft:mangrove_leaves",
            "minecraft:azalea_leaves",
            "minecraft:flowering_azalea_leaves",
            "minecraft:oak_log",
            "minecraft:spruce_log",
            "minecraft:birch_log",
            "minecraft:jungle_log",
            "minecraft:acacia_log",
            "minecraft:dark_oak_log",
            "minecraft:mangrove_log",
            "minecraft:oak_sapling",
            "minecraft:spruce_sapling",
            "minecraft:birch_sapling",
            "minecraft:jungle_sapling",
            "minecraft:acacia_sapling",
            "minecraft:dark_oak_sapling",
    # Plantas geram barulhos, oque pode causar um ligeiro lag no servidor, caso queira controlar, comente.
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
        ]
        block-modify=[
            "minecraft:deepslate_redstone_ore",
            "minecraft:redstone_ore",
    # frosted_ice é em relação ao encantamento de passos gelados, comente para retirar a permissão do jogador gerar minecraft:ice nas águas.
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
            "minecraft:sweet_berry_bush"
        ]
        block-place=[
    # Habilite caso você tenha lag com o RealisticSeasons, porém isso permitirá que outros jogadores consigam colocar minecraft:snow na reivindicação de outros.
            #"minecraft:snow"
        ]
        block-pre=[]
        block-spread=[
            "minecraft:bamboo",
    # caso queira usar o /claimflags a secção do vine-growth, comente o minecraft:vine.
            "minecraft:vine",
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
            "minecraft:big_dripleaf"
        ]
        collide-entity=[]
        command-execute=[]
        command-execute-pvp=[]
        enter-claim=[
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
        entity-riding=[]
        entity-spawn=[
    # minecraft:armor_stand alguns plugins como plugins de Holograma/Damage Indicators geram essas entidades, oque acabam gerando lag no GD por ter muito evento para verificar, caso utilize, comente.
            "minecraft:armor_stand",
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
            "spawnreason:village_defense"
        ]
        entity-teleport-from=[
    # Caso você use algum plugin de teletransporte que esteja dando dando problemas como plugins de elevador, habilite isso.
            #"minecraft:plugin"
        ]
        entity-teleport-to=[
    # Caso você use algum plugin de teletransporte que esteja dando dando problemas como plugins de elevador, habilite isso.
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
        interact-block-secondary=[]
        interact-entity-primary=[]
        interact-entity-secondary=[
            "minecraft:falling_block"
        ]
        interact-inventory=[
            "minecraft:crafting_table",
            "minecraft:stonecutter",
            "minecraft:grindstone",
            "minecraft:smithing_table",
            "minecraft:cartography_table",
            "minecraft:loom",
            "minecraft:ender_chest",
            "minecraft:enchanting_table"
        ]
        interact-inventory-click=[]
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
  <summary>Problemas conhecidos de FITFC's Bandeiras</summary>

```
- Não bloqueia o teletransporte causado por plugins
- big_dripleaf se move quando um jogador interage com elas
- Não desativa o crescimento da vinha/grama/plantação
- É possível obter frutas de sweet_berry e cave_vines_plan
- Outros problemas estão sendo catalogados
```
</details>

## Utilize Aikar's Flags
O GriefDefender foi projetado para utilizar os recursos da melhor maneira, por isso é altamente recomendável que você use as bandeiras do Aikar.  
Veja em [PaperMC - Aikar's Flags](https://docs.papermc.io/paper/aikars-flags)  