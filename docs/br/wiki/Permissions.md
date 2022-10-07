---
title: Permissões
tag: Info
category: info
icon: node-tree
---

Conceda ```griefdefender.user.*``` para seus jogadores e também ```griefdefender.user.*``` e ```griefdefender.admin.*```para sua equipe/administradores, então negue as permissões que você NÃO deseja dar a eles.

### IMPORTANTE
:warning:  

Se você NÃO conceder os nodes de permissão acima e, em vez disso, conceder nodes de permissão únicos, você não terá suporte, pois isso vai contra nossa recomendação.
Se você alterar qualquer permissão de administrador durante o jogo, certifique-se de executar `/gdreload`, pois o GD armazena em cache várias permissões para ter ganhos de desempenho.
Permissão suprema ```*``` atualmente não é suportado. Use ```griefdefender.user.*``` e ```griefdefender.admin.*``` para os administradores. 
 
Como o GD faz uso intenso do grupo `default` do LP, o seguinte DEVE ser configurado corretamente ou o GD não funcionará corretamente

- Todos os grupos de LP não-griefdefender têm um caminho de herdado para o grupo `default`  
- O `default` grupo está herdando os grupos fornecidos pelo GD : `griefdefender_claim, griefdefender_default, griefdefender_definition, griefdefender_option, griefdefender_override`
- O `default` grupo NÃO está desabilitado. LP recomenda nunca desabilitar este grupo.  
Veja https://luckperms.net/wiki/Default-Groups  

## LuckPerms

Na primeira inicialização do servidor do GriefDefender, 5 grupos no LP serão criados automaticamente se ainda não existirem.

* `griefdefender_claim` - Armazena todas as permissões de bandeiras aplicadas a reivindicações únicas por meio do comando `/cf`.  
ex. Executando o comando `/cf block-place minecraft:wool true` teria a permissão armazenada neste grupo.  
Nota: Isso não armazena permissões feitas por meio da GUI de predefinição de bandeiras. 
* `griefdefender_default` - Armazena todas as permissões de bandeiras que contêm `gd_claim_default` contextos via o comando `/cf`. 
ex. Executando o comando `/cf block-place minecraft:wool true default=user` teria a permissão armazenada neste grupo.  
Nota: Isso não armazena permissões feitas por meio da GUI de predefinição de bandeiras.
* `griefdefender_definition` - Armazena todas as permissões de definição de bandeiras aplicadas via `/cf` GUI.
Nota: Isso não armazena permissões feitas por meio do Bandeira GUI avançada. 
* `griefdefender_option` - Armazena todas as meta permissões de opção aplicadas por meio de comando ou GUI.
* `griefdefender_override` - Armazena todas as permissões de bandeiras que contêm `gd_claim_override` contexto.  

### Consultas úteis de banco de dados MySQL

:warning: Substitua `minecraft` com o nome do banco de dados LuckPerms e `griefdefender` com nome de banco de dados GD

#### Selecione todas as permissões de reivindicação do administrador

```sql
SELECT A.* FROM minecraft.luckperms_group_permissions A, griefdefender.gd_claim_data B WHERE A.contexts LIKE CONCAT('%', BIN_TO_UUID(B.claim_uuid), '%') AND B.claim_type = 'admin'
UNION
SELECT * FROM minecraft.luckperms_group_permissions WHERE contexts LIKE CONCAT('%gd_claim_default":"admin"%')
```

#### Selecione todas as permissões de reivindicação do usuário

```sql
SELECT A.* FROM minecraft.luckperms_group_permissions A, griefdefender.gd_claim_data B WHERE A.contexts LIKE CONCAT('%', BIN_TO_UUID(B.claim_uuid), '%') AND B.claim_type <> 'admin'
UNION
SELECT * FROM minecraft.luckperms_group_permissions WHERE contexts LIKE CONCAT('%gd_claim_default":"basic"%') OR contexts LIKE CONCAT('%gd_claim_default":"user"%') 
```

#### Excluir todas as permissões de reivindicação do usuário

:warning: Faça backup do banco de dados LuckPerms antes de executar estas exclusões. VOCE FOI AVISADO! :warning:

```sql
DELETE FROM minecraft.luckperms_group_permissions A, griefdefender.gd_claim_data B WHERE A.contexts LIKE CONCAT('%', BIN_TO_UUID(B.claim_uuid), '%') AND B.claim_type <> 'admin'
DELETE FROM minecraft.luckperms_group_permissions WHERE contexts LIKE CONCAT('%gd_claim_default":"basic"%') OR contexts LIKE CONCAT('%gd_claim_default":"user"%') 
```


# Permissões do usuário

## Reivindicações
| Node da permissão | Descrição |
| --------- | ----------- |
| griefdefender.user.claim.command.abandon.basic | Permite abandonar reivindicações básicas |
| griefdefender.user.claim.command.abandon.town | Permite abandonar as reivindicações da cidade |
| griefdefender.user.claim.command.abandon-all | Permite abandonar todas as reivindicações |
| griefdefender.user.claim.command.abandon-top-level  | Permite abandonar uma reivindicação e todas as suas subdivisões |
| griefdefender.user.claim.command.basic-mode  | Permite usar o modo de escavadeira de reivindicação básica |
| griefdefender.user.claim.command.bank | Permite usar o banco de reclamações |
| griefdefender.user.claim.command.buy | Permite comprar uma reivindicação (requer plugin de economia) |
| griefdefender.user.claim.command.buy-blocks | Permite comprar blocos de reivindicação (requer plugin de economia) |
| griefdefender.user.claim.command.claim.tax | Permite consultar/pagar saldo de impostos |
| griefdefender.user.claim.command.contract | Permite reduzir/encolher a reivindicação em uma direção |
| griefdefender.user.claim.command.cuboid | Permite alternar o modo de reivindicações cubóides |
| griefdefender.user.claim.command.expand | Permite expandir uma reivindicação em uma direção |
| griefdefender.user.claim.command.farewell | Permite definir uma despedida de reivindicação |
| griefdefender.user.claim.command.give.blocks | Permite dar blocos de reivindicação a outro jogador |
| griefdefender.user.claim.command.give.pet | Permite que um jogador doe um animal de estimação que domou |
| griefdefender.user.claim.command.greeting | Permite definir uma saudação de reivindicação |
| griefdefender.user.claim.command.info.others | Permite obter informações sobre outras reivindicações |
| griefdefender.user.claim.command.info.base | Permite obter informações sobre a reivindicação |
| griefdefender.user.claim.command.info.teleport.others | Permite que um usuário use o recurso de teletransporte em informações de reivindicação em outras reivindicações |
| griefdefender.user.claim.command.info.teleport.base | Permite que um usuário use o recurso de teletransporte em Claiminfo |
| griefdefender.user.claim.command.inherit | Permite alternar se a reivindicação deve herdar permissões da principal |
| griefdefender.user.claim.command.list.base | Permite listar suas reivindicações |
| griefdefender.user.claim.command.list.others | Permite listar reivindicações de outros jogadores |
| griefdefender.user.claim.command.list-flags | Permite listar bandeiras de reivindicação |
| griefdefender.user.claim.command.name | Permite definir um nome de reivindicação (claimname) |
| griefdefender.user.claim.command.sell | Permite vender uma reivindicação (requer plugin de economia) |
| griefdefender.user.claim.command.sell-blocks | Permite vender blocos de reivindicação (requer plugin de economia) |
| griefdefender.user.claim.command.set-spawn | Permite definir o spawn da reivindicações |
| griefdefender.user.claim.command.spawn | Permite usar o spawn da reivindicações |
| griefdefender.user.claim.command.subdivide-mode | Permite usar o modo de subdivisão |
| griefdefender.user.claim.command.town-mode | Permite usar o modo cidade |
| griefdefender.user.claim.command.transfer  | Permite transferir reivindicações próprias para outros jogadores |
| griefdefender.user.claim.command.trapped | Teletransporte o jogador para um local seguro se estiver preso e incapaz de construir |
| griefdefender.user.claim.command.unlock-drops | Permite que outros jogadores peguem qualquer item caído da morte |
| griefdefender.user.claim.command.worldedit-claim | Permite usar uma seleção worldedit para criar uma reivindicação. |
| griefdefender.user.claim.create.base  | Permite criar uma reivindicação básica |
| griefdefender.user.claim.create.basic | Permite criar/redimensionar uma reivindicação básicas |
| griefdefender.user.claim.create.subdivision | Permite criar/redimensionar uma subdivisão |
| griefdefender.user.claim.create.town | Permite criar/redimensionar uma cidade |
| griefdefender.user.claim.create.cuboid.basic | Permite criar/redimensionar reivindicações básicas no modo 3D |
| griefdefender.user.claim.create.cuboid.subdivision | Permite criar/redimensionar as subdivisão no modo 3D |
| griefdefender.user.claim.create.cuboid.town | Permite criar/redimensionar as cidade no modo 3D |
| griefdefender.user.claim.resize | Permite redimensionar reivindicações |
| griefdefender.user.claim.show-tutorial | Permite ver o texto do tutorial de declaração ao criar/redimensionar declarações |
| griefdefender.user.claim.list.other | Permite listar reivindicações de outros jogadores |
| griefdefender.user.claim.visualize.base | Permite que o jogador visualize suas reivindicações |
| griefdefender.user.claim.visualize.nearby | Permite que o jogador visualize reivindicações próximas |
| griefdefender.user.command.info.base | Permite ver informações sobre si mesmo |
| griefdefender.user.command.info.others | Permite ver informações sobre outro jogador |
| griefdefender.user.command.version | Permite ver informações sobre a versões do GD, servidor e LP |
| griefdefender.user.town.command.bank |  |
| griefdefender.user.town.command.info.base | Permite ver informações sobre a cidade |
| griefdefender.user.town.command.info.others | Permite ver informações sobre outras reivindicações da cidade |
| griefdefender.user.town.command.name | Permite definir um nome para a cidade (claimname) |
| griefdefender.user.town.command.tag | Permite definir a tag da sua cidade |
| griefdefender.user.town.command.tax |  |

## Bandeiras
| Permission Node | Description |
| --------- | ----------- |
| griefdefender.admin.claim.command.flag.arg | Permite usar o comando Claimflag com argumentos de linha de comando |
| griefdefender.user.claim.command.flag.base | Permite usar o comando Claimflag |
| griefdefender.user.claim.command.flag.gui | Permite usar a GUI do comando Claimflag |
| griefdefender.user.claim.command.flag.debug | Permite alternar o modo de depuração do sinalizador de reivindicação |
| griefdefender.user.claim.command.flag.player | Allows to use the claimflag for players command |
| griefdefender.user.claim.command.flag.group | Allows to use the claimflag for groups command |
| griefdefender.user.claim.command.flag.reset | Allows to use the claimreset command |
| griefdefender.user.claim.flag | Base permission used to check if user has access to use a specific core flag. <br />The format is `griefdefender.user.claim.flag.<flag_name>`.<br />Note: This is checked when accessing the flag ADVANCED GUI section and when using the flag command with arguments.<br />Note: The flag name is not to be confused with a definition flag name. This checks for GD's core flags. The list can be found [here](https://github.com/bloodmc/GriefDefender/wiki/Flags#available-flags) |

## Flag Definitions
| Permission Node | Description |
| --------- | ----------- |
| griefdefender.admin.custom.flag | Base permission used to check if user has access to a specific admin flag definition. <br />The format is   `griefdefender.admin.custom.flag.<preset>.<group>.<definition_flag_name>`. <br />Note: By default, this manages the delivered admin group which is mapped to the ADMIN tab. |
| griefdefender.user.custom.flag | Base permission used to check if user has access to a specific user flag definition. <br />The format is   `griefdefender.user.custom.flag.<preset>.<group>.<definition_flag_name>`. <br />Note: By default, this manages the delivered user group which is mapped to the USER tab.|

_*See [Flag Definitions GUI](https://github.com/bloodmc/GriefDefender/wiki/Flag-Definitions-GUI) for information on how to manage the flag GUI for both users and admins._

## Opções
| Node de permissão | Descrição |
| --------- | ----------- |
| griefdefender.admin.claim.command.option.base | Allows to use the claimoption command |
| griefdefender.admin.claim.command.option.group | Allows to set group options in claims |
| griefdefender.admin.claim.command.option.player | Allows to set player options in claims |
| griefdefender.admin.claim.option | Allows to set options in claims |
| griefdefender.admin.option.perk.fly.owner | Allows owners to fly in their own claim |
| griefdefender.admin.option.perk.fly.accessor | Allows users to fly in claims where they have accessor trust |
| griefdefender.admin.option.perk.fly.builder | Allows users to fly in claims where they have builder trust |
| griefdefender.admin.option.perk.fly.container | Allows users to fly in claims where they have container trust |
| griefdefender.admin.option.perk.fly.manager | Allows users to fly in claims where they have manager trust |

## Trust
| Permission Node | Description |
| --------- | ----------- |
| griefdefender.user.claim.command.trust.group | Allows to grant group trust |
| griefdefender.user.claim.command.trust.player | Allows to grant player trust |
| griefdefender.user.claim.command.trust.list | Allows to list trusted players |
| griefdefender.user.claim.command.trustall.group | Allows to grant group trust to all claims|
| griefdefender.user.claim.command.trustall.player | Allows to grant player trust to all claims |
| griefdefender.user.claim.command.untrust.group | Allows to revoke group trust |
| griefdefender.user.claim.command.untrust.player | Allows to revoke player trust |
| griefdefender.user.claim.command.untrustall.group | Allows to revoke group trust to all claims|
| griefdefender.user.claim.command.untrustall.player | Allows to revoke player trust to all claims |
| griefdefender.user.claim.trust.accessor | Allows to add accessors |
| griefdefender.user.claim.trust.container | Allows to add containers |
| griefdefender.user.claim.trust.builder | Allows to add builders |
| griefdefender.user.claim.trust.manager | Allows to add managers |
| griefdefender.user.claim.trust.remove | Allows to untrust players |

# Admin Permissions

| Permission Node | Description |
| --------- | ----------- |
| griefdefender.advanced.admin.flags | Allows usage of advanced mode in flag GUI |
| griefdefender.admin.bypass.ban | Allows bypass of bans |
| griefdefender.admin.bypass.border-check | Allows bypass of claim border checks |
| griefdefender.admin.bypass.option | Allows bypass of options |
| griefdefender.admin.bypass.override.resize | Allows bypass of claim resize restrictions |
| griefdefender.admin.bypass.override.limit | Allows bypass of claim creation limit restrictions |
| griefdefender.admin.claim.command.adjust-claim-blocks | Allows to edit amount of bonus claim blocks |
| griefdefender.admin.claim.command.admin-mode | Allows to use admin claim shovel mode |
| griefdefender.admin.claim.command.ban | Allows to ban or unban an item, block, or entity id from all usage |
| griefdefender.admin.claim.command.clear | Allows to clear entities within one or more claims |
| griefdefender.admin.claim.command.schematic | Allows to manage claim schematics |
| griefdefender.admin.claim.command.debug | Allows to use GDdebug |
| griefdefender.admin.claim.command.delete.base | Allows to use the deleteclaim command |
| griefdefender.admin.claim.command.delete.basic | Allows to delete basic claims |
| griefdefender.admin.claim.command.delete.admin | Allows to delete admin claims |
| griefdefender.admin.claim.command.delete-claims | Allows to delete all of another player's claims |
| griefdefender.admin.claim.command.ignore.base | Allows to use the ignore claims command |
| griefdefender.admin.claim.command.ignore.basic | Allows to ignore basic claim flags |
| griefdefender.admin.claim.command.ignore.admin | Allows to ignore admin claim flags |
| griefdefender.admin.claim.command.ignore.town | Allows to ignore town claim flags |
| griefdefender.admin.claim.command.ignore.wilderness | Allows to ignore wilderness claim flags |
| griefdefender.admin.claim.command.permission-group | Allows to use the claim command for group permissions |
| griefdefender.admin.claim.command.permission-player | Allows to use the claim command for player permissions |
| griefdefender.admin.claim.command.reserve-name | Allows to reserve claim names |
| griefdefender.admin.claim.cuboid | Allows to create/resize admin claims in 3D mode |
| griefdefender.admin.claim.list.admin | Allows to list admin claims |
| griefdefender.admin.claim.option.global | Allows to manage global options |
| griefdefender.admin.claim.resize | Allows to resize claims |
| griefdefender.admin.claim.resize.admin | Allows to resize admin claims |
| griefdefender.admin.claim.resize.admin.subdivision | Allows to resize admin claim subdivisions |
| griefdefender.admin.claim.resize.basic | Allows to resize basic claims |
| griefdefender.admin.claim.resize.basic.subdivision | Allows to resize basic claim subdivisions |
| griefdefender.admin.claim.resize.town | Allows to resize town claims |
| griefdefender.admin.claim.set-admin-flags | Allows to edit flags in an admin claim |
| griefdefender.admin.claim.use-reserved-names | Allows to use reserved claim names |
| griefdefender.admin.claim.wilderness | Allows to edit wilderness claims |
| griefdefender.admin.command.delete-admin-claims | Allows to delete all admin claims |
| griefdefender.admin.command.reload | Allows to reload GP |
| griefdefender.admin.command.restore-claim.base | Allows to restore claim to its natural state |
| griefdefender.admin.command.restore-nature.base | Allows to switch shovel tool to restoration mode. |
| griefdefender.admin.command.restore-nature.aggressive |  |
| griefdefender.admin.command.restore-nature.fill |  |
| griefdefender.admin.command.set-accrued-claim-blocks | Allows to edit amount of accrued claim blocks |
| griefdefender.admin.custom.flag | Allows to use advanced claim flags in GUI |
| griefdefender.admin.flag-defaults | Allows to edit flag defaults |
| griefdefender.admin.flag-overrides | Allows to edit flag overrides |

## Options
| Permission Node | Description |
| --------- | ----------- |
| griefdefender.admin.claim.command.option.group.base | Allows to set group options in claims |
| griefdefender.admin.claim.command.option.player.base | Allows to set player options in claims |

# Misc
| Permission Node | Description |
| --------- | ----------- |
| griefdefender.user.command.help | Allows to you the view the help |
| griefdefender.user.chat.capture | Allows to record chat in command GUI's |
| griefdefender.login.inventory-gui | Sets user or group to use the Inventory GUI on login |