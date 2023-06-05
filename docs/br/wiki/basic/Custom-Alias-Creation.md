---
title: Comandos Personalizados
tag: Misc
category: misc
icon: quill
---

## Comandos amigáveis

Um dos vários usos que você pode implementar em seu servidor é criar comandos personalizados que aprimorarão a capacidadedo servidor com o uso dessas opções avançadas, tornando-as mais acessíveis para todos com comandos mais curtos.

Para isso, você pode precisar instalar um plugin de comandos personalizados como [`CustomCommands`](https://www.spigotmc.org/resources/14363/)/[`MyCommand`](https://www.spigotmc.org/resources/22272/), ou [`commands.yml`](https://bukkit.fandom.com/wiki/Commands.yml) dentro da pasta do servidor.

Aqui está um exemplo de como usar a nova opção de velocidade de vôo. Este exemplo foi desenvolvido usando o sistema de comandos CMI integrado, mas como mencionado anteriormente, você pode usar qualquer um.

```
 CustomAlias:
  fspeed:
    Cmds:
    - cop [playerName] player-fly-speed $1 context[default=global]
    Perm: true
```
Isso resultará em um jogador executando `/fspeed 0.5` e tendo seu vôo atualizado imediatamente, em vez de usar a entrada mais longa.

Você pode basicamente fazer qualquer coisa do GriefDefender encurtado com comandos personalizado.