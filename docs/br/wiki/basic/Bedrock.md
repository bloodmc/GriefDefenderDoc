---
title: Bedrock
tag: Info
category: info
icon: gui
---

Para servidores que permitem a entrada de jogadores de Bedrock, esta página fornecerá as etapas necessárias para garantir que seus jogadores de bedrock não tenham problemas.  

## Configuração no LuckPerms
Defina `allow-invalid-usernames` para `true` na configuração do [LuckPerm](https://luckperms.net/) encontrado no arquivo `config.yml`.

## Interface de inventário
GriefDefender fornece duas interfaces para jogadores : [Bate-papo](/wiki/basic/GUI.html#chat) e [Inventário](/wiki/basic/GUI.html#inventory). A Interface do bate-papo não funcionará corretamente com os jogadores do Bedrock, pois eles não conseguem interagir/clicar no bate-papo. 

Todos os jogadores de Bedrock devem receber a permissão `griefdefender.login.inventory-gui` para padronizar a Interface do Inventário ao executar o comando `/gd`.  

Ser capaz de alternar entre Bate-papo e Inventário com o comando`/claimgui`  

### Confirmação
Existem vários comandos que podem solicitar aos jogadores bedrock confirmações no bate-papo. Se isso ocorrer, os jogadores de bedrock podem usar o comando `/gdconfirm` para acionar a confirmação.  

![GUI Pré-visualizar](https://i.imgur.com/2iqE2ma.gif)