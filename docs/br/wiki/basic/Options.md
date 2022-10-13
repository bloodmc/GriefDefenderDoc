---
title: Opções
tag: options
category: claim
icon: Options
---

As opções, também conhecidas como Meta, são uma maneira de configurar plugins usando contextos de jogador/grupo através do seu sistema de permissão, o que lhe dá o benefício de poder definir configurações diferentes para diferentes jogadores, grupos, mundos etc.

:warning: É ALTAMENTE recomendado aprender como o LP Meta funciona antes de continuar. Veja [LuckPerms - Prefixes, Suffixes & Meta](https://luckperms.net/wiki/Prefixes,-Suffixes-&-Meta#meta)


## Configuração  
Os valores padrão podem ser alterados em `options.conf`
Veja [Configuração de opções](/br/wiki/Configuration.html#opcoes)

## Comandos embutidos

As opções suportam o mesmo formato que as bandeiras

Reivindicação - `/claimoption <option> <value> [contexts]`  
Jogador - `/cop <player> <option> <value> [contexts]`  
Grupo - `/cog <group> <option> <value> [contexts]`  

### Contextos

Todas as opções podem usar um ou mais contextos quando aplicadas como meta em LuckPerms.
Veja [Contextos](/br/wiki/advanced/Contexts.html) sobre quais contextos você pode usar e como eles funcionam.

### Exemplos  

* Envie uma mensagem de boas-vindas aos jogadores que fizerem uma reivindicação como console. 
`/claimoption player-command-enter "/tellraw %player% [\"\",{\"text\":\"Bem-vindo %player%!\",\"color\":\"gold\"},{\"text\":\"\\nVocê está visitando a reivindicação do %owner%s.\\nAproveite sua estadia!\\n\\n-\"}]" run_for=member run_as=console`  
* Defina o `create-limit` do grupo vip como padrão de 100 para reivindicações básicas.
`/cog vip create-limit 100 default=basic`
* Defina a `expiration` do jogador JoeSmith como padrão de 30 dias para reivindicações básicas.
`/cop JoeSmith expiração 30 default=basic`
* Negue a fome do jogador ao reivindicar que o jogador está dentro.
`/claimoption player-deny-hunger true`

Nota: Se você receber uma mensagem informando que a opção não está habilitada, habilite-a em `option-control` em `options.conf`. Veja [Controle de opções](Options.html#comandos-embutidos)
Nota: O uso de `/claimoption` sem argumentos abre a Interface e exibe todas as opções de reivindicação para a reivindicação em que você está, incluindo opções padrão que afetam todas as reivindicações.

## LuckPerms

`/lp user/group <user|group> meta set <option> <value> [contexts]`

Ex1. Definir limite de reivindicação básico de 50 para um grupo chamado `vip`  
`/lp group vip meta set griefdefender.create-limit 50 gd_claim_default=basic server=global`

Ex1. Definir limite de reivindicação básico de 50 para um grupo chamado `vip` no servidor mc01 
`/lp group vip meta set griefdefender.create-limit 50 gd_claim_default=basic server=mc01`

Redefinir todos os blocos de reivindicação acumulados pelos jogadores 
`/lp bulkupdate users delete "permission ~~ meta.griefdefender\\.accrued-blocks.%"`

Redefinir todos os blocos de reivindicação de bônus dos jogadores
`/lp bulkupdate users delete "permission ~~ meta.griefdefender\\.bonus-blocks.%"`  

### Consultas úteis de banco de dados LP
Nota: Altere o prefixo da tabela se não estiver usando o padrão `luckperms`


Listar todos os blocos acumulados pelo usuário
```sql
SELECT B.username, REGEXP_REPLACE(A.permission, '[^0-9]+', '') FROM luckperms_user_permissions A LEFT JOIN luckperms_players B ON A.uuid=B.uuid WHERE permission LIKE '%accrued-blocks%'
```


Listar todos os blocos de bônus do usuário
```sql
SELECT B.username, REGEXP_REPLACE(A.permission, '[^0-9]+', '') FROM luckperms_user_permissions A LEFT JOIN luckperms_players B ON A.uuid=B.uuid WHERE permission LIKE '%bonus-blocks%'
```


Redefinir TODOS os blocos acumulados pelo usuário
:warning:  Isso limpará TODOS os dados de bloco acumulados pelo usuário. Use com cuidado.

```sql
DELETE FROM luckperms_user_permissions WHERE permission LIKE '%griefdefender\\\\.accrued-blocks%';
```


Redefinir TODOS os blocos de bônus do usuário 
:warning:  Isso limpará TODOS os dados do bloco de bônus do usuário. Use com cuidado.

```sql
DELETE FROM luckperms_user_permissions WHERE permission LIKE '%griefdefender\\\\.bonus-blocks%';
```


Consulte https://luckperms.net/wiki/Prefixes,-Suffixes-&-Meta e https://luckperms.net/wiki/Meta-Commands para obter mais informações sobre como usá-lo diretamente no LuckPerms

## Opções globais

As opções globais podem ser definidas globalmente ou em um servidor, mundo, grupo ou jogador.
Eles não podem ser definidos em reivindicações individuais ou tipos de reivindicações.

O uso de opções globais em comandos GD e GUI pode ser gerenciado com permissão `griefdefender.admin.claim.option.global.<optionname>`.  
Nota: Deixe de fora `griefdefender.` de `<optionname>`.

Para usar as opções GD em comandos LP, use o formato de meta-chave`griefdefender.<optionname>`  

Opção                                           | Valor padrão | Descrição | 
-------------------------------------------------|---------------|--------------|
```griefdefender.abandon-return-ratio```       |   1.0         | A porção de blocos de reivinidcação devolvida a um jogador quando uma reivinidcação é abandonada. Nota: Ao usar o Modelo Econômico, esta é a proporção de fundos devolvidos ao abandonar uma reivinidcação.
```griefdefender.accrued-blocks```       |   0        | O número total de blocos de reivindicação acumulados por um jogador. <br />Nota: Isso não conta para blocos de bônus e não tem uso/efeito sendo definido em um grupo.
```griefdefender.blocks-accrued-per-hour```    |   120         | Blocos ganhos por hora. Por padrão, cada jogador 'ativo' deve receber 6 blocos a cada 5 minutos. Nota: O jogador deve ter movido pelo menos 3 blocos desde a última verificação. Se estiver usando 'wilderness-cuboids', esse valor é 30720 por padrão com 1536 blocos a cada 5 minutos para os jogadores. A configuração mínima é 12 devido ao intervalo de verificação de 5 minutos, configurá-lo para baixo resultará em nenhum acúmulo de blocos.
```griefdefender.bonus-blocks```       |   0        | O número total de blocos de reivindicação de bônus dados a um jogador e não tem uso/efeito sendo definido em um grupo.
```griefdefender.chest-expiration```     |   7           | Número de dias de inatividade antes que uma reivindicação automática de baús seja excluída.
```griefdefender.economy-block-cost``` | 0,0 | O valor da economia a cobrar por bloco de uma reivindicação. <br />Nota: Se definido como 0 ou menos, o recurso de compra de blocos será desabilitado.
```griefdefender.economy-block-sell-return``` | 0.0 | O valor de retorno para vender blocos de reivindicação. <br />Nota: Se definido como 0 ou menos, o recurso de venda de blocos será desativado.
```griefdefender.expiration```    |   14          | Número de dias de inatividade antes que uma reivindicação seja excluída.<br />Observação: Se definido como 0, desabilitará a expiração da reivindicação para o usuário/grupo.
```griefdefender.initial-blocks```       |   120         | O número de blocos de reivindicação inicial de bônus que um jogador possui inicialmente. <br />Nota: Este número não é contado como parte dos blocos acumulados. <br />Nota: Se estiver usando 'wilderness-cuboids', este valor é 25600 por padrão.
```griefdefender.max-accrued-blocks```   |   80000       | O limite de blocos acumulados (ao longo do tempo). não limita blocos comprados ou concedidos por administradores. <br />Nota: Se estiver usando 'wilderness-cuboids', este valor é 20480000 por padrão. <br />Nota: Esta configuração afetará o comando `/scb`.
```griefdefender.max-bonus-blocks```   |   -1      | A quantidade máxima de blocos de bônus que um jogador pode obter. <br />Nota: Defina como -1 ou menos para tornar ilimitado. <br />Nota: Esta configuração afetará os comandos `/acb` e `/buyclaimblocks`, use com cuidado.
```griefdefender.radius-inspect``` | 100 | O raio em quarteirões usado para pesquisar reivindicações próximas durante a inspeção.

## Opções de reivindicação

CLaim As opções podem ser definidas em reivindicações individuais, tipos de reivindicações, servidor, mundo, grupo ou jogador.

O uso de opções globais em comandos GD e GUI pode ser gerenciado com permissão `griefdefender.admin.claim.option.<optionname>`.
Nota: Deixe de fora `griefdefender.` de `<optionname>`.

Para usar as opções GD em comandos LP, use o formato de meta-chave `griefdefender.<optionname>`  

Opção                                           | Valor padrão | Descrição | 
-------------------------------------------------|---------------|--------------|
```griefdefender.abandon-delay```  | 0 | O número de dias de atraso antes de permitir que um jogador abandone uma reivindicação recém-criada.
```griefdefender.create-mode```    | area | O modo de reivindicação padrão definido para jogadores no login. (area = 2D, volume = 3D)
```griefdefender.create-limit```         |   -1           | Número máximo de reivindicação por jogador. (-1 = ilimitado)
```griefdefender.min-level```<br>```griefdefender.max-level```    |   0/255          | O nível mínimo/máximo em que uma reivindicação pode ser criada.
```griefdefender.min-size-x```<br>```griefdefender.max-size-x```    |   10/5000          | O tamanho mínimo/máximo em blocos que o eixo x pode ter.
```griefdefender.min-size-y```<br>```griefdefender.max-size-y```    |   5/256          | O tamanho mínimo/máximo em blocos que o eixo y pode ter.
```griefdefender.min-size-z```<br>```griefdefender.max-size-z```    |   10/5000          | O tamanho mínimo/máximo em blocos que o eixo z pode ter.
```griefdefender.player-command-enter``` | undefined | Usado para executar um comando na reivindicação enter com contextos específicos. Aceita os seguintes espaços reservados : %player%, %owner%, %uuid%, %world%, %server%, %location%
```griefdefender.player-command-exit``` | undefined | Usado para executar um comando na saída de reivindicação com contextos específicos. Aceita os seguintes espaços reservados : %player%, %owner%, %uuid%, %world%, %server%, %location%
```griefdefender.player-deny-flight``` | false | Usado para determinar se um jogador não pode voar em uma reivindicação. Nota: Isso não dá aos jogadores a habilidade de voar, apenas remove a habilidade se definida. Isso fornece a maior compatibilidade com plugins.
```griefdefender.player-weather``` | undefined | Usado para definir o clima de um jogador em uma reivindicação. Os tipos suportados são claros e chuvosos.
```griefdefender.pvp``` | undefined | Usado para determinar se os jogadores podem lutar entre si.
```griefdefender.pvp-combat-command``` | false | Usado para determinar se um jogador pode usar comandos durante o combate PvP.
```griefdefender.pvp-combat-teleport``` | false | Usado para determinar se um jogador pode se teletransportar durante o combate PvP.
```griefdefender.pvp-combat-timeout``` | 15 | Usado para determinar quantos segundos o combate PvP deve continuar após o dano mais recente.
```griefdefender.rent-restore``` | false | Usado para determinar se um proprietário de aluguel tem permissão para ter sua reivindicação restaurada automaticamente na data de término do aluguel.<br />Observação: Isso exige que a reivindicação de aluguel tenha uma data de término.
```griefdefender.tax-expiration``` | 7		| Número de dias após o não pagamento de impostos antes que uma reivindicação seja congelada.
```griefdefender.tax-expiration-days-keep``` | 7 		| Número de dias para manter uma reivindicação depois de congelada e antes de ser excluída
```griefdefender.tax-rate``` | 0.1 | O imposto é calculado pelo número de blocos de reivindicação na reivindicação. ```Número de blocos de reivindicação * tax-rate```

## Opções de administrador

As opções de administração podem ser definidas em reivindicações individuais, tipos de reivindicações, servidor, mundo, grupo ou jogador.

O uso de opções globais em comandos GD e GUI pode ser gerenciado com permissão `griefdefender.admin.claim.option.admin.<optionname>`.
Nota: Deixe de fora `griefdefender.` de `<optionname>`.

To use GD options in LP commands, use the meta key format `griefdefender.<optionname>`  

Opção                                           | Valor padrão | Descrição | 
-------------------------------------------------|---------------|--------------|
```griefdefender.player-deny-godmode``` | false | Usado para determinar se um jogador pode estar no modo deus dentro de uma reivindicação. Nota: Isso não dá aos jogadores a habilidade de estar no Godmode, apenas remove a habilidade se definida. Isso fornece a maior compatibilidade com plugins.
```griefdefender.player-deny-hunger``` | false | Usado se a fome de um jogador for negada em uma reivindicação.
```griefdefender.player-gamemode``` | undefined | Usado para determinar o modo de jogo de um jogador em uma reivindicação. Aceita o seguinte valors : ADVENTURE, CREATIVE, SURVIVAL, SPECTATOR, UNDEFINED.
```griefdefender.player-health-regen``` | 0.0 | Usado para definir a quantidade de regeneração de saúde para um jogador em uma reivindicação. Nota: Se o jogador estiver com a saúde máxima, isso não terá efeito.
```griefdefender.player-item-drop-lock``` | false | Usado para determinar se os itens dropados de um jogador devem ser impedidos de pegar por outros jogadores após a morte.
```griefdefender.player-keep-inventory``` | undefined | Usado para determinar se um jogador pode manter o inventário após a morte em uma reivindicação.
```griefdefender.player-keep-level``` | undefined | Usado para determinar se um jogador pode manter seu nível após a morte em uma reivindicação.
```griefdefender.player-teleport-cost``` | undefined | Usado para determinar o custo de teletransportar um jogador para um novo local.
```griefdefender.player-teleport-delay``` | 0.0 | Usado para determinar o atraso, em segundos, antes de teletransportar um jogador para um novo local.
```griefdefender.player-walk-speed``` | -1.0 | Usado para definir a velocidade de caminhada de um jogador em uma reivindicação. Nota: (-1 = undefined)
```griefdefender.spawn-limit``` | 0 | O limite de geração de entidade que uma reivindicação pode ter.
