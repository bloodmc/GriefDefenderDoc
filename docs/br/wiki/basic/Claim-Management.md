---
title: Gestão de Reivindicações
tag: Claim
category: claim
icon: manage
---

GriefDefender é um plugin que fornece funcionalidade de proteção de região de automática, oferecendo opções adicionais para ajustar aspectos como portas, baús e permissões de construção para jogadores ou grupos de jogadores! Abaixo algumas instruções básicas para gerenciamento de reivindicações para um controle mais personalizado sobre suas reivindicações para o seu servidor, confira a [página de definição de bandeiras](https://github.com/bloodmc/GriefDefender/wiki/Flag-Definitions-GUI).

Todos os exemplos estão com os padrões no momento em que escrevo isso em mente.

Para obter exemplos detalhados de como gerenciar certos aspectos de suas reivindicações, consulte a seção [Gerenciamento de reivindicações](/br/faq/Claim-Management.html) no [FAQ](/br/faq/)

## Criação de Reivindicação

Um jogador pode criar reivindicações em dois tipos de modos.

### 2D 

Em modo 2D cria uma reivindicação por `AREA` (X e Z). Ele cria a reivindicação da rocha-mãe (bedrock) (ponto mais baixo do bloco) ao céu (máximo Y nível 320) no mundo em que você está. Este modo é o mais amigável, pois não exige que o jogador se preocupe com a altura do bloco ou outros jogadores reivindicando acima ou abaixo de suas reivindicações. Por padrão, todos os jogadores usam esse modo como padrão, a menos que a meta-opção `griefdefender.create-mode` esteja definida para um modo diferente.
Veja https://github.com/bloodmc/GriefDefender/wiki/Options-(Meta)#claim-options para obter mais informações sobre opções de reivindicação. 

### 3D

Em modo 3D cria uma reivindicação por `VOLUME` (X, Y e Z). É o mesmo que 2D, exceto que respeita a altura do bloco de suas seleções. Este modo é ideal para subdivisões (reivindicações em modo subdivisão ou de marcação de lã branca). Por exemplo, se você deseja criar um edifício com andares, pode usar este modo para que a altura seja respeitada.
Nota: Para mudar para este modo, use o comando `/cuboid` ou `/gd cuboid`. Para sair de volta ao modo 2D, digite o mesmo comando.

### Forçar os jogadores a usar o padrão 3D no login

Se você quiser forçar os jogadores a usar o modo padrão de reivindicação 3D no login, defina `griefdefender.create-mode` para `VOLUME` em um grupo ou player de LP.
Nota: Isso não significa que um jogador não pode alternar entre os modos, apenas os padroniza para o que está definido no login.


Para começar a criar uma reivindicação, primeiro certifique-se de que está no modo de reivindicação correto (2D ou 3D) e, em seguida, faça um dos seguintes

1. Mude para a ferramenta de reivindicação que por padrão é um `minecraft:golden_shovel` (Pá de Ouro)
OU
2. Mude para o modo de reivindicação usando o comando `/claim` ou `/claimmode`.
Observação: o modo de reivindicação não requer o jogador utilizar ferramentas em mãos.

O modo de reivindicação tem a seguinte funcionalidade

* Clique-Esquerdo para inspecionar as reivindicações existentes com base no cursor do mouse. O primeiro acerto do bloco não aéreo será a reivindicação que ele inspeciona.
* Shift + Clique-Esquerdo para verificar as reivindicações existentes ao seu redor.
* Clique-Direito para criar uma nova reivindicação. Isso requer 2 pontos de bloqueio para ser concluído. Se estiver no modo 2D, basta selecionar 2 pontos em formato quadrado. Se estiver no modo 3D, faça o mesmo que 2D, mas a altura do bloco será importante, então escolha a posição de bloco mais baixa e mais alta que você deseja que sua reivindicação seja.


Assim que você tiver a ferramenta de reivindicação adequada equipada ou estiver em `/claimmode`, é hora de decidir qual tipo de reivindicação você deseja criar.


Existem quatro tipos de reivindicações que um usuário pode criar

1. Administrativa - Use `/adminclaims` ou`/gd mode admin` para alternar.
2. Básica - Use `/basicclaims` ou`/gd mode basic` para alternar.
3. Subdivisão - Use `/subdivideclaim 'ou `/gd mode subdivide` para o alternar.
4. Cidade - Use `/townclaims` ou`/gd mode town` para mudar.


### Reivindicação administrativa

Uma reivindicação administrativa tem os seguintes recursos

* Sem restrições de tamanho.
* Não custa nada para criar.
* Pode ser criado em torno de qualquer reivindicação existente.
* Pode alugar.
* Usado apenas pelos administradores.

NOTA: Use `/adminclaims` ou`/gd mode admin` para alternar para este modo de tipo de reivindicação.

### Reivindicação básica

Uma reivindicação básica tem os seguintes recursos

* 5x5 Restrição de tamanho no modo 2D.Restrição de tamanho 5x5x5 no modo 3D.
* Pode ser vendido, alugado ou transferido para outro jogador.
* Requer blocos de reivindicação.

Este é o modo de tipo de reivindicação padrão ao equipar a ferramenta de reivindicação (minecraft:golden_shovel).
Nota: Use `/basicclaims` ou `/gd mode basic` Para mudar para este modo de tipo de reivindicação.

### Reivindicação de subdivisão ou apenas subdivisão

Uma reivindicação de subdivisão ou apenas subdivisão tem os seguintes recursos

* Restrição de tamanho 1x1 no modo 2D.Restrição de tamanho 1x1x1 no modo 3D.
* Pode ser vendido, alugado ou transferido para outro jogador.
* Não requer blocos de reivindicação para ser criado pelo proprietário.


### Reivindicação da cidade

Uma reivindicação da cidade tem as seguintes capacidades

* 32x32 Restrição de tamanho no modo 2D.32x32x32 Restrição de tamanho no modo 3D.
* Requer blocos de reivindicação.
* Suporta reivindicações básicas dentro.
* Um limite de criação de 1, o que significa que você só pode criar 1 cidade por padrão.
Nota: Isso pode ser ajustado mudando `griefdefender.create-limit` para um valor superior a 1 com `gd_claim_default=town` contexto. 


Nota: Para um jogador reivindicar pedaços, eles precisam das permissões e blocos de reivindicação suficientes para o tamanho de sua reivindicação que pode ser configurada com [Opções](/br/wiki/basic/Options.html).

Veja [Tipos de reivindicação](/br/wiki/basic/Claim-Types.html) para obter mais informações sobre cada tipo de reivindicação.

### Pá de ouro
Você cria reivindicações com uma pá de ouro (o item pode ser alterado nas configurações), que também podem alterar o tamanho e a posição da reivindicação. Lembre-se de que existem comandos para alternar o tipo e o modo de reivindicação, `/adminclaims`, `/townclaims`, `/basicclaims`, `/subdivideclaims`!

* Criando uma nova reivindicação: Clique-Direito do mouse em dois pontos para marcar os cantos (também chamado como Conjunto de Cantos)
* Redimensionamento de uma reivindicação: Clique-Direito do mouse em uma reivindicação existente para ver os marcadores.Clique com o botão direito do mouse em um bloco de canto e, novamente, em uma posição diferente para mover esse canto.
* Operações de cancelamento: guardando uma pá de ouro sem concluir uma operação, cancelará todas as ações

A pá também pode ser usada para subdividir uma reivindicação básico.Para mudar para esse modo, use `/claimsubdivide`. Todos os três tipos de reivindicações principais apóiam as reivindicações diretas da subdivisão (Marcada com Lã Branca) - cidade, administrativa e básica.

### Graveto
Ferramenta básica, você pode usá-la para indicar a posição das reivindicações e identificar quem são os proprietários das reivindicações.

* Clicar com o botão direito mostra os locais de reivindicações existentes
* Desligue o clique com o botão direito do clique em busca de todas as reivindicações em um raio de 100 blocos e mostra sua localização
* Clique de cliques à esquerda oculta os marcadores


## Identificadores de reivindicação

Os identificadores de reivindicação permitem que os jogadores criem IDs exclusivos para suas reivindicações.
Todos os identificadores de reivindicação são criados usando o comando `/claimid <Identificador>`  
O principal objetivo do uso de identificadores de reivindicações é obter a capacidade de usar no final da maioria dos comandos.
Anteriormente, todos os jogadores eram obrigados a estar na reivindicação que desejaria gerenciar. Com os identificadores de reivindicação, o jogador agora pode simplesmente usar os identificadores de reivindicação no final dos comandos para gerenciá-las sem precisar está na reivindicação que está no local.
Por exemplo, se um jogador quisesse verificar as informações de uma reivindicação específica, poderia usar `/claiminfo <Identificador>`

### Tipos

Existem 4 tipos de identificadores de reivindicação

#### Admin

Os identificadores de reivindicação do administrador são únicos em todas as reivindicações de administrador.
Esses identificadores podem ser acessados via comandos com formato `admin:<identifier>`  

#### Do utilizador

Os identificadores de reivindicação do usuário são únicos em todas as reivindicações pessoais do usuário.
Esses identificadores podem ser acessados via comandos com formato `<identifier>`  

#### Região selvagem

Os identificadores de reivindicação da deserto são únicos em todas as reivindicações do deserto.
Esses identificadores podem ser acessados via comandos com formato `wilderness:<identifier>`

#### Outro usuário

Os administradores podem acessar os identificadores de reivindicação pessoal de qualquer jogador usando o formato `<player_name>:<identifier>` em um comando.

### Armazenamento

Todos os identificadores de reivindicação são armazenados em `./GriefDefender/claimnames.conf`  


## Nomes de exibição de reivindicações

Os nomes de exibição de reivindicações não são exclusivos e usados apenas para fins de exibição.
Eles permitem que um jogador nomeie suas reivindicações qualquer coisa para comandos como `/claimlist`.  
Para definir um nome de exibição de reivindicação, use o comando `/claimdisplayname <name>`  

## Snapshots de reivindicação

Os snapshots de reivindicação permitem que um usuário faça backup de todos os dados de reivindicação associados a aquela reivindicação específica, incluindo permissões.
Exemplo: Você pode salvar uma área da loja, sem itens, e caso queirá restaurar para o jeito que você salvou, você usa os snapshots para fazer isso.

### Tipos

#### Public

Os snapshots de reivindicação pública são acessíveis por todos os usuários.
Os dados são armazenados em `./GriefDefender/snapshots/public/<group>/<snapshotname>.conf`

#### Admin

Os snapshots de reivindicação de administrador são acessíveis apenas por administradores.
Os dados são armazenados em `./GriefDefender/snapshots/admin/<group>/<snapshotname>.conf`


#### Do utilizador

Os snapshots de reivindicação do usuário são acessíveis apenas pelo Criador.
Os dados são armazenados em `./GriefDefender/snapshots/user/<player_uuid>/<snapshotname>.conf`


#### Reivindicação

A reivindicação de snapshots locais são acessíveis apenas na reivindicação em que o instantâneo foi criado.
Os dados são armazenados em `./GriefDefender/worlds/<dimension_type>/<world_name>/snapshots/<claim_uuid>/<snapshotname>.conf`

### Interface

Execute `/claimsnapshot` sem args para lançar a GUI
As guias a seguir estão disponíveis

#### Reivindicação
* Mostra snapshots de reivindicação que você está de pé
* snapshots serão listados em ordem alfabética

#### Do utilizador
* Mostra os snapshots dos jogadores que você ou confiável criaram.
* snapshots serão listados em ordem alfabética

#### público
* Mostra snapshots públicos criados por administradores
* Os snapshots serão listados pelo grupo e clicando em grupo mostrará a lista normal

#### admin
* Mostra snapshots de administrador criados por administradores
* Os snapshots serão listados pelo grupo e clicando em grupo mostrará a lista normal

### Exemplos de comando


1. Crie um snapshot do jogador chamado 'Store' não vinculado a uma reivindicação e apenas copie dados de reivindicação e dados de permissão
`/claimsnapshot create store type=user option=false`
2. Crie um snapshots de administrador chamado 'spawn' e armazene -o em grupo 'vanha'  
`/claimsnapshot create spawn type=admin group=vanha`
3. Crie um snapshots público chamado 'home' e armazene-o em grupo 'build'  
`/claimsnapshot create home type=public group=build`
4. Aplique snapshots da etapa 2 à reivindicação atual
`/claimsnapshot apply spawn type=admin group=vanha`
5. Aplique snapshots da etapa 2 à reivindicação atual com configurações de aplicação personalizadas  
`/claimsnapshot apply spawn type=admin group=vanha option:false trust:false`  



## Grupos de reivindicação

Os GRUPO-REIVINIDICAÇÃO permitem que 2 ou mais reivindicações usem as mesmas permissões.
Isso é útil em situações em que você tem um GRUPO-REIVINIDICAÇÃO em que as permissões precisam ser sincronizadas.

### Tipos

Existem 2 tipos de GRUPO-REIVINIDICAÇÃO

#### admin

Grupos de reivindicações de administrador são acessíveis apenas por administradores.
Data is stored in `./GriefDefender/claimgroups/admin/<claimgroup_name>.conf`

#### Do utilizador

Os GRUPO-REIVINIDICAÇÃO de usuários são acessíveis apenas pelo usuário que criou o grupo.
Os dados são armazenados em `./GriefDefender/claimgroups/user/<player_uuid>/<claimgroup_name>.conf`

### Interface

Execute `/claimgroup` sem args para lançar a GUI
As guias a seguir estão disponíveis

#### Do utilizador
* Mostra grupos de reivindicação de jogadores que você criou.
* Clicar no grupo de reivindicações mostrará todas as reivindicações unidas ao grupo.
* GRUPO-REIVINIDICAÇÃO serão listados em ordem alfabética

#### admin
* Mostra grupos de reivindicações administrativas criados por administradores
* Clicar no grupo de reivindicações mostrará todas as reivindicações unidas ao grupo.
* GRUPO-REIVINIDICAÇÃO serão listados em ordem alfabética


Para criar um GRUPO-REIVINIDICAÇÃO, clique no `+` Assine e insira um nome para o GRUPO-REIVINIDICAÇÃO.
Para remover um GRUPO-REIVINIDICAÇÃO, clique no `-` Assine e insira um nome para o GRUPO-REIVINIDICAÇÃO.
Para ingressar em um grupo de reivindica `Unir-se` botão ao lado do GRUPO-REIVINIDICAÇÃO.  botão ao lado do grupo de reivindicações.
Para desconectar um grupo de reivindica `Desunir` botão ao lado do GRUPO-REIVINIDICAÇÃO.
NOTA: Retirar uma reivindicação de um grupo, fará com que a reivindicação use suas permissões locais.

### Exemplos de comando

1. Para criar um grupo de reivindicação de usuário chamado `tech`  
`/claimgroup create tech`  
2. Para ingressar na reivindicação, um jogador está no grupo de reivindicação `tech`  
`/claimgroup join tech`  
3. Para ingressar em uma reivindicação com identificador `stronghold1` para reivindicar o grupo `tech`  
`/claimgroup join tech stronghold1`  
4. Para desconectar uma reivindicação que um jogador está no grupo de reivindicações `tech`  
`/claimgroup unjoin`  
4. Para criar um grupo de reivindicações de administrador chamado `evento`  
`/claimgroupadmin create evento`  


## Configurações da reivindicação

Para obter informações gerais sobre o uso de reivinidicações `/claiminfo` enquanto estava de pé neles.Passe o mouse sobre as coisas para encontrar vários detalhes que você pode alterar diretamente sem inserir nenhum comando.
Também existem comandos para alterar o nome da reivindicação, a saudação e a despedida.  

![Detalhes reivindicados](https://i.imgur.com/6erpZLa.png)

Campo                              | Descrição |
-----------------------------------|-------------|
```Type```| O tipo de reivindicação.<br /> NOTA: Os tipos de reivindicação 2D protegem o Bedrock para o céu por padrão.<br /> NOTA: Os tipos de reivindicação 3D incluem altura (eixo y) e protegem apenas a área selecionada no momento da criação de reivindicações.
```ID```|O identificador de reivindicação amigável exclusiva.Veja [Identificadores de reivindicação](#identificadores-de-reivindicacao)
```Display Name```| O nome da exibição da reivindicação.Veja [Nomes de exibição de reivindicações](#nomes-de-exibicao-de-reivindicacoes). <br />Nota: Os nomes de exibição suportam a formatação, não são únicos e podem ser definidos como qualquer coisa.
```Owner```| O dono da reivindicação.
```Claim Group```| O grupo de reivindicações que essa reivindicação faz parte.Veja [Grupos de reivindicação](#grupos-de-reivindicacao)
```Spawn```| Os usuários da Spawn de reivindicação se teletransportarão ao usar a reivindicação de teletransporte na Interface.
```Inherit```| Se a reivindicação herda as permissões de bandeira da reivindicação principal.<br /> Nota: Use `/claiminherit` para alternar o valor.
```Expired```| Se a reivindicação expirou devido à inatividade.
```For Sale```| Se a reivindicação está atualmente à venda.
```Raid```| Se a reivindicação apóia as ataques da vila.
```Deny Messages```| Se a reivindicação mostra mensagens de negação de proteção. (Mensagem que diz que não tem permissão para quebrar/colocar/interagir com item ou entidade)
```Greeting```| A mensagem de entrada de reivindicação de reivindicação.<br /> Nota: Use `/claimgreeting \<message\>|clear|none`.
```Farewell```| A mensagem de saída da reivindicação de reivindicação.<br /> Nota: Use `/claimfarewell \<message\>|clear|none`.
```Enter Title```| A reivindicação entra no título de reivindicação.<br /> Nota: Use `/claimtitle enter main \<title\>|clear|none`.
```Enter Subtitle```| A reivindicação entra no título de reivindicação.<br /> Nota: Use `/claimtitle enter sub \<title\>|clear|none`.
```Exit Title```| O título de saída da reivindicação de reivindicação.<br /> Nota: Use `/claimtitle exit main \<title\>|clear|none`.
```Exit Subtitle```| O título de saída da reivindicação de reivindicação.<br /> Nota: Use `/claimtitle exit sub \<title\>|clear|none`.


![Detalhes reivindicados](https://i.imgur.com/65dcUwY.png)

Campo                              | Descrição |
-----------------------------------|-------------|
```World```| O nome do mundo.
```Area``` | O tamanho da reivindicação.<br /> Nota: as reivindicações 2D incluem o eixo x e z.<br /> Nota: as reivindicações 3D incluem eixo x, y e z.
```Blocks```| O valor total dos blocos 2D ou 3D utilizados por reivindicação.
```Created```| A reivindicação de data foi criada.
```Last Active```| A última data ativa que o proprietário da reivindicação foi visto.<br /> NOTA: Isso é usado pela tarefa de limpeza de reivindicações para determinar se seu tempo para excluir a reivindicação com base na inatividade.
```UUID```| A reivindicação de identificador exclusivo.
```Lesser Boundary Corner```| O menor canto de limite da reivindicação.
```Greater Boundary Corner```| O maior canto de limite da reivindicação.
```North Corners```| As posições de reivindicação de canto do bloco norte.<br /> NOTA: Se o jogador tiver acesso ao Teleport, clicando em `nw` ou` ne` será teletransportado para a posição norte.<br /> NOTA: A teletransporte para os cantos é útil se os jogadores desejam redimensionar as reivindicações usando a ferramenta de modificação.
```South Corners```| As posições de reivindicação do canto do bloco sul.<br /> NOTA: Se o jogador tiver acesso ao Teleport, clicar em `SW` ou` SE` será teleportado para a posição sul.<br /> NOTA: A teletransporte para os cantos é útil se os jogadores desejam redimensionar as reivindicações usando a ferramenta de modificação.


## Controle de entrada de reivindicação

### Permitindo que outros jogadores acessem sua reivindicação

Você pode dar a outros jogadores acesso à sua reivindicação básica usando os [Comandos de confiança](/br/wiki/Commands.html#trust-1), por exemplo: Para dar ao seu amigo as permissões de construção para o jogador "Applehead" na sua reivindicação, apenas execute `/trust Applehead`.

### Exigem confiança para os jogadores entrarem

Alternar a definição de bandeira do usuário `plparaer-enter` to `false`

Uma vez feito o exposto, jogadores não confiados não poderão inserir sua reivindicação.

Para permitir a entrada para todos os usuários
`/at public`

Para permitir a entrada para um único usuário
`/at <playername>`

Para remover a entrada para todos os usuários
`/untrust public`

Para remover a entrada para um usuário específico
`/untrust <playername>`


## Como desativar a funcionalidade de reivindicação/GD

### Desative a reivindicação em um mundo específico

Para desativar a criação de reivindicações para um grupo específico de usuários em um mundo chamado `valhalla`, Digite o seguinte comando
`/lp group <group> permission set griefdefender.user.claim.create.* false world=valhalla`

### DGD isável em um mundo específico

Para desativar a funcionalidade de GD em um mundo do mundo superior nomeado `valhalla`, vá para a pasta de configuração do GD e então `worlds`

Você verá as seguintes pastas
```
nether
normal
the_end
```

Desde o mundo `valhalla` é do tipo `overworld` , entrar `normal` pasta.Você verá uma pasta chamada `valhalla`.
Dentro desta pasta será uma pasta de configuração chamada `world.conf`. Edite o arquivo de configuração como o seguinte

```
# 1.2.7
# # If you need help with the configuration or have any issues related to GriefDefender,
# # create a ticket on https://github.com/bloodmc/GriefDefender/issues.
# # Note: If you have not purchased GriefDefender, please consider doing so to get 
# # exclusive access to Discord for prompt support.
# 

GriefDefender {
    claim {
        # Whether claiming is enabled or not. (0 = Disabled, 1 = Enabled)
        claims-enabled=0
    }
}
```

## Como lidar com explosões acima do nível da superfície

Abrir o global.conf encontrado em `./plugins/griefdefender` em Bukkit e `./config/griefdefender` e em servidores de Sponge.
Você encontrará as seguintes configurações de configuração 

* `explosion-block-surface-blacklist` - Permite que você faça uma fonte de bloco específica da lista negra, como TNT, acima do nível de superfície definido pela configuração `explosion-surface-block-level`. Para a lista negra de todos os blocos, use o ID `any`.
* `explosion-entity-surface-blacklist` - Permite que você faça fontes de explosão de entidade específicas da lista negra, como o Creeper, acima do nível de superfície definido pela configuração `explosion-surface-block-level`. Para a lista negra de todas as entidades, use o ID `any`.
* `explosion-surface-block-level` - Permite configurar o nível da superfície do bloco (coordenado Y) que o Griefdefender usará para determinar se uma explosão está acima da superfície.(Padrão: 63)
Nota: Você pode definir essas configurações por mundo copiando a configuração para o seu respectivo arquivo `world.conf`.


## Como substituir a altura do mundo mínimo/max

Para substituir um mundo chamado `valhalla` com tipo de ambiente `overworld`, tAs seguintes alterações de configuração precisam ser feitas

#### Bukkit
* Localize world.conf dentro de `./plugins/GriefDefender/worlds/normal/valhalla/world.conf`
* Copiar reivindicações de criação de configurações de `global.conf` Para novo world.conf
* Abrir `./plugins/GriefDefender/options.conf`
* Debaixo `default-user-options` definir `min-level` Para combinar a configuração de substituição
* Debaixo `default-user-options` definir `max-level` Para combinar a configuração de substituição

#### Sponge
* Localize world.conf in `./config/GriefDefender/worlds/overworld/valhalla/world.conf`
* Copiar reivindicações de criação de configurações de `global.conf` Para novo world.conf
* Abrir `./config/GriefDefender/options.conf`
* Debaixo `default-user-options` definir `min-level` Para combinar a configuração de substituição
* Debaixo `default-user-options` definir `max-level` Para combinar a configuração de substituição

Se bem feito, deve parecer parecido com

```
GriefDefender {
    claim {
        creation-settings {
            # Whether claims can expire by default. (Default: True)
            expirable=true
            # Whether claims should inherit their parent on creation. (Default: True)
            # Note: This setting does not affect a claim whose parent is a town.
            inherit-parent=true
            # The maximum world height override used during claim creation.
            # Note: Requires 'override-world-height' to be enabled.
            max-world-height-override=319
            # The minimum world height override used during claim creation.
            # Note: Requires 'override-world-height' to be enabled.
            min-world-height-override=-64
            # Whether claim heights are taken from config instead of world. (Default: False)
            # Note: Enable this setting if using custom datapack that alters the default world height.
            override-world-height=true
            # Whether claims requires claim blocks on creation. (Default: True)
            requires-claim-blocks=true
            # Whether claims can be resized on creation. (Default: True)
            resizable=true
            # Whether claims can show deny messages to players by default. (Default: True)
            show-deny-messages=true
        }
    }
}
```

NOTA: Essas configurações funcionarão apenas para reivindicações recém criadas.Se o mundo já foi criado, certifique -se de ajustar os dados de reivindicação da região selvagem com a altura do mundo apropriada.