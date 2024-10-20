---
title: Interface de definições de bandeira
tag: flags
category: claim
icon: screen
---

## Configuração

O sistema de definição de bandeiras fornece aos usuários e administradores a capacidade de gerenciar seus bandeiras de reivindicação em um [Bate-papo](/br/wiki/basic/GUI.html#bate-papo) ou [Inventário](/br/wiki/basic/GUI.html#inventario) interface.  
GriefDefender oferece um pacote de definições de bandeiras por padrão para fornecer a melhor compatibilidade entre servidores.  
Os dados de definição de bandeira vanilla entregues podem ser encontrados no seguinte local

Fabric, Forge e Sponge está localizada em  

`./config/GriefDefender/presets/minecraft.yml`  

Bukkit & Hybrid está localizada em  

`./plugins/GriefDefender/presets/minecraft.yml`  



Os administradores recebem controle total para adicionar/remover/personalizar definições de bandeiras.   

Para adicionar uma definição de bandeira a uma predefinição de minecraft entregue existente, abra o arquivo `./presets/minecraft.yml`.  
Nesta seção, você verá 2 grupos entregues `admin` e `user`.  

Todas as definições de bandeiras localizadas dentro do `admin` grupo são acessíveis apenas por administradores. Isto é devido ao `admin-group` configuração seja definida como `true`.  
Todas as definições de bandeiras localizadas dentro do `user` grupo são acessíveis a todos os usuários.  
Você pode adicionar/remover/mover definições de bandeiras como desejar e até mesmo criar novos arquivos predefinidos do zero que serão lidos quando a GUI for carregada.  

### Definição de bandeira

Se você quiser adicionar um bandeira à seção 'admin', faça o seguinte  
1. Clone uma definição de bandeira existente. Nós vamos usar `villager-trade` para este exemplo.  

```
villager-trade {
    contexts=[
        "gd_claim_default=user"
    ]
    default-groups {}
    default-value=true
    enabled=true
    icon {
        enchanted=false
        icon-flags=[
            "hide_attributes"
        ]
        id="minecraft:emerald"
        title="&6villager-trade"
    }
    owner-mode=false
    permissions=[
        "flag=interact-entity-secondary, target=minecraft:villager, source=minecraft:player"
    ]
}
```

Vamos analisar este exemplo  

#### Name  

`villager-trade` - Este é o nome da sua definição que será exibida aos usuários quando eles a abrirem na GUI do bandeira. Pode ser o que você quiser.  
Nota: Estes não são bandeiras principais do GD reais, mas sim um `flag definition` e não pode ser usado com o `/cf` comando. Se você quiser alternar uma definição de bandeira com um comando, use `/claimflagdefinition` ou `/gd flag definition`  

#### Contextos  

:::: warning Importante  
Os contextos definidos na definição do bandeira NÃO se aplicam quando alternados na GUI. Eles são usados apenas durante a inicialização do servidor. A GUI sempre aplicará bandeiras à reivindicação do jogador usando o contexto `gd_claim`.  
::::  

```
contexts=[
    "gd_claim_default=user"
]
```
Estes são os contextos de definição que serão usados com todas as permissões definidas dentro `permissions=[...]`.  
Atualmente só suporta chaves de contexto `gd_claim_default` e `gd_claim_override`.  

`gd_claim_default` - Este contexto é usado com a maioria das definições. Ele instrui GD a aplicar a definição na inicialização do servidor a todas as declarações existentes/novas.   
Este contexto aceita os seguintes valores :   
`admin` - Aplicar definição apenas a declarações administrativas.   
`basic` - Aplicar definição apenas a reivindicações básicas.  
`subdivision` - Aplicar definição apenas a subdivisões.  
`town`  - Aplicar definição apenas a cidades.  
`global`  - Aplique a definição a TODAS as reivindicações, incluindo áreas selvagens.  
`user` - Aplicar definição a TODAS as reivindicações, exceto áreas selvagens.  

Nota: O contexto padrão SEMPRE aplica permissões como transitórias em LuckPerms. Em outras palavras, as permissões só existem na memória enquanto o servidor está em execução. Se a definição do bandeira for alternada na GUI do GD ou definida por um administrador via comando ou editor, ela terá prioridade sobre os padrões, pois persistirá no armazenamento LP.  
Nota: Flags alternados na GUI serão armazenados em `griefdefender_definition` ae terá prioridade sobre o `default-value` definido em definição. Removendo essas permissões de `griefdefender_definition` forçará o GD a retornar aos valores padrão das definições predefinidas.  


`gd_claim_override` - Este contexto é usado com algumas definições. Ele instrui GD a aplicar a definição na inicialização do servidor como uma substituição para todas as declarações existentes/novas.  
Este contexto aceita os seguintes valores :  
`admin` - Aplicar definição apenas a declarações administrativas.  
`basic` - Aplicar definição apenas a reivindicações básicas.  
`subdivision` - Aplicar definição apenas a subdivisões.  
`town`  - Aplicar definição apenas a cidades.  
`global`  - Aplicar definição a TODAS as reivindicações, incluindo áreas selvagens.  
`user` - Aplicar definição a TODAS as reivindicações, exceto áreas selvagens.  

Nota: Este contexto tem maior prioridade do que `gd_claim_default`. Durante a inicialização do servidor, GD aplicará qualquer definição de bandeira usando o contexto de substituição como uma permissão persistente no grupo LP `griefdefender_override` que tem a prioridade mais alta dos grupos de bandeiras GD.  

Veja [GriefDefender - Contexto](/br/wiki/advanced/Contexts.html) para obter mais informações sobre como os contextos funcionam no GD.  
Veja [LuckPerms - Context](https://luckperms.net/wiki/Context) para obter mais informações sobre como os contextos funcionam com LP.  

#### Grupos padrão

A seção `default-groups` permite que administradores segmentem grupos LP específicos com seus próprios valores padrão. Essas permissões sempre serão aplicadas como persistentes no LP, o que significa que existirão no armazenamento.  

##### Exemplo 1

Se você deseja fornecer valores padrão com base na confiança, você pode fazer o seguinte :  

```
default-groups {
    accessor=false,
    container=false
}
```

Isso impediria que usuários com acessor e contêiner confiáveis interagissem com os moradores por padrão. No entanto, o proprietário de uma reivindicação pode substituir esse padrão alternando o bandeira `villager-trade` no menu `ACCESSOR` ou `CONTAINER` na GUI.  
Nota: Por padrão, os usuários só poderão controlar bandeiras `PUBLIC` na GUI. Para que um usuário controle os bandeiras de confiança do usuário, ele deve receber as seguintes permissões: 

```
griefdefender.advanced.user.gui.flag.group.owner
griefdefender.advanced.user.gui.flag.group.accessor
griefdefender.advanced.user.gui.flag.group.builder
griefdefender.advanced.user.gui.flag.group.container
griefdefender.advanced.user.gui.flag.group.manager
```

Nota: Na verdade, esses grupos LP são prefixados com `griefdefender_`, mas GD permite que você omita o prefixo. Outros grupos LP requerem o nome completo do grupo.  


##### Exemplo 2

Por padrão, proibir que os usuários do grupo `novato` interajam com todos os moradores nas reivindicações.  

```
default-groups {
    novice=false
}
```

Mesmo que o `valor padrão` seja definido como `true` por padrão, esta configuração instruiria GD a negar a qualquer usuário do grupo `novato` a interação com os aldeões.  


##### Exemplo 3

Defina o padrão que afeta todos os proprietários de reivindicações existentes.  

```
default-groups {
    manager=false
}
```

O grupo confiável do gerenciador tem um caso de uso especial para a seção `default-groups`. Isso não afeta apenas os usuários com confiança dos gerentes, mas também os proprietários. Os administradores podem utilizar este grupo para controlar os padrões do proprietário da reivindicação.  

Nota: Se você deseja impedir que os proprietários de declarações substituam esse valor padrão, você deve negar a permissão `griefdefender.advanced.user.gui.flag.group.manager` para que eles não possam ver o grupo na GUI.  

#### Valor padrão  

`default-value=true` - Este é o valor padrão que o GD usará ao aplicar a definição durante a inicialização.  
GD só aplicará este valor durante a inicialização como uma permissão transitória se o contexto for `gd_claim_default` . Se o contexto for `gd_claim_override` então ele aplicará o valor como uma permissão persistente ao grupo `griefdefender_override`.  
Se a definição não contiver um desses contextos, o valor padrão será ignorado.  

#### Habilitado  

`enabled=true` - Isto controla se a definição está habilitada no GD. Se definido como `false`, a definição não será aplicada na inicialização do servidor e NÃO será mostrada aos usuários na GUI.  

#### Ícone

Esta configuração controla as configurações do ícone que serão usadas quando a definição do bandeira for exibida na GUI do inventário. Isso NÃO afeta nada na GUI do Chat.
As seguintes configurações de ícone podem ser usadas na seção de ícones:  

Chave            |  Tipo | Descrição | 
---------------|---------------|--------------|
```enchanted``` | Boolean      | Controls whether the icon glows when displayed.
```icon-flags``` | List  | Controls what shows up on overlay of the icon via flags. Accepts the following flag values : <br>    ```hide_attributes``` - Controls whether icon attributes are displayed. <br> ```hide_destroys``` - Controls whether to show what can break or destroy. <br>  ```hide_dye``` - Controls whether to show dyes. <br>  ```hide_enchants``` - Controls whether to show enchants. <br> ```hide_placed_on``` - Controls whether to show what can be built or placed on.<br>```hide_potion_effects``` - Controls whether to show potion effects.<br>```hide_unbreakable``` - Controls whether to show the unbreakable state.
```lore``` | String | Controls the lore displayed when hovering over icon.
```quantity``` | Integer | Controls the quantity displayed with icon.
```model-data``` | Integer | Controls the custom model data associated with icon.
```id``` | String | The identifier used for the icon. <br> Ex. ```minecraft:emerald``` <br> See [Minecraft ID List](https://minecraft-ids.grahamedgecombe.com/) for a complete list of identifiers that can be used for icons.
```title``` | String | Controls the hover title displayed when hovering over icon. <br> Ex. ```&6villager-trade```.

#### Owner mode
:::: warning Importante  
Para que os jogadores utilizem o modo proprietário, eles devem ter a seguinte permissão `griefdefender.advanced.user.gui.flag.group.owner`. Se um jogador não tiver essa permissão, ele não verá a seção do proprietário na GUI.  
::::  

O modo proprietário só é aplicável quando uma ação de definição de bandeira pode ser causada por um jogador.  
Por exemplo, `fall-player-damage` afeta se um jogador pode receber dano ao cair. Se este bandeira for definido na seção `PUBLIC`, afetará apenas usuários não confiáveis. No entanto, se a definição do bandeira tiver `owner-mode` definido como `true`, então este bandeira também será exibido na seção `OWNER`, permitindo que os proprietários de sinistros controlem se devem ou não receber danos por queda em seus sinistros.  

Nota: Na maioria dos casos, `owner-mode` está definido como falso e não é usado.  


#### Permissões  

```
permissions=[
    "flag=interact-entity-secondary, target=minecraft:villager, source=minecraft:player"
]
```

Esta definição de bandeira contém apenas 1 entrada de permissão.  

`flag=interact-entity-secondary` - Usa o bandeira base `interact-entity-secondary` que é acionado quando um jogador clica com o botão direito em uma entidade no mundo.  
`target=minecraft:villager` - Define o alvo para o aldeão.  
`source=minecraft:player` - Define a fonte para o player.  

Para que esta definição seja acionada, o jogador deve clicar com o botão direito em um aldeão no mundo.  

As permissões podem conter uma ou mais entradas de bandeiras. Para adicionar uma linha adicional, adicione um `,` no final da linha anterior e insira uma nova linha.     
Cada linha requer uma entrada `flag=<flag_name>` seguida pelo contexto de origem ou de destino.  
Se você deseja aplicar uma permissão a todos os alvos possíveis, não inclua `target`, pois o GD será aplicado automaticamente a todos os alvos.   
Se você deseja aplicar uma permissão a todas as fontes possíveis, então não inclua `source`, pois o GD será aplicado automaticamente a todas as fontes.   

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

1. Execute o comando `/gddebug record claim` - Isso iniciará uma sessão de depuração na reivindicação em que você está.  
2. Execute uma ação que você deseja gerenciar por meio da definição do bandeira.  
3. Execute o comando `/gddebug paste` - Isso exibirá um link da web para visualizar os resultados da depuração.  
4. Abra o link e você verá uma lista de ações que o GD verificou para a reivindicação. Você terá uma coluna `source` e `target` que conterá os valores que você precisa.  

Para localizar um valor para `used_item` ou qualquer outro contexto, localize a coluna Context e você verá uma lista de todos os contextos de suporte para a ação de linha específica.  

Outra maneira de encontrar o ID que você está procurando é verificar um wiki da comunidade para ele  

Veja [Contexts](/br/wiki/advanced/Contexts.html) para obter mais informações sobre como os contextos funcionam.  
Veja [Minecraft ID List](https://minecraft-ids.grahamedgecombe.com/)  


### Configuração predefinida de definição de bandeira do Minecraft  

Para obter mais informações sobre o que você pode fazer com a configuração dos bandeiras, veja abaixo

<details>
  <summary>Minecraft Preset</summary>

```
# A collection of definitions designed for vanilla minecraft.
# Each group defined will be displayed in the flag or option GUI for users.
# Groups can have the following settings : 
# enabled=<true|false>: Whether the group is enabled.
# admin-group=<true|false>: Whether this group is considered for admin use only.
# Note: GUI toggles in PRESETS will always apply to current claim only.
#    It is recommended not to assign this permission to users for best experience.
# value=<true|false>: This is used to set a default value for the definition. It is only used in conjunction with 'override=<type>, default=<type> settings.
# contexts=["key=value"]: A list of definition contexts that will be applied to all permissions.
# Note: This is primary used with 'default' and 'override' contexts. Ex. contexts=["default=global"]
# Note: You must specify one of the following contexts :'gd_claim_default=<type>' or 'gd_claim_override=<type>''
# Note: Context values support wildcards '?' and '*' by using Apache's wildcard matcher.
# The wildcard '?' represents a single character.
# The wildcard '*' represents zero or more characters.
# Each group will have an associated permission in order to be viewable.
# The user groups will use the permission : 'griefdefender.user.definition.flag.<preset>.<group>' and 'griefdefender.user.definition.option.<preset>.<group>'
# The admin groups will use the permission : 'griefdefender.admin.definition.flag.<preset>.<group>' and 'griefdefender.admin.definition.option.<preset>.<group>'
# Within each group, you can define definitions.
# Each flag definition must be defined in the following format:
# enabled: Controls whether the definition is enabled. Accepts a value of 'true' or 'false'
# default-value: The default value to assign flag definition.
# description: The flag description to display on hover. Uses the legacy text format.
# permissions: The list of permissions to link to definition. Permissions can accept various contexts such as :
# flag=<linked-flag>: This context is used to link the permission to a GD specific flag. Ex. 'flag=block-break' would link permission to GD's block-break flag
# source=<id>: This context is used to specify a source id such as 'minecraft:creeper'.
# target=<id>: This context is used to specify a target id such as 'minecraft:chest'.
# state=<properties>: This context is used to specify a blockstate property such as 'state=lit:true'.
# Note: All definitions that contain a definition context of 'gd_claim_default' or 'gd_claim_override' will be applied to permissions during server startup.
# Note: Required if no source or target context is specified, the permission will default to ALL.
# Note: Commonly used contexts are : flag, source, target, state, used_item, item_name, world, server
# These contexts may change, See https://github.com/bloodmc/GriefDefender/wiki/Contexts for latest information.

minecraft {
    # The plugin id's that this preset depends on in order to load. Note: Plugin id's should be separated by comma. Note: Leave blank if only using GriefDefender flags/options.
    depend=""
    enabled=true
    groups {
        admin {
            # Set to true if this definition group is for admin use only.
            # Note: If admin group, the permission is 'griefdefender.admin.custom.flag.<groupname>
            # Note: If user group (admin set false), the permission is 'griefdefender.user.definition.flag.<preset>.<group>.<flagname>
            admin-group=true
            definitions {
                ambient-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:bat_spawn_egg"
                        title="&6ambient-spawn"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-spawn, target=#ambient"
                    ]
                }
                animal-block-modify {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:chorus_plant"
                        title="&6animal-block-modify"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=block-break, source=#animal",
                        "flag=block-modify, source=#animal"
                    ]
                }
                animal-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:pig_spawn_egg"
                        title="&6animal-spawn"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-spawn, target=#animal"
                    ]
                }
                aquatic-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:squid_spawn_egg"
                        title="&6aquatic-spawn"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-spawn, target=#aquatic"
                    ]
                }
                armorstand-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:armor_stand"
                        title="&6armorstand-use"
                    }
                    owner-mode=true
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
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:chorus_fruit"
                        title="&6chorus-fruit-teleport"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=item-use, target=minecraft:chorus_fruit, source=minecraft:player"
                    ]
                }
                commandblock-block-break {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:command_block"
                        title="&6commandblock-block-break"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=block-break, source=minecraft:command_block, source=minecraft:chain_command_block, source=minecraft:repeating_command_block"
                    ]
                }
                commandblock-block-place {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:command_block"
                        title="&6commandblock-block-place"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=block-place, source=minecraft:command_block, source=minecraft:chain_command_block, source=minecraft:repeating_command_block"
                    ]
                }
                creeper-block-explosion {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:creeper_head"
                        title="&6creeper-block-explosion"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=explosion-block, source=minecraft:creeper"
                    ]
                }
                creeper-entity-explosion {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:creeper_head"
                        title="&6creeper-entity-explosion"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=explosion-entity, source=minecraft:creeper"
                    ]
                }
                endcrystal-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:end_crystal"
                        title="&6endcrystal-use"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=projectile-impact-entity, target=minecraft:end_crystal, source=minecraft:arrow",
                        "flag=interact-item-secondary, target=minecraft:end_crystal, source=minecraft:player",
                        "flag=entity-damage, target=minecraft:end_crystal, source=minecraft:player",
                        "flag=interact-entity-secondary, target=minecraft:end_crystal, source=minecraft:player"
                    ]
                }
                entity-armorstand-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=true
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:armor_stand"
                        title="&6entity-armorstand-damage"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-damage, target=minecraft:armor_stand, source=minecraft:player",
                        "flag=projectile-impact-entity, target=minecraft:armor_stand, source=minecraft:player",
                        "flag=entity-damage, source=#monster, target=minecraft:armor_stand",
                        "flag=projectile-impact-entity, source=#monster, target=minecraft:armor_stand"
                    ]
                }
                entity-itemframe-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=true
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:item_frame"
                        title="&6entity-itemframe-damage"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-damage, target=minecraft:glow_item_frame, target=minecraft:item_frame",
                        "flag=projectile-impact-entity, target=minecraft:glow_item_frame, target=minecraft:item_frame"
                    ]
                }
                exp-drop {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:experience_bottle"
                        title="&6exp-drop"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-spawn, target=minecraft:xp_orb"
                    ]
                }
                fall-entity-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=true
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:feather"
                        title="&6fall-entity-damage"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-damage, source=minecraft:fall"
                    ]
                }
                fall-player-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:feather"
                        title="&6fall-player-damage"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-damage, target=minecraft:player, source=minecraft:fall"
                    ]
                }
                falling-block-break {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:sand"
                        title="&6falling-block-break"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-break, source=minecraft:fall"
                    ]
                }
                fire-block-damage {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:magma_block"
                        title="&6fire-block-damage"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=block-modify, source=minecraft:fire"
                    ]
                }
                fire-entity-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:magma_cream"
                        title="&6fire-entity-damage"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-damage, source=minecraft:fire",
                        "flag=entity-damage, source=minecraft:fire_tick",
                        "flag=entity-damage, source=minecraft:magma_block",
                        "flag=entity-damage, source=minecraft:lava"
                    ]
                }
                lightning-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:dead_bush"
                        title="&6lightning-damage"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-damage, source=minecraft:lightning_bolt"
                    ]
                }
                monster-animal-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:skeleton_skull"
                        title="&6monster-animal-damage"
                    }
                    owner-mode=false
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
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:zombie_head"
                        title="&6monster-player-damage"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=entity-damage, source=#monster, target=minecraft:player",
                        "flag=projectile-impact-entity, source=#monster, target=minecraft:player"
                    ]
                }
                monster-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:zombie_spawn_egg"
                        title="&6monster-spawn"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-spawn, target=#monster"
                    ]
                }
                piston-item-spawn {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:piston"
                        title="&6piston-item-spawn"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=item-spawn, source=minecraft:piston",
                        "flag=item-spawn, source=minecraft:sticky_piston"
                    ]
                }
                piston-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:sticky_piston"
                        title="&6piston-use"
                    }
                    owner-mode=true
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
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:diamond_pickaxe"
                        title="&6player-block-break"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=block-break, source=minecraft:player"
                    ]
                }
                player-block-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:stone_button"
                        title="&6player-block-interact"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=interact-block-secondary, source=minecraft:player"
                    ]
                }
                player-block-place {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:grass_block"
                        title="&6player-block-place"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=block-place, source=minecraft:player"
                    ]
                }
                player-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:cactus"
                        title="&6player-damage"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=entity-damage, target=minecraft:player",
                        "flag=projectile-impact-entity, target=minecraft:player"
                    ]
                }
                player-deny-flight {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="false"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:feather"
                        title="&6player-deny-flight"
                    }
                    permissions=[
                        "option=player-deny-flight"
                    ]
                }
                player-deny-glide {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="false"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:elytra"
                        title="&6player-deny-glide"
                    }
                    permissions=[
                        "option=player-deny-glide"
                    ]
                }
                player-deny-godmode {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="false"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:totem_of_undying"
                        title="&6player-deny-godmode"
                    }
                    permissions=[
                        "option=player-deny-godmode"
                    ]
                }
                player-deny-hunger {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="false"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:cooked_beef"
                        title="&6player-deny-hunger"
                    }
                    permissions=[
                        "option=player-deny-hunger"
                    ]
                }
                player-enderpearl-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:ender_pearl"
                        title="&6player-enderpearl-interact"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=interact-item-secondary, source=minecraft:player, target=minecraft:ender_pearl"
                    ]
                }
                player-endportal-use {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:end_portal_frame"
                        title="&6player-endportal-use"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-teleport-from, source=minecraft:end_portal, target=minecraft:player"
                    ]
                }
                player-entity-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:carrot_on_a_stick"
                        title="&6player-entity-interact"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=interact-entity-secondary, source=minecraft:player"
                    ]
                }
                player-exit {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:iron_door"
                        title="&6player-exit"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=exit-claim, source=minecraft:player"
                    ]
                }
                player-fly-speed {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="0"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:firework_rocket"
                        title="&6player-fly-speed"
                    }
                    permissions=[
                        "option=player-fly-speed"
                    ]
                }
                player-gamemode {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=undefined
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:emerald_block"
                        title="&6player-gamemode"
                    }
                    permissions=[
                        "option=player-gamemode"
                    ]
                }
                player-health-regen {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="0"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:glistering_melon_slice"
                        title="&6player-health-regen"
                    }
                    permissions=[
                        "option=player-health-regen"
                    ]
                }
                player-item-drop {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:dropper"
                        title="&6player-item-drop"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=item-drop, source=minecraft:player"
                    ]
                }
                player-item-drop-lock {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="false"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:piston"
                        title="&6player-item-drop-lock"
                    }
                    permissions=[
                        "option=player-item-drop-lock"
                    ]
                }
                player-item-pickup {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:hopper"
                        title="&6player-item-pickup"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=item-pickup, source=minecraft:player"
                    ]
                }
                player-itemframe-interact {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:item_frame"
                        title="&6player-itemframe-interact"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=interact-entity-secondary, target=minecraft:glow_item_frame, target=minecraft:item_frame, source=minecraft:player"
                    ]
                }
                player-itemhanging-place {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:item_frame"
                        title="&6player-itemhanging-place"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=interact-item-secondary, target=#hanging, source=minecraft:player"
                    ]
                }
                player-keep-inventory {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=undefined
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:ender_chest"
                        title="&6player-keep-inventory"
                    }
                    permissions=[
                        "option=player-keep-inventory"
                    ]
                }
                player-keep-level {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=undefined
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:experience_bottle"
                        title="&6player-keep-level"
                    }
                    permissions=[
                        "option=player-keep-level"
                    ]
                }
                player-netherportal-use {
                    contexts=[
                        "gd_claim_default=global"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:obsidian"
                        title="&6player-netherportal-use"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-teleport-from, source=minecraft:nether_portal, target=minecraft:player"
                    ]
                }
                player-teleport-cost {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="0"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:ender_eye"
                        title="&6player-teleport-cost"
                    }
                    permissions=[
                        "option=player-teleport-cost"
                    ]
                }
                player-teleport-delay {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="0"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:clock"
                        title="&6player-teleport-delay"
                    }
                    permissions=[
                        "option=player-teleport-delay"
                    ]
                }
                player-teleport-from {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:magenta_glazed_terracotta"
                        title="&6entity-itemframe-damage"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-teleport-from, target=minecraft:player"
                    ]
                }
                player-teleport-to {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=true
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:magenta_glazed_terracotta"
                        title="&6entity-itemframe-damage"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-teleport-to, target=minecraft:player"
                    ]
                }
                player-villager-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:tripwire_hook"
                        title="&6player-villager-damage"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=entity-damage, target=minecraft:villager, source=minecraft:player",
                        "flag=projectile-impact-entity, target=minecraft:villager, source=minecraft:player"
                    ]
                }
                player-walk-speed {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="0"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:leather_boots"
                        title="&6player-walk-speed"
                    }
                    permissions=[
                        "option=player-walk-speed"
                    ]
                }
                player-weather {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=undefined
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:lightning_rod"
                        title="&6player-weather"
                    }
                    permissions=[
                        "option=player-weather"
                    ]
                }
                pvp-combat-command {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="false"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:command_block"
                        title="&6pvp-combat-command"
                    }
                    permissions=[
                        "option=pvp-combat-command"
                    ]
                }
                pvp-combat-teleport {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="false"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:ender_pearl"
                        title="&6pvp-combat-teleport"
                    }
                    permissions=[
                        "option=pvp-combat-teleport"
                    ]
                }
                ravager-block-break {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:ravager_spawn_egg"
                        title="&6ravager-block-break"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-break, source=minecraft:ravager"
                    ]
                }
                silverfish-block-infest {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:infested_cobblestone"
                        title="&6silverfish-block-infest"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-modify, source=minecraft:silverfish"
                    ]
                }
                tnt-block-explosion {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:tnt"
                        title="&6tnt-block-explosion"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=explosion-block, source=minecraft:tnt"
                    ]
                }
                tnt-entity-explosion {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:tnt"
                        title="&6tnt-entity-explosion"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=explosion-entity, source=minecraft:tnt"
                    ]
                }
                turtle-egg-hatch {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:egg"
                        title="&6turtle-egg-hatch"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-place, source=minecraft:turtle, target=minecraft:turtle_egg",
                        "flag=block-break, source=minecraft:turtle_egg, target=minecraft:turtle_egg",
                        "flag=block-modify, source=minecraft:turtle_egg, target=minecraft:turtle_egg",
                        "flag=entity-damage, source=minecraft:turtle_egg, target=minecraft:turtle_egg"
                    ]
                }
                villager-farm {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:composter"
                        title="&6villager-farm"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-break, source=minecraft:villager, target=#crops",
                        "flag=block-place, source=minecraft:villager, target=#crops"
                    ]
                }
                villager-raid {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value="false"
                    enabled=true
                    icon {
                        enchanted=false
                        id="minecraft:crossbow"
                        title="&6villager-raid"
                    }
                    permissions=[
                        "option=raid"
                    ]
                }
                wither-block-break {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:wither_skeleton_skull"
                        title="&6wither-block-break"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-break, source=minecraft:wither"
                    ]
                }
                wither-entity-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:nether_star"
                        title="&6wither-entity-damage"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=entity-damage, source=minecraft:wither"
                    ]
                }
            }
            # Whether definition group is enabled.
            enabled=true
            icon {
                enchanted=false
                id="minecraft:enchanted_golden_apple"
                title="&cAdmin"
            }
        }
        user {
            # Set to true if this definition group is for admin use only.
            # Note: If admin group, the permission is 'griefdefender.admin.custom.flag.<groupname>
            # Note: If user group (admin set false), the permission is 'griefdefender.user.definition.flag.<preset>.<group>.<flagname>
            admin-group=false
            definitions {
                block-fertilize {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:bone_meal"
                        title="&6block-fertilize"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=block-grow, used_item=minecraft:bone_meal, target=#crops, source=minecraft:player",
                        "flag=block-grow, used_item=minecraft:bone_meal, target=#plants, source=minecraft:player",
                        "flag=interact-item-secondary, target=minecraft:bonemeal, source=minecraft:player"
                    ]
                }
                block-trampling {
                    contexts=[
                        "gd_claim_override=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:dirt"
                        title="&6block-trampling"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=collide-block, target=minecraft:turtle_egg, target=minecraft:farmland"
                    ]
                }
                chest-access {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:chest"
                        title="&6chest-access"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=interact-block-secondary, target=minecraft:chest_minecart, target=minecraft:chest, source=minecraft:player, target=minecraft:trapped_chest",
                        "flag=interact-inventory, target=minecraft:chest_minecart, target=minecraft:chest, source=minecraft:player, target=minecraft:trapped_chest"
                    ]
                }
                crop-growth {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:wheat"
                        title="&6crop-growth"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-grow, target=#crops"
                    ]
                }
                damage-animals {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:mutton"
                        title="&6damage-animals"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-damage, target=#animal",
                        "flag=projectile-impact-entity, target=#animal",
                        "flag=entity-damage, target=#fishes",
                        "flag=projectile-impact-entity, target=#fishes"
                    ]
                }
                enderman-grief {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:ender_eye"
                        title="&6enderman-grief"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-break, source=minecraft:enderman",
                        "flag=block-place, source=minecraft:enderman"
                    ]
                }
                fire-spread {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:blaze_powder"
                        title="&6fire-spread"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=block-spread, source=minecraft:fire",
                        "flag=block-spread, source=minecraft:lava"
                    ]
                }
                grass-growth {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:tall_grass"
                        title="&6grass-growth"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-grow, target=minecraft:grass"
                    ]
                }
                ice-form {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:packed_ice"
                        title="&6ice-form"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-modify, target=minecraft:ice"
                    ]
                }
                ice-melt {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:blue_stained_glass"
                        title="&6ice-melt"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-modify, target=minecraft:water, source=minecraft:ice"
                    ]
                }
                lava-flow {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:lava_bucket"
                        title="&6lava-flow"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=liquid-flow, source=minecraft:lava, target=minecraft:air"
                    ]
                }
                leaf-decay {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:oak_leaves"
                        title="&6leaf-decay"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=leaf-decay"
                    ]
                }
                lighter {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:flint_and_steel"
                        title="&6lighter"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=interact-item-secondary, target=minecraft:flint_and_steel, source=minecraft:player"
                    ]
                }
                mushroom-growth {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:brown_mushroom_block"
                        title="&6mushroom-growth"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-grow, target=#mushroom"
                    ]
                }
                mycelium-spread {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:mycelium"
                        title="&6mycelium-spread"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-spread, target=minecraft:mycelium"
                    ]
                }
                painting-damage {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:painting"
                        title="&6painting-damage"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-damage, target=minecraft:painting"
                    ]
                }
                player-enter {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:oak_door"
                        title="&6player-enter"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=enter-claim, source=minecraft:player"
                    ]
                }
                pvp {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:diamond_sword"
                        title="&6pvp"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=entity-damage, target=minecraft:player, source=minecraft:player",
                        "flag=projectile-impact-entity, target=minecraft:player, source=minecraft:player"
                    ]
                }
                ride {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:saddle"
                        title="&6ride"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=entity-riding, target=#vehicle, source=minecraft:player",
                        "flag=interact-entity-secondary, target=#vehicle, source=minecraft:player"
                    ]
                }
                sign-edit {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:oak_sign"
                        title="&6sign-edit"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-modify, target=#signs, source=minecraft:player"
                    ]
                }
                sign-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:oak_sign"
                        title="&6sign-use"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=interact-block-primary, target=#signs, source=minecraft:player",
                        "flag=interact-block-secondary, target=#signs, source=minecraft:player"
                    ]
                }
                sleep {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:red_bed"
                        title="&6sleep"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=interact-block-secondary, target=#beds, source=minecraft:player",
                        "flag=interact-item-secondary, target=#beds, source=minecraft:player"
                    ]
                }
                snow-fall {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:snowball"
                        title="&6snow-fall"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-place, target=minecraft:snow, source=minecraft:air"
                    ]
                }
                snow-melt {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:snow_block"
                        title="&6snow-melt"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-break, source=minecraft:snow"
                    ]
                }
                snowman-trail {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:snow"
                        title="&6snowman-trail"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-place, source=minecraft:snow_golem, target=minecraft:snow"
                    ]
                }
                soil-dry {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:farmland"
                        title="&6soil-dry"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-modify, source=minecraft:farmland, state=moisture:0"
                    ]
                }
                vehicle-use {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:oak_boat"
                        title="&6vehicle-use"
                    }
                    owner-mode=true
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
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:emerald"
                        title="&6villager-trade"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=interact-entity-secondary, target=minecraft:villager, source=minecraft:player"
                    ]
                }
                vine-growth {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=true
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:vine"
                        title="&6vine-growth"
                    }
                    owner-mode=false
                    permissions=[
                        "flag=block-spread, target=minecraft:vine"
                    ]
                }
                water-flow {
                    contexts=[
                        "gd_claim_default=user"
                    ]
                    default-groups {}
                    default-value=false
                    enabled=true
                    icon {
                        enchanted=false
                        icon-flags=[
                            "hide_attributes"
                        ]
                        id="minecraft:water_bucket"
                        title="&6water-flow"
                    }
                    owner-mode=true
                    permissions=[
                        "flag=liquid-flow, source=minecraft:water, target=minecraft:air",
                        "flag=liquid-flow, source=minecraft:water, target=#crops"
                    ]
                }
            }
            # Whether definition group is enabled.
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

## GUI  

GD fornece uma GUI de definição de bandeiras que é projetada para permitir que usuários e administradores administrem facilmente seus bandeiras de reivindicação.  

Para exibir a GUI de definição de bandeira, um comando do usuário deve executar o seguinte comando `/cf` ou `/gd flag claim`  

A GUI será então exibida na tela no CHAT ou como uma GUI de inventário.  
Isso depende da permissão que o usuário definiu e do status de alternância de `/claimgui`. Consulte a página [GUI principal](/wiki/basic/GUI.html) para obter mais detalhes.  

Todas as definições de bandeiras terão um valor `true` ou `false` e representarão o valor ativo atual para a reivindicação em que você está.

Depois que a GUI de definição do bandeira for exibida, o usuário verá uma subseção chamada `PUBLIC` e subseções adicionais baseadas em permissões.  
Essas subseções funcionam da seguinte maneira  :

### PUBLIC  

A seção pública da GUI controla as permissões de sinalização para usuários não confiáveis. Alternar bandeiras nesta seção NÃO afetará usuários confiáveis ou proprietário da reivindicação.

Nota: Todas as definições de bandeiras sempre suportarão o tipo `PUBLIC` e, portanto, sempre serão listadas abaixo dele.  
Nota: Todas as permissões serão definidas no grupo LP `griefdefender_definition`  

### OWNER  

A seção do proprietário da GUI controla as permissões de sinalização para usuários confiáveis, incluindo o proprietário da declaração.  

Nota: Uma definição de bandeira só será exibida em `OWNER` se a definição do bandeira tiver `owner-mode` definido como `true`.  
Observação: todas as permissões do bandeira de reivindicação serão definidas para o usuário LP que possui a reivindicação.   
Nota: Para reivindicações selvagens, todas as permissões de sinalização de reivindicação são definidas no usuário selvagem LP `_GDWorld_` com UUID `00000000-0000-0000-0000-000000000000`  
Observação: para declarações de administrador, todas as permissões de bandeira de declaração são definidas no usuário administrador do LP `_GDAdmin_` com UUID `11111111-1111-1111-1111-111111111111`   


### Permissões  

A permissão a seguir controla a capacidade do usuário de alternar definições de bandeiras na GUI  
`griefdefender.user.definition.flag.<preset>.<grupo>.<definition_name>`

Como exemplo, vamos supor que você deseja negar o acesso do usuário para alternar o bandeira `damage-animals` na GUI.  
Você inseriria o seguinte em LuckPerms  
`/lp group <groupname> permission set griefdefender.user.definition.flag.minecraft.user.damage-animals false`

Conforme mostrado abaixo, ambos os bandeiras de administrador/usuário começam como `true` ou `false` e representarão o valor ativo atual da reivindicação em que você está.  

### ADMIN
:warning: Os bandeiras de administrador afetarão SOMENTE a reivindicação em que você está.  

![Admin GUI](https://i.imgur.com/tSVSC7q.png)


Por padrão, os administradores têm acesso a 2 modos `PRESET` e `ADVANCED`.
O modo `PRESET` está diretamente vinculado ao arquivo predefinido de definições de bandeira do minecraft. Cada grupo é lido na GUI como uma guia junto com suas definições.
Existem 2 grupos entregues com os quais o GD é fornecido, `USER` e `ADMIN`. 
 
Ambos os grupos aplicarão bandeiras para afirmar que você está participando. Se você precisar de bandeiras definidos como padrão, configure-os na configuração conforme mostrado acima.


Flag Definition                                  | Valor padrão | Descrição |
-------------------------------------------------|---------------|--------------|
```ambient-spawn``` |  true  | Controla se ambientes, como morcegos, aparecem.
```animal-block-modify``` |  true  | Controla se os animais podem modificar blocos, como coelhos comendo cenouras.
```animal-spawn``` |  true  | Controla se animais, como vacas/porcos/cavalos/etc., spawnam.
```aquatic-spawn``` |  true  | Controla se os animais aquáticos que vivem na água, como lulas, spawnam.
```armorstand-use``` |  false | Controla se os suportes de armadura podem ser colocados ou quebrados.
```chorus-fruit-teleport``` | false | Controla se um jogador pode usar a fruta do coro para se teletransportar.
```commandblock-block-break``` | false | Controla se os blocos de comando podem quebrar blocos.
```commandblock-block-place``` | false | Controla se os blocos de comando podem colocar blocos.
```creeper-block-explosion``` | false | Controla se uma trepadeira pode explodir blocos.
```creeper-entity-explosion``` | false | Controla se uma trepadeira pode explodir entidades.
```endcrystal-use```      | false  | Controla se os cristais finais podem ser colocados ou quebrados.
```entity-armorstand-damage``` | false | Controla se as entidades podem causar dano aos suportes de armadura.
```entity-itemframe-damage``` | false | Controla se as entidades podem causar danos às estruturas dos itens.
```exp-drop``` | true | Controla se os orbes de experiência podem cair.
```fall-entity-damage``` | true | Controla se as entidades podem sofrer danos de queda.
```fall-player-damage``` | true | Controla se os jogadores podem sofrer danos de queda.
```falling-block-break``` | true | Controla se os blocos em queda podem quebrar.
```fire-block-damage``` | true | Controla se o fogo pode causar danos ao bloco.
```fire-entity-damage``` | true |  Controla se o fogo pode causar danos à entidade.
```lightning-damage```  | true | Controla se um raio pode causar danos.
```monster-animal-damage``` | false |  Controla se os monstros podem causar danos aos animais.
```monster-player-damage``` | true | Controla se os monstros podem causar dano aos jogadores.
```monster-spawn```  | true | Controla se monstros, como trepadeiras e esqueletos, podem aparecer.
```piston-item-spawn``` | true | Controla se o micélio pode se espalhar.
```piston-use``` | false | Controla se os pistões podem ser usados.
```player-block-break``` | false | Controla se os jogadores podem quebrar blocos.
```player-block-interact``` | false | Controla se os jogadores podem interagir com os blocos.<br />Nota: Isso não inclui blocos de inventário, como baús.
```player-block-place``` | false | Controla se os jogadores podem colocar blocos.
```player-damage``` | true | Controla se os jogadores podem ser danificados.
```player-enderpearl-interact``` | true | Controla se os jogadores podem usar uma Enderpearl.
```player-endportal-use``` | true | Controla se os jogadores podem usar o portal final.
```player-entity-interact``` | true | Controla se os jogadores podem interagir com entidades.<br />Nota: Isto não inclui acesso ao baú com entidades como cavalos.
```player-exit``` | true | Controla se um jogador pode sair desta reivindicação.
```player-item-drop``` | true | Controla se os jogadores podem largar itens.
```player-item-pickup``` | true | Controla se os jogadores podem coletar itens.
```player-itemframe-interact``` | false | Controla se os jogadores podem interagir com molduras de itens.
```player-itemhanging-place``` | false | Controla se os jogadores podem colocar itens pendurados, como molduras de itens.
```player-netherportal-use``` | true | Controla se os jogadores podem usar o portal inferior.
```player-teleport-from``` | true | Controla se os jogadores podem se teletransportar desta reivindicação.
```player-teleport-to``` | true | Controla se os jogadores podem se teletransportar para esta reivindicação.
```player-villager-damage``` | false | Controla se os jogadores podem causar dano aos aldeões.
```ravager-block-break``` | true | Controla se os saqueadores podem quebrar blocos durante ataques.
```silverfish-block-infest``` | false | Controla se a traça pode infestar blocos como pedregulhos.
```tnt-block-explosion``` | false | Controla se o tnt pode explodir blocos.
```tnt-entity-explosion``` | false | Controla se o tnt pode explodir entidades.
```turtle-egg-hatch``` | true | Controla se os ovos de tartaruga podem eclodir.
```villager-farm``` | true | Controla se as aldeias podem cultivar culturas.
```wither-block-break``` | false | Controla se a cernelha pode quebrar blocos.
```wither-entity-damage``` | true | Controla se a cernelha pode danificar entidades.

### USER
:warning: As sinalizações do usuário afetarão SOMENTE a reivindicação em que você está.  
:warning: Se você deseja modificar as definições do bandeira `USER` em uma declaração que não é de sua propriedade, você deve ter permissões ignoreclaims e inserir `/ignoreclaims` antes de executar o comando `/cf`.


Como usuário, se você inserir o comando `/cf`, verá o seguinte

![User GUI](https://i.imgur.com/LTeNaaD.png)

Flag Definition                                  | Valor padrão | Descrição | 
-------------------------------------------------|---------------|--------------|
```block-fertilize``` | false | Controla se um jogador pode fertilizar um bloco com farinha de ossos.
```block-trampling``` |  false  | Controla se as terras agrícolas e os ovos de tartaruga podem ser pisoteados.
```chest-access``` | false | Controla se um jogador pode acessar os inventários do baú.
```crop-growth``` | true | Controla se as culturas podem crescer.
```damage-animals``` | false | Controla se os animais podem ser danificados.
```enderman-grief``` | false | Controla se enderman podem grifar.
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
```player-enter``` | true | Controla se um jogador pode entrar nesta reivindicação.
```pvp``` | true | Controla se o combate PvP é permitido.
```ride``` | false | Controla se veículos (incluindo animais), que não são de propriedade do jogador, podem ser montados.
```sign-edit``` | true | Controla se os jogadores podem editar placas.
```sign-use``` | true | Controla se os jogadores podem usar placas.
```sleep``` | true | Controla se os jogadores podem dormir nas camas
```snow-fall``` | true | Controla se a neve pode cair.
```snow-melt``` | true | Controla se a neve pode derreter.
```snowman-trail``` | true | Controla se os bonecos de neve podem criar neve abaixo deles.
```soil-dry``` | true | Controla se o solo vai secar.
```vehicle-use``` | false | Controla se os veículos (barcos, minecarts, etc.) podem ser colocados, montados e quebrados.
```villager-trade``` | true | Controla se os jogadores podem negociar com os aldeões.
```vine-growth``` | true | Controla se as vinhas (e algas) podem crescer.
```water-flow``` | false | Controla se a água pode fluir.
