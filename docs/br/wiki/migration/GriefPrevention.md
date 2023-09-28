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
5. Edite [global.conf](/br/wiki/advanced/Global-Config.html) em ./plugins/GriefDefender/
6. Localize a seção
```
# Lista de migradores que convertem dados de proteção antigos ou outros dados de proteção no formato atual de dados de reivindicação GD.
# Nota: É recomendado fazer backup dos dados antes de usar.
migrator {
        # Defina como true para ativar o migrador clássico.
        # Nota: Migra dados de declaração clássica do GP bukkit e dados GPFlags, se disponíveis, para o formato atual.
        # Nota: Recomenda-se fazer backup dos dados antes de usar.
        classic=false
        classic-database {
            # O endereço e a porta do banco de dados. Use o formato host:porta.
            address=localhost
            # O nome do banco de dados GriefPrevention.
            database=""
            # Defina como true para ativar o migrador de banco de dados clássico.
            # Nota: Migra dados do banco de dados clássico do bukkit GriefPrevention e dados GPFlags, se disponíveis, para o formato atual.
            # Nota: Recomenda-se fazer backup dos dados antes de usar.
            enabled=false
            # A senha do banco de dados GriefPrevention
            password=""
            # O nome de usuário do banco de dados GriefPrevention.
            username=""
        }
}
```
7a. Se estiver migrando do formato de arquivo GP, defina classic para `true`  
OU  
:warning: Este passo requer que o [`storage.conf`](/br/wiki/basic/Storage.html) seja configurado para o banco de dados GD.  
7b. Se estiver migrando do banco de dados GP, configure a seção `classic-database`.  
8. Iniciar Servidor  
Se feito corretamente, o GriefDefender migrará todos os dados de `plugins/GriefPreventionData` para `plugins/GriefDefender`.  
O resultado da migração deve aparecer no console durante o processo.  
9. Desabilite o migrador em  [`global.conf`](/br/wiki/advanced/Global-Config.html)  

## Sponge

:warning: O migrador não copiará o  [`global.conf`](/br/wiki/advanced/Global-Config.html) porque houve muitas mudanças no GriefDefender. Você terá que copiar manualmente as configurações desejadas do  [`global.conf`](/br/wiki/advanced/Global-Config.html) do GP para o GD.
:warning: Certifique-se de que GriefPreventionData existe na pasta `./plugins/`. Se estiver migrando do Bukkit, você deve copiar `GriefPreventionData` para `./plugins/`

1. Adicione o jar do GriefDefender à pasta de mods ou plugins
2. Remova o jar do GriefPrevention da pasta mods/plugins
3. Inicie o servidor para gerar as configurações do GriefDefender.
4. Pare (stop) o servidor
5. Edite  [`global.conf`](/br/wiki/advanced/Global-Config.html) em ./plugins/GriefDefender/
6. Localize a seção
```
# Lista de migradores que convertem dados de proteção antigos ou outros dados de proteção no formato atual de dados de reivindicação GD.
# Nota: É recomendado fazer backup dos dados antes de usar.
migrator {
    # Defina como true para ativar o migrador bukkit de prevenção de luto.
    # Nota: Migra dados de declaração clássica do GP bukkit e dados GPFlags, se disponíveis, para o formato atual.
    # Nota: É recomendado fazer backup dos dados antes de usar.
    griefprevention-bukkit=false
    # Defina como true para ativar o migrador de esponja de prevenção do luto.
    # Nota: Migra dados de reivindicação de esponja GP para o formato atual.
    # Nota: É recomendado fazer backup dos dados antes de usar.
    griefprevention-sponge=false
    # Defina como verdadeiro para ativar o migrador de arquivo playerdata legado.
    # Nota: Migra o formato de arquivo playerdata herdado para armazenamento de permissões, como LuckPerms json ou armazenamento mysql.
    # Nota: Antes de ativar isso, certifique-se de definir corretamente o 'context-storage-type' na seção playerdata desta configuração.
    # Nota: É ALTAMENTE recomendado fazer backup do seu banco de dados de permissões antes de executar este migrador, pois todos os arquivos locais do playerdata serão migrados para ele.
    # Nota: NÃO execute este migrador em mais de um servidor se vários servidores compartilharem o mesmo banco de dados de permissões.
    playerdata=false
    # Defina como verdadeiro para ativar o migrador de dados RedProtect.
    # Nota: Todos os dados do RedProtect serão convertidos em dados básicos de reivindicação.
    red-protect=false
    # Defina como verdadeiro para ativar o migrador de dados WorldGuard.
    # Nota: Apenas regiões cubóides são suportadas.
    # Nota: É recomendado fazer backup dos dados antes de usar.
    worldguard=false
}
```
7. Defina `griefprevention-sponge` para `true` ou `griefprevention-bukkit` para `true` se estiver migrando do Bukkit.
8. Se estiver migrando do GP Sponge, defina 'playerdata' para true.
Observação: certifique-se de ler o comentário com atenção, pois há coisas a serem verificadas antes de ativar o migrador.
9. Localize a seção
```
playerdata {
    # Determina qual sistema de bloqueio de declarações usar para declarações. (Padrão: AREA)
    # Se definido como VOLUME, os blocos de reivindicação usarão o sistema de contagem de blocos para equilibrar a reivindicação 3D.
    # Se definido como AREA, o sistema padrão de contagem de blocos 2D será usado.
    claim-block-system=AREA
    # O tipo de contexto usado ao armazenar playerdata em um banco de dados de permissões.
    # Os tipos disponíveis são: global, servidor, mundo. (Padrão: global)
    # Global armazenará dados compartilhados globalmente por todos os servidores.
    # O servidor armazenará dados por servidor. Nota: Isso requer que o nome do servidor seja definido corretamente na configuração de permissões.
    # World armazenará dados por mundo.
    context-storage-type=global
    ...
}
```
10. `context-storage-type` precisa ser definido como `global`, `server` ou `world`. Leia o comentário para mais informações.
11. Inicie o servidor
Se feito corretamente, o GriefDefender migrará todos os dados de `plugins/GriefPreventionData` para `plugins/GriefDefender` incluindo dados de permissão.
O resultado da migração deve aparecer no console durante o processo.
12. Desabilite o migrador em  [`global.conf`](/br/wiki/advanced/Global-Config.html)