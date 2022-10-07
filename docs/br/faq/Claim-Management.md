---
title: Claim-Management
tag: faq
category: faq
icon: faq
---

## 1. Como permitir que todos os usuários criem reivindicações gratuitamente?**

Defina `requires-claim-blocks` para `false` em `global.conf` dentro da seção `creation-settings`  

## 2. Como transfiro uma reivindicação para outro jogador gratuitamente?**

Criar reivindicação, use `/claiminfo` -> `Admin Settings` e alternar `Requer Blocos de Reivindicação` para falso.
Então use `/claimtransfer <NomeDoJogador>` para transferir a reivindicação para o jogador.  

## 3. Como faço para criar uma reivindicação usando WorldEdit?**  

Primeiro, certifique-se de que sua seleção esteja configurada para o modo cubóide, pois o GD suporta apenas o cubóide. Use a seleção para selecionar seus 2 pontos.
Se você deseja criar uma reivindicação 2D da rocha-mãe (bedrock) ao céu, digite `/claimwe`.  

Se você deseja criar uma reivindicação 3D que respeite a altura de sua seleção, digite `/cuboid` então `/claimwe`.  
Usando `/cuboid` colocará você no modo de reivindicação 3D, onde sua seleção sempre respeitará a altura que você deseja criar.

## 4. Como faço para usar os visuais WECUI em reivindicações GD?**

Certifique-se de usar a ferramenta de inspeção (minecraft:stick "Graveto" por padrão) ou esteja em `/claimmode` e clique com o botão direito do mouse em uma área.
  
## 5. Como faço para permitir que todos acessem meu spawn?** 

Dê a eles trust de acesso usando `/at public` onde "public" representa todos os jogadores.
Veja https://github.com/bloodmc/GriefDefender/wiki/Trust-System.  

Se você precisar de proteção mais detalhada, use o sistema de sinalização.
Veja https://github.com/bloodmc/GriefDefender/wiki/Flag-Definitions-GUI

## 6. Como seleciono uma reivindicação específica para trabalhar? (alterar configurações, etc.)**

A maioria dos comandos GD usará a reivindicação em que você está. Simplesmente permaneça na reivindicação e faça sua alteração.
Se a reivindicação estiver longe, use `/claimlist` e teletransporte para ela.

## 7. Como faço para testar bandeiras como um jogador não trust em uma reivindicação?**

Use `/cfdebug` para se colocar no modo de depuração do bandeira de reivindicação e, em seguida, execute qualquer ação.
Isso o definirá internamente como um jogador não trust para todas as reivindicações. Quando terminar, basta executar o comando `/cfdebug` novamente.  

## 8. Existe uma maneira de permitir uma permissão em todas as reivindicações, porém negá-la na região selvagem?**

  - ### Para negar a permissão de um jogador específico em região selvagem

1. Atribua permissão a todos os jogadores no LuckPerms.
2. Fique na reivindicação de região selvagem.
3. Execute o comando `/cpp <playername> <permission> false`

  - ### To deny a specific group permission in wilderness

1. Atribua permissão a todos os jogadores no LuckPerms.
2. Fique na reivindicação de região selvagem.
3. Execute o comando `/cpg <group> <permission> false`

Nota: As mesmas etapas podem ser aplicadas a qualquer reivindicação.

## 9. Como faço para impedir que um jogador execute um comando por exemplo `/sethome` em uma reivindicação?**  

  - ### Negue a permissão em um grupo em reivindicação.

1. Fique na reivindicação onde você deseja negar a permissão.
2. Execute o comando `/cpg <Grupo> <Permissão> false`  
ex. Para negar a permissão `essentials.sethome` para o grupo `default`  
`/cpg default essentials.sethome false`  

  - ### Deny the permission on a single player in claim.  

1. Fique na reivindicação onde você deseja negar a permissão.
2. Execute o comando `/cpp <NomeDoJogador> <Permissão> false`  
ex. Para negar a permissão `essentials.sethome` para o jogador `Mike`  
`/cpp Mike essentials.sethome false`  

  - ### Negue command-execute (executar um comando) para certo grupo em uma reivindicação

1. Fique na reivindicação onde você deseja negar a bandeira `command-execute`.  
2. Execute o comando `/cfg <Grupo> command-execute <pluginid:command[arg]> false`  
ex. Para negar o comando essentials `/sethome` para o grupo `default`  
`/cfg default command-execute essentials:sethome false`  

  - ### Negue a bandeira command-execute (executar um comando) para um único jogador na reivndicação

1. Fique na reivindicação onde você deseja negar a bandeira `command-execute`  
2. Execute o comando `/cfp <NomeDoJogador> command-execute <pluginid:command[arg]> false`  
ex. Para negar o comando essentials `/sethome` para o jogador `Mike`  
`/cfp Mike command-execute essentials:sethome false`  

Nota: Usar `/gddebug record claim` para obter as informações adequadas para o comando.
Veja https://github.com/bloodmc/GriefDefender/wiki/Debugging para mais informações.

## 10. Como permitir que meus administradores ignorem a proteção da reivindicação ?**  

Conceda a eles acesso para usar o `/ignoreclaims` o comando alterna entre respeitar e ignorar a proteção do GriefDefender.

## 11. Como permitir itens do EssentialsX como o `/sethome` em apenas reivindicações em que os usuários tenham trust?**

Execute o comando `/cf command-execute essentials:sethome false default=user`

## 12. Como permito que os jogadores voem (fly) em suas próprias reivindicações?**

1. Negue o voo (fly) globalmente em todas as reivindicações executando o comando `/claimoption player-deny-flight true default=global`
2. Dê permissão aos jogadores para usar o commando `fly`
3. Atribuir a permissão `griefdefender.admin.option.perk.fly.owner` para o jogador ou grupo.

## 13. Como dou aos donos de reivindicações a capacidade de permitir que outros jogadores voem em suas reivindicações?**

1. Os administradores precisam atribuir a todos os jogadores as seguintes permissões de privilégio
```
griefdefender.admin.option.perk.fly.accessor
griefdefender.admin.option.perk.fly.builder
griefdefender.admin.option.perk.fly.container
griefdefender.admin.option.perk.fly.manager
```
Nota: Não se esqueça de executar `/gdreload` depois de alterar as permissões

Essas permissões permitem que o jogador com confiável voe em reivindicações nas quais ele tenha trust.

2. Faça com que os proprietários das reivindicações confiem nos jogadores que desejam enviar em suas reivindicações.

## 14. É possível copiar bandeiras de uma reivindicação de administrador para outra reivindicação de administrador?**

1. From the `/gd` menu navigate to `CLAIM` then `CLAIMGROUP`.
2. Click `ADMIN` tab.
3. Click `+` button.
4. Enter claimgroup name.
5. Go to an admin claim that you want joined to group and navigate back to `CLAIMGROUP` in gd menu.
6. Click `ADMIN` tab.
7. Click `JOIN`

Repeat steps 5-7 for each claim you wanted joined to claimgroup.

Once this is complete, setup your flags in any claim joined to claimgroup. All claims in claimgroup will share flags.

Note: Unjoining a claim from a claimgroup will revert the claim back to its local flags.

## 15. How do Geyser players confirm commands?  

They can use the command `/gdconfirm`  


## 16. How do I prevent players from earning blocks while AFK?  

1. Open `global.conf`.  
2. Search for the following section  
```
# The minimum threshold of movement (in blocks) required to receive accrued claim blocks. (Default: 0)
# Note: The claim block task runs every 5 minutes which is the time each player will get to move the required amount of blocks.
claim-block-task-move-threshold=0
```
3. Set `claim-block-task-move-threshold` to the amount of blocks you want to require players to move every 5 minutes to not be considered AFK.  
