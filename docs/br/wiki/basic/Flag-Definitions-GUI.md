---
title: Interface de definições de bandeira
tag: flags
category: claim
icon: screen
---

## Visão geral

O sistema de definição de bandeiras fornece aos usuários e administradores a capacidade de gerenciar seus bandeiras de reivindicação em um [Bate-papo](/br/wiki/basic/GUI.html#bate-papo) ou [Inventário](/br/wiki/basic/GUI.html#inventario) interface.
GriefDefender oferece um pacote de definições de bandeiras por padrão para fornecer a melhor compatibilidade entre servidores.
Os dados de definição de bandeira vanilla entregues podem ser encontrados no seguinte local
### Sponge
`./config/GriefDefender/presets/minecraft.conf`
### Bukkit
`./plugins/GriefDefender/presets/minecraft.conf`



Os administradores têm controle total para adicionar/remover/personalizar definições de bandeiras.

Para adicionar uma definição de bandeira a uma predefinição de minecraft entregue existente, abra o arquivo `./presets/minecraft.conf`.
Nesta seção, você verá 2 grupos entregues `admin` e `user`.

Todas as definições de bandeiras localizadas no grupo `admin` são acessíveis apenas por administradores. Isso se deve à configuração do `admin-group` ser definida como `true`.
Todas as definições de bandeiras localizadas no grupo `user` são acessíveis por todos os usuários.
Você pode adicionar/remover/mover definições de bandeiras como quiser e até mesmo criar novos arquivos predefinidos do zero que serão lidos quando a interface for carregada.

### Adicionar nova definição de bandeira

Se você quiser adicionar um bandeira à seção 'admin', faça o seguinte
1. Clone uma definição de bandeira existente. Usaremos `ambient-spawn` para este exemplo.

```
ambient-spawn {
    contexts=[
        "gd_claim_default=user"
    ]
    default-value=true
    enabled=true
    permissions=[
        "flag=entity-spawn, target=#ambient"
    ]
}
```

Vamos quebrar este exemplo

#### Nome

`ambient-spawn` - Este é o nome da sua definição que será exibida aos usuários quando eles a abrirem na interface do bandeira. Pode ser o que você quiser.
Nota: Estes não são bandeiras de núcleo GD reais, mas sim uma `flag definition` e não podem ser usados com o comando `/cf`. Se você quiser alternar uma definição de bandeira com um comando, use `/claimflagdefinition` ou `/gd flag definition`

#### Contextos  

```
contexts=[
        "gd_claim_default=user"
    ]
```
Estes são os contextos de definição que serão usados com todas as permissões definidas em `permissions=[...]`.
Atualmente suporta apenas chaves de contexto `gd_claim_default`, `gd_claim_override` ou `gd_claim`.
Consulte [Contextos](/br/wiki/advanced/Contexts.html) para saber como funcionam os contextos.
Nota: Esses contextos NÃO se aplicam à interface. Ele é usado apenas durante a inicialização do servidor. A interface sempre aplicará bandeiras ao jogador de reivindicação em que está.

#### Valor padrão

`default-value=true` - Este é o valor padrão que o GD usará ao aplicar a definição durante a inicialização.
O GD só aplicará este valor durante a inicialização como uma permissão temporária se os contextos incluirem `gd_claim_default` ou `gd_claim_override`.
Se a definição não contiver um desses contextos, o valor padrão será ignorado.

#### Enabled  

`enabled=true` - Isso controla se a definição está habilitada no GD ou desabilitada. Se definido como `false`, a definição será ignorada.


#### Permissões  

```
permissions=[
    "flag=entity-spawn, target=#ambient"
]
```
Essas são as permissões de bandeira para atribuir essa definição. As permissões podem conter uma ou mais entradas de bandeira. Para adicionar uma linha adicional, adicione um `,` no final do anterior e insira uma nova linha.
Cada linha requer uma entrada `flag=<flag_name>` seguida pelo contexto de origem ou destino.
Se você deseja aplicar uma permissão a todos os destinos possíveis, não inclua `target`, pois o GD será aplicado automaticamente a todos os destinos.
Se você deseja aplicar uma permissão a todas as fontes possíveis, não inclua `source`, pois o GD será aplicado automaticamente a todas as fontes.

Os contextos mais comuns para permissões são os seguintes
```
source
target
used_item
item_name
server
state
world
```

O valor de contexto aceito deve ser um identificador válido. Para localizar o valor adequado no jogo, faça o seguinte

1. Execute o comando `/gddebug record Claim` - Isso iniciará uma sessão de depuração na reivindicação em que você está.
2. Execute uma ação que você deseja gerenciar por meio da definição de bandeira.
3. Execute o comando `/gddebug paste` - Isso exibirá um link da web para visualizar os resultados da depuração.
4. Abra o link e você verá uma lista de ações que o GD verificou para a reivindicação. Você terá uma coluna `source` e `target` que conterá os valores que você precisa.

Para localizar um valor para `used_item` ou qualquer outro contexto, localize a coluna Contexto e você verá uma lista de todos os contextos de suporte para a ação de linha específica.

Outra maneira de encontrar um id que você está procurando é verificar um wiki executado pela comunidade para ele

Veja https://minecraft-ids.grahamedgecombe.com/


### Configuração de predefinição de definição de bandeira do Minecraft

Para mais informações sobre o que você pode fazer com a configuração de bandeiras, veja abaixo

<details>
  <summary>Predefinição de Minecraft</summary>

```
# A collection of flag definitions designed for vanilla minecraft.
# Each group defined will be displayed in the flag GUI for users.
# Groups can have the following settings : 
#    enabled=<true|false>: Whether the group is enabled.
#    admin-group=<true|false>: Whether this group is considered for admin use only.
#    Note: GUI toggles in PRESETS will always apply to current claim only.
#    Note: If you assign users the permission 'griefdefender.admin.advanced-flags', they will be able to access admin presets within the claim tab.
#          It is recommended not to assign this permission to users for best experience.
#    value=<true|false>: This is used to set a default value for the flag definition. It is only used in conjunction with 'override=<type>, default=<type> settings.
#    contexts=["key=value"]: A list of definition contexts that will be applied to all permissions.
# Note: This is primary used with 'default' and 'override' contexts. Ex. contexts=["default=global"]
# Note: You must specify one of the following contexts :'gd_claim_default=<type>' or 'gd_claim_override=<type>''
# Note: Context values support wildcards '?' and '*' by using Apache's wildcard matcher.
#  The wildcard '?' represents a single character.
#  The wildcard '*' represents zero or more characters.
# Each group will have an associated permission in order to be viewable.
# The user groups will use the permission : 'griefdefender.user.custom.flag.<preset>.<group>
# The admin groups will use the permission : 'griefdefender.admin.custom.flag.<preset>.<group>
# Within each group, you can define flag definitions.
# Each flag definition must be defined in the following format:
#  enabled: Controls whether the definition is enabled. Accepts a value of 'true' or 'false'
#  default-value: The default value to assign flag definition.
#  description: The flag description to display on hover. Uses the legacy text format.
#  permissions: The list of permissions to link to definition. Permissions can accept various contexts such as :
#    flag=<linked-flag>: This context is used to link the permission to a GD specific flag. Ex. 'flag=block-break' would link permission to GD's block-break flag
#    source=<id>: This context is used to specify a source id such as 'minecraft:creeper'.
#    target=<id>: This context is used to specify a target id such as 'minecraft:chest'.
#    state=<properties>: This context is used to specify a blockstate property such as 'state=lit:true'.
# Note: All flag definitions that contain a definition context of 'gd_claim_default' or 'gd_claim_override' will be applied to permissions during server startup.
# Note: Required if no source or target context is specified, the permission will default to ALL.
# Note: Commonly used contexts are : flag, source, target, state, used_item, item_name, world, server
# These contexts may change, See https://github.com/bloodmc/GriefDefender/wiki/Contexts for latest information.

minecraft {
    enabled=true
    groups {
        admin {
            # Set to true if this flag group is for admin use only.
            # Note: If admin group, the permission is 'griefdefender.admin.custom.flag.<groupname>
            # Note: If user group (admin set false), the permission is 'griefdefender.user.custom.flag.<groupname>
            admin-group=true
            definitions {
                ambient-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:bat_spawn_egg"
                        title="&6ambient-spawn"
                    }
                    permissions=[
                        "flag=entity-spawn, target=#ambient"
                    ]
                }
                animal-block-modify {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:chorus_plant"
                        title="&6animal-block-modify"
                    }
                    permissions=[
                        "flag=block-break, source=#animal",
                        "flag=block-modify, source=#animal"
                    ]
                }
                animal-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:pig_spawn_egg"
                        title="&6animal-spawn"
                    }
                    permissions=[
                        "flag=entity-spawn, target=#animal"
                    ]
                }
                aquatic-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:squid_spawn_egg"
                        title="&6aquatic-spawn"
                    }
                    permissions=[
                        "flag=entity-spawn, target=#aquatic"
                    ]
                }
                armorstand-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:armor_stand"
                        title="&6armorstand-use"
                    }
                    permissions=[
                        "flag=interact-item-secondary, target=minecraft:armor_stand, source=minecraft:player",
                        "flag=entity-damage, target=minecraft:armor_stand, source=minecraft:player",
                        "flag=interact-entity-secondary, target=minecraft:armor_stand, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:armor_stand, source=minecraft:player"
                    ]
                }
                chorus-fruit-teleport {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:chorus_fruit"
                        title="&6chorus-fruit-teleport"
                    }
                    permissions=[
                        "flag=item-use, target=minecraft:chorus_fruit, source=minecraft:player"
                    ]
                }
                commandblock-block-break {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:command_block"
                        title="&6commandblock-block-break"
                    }
                    permissions=[
                        "flag=block-break, source=minecraft:command_block, source=minecraft:chain_command_block, source=minecraft:repeating_command_block"
                    ]
                }
                commandblock-block-place {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:command_block"
                        title="&6commandblock-block-place"
                    }
                    permissions=[
                        "flag=block-place, source=minecraft:command_block, source=minecraft:chain_command_block, source=minecraft:repeating_command_block"
                    ]
                }
                creeper-block-explosion {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:creeper_head"
                        title="&6creeper-block-explosion"
                    }
                    permissions=[
                        "flag=explosion-block, source=minecraft:creeper"
                    ]
                }
                creeper-entity-explosion {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:creeper_head"
                        title="&6creeper-entity-explosion"
                    }
                    permissions=[
                        "flag=explosion-entity, source=minecraft:creeper"
                    ]
                }
                endcrystal-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:end_crystal"
                        title="&6endcrystal-use"
                    }
                    permissions=[
                        "flag=projectile-impact-entity, target=minecraft:end_crystal, source=minecraft:arrow, source=minecraft:player",
                        "flag=interact-item-secondary, target=minecraft:end_crystal, source=minecraft:arrow, source=minecraft:player",
                        "flag=entity-damage, target=minecraft:end_crystal, source=minecraft:arrow, source=minecraft:player",
                        "flag=interact-entity-secondary, target=minecraft:end_crystal, source=minecraft:arrow, source=minecraft:player"
                    ]
                }
                entity-armorstand-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=true
                        id="minecraft:armor_stand"
                        title="&6entity-armorstand-damage"
                    }
                    permissions=[
                        "flag=entity-damage, target=minecraft:armor_stand, source=minecraft:player",
                        "flag=projectile-impact-entity, target=minecraft:armor_stand, source=minecraft:player"
                    ]
                }
                entity-itemframe-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=true
                        id="minecraft:item_frame"
                        title="&6entity-itemframe-damage"
                    }
                    permissions=[
                        "flag=entity-damage, target=minecraft:glow_item_frame, target=minecraft:item_frame",
                        "flag=projectile-impact-entity, target=minecraft:glow_item_frame, target=minecraft:item_frame"
                    ]
                }
                exp-drop {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:experience_bottle"
                        title="&6exp-drop"
                    }
                    permissions=[
                        "flag=entity-spawn, target=minecraft:xp_orb"
                    ]
                }
                fall-entity-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=true
                        id="minecraft:feather"
                        title="&6fall-player-damage"
                    }
                    permissions=[
                        "flag=entity-damage, source=minecraft:fall"
                    ]
                }
                fall-player-damage {
                    contexts=[
                        "gd_claim_override=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:feather"
                        title="&6fall-player-damage"
                    }
                    permissions=[
                        "flag=entity-damage, target=minecraft:player, source=minecraft:fall"
                    ]
                }
                falling-block-break {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:sand"
                        title="&6falling-block-break"
                    }
                    permissions=[
                        "flag=block-break, source=minecraft:fall"
                    ]
                }
                fire-block-damage {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:magma_block"
                        title="&6fire-block-damage"
                    }
                    permissions=[
                        "flag=block-break, source=minecraft:fire"
                    ]
                }
                fire-entity-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:magma_cream"
                        title="&6fire-entity-damage"
                    }
                    permissions=[
                        "flag=entity-damage, source=minecraft:fire",
                        "flag=entity-damage, source=minecraft:fire_tick",
                        "flag=entity-damage, source=minecraft:magma_block",
                        "flag=entity-damage, source=minecraft:lava"
                    ]
                }
                lead-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:lead"
                        title="&6lead-interact"
                    }
                    permissions=[
                        "flag=interact-item-secondary, target=minecraft:lead, source=minecraft:player",
                        "flag=interact-entity-secondary, target=minecraft:leash_knot, source=minecraft:player"
                    ]
                }
                lightning-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:dead_bush"
                        title="&6lightning-damage"
                    }
                    permissions=[
                        "flag=entity-damage, source=minecraft:lightning_bolt"
                    ]
                }
                monster-animal-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:skeleton_skull"
                        title="&6monster-animal-damage"
                    }
                    permissions=[
                        "flag=entity-damage, source=#monster, target=#animal",
                        "flag=entity-damage, source=#monster, target=#aquatic",
                        "flag=projectile-impact-entity, source=#monster, target=#aquatic"
                    ]
                }
                monster-player-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:zombie_head"
                        title="&6monster-player-damage"
                    }
                    permissions=[
                        "flag=entity-damage, source=#monster, target=minecraft:player",
                        "flag=projectile-impact-entity, source=#monster, target=minecraft:player"
                    ]
                }
                monster-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:zombie_spawn_egg"
                        title="&6monster-spawn"
                    }
                    permissions=[
                        "flag=entity-spawn, target=#monster"
                    ]
                }
                piston-item-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:piston"
                        title="&6piston-item-spawn"
                    }
                    permissions=[
                        "flag=item-spawn, source=minecraft:piston",
                        "flag=item-spawn, source=minecraft:sticky_piston"
                    ]
                }
                piston-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:sticky_piston"
                        title="&6piston-use"
                    }
                    permissions=[
                        "flag=block-break, source=minecraft:piston",
                        "flag=block-place, source=minecraft:piston",
                        "flag=block-break, source=minecraft:sticky_piston",
                        "flag=block-place, source=minecraft:sticky_piston"
                    ]
                }
                player-block-break {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:diamond_pickaxe"
                        title="&6player-block-break"
                    }
                    permissions=[
                        "flag=block-break, source=minecraft:player"
                    ]
                }
                player-block-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:stone_button"
                        title="&6player-block-interact"
                    }
                    permissions=[
                        "flag=interact-block-secondary, source=minecraft:player"
                    ]
                }
                player-block-place {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:grass_block"
                        title="&6player-block-place"
                    }
                    permissions=[
                        "flag=block-place, source=minecraft:player"
                    ]
                }
                player-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:cactus"
                        title="&6player-damage"
                    }
                    permissions=[
                        "flag=entity-damage, target=minecraft:player",
                        "flag=projectile-impact-entity, target=minecraft:player"
                    ]
                }
                player-damage-pillager {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:red_banner"
                        title="&6player-damage"
                    }
                    permissions=[
                        "flag=entity-damage, source=minecraft:player, target=minecraft:pillager",
                        "flag=projectile-impact-entity, source=minecraft:player, target=minecraft:pillager",
                        "flag=entity-damage, source=minecraft:arrow, target=minecraft:pillager",
                        "flag=projectile-impact-entity, source=minecraft:arrow, target=minecraft:pillager"
                    ]
                }
                player-enderpearl-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:ender_pearl"
                        title="&6player-enderpearl-interact"
                    }
                    permissions=[
                        "flag=interact-item-secondary, source=minecraft:player, target=minecraft:ender_pearl"
                    ]
                }
                player-endportal-use {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:end_portal_frame"
                        title="&6player-endportal-use"
                    }
                    permissions=[
                        "flag=entity-teleport-from, source=minecraft:end_portal, target=minecraft:player"
                    ]
                }
                player-entity-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:carrot_on_a_stick"
                        title="&6player-entity-interact"
                    }
                    permissions=[
                        "flag=interact-entity-secondary, source=minecraft:player"
                    ]
                }
                player-exit {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:iron_door"
                        title="&6player-exit"
                    }
                    permissions=[
                        "flag=exit-claim, source=minecraft:player"
                    ]
                }
                player-item-drop {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:dropper"
                        title="&6player-item-drop"
                    }
                    permissions=[
                        "flag=item-drop, source=minecraft:player"
                    ]
                }
                player-item-pickup {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:hopper"
                        title="&6player-item-pickup"
                    }
                    permissions=[
                        "flag=item-pickup, source=minecraft:player"
                    ]
                }
                player-itemframe-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:item_frame"
                        title="&6player-itemframe-interact"
                    }
                    permissions=[
                        "flag=interact-entity-secondary, target=minecraft:glow_item_frame, target=minecraft:item_frame, source=minecraft:player"
                    ]
                }
                player-itemhanging-place {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:item_frame"
                        title="&6player-itemhanging-place"
                    }
                    permissions=[
                        "flag=interact-item-secondary, target=#hanging, source=minecraft:player"
                    ]
                }
                player-monster-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:zombie_head"
                        title="&6monster-player-damage"
                    }
                    permissions=[
                        "flag=entity-damage, target=#monster, source=minecraft:player",
                        "flag=projectile-impact-entity, target=#monster, source=minecraft:player"
                    ]
                }
                player-netherportal-use {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:obsidian"
                        title="&6player-netherportal-use"
                    }
                    permissions=[
                        "flag=entity-teleport-from, source=minecraft:nether_portal, target=minecraft:player"
                    ]
                }
                player-teleport-from {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:magenta_glazed_terracotta"
                        title="&6entity-itemframe-damage"
                    }
                    permissions=[
                        "flag=entity-teleport-from, target=minecraft:player"
                    ]
                }
                player-teleport-to {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=true
                        id="minecraft:magenta_glazed_terracotta"
                        title="&6entity-itemframe-damage"
                    }
                    permissions=[
                        "flag=entity-teleport-to, target=minecraft:player"
                    ]
                }
                player-villager-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:tripwire_hook"
                        title="&6player-villager-damage"
                    }
                    permissions=[
                        "flag=entity-damage, target=minecraft:villager, source=minecraft:player",
                        "flag=projectile-impact-entity, target=minecraft:villager, source=minecraft:player"
                    ]
                }
                ravager-block-break {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:ravager_spawn_egg"
                        title="&6ravager-block-break"
                    }
                    permissions=[
                        "flag=block-break, source=minecraft:ravager"
                    ]
                }
                safarinet-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:ghast_spawn_egg"
                        title="&6safarinet-use"
                    }
                    permissions=[
                        "flag=interact-item-secondary, target=minecraft:ghast_spawn_egg, source=minecraft:player"
                    ]
                }
                silverfish-block-infest {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:infested_cobblestone"
                        title="&6fall-player-damage"
                    }
                    permissions=[
                        "flag=block-modify, source=minecraft:silverfish"
                    ]
                }
                tnt-block-explosion {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:tnt"
                        title="&6tnt-block-explosion"
                    }
                    permissions=[
                        "flag=explosion-block, source=minecraft:tnt"
                    ]
                }
                tnt-entity-explosion {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:tnt"
                        title="&6tnt-entity-explosion"
                    }
                    permissions=[
                        "flag=explosion-entity, source=minecraft:tnt"
                    ]
                }
                turtle-egg-hatch {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:egg"
                        title="&6turtle-egg-hatch"
                    }
                    permissions=[
                        "flag=block-place, source=minecraft:turtle, target=minecraft:turtle_egg",
                        "flag=block-break, source=minecraft:turtle_egg, target=minecraft:turtle_egg"
                    ]
                }
                villager-farm {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:composter"
                        title="&6villager-farm"
                    }
                    permissions=[
                        "flag=block-break, source=minecraft:villager, target=#crops",
                        "flag=block-place, source=minecraft:villager, target=#crops"
                    ]
                }
                villager-trade {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:emerald"
                        title="&6villager-trade"
                    }
                    permissions=[
                        "flag=interact-entity-secondary, target=minecraft:villager, source=minecraft:player"
                    ]
                }
                wither-block-break {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:wither_skeleton_skull"
                        title="&6wither-block-break"
                    }
                    permissions=[
                        "flag=block-break, source=minecraft:wither"
                    ]
                }
                wither-entity-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:nether_star"
                        title="&6wither-entity-damage"
                    }
                    permissions=[
                        "flag=entity-damage, source=minecraft:wither"
                    ]
                }
            }
            # Whether flag definition group is enabled.
            enabled=true
            icon {
                enchanted=false
                id="minecraft:enchanted_golden_apple"
                title="&cAdmin"
            }
        }
        user {
            # Set to true if this flag group is for admin use only.
            # Note: If admin group, the permission is 'griefdefender.admin.custom.flag.<groupname>
            # Note: If user group (admin set false), the permission is 'griefdefender.user.custom.flag.<groupname>
            admin-group=false
            definitions {
                block-fertilize {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:bone_meal"
                        title="&6block-fertilize"
                    }
                    permissions=[
                        "flag=block-grow, used_item=minecraft:bone_meal, target=#crops, source=minecraft:player",
                        "flag=block-grow, used_item=minecraft:bone_meal, target=#plants, source=minecraft:player"
                    ]
                }
                block-trampling {
                    contexts=[
                        "gd_claim_override=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:dirt"
                        title="&6block-trampling"
                    }
                    permissions=[
                        "flag=collide-block, target=minecraft:turtle_egg, target=minecraft:farmland"
                    ]
                }
                chest-access {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:chest"
                        title="&6chest-access"
                    }
                    permissions=[
                        "flag=interact-block-secondary, target=minecraft:chest, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:chest, source=minecraft:player"
                    ]
                }
                collide-pixelmon-grass {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=collide-block, target=pixelmon:pixelmon_grass, source=minecraft:player"
                    ]
                }
                crop-growth {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:wheat"
                        title="&6crop-growth"
                    }
                    permissions=[
                        "flag=block-grow, target=#crops"
                    ]
                }
                damage-animals {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:mutton"
                        title="&6damage-animals"
                    }
                    permissions=[
                        "flag=entity-damage, target=#animal",
                        "flag=projectile-impact-entity, target=#animal"
                    ]
                }
                enderman-grief {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:ender_eye"
                        title="&6enderman-grief"
                    }
                    permissions=[
                        "flag=block-break, source=minecraft:enderman",
                        "flag=block-place, source=minecraft:enderman"
                    ]
                }
                fire-spread {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:blaze_powder"
                        title="&6fire-spread"
                    }
                    permissions=[
                        "flag=block-spread, source=minecraft:fire",
                        "flag=block-spread, source=minecraft:lava"
                    ]
                }
                grass-growth {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:tall_grass"
                        title="&6grass-growth"
                    }
                    permissions=[
                        "flag=block-grow, target=minecraft:grass"
                    ]
                }
                ice-form {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:packed_ice"
                        title="&6ice-form"
                    }
                    permissions=[
                        "flag=block-modify, target=minecraft:ice"
                    ]
                }
                ice-melt {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:blue_stained_glass"
                        title="&6ice-melt"
                    }
                    permissions=[
                        "flag=block-modify, target=minecraft:water, source=minecraft:ice"
                    ]
                }
                interact-with-chattingnpc {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-entity-secondary, target=pixelmon:chattingnpc, source=minecraft:player"
                    ]
                }
                interact-with-endtable {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, source=minecraft:player, target=pixelmon:end_table",
                        "flag=interact-inventory, source=minecraft:player, target=pixelmon:end_table"
                    ]
                }
                interact-with-fridge {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=false
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, target=pixelmon:fridge, source=minecraft:player",
                        "flag=interact-inventory, target=pixelmon:fridge, source=minecraft:player"
                    ]
                }
                interact-with-healer {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, target=pixelmon:healer, source=minecraft:player"
                    ]
                }
                interact-with-move-relearner {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-entity-secondary, target=pixelmon:relearner, source=minecraft:player"
                    ]
                }
                interact-with-move-tutor {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-entity-secondary, target=pixelmon:tutor, source=minecraft:player"
                    ]
                }
                interact-with-nurses {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-entity-secondary, target=pixelmon:nursejoy, source=minecraft:player"
                    ]
                }
                interact-with-old-fisherman {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-entity-secondary, target=pixelmon:oldfisherman, source=minecraft:player"
                    ]
                }
                interact-with-shopkeepers {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-entity-secondary, target=pixelmon:shopkeeper, source=minecraft:player"
                    ]
                }
                interact-with-traders {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-entity-secondary, target=pixelmon:trader, source=minecraft:player"
                    ]
                }
                lava-flow {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:lava_bucket"
                        title="&6lava-flow"
                    }
                    permissions=[
                        "flag=liquid-flow, source=minecraft:lava, target=minecraft:air"
                    ]
                }
                leaf-decay {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:oak_leaves"
                        title="&6leaf-decay"
                    }
                    permissions=[
                        "flag=leaf-decay"
                    ]
                }
                lighter {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:flint_and_steel"
                        title="&6lighter"
                    }
                    permissions=[
                        "flag=interact-item-secondary, target=minecraft:flint_and_steel, source=minecraft:player"
                    ]
                }
                monster-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:zombie_spawn_egg"
                        title="&6monster-spawn"
                    }
                    permissions=[
                        "flag=entity-spawn, target=#monster"
                    ]
                }
                mushroom-growth {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:brown_mushroom_block"
                        title="&6mushroom-growth"
                    }
                    permissions=[
                        "flag=block-grow, target=#mushroom"
                    ]
                }
                mycelium-spread {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:mycelium"
                        title="&6mycelium-spread"
                    }
                    permissions=[
                        "flag=block-spread, target=minecraft:mycelium"
                    ]
                }
                occupied-pokeball-usage {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=projectile-impact-block, source=pixelmon:occupied_pokeball",
                        "flag=projectile-impact-entity, source=pixelmon:occupied_pokeball, target=pixelmon:any",
                        "flag=entity-spawn, source=pixelmon:occupied_pokeball, target=#pixelmon:animal"
                    ]
                }
                painting-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:painting"
                        title="&6painting-damage"
                    }
                    permissions=[
                        "flag=entity-damage, target=minecraft:painting"
                    ]
                }
                phantom-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:phantom_membrane"
                        title="&6phantom-spawn"
                    }
                    permissions=[
                        "flag=entity-spawn, target=minecraft:phantom"
                    ]
                }
                player-button-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:stone_button"
                        title="&6player-button-interact"
                    }
                    permissions=[
                        "flag=interact-block-secondary, target=minecraft:button, source=minecraft:player"
                    ]
                }
                player-enter {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:oak_door"
                        title="&6player-enter"
                    }
                    permissions=[
                        "flag=enter-claim, source=minecraft:player"
                    ]
                }
                player-item-drop {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:dropper"
                        title="&6player-item-drop"
                    }
                    permissions=[
                        "flag=item-drop, source=minecraft:player"
                    ]
                }
                player-item-pickup {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:hopper"
                        title="&6player-item-pickup"
                    }
                    permissions=[
                        "flag=item-pickup, source=minecraft:player"
                    ]
                }
                poke-spawn {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=entity-spawn, target=#pixelmon:animal"
                    ]
                }
                pvp {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:diamond_sword"
                        title="&6pvp"
                    }
                    permissions=[
                        "flag=entity-damage, target=minecraft:player, source=minecraft:player",
                        "flag=projectile-impact-entity, target=minecraft:player, source=minecraft:player"
                    ]
                }
                ride {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:saddle"
                        title="&6ride"
                    }
                    permissions=[
                        "flag=entity-riding, target=#vehicle, source=minecraft:player",
                        "flag=interact-entity-secondary, target=#vehicle, source=minecraft:player"
                    ]
                }
                sign-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:oak_sign"
                        title="&6sign-use"
                    }
                    permissions=[
                        "flag=interact-block-primary, target=#signs, source=minecraft:player",
                        "flag=interact-block-secondary, target=#signs, source=minecraft:player"
                    ]
                }
                sleep {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:red_bed"
                        title="&6sleep"
                    }
                    permissions=[
                        "flag=interact-block-secondary, target=#beds, source=minecraft:player",
                        "flag=interact-item-secondary, target=#beds, source=minecraft:player"
                    ]
                }
                snow-fall {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:snowball"
                        title="&6snow-fall"
                    }
                    permissions=[
                        "flag=block-place, target=minecraft:snow, source=minecraft:air"
                    ]
                }
                snow-melt {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:snow_block"
                        title="&6snow-melt"
                    }
                    permissions=[
                        "flag=block-break, source=minecraft:snow"
                    ]
                }
                snowman-trail {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:snow"
                        title="&6snowman-trail"
                    }
                    permissions=[
                        "flag=block-place, source=minecraft:snow_golem, target=minecraft:snow"
                    ]
                }
                soil-dry {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:farmland"
                        title="&6soil-dry"
                    }
                    permissions=[
                        "flag=block-modify, source=minecraft:farmland, state=moisture:0"
                    ]
                }
                throw-any-pokeball {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=projectile-impact-block, source=pixelmon:empty_pokeball",
                        "flag=projectile-impact-entity, source=pixelmon:empty_pokeball"
                    ]
                }
                use-cushion-chairs {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, target=pixelmon:red_cushion_chair, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:yellow_cushion_chair, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:green_cushion_chair, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:pink_cushion_chair, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:blue_cushion_chair, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:black_cushion_chair, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:gray_cushion_chair, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:cyan_cushion_chair, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:white_cushion_chair, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:brown_cushion_chair, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:orange_cushion_chair, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:purple_cushion_chair, source=minecraft:player"
                    ]
                }
                use-fossil-cleaner {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, target=pixelmon:fossil_cleaner, source=minecraft:player"
                    ]
                }
                use-fossil-machines {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, target=pixelmon:fossil_machine, source=minecraft:player"
                    ]
                }
                use-pc {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, target=pixelmon:pc, source=minecraft:player"
                    ]
                }
                use-trade-machines {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, target=pixelmon:trade_machine, source=minecraft:player"
                    ]
                }
                use-vending-machines {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-value=true
                    enabled=true
                    permissions=[
                        "flag=interact-block-secondary, target=pixelmon:pink_vending_machine, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:blue_vending_machine, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:green_vending_machine, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:orange_vending_machine, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:red_vending_machine, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:yellow_vending_machine, source=minecraft:player",
                        "flag=interact-block-secondary, source=minecraft:player, target=pixelmon:brown_vending_machine",
                        "flag=interact-block-secondary, target=pixelmon:white_vending_machine, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:gray_vending_machine, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:black_vending_machine, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:cyan_vending_machine, source=minecraft:player",
                        "flag=interact-block-secondary, target=pixelmon:purple_vending_machine, source=minecraft:player"
                    ]
                }
                vehicle-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:oak_boat"
                        title="&6vehicle-use"
                    }
                    permissions=[
                        "flag=interact-item-secondary, target=minecraft:minecart, target=#vehicle, target=#boats, source=minecraft:player",
                        "flag=entity-damage, target=minecraft:minecart, target=minecraft:boat, target=#vehicle, source=minecraft:player",
                        "flag=entity-riding, target=minecraft:minecart, target=minecraft:boat, target=#vehicle, source=minecraft:player",
                        "flag=interact-entity-secondary, target=minecraft:minecart, target=minecraft:boat, target=#vehicle, source=minecraft:player"
                    ]
                }
                villager-trade {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:emerald"
                        title="&6villager-trade"
                    }
                    permissions=[
                        "flag=interact-entity-secondary, target=minecraft:villager, source=minecraft:player"
                    ]
                }
                vine-growth {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:vine"
                        title="&6vine-growth"
                    }
                    permissions=[
                        "flag=block-grow, target=minecraft:vine"
                    ]
                }
                water-flow {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:water_bucket"
                        title="&6water-flow"
                    }
                    permissions=[
                        "flag=liquid-flow, source=minecraft:water, target=minecraft:air"
                    ]
                }
                work-station-access {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:crafting_table"
                        title="&6work-station-access"
                    }
                    permissions=[
                        "flag=interact-block-secondary, target=minecraft:crafting_table, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:crafting_table, source=minecraft:player",
                        "flag=interact-block-secondary, target=minecraft:anvil, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:anvil, source=minecraft:player",
                        "flag=interact-block-secondary, source=minecraft:player, target=minecraft:brewing_stand",
                        "flag=interact-inventory, source=minecraft:player, target=minecraft:brewing_stand",
                        "flag=interact-block-secondary, target=minecraft:cartography_table, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:cartography_table, source=minecraft:player",
                        "flag=interact-block-secondary, target=minecraft:smithing_table, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:smithing_table, source=minecraft:player",
                        "flag=interact-block-secondary, target=minecraft:enchanting_table, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:enchanting_table, source=minecraft:player",
                        "flag=interact-block-secondary, target=minecraft:grindstone, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:grindstone, source=minecraft:player",
                        "flag=interact-block-secondary, target=minecraft:loom, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:loom, source=minecraft:player",
                        "flag=interact-block-secondary, target=minecraft:stonecutter, source=minecraft:player",
                        "flag=interact-inventory, target=minecraft:stonecutter, source=minecraft:player",
                        "flag=interact-block-secondary, source=minecraft:player, target=minecraft:ender_chest",
                        "flag=interact-inventory, source=minecraft:player, target=minecraft:ender_chest"
                    ]
                }
            }
            # Whether flag definition group is enabled.
            enabled=true
            icon {
                enchanted=false
                id="minecraft:apple"
                title="&aUser"
            }
        }
    }
    icon {
        enchanted=false
        id="minecraft:light_blue_shulker_box"
        title="&dminecraft"
    }
    version="1.0"
}
```

</details>

## INTERFACE

O GD fornece uma interface de definição de bandeira projetada para permitir que usuários e administradores administrem facilmente seus bandeiras de reivindicação.

Para exibir a interface de definição de bandeira, um comando de usuário deve executar o seguinte comando `/cf` ou `/gd flag Claim`

A interface será exibida na tela no bate-papo ou como uma interface de inventário.
Isso depende de qual permissão o usuário definiu e do status de alternância de `/claimgui`. Veja a página [Interface Principal](/br/wiki/basic/GUI.html#interface) para mais detalhes.

Assim que a interface de definição do bandeira for exibida, o usuário verá 2 subseções rotuladas como `PUBLIC` e `OWNER`.
Essas subseções funcionam da seguinte forma

### PÚBLICO

* Todas as definições de bandeiras sempre suportarão o tipo `PUBLIC` e, portanto, sempre serão listadas abaixo dele.
* Ao alternar uma definição de bandeira dentro de `PUBLIC` na interface, todos os players não confiáveis serão afetados.
* Todas as permissões serão definidas no grupo LP `griefdefender_definition`

### PROPRIETÁRIO

* Uma definição de bandeira só será exibida em `OWNER` se a definição de bandeira tiver `owner-mode` definido como `true`.
* Ao alternar uma definição de bandeira dentro de `OWNER` na interface, todos os jogadores confiáveis, incluindo o proprietário, serão afetados.
* Todas as permissões do bandeira de reivindicação serão definidas no usuário do LP que possui a reivindicação.
Observação: para reivindicações de área selvagem, todas as permissões de bandeira de reivindicação são definidas no usuário LP selvagem `_GDWorld_` com UUID `00000000-0000-0000-0000-000000000000`
Observação: para reivinidcalções administrativa, todas as permissões de bandeira de reivindicação são definidas no usuário administrador do LP `_GDAdmin_` com UUID `11111111-1111-1111-1111-111111111111`


### Permissões  

A permissão a seguir controla a capacidade do usuário de alternar as definições de bandeiras na interface 
`griefdefender.user.definition.flag.<preset>.<group>.<definition_name>`

Como exemplo, vamos supor que você queira negar o acesso do usuário para alternar o bandeira `damage-animals` na interface.
Você digitaria o seguinte em LuckPerms
`/lp group <groupname> conjunto de permissões griefdefender.user.definition.flag.minecraft.user.damage-animals false`

### Valores de sinalização

Conforme mostrado abaixo, ambos os bandeiras de administrador/usuário começam como `true` ou `false` e representam o valor ativo atual da reivindicação em que você está.

### ADMIN
:warning: As bandeiras de administrador APENAS afetarão a reivindicação em que você está.

![Interface do ADMIN](https://i.imgur.com/tSVSC7q.png)


Por padrão, os administradores têm acesso a 2 modos `PRESET` e `ADVANCED`.
O modo `PRESET` está diretamente ligado ao arquivo predefinido de definições de bandeira do minecraft. Cada grupo é lido na interface como uma guia junto com suas definições.
Existem 2 grupos entregues com os quais o GD é fornecido, `USER` e `ADMIN`.
 
Ambos os grupos aplicarão bandeiras para afirmar que você está de pé. Se você precisar de sinalizadbandeirasores definidos como padrão, configure-o na configuração conforme mostrado acima.


Definição de Sinalização                                  | Valor padrão | Descrição |
-------------------------------------------------|---------------|--------------|
```ambient-spawn``` |  true  | Controla se ambientes, como morcegos, aparecem.
```animal-block-modify``` |  true  | Controla se os animais podem modificar blocos, como coelhos comendo cenouras.
```animal-spawn``` |  true  | Controla se animais, como vacas/porcos/cavalos/etc., geram.
```aquatic-spawn``` |  true  | Controla se os aquáticos que vivem na água, como lulas, desovam.
```armorstand-use``` |  false | Controla se armaduras podem ser colocadas ou quebradas.
```block-trampling``` |  false  | Controla se terras arradads e ovos de tartaruga podem ser pisoteados.
```chorus-fruit-teleport``` | false | Controla se um jogador pode usar a fruta do coro para se teletransportar.
```commandblock-block-break``` | false | Controla se os blocos de comando podem quebrar blocos.
```commandblock-block-place``` | false | Controla se os blocos de comando podem colocar blocos.
```creeper-block-explosion``` | false | Controla se uma trepadeira pode explodir blocos.
```creeper-entity-explosion``` | false | Controla se uma trepadeira pode explodir entidades.
```endcrystal-use```      | false  | Controla se os cristais finais podem ser colocados ou quebrados.
```entity-armorstand-damage``` | false | Controla se as entidades podem causar dano a armaduras.
```entity-itemframe-damage``` | false | Controla se as entidades podem causar danos aos quadros de itens.
```exp-drop``` | true | Controla se orbes de experiência podem cair.
```fall-entity-damage``` | true | Controla se as entidades podem sofrer dano de queda.
```fall-player-damage``` | true | Controla se os jogadores podem sofrer dano de queda.
```falling-block-break``` | true | Controla se os blocos em queda podem quebrar.
```fire-block-damage``` | true | Controla se o fogo pode causar danos ao bloco.
```fire-entity-damage``` | true |  Controla se o fogo pode causar danos à entidade.
```lightning-damage```  | true | Controla se um raio pode causar danos.
```monster-animal-damage``` | false |  Controla se os monstros podem causar dano a animais.
```monster-player-damage``` | true | Controla se os monstros podem causar dano aos jogadores.
```monster-spawn```  | true | Controla se monstros, como trepadeiras e esqueletos, podem aparecer.
```piston-item-spawn``` | true | Controla se o micélio pode se espalhar.
```piston-use``` | false | Controla se os pistões podem ser usados.
```player-block-break``` | false | Controla se os jogadores podem quebrar blocos.
```player-block-interact``` | false | Controla se os jogadores podem interagir com os blocos.<br />Nota: Isso não inclui blocos de inventário, como baús.
```player-block-place``` | false | Controla se os jogadores podem colocar blocos.
```player-damage``` | true | Controla se os jogadores podem ser danificados.
```player-enderpearl-interact``` | true | Controla se os jogadores podem usar uma enderpearl.
```player-endportal-use``` | true | Controla se os jogadores podem usar o portal do fim.
```player-entity-interact``` | true | Controla se os jogadores podem interagir com entidades.<br />Nota: Isso não inclui acesso ao baú com entidades como cavalos.
```player-enter``` | true | Controla se um jogador pode entrar nesta reivindicação.
```player-exit``` | true | Controla se um jogador pode sair desta reivindicação.
```player-item-drop``` | true | Controla se os jogadores podem soltar itens.
```player-item-pickup``` | true | Controla se os jogadores podem pegar itens.
```player-itemframe-interact``` | false | Controla se os jogadores podem interagir com os quadros de itens.
```player-itemhanging-place``` | false | Controla se os jogadores podem colocar itens pendurados, como molduras de itens.
```player-netherportal-use``` | true | Controla se os jogadores podem usar o portal nether.
```player-teleport-from``` | true | Controla se os jogadores podem se teletransportar desta reivindicação.
```player-teleport-to``` | true | Controla se os jogadores podem se teletransportar para esta reivindicação.
```player-villager-damage``` | false | Controla se os jogadores podem causar dano aos aldeões.
```ravager-block-break``` | true | Controla se os saqueadores podem quebrar blocos durante as invasões.
```silverfish-block-infest``` | false | Controla se o silverfish pode infestar blocos como paralelepípedos.
```tnt-block-explosion``` | false | Controla se o tnt pode explodir blocos.
```tnt-entity-explosion``` | false | Controla se o tnt pode explodir entidades.
```turtle-egg-hatch``` | true | Controla se os ovos de tartaruga podem eclodir.
```villager-farm``` | true | Controla se as aldeias podem cultivar colheitas.
```wither-block-break``` | false | Controla se a cernelha pode quebrar blocos.
```wither-entity-damage``` | true | Controla se a cernelha pode danificar entidades.

### USER
:warning: As bandeiras do usuário APENAS afetarão a reivindicação em que você está.
:warning: Se você deseja modificar as definições do bandeira `USER` em uma reivindicação que não é sua, você deve ter permissões ignoreclaims e digite `/ignoreclaims` antes de executar o comando `/cf`.


Como usuário, se você digitar o comando `/cf`, verá o seguinte

![INterface do jogador](https://i.imgur.com/LTeNaaD.png)

Definição de Sinalização                                  | Valor padrão | Descrição | 
-------------------------------------------------|---------------|--------------|
```block-fertilize``` | false | Controla se um jogador pode fertilizar um bloco com farinha de ossos.
```chest-access``` | false | Controla se um jogador pode acessar inventários de baús.
```crop-growth``` | true | Controla se as agriculturas (trigos, melancia, etc...) podem crescer.
```damage-animals``` | false | Controla se os animais podem ser tomar dano.
```enderman-grief``` | false | Controla se o enderman pode pegar/colocar bloco.
```fire-spread``` | false | Controla se o fogo pode se espalhar.
```grass-growth``` | true | Controla se a grama pode crescer.
```ice-form``` | true | Controla se o gelo pode se formar.
```ice-melt``` | true | Controla se o gelo pode derreter.
```lava-flow``` | false | Controla se a lava pode fluir.
```leaf-decay``` | true | Controla se as folhas podem decair.
```lighter``` | false | Controla se um jogador pode usar pederneira.
```mushroom-growth``` | true | Controla se os cogumelos podem crescer.
```mycelium-spread``` | true | Controla se o micélio pode se espalhar.
```painting-damage``` | false | Controla se os jogadores podem quebrar pinturas.
```pvp``` | true | Controla se o combate PvP é permitido.
```ride``` | false | Controla se veículos (incluindo animais), não pertencentes ao jogador, podem ser montados.
```sign-use``` | true | Controla se os jogadores podem usar placas (Útil para lojas ou interações com placas).
```sleep``` | true | Controla se os jogadores podem dormir em camas
```snow-fall``` | true | Controla se a neve pode cair.
```snow-melt``` | true | Controla se a neve pode derreter.
```snowman-trail``` | true | Controla se os bonecos de neve podem criar neve abaixo deles.
```soil-dry``` | true | Controla se o solo vai secar.
```vehicle-use``` | false | Controla se os veículos (botes, carrinhos de mina, etc.) podem ser colocados, montados e quebrados.
```villager-trade``` | true | Controla se os jogadores podem negociar com os aldeões.
```vine-growth``` | true | Controla se trepadeiras (e algas) podem crescer.
```water-flow``` | false | Controla se a água pode fluir.

