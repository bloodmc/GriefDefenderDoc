---
title: PvP
tag: misc
category: Misc
icon: swords
---

O GriefDefender tem a capacidade de controlar o PvP globalmente, por usuário/grupo ou por reivindicação.  

Aqui estão alguns exemplos de como configurar o PvP  
Nota: Esses exemplos pressupõem uma instalação limpa sem configurações modificadas.  

### Desabilitar o PvP do servidor
Para desabilitar o PvP do servidor, abra [`server.properties`](https://pt.minecraft.wiki/w/Server.properties#pvp) e configure `pvp` para false (Caso utilize o Sponge, na configuração PVP mude para false no arquivo de configuração do Sponge).  

### Desative o PvP globalmente, exceto reivindicações específicas

1. Abra `presets/minecraft.conf` no diretório de configuração do GD.  
2. Altere `default-value=true` para `default-value=false` na definição de `pvp`  
3. Alterne a definição de `pvp` para true em reivindicações onde o pvp é desejado  
4. Opcional: Mova a definição a bandeira `pvp` do grupo USER para o grupo ADMIN em `minecraft.conf`  
Nota: Faça esta alteração se você APENAS quiser que os administradores possam alternar `pvp` nas reivindicações.  
5. `/gdreload`

### Desative o PvP para um jogador específico

1. Execute o comando `/cfp <jogador> entity-damage player false source=player`  

### Desabilitar PvP para um grupo específico de usuários

1. Execute o comando `/cfg <grupo> entity-damage player false source=player`  

### Permitir PvP globalmente, exceto reivindicações específicas

Se você deseja permitir que os usuários ativem/desativem o PvP, faça o seguinte  
1. Execute o comando `/cf` para iniciar a Interface de bandeira.  
2. Certifique-se de que a guia `PRESET` `USER` esteja selecionada.  
3. Alterne `pvp` para `falso`.  

### Permitir que os usuários configurem o PvP como quiserem

1. Execute o comando `/cf` para iniciar a Interface do bandeiras.  
2. Certifique-se de que a guia `PRESET` `USER` esteja selecionada.  
3. Alterne `pvp` para `false` ou `true`.  


