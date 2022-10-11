---
title: Commands
tag: Info
category: info
icon: shell
---

# Command Overview

Chave dos argumentos: \<requerido\> [opcional]

### Claim Identifier  

Muitos comandos suportam o novo argumento `[identificador]` que é o ID da declaração definido pelo proprietário da declaração. Se você não quiser ser obrigado a fazer uma reclamação para um comando específico, defina o identificador de reclamação usando `/gd claim id <identifier>` e passe o identificador no final do comando. 
If using an identifier for an admin claim, the format is `admin:<identifier>`     
If using an identifier for wilderness, the format is `wilderness:<identifier>`  
If using an identifier for another player, the format is `<playername>:<identifier>`  


### Reivindicações

* [/gd abandon claim [identifier]](#gd-abandon-claim)
* [/gd abandon all](#gd-abandon-all)
* [/gd abandon top [identifier]](#gd-abandon-top)
* [/gd buy blocks [numberOfBlocks]](#gd-buy-blocks)
* [/gd buy claim](#gd-buy-claim)
* [/gd claim contract \<amount\> [direction] [identifier]](#gd-claim-contract)
* [/gd claim create \<radius\>|\<chunk\> [type]](#gd-claim-create)
* [/gd claim expand \<amount\> [direction] [identifier]](#gd-claim-expand)
* [/gd claim farewell \<message\> [identifer]](#gd-claim-farewell)
* [/gd claim greeting \<message\> [identifer]](#gd-claim-greeting)
* [/gd claim id \<identifier\>](#gd-claim-id)
* [/gd claim info [identifier]](#gd-claim-info)
* [/gd claim inherit](#gd-claim-inherit)
* [/gd claim inspect [\<area\>|\<hide\>|\<hideall\>]](#gd-claim-inspect)
* [/gd claim list [\<player\> [world]]](#gd-claim-list)
* [/gd claim displayname [name]](#gd-claim-displayname)
* [/gd claim rent create [\<rate\> [max_days]]|info|list|cancel](#gd-claim-rent)
* [/gd claim setspawn](#gd-claim-setspawn)
* [/gd claim spawn](#gd-claim-spawn)
* [/gd claim tax [balance|force|pay \<amount>]](#gd-claim-tax)
* [/gd claim transfer [player]](#gd-claim-transfer)
* [/gd claim we](#gd-claim-we)
* [/gd claimgroup admin [\<join\>|\<unjoin\>|\<create\>|\<delete\>]](#gd-claimgroup-admin)
* [/gd claimgroup player [\<join\>|\<unjoin\>|\<create\>|\<delete\>]](#gd-claimgroup-player)
* [/gd cuboid](#gd-cuboid)
* [/gd mode basic](#gd-mode-basic)
* [/gd mode subdivide](#gd-mode-subdivide)
* [/gd mode town](#gd-mode-town)
* [/gd player info \<player\> \<world\>|\<player\>|[world]](#gd-player-info)
* [/gd player transferblocks](#gd-player-transferblocks)
* [/gd player trapped](#gd-player-trapped)
* [/gd player unlockdrops](#gd-player-unlockdrops)
* [/gd sell blocks [numberOfBlocks]](#gd-sell-blocks)
* [/gd sell claim \<price\>](#gd-sell-claim-price)

### Bandeiras

* [/gd flag debug](#gd-flag-debug)
* [/gd flag claim [\<flag\> \<target\> \<value\> [contexts]]](#gd-flag-claim)
* [/gd flag definition \<preset:group\> \<definition\> \<value\> [identifier]](#gd-flag-definition)
* [/gd flag group \<group\> [\<flag\> \<target\> \<value\> [contexts]]](#gd-flag-group)
* [/gd flag player \<player\> [\<flag\> \<target\> \<value\> [contexts]]](#gd-flag-player)
* [/gd flag reset](#gd-flag-reset)

### Opções
* [/gd option claim [\<option\> \<value\> [contexts]]](#gd-option-claim)
* [/gd option group \<group\> [\<option\> \<value\> [contexts]]](#gd-option-group)
* [/gd option player \<player\> [\<option\> \<value\> [contexts]]](#gd-option-player)

### Trust  

Nota: Use `public` se quiser confiar em todos os jogadores.

* [/gd trust player \<player\>|public <accessor|container|builder|manager> ](#gd-trust-player)
* [/gd trust group \<group\>|public <accessor|container|builder|manager> ](#gd-trust-group)
* [/gd trustall player \<player\>|public](#gd-trustall-player)
* [/gd trustall group \<group\>|public](#gd-trustall-group)
* [/gd untrust player \<player\>|public ](#gd-untrust-player)
* [/gd untrust group \<group\>|public ](#gd-untrust-group)
* [/gd untrustall player \<player\>|public](#gd-untrustall-player)
* [/gd untrustall group \<group\>|public](#gd-untrustall-group)
* [/gd trust list](#gd-trust-list)

### Admin

* [/gd abandon world [world]](#gd-abandon-world)
* [/gd ban [hand | \<type\> \<target\> [message]]](#gd-ban)
* [/gd claim clear \<target\> [identifier]](#gd-claim-clear) 
* [/gd claim ignore](#gd-claim-ignore)
* [/gd claim restore](#gd-claim-restore)
* [/gd claim schematic \<create|delete\> \<name\>](#gd-claim-schematic)
* [/gd delete claim [identifier]](#gd-delete-claim)
* [/gd delete all \<player\> [world]](#gd-delete-all)
* [/gd delete alladmin [world]](#gd-delete-alladmin)
* [/gd mode admin](#gd-mode-admin)
* [/gd mode nature](#gd-mode-nature)
* [/gd permission group \<group\> [\<permission\> \<value\>]](#gd-permission-group)
* [/gd permission player \<player\> [\<permission\> \<value\>]](#gd-permission-player)
* [/gd player adjustbonusblocks \<player\> \<amount\> [world]](#gd-player-adjustbonusblocks)
* [/gd player adjustbonusblocksall \<amount\>](#gd-player-adjustbonusblocksall)
* [/gd player setaccruedblocks \<player\> \<amount\> [world]](#gd-player-setaccruedblocks)
* [/gd debug \<on\>\<off\>\<record\>\<paste\> [player]](#gd-debug)
* [/gd reload](#gd-reload)
* [/gd unban [hand | \<type\> \<target\>]](#gd-unban)

### Menu Principal

* [/gd](#gd)

### Diversos

* [/gd version](#gd-version)


# Detalhe do comando

### Reivindicações
___
#### `/gd abandon claim`
**Argumentos**: `[identifier]` 
Abandonar uma reivindicação

___
#### `/gd abandon all`
Abandona TODAS as suas reivindicações

___
#### `/gd abandon top`
Abandona uma reivindicação e todas as suas subdivisões

___
#### `/gd buy blocks`
**Abreviado**: `buyblocks`  
**Argumentos**: `<numberOfBlocks>`  

Compra blocos de reivindicação adicionais com dinheiro do servidor. Não funciona em servidores sem nenhum plugin de economia.

___
#### `/gd buy claim`

Veja uma lista de reivindicações à venda. Clique em [Comprar] para comprar.

___
#### `/gd claim contract`
**Abreviado**: `claimcontract`, `contractclaim`  
**Argumentos**: `<amount> [direction] [identifier]`  
Contrai/Reduz a reivindicação da direção que você está de frente. 

___
#### `/gd claim create`
**Abreviado**: `claimcreate`  
**Argumentos**: `<radius> [TIPO]`  
Cria uma reivindicação em torno do jogador do TIPO fornecido. Se nenhum TIPO de declarado (ou um incorreto) for especificado, uma reivindicação básica será criada.

___
#### `/gd claim expand`
**Abreviado**: `claimexpand`, `expandclaim`  
**Argumentos**: `<amount> [direction] [identifier]`  
Expande a reivindicação na direção que você está de frente.

___
#### `/gd claim farewell`
**Argumentos**: `<mensagem> [identifier]`  
Define a mensagem de despedida do seu pedido

Para limpar a mensagem, `/gd claim farewell clear`

___
#### `/gd claim greeting`
**Argumentos**: `<mensagem> [identifier]`  
Define a mensagem de saudação do seu pedido

Para limpar a mensagem, `/gd claim greeting clear`


___
#### `/gd claim id`
**Argumentos**: `<identifier>`  
Defina o identificador amigável para sua reivindicação.


___
#### `/gd claim info`
**Abreviado**: `claiminfo`  
**Argumentos**: `[identifier]`  

Obtém informações sobre uma reivindicação em que você está ou pelo ID da reivindicação.

___
#### `/gd claim inherit`
**Abreviado**: `inherit`  

Alterna o modo de herdar da reivindicação principal

___
#### `/gd claim inspect`
**Abreviado**: `claiminspect`  
**Argumentos**: `[area|hide|hideall]`  

Inspeciona o jogador do bloco alvo que está olhando ou nas reivindicações próximas.

___
#### `/gd claim list`
**Abreviado**: `claimlist`  
**Argumentos**: `[<jogador> [world]]`  

Listar informações sobre as reivindicações de um jogador.

___
#### `/gd claim displayname`
**Argumentos**: `<name>`  
Define o nome de exibição da sua reivindicação

___
#### `/gd claim rent`
**Argumentos**: `create [<rate> [<max_days>]]|info|list|cancel]`  
Usado para alugar/listar reivindicação.
Nota: Requer plugin de economia.

___
#### `/gd claim setspawn`
**Abreviado**: `claimsetspawn`  

Define o spawn de sua reivindicação para o local em que você está.

___
#### `/gd claim spawn`
**Abreviado**: `claimspawn`  

Teleporta você para reivindicar o spawn, se disponível.

___
#### `/gd claim tax`
**Argumentos**: `balance|force|pay <amount>]`  
Usado para gerenciar impostos de uma reivindicação.
Nota: O argumento `force` permite que um administrador pague o saldo de impostos de uma reivindicação para outro jogador.
Nota: Requer plugin de economia.


___
#### `/gd claim transfer`
**Abreviado**: `transferclaim`  
**Argumentos**: `<jogador> [identifier]`  

Transfira a reivindicação em que você está para um jogador.

___
#### `/gd claim we`
**Argumentos**: `claim|clear|select [identifier]`  
`claim` - cria a reivindicação GD com seleção WE.
`clear` - limpa a seleção do worldedit.
`select` - cria uma nova seleção WE para reivindicação GD.

Usado para gerenciar reivindicações GD com worldedit.
Nota: Este comando não funcionará a menos que o servidor tenha WorldEdit.

___
#### `/gd claimgroup admin`
**Argumentos**: `join <grupo> [<identifier>]|unjoin [<identifier>]|create <grupo>|delete <grupo>`  
Usado para gerenciar grupos de declarações de administrador.


___
#### `/gd claimgroup player`
**Argumentos**: `join <grupo> [<identifier>]|unjoin [<identifier>]|create <grupo>|delete <grupo>`  
Usado para gerenciar grupos de reivindicações de jogadores.


___
#### `/gd cuboid`
**Abreviado**: `cuboid`  

Alterna o modo de reivindicações do cuboide 3D.

___
#### `/gd mode basic`
**Abreviado**: `modebasic`

Alterna a ferramenta de pá de volta ao modo de reivindicações básico.

___
#### `/gd mode subdivide`
**Abreviado**: `modesubdivide`  

Alterna a ferramenta de pá para o modo de subdivisão, usada para subdividir suas reivindicações

___
#### `/gd mode town`
**Abreviado**: `modetown`

Alterna a ferramenta de pá de volta ao modo de reivindicação de cidade.
___
#### `/gd player info`
**Argumentos**: `<jogador> <world>|<jogador>|[<world>]`  

Obtém informações sobre um jogador e seus blocos de reivindicação

___
#### `/gd player transferblocks`
**Abreviado**: `transferblocks`  
**Argumentos**: `<jogador> <amount>`

Dá bloqueios de reivindicação a outro jogador

___
#### `/gd player trapped`  
**Abreviado**: `trapped`  

Teleporta o jogador para um local seguro se estiver preso e incapaz de construir.

___
#### `/gd player unlockdrops`  
**Abreviado**: `unlockdrops`  

Permite que outros jogadores peguem quaisquer itens dropados por morte.

___
#### `/gd sell blocks`
**Abreviado**: `sellblocks`  
**Argumentos**: `<numberOfBlocks>`  

Venda seus blocos de reivindicação por dinheiro do servidor. Não funciona em servidores sem nenhum plugin de economia.

___
#### `/gd sell claim`
**Argumentos**: `<price>`  

Coloca sua reivindicação à venda pelo preço definido. Para desabilitar a venda, defina o preço como -1 ou defina a configuração ForSale em /claiminfo como false.


### Flags

___
#### `/gd flag debug`
**Abreviado**: `cfd`

Alterna para o modo de depuração de reivindicação.

___
#### `/gd flag claim`
**Abreviado**: `cf`  
**Argumentos**: `[<flag> <target> <value> [<\contexts>]]`  

Obtém/define bandeiras de reivindicação na reivindicação em que você está.


___
#### `/gd flag definition`
**Abreviado**: `cf`  
**Argumentos**: `<preset:group> <definition> <value> [identifier]`  

Define as definições de bandeira de reivindicação na reivindicação em que você está ou no identificador de reivindicação.

___
#### `/gd flag group`
**Abreviado**: `cfg`  
**Argumentos**: `<grupo> <flag> <target> <value> [<\contexts>]]`  

Obtém/define a permissão de sinalizador para um grupo na reivindicação em que você está.

___
#### `/gd flag player`
**Abreviado**: `cfp`  
**Argumentos**: `<jogador> <flag> <target> <value> [<\contexts>]]`  

Adiciona permissão de bandeira ao jogador.

___
#### `/gd flag reset`
**Abreviado**: `cfr`

Redefine a reivindicação para as bandeiras padrões do servidor.


### Options
___
#### `/gd option claim `
**Abreviado**: `co`  
**Argumentos**: `[<option> <value> [<contexts>]]`  

Obtém/configura as opções na reivindicação em que você está.

___
#### `/gd option group`
**Abreviado**: `cog`  
**Argumentos**: `<grupo> [<option> <value> [<contexts>]]`  

Obtém/configura as opções para um grupo-reivindicação em que você está.

___
#### `/gd option player`
**Abreviado**: `cop`  
**Argumentos**: `<jogador> [<option> <value> [<contexts>]]`  

Obtém/Define opções para um jogador que reivindica que você está de pé.


### Trust
Nota: `public` é para todos os usuários.
___
#### `/gd trust player`
*Accessor*: `Concede uma entrada de jogador para sua(s) reivindicação(ões) e uso de sua cama`  
*Container*: `Concede a um jogador acesso aos recipientes (mesa de trabalho), colheitas, animais, cama, botões e alavancas da sua reivindicação`  
*Builder*: `Concede a um jogador acesso de edição às suas reivindicações`  
*Manager*: `Concede a um jogador acesso a todos os itens acima, incluindo configurações de reivindicação`  
**Abreviado**: `trust`  
**Argumentos**: `<jogador>|public <TipoDoTrust>`  

Concede a um jogador acesso à(s) sua(s) reivindicação(ões).

___
#### `/gd trust group`
*Accessor*: `Grants a group entry to your claim(s) and use of your bed`  
*Container*: `Grants a group access to your claim's containers, crops, animals, bed, buttons, and levers`  
*Builder*: `Grants a group edit access to your claim(s)`  
*Manager*: `Grants a group access to all of the above including claim settings`  
**Abreviado**: `trustgroup`  
**Argumentos**: `<grupo>|public <TipoDoTrust>`  

Grants a group access to your claim(s)

___
#### `/gd trustall player`
*Accessor*: `Grants a player entry to ALL your claim(s) and use of your bed`  
*Container*: `Grants a player access to ALL your claim's containers, crops, animals, bed, buttons, and levers`  
*Builder*: `Grants a player edit access to ALL your claim(s)`  
*Manager*: `Grants a player access to all of the above including claim settings`
**Abreviado**: `trust`  
**Argumentos**: `<jogador>|public <trusttype>`  

Grants a player access to ***ALL*** your claim(s).

___
#### `/gd trustall group`
*Accessor*: `Grants a group entry to ALL your claim(s) and use of your bed`  
*Container*: `Grants a group access to ALL your claim's containers, crops, animals, bed, buttons, and levers`  
*Builder*: `Grants a group edit access to ALL your claim(s)`  
*Manager*: `Grants a group access to all of the above including claim settings`
**Abreviado**: `trustallgroup`  
**Argumentos**: `<grupo>|public <trusttype>`  

Grants a group access to ***ALL*** your claim(s).

___
#### `/gd untrust player`
**Abreviado**: `untrust`  
**Argumentos**: `<jogador>|public`  

Revokes a player's access to your claim.

___
#### `/gd untrust group`
**Abreviado**: `untrustgroup`  
**Argumentos**: `<grupo>|public`  

Revokes a group's access to your claim.

___
#### `/gd untrustall player`
**Abreviado**: `untrustall`  
**Argumentos**: `<jogador>|public`  

Revokes a player's access to ***ALL*** your claim(s).

___
#### `/untrustall group`
**Abreviado**: `untrustallgroup`  
**Argumentos**: `<grupo>|public`  

Revokes a group's access to ***ALL*** your claim(s).
___
#### `/gd trust list`
Lists permissions for the claim you're standing in


### Admin

___
#### `/gd abandon world`  
**Abreviado**: `abandonworld`  
**Argumentos**: `[world]`  

Special admin command used to abandon ALL user claims in world.  
___
#### `/gd ban`  
**Abreviado**: `claimban`  
**Argumentos**: `hand | <type> <target> [<mensagem>]`  
Note: Valid types are `entity`, `item`, `block`  
Bans target or item in hand from all usage.  

___
#### `/gd player adjustbonusblocks`
**Abreviado**: `adjustbonusblocks`  
**Argumentos**: `<jogador> <amount> [world]`  

Adds or subtracts bonus claim blocks for a player

___
#### `/gd player adjustbonusblocksall`
**Abreviado**: `adjustbonusblocksall`  
**Argumentos**: `<amount>`  

Adjusts bonus claim block total for all online players by amount specified.

___
#### `/gd player setaccruedblocks`
**Abreviado**: `setaccruedblocks`  
**Argumentos**: `<jogador> <amount> [<world>]`  

Updates a player's accrued claim block total.

___
#### `/gd mode admin`
**Abreviado**: `modeadmin`  

Switches the shovel tool to administrative claims mode

___
#### `/gd delete claim`
**Abreviado**: `deleteclaim`  

Deletes the claim you're standing in, even if it's not your claim

___
#### `/gd delete all`
**Abreviado**: `deleteall`  
**Argumentos**: `<jogador> [world]`  

Delete all of another player's claims

___
#### `/gd delete alladmin`
**Abreviado**: `deletealladmin`  
**Argumentos**: `[world]`  

Deletes all administrative claims

___
#### `/gd claim ignore`
**Abreviado**: `ignoreclaims`  

Toggles ignore claims mode

___
#### `/gd claim clear`
**Abreviado**: `claimclear`  
**Argumentos**: `<target> [<claim> [<world>]]`  
Allows clearing of entities within one or more claims.

___
#### `/gd permission group`
**Abreviado**: `cpg`  
**Argumentos**: `<grupo> [<permissão> <value>]`  

Sets a permission on a group with a claim context

___
#### `/gd permission player`
**Abreviado**: `cpp`  
**Argumentos**: `<jogador> [<permissão> <value>]`  

Sets a permission on a player with a claim context

___
#### `/gd mode nature`
**Abreviado**: `rn`  

Switches the shovel tool to restoration mode

___
#### `/gd debug`
**Abreviado**: `gddebug`  
**Argumentos**: `<on>|<off>|<record>|<paste> [<jogador>]`  

Toggles debug

___
#### `/gd reload`

Reloads Grief Prevention's configuration settings

___
#### `/gd schematic`  
**Abreviado**: `claimschematic`  
**Argumentos**: `<create|delete> <name>`  

Manages claim schematics. Use '/claimschematic create \<name\>' to create a live backup of claim. 

___
#### `/gd unban`  
**Abreviado**: `claimunban`  
**Argumentos**: `hand | <type> <target> [<mensagem>]`  
Note: Valid types are `entity`, `item`, `block`  

Unbans target id allowing it to be used again. 


### Misc

___
#### `/gd`

Lists detailed information on each command.

___
#### `/gd version`

Lists version information.