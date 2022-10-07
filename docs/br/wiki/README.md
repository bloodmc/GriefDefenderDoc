---
title: Começando
tag: Info
category: info
icon: start
---

## Começando

### Requisitos

::: tip dica Você precisa do LuckPerms para executar o plugin.
últimas versão [LuckPerms](https://luckperms.github.io/) para Bukkit & Sponge API 8/9.
<br>Obter [LuckPerms v5.3.98](https://ore.spongepowered.org/Luck/LuckPerms/versions/5.3.98) para Sponge API 7.
<br>**OBS: GD suporta apenas LuckPerms v5.**
:::

::: warning
GD faz uso pesado de LP's `default` grupo. Certifique-se de que seus grupos de LP estão herdando o `default` grupo
ou GD não funcionará corretamente. LP também recomenda nunca desabilitar este grupo.
Verifique na [wiki](https://github.com/lucko/LuckPerms/wiki/Default-Groups#where-to-start) 
:::

### Instalação

::: tabs

@tab:active Bukkit
:warning: Se estiver usando `spark`, Atualizar para a [última versão](https://ci.lucko.me/job/spark/) :warning:   
:warning: Defina `spawn-protection` para `0` dentro `server.properties` para permitir que GD proteja o spawn. 
Se isso não for definido corretamente, o servidor bloqueará as ações antes que o GD tenha a chance de vê-lo. :warning:
1. Instale o Luckperms mais recente.
2. Obtenha a versão mais recente em [Spigot](https://www.spigotmc.org/resources/68900/).
3. Coloque o arquivo jar em `./plugins`
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

> **NOTA: Existem também algumas opções que devem ser definidas usando seu sistema de permissão, você pode ler mais sobre elas no [Opções na página da wiki](https://github.com/bloodmc/GriefDefender/wiki/Advanced-Options).**

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

Você pode alterar várias configurações no [arquivo de configuração](https://github.com/bloodmc/GriefDefender/wiki/Global-Config). O arquivo tem anotações detalhadas que deixam claro o que cada opção faz. Existem três tipos de configurações:

* Global
* Dimension
* World

Global configuration files can affect all of a server’s worlds and dimensions. This is the default level for configs.  
Dimension configuration files are used to affect a certain dimension or group of worlds. These types of configs will override the global config files. World configuration files are used to modify individual worlds only.   
World configs override dimension and global configs.

Os dados da reivindicação podem ser encontrados dentro da pasta da dimensão em que a reivindicação está, por exemplo, todas as reivindicações do mundo superior são salvas dentro

`config/GriefDefender/worlds/minecraft/overworld/world/ClaimData` para Sponge  
`plugins/GriefDefender/worlds/minecraft/overworld/world/ClaimData` para Bukkit  

Veja em [Configuração](/Configuration) página para obter mais detalhes sobre como cada configuração funciona.

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
Para alterar o idioma, abra `global.conf` and under `message` category change `locale="en_US"` to the language you want.  

### Storage

:warning: All player accrued/bonus block data is stored in LuckPerms as meta. Use `/lp editor` to view current data. :warning:   

#### File  

GD uses hocon file storage by default. This does not affect performance as all file data is loaded into memory at startup.  

All file data will be stored in a folder called `GriefDefender` in your servers config or plugins directory.  

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
    │   │   └── other...
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

#### Blacklist  

GriefDefender now delivers default blacklist settings for various noisy actions in the minecraft world in order to provide better performance out-of-the-box. When an item, block, or entity id is blacklisted, GriefDefender will ignore it when processed in an event. If you find an action not appearing in GD's debugger then it either is blacklisted or not properly firing an event. Make sure to review your `blacklist.conf` and remove any id's you do not want to blacklist for your server.  

See https://github.com/bloodmc/GriefDefender/wiki/Configuration#blacklist for more info on how to configure.  


#### Database  

:warning: If specifying port in `address` surround with quotes or GD will not load. :warning:  

If you want to switch to database storage, do the following
1. Open `storage.conf` file.  
2. Change `storage-method` value to a supported database format.  
For example, if you want to use mysql, you would set this value to `mysql`.
3. Set `address` to DB address and port. Make sure to use quotes if specifying a port. Ex. `"localhost:1000"`  
4. Set `database-name`. If this value is not changed, GD will create a database with name `griefdefender` if one does not exist.  
5. Set `username` to DB username.  
6. Set `password` to DB password surrounded by quotes.  
7. Adjust any other settings as needed.  



### Economy Mode
:warning: Before enabling economy mode, make sure to test on a TEST server to make sure all settings are working properly. :warning:

By default, GD allows players to accrue claim blocks to be used for claim creation.  
However, If you want all claims created to use economy directly instead of claim blocks then set `economy-mode` to `true` in `global.conf`.  
With `economy-mode` turned on, all claim creations will prompt players with a confirmation of claim cost. Once confirmed, the funds will be taken from the player account.  
If you want to bypass these confirmations, set the permission `griefdefender.user.claim.economy.create-confirm` to `false`.

After this setting is turned on, open up `options.conf` and configure the following options to a value greater than `0`
* `economy-block-cost`  
* `economy-sell-return` 

Note: If you want to use the `/buyclaimblocks` or  `/sellclaimblocks` commands then you MUST configure the above 2 options as well. These commands do not require `economy-mode` to be turned on.  
 
### Permissions

:warning: It is VERY IMPORTANT you follow https://github.com/bloodmc/GriefDefender/wiki/Permissions#important before proceeding. :warning:  
:warning: If you want to remove user permissions that do not apply to your server, it is HIGHLY recommended to keep `griefdefender.user.*` applied to them and simply deny the permissions you do not. If you remove `griefdefender.user.*` and attempt to apply all GD permissions manually, you will run into many issues.  

After install GriefDefender correctly, you need to give your players permission to claim land, they aren't given by default. The only permission needed for basic GD setup is `griefdefender.user.*`. For basic admin setup, give admins the permission `griefdefender.admin.*` and `griefdefender.user.*`. 

If you want more fine tuned permissions you can find all permissions [here](https://github.com/bloodmc/GriefDefender/wiki/Permissions) and for a list of all command permissions & their usage check [here](https://github.com/bloodmc/GriefDefender/wiki/Commands-Usage-&-Permissions). 

If you believe that commands might be a little longer or hard to memorize, consider creating custom alias. [Click here for more information](https://github.com/bloodmc/GriefDefender/wiki/Custom-Alias-Creation)

To apply the above permissions to a group in LuckPerms, run the following command

```
/lp group <group> permission set griefdefender.user.*
```

For `<group>` use your default group, use `default` if you don't have one.

Once GD is installed and running, see https://github.com/bloodmc/GriefDefender/wiki/Claim-Management to learn how to create a protection claim and manage it.

### Options
:warning: It is VERY IMPORTANT you follow https://github.com/bloodmc/GriefDefender/wiki/Options before proceeding. :warning:  
:warning: All persisted options(meta) set in LuckPerms will take priority over defaults in `options.conf` :warning:

If you want to configure settings such as how many initial blocks a player can start with, claim creation limits, etc.. then you should start out by adjusting GD's default options found in `options.conf`.  All default option settings are applied at server startup.  

[Paper]: https://papermc.io/downloads
[Spigot]: https://www.spigotmc.org/wiki/buildtools/
[Sponge]: https://www.spongepowered.org/downloads