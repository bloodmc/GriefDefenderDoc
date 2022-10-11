---
title: Configuração global
tag: Info
category: info
icon: config
---

A configuração padrão do Griefdefender oferece personalização estendida para o seu servidor.Abaixo está um detalhamento de todas as variáveis padrão para sua conveniência.

> :warning: Algumas opções podem causar alterações irreparáveis em seus dados.Certifique-se de ter lido o subtexto encontrado ao lado das variáveis em sua `global.conf`. **Todas as variáveis de migração sempre devem ser usadas após o backup de seus dados.** :warning:

---

## Dependência do plug-in
Observe, variáveis de custo (como cidades' `creation-cost`) **requer** um plugin de econômia. Da mesma forma, o McClans só é necessário se você planeja usar sua integração entre os plugins.**Não**, no entanto, é necessário usar as reivindicações da cidade de Griefdefender.

Por exemplo, adicionar bloqueio de bloco à lista se traduzirá em `griefdefender.user.flag.block-break` sendo verificado como verdadeiro, permitindo que o jogador edite a bandeira de sua reivindicação com o bloqueio de sua reivindicação com `/cf`, `/cfg`, e `/cfp`. 

## Configuração modular
O Griefdefender permite a habilitação modular.De acordo com os arquivos de configuração padrão, no entanto, todos os módulos estão ativados.Desativar um módulo tornará todas as bandeiras inutilizáveis.Faça isso apenas se você não planeja usar a administração da bandeira da referida bandeira de Griefdefender.Você pode optar por desativar o seguinte:
* Block-Changes: block-break, block-grow, block-modify, block-place, block-pre, block-spread
* Collisions: collide-block, collide-entity
* Commands: command-execute
* Movements: enter-claim, exit-claim
* Entity: entity-damage, entity-riding, entity-spawn, entity-teleport-from, entity-teleport-to
* Explosions: explosion-block, explosion-entity
* Interacts: interact-block-primary, interact-block-secondary, interact-entity-primary, interact-entity-secondary, interact-inventory, interact-inventory-click, interact-item-primary, interact-item-secondary
* Item: item-drop, item-pickup, item-spawn, item-use
* Liquids: liquid-flow
* Portals: portal-use
* Projectiles: projectile-impact-block, projectile-impact-entity


# Reivindicação
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| auto-chest-claim-block-radius | O raio usado (em blocos) para reivindicação criada automaticamente quando um baú é colocado.Definido como -1 para desativar a criação de reivindicação de peito. | 4 |
| auto-nature-restore | Se as reivindicações de sobrevivência serão restauradas automaticamente à natureza quando excluídas automaticamente.. | FALSE |
| auto-schematic-restore | Se as reivindicações de sobrevivência serão restauradas automaticamente ao seu esquema de criação de reivindicações no abandono/expiração. <br /> Nota: Ativar esse recurso fará com que todas as reivindicações criadas recentemente criem automaticamente um esquema especial que será usado para restaurar a reivindicação sobre abandono/expiração.<br />NOTA: Ativar esse recurso desativará a capacidade de redimensionar as reivindicações. <br /> Nota: É altamente recomendável desativar a construção no deserto antes de usar esse recurso para evitar que os jogadores explorem.<br />Nota: Também é recomendável usar apenas esse recurso em mundos recém -criados, onde não existem dados de jogadores existentes.<br />Nota: Isso não afeta as exclusões.Se os administradores quiserem restaurar de volta ao esquema original, eles podem selecionar '__restore__' usando o comando/claimschematic .| FALSE |
| border-block-radius | Defina a borda da reivindicação do raio especificado (em blocos), centrado na reivindicação.Se definido como 1, adiciona um raio adicional de 1 bloco protegido em torno da reivindicação. <br />Nota: Não é recomendável definir esse valor muito alto, pois o desempenho pode se degradar devido a pesquisas de reivindicação mais profundas. | 0 |
| claim-block-task | Se a tarefa de bloco de reivindicação deve ser executada para acumular blocos para os jogadores. <br />Nota: Se no modo de economia, use a configuração 'use-claim-block-task' na categoria de economia. <br />Nota: Para configurar a quantidade acumulada, consulte 'blocks-accrued-per-hour' opção em https://github.com/bloodmc/GriefDefender/wiki/Options-(Meta)#global-options | FALSE |
| claim-block-task-move-threshold | O limiar mínimo de movimento (em blocos) necessário para receber blocos de reivindicação acumulados. <br />Nota: A tarefa do bloco de reivindicações é executada a cada 5 minutos, que é a hora de cada jogador mover a quantidade necessária de blocos. | 0 |
| claim-create-radius-limit | O limite do raio para o comando /claimcreate . | 256 |
| claims-enabled | Se a reivindicação está ativada ou não.(0 = desativado, 1 = ativado). | 1 |
| expiration-cleanup-interval | O intervalo em minutos para a limpeza de reivindicações expiradas.Definido como 0 para desativar. | 63 |
| explosion-block-surface-blacklist | Uma lista de IDs de origem que não podem causar danos à explosão a blocos acima do nível do mar. | [ ] |
| explosion-entity-surface-blacklist | Uma lista de IDs que não podem causar danos à explosão a entidades acima do nível do mar. | [ ] |
| explosion-surface-block-level | O nível de bloco 'Y' que é considerado a superfície para explosões. | 0 |
| inspection-tool | O item usado para inspecionar reivindicações com um clique com o botão direito do mouse. <br />Nota: Defina como citações esvazias se você deseja atribuir nenhum item e usar o modo '/claim' exclusivamente. | "minecraft:stick" |
| modification-tool | O item usado para criar/redimensionar reivindicações com um clique direito.<br />Nota: Defina como citações esvazias se você quiser atribuir nenhum item e usar '/claim' modo exclusivamente. | "minecraft:golden_shovel" |
| piston-protection-in-claims | Se a proteção do pistão deve ser ativada dentro das reivindicações.NOTA: Isso não afeta os pistões cruzando em outra reivindicação, que é sempre protegida.Isso apenas determina se o GD deve ou não processar pistões se não se cruzar para outra reivindicação. | false |
| player-trapped-cooldown | O tempo de espera, em segundos, ao usar para usar o '/trapped' . | 300 |
| protect-tamed-entities | Se as entidades domadas devem ser protegidas em reivindicações. | true |
| reserved-claim-names | Uma lista de nomes de reivindicações reservados para uso apenas pelos administradores. | [ ] |
| restrict-world-max-height | Se deve restringir a reivindicação à altura mundial máxima. | true |

# Context
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| player-equipment | Se os contextos do equipamento do jogador devem ser aplicados durante as verificações de permissão. | true |
| potion-effects | Se os contextos de efeito de poção devem ser aplicados durante as verificações de permissão. | true |
| enchantments | Se os contextos de efeito de poção devem ser aplicados durante as verificações de permissão. | false |

# Economy
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| bank-system | Se deve ativar o sistema bancário para reivindicações.Definido como true para ativar. | FALSE |
| bank-transaction-log-limit | A quantidade de transações a se manter para a história. | 60 |
| economy-mode | Usa economia em vez de blocos de reivindicação de jogadores para criação de reivindicações.Se for verdade, desativa o sistema de blocos de reivindicações em favor da economia. <br />NOTE: Usando este modo desativa o '/buyblocks' O comando como criação de reivindicações puxará fundos diretamente do equilíbrio econômico de um jogador. <br />Nota: Se os jogadores tiverem reivindicações existentes de configurações anteriores, um administrador deve usar o '/ecomigrateblocks' comando para converter restante em moeda. | FALSE |
| rent-delinquent-task-apply-hour | A hora específica de dia para tentar obter saldos de aluguel de reivindicações de devida de locatários inadimplentes. <br />Nota: Isso usa tempo militar e aceita valores entre 0-23. | 0 |
| rent-max-time-limit | Controla o limite máximo de tempo (horas ou dias) que um proprietário de reivindicação pode ter seu aluguel max definido para. <br />Nota: Isso afeta apenas os aluguéis de reclamações que têm um máximo especificado.Se nenhum máximo for especificado pelo proprietário da reivindicação, um locatário poderá alugar o tempo que quiser. | false |
| rent-restore-day-warning | Controla em que dia um jogador deve começar a receber avisos sobre sua reivindicação alugada que se aproxima de expiração. <br />Ex.Se definido como '5', Isso começará a enviar as mensagens dos jogadores no login e na hora do aluguel de aplicar, quando restam 5 dias antes do vencimento. <br />Nota: Isso só se aplica se o proprietário tiver 'rent-restore' Opção ativado e o proprietário do aluguel define um máximo. | 5 |
| rent-schematic-restore-admin | Controla se as reivindicações de administrador alugadas usarão um esquema para restauração. <br />Nota: Se definido, a reivindicação criará um esquema no início do aluguel e a restaurará quando terminar. <br />Nota: Isso se aplica apenas a aluguel com uma data máxima definida. | false |
| rent-sign | Se as placas de aluguel estão ativados. | FALSE |
| rent-system | Controla se o sistema de aluguel está ativado. | FALSE |
| rent-task-interval | O intervalo em minutos para verificar os pagamentos de aluguel de reivindicações que são devidos. Definido como '0' para desativar | 1 |
| rent-transaction-log-limit | A quantidade de transações a se manter para a história. | 60 |
| sell-sign | Se as placas de venda estão ativados. | false |
| sign-update-interval | O intervalo em minutos para atualizar dados de sinal. Definido como '0' para desativar | 1 |
| tax-apply-hour | A hora específica em dia para aplicar impostos a todas as reivindicações. <br />Nota: Isso usa tempo militar e aceita valores entre 0-23. | 0 |
| tax-system | Se deve permitir o sistema tributário para reivindicações.Definido como true para ativar. | FALSE |
| tax-transaction-log-limit | A quantidade de transações a se manter para a história. | 60 |


# Message
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| deny-message-action-bar | Controls whether to send claim deny messages to action bar. <br />Note: Setting to false will send messages to chat. | TRUE |
| enable-exit-chat-messages | Controls whether exit chat messages are displayed when both enter and exit messages are being sent to a player at the same time.For example, if both an enter and exit title message is configured in a claim then the exit title would be sent to chat if this setting is true. | FALSE |
| enter-claim-player-messages | Controls whether to display playername and claim display name as enter message if not set. <br /> Set to '1' to send messages to chat. <br /> Set to '2' to send messages to actionbar. <br />  Set to '3' to send messages to title. <br /> Set to 0 to disable. | 2 |
| enter-exit-chat-show-gd-prefix | Whether GD prefix should be shown in enter/exit chat messages. | TRUE |
| greeting-farewell-action-bar | Controls whether to send greeting/farewell messages to action bar by default. <br />Note: Setting to true will send messages to actionbar. <br />Note: This will only be set if there is no actionbar already set in claim. If so, it will use chat instead. | FALSE |
| locale | Set the locale to use for GP messages. Available languages: de_DE, en_US, es_ES, fr_FR, pl_PL, ru_RU, zh_HK. The data is stored under assets in jar. <br />Note: The language code must be lowercase and the country code must be uppercase. | "en_US" |
| locale-unicode-fix | Attempts to adjust unicode fonts to represent minecraft default fonts better. <br />Note: If you are using 'pl_PL' or 'ru_RU', this setting should be set to false. <br />Note: Any other languages that experience misalignment in chat menus should disable this setting. | TRUE |
| wilderness-default-message | Controls whether wilderness default enter message is sent to players. | TRUE |

# Migrators
## Bukkit
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| classic | Set to true to enable the classic migrator. <br />Note: Migrates GP bukkit classic claim data and GPFlags data, if available, to current format.<br />Note: It is recommended to backup data before using. | FALSE | 
| classic-database | Migrates GP bukkit classic database. | FALSE |
| classic-playerdata-threshold | Controls the last active player day threshold in order to avoid migrating inactive GP playerdata. To disable, set value to 0. <br />Note: For example, with the default value of '180' the the migrator will only migrate playerdata for players that played within the past 180 days. <br />Note: This only handles a player's playerdata where accrued/bonus block information is stored. This setting has no effect on claim migration. <br />Note: This avoids storing inactive user data in LuckPerms which helps keep '/lp editor' view clean. | 180 |
| griefdefender-file-to-database | Set to true to migrate from file format to database. <br />Note: The storage method must be set to hocon in order for this to work properly. <br />Note: After migration is complete, switch storage to database. <br />Note: This will NOT remove existing files in case you want to go back. | FALSE |
| red-protect | Set to true to enable RedProtect data migrator. | FALSE |
| worldguard | Set to true to enable WorldGuard data migrator. <br />Note: Only cuboid regions are supported. <br />Note: It is recommended to backup data before using. | FALSE |

## Sponge
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| griefprevention-bukkit | Set to true to enable the griefprevention bukkit migrator. <br />Note: Migrates GP bukkit classic claim data and GPFlags data, if available, to current format. <br />Note: It is recommended to backup data before using. | FALSE |
| griefprevention-sponge | Set to true to enable the griefprevention sponge migrator. <br />Note: Migrates GP sponge claim data to current format. <br />Note: It is recommended to backup data before using. | FALSE |
| red-protect | Set to true to enable RedProtect data migrator. <br />Note: All RedProtect data will be converted into basic claim data. | FALSE |
| worldguard | Set to true to enable WorldGuard data migrator. <br />Note: Only cuboid regions are supported. <br />Note: It is recommended to backup data before using. | FALSE |

# Optimization
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| dispenser-item-spawns | Controls whether dispener item spawns are ignored. | TRUE |
| entity-damage-living-passive | Controls whether entity damage events that contain both a source/target living passive entity, such as two animals fighting, are ignored. | TRUE |
| entity-damage-monster | Controls whether entity damage events that contain both a source/target monster are ignored. | TRUE |
| entity-item-pickup-non-players | Controls whether entity item pickups made by non-players are ignored. | TRUE |
| fall-non-player | Controls whether non-player falls are ignored. | TRUE |
| monster-player-damage | Controls whether monster attacks against a player are ignored. <br />Note: This does not include explosion damage. <br />Note: If you need to prevent damage from monsters in claims then this should remain false. | FALSE |
| player-monster-damage | Controls whether player attacks against a monster are ignored. <br />Note: This does not include explosion damage. | TRUE |

# Permission
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| griefdefender-claim-group-priority | The claimgroup permission group priority. | -60 |
| griefdefender-claim-priority | The claim permission group priority. | -60 |
| griefdefender-default-priority | The default permission group priority. | -80 |
| griefdefender-option-priority | The option permission group priority. | 0 |
| griefdefender-override-priority | The override permission group priority. | -40 |

# Player Data
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| claim-block-system | Determines which claim block system to use for claims. <br />Note: If set to VOLUME, claim blocks will use the chunk count system to balance 3d claiming. <br />Note: If set to AREA, the standard 2d block count system will be used. | AREA |
| context-storage-type | The context type used when storing playerdata within a permissions database. <br /> Available types are : global, server, world. (Default: global) <br /> Global will store data globally shared by all servers. <br /> Server will store data per server. Note: This requires servername to be properly set in permissions config. <br /> World will store data per world. | GLOBAL |


# PvP
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| allow-fly | Whether flying is allowed during PvP. | false |
| combat-logout | Whether players should be killed if they logout while in pvp combat. | false |
| enabled | Whether pvp protection is enabled for players. <br />Note: Turnings this off disables all PvP functionality in GriefDefender. | true |

# Town
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| auto-nature-restore | Whether survival towns will be automatically restored to nature when auto-deleted. | FALSE |
| clan-require-town | Requires a town to be owned for MCClans. <br />Note: This is for Sponge only. | TRUE |
| cleanup-task-interval | The interval in minutes for restoring blocks in an expired town. | 5 |
| creation-cost | The required amount of funds to create a town. <br />Note: This requires an Economy plugin. | 0.0 |

# Visual
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| active-claim-visual-time | The active time, in seconds, to keep a claim's visuals shown to a player. <br />Note: If value is <= 0, GD will use the default value. | 60 |
| active-create-block-visual-time | The active time, in seconds, to keep a claim's create block visual shown to a player. <br />Note: This only applies during claim creation. <br />Note: If value is <= 0, GD will use the default value. | 180 |
| client-visuals-per-tick | The amount of block visuals a client can receive per tick when showing/hiding claims. | 12 |
| cuboid-level-visuals-2d | Whether to use cuboid visuals, in 2D claims, during inspection with owner min/max claim levels between 0 and 255 or 0 and 319 for MC 1.17+. <br />Note: WECUI visuals are not associated to this option. <br />Note: If enabled, this will send many block updates to players causing more client strain depending on size of claim. Use with caution. | FALSE |
| fill-spacing | The space between each filler visual block. | 10 |
| hide-borders-when-using-wecui | Whether to hide the glowstone/gold block borders when using WECUI. | FALSE |
| hide-fillers-when-using-wecui | Whether to hide the block fillers when using WECUI. | TRUE |
| hide-wecui-drag-visuals-2d | Whether drag visuals should be shown while creating a claim in 2D mode. | TRUE |
| claim-create-block | The visual block used during claim creation. | minecraft:diamond_block |
| admin-accent-block | The visual accent block used for admin claims. | minecraft:pumpkin |
| admin-corner-block | The visual corner block used for admin claims. | minecraft:glowstone |
| admin-filler-block | The visual filler block used for admin claims. | minecraft:pumpkin |
| basic-accent-block | The visual accent block used for basic claims. | minecraft:gold_block |
| basic-corner-block | The visual corner block used for basic claims. | minecraft:glowstone |
| basic-filler-block | The visual filler block used for basic claims. | minecraft:gold_block |
| error-accent-block | The visual accent block used to visualize an error in a claim. | minecraft:netherrack |
| error-corner-block | The visual corner block used to visualize an error in a claim. | minecraft:redstone_ore |
| error-filler-block | The visual filler block used to visualize an error in a claim. | minecraft:diamond_block |
| subdivision-accent-block | The visual accent block used for subdivision claims. | minecraft:white_wool or minecraft:wool for legacy versions |