---
title: Global Config
tag: Info
category: info
icon: config
---

A configuração padrão do GriefDefender oferece personalização estendida para o seu servidor. Abaixo está um detalhamento de todas as variáveis padrão para sua conveniência.  

:::: warning Algumas opções podem causar alterações irreparáveis em seus dados
Certifique-se de ter lido o subtexto encontrado ao lado das variáveis em seu arquivo [global.yml](/br/wiki/advanced/Global-Config.html)  
**Todas as variáveis de migração SEMPRE devem ser usadas APÓS o backup de seus dados ser feito.**
::::

---

## Dependência do plug-in
Observe que as variáveis de custo (como a `creation-cost` das cidades) **requer** um plug-in de Economia (Exemplo: [Vault](https://www.spigotmc.org/resources/34315/), [EssentialsX](https://www.spigotmc.org/resources/9089/)). Da mesma forma, MCClans só é necessário se você planeja usar sua integração entre plugins. No entanto, **não** é necessário usar as reivindicações de GriefDefender's Town.

Por exemplo, adicionar quebra de bloco à lista se traduzirá em `griefdefender.user.flag.block-break` sendo verificado como verdadeiro, permitindo assim ao jogador editar o sinalizador de quebra de bloco de sua reivindicação com `/cf`, `/cfg `, e `/cfp`. 

## Configuração modular
GriefDefender permite configuração modular. No entanto, de acordo com os arquivos de configuração padrão, todos os módulos são ativados. Desativar um módulo tornará todos as bandeiras inutilizáveis. Só faça isso se você não planeja usar o gerenciamento de bandeira do GriefDefender. Você pode optar por desabilitar o seguinte:
* Mudanças nos blocos: block-break, block-grow, block-modify, block-place, block-pre, block-spread
* Colisões: collide-block, collide-entity
* Comandos: command-execute
* Movimento: enter-claim, exit-claim
* Entidade: entity-damage, entity-riding, entity-spawn, entity-teleport-from, entity-teleport-to
* Explosão: explosion-block, explosion-entity
* Interações: interact-block-primary, interact-block-secondary, interact-entity-primary, interact-entity-secondary, interact-inventory, interact-inventory-click, interact-item-primary, interact-item-secondary
* Item: item-drop, item-pickup, item-spawn, item-use, item-damage
* Líquidos: liquid-flow
* Portal: portal-use
* Projéteis: projectile-impact-block, projectile-impact-entity

<hr>
Version based on release file: GriefDefender 3.0.2
<hr>

# claim
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| auto-chest-claim-block-radius | Raio usado (em blocos) para reivindicação criada automaticamente quando um baú é colocado. Defina como 0 para desativar a criação de reivindicação de baú. | 4 |
| border-block-radius | Defina a borda da reivindicação com um raio especificado (em blocos), centralizado na reivindicação. Se definido como 1, adiciona um raio protegido adicional de 1 bloco ao redor da reivindicação. <br  /> Obs: não é recomendável definir esse valor muito alto, pois o desempenho pode ser prejudicado devido a pesquisas mais profundas de declarações. | 0 |
| child-inherit-permissions | Se as declarações filhas devem herdar as permissões dos pais quando a herança está ativada.   <br  /> Obs: isso afetará o desempenho, pois cada declaração filha precisará realizar pesquisas de permissão adicionais nas declarações pai. <br  /> Note: This does NOT affect towns. | false |
| child-inherit-trust | Se as reivindicações dos filhos devem herdar a confiança dos pais quando a herança está ativada. | false |
| claim-block-task | Se a tarefa de reivindicação de bloqueio deve ser executada para acumular bloqueios para os jogadores. <br /> Nota: Se estiver no modo econômico, use a configuração 'use-claim-block-task' na categoria econômica. <br /> Obs: para configurar o valor acumulado, consulte a opção 'blocks-accrued-per-hour' em [Opções - griefdefender.blocks-accrued-per-hour](/br/wiki/basic/Options.html#opcoes-globais) | true |
| claim-block-task-move-threshold | O limite mínimo de movimentação (em blocos) necessário para receber bloqueios de reivindicações acumuladas. <br /> Nota: A tarefa de reivindicação de bloco é executada a cada 5 minutos, que é o tempo que cada jogador terá para mover a quantidade necessária de blocos. | 0 |
| claim-create-radius-limit | O limite de raio para o comando /claimcreate. | 256 |
| claims-enabled | Se a reivindicação está habilitada ou não. (0 = Desativado, 1 = Ativado) | 1 |

# creation-settings
Controla as configurações padrão de criação de declarações. <br /> Obs: os administradores podem alterar essas configurações por reivindicação usando '/claiminfo' e clicando em 'Configurações de administrador'.  
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| expirable | Se as reivindicações podem expirar por padrão. | true |
| inherit-parent | Se as reivindicações devem herdar seus pais na criação. <br /> Nota: Esta configuração não afeta uma reivindicação cujo pai seja uma cidade. | false |
| max-world-height-override | A substituição máxima da altura mundial usada durante a criação da declaração. <br /> Nota: Requer que 'override-world-height' esteja habilitado. | 255 |
| min-world-height-override | A substituição mínima da altura mundial usada durante a criação da declaração. <br /> Nota: Requer que 'override-world-height' esteja habilitado. | 0 |
| override-world-height | Se as alturas das reivindicações são obtidas da configuração em vez do mundo. <br /> Nota: Habilite esta configuração se estiver usando um pacote de dados personalizado que altera a altura padrão do mundo. | false |
| requires-claim-blocks | Se as declarações exigem bloqueios de declarações na criação. | true |
| resizable | Se as declarações podem ser redimensionadas na criação. | true |
| show-deny-messages | Se as reivindicações podem mostrar mensagens de negação aos jogadores por padrão. | true |

| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| explosion-block-surface-blacklist | Uma lista de IDs de origem que não podem causar danos por explosão em blocos acima do nível do mar. <br /> Ex. Se você adicionar "minecraft:creeper" à lista, as trepadeiras não serão capazes de fazer com que os blocos explodam acima do nível do mar. <br /> Nota: Isto terá maior prioridade do que o sinalizador 'explosion-block'. <br /> Nota: Todos os id's adicionados à lista devem estar entre aspas. Ex. ["minecraft:creeper"] | [] |
| explosion-entity-surface-blacklist | Uma lista de identificações que não podem causar danos de explosão a entidades acima do nível do mar. <br /> Ex. Se você adicionar "minecraft:creeper" à lista, as trepadeiras não seriam capazes de ferir entidades acima do nível do mar. <br /> Nota: Isto terá maior prioridade do que o sinalizador ''explosion-entity'. <br /> Nota: Todos os id's adicionados à lista devem estar entre aspas. Ex. ["minecraft:creeper"] | [] |
| explosion-surface-block-level | O nível do bloco 'Y' que é considerado a superfície para explosões. | 63 |
| inspection-tool | O item usado para inspecionar reclamações com um clique com o botão direito. <br /> Nota: Defina aspas vazias se não quiser atribuir nenhum item e usar exclusivamente o modo '/claim'. |  ["minecraft:stick"](/br/wiki/basic/Claim-Management.html#suporte-a-custommodeldata) |
| modification-tool | O item usado para criar/redimensionar declarações com um clique direito. <br /> Nota: Defina aspas vazias se não quiser atribuir nenhum item e usar exclusivamente o modo '/claim'. | ["minecraft:golden_shovel"](/br/wiki/basic/Claim-Management.html#suporte-a-custommodeldata) |
| piston-protection-in-claims | Se a proteção do pistão deve ser habilitada nas reivindicações. Nota: Isto não afeta os pistões que passam para outra reivindicação, que está sempre protegida. Isso apenas determina se a GD deve ou não processar pistões se não passar para outra reivindicação. | false |
| player-trapped-cooldown | O tempo de espera, em segundos, ao usar o comando '/trapped'. | 300 |

# plot-settings
Controls plot claim settings.
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| use-schematics | If enabled, a schematic will be generated on plot creation and used to restore the plot to its original state when abandoned. <br  /> Note: A schematic will restore all blocks to their original state. Use with caution. <br  />Note: This setting requires WorldEdit. | true |
| use-snapshots | If enabled, snapshots will be generated on plot creation and used to restore the plot to its original state when abandoned. <br  /> Note: A snapshot will include all claim data such as settings, flags, options, and trust. | true |

| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| protect-tamed-entities | Whether tamed entities should be protected in claims from non-owners. | true |

# removal-settings
Controla as configurações de remoção/expiração de reivindicações.
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| admin-feature | Se ativado, todas as reivindicações expiradas se tornarão reivindicações administrativas, proporcionando confiança a todos os usuários. A reivindicação permanecerá neste estado até que o tempo de 'expiration-admin-keep' acabe.  | false |
| admin-feature-keep | O tempo em minutos para manter uma reivindicação expirada como reivindicação administrativa. Quando o tempo expirar, a reivindicação do administrador será excluída, permitindo que qualquer jogador recupere a área. | 1440 |
| admin-feature-message-claimblock-threshold | O tamanho mínimo de reivindicação, em blocos de reivindicação, necessário para que uma mensagem de anúncio de expiração seja enviada a todos os jogadores. | 5000 |
| admin-feature-message-show-coords | Se a mensagem de expiração do administrador deve mostrar as coordenadas para os jogadores verem. | false |
| auto-nature-restore | Se as reivindicações de sobrevivência serão automaticamente restauradas ao estado gerado mundialmente quando expirarem. <br /> Nota: Isto suporta apenas blocos gerados mundialmente. Considere usar 'auto-schematic-restore' se estiver usando um mundo personalizado. | false |
| auto-schematic-restore | Se as reivindicações de sobrevivência serão restauradas automaticamente para seu esquema de criação de reivindicações no abandono/expiração. <br /> Nota: A ativação deste recurso fará com que TODAS as reivindicações recém-criadas criem automaticamente um esquema especial que será usado para restaurar a reivindicação em caso de abandono/expiração. <br  /> Obs: a ativação desse recurso desativará a capacidade de redimensionar reivindicações. <br /> Nota: É ALTAMENTE recomendado desativar a construção na natureza antes de usar este recurso para evitar a exploração dos jogadores. <br /> Nota: Também é recomendado usar esse recurso SOMENTE em mundos recém-criados onde não existam dados de jogadores. <br /> Nota: Isto NÃO afeta as exclusões. Se os administradores quiserem restaurar o esquema original, eles podem selecionar '__restore__' usando o comando /claimschematic. | false |
| cleanup-interval | O intervalo em minutos para limpeza de reivindicações expiradas. Defina como 0 para desativar. | 0 |
| expiration-inactivity | Se for "verdadeiro", as reivindicações expirarão depois que a inatividade do proprietário exceder a quantidade definida de dias de "expiração". <br /> Se for 'falso', as reivindicações expirarão após a quantidade definida de dias de 'expiração' ter passado. <br /> Nota: Se esta configuração for alterada para 'falsa', TODAS as reivindicações existentes serão afetadas. Use com cuidado. | true |

| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| reserved-claim-names | Uma lista de nomes de declarações reservados para uso somente por administradores. <br /> Nota: Os nomes suportam curingas '?' e '*' usando o correspondente curinga do Apache. <br /> O curinga '?' representa um único caractere. <br /> O curinga '*' representa zero ou mais caracteres. <br /> Para obter mais informações sobre o uso, consulte [https://commons.apache.org/proper/commons-io/javadocs/api-2.5/org/apache/commons/io/FilenameUtils.html#wildcardMatch(java.lang.String,%20java.lang.String](https://commons.apache.org/proper/commons-io/javadocs/api-2.5/org/apache/commons/io/FilenameUtils.html#wildcardMatch) | [] |
| respawns-use-border-event |Se os respawns acionam eventos de fronteira de reivindicação.  <br  /> Nota: Defina como False se quiser que 'enter-claim' e 'exit-claim' não sejam acionados por respawns. | true |
| restrict-world-max-height | Se deve restringir a reivindicação à altura máxima mundial. | true |
| teleports-use-border-event | Se os teletransportes acionam eventos de reivindicação de fronteira. <br  /> Nota: Defina como False se quiser que 'enter-claim' e 'exit-claim' não sejam acionados por teletransportes. | true | 


# temporary-settings
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| claim-block-id | O identificador de bloco usado para criar reivindicações temporárias que expirarão com base na quantidade de dias definida na opção 'expiração'. <br /> Note: Temporary claim will be created when right-clicked with 'modification-tool'. | "minecraft:campfire" |
| claim-chunk-radius | O raio, em partes, usado para determinar o tamanho que uma reivindicação temporária deve ter. <br /> Nota: Este valor deve ser um número ímpar, como 1,3,5,7 ou 9. Se for usado um número par, o valor será aumentado em 1. | 3 |
claim-create-limit | A quantidade de reivindicações temporárias que um único jogador pode ter ao mesmo tempo. | 5 |
| expiration-days | O valor em dias que uma reivindicação temporária irá expirar. | 9 |
| use-temporary-claims | Se ativado, permite que os jogadores criem reivindicações temporárias que expiram após um determinado período de tempo. | false |

# command
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| root-command-aliases | Os aliases de comando raiz padrão. <br /> Nota: Se você deseja fornecer aliases adicionais. | "gd griefdefender" |

# context
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| enchantments | Se os contextos de efeito de poção devem ser aplicados durante as verificações de permissão. | false |
| ignored-debug-contexts | Uma lista de valores de contexto ignorados durante a depuração. | <br  />- '#azalea_root_replaceable'<br  />- '#base_stone_overworld'<br  />- '#dripstone_replaceable_blocks'<br  />- '#goats_spawnable_on'<br  />- '#lush_ground_replaceable'<br  />- '#mineable/pickaxe'<br  />- '#minecraft:azalea_root_replaceable'<br  />- '#minecraft:base_stone_overworld'<br  />- '#minecraft:dripstone_replaceable_blocks'<br  />- '#minecraft:goats_spawnable_on'<br  />- '#minecraft:lush_ground_replaceable'<br  />- '#minecraft:mineable/pickaxe'<br  />- '#minecraft:moss_replaceable'<br  />- '#minecraft:stone_ore_replaceables'<br  />- '#stone_ore_replaceables'<br  />- '#moss_replaceable'<br  />- '#minecraft:foxes_spawnable_on'<br  />- '#minecraft:inside_step_sound_blocks'<br  />- '#minecraft:mineable/shovel'<br  />- '#minecraft:rabbits_spawnable_on'<br  />- '#minecraft:wolves_spawnable_on'<br  />- '#foxes_spawnable_on'<br  />- '#inside_step_sound_blocks'<br  />- '#rabbits_spawnable_on'<br  />- '#wolves_spawnable_on' |
| player-equipment | Se os contextos de equipamento do jogador devem ser aplicados durante as verificações de permissão. | true |
| potion-effects | Se os contextos de efeito de poção devem ser aplicados durante as verificações de permissão. | true |

# economy
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| bank-system | Se deve ativar o sistema bancário para reclamações. Defina como verdadeiro para ativar. | false |
| bank-transaction-log-limit | A quantidade de transações a serem mantidas no histórico. | 60 |
| currency-symbol | O símbolo monetário para mensagens econômicas. | $ |
| currency-symbol-after-amount | Whether the currency symbol should be shown after the amount | false |
| economy-mode | Usa economia em vez de blocos de reivindicação de jogadores para criação de reivindicações. # Se verdadeiro, desativa o sistema de bloqueio de reivindicações em favor da economia. <br /> Nota: Usar este modo desativa o comando '/buyblocks', pois a criação de reivindicações retirará fundos diretamente do saldo econômico do jogador. <br /> Nota: Se os jogadores tiverem blocos de reivindicação de configurações anteriores, um administrador deve usar o comando '/ecomigrateblocks' para converter o restante em moeda. | false |

# rent
Use [RealEstate](/br/hooks/RealEstate.html) isso está sendo descontinuado
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| rent-blacklist | | |
| rent-delinquent-task-apply-hour | A hora específica do dia para tentar obter saldos de aluguel devidos de locatários inadimplentes. Nota: Isso usa o horário militar e aceita valores entre 0-23. | 0 |
| rent-max-time-limit | Controla o limite máximo de tempo (horas ou dias) para o qual um proprietário de reivindicação pode definir seu aluguel máximo. <br /> Obs: isso afeta apenas aluguéis de sinistros que tenham um máximo especificado. Se nenhum máximo for especificado pelo proprietário da reivindicação, o locatário poderá alugar pelo tempo que desejar. | 100 |
| rent-restore-day-warning | Controla em que dia um jogador deve começar a receber avisos sobre o vencimento do seu crédito alugado. <br /> Ex. Se definido como '5', começará a enviar mensagens aos jogadores no login e na hora de aplicação do aluguel, quando faltarem 5 dias para o vencimento. <br /> Nota: Isto só se aplica se o proprietário tiver a opção 'rent-restore' habilitada e o proprietário do aluguel definir um valor máximo. | 5 |
| rent-schematic-restore-admin | Controla se as reivindicações administrativas alugadas usarão um esquema para restauração. <br /> Obs: se definida, a reivindicação criará um esquema no início do aluguel e o restaurará quando o aluguel terminar. | false | 
| rent-sign | Se os sinais de aluguel estão habilitados. | false |
| rent-system | Controla se o sistema de aluguel está habilitado. Nota: Isto é atualmente experimental, use com cuidado. | false |
| rent-task-interval | O intervalo em minutos para verificar os pagamentos de aluguel devidos. Defina como 0 para desativar. | 1 |
| rent-transaction-log-limit | A quantidade de transações a serem mantidas no histórico. | 60 |

| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| sell-sign | Se as placas de venda estão habilitados. | false |
| sign-update-interval | O intervalo em minutos para atualização dos dados da placa. Defina como 0 para desativar. | 1 |
| tax-2d-claims | Whether to apply tax on 2d claims. | true |
| tax-3d-claims | Whether to apply tax on 3d claims | true |
| tax-apply-hour | A hora específica do dia para aplicar o imposto a todas as reivindicações. Nota: Isso usa o horário militar e aceita valores entre 0-23. | 0 |
| tax-system | Se deve ativar o sistema tributário para reclamações. Defina como true para ativar. | false |
| tax-transaction-log-limit | A quantidade de transações a serem mantidas no histórico. | 60 |
| use-claim-block-task | Os blocos de reivindicações ganhos serão convertidos para economia com base no 'economy-block-cost'. <br /> Nota: Esta configuração só pode ser usada se 'economy-mode' for verdadeiro. | false |

# Message
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| deny-message-action-bar | Controla se mensagens de negação de reivindicação devem ser enviadas para a barra de ação. <br />Nota: Definir como false enviará mensagens para o chat. | TRUE |
| enable-exit-chat-messages | Controla se as mensagens de saída do bate-papo são exibidas quando as mensagens de entrada e saída estão sendo enviadas para um jogador ao mesmo tempo. Por exemplo, se uma mensagem de título de entrada e saída estiver configurada em uma reivindicação, o título de saída será enviado para o bate-papo se esta configuração é verdadeira. | FALSE |
| enter-claim-player-messages | Controla se o nome do jogador deve ser exibido e reivindicado o nome de exibição como mensagem de entrada, se não estiver definido. <br />Defina como '1' para enviar mensagens para chat. <br />Defina como '2' para enviar mensagens para a barra de ação. <br />Defina como '3' para enviar mensagens ao título. <br /> Defina como 0 para desativar. | 2 |
| enter-exit-chat-show-gd-prefix | Se o prefixo GD deve ser mostrado nas mensagens de entrada/saída do chat. | TRUE |
| gd-prefix | Controla o prefixo usado ao enviar mensagens. | [&bGD&r]  |
| greeting-farewell-action-bar | Controla se mensagens de saudação/despedida devem ser enviadas para a barra de ação por padrão. <br />Nota: Definir como verdadeiro enviará mensagens para a barra de ação. <br />Nota: Isto só será definido se não houver nenhuma barra de ação já definida na reivindicação. Nesse caso, ele usará o chat. | FALSE |
| locale | Defina a localidade a ser usada para mensagens GP. Idiomas disponíveis: de_DE, en_US, es_ES, fr_FR, it_IT, pl_PL, pt_BR, ru_RU, tr_TR, zh_CN, zh_HK. Os dados são armazenados em ativos no jar. <br />Nota: O código do idioma deve estar em letras minúsculas e o código do país deve estar em letras maiúsculas. | "en_US" |
| locale-unicode-fix | Tentativas de ajustar as fontes Unicode para representar melhor as fontes padrão do Minecraft. <br />Nota: Se você estiver usando 'pl_PL' ou 'ru_RU', esta configuração deve ser definida como falsa. <br />Obs: quaisquer outros idiomas que apresentem desalinhamento nos menus de bate-papo devem desativar esta configuração. | TRUE |
| regex-filters | Used to check all messages stored in GD with provided regex filters. If match is found, message will not be able to be set. | [] |
| wilderness-default-message | Controla se a mensagem de entrada padrão da natureza selvagem é enviada aos jogadores. | TRUE |

# Migrators
# Bukkit
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| classic | Defina como verdadeiro para ativar o migrador clássico. <br />Nota: Migra dados de declaração clássica do GP bukkit e dados GPFlags, se disponíveis, para o formato atual.<br />Nota: É recomendado fazer backup dos dados antes de usar. | FALSE | 
| classic-database | Migra banco de dados clássico do GP bukkit. | FALSE |
| address | O endereço e a porta do banco de dados. Use o formato host:porta. | localhost |
| database |  O nome do banco de dados GriefPrevention. | "" |
| enabled | <br /> Defina como verdadeiro para ativar o migrador de banco de dados clássico. <br /> Nota: Migra dados do banco de dados clássico do bukkit GriefPrevention e dados GPFlags, se disponíveis, para o formato atual. <br /> Nota: Recomenda-se fazer backup dos dados antes de usar. | false |
| password | A senha do banco de dados GriefPrevention | "" |
| username | O nome de usuário do banco de dados GriefPrevention | "" |
| classic-playerdata-threshold | Controla o limite do último dia do jogador ativo para evitar a migração de dados de jogadores GP inativos. Para desativar, defina o valor como 0. <br />Nota: Por exemplo, com o valor padrão de '180', o migrador migrará apenas os dados dos jogadores dos jogadores que jogaram nos últimos 180 dias. <br />Nota: Isto apenas lida com os dados do jogador onde as informações acumuladas/blocos de bônus são armazenadas. Esta configuração não tem efeito na migração de declarações. <br />Nota: Isso evita o armazenamento de dados de usuários inativos no LuckPerms, o que ajuda a manter a visualização do '/lp editor' limpa. | 180 |
| griefdefender-file-to-database | Defina como verdadeiro para migrar do formato de arquivo para o banco de dados. <br />Nota: O método de armazenamento deve ser definido como hocon para que funcione corretamente. <br />Obs: após a conclusão da migração, alterne o armazenamento para banco de dados. <br />Nota: Isto NÃO removerá os arquivos existentes caso você queira voltar. | FALSE |
| luckperms-playerdata | <br /> Defina como verdadeiro para migrar dados acumulados do jogador/bloco de bônus de LP para GD. <br /> Nota: Recomenda-se fazer backup dos dados antes de usar. <br /> Nota: Habilite esta configuração apenas se estiver usando GD 2.4.8+ e não tiver migrado os dados do jogador GD do LP. <br /> Nota: Se estiver usando armazenamento de banco de dados GD, NÃO execute este migrador em mais de um servidor se vários servidores compartilharem o mesmo banco de dados GD. | false |
| playerdata | Defina como verdadeiro para ativar o migrador de arquivos legado GriefDefender playerdata. <br /> Nota: Esta configuração não é para migrar dados do jogador GriefPrevention. Use a opção 'clássica'. <br /> Nota: Migra o formato de arquivo playerdata herdado para armazenamento de permissões, como LuckPerms json ou armazenamento mysql. <br /> Nota: Antes de ativar isso, certifique-se de definir corretamente o 'context-storage-type' na seção playerdata desta configuração. <br /> Nota: É ALTAMENTE recomendado fazer backup do seu banco de dados de permissões antes de executar este migrador, pois todos os arquivos playerdata locais serão migrados para ele. <br /> Nota: NÃO execute este migrador em mais de um servidor se vários servidores compartilharem o mesmo banco de dados de permissões. | false |
| red-protect | Defina como verdadeiro para ativar o migrador de dados RedProtect. | FALSE |
| residence | Defina como verdadeiro para ativar o migrador de dados residenciais. | TRUE |
| worldguard | Defina como verdadeiro para ativar o migrador de dados WorldGuard. <br />Nota: Somente regiões cubóides são suportadas. <br />Nota: É recomendado fazer backup dos dados antes de usar. | FALSE |

# Mod
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| entity-move-event | Permite que a reivindicação de entrada e saída de GD apoie movimentos de não jogadores, como monstros e animais. | false |
| block-id-convert-list | Usado para substituir IDs de bloco genéricos por seus IDs reais durante TE e uso de item, se disponível. Adicione o ID do bloco de destino à lista se quiser forçar uma conversão quando detectado. <br /> Nota: Isto é útil para mods como IC2 que usa o id genérico 'ic2:te' para seu multi-bloco. | "gregtech:machine", "ic2:te" |
| fakeplayer-identifiers | Contém uma lista de strings usadas para identificar um fakeplayer por UUID ou nome. Para usar, adicione o UUID ou nome do fakeplayer. | ["41C82C87-7AfB-4024-BA57-13D2C99CAE77", BFC3377F-C3C9-3382-9DA6-79B50A9AFE57, "0D0C4CA0-4FF1-11E4-916C-0800200C9A66", "[Minecraft]", "OpenModsFakethis*"] |
| mod-id-map | Usado para mapear um item/bloco/entidade de mod desconhecido para um ID de mod. Para usar, adicione o pacote mod com um mapeamento para um id de mod. Ex. 'com.pixelmonmod.*', 'pixelmon' mapearia uma entidade contendo o nome da classe 'com.pixelmonmod.*' para 'pixelmon' | com.pixelmonmod.*: pixelmon<br  />net.minecraftforge.*: forge<br  />openblocks.*: openblocks<br  />openmods.*: openmods |
| tile-id-nbt-map | Usado para substituir IDs genéricos de entidade de bloco por seus IDs reais durante o uso do TE. Adicione o ID TE de destino como chave e a chave NBT onde o ID é armazenado como valor. | "gregtech:machine"=MetaId |

# Optimization
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
|async-claim-tool-actions | Se as ações da ferramenta de reivindicação do jogador devem ser processadas de forma assíncrona para desempenho. <br /> Nota: Se você encontrar algum problema de thread assíncrono, desative esta configuração. | TRUE |
| async-player-claim-visuals |Se os recursos visuais da reivindicação do jogador devem ser processados de forma assíncrona para desempenho. <br /> Nota: Se você encontrar algum problema de thread assíncrono, desative esta configuração. | TRUE |
| block-item-drops | Controla se os itens descartados das fontes de bloqueio devem ser ignorados. <br /> Nota: Isto só é acionado quando um jogador quebra um bloco. | TRUE |
| cache-db-player-claim-block-lookup-expiration | Controla a quantidade de tempo, em segundos, para o cache de permissão de todas as ações de dano à entidade no mundo. Se o cache for acessado antes da expiração, o tempo será zerado. <br />Obs: definir um valor muito alto pode resultar em resultados incorretos de permissão de danos à entidade. | 5 |
cache-entity-damage-expiration | Controla a quantidade de tempo, em segundos, para o cache de permissão de todas as ações de dano à entidade no mundo. Se o cache for acessado antes da expiração, o tempo será zerado. <br /> Obs: definir um valor muito alto pode resultar em resultados incorretos de permissão de danos à entidade. | 5 |
| cache-entity-spawn-expiration | Controla a quantidade de tempo, em segundos, para o cache de pesquisa de permissão de todas as ações no mundo. Se o cache for acessado antes da expiração, o tempo será zerado. <br />Nota: Este cache ocorrerá após caches especiais, como danos a entidades, explosões e física. <br />Nota: Definir um valor muito alto pode fazer com que os jogadores não vejam resultados adequados com suas ações. | 5 |
| cache-permission-lookup-expiration | Controla a quantidade de tempo, em segundos, para o cache de pesquisa de permissão de todas as ações no mundo. Se o cache for acessado antes da expiração, o tempo será zerado. <br /> Nota: Este cache ocorrerá após caches especiais, como danos a entidades, explosões e física. <br /> Nota: Definir um valor muito alto pode fazer com que os jogadores não vejam resultados adequados com suas ações. | 3 |
| cache-physics-tracking-expiration |  Controla a quantidade de tempo, em segundos, para o cache de permissão de todas as alterações físicas do bloco no mundo. <br /> Nota: Blocos como redstone geralmente armazenam em cache por mais tempo devido às repetidas chamadas feitas. <br /> Nota: Definir um valor muito alto pode fazer com que os jogadores não sejam rastreados corretamente durante as mudanças de bloco. | 5 |
| cache-player-highest-trust | <br /> Controla a quantidade de tempo, em segundos, para o cache de pesquisa de dados do jogador de maior confiança de declaração. Se o cache for acessado antes da expiração, o tempo será zerado. <br /> Nota: Definir um valor muito alto pode fazer com que os jogadores não vejam resultados adequados com suas ações. | 60 |
| dispenser-item-spawns | Controla se os spawns de itens do dispensador são ignorados. | TRUE |
| entity-damage-living-passive | Controla se os eventos de dano à entidade que contêm uma entidade passiva viva de origem/alvo, como dois animais brigando, são ignorados. | TRUE |
| entity-damage-monster | Controla se os eventos de dano de entidade que contêm um monstro de origem/alvo são ignorados. | TRUE |
| entity-damage-monster-other | Controla se os eventos de dano à entidade que contêm um monstro e outra entidade são ignorados. |
| entity-damage-source-living-passive | Controla se a fonte de dano da entidade ou o bloco direcionado a uma passiva viva são ignorados. | TRUE |
| entity-damage-source-monster | Controla se a fonte de dano da entidade ou o bloco que tem como alvo um monstro são ignorados. | TRUE |
| entity-interact-block | Controla se uma entidade que interage com um bloco é ignorada. | TRUE |
| entity-item-pickup-non-player | Controla se as coletas de itens de entidade feitas por não-jogadores são ignoradas. | TRUE |
| fall-non-player | Controla se as quedas de não jogadores são ignoradas. | TRUE |
| monster-player-damage | Controla se os ataques de monstros contra um jogador são ignorados. <br /> Nota: Isto não inclui danos de explosão. <br /> Nota: Se você precisar evitar danos causados por monstros em reivindicações, isso deverá permanecer falso. | FALSE |
| player-monster-damage | Controla se os ataques do jogador contra um monstro são ignorados. <br /> Nota: Isto não inclui danos de explosão. | TRUE |
| wilderness-ambient-spawns | Controla se as crias ambientais, como morcegos, são ignoradas na natureza. <br /> Nota: Se você quiser controlar spawns aquáticos em regiões selvagens, defina isto como falso. | TRUE |
| wilderness-animal-spawns | Controla se as crias de animais, como porcos, são ignoradas na natureza. <br /> Nota: Se você deseja controlar a criação de animais em áreas selvagens, defina como falso. | TRUE |
| wilderness-aquatic-spawns | Controla se as crias aquáticas, como lulas, são ignoradas na natureza. <br /> Nota: Se você quiser controlar spawns aquáticos em regiões selvagens, defina isto como falso. | TRUE |
| wilderness-liquid-flow | Controla se o fluxo de líquido é ignorado em áreas selvagens. <br /> Nota: Se você deseja controlar o fluxo de líquido em regiões selvagens, defina como falso. | TRUE |
| wilderness-monster-spawns | Controla se as criações de monstros, como trepadeiras, são ignoradas na natureza selvagem. <br /> Nota: Se você quiser controlar a aparição de monstros em regiões selvagens, defina isto como falso. | TRUE |
| xp-orb-drop | Controla se os orbes de experiência são ignorados quando descartados. | TRUE |

# permission
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| griefdefender-claim-group-priority | | -75 |
| griefdefender-claim-priority | | -60 |
| griefdefender-default-priority | | -100 |
| griefdefender-definition-priority | | -80 |
| griefdefender-option-priority | | 0 |
| griefdefender-override-priority | | -40 |
| griefdefender-trust-accessor-priority | | -73 |
| griefdefender-trust-builder-priority | | -71 |
| griefdefender-trust-container-priority | | -72 |
| griefdefender-trust-manager-priority | | -70 |
| griefdefender-trust-resident-priority | | -74 |

# playerdata
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| claim-block-system | Determina qual sistema de bloqueio de declarações usar para declarações. <br />Se definido como VOLUME, os blocos de reivindicação usarão o sistema de contagem de blocos para equilibrar a reivindicação 3D. <br />Se definido como AREA, o sistema padrão de contagem de blocos 2d será usado. | AREA |
| context-storage-type | O tipo de contexto usado ao armazenar playerdata no banco de dados do GD. <br />Os tipos disponíveis são: global, servidor, mundo. <br />Global armazenará dados compartilhados globalmente por todos os servidores. <br />O servidor armazenará dados por servidor. Nota: Isso requer que o nome do servidor seja definido corretamente na configuração de permissões. <br />O mundo armazenará dados por mundo.  | GLOBAL |
| force-server-only | <br /> If set to true, GD will only calculate player block data for claims loaded on THIS server. It will not include other servers with same LP server context. <br /> Note: This setting is only used with GD DB storage. <br /> Note: Use with CAUTION! | false |
| migrate-area-rate | A taxa pela qual dividir o total de cada sinistro acumulado. <br />Defina um valor maior que -1 para ativar. <br />Nota: Isto só deve ser usado ao migrar do volume (sistema 3D) para a área (sistema 2D). <br /> Neste sistema, um pedaço custa 256 blocos. <br />Isto requer que 'claim-block-system' seja definido como AREA. | -1 |
| migrate-volume-rate | A taxa pela qual multiplicar o total de cada sinistro acumulado. <br />Defina um valor maior que -1 para ativar. <br />Nota: Isto só deve ser usado ao migrar de área (sistema 2D) para volume (sistema 3D). <br />Cada pedaço vale 65.536 blocos no novo sistema, em comparação com 256 no antigo. <br />Isto requer que 'claim-block-system' seja definido como VOLUME. |-1 |
| per-world-claim-limits | Whether limiting claim options are checked per world instead of globally. Allows for finer per-world control when using global or server-wide playerdata. | false |
| reset-accrued-claim-blocks | Se ativado, redefine todos os bloqueios de reivindicações acumuladas de dados do jogador para corresponder ao custo total das reivindicações possuídas. <br />Exemplo: Se um jogador tiver 5 reivindicações básicas com um custo total de 1.000, isso definirá seus blocos de reivindicações acumulados para 1.000. <br />Nota: Isso também redefinirá todos os bloqueios de reivindicações de bônus para 0. É altamente recomendado fazer backup antes de usar. | FALSE |
| reset-migrations | Se ativado, redefine todos os sinalizadores de migração de playerdata para permitir outra migração. <br /> Obs: use isso com cuidado, pois pode facilmente atrapalhar os dados do bloco de reivindicação. É altamente recomendável fazer backup antes de usar. | FALSE |

# Provider
Gerencia provedores de plug-ins aos quais o GD se conecta para funcionalidade estendida.
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| BlueMap | Alterna se o GDhooks se comunica com o BlueMap | true |
| BossShopPro | Alterna se o GDhooks se comunica com o BossShopPro | true |
| ChestShop | Alterna se o GDhooks se comunica com o ChestShop | true |
| DynamicShop | Alterna se o GDhooks se comunica com o DynamicShop | true |
| Dynmap | Alterna se o GDhooks se comunica com o Dynmap | true |
| InsaneShops | Alterna se o GDhooks se comunica com o InsaneShops | true |
| MyPet | Alterna se o GDhooks se comunica com o MyPet | true |
| MythicMobs | Alterna se o GDhooks se comunica com o MythicMobs | true |
| QuickShop | Alterna se o GDhooks se comunica com o QuickShop | true |
| RevoltCrates | Alterna se o GDhooks se comunica com o RevoltCrates | true |
| Shop | Alterna se o GDhooks se comunica com o Shop | true |
| ShopChest | Alterna se o GDhooks se comunica com o ShopChest | true |
| Slabbo | Alterna se o GDhooks se comunica com o Slabbo | true |
| Slimefun | Alterna se o GDhooks se comunica com o Slimefun | true |
| UltimateShops | Alterna se o GDhooks se comunica com o UltimateShops | true |

# PvP
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| allow-fly | Se voar é permitido durante o PvP. | false |
| combat-logout | Se os jogadores devem ser mortos se saírem durante o combate pvp. | false |
| deny-messages | Se os jogadores recebem mensagens de negação de pvp. | True |
| enabled | Se a proteção pvp está habilitada para jogadores. <br />Nota: Desativar esta opção desativa todas as funcionalidades PvP no GriefDefender. | true |

# Town
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| auto-nature-restore | Se as cidades de sobrevivência serão automaticamente restauradas à natureza quando excluídas automaticamente. | FALSE |
| cleanup-task-interval | O intervalo em minutos para restaurar blocos em uma cidade expirada. | 5 |
| creation-cost | A quantidade necessária de fundos para criar uma cidade. <br />Nota: Isto requer um plugin Economy. | 0.0 |

# Visual
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| active-claim-visual-time | O tempo ativo, em segundos, para manter o visual de uma reivindicação mostrado ao jogador. <br />Nota: Se o valor for <= 0, GD usará o valor padrão. | 60 |
| active-create-block-visual-time | O tempo ativo, em segundos, para manter o visual do bloco de criação de uma reivindicação mostrado a um jogador. <br /> Obs: isso se aplica somente durante a criação da reivindicação. <br /> Nota: Se o valor for <= 0, GD usará o valor padrão. | 180 |
| admin-accent-block | O bloco de destaque visual usado para declarações administrativas. | minecraft:pumpkin |
| admin-corner-block | O bloco de canto visual usado para reivindicações administrativas. | minecraft:glowstone |
| admin-filler-block | O bloco de preenchimento visual usado para declarações administrativas. | minecraft:pumpkin |
| basic-accent-block | O bloco de destaque visual usado para reivindicações básicas. | minecraft:gold_block |
| basic-corner-block | O bloco de canto visual usado para reivindicações básicas. | minecraft:glowstone |
| basic-filler-block | O bloco de preenchimento visual usado para reivindicações básicas. | minecraft:gold_block |
| claim-create-block | O bloco visual usado durante a criação da declaração. | minecraft:diamond_block |
| client-visuals-per-tick | A quantidade de elementos visuais de bloco que um cliente pode receber por tick ao mostrar/ocultar reivindicações. | 12 |
| cuboid-level-visuals-2d | Se devem ser usados visuais cubóides, em sinistros 2D, durante a inspeção com níveis mínimo/máx de sinistro do proprietário entre 0 e 255. <br /> Nota: os visuais WECUI não estão associados a esta opção. <br /> Nota: Se ativado, isso enviará muitas atualizações de bloqueio aos jogadores, causando mais tensão no cliente, dependendo do tamanho da reivindicação. Use com cuidado. | false |
| error-accent-block | O bloco de destaque visual usado para visualizar um erro em uma reclamação. | minecraft:netherrack |
| error-corner-block | O bloco de canto visual usado para visualizar um erro em uma reclamação. | minecraft:redstone_ore |
| error-filler-block | O bloco de preenchimento visual usado para visualizar um erro em uma reclamação. | minecraft:netherrack |
| filler-spacing | O espaço entre cada bloco visual de preenchimento. | 10 |
| hide-borders-when-using-wecui | Se deve ocultar as bordas do bloco Glowstone/Gold ao usar WECUI. | false |
| hide-fillers-when-using-wecui | Se deve ocultar os preenchimentos de bloco ao usar WECUI. | true |
| hide-wecui-drag-visuals-2d | Se os recursos visuais de arrastar devem ser exibidos durante a criação de uma reivindicação no modo 2D. | true |
| nature-accent-block | O bloco de destaque visual usado no modo de restauração da natureza. | minecraft:diamond_block |
| nature-corner-block | O bloco de canto visual usado no modo restaurar natureza. | minecraft:diamond_block |
| subdivision-accent-block | O bloco de acento visual usado para reivindicações de subdivisão. | minecraft:white_wool ou minecraft:wool para versão legacy |
| subdivision-corner-block | O bloco de canto visual usado para reivindicações de subdivisão. | minecraft:iron_block |
| subdivision-corner-block | O bloco de canto visual usado para reivindicações de subdivisão. | minecraft:iron_block |
| subdivision-filler-block | O bloco de preenchimento visual usado para reivindicações de subdivisão. | inecraft:white_wool ou minecraft:wool para versão legacy |
| town-accent-block | O bloco de destaque visual usado para reivindicações da cidade. | minecraft:emerald_block |
| town-corner-block | O bloco de canto visual usado para reivindicações da cidade. | minecraft:glowstone |
| town-filler-block | O bloco de preenchimento visual usado para reivindicações da cidade. | minecraft:emerald_block |

# World
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| protected-worlds | Uma lista de mundos por nome ou localização de recursos que o GriefDefender deve proteger. Se estiver vazio, o GriefDefender protegerá todos os mundos. | [ ] |