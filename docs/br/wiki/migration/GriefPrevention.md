---
title: GriefPrevention
tag: Migration
category: migration
icon: sheild
---

:warning: Antes de usar o migrador GriefPrevention, faça backup de seus dados (incluindo LuckPerms).
É recomendável testar a migração em um servidor de teste antes de aplicar ao servidor principal para garantir que tudo funcione conforme o esperado. 
:warning: Todos os dados do jogador que contêm blocos de reivindicação acumulados e blocos bônus serão armazenados como meta no LuckPerms quando a migração for concluída.  
:warning: A conversão de um banco de dados GriefPrevention SQL de volta ao armazenamento de arquivos pode ser feita com o script python encontrado [aqui](https://gist.github.com/ar00n/f1ac69dd52554e56f012c8d631bed5d7), altere os detalhes da conexão do banco de dados no script.
Nota: GriefDefender 2.X suporta migração do banco de dados do GriefPrevention, então não é mais necessário converter de volta para armazenamento de arquivos.

Os blocos de reivindicações acumulados usarão a meta-chave `griefdefender.accrued-blocks`
Os blocos de reivindicação de bônus usarão a meta-chave `griefdefender.bonus-blocks`
Veja [LuckPerms - Prefixes, Suffixes & Meta](https://luckperms.net/wiki/Prefixes,-Suffixes-&-Meta) para mais informações

## Bukkit
### GriefDefender supports a complete migration from GriefPrevention Bukkit. To migrate to GriefDefender, perform the following steps 

1. Adicionar jar do GriefDefender a plugins
2. Remova o jar do GriefPrevention dos plugins
3. Inicie o servidor para gerar as configurações do GriefDefender.
4. Pare (stop) o servidor
5. Edite global.conf em ./plugins/GriefDefender/
6. Localize a seção
```
# List of migrators that convert old or other protection data into the current GD claim data format.
# Note: It is recommended to backup data before using.
migrator {
        # Set to true to enable the classic migrator.
        # Note: Migrates GP bukkit classic claim data and GPFlags data, if available, to current format.
        # Note: It is recommended to backup data before using.
        classic=false
        classic-database {
            # The database address and port. Use format host:port.
            address=localhost
            # The GriefPrevention database name.
            database=""
            # Set to true to enable the classic database migrator.
            # Note: Migrates GriefPrevention bukkit classic database data and GPFlags data, if available, to current format.
            # Note: It is recommended to backup data before using.
            enabled=false
            # The GriefPrevention database password
            password=""
            # The GriefPrevention database username.
            username=""
        }
}
```
7a. Se estiver migrando do formato de arquivo GP, defina classic para `true`
OU
:warning: Este passo requer que o `storage.conf` seja configurado para o banco de dados GD.
7b. Se estiver migrando do banco de dados GP, configure a seção `classic-database`.
8. Iniciar Servidor
Se feito corretamente, o GriefDefender migrará todos os dados de `plugins/GriefPreventionData` para `plugins/GriefDefender`.
O resultado da migração deve aparecer no console durante o processo.
9. Desabilite o migrador em `global.conf`

## Sponge

:warning: O migrador não copiará o `global.conf` porque houve muitas mudanças no GriefDefender. Você terá que copiar manualmente as configurações desejadas do `global.conf` do GP para o GD.
:warning: Certifique-se de que GriefPreventionData existe na pasta `./plugins/`. Se estiver migrando do Bukkit, você deve copiar `GriefPreventionData` para `./plugins/`

1. Adicione o jar do GriefDefender à pasta de mods ou plugins
2. Remova o jar do GriefPrevention da pasta mods/plugins
3. Inicie o servidor para gerar as configurações do GriefDefender.
4. Pare (stop) o servidor
5. Edite global.conf em ./plugins/GriefDefender/
6. Localize a seção
```
# List of migrators that convert old or other protection data into the current GD claim data format.
# Note: It is recommended to backup data before using.
migrator {
    # Set to true to enable the griefprevention bukkit migrator.
    # Note: Migrates GP bukkit classic claim data and GPFlags data, if available, to current format.
    # Note: It is recommended to backup data before using.
    griefprevention-bukkit=false
    # Set to true to enable the griefprevention sponge migrator.
    # Note: Migrates GP sponge claim data to current format.
    # Note: It is recommended to backup data before using.
    griefprevention-sponge=false
    # Set to true to enable the legacy playerdata file migrator.
    # Note: Migrates legacy playerdata file format to permissions storage such as LuckPerms json or mysql storage.
    # Note: Before turning this on, make sure you properly set 'context-storage-type' in the the playerdata section of this config.
    # Note: It is HIGHLY recommended to backup your permissions database before running this migrator as all local playerdata files will be migrated to it.
    # Note: Do NOT run this migrator on more than one server if multiple servers share the same permissions database.
    playerdata=false
    # Set to true to enable RedProtect data migrator.
    # Note: All RedProtect data will be converted into basic claim data.
    red-protect=false
    # Set to true to enable WorldGuard data migrator.
    # Note: Only cuboid regions are supported.
    # Note: It is recommended to backup data before using.
    worldguard=false
}
```
7. Defina `griefprevention-sponge` para `true` ou `griefprevention-bukkit` para `true` se estiver migrando do Bukkit.
8. Se estiver migrando do GP Sponge, defina 'playerdata' para true.
Observação: certifique-se de ler o comentário com atenção, pois há coisas a serem verificadas antes de ativar o migrador.
9. Localize a seção
```
playerdata {
    # Determines which claim block system to use for claims. (Default: AREA)
    # If set to VOLUME, claim blocks will use the chunk count system to balance 3d claiming.
    # If set to AREA, the standard 2d block count system will be used.
    claim-block-system=AREA
    # The context type used when storing playerdata within a permissions database.
    # Available types are : global, server, world. (Default: global)
    # Global will store data globally shared by all servers.
    # Server will store data per server. Note: This requires servername to be properly set in permissions config.
    # World will store data per world.
    context-storage-type=global
    ...
}
```
10. `context-storage-type` precisa ser definido como `global`, `server` ou `world`. Leia o comentário para mais informações.
11. Inicie o servidor
Se feito corretamente, o GriefDefender migrará todos os dados de `plugins/GriefPreventionData` para `plugins/GriefDefender` incluindo dados de permissão.
O resultado da migração deve aparecer no console durante o processo.
12. Desabilite o migrador em `global.conf`