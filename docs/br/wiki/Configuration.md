---
title: Configuração
tag: Info
category: info
icon: config
---

## Configuração

GriefDefender inclui vários arquivos de configuração para administradores. Os arquivos de configuração disponíveis atualmente são os seguintes

```
bans.conf
blacklist.conf
claimnames.conf
flags.conf
global.conf
gui.conf
options.conf
storage.conf
```

### bans (proibições)  

O `bans.conf` armazena todos os dados de proibições global e mundial executados pelo comando `/claimban`  

| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| blocks | Um mapa de IDs de blocos proibido e mensagens de proibição | [ ] |
| entities | Um mapa de IDs de entidades proibido e mensagens de proibição | [ ] |
| items | Um mapa de IDs de itens proibido e mensagens de proibição | [ ] |

Você encontrará duas seções dentro deste arquivo: `global` e `worlds`.
A seção global é usada para armazenar uma lista de blocos, entidades e itens proibidos globais.
A seção de worlds é usada para armazenar uma lista de blocos, entidades e itens proibido em mundos específicos.

As proibições serão armazenadas no formato `"modid:id"=<mensagem>""`  
Ex. `"minecraft:axolotl_bucket"=""`  

#### Comando de proibição

Os seguintes comandos podem ser usados para banir um bloco, entidade ou item:  `/claimban` ou `/gd ban`  
Este comando suporta os seguintes argumentos `hand | <tipo> <alvo> [NomeDoMundo] [mensagem]`  

`hand` - Usa o item na mão principal. Nota: Isso só funciona ao banir itens.  
`tipo` - O tipo a ser proibido : `block`, `entity`, ou `item`.  
`<alvo>` - O ID do alvo a ser proibido. Esta é a guia completa suportada. Você pode especificar um único id ou usar uma tag. Ex. `minecraft:tnt` , `minecraft:enderpearl`, `#minecraft:signs`  
`[NomeDoMundo]` - Um nome de mundo pode ser especificado no final do comando que instruirá o GD a banir apenas no mundo em que o jogador está.  
`[mensagem]` - Uma mensagem de banimento pode ser adicionada ao final do comando, que será mostrada ao jogador se interagir com um bloco, entidade ou item banido.


### blacklist (lista negra)
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| flag-id-blacklist | Uma lista de IDs ignorados por bandeiras. | [ ] |
| global-source | Uma lista global de IDs de origem que são ignorados por eventos. <br />Nota: Isso afeta apenas eventos em que o id especificado é a source (origem). | [ ] |
| global-target | Uma lista global de IDs de destino que são ignorados por eventos. <br />Observação: isso afeta apenas eventos em que o id especificado é o target (destino). | [ ] |
| entity-damage-source-blacklist | Uma lista global de fontes de danos à entidade que são ignoradas em eventos por padrão. | [contact,cramming,drowning,<br />"falling_block",flyintowall,"fire_tick",<br />"hot_floor",envenenado,fome,sufocamento,<br />suicídio,void] |

A blacklist controla eventos de interação com itens, blocos ou entidades em uma base por-bandeira ou global. As listas negras são extremamente úteis, pois permitem forçar o GD a ignorar ações em um mundo que você não precisa proteger. Ao fazer isso, você evita que o GD desperdice recursos ao tentar proteger. Para determinar o que você deseja impedir que o GD controle, você precisará executar o [GDDebug](/br/wiki/advanced/Debugging.html) para coletar os dados necessários para a configuração. Veja [Contribuições do usuário](/br/wiki/advanced/Optimizations.html#contribuicoes-de-otimizacao) para alguns exemplos de como usá-lo.  

Ele suporta curingas `?` e `*` onde `?` representa um único caractere e `*` representa zero ou mais caracteres.
Para mais informações, você pode acessar [correspondência de curingas do Apache.](https://commons.apache.org/proper/commons-io/javadocs/api-2.5/org/apache/commons/io/FilenameUtils.html#wildcardMatch(java.lang.String,%20java.lang.String))

Para adicionar um item à blacklist, basta adicionar o ID entre um conjunto de aspas.

Um exemplo de como impedir que itens sejam verificados pelo GD é mostrado

`block-break=["modID:itemID"]`


### claimnames (Nome da reivindicação)

Veja [Identificadores de Reivindicação](/br/wiki/basic/Claim-Management.html#identificadores-de-reivindicacao)  

O arquivo `claimnames.conf` é usado para armazenar um mapeamento do UUID do player para nomes de reivindicações amigáveis.

```
e035f345-1234-5678-b341-cb1c91fe2123 {
    store_front=e5da3742-c916-48a0-b2af-283092fd6ef8
    valhalla=bdc6ca20-f62a-4c8a-a549-ec903fd63772
}
```

O exemplo acima mostra o player com UUID `e035f345-1234-5678-b341-cb1c91fe2123`.
O jogador configurou 2 identificadores de reivindicação amigáveis.
O primeiro identificador de reivindicação é `store_front` que é mapeado para reivindicar UUID `e5da3742-c916-48a0-b2af-283092fd6ef8`
O segundo identificador de reivindicação é `valhalla` que é mapeado para reivindicar o UUID `bdc6ca20-f62a-4c8a-a549-ec903fd63772`


Existem 2 UUIDs integrados que o GriefDefender usa para identificadores amigáveis.

`00000000-0000-0000-0000-000000000000` - Este UUID representa o jogador mundial e é usado para definir identificadores amigáveis em reivindicação de região selvagem.
`11111111-1111-1111-1111-111111111111` - Este UUID representa o usuário administrador e é usado para definir identificadores amigáveis em reivindicação administrativa


### flags (bandeiras)  

O arquivo `flags.conf` não deve ser confundido com definições de bandeiras e/ou presets. Este arquivo controla todos os principais bandeiras que o GD usa em eventos.

#### Seção de bandeiras de reivindicação padrão

A primeira seção deste arquivo é `default-claim-flags` que é responsável por definir as permissões padrão de bandeiras transitórios. As permissões transitórias existem apenas na memória e não persistem. Essas permissões são projetadas como permissões de fallback quando não há permissão encontrada para um usuário ou grupo de LP.

Existem 2 tipos configurados neste arquivo

`user` - Isso configura as permissões de bandeira transitório padrão para todas as reivindicações, EXCETO deserto.
`wilderness` - Isso configura as permissões de bandeira transitório padrão para todas as reivindicações de região selvagem.


#### Controle de bandeira
A seção de controle de bandeiras permite ativar/desativar a funcionalidade de bandeira por bandeira. Por padrão, todos as bandeiras estão habilitados. Se você não tem uso para uma bandeira específica, defina a bandeira como false nesta seção. Ao desabilitar uma bandeira, isso fará com que o GriefDefender ignore todos os eventos relacionados a bandeira.

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

### Global  

Veja [Configuração global](/br/wiki/advanced/Global-Config.html)  



### GUI (Interface) 

O arquivo `gui.conf` é responsável por todas as configurações relacionadas ao bate-papo e Interface de Inventário.

#### Seção de bate-papo

`capture-clear-timeout` - O tempo limite em segundos quando a interface do bate-papo limpará todos os bate-papos capturados.
`capture-idle-timeout` - O tempo limite ocioso em segundos quando a interface do bate-papo para de capturar o bate-papo.
`protocol-lib` - Se deve usar ProtocolLib, se detectado, para capturar todas as mensagens direcionadas a um jogador.

#### Seção geral  

`command-input-idle-timeout` - O tempo limite de inatividade em segundos quando uma interface de comando para de aguardar a entrada do jogador.


#### Seção de inventário

A seção de inventário controla quais ícones e títulos serão usados ao carregar a interface do inventário GD para os jogadores.

`enchanted` - Controla se o ícone terá um efeito encantado.
`id` - O id do item do ícone. Ex. `minecraft:diamond_shovel`
`title` - O título do ícone a ser exibido ao passar o mouse.
`lore` - O lore do ícone.
`quantity` - O valor da quantidade do item.
`meta` - O identificador do item associado ao ícone. <br />Observação: Meta é usado em vez de um identificador de material quando necessário para ser compatível com as versões do MC ou para itens modificados que não possuem um identificador de nome associado.

`icon-flags`  
As bandeiras de ícone são um atributo especial de um ícone e são armazenados como tal 
```
icon-flags=[
    "hide_attributes"
]
```  
As seguintes bandeiras de ícone estão disponíveis para uso com um ícone

`HIDE_ENCHANTS` - Controla se deve mostrar encantamentos.
`HIDE_ATTRIBUTES` - Controla se os atributos devem ser exibidos.
`HIDE_UNBREAKABLE` - Controla se deve mostrar o estado inquebrável.
`HIDE_DESTROYS` - Controla se deve mostrar o que pode quebrar ou destruir.
`HIDE_PLACED_ON` - Controla se mostra o que pode ser construído ou colocado.
`HIDE_POTION_EFFECTS` - Controla se os efeitos da poção devem ser exibidos.
`HIDE_DYE` - Controla se os corantes devem ser exibidos.


### options (Opções)  

O arquivo [`options.conf`](/br/wiki/basic/Options.html) controla todas as configurações padrões de reivindicação e jogador.


#### Opções padrão

`default-user-basic-options` - Controla os limites de tamanho mínimo/máximo para reivindicação básicas.
O limite mínimo básico padrão é `5x5x5`.
Nota: Y não é usado a menos que a reivindicação seja uma reivindicação 3D.
Nota: Um valor de '0' significa sem limite.


`default-user-subdivision-options` - Controla os limites de tamanho mínimo/máximo para subdivisão.
O limite mínimo de subdivisão padrão é `5x5x5`.
O limite máximo de subdivisão padrão é `1000x0x1000` onde `0` representa nenhum limite de altura.
Nota: Y não é usado a menos que a reivindicação seja uma reivindicação 3D.
Nota: Um valor de '0' significa sem limite.


`default-user-town-options` - Controla os limites de tamanho mínimo/máximo de reivindicação para reivindicações de cidade.
O limite de cidade padrão é `32x32x32`.
Nota: Y não é usado a menos que a reivindicação seja uma reivindicação 3D.
Nota: Um valor de '0' significa sem limite.


`default-user-options` - Controla as opções padrão do jogador, como `player-deny-flight` nas reivindicação.
Observação: a aplicação de uma opção a uma seção de tipo de reivindicação específica, conforme mostrado acima, substituirá a opção nesta seção.

#### Controle de opções
A seção de controle de opções permite ativar/desativar a funcionalidade de opções. Por padrão, todas as opções de jogador/pvp e spawn estão desabilitadas. Para habilitar essa funcionalidade, você precisará definir a opção correspondente como true.

Aqui estão as opções entregues que podem ser controladas
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

#### Valores de fallback Vanilla
Atualmente, esta seção é usada apenas para as velocidades padrão de voo e caminhada do jogador. Se o seu servidor usa um valor padrão diferente, você pode ajustá-lo aqui.

Os padrões entregues são
```
vanilla-fallback-values {
    player-fly-speed="0.1"
    player-walk-speed="0.2"
}
```


### Storage (Armazenamento)  

O arquivo [`storage.conf`](/br/wiki/basic/Storage.html) controla as configurações de armazenamento do GriefDefender.

