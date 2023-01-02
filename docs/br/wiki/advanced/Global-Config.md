---
title: Configuração global
tag: Info
category: info
icon: config
---

A configuração padrão do Griefdefender oferece personalização estendida para o seu servidor.Abaixo está um detalhamento de todas as variáveis padrão para sua conveniência.

> :warning: Algumas opções podem causar alterações irreparáveis em seus dados.Certifique-se de ter lido o subtexto encontrado ao lado das variáveis em sua [`global.conf`](/br/wiki/advanced/Global-Config.html). **Todas as variáveis de migração sempre devem ser usadas após o backup de seus dados.** :warning:

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
* Item: item-drop, item-pickup, item-spawn, item-use, item-damage
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
| claim-block-task | Se a tarefa de bloco de reivindicação deve ser executada para acumular blocos para os jogadores. <br />Nota: Se no modo de economia, use a configuração 'use-claim-block-task' na categoria de economia. <br />Nota: Para configurar a quantidade acumulada, consulte 'blocks-accrued-per-hour' opção em [Configuração Global](/br/wiki/advanced/Global-Config.html#reivindicacao) | FALSE |
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
| deny-message-action-bar | Controla se deseja enviar mensagens de negar de reivindicação para a barra de ação. <br />Nota: A configuração para false enviará mensagens para bate -papo. | TRUE |
| enable-exit-chat-messages | Controla se as mensagens de bate -papo de saída são exibidas quando as mensagens de entrada e saída estão sendo enviadas para um jogador ao mesmo tempo. Por exemplo, se uma mensagem de título Enter e Sair estiver configurada em uma reivindicação, o título de saída será enviado para conversar seEssa configuração é verdadeira. | FALSE |
| enter-claim-player-messages | Controla se deseja exibir o nome do playername e a reivindicação de exibição como inserir a mensagem se não estiver definida. <br /> Defina como '1' para enviar mensagens para conversar. <br /> Defina como '2' para enviar mensagens para o ActionBar. <br />  Definido como '3' para enviar mensagens ao título. <br /> Definido como 0 para desativar. | 2 |
| enter-exit-chat-show-gd-prefix | Se o prefixo GD deve ser mostrado em mensagens de bate -papo ENTER/EXIT. | TRUE |
| greeting-farewell-action-bar | Controla se deseja enviar mensagens de saudação/despedida para a barra de ação por padrão. <br />Nota: A configuração para True enviará mensagens para o ActionBar. <br />NOTA: Isso será definido apenas se não houver ação de ação definida na reivindicação.Nesse caso, ele usará o bate -papo. | FALSE |
| locale | Defina o local a ser usado para mensagens GP.Idiomas disponíveis: de_DE, en_US, es_ES, fr_FR, it_IT, pl_PL, pt_BR, ru_RU, tr_TR, zh_CN, zh_HK. Os dados são armazenados em ativos em jar. <br />NOTA: O código do idioma deve ser minúsculo e o código do país deve ser maiúsculo. | "en_US" |
| locale-unicode-fix | Tentativas de ajustar as fontes Unicode para representar melhor as fontes padrão do Minecraft. <br />Nota: Se você estiver usando 'pl_pl' ou 'ru_ru', essa configuração deve ser definida como falsa. <br />Nota: Quaisquer outros idiomas que sofrem desalinhamento nos menus de bate -papo devem desativar essa configuração. | TRUE |
| wilderness-default-message | Controla se o padrão do deserto, a mensagem, digite a mensagem é enviada aos jogadores. | TRUE |

# Migrador
## Bukkit
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| classic | Defina como true para ativar o migrador clássico. <br />Nota: Migra dados de reclamações clássicos do GP Bukkit e dados GPFLAGS, se disponíveis, para o formato atual. <br /> Nota: Recomenda -se fazer backup de dados antes de usar. | FALSE | 
| classic-database | Migra o banco de dados clássico do GP Bukkit. | FALSE |
| classic-playerdata-threshold | Controla o último limite do dia do jogador ativo para evitar a migração de dados de player gp inativos.Para desativar, defina o valor para 0. <br />NOTA: Por exemplo, com o valor padrão de '180', o migrador migrará apenas os dados do jogador para jogadores que jogaram nos últimos 180 dias. <br />Nota: Isso apenas lida com o Data de jogador de um jogador, onde as informações acumuladas/bônus são armazenadas.Essa configuração não tem efeito na migração de reivindicações.<br /> NOTA: Isso evita armazenar dados inativos do usuário no LuckPerms, o que ajuda a manter a visualização ' /LP' /LP '. | 180 |
| griefdefender-file-to-database | Defina como true para migrar do formato de arquivo para o banco de dados. <br />Nota: O método de armazenamento deve ser definido como Hocon para que isso funcione corretamente. <br />NOTA: Após a migração ser concluída, mude de armazenamento para o banco de dados. <br />Nota: Isso não removerá arquivos existentes, caso você queira voltar. | FALSE |
| red-protect | Defina como true para ativar o Redprotect Data Migrator. | FALSE |
| worldguard | Defina como true para ativar o migrador de dados mundiais. <br />Nota: Apenas regiões cubóides são suportadas. <br />Nota: é recomendável fazer backup de dados antes de usar. | FALSE |

## Sponge
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| griefprevention-bukkit | Defina como true para permitir o migrador de Bukkit de GriefPrevenção. <br />Note: Migrates GP bukkit classic claim data and GPFlags data, if available, to current format. <br />Note: It is recommended to backup data before using. | FALSE |
| griefprevention-sponge | Defina como True para permitir o migrador de esponja de prevenção de luto. <br />Nota: migra dados de reivindicação de esponja GP para o formato atual. <br />Nota: Recomenda -se fazer backup de dados antes de usar. | FALSE |
| red-protect | Defina como true para ativar o migrador de dados redprotect. <br />NOTA: Todos os dados redprotectos serão convertidos em dados básicos de reivindicação. | FALSE |
| worldguard | Defina como true para ativar o migrador de dados mundiais. <br />Nota: Apenas regiões cubóides são suportadas.<br /> Nota: é recomendável fazer backup de dados antes de usar. | FALSE |

# Otimização
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| dispenser-item-spawns | Controla se os itens de dispensar geradores são ignorados. | TRUE |
| entity-damage-living-passive | Controla se os eventos de dano da entidade que contêm uma entidade passiva de origem/alvo vivos, como dois animais lutando, são ignorados. | TRUE |
| entity-damage-monster | Controla se os eventos de dano da entidade que contêm um monstro de origem/alvo são ignorados. | TRUE |
| entity-item-pickup-non-players | Controla se os captadores de itens de entidade fabricados por não jogadores são ignorados. | TRUE |
| fall-non-player | Controla se as quedas não-jogadores são ignoradas. | TRUE |
| monster-player-damage | Ccontrola se monstro ataques contra um jogador são ignorados. <br />Nota: Isso não inclui danos causados pela explosão. <br />NOTA: Se você precisar evitar danos causados por monstros em reivindicações, isso deve permanecer falso. | FALSE |
| player-monster-damage | Controla se os ataques de jogadores contra um monstro são ignorados. <br />NOTA: Isso não inclui danos à explosão. | TRUE |

# Permissão
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| griefdefender-claim-group-priority | A prioridade do grupo de permissão de reivindicação. | -60 |
| griefdefender-claim-priority | A prioridade do grupo de permissão de reivindicação. | -60 |
| griefdefender-default-priority | A prioridade do grupo de permissão padrão. | -80 |
| griefdefender-option-priority | A prioridade do grupo de permissão de opção. | 0 |
| griefdefender-override-priority | A prioridade do grupo de permissão de substituição. | -40 |

# Player Data
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| claim-block-system | Determina qual sistema de bloco de reclamação usar para reivindicações.<br /> NOTA: Se definido como volume, os blocos de reclamação usarão o sistema de contagem de pedaços para equilibrar a reivindicação 3D.<br /> NOTA: Se definido como área, o sistema de contagem de blocos 2D padrão será usado. | AREA |
| context-storage-type | O tipo de contexto usado ao armazenar os dados do player em um banco de dados de permissões.<br /> Os tipos disponíveis são: global, servidor, mundo.(Padrão: global) <br /> O Global armazenará dados compartilhados globalmente por todos os servidores.<br /> O servidor armazenará dados por servidor.Nota: Isso exige que o servidor seja definido corretamente na configuração de permissões.<br /> O mundo armazenará dados por mundo. | GLOBAL |


# PvP
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| allow-fly | Se o vôo é permitido durante o PVP. | false |
| combat-logout | Se os jogadores devem ser mortos se fizerem o logout enquanto estiver em combate pvp. | false |
| enabled | Se a proteção de PVP está ativada para jogadores.<br /> NOTA: ATUALIZAÇÕES ESTE DESLIGADO DESPLECIVA TODA A FUNCIONALIZADA PVP EM GRIEFDEFENDER. | true |

# Cidade
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| auto-nature-restore | Se as cidades de sobrevivência serão restauradas automaticamente à natureza quando excluídas automaticamente. | FALSE |
| clan-require-town | Requer que uma cidade seja de propriedade da McClans.<br /> Nota: isso é apenas para Sponge. | TRUE |
| cleanup-task-interval | O intervalo em minutos para restaurar blocos em uma cidade vencida. | 5 |
| creation-cost | A quantidade necessária de fundos para criar uma cidade.<br /> NOTA: Isso requer um plug -in de economia. | 0.0 |

# Visual
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| active-claim-visual-time | O tempo ativo, em segundos, para manter o visual de uma reivindicação mostrado a um jogador.<br /> NOTA: Se o valor for <= 0, GD usará o valor padrão. | 60 |
| active-create-block-visual-time | O tempo ativo, em segundos, para manter o visual de Criar Block de uma reivindicação mostrado a um jogador.<br /> NOTA: Isso se aplica apenas durante a criação de reivindicações.<br /> Nota: Se o valor for <= 0, GD usará o valor padrão. | 180 |
| client-visuals-per-tick | A quantidade de visuais em bloco que um cliente pode receber por tique -taxas ao mostrar/ocultar reclamações. | 12 |
| cuboid-level-visuals-2d | Se deve usar visuais de cubóides, em reivindicações 2D, durante a inspeção com níveis de reivindicação Min/Max do Proprietário entre 0 e 255 ou 0 e 319 para MC 1.17+.<br /> Nota: os visuais do WECUI não estão associados a esta opção.<br /> NOTA: Se ativado, isso enviará muitas atualizações de bloco para os jogadores, causando mais tensão do cliente, dependendo do tamanho da reivindicação.Use com cuidado.| FALSE |
| fill-spacing | O espaço entre cada bloco visual de enchimento. | 10 |
| hide-borders-when-using-wecui | Se deve ocultar as fronteiras do bloco de brilho/ouro ao usar o WECUI. | FALSE |
| hide-fillers-when-using-wecui | Se deve ocultar os preenchimentos de bloco ao usar o wecui. | TRUE |
| hide-wecui-drag-visuals-2d | Se o drag visual deve ser mostrado ao criar uma reivindicação no modo 2D. | TRUE |
| claim-create-block | O bloco visual usado durante a criação de reivindicações. | minecraft:diamond_block |
| admin-accent-block | O bloco de sotaque visual usado para reivindicações de administrador. | minecraft:pumpkin |
| admin-corner-block | O bloco de canto visual usado para reivindicações de administrador. | minecraft:glowstone |
| admin-filler-block | O bloco de preenchimento visual usado para reivindicações de administrador. | minecraft:pumpkin |
| basic-accent-block | O bloco de sotaque visual usado para reivindicações básicas. | minecraft:gold_block |
| basic-corner-block | O bloco de canto visual usado para reivindicações básicas. | minecraft:glowstone |
| basic-filler-block | O bloco de preenchimento visual usado para reivindicações básicas. | minecraft:gold_block |
| error-accent-block | O bloco de sotaque visual usado para visualizar um erro em uma reivindicação. | minecraft:netherrack |
| error-corner-block | O bloco de canto visual usado para visualizar um erro em uma reivindicação. | minecraft:redstone_ore |
| error-filler-block | O bloco de preenchimento visual usado para visualizar um erro em uma reivindicação. | minecraft:diamond_block |
| subdivision-accent-block | O bloco de sotaque visual usado para reivindicações de subdivisão. | minecraft:white_wool or minecraft:wool for legacy versions |