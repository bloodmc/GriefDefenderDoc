---
title: Sistema de Trust
tag: Claim
category: claim
icon: trust
---

### IMPORTANT
:warning:  
O trust NÃO é herdada por subdivisões com herdar ativado. Se um proprietário de reivindicação quiser confiar (trust) em um jogador em todas as reivindicações, incluindo subdivisões, o comando `/trustall` deverá ser usado.

Existem quatro tipos diferentes de trust: Accessors, Builders, Containers, and Managers.

### Argumentos
| Argumentos | Descrição |
| --------- | ----------- |
| `<Jogador>`| O jogador em quem confiar. |
| `<grupo>` | O grupo em que confiar. Nota: Se você quiser confiar em todos, use `public`. |
| `<tipo>`  | O tipo de confiança [none, accessor, resident, builder, container, manager]. Nota: Se você deseja remover a confiança, use `none`. <br>*None*: `Remove o acesso de um jogador/grupo à sua reivindicação`<br>*Accessor*: `Concede a um jogador/grupo acesso para interagir com todos os blocos, exceto inventário`<br>*Resident*: `Concede a um jogador/grupo a capacidade de criar reivindicações, inclui confiança de acesso.`<br>*Container*: `Concede a um jogador/grupo acesso para interagir com todos os blocos, incluindo inventário, inclui confiança de acesso.`<br>*Builder*: `Concede a um jogador/grupo acesso a tudo acima, exceto Residente, incluindo a capacidade de colocar e quebrar blocos`<br>*Manager*: `Concede a um jogador/grupo acesso a todos os itens acima, incluindo a capacidade de modificar a reivindicação`  |

### Trust Player
**Command**: `/gd trust player <Jogador> <tipo>`  
**Alias**: `trust`  
**Example**: `/gd trust player Kratos basic`  

Concede a um jogador acesso à(s) sua(s) reivindicação(ões)

### Trust Group
**Command**: `/gd trust group <grupo> <tipo>`  
**Alias**: `trust`  

Concede a um grupo acesso às suas reivindicações

### Remove Trust Player
**Command**: `/gd trust player <Jogador> none`  

Remove o acesso de um jogador a todas as suas reivindicações.

### Remover grupo do trust
**Command**: `/gd trust group <grupo> none`  

Remove o acesso de um grupo a todas as suas reivindicações.

## List Trusted (Lista de confiança)
**Command**: `/trustlist` 

Lista os jogadores atualmente confiáveis e o tipo de trust que ele tem.