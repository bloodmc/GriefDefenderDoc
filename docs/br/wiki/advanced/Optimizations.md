---
title: Otimizações
tag: Info
category: info
icon: optimization-timer
---

O Griefdefender fornece controle interno para quase todas as ações do seu mundo Minecraft.No entanto, tentar controlar muito às vezes pode causar problemas de recursos, dependendo da carga do servidor.A solução para esse problema é usar a configuração de otimização interna encontrada em [`global.conf`](/br/wiki/advanced/Global-Config.html) e aprendendo a usar [listas negras](/br/wiki/Configuration.html#blacklist-lista-negra). 

### Configuração de otimização global

Abaixo está um trecho das configurações de [otimização](/br/wiki/advanced/Global-Config.html#otimizacao) que você pode encontrar no GriefDefender na parte do [`global.conf`](/br/wiki/advanced/Global-Config.html) 

## Utilize Aikar's Flags
O GriefDefender foi projetado para utilizar os recursos da melhor maneira, por isso é altamente recomendável que você use as bandeiras do Aikar.  
Veja em [PaperMC - Aikar's Flags](https://docs.papermc.io/paper/aikars-flags)  

<details>
  <summary>Configuração de otimização global</summary>

```
    optimization {
    # Se as ações da ferramenta de reivindicação do jogador devem ser processadas de forma assíncrona para desempenho. (Padrão: verdadeiro)
    # Observação: se você encontrar algum problema de encadeamento assíncrono, desative essa configuração.
    async-claim-tool-actions=true
    # Se os visuais de reivindicação do jogador devem ser processados de forma assíncrona para desempenho. (Padrão: verdadeiro)
    # Observação: se você encontrar algum problema de encadeamento assíncrono, desative essa configuração.
    async-player-claim-visuals=true
    # Controla se deve ignorar quedas de itens de fontes de bloco.
    # Nota: Isso só é acionado quando um jogador quebra um bloco.
    block-item-drops=true
    # Controla a quantidade de tempo, em segundos, para o cache de permissão de todas as ações de dano de entidade no mundo. Se o cache for acessado antes da expiração, o tempo será redefinido.
    # Observação: Definir um valor muito alto pode resultar em resultados de permissão de dano de entidade incorretos.
    cache-entity-damage-expiration=5
    # Controla a quantidade de tempo, em segundos, para o cache de pesquisa de permissão de todas as ações no mundo. Se o cache for acessado antes da expiração, o tempo será redefinido.
    # Nota: Este cache ocorrerá após caches especiais, como dano de entidade, explosões e física.
    # Nota: Definir muito alto pode fazer com que os jogadores não vejam os resultados adequados com suas ações.
    cache-permission-lookup-expiration=3
    # Controla a quantidade de tempo, em segundos, para o cache de permissão de todas as alterações físicas do bloco no mundo.
    # Nota: Blocos como redstone geralmente armazenam em cache por mais tempo devido às chamadas repetidas feitas.
    # Nota: Definir um valor muito alto pode fazer com que os jogadores não sejam rastreados corretamente durante as mudanças de bloco.
    cache-physics-tracking-expiration=5
    # Controla se os spawns de itens dispensadores são ignorados.
    dispenser-item-spawns=true
    # Controla se os eventos de dano de entidade que contêm uma entidade passiva viva de origem/alvo, como dois animais lutando, são ignorados.
    entity-damage-living-passive=true
    # Controla se os eventos de dano de entidade que contêm um monstro de origem/alvo são ignorados.
    entity-damage-monster=true
    # Controla se os eventos de dano de entidade que contêm um monstro e outra entidade, exceto jogadores, são ignorados.
    entity-damage-monster-other=true
    # Controla se a fonte de dano de entidade ou bloco que tem como alvo um passivo vivo são ignorados.
    entity-damage-source-living-passive=true
    # Controla se a fonte de dano de entidade ou bloco que tem como alvo um monstro são ignorados.
    entity-damage-source-monster=true
    # Controla se uma entidade interagindo com um bloco é ignorada.
    entity-interact-block=true
    # Controla se as coletas de itens de entidade feitas por não-jogadores são ignoradas.
    entity-item-pickup-non-player=true
    # Controla se as quedas de não-jogadores são ignoradas.
    fall-non-player=true
    # Controla se os ataques de monstros contra um jogador são ignorados.
    # Nota: Isso não inclui dano de explosão.
    # Nota: Se você precisa evitar dano de monstros em reivindicações, isso deve permanecer falso.
    monster-player-damage=false
    # Controla se os ataques do jogador contra um monstro são ignorados.
    # Nota: Isso não inclui dano de explosão.
    player-monster-damage=true
    # Controla se os spawns do ambiente, como morcegos, são ignorados na selva.
    # Nota: Se você deseja controlar os spawns aquáticos em regiões selvagens, defina como false.
    wilderness-ambient-spawns=true
    # Controla se as crias de animais, como porcos, são ignoradas na selva.
    # Nota: Se você deseja controlar a desova de animais na natureza, defina como falso.
    wilderness-animal-spawns=true
    # Controla se os spawns aquáticos, como lulas, são ignorados na selva.
    # Nota: Se você deseja controlar os spawns aquáticos em regiões selvagens, defina como false.
    wilderness-aquatic-spawns=true
    # Controla se o fluxo de líquido é ignorado no deserto.
    # Nota: Se você deseja controlar o fluxo de líquido em áreas selvagens, defina como falso.
    wilderness-liquid-flow=true
    # Controla se os spawns de monstros, como creepers, são ignorados na selva.
    # Nota: Se você deseja controlar a geração de monstros na natureza, defina como falso.
    wilderness-monster-spawns=true
    # Controla se os orbes de experiência são ignorados quando descartados.
    xp-orb-drop=true
    }
```

</details>


### Contribuições de otimização

Abaixo, você encontrará configurações contribuídas pelos usuários para servidores que trabalharam fortemente para melhorar o desempenho do GD para suas necessidades

### IMPORTANTE
:::: warning Atenção
Essas configurações são ajustadas para servidores individuais e podem não funcionar na sua.É altamente recomendável testar essas configurações antes de usá-las em seu servidor principal.  
O sistema de blacklist suporta [`tags`](/br/wiki/basic/Tags.html)  
:::: 

## Dino's Otimização

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

## FITFC's Otimização

:::: note Recomendação
Se for criar novos flags, remova esta otimização e deixe padrão do GD, pois as otimizações removem alguns eventos do gddebug.  
Essas otimizações tiveram foco em um servidor que tenta ao máximo chegar próximo do vanilla - Ultima revisão 1.19.4  
::::

<details>
  <summary>FIT's Blacklist</summary>

```
GriefDefender {
    # Uma lista global de fontes de dano de entidade que são ignoradas em eventos por padrão.
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
    # Uma lista de id's ignorados por bandeiras.
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
    # Caso queira bloquear o crescimento das colheitas pelo /claimflags, comente daqui para cima.
        ]
        block-modify=[
    # Os minerios de redstone mudam de estado para criar o brilho.
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
        entity-riding=[
            "minecraft:horse",
        ]
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
        # Evitar adicionar qualquer coisa em interact-block-secondary, pois cria vulnerabilidades na proteção.
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
        interact-inventory-click=[
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
    # Uma lista global de IDs de origem que são ignorados por eventos.
    # Nota: Isso afeta apenas eventos em que o id especificado é a origem.
    global-source=[]
    # Uma lista global de IDs de destino que são ignorados por eventos.
    # Nota: Isso afeta apenas eventos em que o id especificado é o destino.
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