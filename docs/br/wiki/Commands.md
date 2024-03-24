---
title: Comandos
tag: Info
category: info
icon: shell
---

# Visão Geral dos Comandos

Chave dos argumentos: \<requerido\> [opcional]

### Identificador de reivindicação

Muitos comandos suportam o novo argumento [`[identificador]`](/br/wiki/basic/Claim-Management.html#identificadores-de-reivindicacao) que é o ID da reivindicação definido pelo proprietário da reivindicação. Se você não quiser ser obrigado a fazer uma reivindicação para um comando específico, defina o identificador de reivindicação usando `/gd claim id <identificador>` e passe o identificador no final do comando. 
Se estiver usando um identificador para uma reivindicação administrativa, o formato é `admin:<identificador>`     
Se estiver usando um identificador para região selvagem, o formato é `wilderness:<identificador>`  
Se estiver usando um identificador para outro jogador, o formato é `<jogador>:<identificador>`  

### Comando Principal

* [/gd](#gd)

### Reivindicações

* [/gd abandon claim](#gd-abandon-claim)
* [/gd abandon all](#gd-abandon-all)
* [/gd abandon top](#gd-abandon-top)
* [/gd buy blocks](#gd-buy-blocks)
* [/gd buy claim](#gd-buy-claim)
* [/gd claim bank](#gd-claim-bank)
* [/gd claim contract](#gd-claim-contract)
* [/gd claim create](#gd-claim-create)
* [/gd claim debug](#gd-claim-debug)
* [/gd claim displayname](#gd-claim-displayname)
* [/gd claim expand](#gd-claim-expand)
* [/gd claim farewell](#gd-claim-farewell)
* [/gd claim greeting](#gd-claim-greeting)
* [/gd claim id](#gd-claim-id)
* [/gd claim info](#gd-claim-info)
* [/gd claim inspect](#gd-claim-inspect)
* [/gd claim list](#gd-claim-list)
* [/gd claim rent](#gd-claim-rent)
* [/gd claim setspawn](#gd-claim-setspawn)
* [/gd claim spawn](#gd-claim-spawn)
* [/gd claim tax](#gd-claim-tax)
* [/gd claim title](#gd-claim-title)
* [/gd claim transfer](#gd-claim-transfer)
* [/gd claim we](#gd-claim-we)
* [/gd claimgroup admin](#gd-claimgroup-admin)
* [/gd confirm](#gd-confirm)
* [/gd givepet](#gd-givepet)
* [/gd mode basic](#gd-mode-basic)
* [/gd mode subdivide](#gd-mode-subdivide)
* [/gd mode town](#gd-mode-town)
* [/gd player info](#gd-player-info)
* [/gd player transferblocks](#gd-player-transferblocks)
* [/gd player trapped](#gd-player-trapped)
* [/gd player unlockdrops](#gd-player-unlockdrops)
* [/gd sell blocks](#gd-sell-blocks)
* [/gd sell claim](#gd-sell-claim)
* [/gd toggle claim](#gd-toggle-claim)
* [/gd toggle cuboid](#gd-toggle-cuboid)
* [/gd toggle gui](#gd-toggle-gui)
* [/gd toggle inherit](#gd-toggle-inherit)
* [/gd toggle notifications](#gd-toggle-notifications)
* [/gd toggle tool](#gd-toggle-tool)

### Bandeiras

* [/gd flag claim](#gd-flag-claim)
* [/gd flag group](#gd-flag-group)
* [/gd flag player](#gd-flag-player)
* [/gd flag reset](#gd-flag-reset)
* [/gd flagdefinition](#gd-flagdefinition)
* [/gd flagdefinition group](#gd-flagdefinition-group)
* [/gd flagdefinition player](#gd-flagdefinition-player)

### Opções
* [/gd option claim](#gd-option-claim)
* [/gd option group](#gd-option-group)
* [/gd option player](#gd-option-player)

### Trust  

Nota: Use `public` se quiser confiar em todos os jogadores.

* [/gd trust player](#gd-trust-player)
* [/gd trust group](#gd-trust-group)
* [/gd trust list](#gd-trust-list)
* [/gd trustall player](#gd-trustall-player)
* [/gd trustall group](#gd-trustall-group)
* [/gd trustalladmin group](#gd-trustall-group)
* [/gd untrust player](#gd-untrust-player)
* [/gd untrust group](#gd-untrust-group)
* [/gd untrustall player](#gd-untrustall-player)
* [/gd untrustall group](#gd-untrustall-group)

### Admin

* [/gd abandon allother](#gd-abandon-all-other)
* [/gd abandon world](#gd-abandon-world)
* [/gd ban](#gd-ban)
* [/gd claim clear](#gd-claim-clear)
* [/gd claim reserve](#gd-claim-reserve)
* [/gd claim restore](#gd-claim-restore)
* [/gd claim schematic](#gd-claim-schematic)
* [/gd debug](#gd-debug)
* [/gd delete claim](#gd-delete-claim)
* [/gd delete all](#gd-delete-all)
* [/gd delete alladmin](#gd-delete-alladmin)
* [/gd delete top](#gd-delete-top)
* [/gd economy blocktransfer](#gd-economy-blocktransfer)
* [/gd mode admin](#gd-mode-admin)
* [/gd mode nature](#gd-mode-nature)
* [/gd permission group](#gd-permission-group)
* [/gd permission player](#gd-permission-player)
* [/gd player adjustbonusblocks](#gd-player-adjustbonusblocks)
* [/gd player adjustbonusblocksall](#gd-player-adjustbonusblocksall)
* [/gd player setaccruedblocks](#gd-player-setaccruedblocks)
* [/gd reload](#gd-reload)
* [/gd toggle ignore](#gd-toggle-ignore)
* [/gd unban](#gd-unban)


### Avançado

* [/gd claimgroup player](#gd-claimgroup-player)
* [/gd snapshot](#gd-snapshot)

### Diversos

* [/gd help](#gd-help)
* [/gd version](#gd-version)


# Detalhe do comando

### Claims
___
#### `/gd abandon claim`
**Atalho**: `abandon, abandonclaim`  
**Argumentos**: `[identificador]`  
**Permissão**: `griefdefender.user.claim.command.abandon.base`  
**Permissões Adicionais**:  
    `griefdefender.user.claim.command.abandon.basic` - Necessário se abandonar a reivindicação básica.  
    `griefdefender.user.claim.command.abandon.subdivision` - Necessário se abandonar a subdivisão.  
    `griefdefender.user.claim.command.abandon.town` - Necessário se estiver abandonando a town/cidade.  
**Nota**: Isso é usado apenas para reivindicações de usuários, NÃO para reivindicações de administradores. Ver [/gd delete claim [identificador]](#gd-delete-claim)  

Abandona a reivindicação em que você está, a menos que um [Identificadores de reivindicação](/br/wiki/basic/Claim-Management.html#identificadores-de-reivindicacao) seja especificado.
Nota: Este comando só funcionará em reivindicações sem filhos. Se você quiser abandonar uma reivindicação com subdivisão, você deve usar
[/gd abandon top](#gd-abandon-top) em vez disso.

___
#### `/gd abandon all`
**Atalho**: `abandonall, abandonallclaims`  
 **Permissão**: `griefdefender.user.claim.command.abandon-all`  
 
Abandona TODAS as suas reivindicações de usuário.

___
#### `/gd abandon top`
**Atalho**:  `abandontop`  
**Argumentos**: `[identificador]`   
**Permissão**: `griefdefender.user.claim.command.abandon-top-level`  

Abandona a reivindicação em que você está e todas as suas subdivisões, a menos que um [Identificadores de reivindicação](/br/wiki/basic/Claim-Management.html#identificadores-de-reivindicacao) seja especificado.
Nota: Se usado em uma reivindicação town/cidade, também incluirá todas as reivindicações básicas herdadas de propriedade do proprietário da cidade.

___
#### `/gd buy blocks`
**Atalho**: `buyblocks, buyclaimblocks`  
**Argumentos**: `<quantidade>`  
**Permissão**: `griefdefender.user.claim.command.buy-blocks`  
**Requer**: Plug-in de economia.  

Compra blocos de reivindicações adicionais com moeda.
Nota: `economy-block-cost` deve ser definido com um número superior a 0 em [`options.conf`](/br/wiki/basic/Options.html) para que este comando funcione.

___
#### `/gd buy claim`
**Atalho**: `claimbuy`  
**Permissão**: `griefdefender.user.claim.command.buy`  
**Requer**: Plug-in de economia.  

Veja uma lista de reivindicações à venda. Clique em [Comprar] para comprar.  

___
#### `/gd claim bank`
**Atalho**: `claimbank`  
**Argumentos**: `<withdraw|deposit> <quantidade> <nome> [identificador]`  
**Permissão**: `griefdefender.user.claim.command.bank`  
**Requer**: Plugin de economia que suporta bancos virtuais e configuração `bank-system` definida como `true` em [`global.conf`](/br/wiki/advanced/Global-Config.html)  

Usado para sacar ou depositar dinheiro para uso em uma reivindicação que você está enfrentando, a menos que um [Identificadores de reivindicação](/br/wiki/basic/Claim-Management.html#identificadores-de-reivindicacao) seja especificado.


___
#### `/gd claim contract`
**Atalho**: `claimcontract`, `contractclaim`  
**Argumentos**: `<quantidade> [direção] [identificador]`  
**Permissão**: `griefdefender.user.claim.command.contract`  

Contrai/reduz a reivindicação em que você está, a menos que um [Identificadores de reivindicação](/br/wiki/basic/Claim-Management.html#identificadores-de-reivindicacao) seja especificado, na direção especificada ou voltada.  

___
#### `/gd claim create`
**Atalho**: `claimcreate`  
**Argumentos**: `<raio>|chunk [tipo]`  
**Permissão**: `griefdefender.user.claim.create.base`  
**Permissões Adicionais**:  
    `griefdefender.user.claim.create.basic` - Necessário se estiver criando uma declaração básica.  
    `griefdefender.user.claim.create.subdivision` - Necessário se estiver criando subdivisão.  
    `griefdefender.user.claim.create.town` - Necessário se estiver criando uma cidade.  
    `griefdefender.admin.claim.command.admin-mode` - Necessário ao criar uma reivindicação administrativa.  

Cria uma reivindicação em torno do jogador de determinado tipo. Se nenhum tipo de declaração (ou um tipo incorreto) for especificado, uma declaração básica será criada.   
Nota: Se `chunk` for usado em vez de `<raio>`, a reivindicação consumirá todo o pedaço em que você está.  


#### `/gd claim debug`
**Atalho**: `cfdebug`  
**Permissão**: `griefdefender.user.claim.command.flag.debug`  

Alterna o modo de depuração de declaração do usuário para que os proprietários da declaração testem a proteção como um usuário não confiável.

___
#### `/gd claim displayname`
**Atalho**: `claimdisplayname`  
**Argumentos**: `<nome>|clear`  
**Permissão**: `griefdefender.user.claim.command.display-name`  

Define o nome de exibição da sua reivindicação.  
Nota: Use `clear` como argumento para limpar o nome de exibição.  
Nota: Este comando verifica nomes reservados definidos pelos administradores em [`global.conf`](/br/wiki/advanced/Global-Config.html). Se um nome reservado for encontrado, ele não será definido, a menos que seja definido por um administrador.  

___
#### `/gd claim expand`
**Atalho**: `claimexpand, expandclaim`  
**Argumentos**: `<quantidade> [direção] [identificador]`  
**Permissão**: `griefdefender.user.claim.command.expand`  
 
Expande a reivindicação em que você está, a menos que um [Identificadores de reivindicação](/br/wiki/basic/Claim-Management.html#identificadores-de-reivindicacao) seja especificado, na direção especificada ou voltada.  

___
#### `/gd claim farewell`
**Atalho**: `claimfarewell`  
**Argumentos**: `<mensagem>|clear|none [identificador]`  
**Permissão**: `griefdefender.user.claim.command.farewell`  

Define a mensagem de despedida da reivindicação em que você está, a menos que um [Identificadores de reivindicação](/br/wiki/basic/Claim-Management.html#identificadores-de-reivindicacao) seja especificado.  
Nota: Para desarmar, use `/gd claim farewell clear`

___
#### `/gd claim greeting`
**Atalho**: `claimgreeting`  
**Argumentos**: `<mensagem>|clear|none [identificador]`  
**Permissão**: `griefdefender.user.claim.command.greeting`  

Define a mensagem de saudação da sua reivindicação.  
Nota: Para cancelar a configuração, use `/gd Claim Greeting Clear`


___
#### `/gd claim id`
**Atalho**: `claimid`  
**Argumentos**: `<identificador>`  
**Permissão**: `griefdefender.user.claim.command.id`  

Define o identificador amigável da sua reivindicação.  
Nota: Este comando verifica nomes reservados definidos pelos administradores em [`global.conf`](/br/wiki/advanced/Global-Config.html). Se um nome reservado for encontrado, ele não será definido, a menos que seja definido por um administrador.  

___
#### `/gd claim info`
**Atalho**: `claiminfo`  
**Argumentos**: `[identificador]`  
**Permissão**: `griefdefender.user.claim.command.info.base`  
**Permissões Adicionais**:  
    `griefdefender.user.claim.command.info.others` - Necessário para ver outras informações de reivindicação que não são de sua propriedade.  
    `griefdefender.user.claim.create.town` - Necessário para alterar uma reivindicação para um tipo de cidade.  
    `griefdefender.user.claim.command.info.raid` - Necessário para alternar ataques.  
    `griefdefender.user.claim.command.greeting` - Necessário para definir saudação de reivindicação.  
    `griefdefender.user.claim.command.farewell` - Necessário para definir a despedida da reivindicação.  
    `griefdefender.user.claim.command.enter-title` - Necessário para definir a reivindicação, insira o título.  
    `griefdefender.user.claim.command.exit-title` - Necessário para definir o título de saída da reivindicação.  
    `griefdefender.user.chat.capture` - Necessário para alternar a captura de bate-papo.  
    `griefdefender.user.claim.command.info.others.creation-date` - Necessário para ver a data de criação em reivindicações que não são de sua propriedade.  
    `griefdefender.user.claim.command.info.others.last-active` - Necessário para ver a última ação ativa em reivindicações que não são de sua propriedade.  
    `griefdefender.user.claim.command.info.others.claim-uuid` - Necessário para ver o UUID da reivindicação em reivindicações que não são de sua propriedade.  

Obtém informações sobre a reivindicação que você está enfrentando, a menos que um [Identificadores de reivindicação](/br/wiki/basic/Claim-Management.html#identificadores-de-reivindicacao) seja especificado.


___
#### `/gd claim inspect`
**Atalho**: `claiminspect`  
**Argumentos**: `[area|hide|hideall]`  
**Permissão**: `griefdefender.user.claim.command.inspect`  

Inspeciona o bloco alvo que o jogador está olhando ou as reivindicações próximas.

___
#### `/gd claim list`
**Atalho**: `claimlist`  
**Argumentos**: `[<jogador> [mundo]]`  
**Permissão**: `griefdefender.user.claim.command.list.base`  
**Permissões Adicionais**:  
    `griefdefender.user.claim.command.list.others` - Necessário para listar reivindicações que não são de sua propriedade.  
    `griefdefender.user.claim.create.town` - Necessário para listar cidades que não são de sua propriedade.  
    `griefdefender.user.chat.capture` - Necessário para alternar a captura de bate-papo.  

Listar informações sobre as reivindicações de um jogador.

___
#### `/gd claim rent`
**Atalho**: `claimrent`  
**Argumentos**: `[create <rate> [max_days]|list|cancel]`  
**Permissão**: `griefdefender.user.claim.command.rent`  
**Requer**: Plugin de economia e `rent-system` serão habilitados em [`global.conf`](/br/wiki/advanced/Global-Config.html)  

Usado para alugar/listar reivindicações.  
Nota: Este comando é usado apenas para sistema de aluguel GD integrado. Recomenda-se usar RealEstate.

___
#### `/gd claim setspawn`
**Atalho**: `claimsetspawn`  
**Permissão**: `griefdefender.user.claim.command.set-spawn`  

Define o spawn da sua reivindicação para o local em que você está.

___
#### `/gd claim spawn`
**Atalho**: `claimspawn`  
**Argumentos**: `[identificador]`  
**Permissão**: `griefdefender.user.claim.command.spawn`  
**Requer**: Plugin de economia se `player-teleport-cost` for usado.  

Teletransporta você para reivindicar spawn, se disponível.  
Nota: Para atrasar o teletransporte, defina a opção `player-teleport-delay` maior que `0` em [`options.conf`](/br/wiki/basic/Options.html).  
Nota: Para cobrar moeda no teletransporte, defina `player-teleport-cost` para um valor superior a 0 em [`options.conf`](/br/wiki/basic/Options.html).

___
#### `/gd claim tax`
**Argumentos**: `balance|force|reset|resetall|pay <quantidade>]`   
**Permissão**: `griefdefender.user.claim.command.claim.tax`  
**Requer**: Plugin de economia e configuração `tax-system` a serem habilitados em [`global.conf`](/br/wiki/advanced/Global-Config.html). É altamente recomendável testar esse recurso antes de ligá-lo.  

Usado para gerenciar impostos de uma reivindicação. Consulte [Sistema de taxas](/br/wiki/basic/Tax-System.html) para obter mais informações.  
Nota: O argumento `force` permite que um administrador pague o saldo fiscal de uma reivindicação para outro jogador.  
Nota: O argumento `reset` irá zerar o imposto devido na reivindicação. Requer `griefdefender.admin.claim.command.admin-mode` ou capacidade de ignorar o tipo de reivindicação.  
Nota: O argumento `resetall` irá zerar o imposto devido em todas as reivindicações. Requer `griefdefender.admin.claim.command.admin-mode` ou capacidade de ignorar o tipo de reivindicação.  


___
#### `/gd claim title`
**Atalho**: `claimtitle`  
**Argumentos**: `enter|exit main|sub <mensagem>|clear|none`  
**Permissão**: `griefdefender.user.claim.command.enter-title`  

Define o título de entrada ou saída da sua reivindicação.  
Nota: Use `clear` ou `none` para limpar o título.  

___
#### `/gd claim transfer`
**Atalho**: `claimtransfer, transferclaim`  
**Argumentos**: `<jogador> [identificador]`  
**Permissão**: `griefdefender.user.claim.command.transfer`  

Transfira a reivindicação em que você está, a menos que [Identificadores de reivindicação](/br/wiki/basic/Claim-Management.html#identificadores-de-reivindicacao) seja especificado, para o jogador alvo.

___
#### `/gd claim we`
**Atalho**: `gdwe, gdworldedit`  
**Argumentos**: `claim|clear|select [identificador]`  
  `claim` - cria uma reivindicação GD a partir da seleção WE.  
  `clear` - limpa a seleção do worldedit.  
  `select` - cria nova seleção WE a partir da reivindicação GD.  
**Permissão**: `griefdefender.user.claim.command.worldedit.create`  
**Requer**: WorldEdit.  

Usado para gerenciar reivindicações GD com worldedit.  
Nota: Este comando não funcionará a menos que o servidor tenha WorldEdit.  
___
#### `/gd claimgroup admin`
**Atalho**: `cga, claimgroupadmin`  
**Argumentos**: `join <grupo> [<identificador>]|unjoin [<identificador>]|create <grupo>|delete <grupo>`  
**Permissão**: `griefdefender.admin.claim.command.group`  

Usado para gerenciar grupos de declarações de administração global. Veja [Grupos de reivindicação](/br/wiki/basic/Claim-Management.html#grupos-de-reivindicacao) para mais informações.

___
#### `/gd confirm`
**Atalho**: `gdconfirm`  
**Permissão**: `griefdefender.user.command.confirm`  

Usado para confirmar confirmações de chat por comando.  

___
#### `/gd givepet`
**Atalho**: `givepet`  
**Argumentos**: `<jogador>`  
**Permissão**: `griefdefender.user.claim.command.give.pet`  

Transfere um animal de estimação que você possui para um novo dono.


___
#### `/gd mode basic`
**Atalho**: `bc, basicclaims, modeadmin`  
**Permissão**:   `griefdefender.user.claim.command.basic-mode`  

Muda a ferramenta de modificação para o modo de reivindicações básicas, que permite ao usuário criar reivindicações básicas.

___
#### `/gd mode subdivide`
**Atalho**: `sc, modesubdivide, subdivideclaims`  
**Permissão**:   `griefdefender.user.claim.command.subdivide-mode`  

Muda a ferramenta de modificação para o modo de subdivisão, usado para subdividir suas reivindicações.

___
#### `/gd mode town`
**Atalho**: `modetown, townclaims`  
**Permissão**:   `griefdefender.user.claim.command.town-mode`  

Muda a ferramenta de modificação para o modo de reivindicação de cidade.

___
#### `/gd player info`
**Atalho**: `gdplayerinfo, playerinfo`  
**Argumentos**: `[<jogador>|<jogador> <mundo>]`  
**Permissão**: `griefdefender.user.command.info.base`  
**Permissões Adicionais**:  
    `griefdefender.user.command.info.others` - Necessário para visualizar as informações de outros jogadores.  
    `griefdefender.user.command.info.others.last-active` - Necessário para ver as últimas informações ativas de outro jogador.  
   `griefdefender.user.claim.create.town` - Necessário para visualizar informações da cidade.  
    `griefdefender.user.chat.capture` - Necessário para alternar a captura de bate-papo.  

Obtém informações sobre os dados de um jogador, bloqueios de reivindicações e limites de reivindicações.

___
#### `/gd player transferblocks`
**Atalho**: `transferblocks`  
**Argumentos**: `<jogador> <quantidade>`  
**Permissão**: `griefdefender.user.claim.command.give.blocks`  

Transfere blocos de reivindicação de propriedade para outro jogador.  
Nota: Isso deduzirá os bloqueios de reivindicação do jogador usando o comando. Use com cuidado!

___
#### `/gd player trapped`  
**Atalho**: `trapped`  
**Permissão**: `griefdefender.user.claim.command.trapped`  

Teletransporta o jogador para um local seguro se estiver preso e incapaz de construir.

___
#### `/gd player unlockdrops`  
**Atalho**: `unlockdrops`  
**Permissão**: `griefdefender.user.claim.command.unlock-drops`  

Permite que outros jogadores peguem quaisquer itens caídos após a morte.  

___
#### `/gd sell blocks`
**Atalho**: `sellblocks, sellclaim, sellclaimblocks`  
**Argumentos**: `[amount]`  
**Permissão**: `griefdefender.user.claim.command.sell-blocks`  
**Requer**: Economy plugin.  

Venda seus blocos de reivindicação por dinheiro do servidor.  
Nota: `economy-block-sell-return` deve ser definido como superior a 0 em [`options.conf`](/br/wiki/basic/Options.html) para que este comando funcione.  

___
#### `/gd sell claim`
**Atalho**: `claimsell`  
**Argumentos**: `<price>|cancel`  
**Permissão**: `griefdefender.user.claim.command.sell`  

Coloca sua reivindicação à venda pelo preço definido.  
Nota: Para cancelar a venda, execute `/claimsell cancel`

___
#### `/gd toggle claim`
**Atalho**: `claim, toggleclaim`  
**Permissão**: `griefdefender.user.claim.command.claim-mode.base`  

Alterna a criação do modo de reivindicação. Este modo não usa ferramentas.  
Nota: O padrão será o modo de reivindicação básico.  
Nota: Use o botão esquerdo para visualizar/ocultar reivindicações.  
Observação: clique com o botão direito para começar a reivindicar.  

___
#### `/gd toggle cuboid`
**Atalho**: `cuboid, togglecuboid`  
**Permissão**: `griefdefender.user.claim.command.cuboid`  

Alterna o modo de reivindicações cubóides 3D, que leva em consideração a altura, em vez de reivindicar da rocha ao céu.

___
#### `/gd toggle gui`
**Atalho**: `claimgui`  
**Permissão**: `griefdefender.user.claim.command.gui`  

Alternar interface entre Interface de bate-papo/inventário.

___
#### `/gd toggle inherit`
**Atalho**: `claiminherit, toggleclaiminherit`  
**Permissão**: `griefdefender.user.claim.command.inherit`  

Alterna se a declaração herda sinalizadores e confiança da reivindicação principal.  
Nota: Não afeta reivindicações de crianças nas cidades, pois isso é sempre aplicado.

___
#### `/gd toggle notifications`
**Atalho**: `claimnotifications`  
**Permissão**: `griefdefender.user.claim.command.toggle.notifications`  

Para ativar/desativar mensagens de saudação/despedida em reivindicações confiáveis.

___
#### `/gd toggle tool`
**Atalho**: `claimtool`  
**Permissão**: `griefdefender.user.claim.command.claim-tool`  

Para ativar/desativar a ferramenta de reivindicação.


### Flags

___
#### `/gd flag claim`
**Atalho**: `cf, claimflag`   
**Argumentos**: `[<flag/bandeira> <alvo/target> <valor> [contextos]]`  
**Permissão**: `griefdefender.user.claim.command.flag.base`  
**Permissões Adicionais**:  
    `griefdefender.user.claim.command.flag.gui` - Necessário para usar o sinalizador GUI se o comando for especificado sem argumentos.  
    `griefdefender.advanced.admin.flag.<flag_name>` - Necessário para usar este comando para `<flag_name>` especificado como argumento.  
    `griefdefender.user.claim.command.list-flags` - Necessário para listar sinalizadores atuais usados na reivindicação.  
    `griefdefender.user.definition.flag.<nome_do_preset>.<grupo>.<definition_name>` - Necessário para ver as definições de sinalizadores do usuário apresentadas na Interface.  
    `griefdefender.admin.definition.flag.<nome_do_preset>.<grupo>.<definition_name>` - Necessário para ver as definições do sinalizador admin apresentadas na Interface.  
    `griefdefender.user.chat.capture` - Necessário para usar o recurso de captura de bate-papo na Interface do bate-papo.  
    `griefdefender.advanced.admin.flags.base` - Necessário para ver o botão `ADVANCED` na Interface do chat.  
    `griefdefender.advanced.user.gui.flag.group.owner` - Necessário para ver a guia `OWNER` na Interface.  
    `griefdefender.advanced.user.gui.flag.group.accessor` - Necessário para ver a guia `ACCESSOR` na Interface.  
    `griefdefender.advanced.user.gui.flag.group.builder` - Necessário para ver a guia `BUILDER` na Interface.  
    `griefdefender.advanced.user.gui.flag.group.container` - Necessário para ver a guia `CONTAINER` na Interface.  
    `griefdefender.advanced.user.gui.flag.group.manager` - Necessário para ver a guia `MANAGER` na Interface.  

Obtém/define sinalizadores de reivindicação na reivindicação em que você está.

___
#### `/gd flag group`
**Atalho**: `cfg`  
**Argumentos**: `<grupo> [<flag/bandeira> <alvo/target> <valor> [contextos]]`  
**Permissão**: `griefdefender.admin.claim.command.flag.group`  

Obtém/define permissão de sinalização para um grupo LP na reivindicação em que você está.

___
#### `/gd flag player`
**Atalho**: `cfp`  
**Argumentos**: `<jogador> <flag/bandeira> <alvo/target> <valor> [contextos]`  
**Permissão**: `griefdefender.user.claim.command.flag.player`  

Adiciona permissão de sinalização ao jogador.

___
#### `/gd flag reset`
**Atalho**: `cfr`  
**Argumentos**: `[identificador]`  
**Permissão**: `griefdefender.user.claim.command.flag.reset`  

Redefine uma declaração para sinalizar padrões removendo todas as permissões persistentes com UUID de declaração em LP.

___
#### `/gd flagdefinition`
**Atalho**: `claimflagdefinition, flagdefinition`  
**Argumentos**: `<preset:group:public|owner> <definition/definição> <valor> [identificador]`  
**Permissão**: `griefdefender.user.claim.command.flag.definition`  
**Permissões Adicionais**:  
    `griefdefender.user.definition.flag.<nome_do_preset>.<grupo>.<definition_name>` - A definição do sinalizador especificada como argumento exigirá esta permissão.  
**Exemplo**: Para alternar a definição do sinalizador `tnt-block-explosion` no grupo de usuários do Minecraft  
`/gd flagdefinition minecraft:user:public tnt-block-explosion true`  

Alterna a definição do sinalizador especificado para verdadeiro ou falso.

___
#### `/gd flagdefinition group`
**Atalho**: `claimflagdefinitiongroup, flagdefinitiongroup`  
**Argumentos**: `<grupo> <preset:group:public|owner> <definition/definição> <valor> [identificador]`  
**Permissão**: `griefdefender.user.claim.command.flag.definition-group`  
**Permissões Adicionais**:  
    `griefdefender.user.definition.flag.<nome_do_preset>.<grupo>.<definition_name>` - A definição do sinalizador especificada como argumento exigirá esta permissão.  
**Exemplo**: Para alternar a definição do sinalizador `tnt-block-explosion` no grupo de usuários do Minecraft no grupo LP chamado `vip`  
`/gd flagdefinition group vip minecraft:user:public tnt-block-explosion true`  

Alterna a definição do sinalizador especificado no grupo LP para verdadeiro ou falso.

___
#### `/gd flagdefinition player`
**Atalho**: `claimflagdefinitionplayer, flagdefinitionplayer`  
**Argumentos**: `<jogador> <preset:group:public|owner> <definition/definição> <valor> [identificador]`  
**Permissão**: `griefdefender.user.claim.command.flag.definition-player`  
**Permissões Adicionais**:  
    `griefdefender.user.definition.flag.<nome_do_preset>.<grupo>.<definition_name>` - A definição do sinalizador especificada como argumento exigirá esta permissão.  
**Exemplo**: Para alternar a definição do sinalizador `tnt-block-explosion` no grupo de usuários do Minecraft no player LP chamado `Player123`  
`/gd flagdefinition player Player123 minecraft:user:public tnt-block-explosion true`  

Alterna a definição de flag especificada no reprodutor LP para verdadeiro ou falso.



### Options
___
#### `/gd option claim `
**Atalho**: `cod, claimoption`    
**Argumentos**: `[<option> <valor> [contextos]]`  
**Permissão**: `griefdefender.admin.claim.command.option.base`  
**Permissões Adicionais**:  
    `griefdefender.user.claim.command.option.gui` - Necessário para usar a opção GUI.  
    `griefdefender.advanced.admin.options.arg` - Necessário para usar comando com argumentos.  
    `griefdefender.advanced.admin.option.<option_name>` - Necessário para usar este comando para `<option_name>` especificado como argumento.  
    `griefdefender.user.claim.command.list-options` - Necessário para listar as opções atuais usadas na reivindicação.  
    `griefdefender.user.definition.option.<nome_do_preset>.<grupo>.<definition_name>` - Necessário para ver as definições de opções do usuário apresentadas na Interface.  
    `griefdefender.admin.definition.option.<nome_do_preset>.<grupo>.<definition_name>` - Necessário para ver as definições de opções de administração apresentadas na Interface.  

Obtém/define opções na reivindicação em que você está.

___
#### `/gd option group`
**Atalho**: `cog`  
**Argumentos**: `<grupo> [<option> <valor> [contextos]]`  
**Permissão**: `griefdefender.admin.claim.command.option.group`  

Obtém/define opções para o grupo LP na reivindicação em que você está.

___
#### `/gd option player`
**Atalho**: `cop`  
**Argumentos**: `<jogador> [<option> <valor> [contextos]]`   
**Permissão**: `griefdefender.admin.claim.command.option.player`  

Obtém/define opções para um jogador reivindicado em que você está.


### Trust
Nota: `public` é para todos os usuários.
___
#### `/gd trust player`
*Resident*: `Concede a um jogador/grupo a capacidade de criar reivindicações, inclui confiança de acesso.`
*Accessor*: `Concede uma entrada de jogador para sua(s) reivindicação(ões) e uso de sua cama`  
*Container*: `Concede a um jogador acesso aos recipientes (mesa de trabalho), colheitas, animais, cama, botões e alavancas da sua reivindicação`  
*Builder*: `Concede a um jogador acesso de edição às suas reivindicações`  
*Manager*: `Concede a um jogador acesso a todos os itens acima, incluindo configurações de reivindicação`  
**Atalho**: `trust`  
**Argumentos**: `<jogador>|public <trusttype>`  

Concede ao jogador acesso às suas reivindicações.

___
#### `/gd trust group`
*Resident*: `Concede a um jogador/grupo a capacidade de criar reivindicações, inclui confiança de acesso.`
*Accessor*: `Concede uma entrada de jogador para sua(s) reivindicação(ões) e uso de sua cama`  
*Container*: `Concede a um jogador acesso aos recipientes (mesa de trabalho), colheitas, animais, cama, botões e alavancas da sua reivindicação`  
*Builder*: `Concede a um jogador acesso de edição às suas reivindicações`  
*Manager*: `Concede a um jogador acesso a todos os itens acima, incluindo configurações de reivindicação`  
**Atalho**: `trustgroup`  
**Argumentos**: `<grupo> [<accessor|builder|container|manager|resident>] [identificador]`  
**Permissão**: `griefdefender.admin.claim.command.trust.group`  

Concede a um grupo de LP acesso à reivindicação em que você está, a menos que um [Identificadores de reivindicação](/br/wiki/basic/Claim-Management.html#identificadores-de-reivindicacao) seja especificado.

___
#### `/gd trustall player`
*Resident*: `Concede a um jogador/grupo a capacidade de criar reivindicações, inclui confiança de acesso.`
*Accessor*: `Concede uma entrada de jogador para sua(s) reivindicação(ões) e uso de sua cama`  
*Container*: `Concede a um jogador acesso aos recipientes (mesa de trabalho), colheitas, animais, cama, botões e alavancas da sua reivindicação`  
*Builder*: `Concede a um jogador acesso de edição às suas reivindicações`  
*Manager*: `Concede a um jogador acesso a todos os itens acima, incluindo configurações de reivindicação`  
**Atalho**: `trust`  
**Argumentos**: `<jogador>|public <trusttype>`  
**Permissão**: `griefdefender.user.claim.command.trustall.player`  

Concede ao jogador acesso a ***TODAS*** suas reivindicações.

___
#### `/gd trustall group`
*Resident*: `Concede a um jogador/grupo a capacidade de criar reivindicações, inclui confiança de acesso.`
*Accessor*: `Concede uma entrada de jogador para sua(s) reivindicação(ões) e uso de sua cama`  
*Container*: `Concede a um jogador acesso aos recipientes (mesa de trabalho), colheitas, animais, cama, botões e alavancas da sua reivindicação`  
*Builder*: `Concede a um jogador acesso de edição às suas reivindicações`  
*Manager*: `Concede a um jogador acesso a todos os itens acima, incluindo configurações de reivindicação`  
**Atalho**: `trustallgroup`  
**Argumentos**: `<grupo>|public <accessor|builder|container|manager|resident>`  
**Permissão**: `griefdefender.admin.claim.command.trustall.group`  

Concede a um grupo LP acesso a ***TODAS*** suas reivindicações.

___
#### `/gd trustalladmin group`
*Resident*: `Concede a um jogador/grupo a capacidade de criar reivindicações, inclui confiança de acesso.`
*Accessor*: `Concede uma entrada de jogador para sua(s) reivindicação(ões) e uso de sua cama`  
*Container*: `Concede a um jogador acesso aos recipientes (mesa de trabalho), colheitas, animais, cama, botões e alavancas da sua reivindicação`  
*Builder*: `Concede a um jogador acesso de edição às suas reivindicações`  
*Manager*: `Concede a um jogador acesso a todos os itens acima, incluindo configurações de reivindicação`  
**Atalho**: `trustallgroup`  
**Argumentos**: `<grupo>|public <accessor|builder|container|manager|resident>`    
**Permissão**: `griefdefender.admin.claim.command.trustalladmin.group`  

Concede a um grupo LP acesso a ***TODAS*** reivindicações de administrador.

___
#### `/gd trust list`
**Atalho**: `trustlist`  
**Argumentos**: `[tipo] [identificador]`  
 **Permissão**: `griefdefender.user.claim.command.trust.list`  
 
Gerencia a confiança para a reivindicação que você representa.

___
#### `/gd untrust player`
**Atalho**: `untrust`  
**Argumentos**: `<jogador>|public [<accessor|builder|container|manager|resident>] [identificador]`  
**Permissão**: `griefdefender.user.claim.command.untrust.player`  

Revoga o acesso de um jogador à sua reivindicação.

___
#### `/gd untrust group`
**Atalho**: `untrustgroup`  
**Argumentos**: `<grupo>|public [<accessor|builder|container|manager|resident>] [identificador]`  
**Permissão**: `griefdefender.admin.claim.command.untrust.group`  

Revoga o acesso de um grupo à sua reivindicação.

___
#### `/gd untrustall player`
**Atalho**: `untrustall`  
**Argumentos**: `<jogador>|public [<accessor|builder|container|manager|resident>]`  
**Permissão**: `griefdefender.user.claim.command.untrustall.player`  

Revoga o acesso de um jogador a ***TODAS*** suas reivindicações.

___
#### `/untrustall group`
**Atalho**: `untrustallgroup`  
**Argumentos**: `<grupo>|public [<accessor|builder|container|manager|resident>]`   
**Permissão**: `griefdefender.admin.claim.command.untrustall.group`  

Revoga o acesso de um grupo a ***TODAS*** suas reivindicações.


### Admin


___
#### `/gd abandon allother`
**Atalho**: `abandonallother`  
**Argumentos**: `<jogador> <mundo>`  
 **Permissão**: `griefdefender.admin.claim.command.abandon.all-other`  
 
Permite que um administrador abandone TODAS as reivindicações de um jogador específico para um mundo específico.


___
#### `/gd abandon world`  
**Atalho**: `abandonworld`  
**Argumentos**: `[mundo]`  
**Permissão**: `griefdefender.admin.claim.command.abandon.world`  

Permite abandonar TODAS as reivindicações do usuário no mundo atual, a menos que especificado.  

___
#### `/gd ban`  
**Atalho**: `claimban`  
**Argumentos**: `hand | <type> <alvo/target> [mundo] [<mensagem>]`  
Nota: Os tipos válidos são `entidade`, `item`, `bloco`  
Nota: Target representa o identificador de `entidade, item, ou bloco`  
**Permissão**: `griefdefender.admin.claim.command.ban`  
**Exemplo**:  Para proibir o uso de pistão pegajoso no mundo chamado `valhalla` :  
`/gd ban block minecraft:sticky_piston valhalla "You are not allowed to use sticky pistons in this world."`  

Bane entidade, item, bloco ou item em mãos de todo uso.  

___
#### `/gd claim clear`
**Atalho**: `claimclear`  
**Argumentos**: `<alvo/target> [identificador]`  
**Permissão**: `griefdefender.admin.claim.command.clear`  
**Exemplo**: Para eliminar todos os suínos na reivindicação atual :  
`/gd claim clear minecraft:pig`  

Permite a compensação de entidades dentro de uma ou mais reivindicações em que você está, a menos que um [Identificadores de reivindicação](/br/wiki/basic/Claim-Management.html#identificadores-de-reivindicacao) seja especificado.

___
#### `/gd claim reserve`
**Atalho**: `claimreserve`  
**Argumentos**: `[nome]`  
**Permissão**: `griefdefender.admin.claim.command.reserve-name`  

Reserva um nome de declaração para uso do administrador.  
Nota: Não use argumentos para ver a lista atual de nomes reservados.

___
#### `/gd claim restore`
**Atalho**: `claimrestore, restoreclaim`  
**Permissão**: `griefdefender.admin.command.restore-claim.base`  
**Requer**: WorldEdit.  

Restaura a reivindicação de seu estado gerado pelo mundo natural. Use com cuidado.  
Nota: Isto não suporta mundos personalizados.

___
#### `/gd claim schematic`
**Atalho**: `claimschematic`  
**Argumentos**: `[<apply|create|delete> <nome>]`  
**Permissão**: `griefdefender.admin.claim.command.reserve-name`  

Gerencia esquemas de reivindicações. Use `/claimschematic create <nome>` para criar um backup ao vivo da reivindicação.  
Nota: Não use argumentos para iniciar a GUI esquemática.  

___
#### `/gd debug`
**Atalho**: `gddebug`  
**Argumentos**: `on|off|record|paste [filtro]`  
**Permissão**: `griefdefender.admin.claim.command.debug`  
**Exemplo**: Para registrar todas as ações de sinalização na reivindicação em que você está :  
`/gddebug record claim` e `/gddebug paste` para recuperar o link da depuração.  

Alterna o modo de depuração de declaração de administrador para registrar ações na declaração. Consulte [Depuração](/br/wiki/advanced/Debugging.html) para obter mais informações.  
Nota: Use o filtro `claim` para incluir apenas a depuração na reivindicação em que você está.

___
#### `/gd delete claim`
**Atalho**: `deleteclaim`    
**Argumentos**: `[identificador]`  
**Permissão**: `griefdefender.admin.claim.command.delete-claims`  

Exclui a reivindicação em que você está, mesmo que não seja sua reivindicação.  
Nota: Este comando não reembolsará a moeda do jogador nem lidará com a taxa de retorno de abandono. Use com cuidado nas reivindicações dos usuários!

___
#### `/gd delete all`
**Atalho**: `deleteall`  
**Argumentos**: `<jogador> [mundo]`  
**Permissão**: `griefdefender.admin.claim.command.delete-claims`  

Exclua todas as reivindicações de outro jogador.  
Nota: Este comando não reembolsará a moeda do jogador nem lidará com a taxa de retorno de abandono. Use com cuidado nas reivindicações dos usuários!

___
#### `/gd delete alladmin`
**Atalho**: `deletealladmin`  
**Argumentos**: `[mundo]`  
**Permissão**: `griefdefender.admin.claim.command.delete-claims`  

Exclui todas as reivindicações administrativas.

___
#### `/gd delete top`
**Atalho**: `deletetop`  
**Permissão**: `griefdefender.admin.claim.command.delete-claims`  

Exclui a reivindicação em que você está e todas as suas subdivisões, a menos que um [Identificadores de reivindicação](/br/wiki/basic/Claim-Management.html#identificadores-de-reivindicacao) seja especificado.  
Observação: se usado em uma reivindicação municipal, também incluirá todas as reivindicações básicas de crianças de propriedade do proprietário da cidade.

___
#### `/gd economy blocktransfer`
**Atalho**: `gdblocktransfer`  
**Permissão**: `griefdefender.admin.claim.command.block-transfer`  

Transfere TODOS os blocos de reivindicação de bônus/acumulados restantes do jogador para a moeda e, em seguida, define seus valores acumulados e de bônus como `0`.  
Observação: DEVE ser usado se você estiver mudando do sistema de bloqueio de reivindicações para o modelo econômico.  


___
#### `/gd mode admin`
**Atalho**: `ac, adminclaims, modeadmin`  
**Permissão**:   `griefdefender.admin.claim.command.admin-mode`  

Muda a ferramenta de modificação para o modo de reivindicações administrativas, que permite ao usuário criar reivindicações administrativas.

___
#### `/gd mode nature`
**Atalho**: `modenature`  
**Permissão**: `griefdefender.admin.command.restore-nature.base`  

Muda a ferramenta de modificação para o modo de restauração.  
Nota: Este comando não está disponível no momento.

___
#### `/gd player adjustbonusblocks`
**Atalho**: `adjustbonusblocks`  
**Argumentos**: `<jogador> <quantidade> [mundo]`  
**Permissão**: `griefdefender.admin.command.set-accrued-claim-blocks`  

Adiciona ou subtrai blocos de reivindicação de bônus para um jogador

___
#### `/gd player adjustbonusblocksall`
**Atalho**: `adjustbonusblocksall`  
**Argumentos**: `<quantidade>`  
**Permissão**: `griefdefender.admin.command.set-accrued-claim-blocks-all`  


Ajusta o total do bloco de reivindicação de bônus para todos os jogadores online pelo valor especificado.

___
#### `/gd player setaccruedblocks`
**Atalho**: `scb, setaccruedblocks`  
**Argumentos**: `<jogador> <quantidade> [mundo]`  
**Permissão**: `griefdefender.admin.command.set-accrued-claim-blocks`  

Atualiza o total de bloqueios de reivindicações acumuladas de um jogador.

___
#### `/gd permission group`
**Atalho**: `cpg`  
**Argumentos**: `<grupo> [<permission> <valor>]`  
**Permissão**: `griefdefender.admin.claim.command.permission-group`  
**Requer**: A fonte de comando que executa este comando deve ter a permissão especificada como arg.  

Define uma permissão em um grupo com um contexto de declaração.  
Observação: use esse comando quando quiser substituir as permissões de LP em uma declaração.

___
#### `/gd permission player`
**Atalho**: `cpp`  
**Argumentos**: `<jogador> [<permission> <valor>]`  
**Permissão**: `griefdefender.admin.claim.command.permission-player`  
**Requer**: A fonte de comando que executa este comando deve ter a permissão especificada como arg.  

Define uma permissão para um jogador com um contexto de reivindicação.  
Observação: use esse comando quando quiser substituir as permissões de LP em uma declaração.

___
#### `/gd reload`
**Atalho**: `gdreload`  
**Permissão**: `griefdefender.admin.command.reload`  

Recarrega as definições de configuração do GriefDefender.

___
#### `/gd schematic`  
**Atalho**: `claimschematic`  
**Argumentos**: `<create|delete> <nome>`  
**Permissão**: `griefdefender.admin.claim.command.schematic`  

Gerencia esquemas de reivindicações. Use `/claimschematic create <nome>` para criar um backup ao vivo da reivindicação. 

___
#### `/gd toggle ignore`
**Atalho**: `claimignore, ic, ignoreclaims, toggleclaimignore`  
**Permissão**: `griefdefender.admin.claim.command.ignore.base`  
**Permissões Adicionais**:  
    `griefdefender.admin.claim.command.ignore.admin` - Necessário para ignorar reivindicações do administrador.  
    `griefdefender.admin.claim.command.ignore.basic` - Necessário para ignorar reivindicações básicas.  
    `griefdefender.admin.claim.command.ignore.town` - Necessário para ignorar as reivindicações da cidade.  
    `griefdefender.admin.claim.command.ignore.wilderness` - Necessário para ignorar a região selvagem.  

Alterna o modo de ignorar reivindicações.

___
#### `/gd unban`  
**Atalho**: `claimunban`    
**Argumentos**: `hand | <type> <alvo/target>`  
Nota: Os tipos válidos são `entidade`, `item`, `bloco`  
Nota: Target representa o identificador de `entidade, item, ou bloco`  
**Permissão**: `griefdefender.admin.claim.command.ban`  
**Exemplo**:  Para desbanir o uso de pistão pegajoso no mundo atual :  
`/gd unban block minecraft:sticky_piston`  

Desbane entidade alvo, item, bloco ou item em mãos, permitindo que seja usado novamente. 


### Avançado

___
#### `/gd claimgroup player`
**Atalho**: `claimgroup`  
**Argumentos**: `join <grupo> [<identificador>]|unjoin [<identificador>]|create <grupo>|delete <grupo>`  
**Permissão**: `griefdefender.advanced.user.claim.command.player`  

Usado para gerenciar grupos de reivindicações de jogadores. Veja [Grupos de reivindicação](/br/wiki/basic/Claim-Management.html#grupos-de-reivindicacao) para mais informações.

___
#### `/gd snapshot`
**Atalho**: `claimsnapshot`  
**Argumentos**: `<apply|create|delete> <nome> [contextos]`  
**Permissão**: `griefdefender.advanced.user.claim.command.snapshot`  

Gerencia instantâneos de declaração usados para fazer backup/restaurar/substituir permissão, opção, confiança ou dados de declaração de uma declaração. Consulte [Reivindicar instantâneos](/wiki/basic/Claim-Management.html#claim-snapshots) para obter mais informações.


### Diversos

___
#### `/gd`

Lista informações detalhadas sobre cada comando.

___
#### `/gd help`
**Permissão**: `griefdefender.user.command.help`

Exibe a ajuda do comando GriefDefender.

___
#### `/gd version`
**Atalho**: `gdversion`  
**Permissão**: `griefdefender.user.command.version`  

Lista informações de GD, LP e versão da plataforma.
