---
title: Introdução
tag: Info
category: info
icon: type
---

:::: warning This document translation is provided by the community
Thanks to community translator, we have the documentation written in serval languages.
But as you know, documents are time-sensitive, we cannot guarantee that the translated 
documents will be kept up-to-date. So please refer to this document **with thanks to the translator** 
and always follow the official document when you get into trouble!
:::: 

:::: info Revisão e Tradução para o Português-Brasil 
Estamos traduzindo e revisando a Wiki e a tradução do plugin, para manter a coerencia entre ambas traduções.
::::

## Começando

### Requisitos

::: tip Você precisa do LuckPerms para executar o plugin.
últimas versão [LuckPerms](https://luckperms.net/) para Bukkit & Sponge API 8/9.
<br>Obter [LuckPerms v5.3.98](https://ore.spongepowered.org/Luck/LuckPerms/versions/5.3.98) para Sponge API 7.
<br>**OBS: GD suporta apenas LuckPerms v5.**
:::

::: warning
GriefDefender faz uso pesado do grupo `default` do LuckPerms. Certifique-se de que seus grupos de LP estão herdando o grupo `default` 
caso não, o GD não irá funcionará corretamente. LP também recomenda nunca desabilitar este grupo.
Verifique na [wiki](https://luckperms.net/wiki/Default-Groups#where-to-start) 
:::

### Instalação

::: tabs

@tab:active Bukkit
:warning: Se estiver usando `spark`, Atualize para a [última versão](https://ci.lucko.me/job/spark/) :warning:   
:warning: Defina `spawn-protection` para `0` dentro `server.properties` para permitir que GD proteja o spawn. 
Se isso não for definido corretamente, o servidor bloqueará as ações antes que o GD tenha a chance de vê-lo. :warning:
1. Instale o [LuckPerms](https://luckperms.net/) mais recente.
2. Obtenha a versão mais recente do [GriefDefender](https://www.spigotmc.org/resources/68900/).
3. Coloque o arquivo jar dentro da pasta `./plugins`
4. Agora inicie seu servidor uma vez para gerar todos os arquivos de configuração,
para verificar se o GriefDefender foi carregado com sucesso você pode verificar se o console mostrou `[GriefDefender] Loaded successfully`.
5. Em seguida, desligue o servidor e comece a configurar.

@tab Sponge

:warning: LuckPerms não suporta API7 desde a v5.3.98, Use [Esta versão](https://ore.spongepowered.org/Luck/LuckPerms/versions/5.3.98) 
se você estiver usando API7 para abrir um servidor.
1. Obtenha a versão adequada do GD para o Sponge API 7/8 no Discord.
2. Coloque o arquivo jar em `mods` ou `mods/plugins`.
3. Agora inicie seu servidor uma vez para gerar todos os arquivos de configuração,
para verificar se o GriefDefender foi carregado com sucesso você pode verificar se o console mostrou `[GriefDefender] Loaded successfully`.
4. Em seguida, desligue o servidor e comece a configurar.

@tab Forge

Em breve!

@tab Fabric

Em breve!

:::

### Configuração

> **NOTA: Existem também algumas opções que devem ser definidas usando seu sistema de permissão, você pode ler mais sobre elas no [Opções na página da wiki](/br/wiki/advanced/Contexts.html).**

Todos os arquivos de configuração podem ser encontrados em uma pasta chamada`GriefDefender` na configuração do seu servidor ou na pasta de plugins.  

```
plugins/
└── GriefDefender/
    ├── ...
    ├── bans.conf
    ├── claimnames.conf
    ├── flags.conf
    ├── global.conf
    ├── gui.conf
    ├── options.conf
    └── storage.conf
```

Você pode alterar várias configurações no [arquivo de configuração](/br/wiki/advanced/Global-Config.html). O arquivo tem anotações detalhadas que deixam claro o que cada opção faz. Existem três tipos de configurações:

* Global
* Dimension
* World

Global arquivos de configuração podem afetar todos os mundos e dimensões de um servidor. Este é o nível padrão para configurações.

Dimension arquivos de configuração são usados ​​para afetar uma determinada dimensão ou grupo de mundos. Esses tipos de configurações substituirão os arquivos de configuração Global. Os arquivos de configuração do mundo são usados ​​apenas para modificar mundos individuais.

World configurações substituem a dimensão e as configurações globais.

Os dados da reivindicação podem ser encontrados dentro da pasta da dimensão em que a reivindicação está, por exemplo, todas as reivindicações do mundo superior são salvas dentro

`config/GriefDefender/worlds/minecraft/overworld/world/ClaimData` para Sponge  
`plugins/GriefDefender/worlds/minecraft/overworld/world/ClaimData` para Bukkit  

Veja em [Configuração](/br/wiki/Configuration.html) página para obter mais detalhes sobre como cada configuração funciona.

#### HOCON  

GriefDefender usa um formato de configuração conhecido como [HOCON](https://github.com/lightbend/config/blob/main/HOCON.md).  Esse formato melhora vários aspectos do YAML, como a capacidade de usar comentários facilmente por configuração.

Nota: Todas as seções de configuração são classificadas automaticamente em ordem alfabética. Isso não pode ser alterado, pois o HOCON funciona dessa maneira.

#### Notepad++ Realce de sintaxe

1. Copie o xml abaixo `Hocon NPP lang` em um arquivo chamado `npp-lang-hocon.xml`
2. Abra Notepad++.
3. Clique em Linguagem > Linguagem definida pelo usuário…
4. Na parte superior, clique em Importar.
5. Encontre o arquivo e abra-o.

::: details Hocon NPP lang

```
<NotepadPlus>
    <UserLang name="Hocon" ext="conf" udlVersion="2.1">
        <Settings>
            <Global caseIgnored="no" allowFoldOfComments="no" foldCompact="no" forcePureLC="0" decimalSeparator="0" />
            <Prefix Keywords1="no" Keywords2="no" Keywords3="no" Keywords4="no" Keywords5="no" Keywords6="no" Keywords7="no" Keywords8="no" />
        </Settings>
        <KeywordLists>
            <Keywords name="Comments">00# 00// 01 02 03 04</Keywords>
            <Keywords name="Numbers, prefix1"></Keywords>
            <Keywords name="Numbers, prefix2"></Keywords>
            <Keywords name="Numbers, extras1"></Keywords>
            <Keywords name="Numbers, extras2"></Keywords>
            <Keywords name="Numbers, suffix1"></Keywords>
            <Keywords name="Numbers, suffix2"></Keywords>
            <Keywords name="Numbers, range"></Keywords>
            <Keywords name="Operators1">= : , { } [ ]</Keywords>
            <Keywords name="Operators2"></Keywords>
            <Keywords name="Folders in code1, open"></Keywords>
            <Keywords name="Folders in code1, middle"></Keywords>
            <Keywords name="Folders in code1, close"></Keywords>
            <Keywords name="Folders in code2, open"></Keywords>
            <Keywords name="Folders in code2, middle"></Keywords>
            <Keywords name="Folders in code2, close"></Keywords>
            <Keywords name="Folders in comment, open"></Keywords>
            <Keywords name="Folders in comment, middle"></Keywords>
            <Keywords name="Folders in comment, close"></Keywords>
            <Keywords name="Keywords1">true&#x000D;&#x000A;false&#x000D;&#x000A;null</Keywords>
            <Keywords name="Keywords2"></Keywords>
            <Keywords name="Keywords3"></Keywords>
            <Keywords name="Keywords4"></Keywords>
            <Keywords name="Keywords5"></Keywords>
            <Keywords name="Keywords6"></Keywords>
            <Keywords name="Keywords7"></Keywords>
            <Keywords name="Keywords8"></Keywords>
            <Keywords name="Delimiters">00&quot; 01 02&quot; 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23</Keywords>
        </KeywordLists>
        <Styles>
            <WordsStyle name="DEFAULT" fgColor="50007D" bgColor="FFFFFF" fontName="" fontStyle="1" nesting="0" />
            <WordsStyle name="COMMENTS" fgColor="000000" bgColor="FFFFFF" fontName="" fontStyle="0" nesting="0" />
            <WordsStyle name="LINE COMMENTS" fgColor="505050" bgColor="FFFFFF" fontName="" fontStyle="3" nesting="0" />
            <WordsStyle name="NUMBERS" fgColor="00507D" bgColor="FFFFFF" fontName="" fontStyle="1" nesting="0" />
            <WordsStyle name="KEYWORDS1" fgColor="800000" bgColor="FFFFFF" fontName="" fontStyle="1" nesting="0" />
            <WordsStyle name="KEYWORDS2" fgColor="000000" bgColor="FFFFFF" fontName="" fontStyle="1" nesting="0" />
            <WordsStyle name="KEYWORDS3" fgColor="000000" bgColor="FFFFFF" fontName="" fontStyle="1" nesting="0" />
            <WordsStyle name="KEYWORDS4" fgColor="000000" bgColor="FFFFFF" fontName="" fontStyle="0" nesting="0" />
            <WordsStyle name="KEYWORDS5" fgColor="000000" bgColor="FFFFFF" fontName="" fontStyle="0" nesting="0" />
            <WordsStyle name="KEYWORDS6" fgColor="000000" bgColor="FFFFFF" fontName="" fontStyle="0" nesting="0" />
            <WordsStyle name="KEYWORDS7" fgColor="000000" bgColor="FFFFFF" fontName="" fontStyle="0" nesting="0" />
            <WordsStyle name="KEYWORDS8" fgColor="000000" bgColor="FFFFFF" fontName="" fontStyle="0" nesting="0" />
            <WordsStyle name="OPERATORS" fgColor="000000" bgColor="FFFFFF" fontName="" fontStyle="1" nesting="0" />
            <WordsStyle name="FOLDER IN CODE1" fgColor="000000" bgColor="FFFFFF" fontName="" fontStyle="0" nesting="0" />
            <WordsStyle name="FOLDER IN CODE2" fgColor="000000" bgColor="FFFFFF" fontName="" fontStyle="0" nesting="0" />
            <WordsStyle name="FOLDER IN COMMENT" fgColor="000000" bgColor="FFFFFF" fontName="" fontStyle="0" nesting="0" />
            <WordsStyle name="DELIMITERS1" fgColor="007D00" bgColor="FFFFFF" fontName="" fontStyle="1" nesting="0" />
            <WordsStyle name="DELIMITERS2" fgColor="FF7D00" bgColor="FFFFFF" fontName="" fontStyle="1" nesting="0" />
            <WordsStyle name="DELIMITERS3" fgColor="000000" bgColor="FFFFFF" fontName="" fontStyle="0" nesting="0" />
            <WordsStyle name="DELIMITERS4" fgColor="000000" bgColor="FFFFFF" fontName="" fontStyle="0" nesting="0" />
            <WordsStyle name="DELIMITERS5" fgColor="000000" bgColor="FFFFFF" fontName="" fontStyle="0" nesting="0" />
            <WordsStyle name="DELIMITERS6" fgColor="000000" bgColor="FFFFFF" fontName="" fontStyle="0" nesting="0" />
            <WordsStyle name="DELIMITERS7" fgColor="000000" bgColor="FFFFFF" fontName="" fontStyle="0" nesting="0" />
            <WordsStyle name="DELIMITERS8" fgColor="000000" bgColor="FFFFFF" fontName="" fontStyle="0" nesting="0" />
        </Styles>
    </UserLang>
</NotepadPlus>
```
:::


### Linguagem

GD suporta os seguintes idiomas : `de_DE, en_US, es_ES, fr_FR, it_IT, pl_PL, pt_BR, ru_RU, tr_TR, zh_CN, zh_HK`

O idioma padrão é `en_US`.  
Para alterar o idioma, abra o `global.conf` e encontre `message` mude a linha `locale="en_US"` para `locale="pt_BR"`

### Armazenamento

:warning: Todos os dados do bloco de bônus/acumulados dos jogadores são armazenados no LuckPerms como meta. Use `/lp editor` para visualizar os dados atuais. :warning:   

#### Arquivo  

O GD usa o armazenamento de arquivos hocon por padrão. Isso não afeta o desempenho, pois todos os dados do arquivo são carregados na memória RAM na inicialização. 

Todos os dados do arquivo serão armazenados em uma pasta chamada `GriefDefender` na configuração do seu servidor ou diretório de plugins. 

```
config/
└── GriefDefender/
    ├── claimgroups/
    ├── lang/
    ├── presets/
    ├── snapshots/
    ├── worlds/
    │   ├── minecraft/
    │   │   ├── normal/
    │   │   │   ├── world/
    │   │   │   │   ├── ClaimData/
    │   │   │   │   ├── SchematicData/
    │   │   │   │   └── world.conf
    │   │   │   └── dimension.conf
    │   │   └── outros...
    │   └── 
    ├── bans.conf
    ├── blacklist.conf
    ├── claimnames.conf
    ├── flags.conf
    ├── global.conf
    ├── gui.conf
    ├── options.conf
    └── storage.conf
```

#### lista negra  

O GriefDefender agora oferece configurações de lista negra padrão para várias ações barulhentas no mundo do minecraft, a fim de fornecer o melhor desempenho imediato. Quando um item, bloco ou id de entidade está na lista negra, o GriefDefender irá ignorá-lo quando processado em um evento. Se você encontrar uma ação que não aparece na depuração do GD, ela está na lista negra ou não está disparando corretamente um evento. Certifique-se de revisar seu `blacklist.conf` e remova qualquer id que você não queira colocar na lista negra para o seu servidor.

Veja a [Lista negra](/br/wiki/Configuration.html#blacklist-lista-negra) para obter mais informações sobre como configurar.


#### Banco de dados  

:warning: Se especificar a porta em `address` envolvido com aspas ou GD não será carregado. :warning:  

Se você deseja alternar para o armazenamento de banco de dados, faça o seguinte
1. Abra o arquivo `storage.conf`  
2. Altere `storage-method` para um formato de banco de dados suportado.
Por exemplo, se você quiser usar mysql, você deve definir este valor para `mysql`.
3. Defina `address` para o endereço e porta do banco de dados. Certifique-se de usar aspas ao especificar uma porta. Ex. `"localhost:1000"`  
4. Defina `database-name`. Se este valor não for alterado, o GD criará um banco de dados com o nome `griefdefender` se caso não exista.
5. Defina `username` para o nome de usuário do banco de dados.
6. Defina `password` para a senha do banco de dados entre aspas. 
7. Ajuste quaisquer outras configurações conforme necessário.



### Modelo econômico
:warning: Antes de ativar o modelo econômico, certifique-se de testar em um servidor de TESTE para garantir que todas as configurações estejam funcionando corretamente. :warning:

Por padrão, o GD permite que os jogadores acumulem blocos de reivindicações para serem usados na criação de reivindicações.
No entanto, se você quiser que todas as reivindicações criadas usem economia diretamente em vez de blocos de reivindicações, defina `economy-mode` para `true` em `global.conf`.  
Com `economy-mode` ativado, todas as criações de reivindicação solicitarão aos jogadores uma confirmação do custo da reivindicação. Uma vez confirmado, o dinheiro será retirado da conta do jogador. 
Se você quiser ignorar essas confirmações, defina a permissão `griefdefender.user.claim.economy.create-confirm` para `false`.

Depois que essa configuração for ativada, abra `options.conf`e configure as seguintes opções para um valor maior que `0`
* `economy-block-cost`  
* `economy-sell-return` 

Nota: Se você quiser usar o `/buyclaimblocks` ou  `/sellclaimblocks` comandos então você DEVE configurar as 2 opções acima também. Esses comandos não requerem `economy-mode` para ser ligado.
 
### Permissões

:warning: É MUITO IMPORTANTE que você siga o [Permissões#Importante](/br/wiki/Permissions.html#importante) antes de proceder. :warning:  
:warning: Se você deseja remover permissões de usuário que não se aplicam ao seu servidor, é ALTAMENTE recomendado manter `griefdefender.user.*` aplicado a eles e simplesmente negar as permissões que você não possui. Se você remover o `griefdefender.user.*` e tentar aplicar todas as permissões do GD manualmente, você terá muitos problemas.

Depois de instalar o GriefDefender corretamente, você precisa dar permissão aos seus jogadores para reivindicar terrenos, eles não são dados por padrão. A única permissão necessária para a configuração básica do GD é `griefdefender.user.*`. Para configuração básica de administração, dê aos administradores a permissão `griefdefender.admin.*` e `griefdefender.user.*`.

Se você quiser ajustar mais permissões, você pode encontrar todas as permissões [aqui](/br/wiki/Permissions.html) e para uma lista com todas as permissões de comando e de uso [aqui](/br/wiki/Permissions)html#reivindicacoes). 

Se você acredita que os comandos podem ser um pouco mais longos ou difíceis de memorizar, considere criar um custom alias.[Clique aqui para obter mais informações](/br/wiki/basic/Custom-Alias-Creation.html)

Para aplicar as permissões acima a um grupo no LuckPerms, execute o seguinte comando

```
/lp group <grupo> permission set griefdefender.user.*
```

Para `<grupo>` use seu grupo padrão, use `default` se você não tiver um.

Depois que o GD estiver instalado e em execução, veja [Gestão de Reivindicações](/br/wiki/basic/Claim-Management.html) para saber como criar uma proteção de terrra e gerenciá-lo.

### Opções
:warning: É MUITO IMPORTANTE que você veja [Opções](/br/wiki/basic/Options.html) antes de prosseguir. :warning:  
:warning: Todas as opções persistentes (meta) definidas em LuckPerms terão prioridade sobre os padrões em `options.conf` :warning:

Se você quiser definir configurações como com quantos blocos iniciais um jogador pode começar, limites de criação de reivindicação, etc., então você deve começar ajustando as opções padrão do GD encontradas em `options.conf`. Todas as configurações de opção padrão são aplicadas na inicialização do servidor.

[Paper]: https://papermc.io/downloads
[Spigot]: https://www.spigotmc.org/wiki/buildtools/
[Sponge]: https://www.spongepowered.org/downloads