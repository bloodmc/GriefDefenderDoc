---
title: Global Config
tag: Info
category: info
icon: config
---

A configuração padrão do GriefDefender oferece personalização estendida para o seu servidor. Abaixo está um detalhamento de todas as variáveis padrão para sua conveniência.  

:::: warning Algumas opções podem causar alterações irreparáveis em seus dados
Certifique-se de ter lido o subtexto encontrado ao lado das variáveis em seu arquivo [global.conf](/wiki/advanced/Global-Config.html)  
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
Versão baseada no arquivo de lançamento: GriefDefender 2.3.2-DEV4
<hr>

# Claim
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| auto-chest-claim-block-radius | Raio usado (em blocos) para reivindicação criada automaticamente quando um baú é colocado. Defina como -1 para desativar a criação de reivindicação de baú. | 4 |
| auto-nature-restore | Se as reivindicações de sobrevivência serão restauradas automaticamente à natureza quando excluídas automaticamente. | FALSE |
| auto-schematic-restore | Se as reivindicações de sobrevivência serão restauradas automaticamente para seu esquema de criação de reivindicação no abandono/expiração. <br />Observação: habilitar este recurso fará com que TODAS as reivindicações recém-criadas criem automaticamente um esquema especial que será usado para restaurar a reivindicação no abandono/expiração.<br />Observação: ativar este recurso desativará a capacidade de redimensionar as reivindicações.< br />Observação: É ALTAMENTE recomendado desabilitar a construção no deserto antes de usar este recurso para evitar que os jogadores explorem.<br />Observação: Também é recomendado usar APENAS este recurso em mundos recém-criados onde não há dados de jogador existentes .<br />Observação: isso NÃO afeta as exclusões. Se os administradores quiserem restaurar o esquema original, eles podem selecionar '__restore__' usando o comando /claimschematic.| FALSE |
| border-block-radius | Defina a borda da reivindicação de raio especificado (em blocos), centralizada na reivindicação. Se definido como 1, adiciona um raio adicional de 1 bloco protegido ao redor da reivindicação. <br />Observação: não é recomendável definir esse valor muito alto, pois o desempenho pode diminuir devido a pesquisas de reivindicação mais profundas. | 0 |
| claim-block-task | Se a tarefa de reivindicação de bloco deve ser executada para acumular blocos para os jogadores. <br />Observação: Se estiver no modelo econômico, use a configuração 'use-claim-block-task' na categoria economy. <br />Observação: Para configurar o valor acumulado, consulte a opção 'blocks-accrued-per-hour' em [Global](/br/wiki/basic/Options.html#global-options) | FALSE |
| claim-block-task-move-threshold | O limite mínimo de movimento (em blocos) necessário para receber os blocos de reivindicação acumulados. <br />Nota: A tarefa de reivindicar blocos é executada a cada 5 minutos, que é o tempo que cada jogador terá para mover a quantidade necessária de blocos. | 0 |
| claim-create-radius-limit | O limite de raio para o comando /claimcreate. | 256 |
| claims-enabled | Se a reivindicação está ativada ou não. (0 = Desativado, 1 = Ativado). | 1 |
| expiration-cleanup-interval | O intervalo em minutos para limpar reivindicações expiradas. Defina como 0 para desativar. | 63 |
| explosion-block-surface-blacklist | Uma lista de IDs de origem que não podem causar dano de explosão a blocos acima do nível do mar. | [ ] |
| explosion-entity-surface-blacklist | Uma lista de id's que não podem causar dano de explosão a entidades acima do nível do mar. | [ ] |
| explosion-surface-block-level | O nível do bloco 'Y' que é considerado a superfície para explosões. | 0 |
| inspection-tool | O item usado para inspecionar reivindicação com um clique com o botão direito. <br />Observação: coloque aspas vazias se não quiser atribuir nenhum item e usar o modo '/claim' exclusivamente. | ["minecraft:stick"](/br/wiki/basic/Claim-Management.html#suporte-a-custommodeldata) |
| modification-tool | O item usado para criar/redimensionar reivindicações com um clique direito.<br />Nota: Coloque entre aspas vazias se não quiser atribuir nenhum item e use o modo '/claim' exclusivamente. | ["minecraft:golden_shovel"](/br/wiki/basic/Claim-Management.html#suporte-a-custommodeldata) |
| piston-protection-in-claims | Se a proteção do pistão deve ser habilitada nas reivindicações. Nota: Isso não afeta o cruzamento dos pistões para outra reivindicação, que está sempre protegida. Isso apenas determina se o GD deve ou não processar pistões se não cruzar para outra reivindicação. | false |
| player-trapped-cooldown | O intervalo de uso, em segundos, ao usar o comando '/trapped'. | 300 |
| protect-tamed-entities | Se as entidades domesticadas devem ser protegidas em reivindicações. | true |
| reserved-claim-names | Uma lista de nomes de declarações reservadas para uso somente por administradores. | [ ] |
| restrict-world-max-height | Se deve restringir a reivindicação à altura máxima do mundo. | true |
| teleports-use-border-event | Se os teletransportes acionam eventos de borda de reivindicação. Predefinição: True. <br />Nota: Defina como False se você deseja que 'enter-claim' e 'exit-claim' não sejam acionados por teletransportes. | TRUE |

# Context
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| enchantments | Se os contextos de efeito de poção devem ser aplicados durante as verificações de permissão. | false |
|ignored-debug-contexts | Uma lista de valores de contexto ignorados durante a depuração. |
| player-equipment | Se os contextos de equipamento do jogador devem ser aplicados durante as verificações de permissão. | true |
| potion-effects | Se os contextos de efeito de poção devem ser aplicados durante as verificações de permissão. | true |

# Economy
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| bank-system | Habilitar ou não o sistema bancário para sinistros. Defina como verdadeiro para ativar. | FALSE |
| bank-transaction-log-limit | A quantidade de transações a serem mantidas para o histórico. | 60 |
|currency-symbol | O símbolo de moeda para mensagens de economia. Predefinição: $ | $ |
| economy-mode | Usa economia em vez de blocos de reivindicação de jogador para criação de reivindicação. Se verdadeiro, desativa o sistema de bloqueio de reivindicações em favor da economia. <br />Observação: Usar este modo desativa o comando '/buyblocks', pois a criação de reivindicação retirará fundos diretamente do saldo econômico do jogador. <br />Observação: Se os jogadores tiverem blocos de reivindicação existentes de configurações anteriores, um administrador deve usar o comando '/ecomigrateblocks' para converter o restante em moeda. | FALSE |
| rent-delinquent-task-apply-hour | A hora específica do dia para tentar obter os saldos de aluguel devidos dos locatários inadimplentes. <br />Nota: Este usa tempo militar e aceita valores entre 0-23. | 0 |
| rent-max-time-limit | Controla o limite máximo de tempo (horas ou dias) para o qual um proprietário de reivindicação pode definir seu aluguel máximo. <br />Observação: Isso afeta apenas os aluguéis reivindicados com um máximo especificado. Se nenhum máximo for especificado pelo proprietário da reivindicação, o locatário poderá alugar pelo tempo que desejar. | false |
| rent-restore-day-warning | Controla o dia em que um jogador deve começar a receber avisos sobre a expiração de seu aluguel alugado. <br />Ex. Se definido como '5', isso começará a enviar mensagens aos jogadores no login e na hora de aplicar o aluguel, quando faltam 5 dias para o vencimento. <br />Observação: Isso só se aplica se o proprietário tiver a opção 'restaurar aluguel' habilitada e o proprietário do aluguel definir um máximo. | 5 |
| rent-schematic-restore-admin | Controla se as reivindicações de administração alugadas usarão um esquema para restauração. <br />Observação: Se definida, a reivindicação criará um esquema no início do aluguel e o restaurará quando terminar. <br />Observação: Isso se aplica APENAS a locações com data máxima definida. | false |
| rent-sign | Se as placas de aluguel estão ativados. | FALSE |
| rent-system | Controla se o sistema de aluguel está ativado. | FALSE |
| rent-task-interval | O intervalo em minutos para verificar os pagamentos de aluguel devidos. Defina como '0' para desativar | 1 |
| rent-transaction-log-limit | A quantidade de transações a serem mantidas para o histórico. | 60 |
| sell-sign | Se as placas de venda estão ativados. | false |
| sign-update-interval | O intervalo em minutos para atualizar os dados da placa. Defina como '0' para desativar | 1 |
| tax-apply-hour | A hora específica do dia para aplicar o imposto a todas as reivindicações. <br />Nota: Este usa tempo militar e aceita valores entre 0-23. | 0 |
| tax-system | Se deve habilitar o sistema tributário para reivindicação. Defina como verdadeiro para ativar. | FALSE |
| tax-transaction-log-limit | A quantidade de transações a serem mantidas para o histórico. | 60 |


# Message
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| deny-message-action-bar | Controla se deve enviar mensagens de negação de reivindicação para a barra de ação. <br />Observação: definir como falso enviará mensagens para o bate-papo. | TRUE |
| enable-exit-chat-messages | Controla se as mensagens de saída do bate-papo são exibidas quando as mensagens de entrada e saída estão sendo enviadas para um jogador ao mesmo tempo. Por exemplo, se uma mensagem de título de entrada e saída for configurada em uma reivindicação, o título de saída será enviado para o bate-papo se esta configuração é true. | FALSE |
| enter-claim-player-messages | Controla se deve exibir o nome do jogador e reivindicar o nome de exibição como mensagem de entrada, se não estiver definido. <br />Defina como '1' para enviar mensagens para o bate-papo. <br />Defina como '2' para enviar mensagens para a barra de ação. <br />Defina como '3' para enviar mensagens para o título. <br /> Defina como 0 para desativar. | 2 |
| enter-exit-chat-show-gd-prefix | Se o prefixo GD deve ser mostrado nas mensagens de bate-papo de entrada/saída. | TRUE |
| gd-prefix | Controla o prefixo usado ao enviar mensagens. | [&bGD&r]  |
| greeting-farewell-action-bar | Controla se deseja enviar mensagens de saudação/despedida para a barra de ação por padrão. <br />Observação: definir como verdadeiro enviará mensagens para a barra de ação. <br />Observação: Isso só será definido se não houver nenhuma barra de ação definida na reivindicação. Nesse caso, ele usará o bate-papo. | FALSE |
| locale | Defina a localidade a ser usada para mensagens GP. Idiomas disponíveis: de_DE, en_US, es_ES, fr_FR, it_IT, pl_PL, pt_BR, ru_RU, tr_TR, zh_CN, zh_HK. Os dados são armazenados em ativos no jar. <br />Observação: O código do idioma deve estar em minúsculas e o código do país em maiúsculas. | "en_US" |
| locale-unicode-fix | Tenta ajustar as fontes unicode para representar melhor as fontes padrão do minecraft. <br />Nota: Se você estiver usando 'pl_PL' ou 'ru_RU', esta configuração deve ser definida como false. <br />Observação: Qualquer outro idioma que apresente desalinhamento nos menus de bate-papo deve desativar essa configuração. | TRUE |
| wilderness-default-message | Controla se a mensagem de entrada padrão do deserto é enviada aos jogadores. | TRUE |

# Migrators
# Bukkit
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| classic | Defina como true para ativar o migrador clássico. <br />Observação: Migra os dados de reivindicação clássica do GP e os dados GPFlags, se disponíveis, para o formato atual.<br />Nota: Recomenda-se fazer backup dos dados antes de usar. | FALSE | 
| classic-database | Migra o banco de dados do GP clássico. | FALSE |
| classic-playerdata-threshold | Controla o limite do último dia do jogador ativo para evitar a migração dos dados do jogador GP inativo. Para desativar, defina o valor como 0. <br />Observação: por exemplo, com o valor padrão de '180', o migrador migrará apenas os dados dos jogadores que jogaram nos últimos 180 dias. <br />Nota: Isso lida apenas com os dados do jogador de um jogador, onde as informações acumuladas/bloco de bônus são armazenadas. Essa configuração não tem efeito na migração de reivindicação. <br />Observação: Isso evita o armazenamento de dados de usuários inativos em LuckPerms, o que ajuda a manter a exibição do 'editor/lp' limpa. | 180 |
| griefdefender-file-to-database | Defina como true para migrar do formato de arquivo para o banco de dados. <br />Observação: O método de armazenamento deve ser definido como hocon para que funcione corretamente. <br />Observação: após a conclusão da migração, alterne o armazenamento para o banco de dados. <br />Observação: isso NÃO removerá os arquivos existentes caso você queira voltar. | FALSE |
| playerdata | Defina como true para habilitar o migrador de arquivo playerdata herdado do GriefDefender. <br /> Nota: Esta configuração não é para migrar os dados do jogador GriefPrevention. Em vez disso, use a opção 'clássica'. <br /> Nota: Migra o formato de arquivo playerdata herdado para armazenamento de permissões, como LuckPerms json ou armazenamento mysql. <br /> Nota: Antes de ativar isso, certifique-se de definir corretamente 'context-storage-type' na seção de dados do jogador desta configuração. <br /> Nota: É ALTAMENTE recomendado fazer backup de seu banco de dados de permissões antes de executar este migrador, pois todos os arquivos playersdata locais serão migrados para ele. <br /> Nota: NÃO execute este migrador em mais de um servidor se vários servidores compartilharem o mesmo banco de dados de permissões. | false |
| red-protect | Defina como true para habilitar o migrador de dados RedProtect. | FALSE |
| residence | Defina como verdadeiro para habilitar o migrador de dados de residência. | TRUE |
| worldguard | Defina como true para ativar o migrador de dados WorldGuard. <br />Observação: Apenas regiões cubóides são suportadas. <br />Nota: Recomenda-se fazer backup dos dados antes de usar. | FALSE |

# Sponge
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| griefprevention-bukkit |Defina como true para ativar o migrador bukkit de prevenção de luto. <br />Observação: Migra os dados de reivindicação clássicos do GP bukkit e os dados GPFlags, se disponíveis, para o formato atual. <br />Nota: Recomenda-se fazer backup dos dados antes de usar. | FALSE |
| griefprevention-sponge | Defina como true para ativar o migrador de esponja de prevenção de luto. <br />Observação: Migra os dados de solicitação de esponja GP para o formato atual. <br />Nota: Recomenda-se fazer backup dos dados antes de usar. | FALSE |
| red-protect | Defina como true para habilitar o migrador de dados RedProtect. <br />Nota: Todos os dados do RedProtect serão convertidos em dados básicos de sinistros. | FALSE |
| worldguard | Defina como true para ativar o migrador de dados WorldGuard. <br />Observação: Apenas regiões cubóides são suportadas. <br />Nota: Recomenda-se fazer backup dos dados antes de usar. | FALSE |

# Mod
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| entity-move-event | Permite que a reivindicação de entrada e saída de GD suporte o movimento de não-jogadores, como monstros e animais. | Default: false |
| block-id-convert-list | # Usado para substituir id de bloco genérico para seu id real durante TE e uso de item, se disponível. Adicione o ID do bloco de destino à lista se desejar forçar uma conversão quando detectado. # Nota: Isso é útil para mods como o IC2, que usa o id genérico 'ic2:te' para seu bloco múltiplo. | "gregtech:machine", "ic2:te" |
| fakeplayer-identifiers | Contém uma lista de strings usadas para identificar um fakeplayer por UUID ou nome. Para usar, adicione o UUID ou nome do fakeplayer. | ["41C82C87-7AfB-4024-BA57-13D2C99CAE77", BFC3377F-C3C9-3382-9DA6-79B50A9AFE57, "0D0C4CA0-4FF1-11E4-916C-0800200C9A66", "[Minecraft]", "OpenModsFakethis*"] |
| mod-id-map | Usado para mapear um item/bloco/entidade de mod desconhecido para um id de mod. Para usar, adicione o pacote mod com um mapeamento para um id de mod. Ex. 'com.pixelmonmod.*', 'pixelmon' mapearia uma entidade contendo o nome da classe 'com.pixelmonmod.*' para 'pixelmon' | "com.pixelmonmod.*"=pixelmon |
| tile-id-nbt-map | Usado para substituir IDs genéricos de tileentity por seus IDs reais durante o uso do TE. Adicione o id TE de destino como chave e a chave NBT onde o ID é armazenado como valor. | "gregtech:machine"=MetaId |
 

# Optimization
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
|async-claim-tool-actions | Se as ações da ferramenta de reivindicação do jogador devem ser processadas de forma assíncrona para desempenho. (Padrão: true) <br /> Observação: se você encontrar algum problema de encadeamento assíncrono, desative essa configuração. | TRUE |
| async-player-claim-visuals | Se os visuais de reivindicação do jogador devem ser processados de forma assíncrona para desempenho. (Padrão: true) <br /> Observação: se você encontrar algum problema de encadeamento assíncrono, desative essa configuração. | TRUE |
| block-item-drops | Controla se deve ignorar quedas de itens de fontes de bloco. <br /> Nota: Isso só é acionado quando um jogador quebra um bloco. | TRUE |
cache-entity-damage-expiration | Controla a quantidade de tempo, em segundos, para o cache de permissão de todas as ações de dano de entidade no mundo. Se o cache for acessado antes da expiração, o tempo será redefinido. <br /> Observação: definir um valor muito alto pode resultar em resultados de permissão de dano de entidade incorretos. | 5 |
| cache-permission-lookup-expiration | Controla a quantidade de tempo, em segundos, para o cache de pesquisa de permissão de todas as ações no mundo. Se o cache for acessado antes da expiração, o tempo será redefinido. <br /> Nota: Este cache ocorrerá após caches especiais, como dano de entidade, explosões e física. <br /> Nota: Definir isso muito alto pode fazer com que os jogadores não vejam os resultados adequados com suas ações. | 3 |
| cache-physics-tracking-expiration |  Controla a quantidade de tempo, em segundos, para o cache de permissão de todas as alterações físicas do bloco no mundo. <br /> Nota: Blocos como redstone geralmente armazenam em cache por mais tempo devido às chamadas repetidas feitas. <br /> Nota: Definir um valor muito alto pode fazer com que os jogadores não sejam rastreados corretamente durante as mudanças de bloco. | 5 |
| dispenser-item-spawns | Controla se os spawns de itens dispensadores são ignorados. | TRUE |
| entity-damage-living-passive | Controla se os eventos de dano de entidade que contêm uma entidade passiva viva de origem/alvo, como dois animais lutando, são ignorados. | TRUE |
| entity-damage-monster | Controla se os eventos de dano de entidade que contêm um monstro de origem/alvo são ignorados. | TRUE |
| entity-damage-monster-other | Controla se os eventos de dano de entidade que contêm um monstro e outra entidade são ignorados. |
| entity-damage-source-living-passive | Controla se a fonte de dano da entidade ou o bloco que visa um passivo vivo é ignorado. | TRUE |
| entity-damage-source-monster | Controla se a fonte de dano da entidade ou o bloco que visa um monstro é ignorado. | TRUE |
| entity-interact-block | Controla se uma entidade interagindo com um bloco é ignorada. | TRUE |
| entity-item-pickup-non-player | Controla se as coletas de itens de entidade feitas por não jogadores são ignoradas. | TRUE |
| fall-non-player | Controla se as quedas de não jogadores são ignoradas. | TRUE |
| monster-player-damage | Controla se os ataques de monstros contra um jogador são ignorados. <br /> Nota: Isso não inclui dano de explosão. <br /> Nota: Se você precisa evitar dano de monstros em reivindicações, isso deve permanecer falso. | FALSE |
| player-monster-damage | Controla se os ataques do jogador contra um monstro são ignorados. <br /> Nota: Isso não inclui dano de explosão. | TRUE |
| wilderness-ambient-spawns | Controla se os spawns do ambiente, como morcegos, são ignorados na selva. <br /> Nota: Se você deseja controlar os spawns aquáticos em regiões selvagens, defina como falso. | TRUE |
| wilderness-animal-spawns |Controla se as crias de animais, como porcos, são ignoradas na selva. <br /> Nota: Se você deseja controlar a desova de animais na selva, defina como falso. | TRUE |
| wilderness-aquatic-spawns | Controla se os spawns aquáticos, como lulas, são ignorados na selva. <br /> Nota: Se você deseja controlar os spawns aquáticos na natureza, defina isso como false. | TRUE |
| wilderness-liquid-flow | Controla se o fluxo de líquido é ignorado no deserto. <br /> Nota: Se você deseja controlar o fluxo de líquido na natureza, defina isso como false. | TRUE |
| wilderness-monster-spawns | Controla se os spawns de monstros, como creepers, são ignorados na selva. <br /> Nota: Se você deseja controlar a geração de monstros na natureza, defina isso como false. | TRUE |
| xp-orb-drop | Controla se orbes de experiência são ignorados quando descartados. | TRUE |


# Permission
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| griefdefender-claim-group-priority | A prioridade do grupo de permissões do grupo de reivindicações. | -80 |
| griefdefender-claim-priority | A prioridade do grupo de permissão de reivindicação. | -60 |
| griefdefender-default-priority | A prioridade padrão do grupo de permissões. | -100 |
| griefdefender-default-priority | A prioridade do grupo de permissão padrão. | -80 |
| griefdefender-option-priority | A prioridade do grupo de permissão de opção. | 0 |
| griefdefender-override-priority | A prioridade do grupo de permissão de substituição. | -40 |
| griefdefender-trust-priority | A prioridade do grupo de permissão de confiança. | -70 |

# Player Data
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| claim-block-system | Determina qual sistema de bloqueio de sinistros usar para sinistros. (Padrão: AREA) <br />Se definido como VOLUME, os blocos de reivindicação usarão o sistema de contagem de pedaços para balancear a reivindicação 3D. <br />Se definido como AREA, o sistema padrão de contagem de blocos 2d será usado. | AREA |
| context-storage-type | O tipo de contexto usado ao armazenar dados do jogador em um banco de dados de permissões. <br />Os tipos disponíveis são: global, servidor, mundo. (Padrão: global) <br />Global armazenará dados globalmente compartilhados por todos os servidores. <br />Servidor armazenará dados por servidor. Observação: isso requer que o nome do servidor seja definido corretamente na configuração de permissões. <br />O mundo armazenará dados por mundo.  | GLOBAL |
| migrate-area-rate | A taxa para dividir o total de cada bloco de reivindicação acumulado. <br />Defina um valor maior que -1 para habilitar. (Padrão: 256). <br />Nota: Só deve ser usado ao migrar de volume (sistema 3D) para área (sistema 2D). <br /> Nesse sistema, um chunk custa 256 blocos. <br />Isso requer que 'claim-block-system' seja definido como AREA. | -1 |
| migrate-volume-rate |A taxa para multiplicar cada total de blocos de sinistros acumulados. <br />Defina um valor maior que -1 para habilitar. (Padrão: 256). <br />Observação: Só deve ser usado ao migrar de área (sistema 2D) para volume (sistema 3D). <br />Cada bloco vale 65.536 blocos no novo sistema, em comparação com 256 no antigo. <br />Isso requer que 'claim-block-system' seja definido como VOLUME. |-1 |
| reset-accrued-claim-blocks | Se ativado, redefine todos os blocos de reivindicações acumulados de dados do jogador para corresponder ao custo total das reivindicações possuídas. <br />Exemplo: Se um jogador tiver 5 reivindicações básicas com um custo total de 1000, isso definirá seus blocos de reivindicação acumulados para 1000. <br />Nota: Isso também redefinirá todos os blocos de reivindicação de bônus para 0. É altamente recomendável recomendado fazer backup antes de usar. | FALSE |
| reset-migrations | Se ativado, redefine todos os sinalizadores de migração de dados do jogador para permitir outra migração. <br /> Observação: use isso com cuidado, pois pode atrapalhar facilmente os dados do bloco de reivindicação. É altamente recomendável fazer backup antes de usar. | FALSE |

# Provider
Gerencia provedores de plug-ins aos quais o GD se conecta para funcionalidade estendida.
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| BlueMap |Alterna se o GDhooks se comunica com o BlueMap | true |
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
| enabled  | Se a proteção pvp está habilitada para os jogadores. <br />Nota: Desativar isso desabilita todas as funcionalidades PvP no GriefDefender. | true |

# Town
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| auto-nature-restore | Se as cidades de sobrevivência serão restauradas automaticamente à natureza quando excluídas automaticamente. | FALSE |
| clan-require-town | Requer uma cidade para ser possuída por MCClans. <br />Nota: Isto é apenas para Sponge. | TRUE |
| cleanup-task-interval | O intervalo em minutos para restaurar blocos em uma cidade expirada. | 5 |
| creation-cost | A quantidade necessária de fundos para criar uma cidade. <br />Nota: Isso requer um plug-in Economy. | 0.0 |

# Visual
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| active-claim-visual-time | O tempo ativo, em segundos, para manter os visuais de uma reivindicação mostrados a um jogador. <br />Observação: Se o valor for <= 0, o GD usará o valor padrão. | 60 |
| ativo-criar-bloco-visual-time | O tempo ativo, em segundos, para manter o visual do bloco de criação de uma reivindicação mostrado a um jogador. <br />Observação: isso se aplica apenas durante a criação da reivindicação. <br />Observação: Se o valor for <= 0, o GD usará o valor padrão. | 180 |
| client-visuals-per-tick | A quantidade de visuais de bloco que um cliente pode receber por tick ao mostrar/ocultar reivindicações. | 12 |
| cuboid-level-visuals-2d |Se deve usar visuais cubóides, em reivindicações 2D, durante a inspeção com níveis mínimos/máximos de reivindicação do proprietário entre 0 e 255 ou 0 e 319 para MC 1.17+. <br />Nota: Os visuais WECUI não estão associados a esta opção. <br />Observação: Se ativado, isso enviará muitas atualizações de bloqueio aos jogadores, causando mais tensão no cliente, dependendo do tamanho da reivindicação. Use com cuidado. | FALSE |
| fill-spacing | O espaço entre cada bloco visual de preenchimento. | 10 |
| hide-borders-when-using-wecui | Se deve ocultar as bordas do bloco Glowstone/Gold ao usar o WECUI. | FALSE |
| hide-fillers-when-using-wecui | Se deve ocultar os preenchimentos de bloco ao usar WECUI. | TRUE |
| hide-wecui-drag-visuals-2d | Se os visuais de arrastar devem ser exibidos durante a criação de uma reivindicação no modo 2D. | TRUE |
| claim-create-block |O bloco visual usado durante a criação da declaração. | minecraft:diamond_block |
| admin-accent-block | O bloco de destaque visual usado para declarações de administrador. | minecraft:pumpkin |
| admin-corner-block | O bloco de canto visual usado para declarações de administrador. | minecraft:glowstone |
| admin-filler-block | O bloco de preenchimento visual usado para declarações de administrador. | minecraft:pumpkin |
| basic-accent-block | O bloco de destaque visual usado para reivindicações básicas. | minecraft:gold_block |
| basic-corner-block | O bloco de canto visual usado para reivindicações básicas. | minecraft:glowstone |
| basic-filler-block | O bloco de preenchimento visual usado para reivindicações básicas. | minecraft:gold_block |
| error-accent-block | O bloco de destaque visual usado para visualizar um erro em uma reivindicação. | minecraft:netherrack |
| error-corner-block | O bloco de canto visual usado para visualizar um erro em uma reivindicação. | minecraft:redstone_ore |
| error-filler-block | O bloco de preenchimento visual usado para visualizar um erro em uma reivindicação. | minecraft:diamond_block |
| subdivision-accent-block | O bloco de destaque visual usado para reivindicações de subdivisão. | minecraft:white_wool or minecraft:wool para versões legadas |
| subdivision-corner-block | O bloco de canto visual usado para reivindicações de subdivisão. (Default: minecraft:iron_block) | minecraft:iron_block |
| subdivision-filler-block |O bloco de preenchimento visual usado para reivindicações de subdivisão. (Default: minecraft:white_wool ou minecraft:wool para versões legadas) | minecraft:white_wool |
| town-accent-block | O bloco de destaque visual usado para reivindicações da cidade. (Default: minecraft:emerald_block) | minecraft:emerald_block |
| town-corner-block | O bloco de canto visual usado para reivindicações da cidade. (Default: minecraft:glowstone) | minecraft:glowstone |
| town-filler-block | O bloco de preenchimento visual usado para reivindicações da cidade. (Default: minecraft:emerald_block) | minecraft:emerald_block |

# World
| Variável | Descrição | Valor padrão |
| --------- | ----------- | ----------- |
| protected-worlds |Uma lista de mundos por nome ou localização de recursos que o GriefDefender deve proteger. Se vazio, GriefDefender protegerá todos os mundos. | [ ] |