---
title: Permissões
tag: Info
category: info
icon: node-tree
---

Conceda ```griefdefender.user.*``` para seus jogadores e também ```griefdefender.user.*``` e ```griefdefender.admin.*```para sua equipe/administradores, então negue as permissões que você NÃO deseja dar a eles.

### IMPORTANTE
:::: warning Aviso
Se você NÃO conceder os nodes de permissão acima e, em vez disso, conceder nodes de permissão únicos, você não terá suporte, pois isso vai contra nossa recomendação.
::::
Se você alterar qualquer permissão de administrador durante o jogo, certifique-se de executar `/gdreload`, pois o GD armazena em cache várias permissões para ter ganhos de desempenho.
Permissão suprema ```*``` atualmente não é suportado.  
Use ```griefdefender.user.*``` e ```griefdefender.admin.*``` para os administradores. 
 
Como o GriefDefender faz uso intenso do grupo `default` do LuckPerms, o seguinte DEVE ser configurado corretamente ou o GD não funcionará corretamente

- Todos os grupos do LP não-griefdefender têm um caminho que herdam para o grupo `default`  
- O grupo `default` está herdando os grupos fornecidos pelo GD : `griefdefender_claim` `griefdefender_claim_group` `griefdefender_default` `griefdefender_definition` `griefdefender_option` `griefdefender_override`
- O grupo `default` NUNCA deve está desabilitado. LP recomenda nunca desabilitar este grupo.  
Veja [LuckPerms - Default Groups](https://luckperms.net/wiki/Default-Groups)  

## LuckPerms

::: tip Para grandes Networks
Se você gerencia uma grande rede de servidores minecraft e está usando um banco de dados Luckperms centralizado, certifique-se de seguir [Luckperms - Syncing data between servers](https://luckperms.net/wiki/Syncing-data-between-servers) se quiser que as atualizações do Luckperms sejam sincronizadas em todos os servidores instantaneamente.
:::

Na primeira inicialização do servidor do GriefDefender, 5 grupos no LP serão criados automaticamente se ainda não existirem.

* `griefdefender_claim` - Armazena todas as permissões de sinalização aplicadas a declarações únicas por meio do comando `/cf`.  
ex. A execução do comando `/cf block-place minecraft:wool true` teria a permissão armazenada neste grupo.  
Nota: Isso não armazena permissões feitas por meio da Interface de predefinição de bandeira.  
* `griefdefender_default` - Armazena todas as permissões de sinalização que contêm contextos `gd_claim_default` por meio do comando `/cf`.  
ex. A execução do comando `/cf block-place minecraft:wool true default=user` teria a permissão armazenada neste grupo.  
Nota: Isso não armazena permissões feitas por meio da Interface de predefinição de bandeira.  
* `griefdefender_definition` - Armazena todas as permissões de definição de sinalizador aplicadas por meio da Interfac3 `/cf`.
Nota: Isso não armazena permissões feitas por meio da GUI avançada do sinalizador.  
* `griefdefender_option` - Armazena todas as meta permissões de opção aplicadas via comando ou Interface.  
* `griefdefender_override` - Armazena todas as permissões de sinalização que contêm o contexto `gd_claim_override`.  

* `griefdefender_claim_group` - Armazena todas as permissões de sinalização aplicadas a reivindicações de grupo por meio do comando `/cf`.  
* `griefdefender_trust_resident` - Armazena todas as permissões de trust que têm resident.  
* `griefdefender_trust_accessor` - Armazena todas as permissões de trust que têm accessor.  
* `griefdefender_trust_builder` - Armazena todas as permissões de trust que têm builder.  
* `griefdefender_trust_container` - Armazena todas as permissões de trust que têm container.  
* `griefdefender_trust_manager` - Armazena todas as permissões de trust que têm manager.  

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

:::: warning Aviso
Faça backup do banco de dados LuckPerms antes de executar estas exclusões.  
VOCE FOI AVISADO!
::::

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
| griefdefender.user.claim.command.bank | Permite usar o banco de reivindicação |
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
| griefdefender.user.claim.command.flag.debug | Permite alternar o modo de depuração do bandeira de reivindicação |
| griefdefender.user.claim.command.flag.player | Permite usar o comando Claimflag para jogadores |
| griefdefender.user.claim.command.flag.group | Permite usar o comando Claimflag para grupos |
| griefdefender.user.claim.command.flag.reset | Permite usar o comando Claimreset |
| griefdefender.user.claim.flag | Permissão base usada para verificar se o usuário tem acesso para usar um bandeira de núcleo específico. <br />O formato é `griefdefender.user.claim.flag.<flag_name>`.<br />Observação: Isso é verificado ao acessar a seção GUI ADVANCED do bandeira e ao usar o comando bandeira com argumentos.<br />Observação: O nome do bandeira não deve ser confundido com o nome do bandeira de definição. Isso verifica os principais bandeiras do GD. A lista pode ser encontrada [aqui](/br/wiki/advanced/Flags.html#bandeiras-disponiveis) |

## Definições de Bandeiras
| Node de permissão | Descrição |
| --------- | ----------- |
| griefdefender.admin.custom.flag | Permissão base usada para verificar se o usuário tem acesso a uma definição de bandeira de administrador específica. <br />O formato é   `griefdefender.admin.custom.flag.<preset>.<group>.<definition_flag_name>`. <br />Nota: Por padrão, isso gerencia o grupo de administração entregue que é mapeado para a guia ADMIN. |
| griefdefender.user.custom.flag | Permissão base usada para verificar se o usuário tem acesso a uma definição de bandeira de usuário específica. <br />O formato é   `griefdefender.user.custom.flag.<preset>.<group>.<definition_flag_name>`. <br />Nota: Por padrão, isso gerencia o grupo de usuários entregue que é mapeado para a guia USUÁRIO.|

_*Veja [Interface de definições de bandeiras](/br/wiki/basic/Flag-Definitions-GUI.html) para obter informações sobre como gerenciar a Interface do Bandeiras para Jogadores e administradores._

## Opções
| Node de permissão | Descrição |
| --------- | ----------- |
| griefdefender.admin.claim.command.option.base | Permite usar o comando Claimoption |
| griefdefender.admin.claim.command.option.group | Permite definir opções de grupo em reivindicações (Claimgroup) |
| griefdefender.admin.claim.command.option.player | Apermite definir opções do jogador em reivindicações |
| griefdefender.admin.claim.option | Permite definir opções nas reivindicações |
| griefdefender.admin.option.perk.fly.owner | Permite que os proprietários voem em sua própria reivindicação |
| griefdefender.admin.option.perk.fly.resident | Permite que os usuários voem em reivindicações onde eles têm trust de resident |
| griefdefender.admin.option.perk.fly.accessor | Permite que os usuários voem em reivindicações onde eles têm trust de accessor |
| griefdefender.admin.option.perk.fly.builder | Permite que os usuários voem em reivindicações em que tenham trust de builder |
| griefdefender.admin.option.perk.fly.container | Permite que os usuários voem em reivindicações em que tenham trust de container |
| griefdefender.admin.option.perk.fly.manager | Permite que os usuários voem em reivindicações onde eles têm trust do manager |

## Trust
| Node de permissão | Descrição |
| --------- | ----------- |
| griefdefender.user.claim.command.trust.group | Permite conceder trust ao grupo |
| griefdefender.user.claim.command.trust.player | Permite conceder trust ao jogador |
| griefdefender.user.claim.command.trust.list | Permite listar jogadores com trust |
| griefdefender.user.claim.command.trustall.group | Permite conceder trust de grupo a todas as reivindicações|
| griefdefender.user.claim.command.trustall.player | Permite conceder trust do jogador a todas as reivindicações |
| griefdefender.user.claim.command.untrust.group | Permite remover o trust do grupo |
| griefdefender.user.claim.command.untrust.player | Permite remover o trust do jogador |
| griefdefender.user.claim.command.untrustall.group | Permite remover otrust do grupo para todas as reivindicações|
| griefdefender.user.claim.command.untrustall.player | Permite remover o trust do jogador em todas as reivindicações |
| griefdefender.user.claim.trust.resident | Permite adicionar resident |
| griefdefender.user.claim.trust.accessor | Permite adicionar accessor |
| griefdefender.user.claim.trust.container | Permite adicionar containers |
| griefdefender.user.claim.trust.builder | Permite adicionar builders |
| griefdefender.user.claim.trust.manager | Permite adicionar managers |
| griefdefender.user.claim.trust.remove | Permite untrust de jogadores |

# Permissões administrativas

| Node de permissão | Descrição |
| --------- | ----------- |
| griefdefender.advanced.admin.flags | Permite o uso do modo avançado na Interface do bandeiras |
| griefdefender.admin.bypass.ban | Permite ignorar o banimento de reivindicação |
| griefdefender.admin.bypass.border-check | Permite ignorar a verificações de fronteira de reivindicação |
| griefdefender.admin.bypass.option | Permite bypass de opções |
| griefdefender.admin.bypass.override.resize | Permite ignorar as restrições de redimensionamento da reivindicação |
| griefdefender.admin.bypass.override.limit | Permite ignorar as restrições de limite de criação de reivindicações |
| griefdefender.admin.claim.command.adjust-claim-blocks | Permite editar a quantidade de blocos de bônus de reivindicação |
| griefdefender.admin.claim.command.admin-mode | Permite usar o modo de reivindicação administrativa |
| griefdefender.admin.claim.command.ban | Permite banir ou desbanir um item, bloco ou id de entidade de todos os usos |
| griefdefender.admin.claim.command.clear | Permite limpar entidades dentro de uma ou mais reivindicações |
| griefdefender.admin.claim.command.schematic | Permite gerenciar esquemático de reivindicações |
| griefdefender.admin.claim.command.debug | Permite usar GDdebug |
| griefdefender.admin.claim.command.delete.base | Permite usar o comando deleteclaim |
| griefdefender.admin.claim.command.delete.basic | Permite excluir reivindicações básicas |
| griefdefender.admin.claim.command.delete.admin | Permite excluir reivindicações administrativa |
| griefdefender.admin.claim.command.delete-claims | Permite excluir todas as reivindicações de outro jogador |
| griefdefender.admin.claim.command.ignore.base | Permite usar o comando ignorar a proteção das reivindicações |
| griefdefender.admin.claim.command.ignore.basic | Permite ignorar bandeiras de reivindicação básicos |
| griefdefender.admin.claim.command.ignore.admin | Permite ignorar bandeiras de reivindicação administrativa |
| griefdefender.admin.claim.command.ignore.town | Permite ignorar as bandeiras de reivindicação da cidade |
| griefdefender.admin.claim.command.ignore.wilderness | Permite ignorar bandeiras de região selvagem |
| griefdefender.admin.claim.command.permission-group | Permite usar o comando reivindicação para permissões de grupo |
| griefdefender.admin.claim.command.permission-player | Permite usar o comando de reivindicação para permissões de jogador |
| griefdefender.admin.claim.command.reserve-name | Permite reservar nomes de reivindicações |
| griefdefender.admin.claim.cuboid | Permite criar/redimensionar declarações de administrador no modo 3D |
| griefdefender.admin.claim.list.admin | Permite listar reivindicações administrativas |
| griefdefender.admin.claim.option.global | Permite gerenciar opções globais |
| griefdefender.admin.claim.resize | Permite redimensionar reivindicações |
| griefdefender.admin.claim.resize.admin | Permite redimensionar reivindicações administrativas |
| griefdefender.admin.claim.resize.admin.subdivision |Permite redimensionar subdivisões de reivindicações administrativas |
| griefdefender.admin.claim.resize.basic | Permite redimensionar reivindicações básicas |
| griefdefender.admin.claim.resize.basic.subdivision | Permite redimensionar subdivisões básicas de reivindicações |
| griefdefender.admin.claim.resize.town | Permite redimensionar reivindicações da cidade |
| griefdefender.admin.claim.set-admin-flags | Permite editar bandeiras em uma reivindicação administrativa |
| griefdefender.admin.claim.use-reserved-names | Permite usar nomes de reivindicações reservados |
| griefdefender.admin.claim.wilderness | Permite editar reivindicações de região selvagem |
| griefdefender.admin.command.delete-admin-claims | Permite excluir todas as reivindicações administrativas |
| griefdefender.admin.command.reload | Permite recarregar GP |
| griefdefender.admin.command.restore-claim.base | Permite restaurar a reivindicação ao seu estado natural |
| griefdefender.admin.command.restore-nature.base | Permite alternar a ferramenta de pá para o modo de restauração. |
| griefdefender.admin.command.restore-nature.aggressive |  |
| griefdefender.admin.command.restore-nature.fill |  |
| griefdefender.admin.command.set-accrued-claim-blocks | Permite editar a quantidade de blocos de reivindicação acumulados |
| griefdefender.admin.custom.flag | Permite usar bandeiras de reivindicação avançados na Interface |
| griefdefender.admin.flag-defaults | Permite editar padrões de bandeiras |
| griefdefender.admin.flag-overrides | Permite editar sobreposição de bandeira |

## outras-opções
| Node de permissão | Descrição |
| --------- | ----------- |
| griefdefender.admin.claim.command.option.group.base | Permite definir opções de grupo em reivindicações |
| griefdefender.admin.claim.command.option.player.base | Permite definir as opções do jogador em reivindicações |

# Misc
| Node de permissão | Descrição |
| --------- | ----------- |
| griefdefender.user.command.help | Permite-lhe visualizar a ajuda |
| griefdefender.user.chat.capture | Permite gravar bate-papo em Interface de comando |
|  | Define o jogador ou grupo para usar a Interface do bate-papo no login |