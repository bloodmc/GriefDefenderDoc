---
title: Bandeiras
tag: Info
category: info
icon: flag
---

# Bandeiras

As bandeiras permitem controle muito específico de ações por jogadores ou grupos dentro e fora das reivindicações.
Os bandeiras padrão podem ser substituídos ou por bandeiras específicos de reivindicação podem ser usados.

Usando `/cf` Fornece uma interface do usuário para editar os bandeiras padrão para a reivindicação em que você está.

As bandeiras não se aplicam ao proprietário de uma reivindicação, isso inclui administradores de reivindicações selvagens ou administrativas.
Use substituir se você deseja forçar bandeiras em todos os usuários em um tipo de reivindicação.

Nota: Os comandos de bandeira são apenas os Wrappers em torno da API da LuckPerms.Tudo definido via bandeira GD pode ser definido diretamente usando LP.  
Ver [Usando com LuckPerms](/br/wiki/advanced/Flags.html#usando-com-luckperms)  
Nota: Para usar bandeiras com argumentos de comando, você deve ter a permissão `griefdefender.advanced.admin.flags.*`

## bandeiras de reivindicação padrão
Todos os bandeiras padrão podem ser personalizados por tipo de reivindicação. Atualmente, o Griefdefender suporta bandeiras padrão para administrador, básico, cidade e regiaõ selvagem. Você pode modificar os padrões em `flags.conf` e `presets/minecraft.conf`.

## Contextos

Todas as bandeiras requerem um ou mais contextos quando aplicados como uma permissão no LuckPerms.
Ver [Contextos](/br/wiki/advanced/Contexts.html) Em quais contextos você pode usar e como eles funcionam.

## Comandos

### Argumentos

`<mandatory> [optional]`

| Argumentos |Descrição |
| --------- | ----------- |
| `<flag>` | A ação ou evento para gerenciar [`flag`](#bandeiras-disponiveis) |
| `<target>` | O que deve ser afetado pela ação, ou seja. `minecraft:dirt`. Usar `any` ou `modid:any` como curinga.|
| `<value>` | Se deve permitir, negar ou remover a bandeira `false\|undefined\|true` , ao invés de `undefined` você pode usar `0` |
| `[key=value]`| Contextos atuais opcionais:<br>`override=type` aplicará tudo a todas as reivindicações desse tipo.<br>`default` definirá como padrão para o tipo em que você está de pé para que todas as reivindicações recém -criadas receberão essa bandeira<br>`source` O que desencadeia a bandeira, ou seja. `minecraft:player`<br>`used_item` O item usado do jogador <br> Ex. `/cf entity-damage pig false used_item=diamond_sword override=basic` Isso negaria danos a um porco somente quando uma espada de diamante é usada em uma reivindicação básica|

### Lista de comandos
___
#### `/gd claim debug`
**Aliases**: `cfd|claimflagdebug`

Alterna o modo de depuração do bandeira de reivindicação. Usado para testar bandeira em reivindicação como usuário sem permissões.

___
#### `/gd flag claim [<flag> <target> <value> [contexts]`
**Atalho**: `cf|claimflag`

Edita bandeiras, pode ser aplicado a tipos de reivindicação ou uma reivindicação específicas.

Observação: o motivo só tem suporte na reivindicação de região selvagem (wilderness) ao usar o contexto de substituição para banir o uso em TODOS os tipos de reivindicação.

___
#### `/gd flag group <group> [<flag> <target> <value> [contexts]`
**Atalho**: `cfg|claimflaggroup`

Edita bandeiras que se aplicam a um grupo.

___
#### `/gd flag player <player> [<flag> <target> <value> [contexts]`
**Atalho**: `cfp|claimflagplayer`

Edita bandeiras que se aplicam a um jogador.

___
#### `/gd flag reset`
**Atalho**: `cfr|claimflagreset`

Redefine uma reivindicação para bandeiras padrões, os padrões podem ser editados nas configurações.

## Exemplos de uso

As bandeiras podem ser aplicadas a Jogadores, Grupos com ou sem um contexto de reivindicação específico. Eles também podem ser aplicados diretamente a todas as Reivindicações Básicas|Selvagens|Admin. Mais exemplos podem ser encontrados no jogo, apenas execute `/cf` e passe o mouse sobre as diferentes bandeiras!

#### Example 1

Para evitar que qualquer fonte quebre os blocos de lã de cal, na reivindicação em que você está.
`/cf block-break minecraft:wool.5 false`

Especificar nenhum modid sempre será o padrão para minecraft. O formato para blocos é `modid:blockid.meta`, se meta sn não for especificado 0 for usado.


#### Example 2

Para permitir que o Pixelmon Pokeballs interaja com qualquer bloco em todas as reivindicações básicas, deve ser executado em uma reivindicação básica.

`/cf projectile-impact-block any true source=pixelmon:occupiedpokeball override=basic`

#### Example 3

Para impedir que apenas os jogadores usem portais que estão no grupo "preso" em todas as reivindicações de administrador.Tem que executar em pé em uma reivindicação de administrador.

`/cfg Jailed portal-use any false source=minecraft:player override=admin`

#### Example 4

Para impedir que um jogador chamado "Notch" deva à direita de qualquer cama, na reivindicação em que você está de pé.

`/cfp notch interact-block-secondary minecraft:bed false`

#### Example 5
Para impedir que o comando de Pixelmon '/shop select' seja executado, na reivindicação em que você está de pé.

`/cf command-execute pixelmon:shop[select] false`

#### Example 6
Para evitar um item específico a ser clicado com o botão direito do mouse em uma entidade.

`/cf interact-entity-secondary entity_id false used_item=<item_id>`

Nota: Use `interact-entity-primary` para o clique esquerdo

#### Example 7
Para evitar um item específico a ser clicado com o botão direito do mouse em um bloco.

`/cf interact-block-secondary block_id false used_item=<item_id>`

Nota: Use `interact-block-primary` para o clique esquerdo

## Usando com LuckPerms

#### Example 1
Desativar danos ao animal em todas as reivindicações básicas do grupo `starters`

GD:  
```
/cfg starters entity-damage #animal false default=basic
```

LP: 
```
/lp group starters permission set griefdefender.flag.entity-damage false gd_claim_default=basic target=#animal
```


## Bandeiras disponíveis
Todas as informações fornecidas dentro () serão um dos exemplos.

**_A lista mais atual estará sempre disponível [aqui](https://github.com/bloodmc/GriefDefenderAPI/blob/master/src/main/java/com/griefdefender/api/permission/flag/Flags.java)._**
- **block-break** - Use para gerenciar a quebra de blocos (permitindo quebrar um bloco de sujeira)
- **block-grow** - Use para gerenciar o crescimento do bloco
- **block-modify** - Usado para gerenciar modificações de bloqueio, como fusão de gelo.
- **block-place** - Use para gerenciar a colocação de blocos (permitindo colocar um bloco de sujeira)
- **block-spread** - Use para gerenciar coisas que se espalham de um bloco para outro (propagação de incêndio, crescimento da videira etc.)
- **command-execute** - Use para gerenciar a execução de comandos (fazendo /msg interna reivindicação)
- **command-execute-pvp** - Use para gerenciar a execução de comandos feitos por um jogador durante o combate PVP.
- **enter-claim** - Use para gerenciar as reivindicações de inserção (não permitindo que um jogador aleatório entre na reivindicação)
- **collide-block** - Use para gerenciar colisões com blocos (colidindo com placas de pressão)
- **collide-entity** - Use para gerenciar colisões com entidades (colidindo com um pixelmon)
- **entity-chunk-spawn** - Use para gerenciar surtos de entidade durante a carga de pedaços.(Nota: não usado na plataforma Bukkit devido a nenhum evento)
- **entity-damage**[<sup>1</sup>](#note1) - Use para gerenciar danos causados por entidades (um jogador aleatório ferindo de zumbis)
- **entity-riding**[<sup>1</sup>](#note1) - Use para gerenciar a pilotagem de entidades (montando cavalos, pixelmon, barcos, etc)
- **entity-spawn**[<sup>1</sup>](#note1) - Use para gerenciar a desova da entidade (isso inclui qualquer desova no mundo, incluindo spawns de pedaços.)
- **entity-teleport-from**[<sup>1</sup>](#note1) - Use para gerenciar a entidade se teletransportar a partir da reivindicação (um Enderman se teletransportando de dentro da reivindicação)
- **entity-teleport-to**[<sup>1</sup>](#note1) - Use para gerenciar a entidade se teletransportar dentro da reivindicação (um Enderman se teletransportando para dentro da reivindicação)
- **exit-claim** - Use para gerenciar reivindicações de saída (não permitindo que o jogador aleatório saia de reivindicação)
- **explosion-block** - Use para gerenciar explosões que afetam os blocos
- **explosion-entity** - Use para gerenciar explosões que afetam as entidades
- **interact-block-primary** - Use para gerenciar a interação do clique com a esquerda com os blocos (atingindo um ovo de dragão)
- **interact-block-secondary** - Use para gerenciar a interação clique com o botão direito do mouse com os blocos (abrindo um pixelmon pc)
- **interact-entity-primary**[<sup>1</sup>](#note1) - Use para gerenciar a interação do clique com o botão esquerdo com entidades (atingindo um frango para causar danos causados)
- **interact-entity-secondary**[<sup>1</sup>](#note1) - Use para gerenciar a interação clique com o botão direito do mouse com entidades (alimentando sementes ao frango)
- **interact-inventory** - Use para gerenciar a interação com os inventários (sendo capaz de abrir o peito)
- **interact-inventory-click** - Use para gerenciar a interação ao clicar em slots no inventário.(Usado para bloquear a criação)
- **interact-item-primary** - Use para gerenciar a interação do clique com o botão esquerdo com os itens ()
- **interact-item-secondary** - Use para gerenciar o clique com o botão direito do mouse com a interação com os itens ()
- **inventory-item-move** - Use para gerenciar o movimento dos itens de funis.(Nota: atualmente não é usado devido ao impacto do desempenho)
- **item-damage** - Usado para permitir ou negar danos a um item.
- **item-drop** - Use para gerenciar jogadores soltando itens (jogador aleatório não pode deixar cair um bloco de sujeira)
- **item-pickup** - Use para gerenciar itens de retirada (jogador aleatório não é para pegar um bloco de sujeira cair)
- **item-spawn** - Use para gerenciar a desova de itens de blocos ou itens no mundo (como a caixa de presente Pixelmon)
- **item-use** - Use para gerenciar o uso de itens (jogador aleatório usando poções | Ender Pérolas | Exp All)
- **leaf-decay** - Use para gerenciar a decaimento das folhas nas árvores.
- **liquid-flow** - Use para gerenciar o fluxo líquido (controle o fluxo de água ou fluxo de lava)
- **portal-use** - Use para gerenciar portais de uso (controlar o uso de portais inferiores)
- **projectile-impact-block** - Use para gerenciar um projétil atingindo um bloco (quando uma flecha atingir um bloco de sujeira)
- **projectile-impact-entity**[<sup>1</sup>](#note1) - Use para gerenciar um projétil atingindo uma entidade (quando uma flecha atinge um pixelmon | mobs)

## Tipos de grupo de contexto GD personalizado

O GD fornece alguns tipos de grupo de contexto que podem ser usados para especificar todo o tipo de algo, por exemplo, todos os monstros.
> ** Nota: Começando com as versões MC 1.14+, GD se integra ao sistema de tags da Vanilla.É altamente recomendável usar o sistema de tags de baunilha.Consulte https://minecraft.gamepedia.com/tag para obter mais informações e https://minecraft.gamepedia.com/tutorials/creating_a_data_pack para obter mais informações.

### Chaves disponíveis

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

#### Example 1

Para impedir que todos os monstros inseram reivindicações de administrador por padrão.
`/cf enter-claim #monster false default=admin`  
ou  
`/cf enter-claim false default=admin target=#monster`

### Notas
<a name="note1"><sup>1</sup></a> Tipo de entidade (`modid:monster|aquatic|ambient|animal`) Também pode ser usado para atingir todas as entidades desse tipo de um mod específico.


## Controle de bandeira
A seção de controle de bandeira permite ativar/desativar a funcionalidade de bandeiras por flag.Por padrão, todos as bandeiras estão ativados.Se você não tiver utilidade para uma bandeiras específico, defina o bandeira como falso nesta seção. 

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