---
title: Interface
tag: Info
category: info
icon: gui
---

## Interface

GriefDefender fornece uma Interface de [Bate-papo](#Bate-Papo) e [Inventário ](#Inventario) para os jogadores.
Ambas as Interfaces podem ser acessadas executando o comando `/gd`.
Use `/claimgui` para alternar entre as Interfaces.
Para padronizar jogadores para inventariar a Interface no login, conceda a permissão `griefdefender.login.inventory-gui` a eles.


## Bate-Papo  

A Interface de bate-papo foi projetada para jogadores de PC que usam mouse e teclado. 


### Menu principal

Para acessar o menu principal, execute o comando `/gd`

![Início do menu principal](https://i.imgur.com/S2ZpVPA.gif)

O menu principal é projetado como um menu 'descartável', o que significa que não deve ocupar toda a tela de bate-papo.
Clicar em um link de menu abrirá o menu de tela cheia.

![Menu principal completo](https://i.imgur.com/YQmihfG.png)

#### Reivindicação  

Clicar no link `REIVINDICAÇÃO` levará o jogador à seguinte tela

![Reivindicação](https://i.imgur.com/YQmihfG.png)  

Os links disponíveis funcionam da seguinte forma

`Abandonar` - Abandone a reivindicação do jogador.
`Criar` - Cria uma reivindicação no pedaço em que o jogador está.
`Info` - Carrega o menu Claiminfo.
`Lista` - Carrega o menu da lista de reivindicações.
`Esquemático` - Carrega o menu esquemático.

### Comandos  

Clicar no link `Comandos` levará o jogador à seguinte tela

![Comandos](https://i.imgur.com/ypaKgrv.png)  

Esta tela mostra uma lista paginada de comandos disponíveis para o player. Passar o mouse sobre um comando mostrará sua descrição, argumentos e permissão.
Nota: Os jogadores não verão comandos que não têm acesso para executar.  


### Bandeiras  

:warning: As bandeiras afetarão apenas a reivindicação em que você está. 

Clicar no link `BANDEIRAS` levará o jogador a uma das duas telas a seguir
 
Se o servidor tiver mais de uma predefinição disponível para o jogador, o jogador verá uma tela de predefinição listando todas as predefinições disponíveis para o jogador.

 
![Predefinições de Bandeiras](https://i.imgur.com/GuXPpcy.png)  

Se o servidor tiver apenas a predefinição de minecraft entregue carregada, o jogador receberá todas as definições de bandeira disponíveis para o jogador usar em sua reivindicação.

![Definições de Bandeiras](https://i.imgur.com/ETLunlL.png)  

Esta tela terá como padrão o grupo `USER` e o tipo `PUBLIC` que controla os sinalizadores para jogadores não confiáveis. Para controlar as sinalizações do proprietário e dos membros confiáveis da reivindicação, clique no link "PROPRIETÁRIO". Você notará os mesmos sinalizadores, mas os valores podem ser diferentes, pois refletem permissões diferentes.


Como administrador, você verá outro grupo no topo chamado `ADMIN` que exibirá todas as definições de sinalizadores administrativos configurados no preset carregado.
Nota: Isso pressupõe que a predefinição `minecraft` entregue está carregada. Se você criar sua própria predefinição, os detalhes acima podem ser diferentes.

Para um guia detalhado sobre como configurar definições de sinalizadores para predefinições, consulte [Interface de definições de bandeira](/br/wiki/basic/Flag-Definitions-GUI.html)


### Opções  

:warning: As opções são consideradas mais para uso administrativo. Seja cauteloso ao permitir que usuários normais o usem. 

Clicar no link 'OPÇÕES' levará o jogador à seguinte tela

![Opções](https://i.imgur.com/3HcWKQA.png)


Os usuários usarão como padrão a guia "CLAIM" nas opções que controlam todas as opções na reivindicação em que estão.


Para obter uma lista de todas as opções disponíveis e como configurá-las, consulte [Opções](/br/wiki/basic/Options.html)


### Jogador

Clicar no link `PLAYER` carregará o menu playerinfo
Nota: Este menu também pode ser acessado diretamente executando o comando `/playerinfo [<playername>]`

![Informações do jogador](https://i.imgur.com/PPbrPwi.png)

Esta tela permite que um jogador visualize todas as suas estatísticas de reivindicação, como restrições de criação de reivindicação, total de reivindicação, acumulados e bloqueios de bônus.

Clicar em 'DETALHES' trará informações adicionais, como mundo, último ativo e UUID do jogador.

![Detalhes das informações do jogador](https://i.imgur.com/0cjvNKc.png)


### Trust

Clicar no link `TRUST` carregará o menu de trust (Confiaça)
Nota: Este menu também pode ser acessado diretamente executando o comando `/trustlist`


![Trust](https://i.imgur.com/T75Gvpw.png)

O menu de trust permite que um jogador confie em um membro ou grupo para suas reivindicações.
Veja [Sistema de Trust](/br/wiki/basic/Trust-System.html) para tipos de trust e como cada um funciona.

Para adicionar um membro ou grupo, clique em um dos tipos de trust na parte superior do menu e clique no sinal `+`.
Isso enviará uma mensagem ao jogador perguntando se você deseja confiar em um jogador ou grupo. Basta clicar no link `Jogador` ou `Grupo` para continuar.

Se confiar em um jogador, você deverá digitar um nome no formato `player <nome>`. Apague `<nome>` e insira um nome válido. Quando terminar, pressione enter.
Mote: Digite `public` para confiar em todos.

Se confiar em um grupo, você deverá inserir um nome de grupo no formato `grupo <nome>`. Apague `<nome>` e insira um grupo LP válido.



## Inventario

A Interface do inventário foi projetada para jogadores básicos e controladores que não conseguem clicar no bate-papo.
Para acessar a Interface do inventário, certifique-se de estar no modo Interface correto usando `/claimgui`.
Nota: Os jogadores que usam como padrão a Interface do inventário no login podem ignorar o uso de `/claimgui`, a menos que desejem alternar para a GUI do Chat temporariamente.


![Menu principal do inventário](https://i.imgur.com/2iqE2ma.gif)

Esta tela apresenta ao jogador 5 ícones: Reivindicação, Comando, Bandeira, Jogador, Wiki.

Clicar no ícone 'golden shovel' carregará o menu de reivindicação

![Reivindicação](https://i.imgur.com/JFxoyqJ.png)

Os ícones disponíveis funcionam da seguinte forma

`Abandonar` - Abandone a reivindicação do jogador.
`Criar` - Cria uma reivindicação no pedaço em que o jogador está.
`Info` - Carrega o menu de inventário Claiminfo.
`Lista` - Carrega o menu de inventário da lista de reivindicações.
`Depurar` - Depura o usuário da reivindicação atual.
Observação: o ícone de depuração é apenas para administradores.

Toda a configuração da Interface do inventário pode ser encontrada no arquivo `gui.conf` dentro da pasta `./plugins/GriefDefender/`.
Consulte [Seção de inventário](/br/wiki/Configuration.html#secao-de-inventario) para obter mais informações.