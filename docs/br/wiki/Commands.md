---
title: Comandos
tag: Info
category: info
icon: shell
---

# Visão Geral dos Comandos

Chave dos argumentos: \<requerido\> [opcional]

### Identificador de reivindicação

Muitos comandos suportam o novo argumento `[identificador]` que é o ID da declaração definido pelo proprietário da declaração. Se você não quiser ser obrigado a fazer uma reivindicação para um comando específico, defina o identificador de reivindicação usando `/gd claim id <identifier>` e passe o identificador no final do comando. 
Se estiver usando um identificador para uma reivindicação administrativa, o formato é `admin:<identifier>`     
Se estiver usando um identificador para região selvagem, o formato é `wilderness:<identifier>`  
Se estiver usando um identificador para outro jogador, o formato é `<jogador>:<identifier>`  


### Reivindicações

* [/gd abandon claim [identifier]](#gd-abandon-claim)
* [/gd abandon all](#gd-abandon-all)
* [/gd abandon top [identifier]](#gd-abandon-top)
* [/gd buy blocks [numberOfBlocks]](#gd-buy-blocks)
* [/gd buy claim](#gd-buy-claim)
* [/gd claim contract \<amount\> [direction] [identifier]](#gd-claim-contract)
* [/gd claim create \<radius\>|\<chunk\> [type]](#gd-claim-create)
* [/gd claim expand \<quantidade\> [direction] [identifier]](#gd-claim-expand)
* [/gd claim farewell \<mensagem\> [identifer]](#gd-claim-farewell)
* [/gd claim greeting \<mensagem\> [identifer]](#gd-claim-greeting)
* [/gd claim id \<identifier\>](#gd-claim-id)
* [/gd claim info [identifier]](#gd-claim-info)
* [/gd claim inherit](#gd-claim-inherit)
* [/gd claim inspect [\<area\>|\<hide\>|\<hideall\>]](#gd-claim-inspect)
* [/gd claim list [\<jogador\> [mundo]]](#gd-claim-list)
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
* [/gd player info \<jogador\> \<world\>|\<jogador\>|[mundo]](#gd-player-info)
* [/gd player transferblocks](#gd-player-transferblocks)
* [/gd player trapped](#gd-player-trapped)
* [/gd player unlockdrops](#gd-player-unlockdrops)
* [/gd sell blocks [numberOfBlocks]](#gd-sell-blocks)
* [/gd sell claim \<price\>](#gd-sell-claim-price)

### Bandeiras

* [/gd flag debug](#gd-flag-debug)
* [/gd flag claim [\<bandeira\> \<target\> \<value\> [contexts]]](#gd-flag-claim)
* [/gd flag definition \<preset:group\> \<definition\> \<value\> [identifier]](#gd-flag-definition)
* [/gd flag group \<grupo\> [\<bandeira\> \<target\> \<value\> [contexts]]](#gd-flag-group)
* [/gd flag player \<jogador\> [\<bandeira\> \<target\> \<value\> [contexts]]](#gd-flag-player)
* [/gd flag reset](#gd-flag-reset)

### Opções
* [/gd option claim [\<option\> \<value\> [contexts]]](#gd-option-claim)
* [/gd option group \<grupo\> [\<option\> \<value\> [contexts]]](#gd-option-group)
* [/gd option player \<jogador\> [\<option\> \<value\> [contexts]]](#gd-option-player)

### Trust  

Nota: Use `public` se quiser confiar em todos os jogadores.

* [/gd trust player \<jogador\>|public <accessor|container|builder|manager> ](#gd-trust-player)
* [/gd trust group \<grupo\>|public <accessor|container|builder|manager> ](#gd-trust-group)
* [/gd trustall player \<jogador\>|public](#gd-trustall-player)
* [/gd trustall group \<grupo\>|public](#gd-trustall-group)
* [/gd untrust player \<jogador\>|public ](#gd-untrust-player)
* [/gd untrust group \<grupo\>|public ](#gd-untrust-group)
* [/gd untrustall player \<jogador\>|public](#gd-untrustall-player)
* [/gd untrustall group \<grupo\>|public](#gd-untrustall-group)
* [/gd trust list](#gd-trust-list)

### Admin

* [/gd abandon world [mundo]](#gd-abandon-world)
* [/gd ban [hand | \<tipo\> \<target\> [message]]](#gd-ban)
* [/gd claim clear \<alvo\> [identifier]](#gd-claim-clear) 
* [/gd claim ignore](#gd-claim-ignore)
* [/gd claim restore](#gd-claim-restore)
* [/gd claim schematic \<create|delete\> \<name\>](#gd-claim-schematic)
* [/gd delete claim [identifier]](#gd-delete-claim)
* [/gd delete all \<jogador\> [mundo]](#gd-delete-all)
* [/gd delete alladmin [mundo]](#gd-delete-alladmin)
* [/gd mode admin](#gd-mode-admin)
* [/gd mode nature](#gd-mode-nature)
* [/gd permission group \<grupo\> [\<permissão\> \<value\>]](#gd-permission-group)
* [/gd permission player \<jogador\> [\<permissão\> \<value\>]](#gd-permission-player)
* [/gd player adjustbonusblocks \<jogador\> \<quantidade\> [mundo]](#gd-player-adjustbonusblocks)
* [/gd player adjustbonusblocksall \<quantidade\>](#gd-player-adjustbonusblocksall)
* [/gd player setaccruedblocks \<jogador\> \<quantidade\> [mundo]](#gd-player-setaccruedblocks)
* [/gd debug \<on\>\<off\>\<record\>\<paste\> [player]](#gd-debug)
* [/gd reload](#gd-reload)
* [/gd unban [hand | \<tipo\> \<alvo\>]](#gd-unban)

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
**Atalho**: `buyblocks`  
**Argumentos**: `<numberOfBlocks>`  

Compra blocos de reivindicação adicionais com dinheiro do servidor. Não funciona em servidores sem nenhum plugin de economia.

___
#### `/gd buy claim`

Veja uma lista de reivindicações à venda. Clique em [Comprar] para comprar.

___
#### `/gd claim contract`
**Atalho**: `claimcontract`, `contractclaim`  
**Argumentos**: `<amount> [direction] [identifier]`  
Contrai/Reduz a reivindicação da direção que você está de frente. 

___
#### `/gd claim create`
**Atalho**: `claimcreate`  
**Argumentos**: `<radius> [tipo]`  
Cria uma reivindicação em torno do jogador do TIPO fornecido. Se nenhum TIPO de declarado (ou um incorreto) for especificado, uma reivindicação básica será criada.

___
#### `/gd claim expand`
**Atalho**: `claimexpand`, `expandclaim`  
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
**Atalho**: `claiminfo`  
**Argumentos**: `[identifier]`  

Obtém informações sobre uma reivindicação em que você está ou pelo ID da reivindicação.

___
#### `/gd claim inherit`
**Atalho**: `inherit`  

Alterna o modo de herdar da reivindicação principal

___
#### `/gd claim inspect`
**Atalho**: `claiminspect`  
**Argumentos**: `[area|hide|hideall]`  

Inspeciona o jogador do bloco alvo que está olhando ou nas reivindicações próximas.

___
#### `/gd claim list`
**Atalho**: `claimlist`  
**Argumentos**: `[<jogador> [mundo]]`  

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
**Atalho**: `claimsetspawn`  

Define o spawn de sua reivindicação para o local em que você está.

___
#### `/gd claim spawn`
**Atalho**: `claimspawn`  

Teleporta você para reivindicar o spawn, se disponível.

___
#### `/gd claim tax`
**Argumentos**: `balance|force|pay <amount>]`  
Usado para gerenciar impostos de uma reivindicação.
Nota: O argumento `force` permite que um administrador pague o saldo de impostos de uma reivindicação para outro jogador.
Nota: Requer plugin de economia.


___
#### `/gd claim transfer`
**Atalho**: `transferclaim`  
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
**Atalho**: `cuboid`  

Alterna o modo de reivindicações do cuboide 3D.

___
#### `/gd mode basic`
**Atalho**: `modebasic`

Alterna a ferramenta de pá de volta ao modo de reivindicações básico.

___
#### `/gd mode subdivide`
**Atalho**: `modesubdivide`  

Alterna a ferramenta de pá para o modo de subdivisão, usada para subdividir suas reivindicações

___
#### `/gd mode town`
**Atalho**: `modetown`

Alterna a ferramenta de pá de volta ao modo de reivindicação de cidade.
___
#### `/gd player info`
**Argumentos**: `<jogador> <world>|<jogador>|[<world>]`  

Obtém informações sobre um jogador e seus blocos de reivindicação

___
#### `/gd player transferblocks`
**Atalho**: `transferblocks`  
**Argumentos**: `<jogador> <amount>`

Dá bloqueios de reivindicação a outro jogador

___
#### `/gd player trapped`  
**Atalho**: `trapped`  

Teleporta o jogador para um local seguro se estiver preso e incapaz de construir.

___
#### `/gd player unlockdrops`  
**Atalho**: `unlockdrops`  

Permite que outros jogadores peguem quaisquer itens dropados por morte.

___
#### `/gd sell blocks`
**Atalho**: `sellblocks`  
**Argumentos**: `<numberOfBlocks>`  

Venda seus blocos de reivindicação por dinheiro do servidor. Não funciona em servidores sem nenhum plugin de economia.

___
#### `/gd sell claim`
**Argumentos**: `<price>`  

Coloca sua reivindicação à venda pelo preço definido. Para desabilitar a venda, defina o preço como -1 ou defina a configuração ForSale em /claiminfo como false.


### Flags

___
#### `/gd flag debug`
**Atalho**: `cfd`

Alterna para o modo de depuração de reivindicação.

___
#### `/gd flag claim`
**Atalho**: `cf`  
**Argumentos**: `[<flag> <target> <value> [<\contexts>]]`  

Obtém/define bandeiras de reivindicação na reivindicação em que você está.


___
#### `/gd flag definition`
**Atalho**: `cf`  
**Argumentos**: `<preset:group> <definition> <value> [identifier]`  

Define as definições de bandeira de reivindicação na reivindicação em que você está ou no identificador de reivindicação.

___
#### `/gd flag group`
**Atalho**: `cfg`  
**Argumentos**: `<grupo> <flag> <target> <value> [<\contexts>]]`  

Obtém/define a permissão de sinalizador para um grupo na reivindicação em que você está.

___
#### `/gd flag player`
**Atalho**: `cfp`  
**Argumentos**: `<jogador> <flag> <target> <value> [<\contexts>]]`  

Adiciona permissão de bandeira ao jogador.

___
#### `/gd flag reset`
**Atalho**: `cfr`

Redefine a reivindicação para as bandeiras padrões do servidor.


### Options
___
#### `/gd option claim `
**Atalho**: `co`  
**Argumentos**: `[<option> <value> [<contexts>]]`  

Obtém/configura as opções na reivindicação em que você está.

___
#### `/gd option group`
**Atalho**: `cog`  
**Argumentos**: `<grupo> [<option> <value> [<contexts>]]`  

Obtém/configura as opções para um grupo-reivindicação em que você está.

___
#### `/gd option player`
**Atalho**: `cop`  
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
**Atalho**: `trust`  
**Argumentos**: `<jogador>|public <TipoDoTrust>`  

Concede a um jogador acesso à(s) sua(s) reivindicação(ões).

___
#### `/gd trust group`
*Accessor*: `Grants a group entry to your claim(s) and use of your bed`  
*Container*: `Grants a group access to your claim's containers, crops, animals, bed, buttons, and levers`  
*Builder*: `Grants a group edit access to your claim(s)`  
*Manager*: `Grants a group access to all of the above including claim settings`  
**Atalho**: `trustgroup`  
**Argumentos**: `<grupo>|public <TipoDoTrust>`  

Concede a um grupo acesso às suas reivindicações

___
#### `/gd trustall player`
*Accessor*: `Grants a player entry to ALL your claim(s) and use of your bed`  
*Container*: `Grants a player access to ALL your claim's containers, crops, animals, bed, buttons, and levers`  
*Builder*: `Grants a player edit access to ALL your claim(s)`  
*Manager*: `Grants a player access to all of the above including claim settings`
**Atalho**: `trust`  
**Argumentos**: `<jogador>|public <trusttype>`  

Concede a um jogador acesso a ***TODAS*** as suas reivindicações.

___
#### `/gd trustall group`
*Accessor*: `Grants a group entry to ALL your claim(s) and use of your bed`  
*Container*: `Grants a group access to ALL your claim's containers, crops, animals, bed, buttons, and levers`  
*Builder*: `Grants a group edit access to ALL your claim(s)`  
*Manager*: `Grants a group access to all of the above including claim settings`
**Atalho**: `trustallgroup`  
**Argumentos**: `<grupo>|public <trusttype>`  

Concede a um grupo acesso a ***TODAS*** as suas reivindicações.

___
#### `/gd untrust player`
**Atalho**: `untrust`  
**Argumentos**: `<jogador>|public`  

Remove o acesso de um jogador à sua reivindicação.

___
#### `/gd untrust group`
**Atalho**: `untrustgroup`  
**Argumentos**: `<grupo>|public`  

Remove o acesso de um grupo à sua reivindicação.

___
#### `/gd untrustall player`
**Atalho**: `untrustall`  
**Argumentos**: `<jogador>|public`  

Remove o acesso de um jogador a ***TODAS*** as suas reivindicações.

___
#### `/untrustall group`
**Atalho**: `untrustallgroup`  
**Argumentos**: `<grupo>|public`  

Remove o acesso de um grupo a ***TODAS*** as suas reivindicações.
___
#### `/gd trust list`
Lista as permissões para a reivindicação em que você está


### Admin

___
#### `/gd abandon world`  
**Atalho**: `abandonworld`  
**Argumentos**: `[mundo]`  

Comando especial de administração usado para abandonar TODAS as reivindicações do usuário no mundo. 
___
#### `/gd ban`  
**Atalho**: `claimban`  
**Argumentos**: `hand | <type> <target> [<mensagem>]`  
Nota: Os tipos válidos são `entity`, `item`, `block`
Proíbe alvo ou item na mão de todo uso.

___
#### `/gd player adjustbonusblocks`
**Atalho**: `adjustbonusblocks`  
**Argumentos**: `<jogador> <amount> [mundo]`  

Adiciona ou subtrai blocos bônus de reivindicação para um jogador

___
#### `/gd player adjustbonusblocksall`
**Atalho**: `adjustbonusblocksall`  
**Argumentos**: `<amount>`  

Ajusta o total do blocos bônus de reivindicação para todos os jogadores online pelo valor especificado.

___
#### `/gd player setaccruedblocks`
**Atalho**: `setaccruedblocks`  
**Argumentos**: `<jogador> <amount> [<world>]`  

Atualiza o total acumulado de bloqueios de reivindicações de um jogador.

___
#### `/gd mode admin`
**Atalho**: `modeadmin`  

Alterna a ferramenta de pá para o modo de reivindicações administrativas

___
#### `/gd delete claim`
**Atalho**: `deleteclaim`  

Exclui a reivindicação em que você está, mesmo que não seja sua reivindicação

___
#### `/gd delete all`
**Atalho**: `deleteall`  
**Argumentos**: `<jogador> [mundo]`  

Excluir todas as reivindicações de outro jogador

___
#### `/gd delete alladmin`
**Atalho**: `deletealladmin`  
**Argumentos**: `[mundo]`  

Exclui todas as reivindicação administrativas

___
#### `/gd claim ignore`
**Atalho**: `ignoreclaims`  

Alterna o ignorar as proteções das reivindicações

___
#### `/gd claim clear`
**Atalho**: `claimclear`  
**Argumentos**: `<target> [<claim> [<world>]]`  
Permite a compensação de entidades dentro de uma ou mais reivindicações.

___
#### `/gd permission group`
**Atalho**: `cpg`  
**Argumentos**: `<grupo> [<permissão> <value>]`  

Define uma permissão em um grupo com um contexto de reivindicação

___
#### `/gd permission player`
**Atalho**: `cpp`  
**Argumentos**: `<jogador> [<permissão> <value>]`  

Define uma permissão para um jogador com um contexto de reivindicação

___
#### `/gd mode nature`
**Atalho**: `rn`  

Alterna a ferramenta de pá para o modo de restauração

___
#### `/gd debug`
**Atalho**: `gddebug`  
**Argumentos**: `<on>|<off>|<record>|<paste> [<jogador>]`  

Toggles debug

___
#### `/gd reload`

Recarrega as configurações do GriefDefender

___
#### `/gd schematic`  
**Atalho**: `claimschematic`  
**Argumentos**: `<create|delete> <name>`  

Gerencia esquemático de reivindicação. Use '/claimschematic create \<nome\>' para criar um backup em tempo real da reivindicação.

___
#### `/gd unban`  
**Atalho**: `claimunban`  
**Argumentos**: `hand | <type> <target> [<mensagem>]`  
Nota: Os tipos válidos são `entity`, `item`, `block`

Desbane o ID do alvo, permitindo que ele seja usado novamente.


### Misc

___
#### `/gd`

Lista informações detalhadas sobre cada comando.

___
#### `/gd version`

Lista as informações da versão do GD.