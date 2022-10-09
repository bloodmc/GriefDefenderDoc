---
title: Criação-alias-personalizado
tag: Misc
category: misc
icon: quill
---

## Comandos amigáveis

Um dos vários usos que você pode implementar em seu servidor é criar comandos de alias que aprimorarão a capacidade e aprimorarão o uso dessas opções avançadas, tornando-as mais acessíveis para todos com comandos mais curtos.

Para isso, você pode precisar instalar um plugin de alias como `CustomCommands`, ou `commands.yml` dentro da pasta do servidor.

Aqui está um exemplo de como usar a nova opção de velocidade de vôo. Este exemplo foi desenvolvido usando o sistema de alias CMI integrado, mas como mencionado anteriormente, você pode usar qualquer um.

```
 CustomAlias:
  fspeed:
    Cmds:
    - cop [playerName] player-fly-speed $1 context[default=global]
    Perm: true
```
Isso resultará em um jogador executando `/fspeed 0.5` e tendo seu vôo atualizado imediatamente, em vez de usar a entrada mais longa.

Você pode basicamente fazer qualquer coisa do GriefDefender encurtado com alias personalizado.

**NOTA:** Para este caso específico, além de ter uma permissão CMI para executar o comando `/fspeed`, o jogador também precisa ter a permissão GriefDefender para interagir com as Opções Avançadas. Para obter mais informações: [Veja a Wiki de opções avançadas](https://github.com/bloodmc/GriefDefender/wiki/Advanced-Options)