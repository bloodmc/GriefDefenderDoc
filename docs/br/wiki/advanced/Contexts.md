---
title: Contextos
tag: Info
category: info
icon: image-text
---

# Contextos

Os contextos são uma parte fundamental de como o GriefDefender é capaz de aplicar proteção às reivindicações. Para entender como funciona, você deve primeiro entender o que é um Contexto. Veja [LuckPerms - Context](https://luckperms.net/wiki/Context)

Agora que você tem uma compreensão básica do que é um contexto e como eles funcionam com permissões, abaixo está uma lista de contextos que o GD usa com suas bandeiras e comando de opção.

Contexto                                          |     Valor     | Descrição | 
-------------------------------------------------|---------------|--------------|
```gd_claim```            |   ```<claim_uuid>```  | Aplica bandeira para reivindicação com uuid especificado.
```gd_claim_default```    |   ```admin```<br>```basic```<br>```subdivision```<br>```town```<br>```global```<br>```user```  | Aplica a bandeira como padrão a todas as reivindicações do tipo especificado. <br />Nota: Use `global` como valor para aplicar a todos os tipos.<br/>Nota: Use `user` como valor para aplicar a todos os tipos EXCETO região selvagem.
```gd_claim_override```   |   ```admin```<br>```basic```<br>```claim```<br>```subdivision```<br>```town```<br>```global```<br>```user```  | Aplica a bandeira como uma substituição a todas as reivindicações do tipo especificado. <br />Nota: Use `global` como valor para aplicar a todos os tipos.<br/>Nota: Use `user` como valor para aplicar a todos os tipos EXCETO região selvagem.
```source```   |   `<source_id>`  | Aplica bandeira a uma fonte específica. <br />Exemplo: `minecraft:creeper`
```target```   |   `<target_id>`  | Aplica bandeira a um destino específico. <br />Exemplo: `minecraft:player` <br />Nota: O destino é **SEMPRE** necessário após a bandeira no uso do comando /cf, mas mais de um destino pode ser especificado com o uso do contexto.
```state```   |   `<state>`  | Aplica bandeira a um estado de bloco específico. <br />Exemplo: `powered:true` <br /> Veja https://minecraft.gamepedia.com/Block_states para uma lista de todos os estados de bloco vanilla.
```used_item``` |   `<item_id>`  | Aplica a bandeira a um item usado específico. <br />Exemplo: `minecraft:diamond_sword`
```boots```   |   `<item_id>`   | Aplica a bandeira a botas desgastadas específicas. <br />Exemplo: `minecraft:diamond_boots`
```chestplate```   |   `<item_id>`   | Aplica a bandeira a um peitoral desgastado específico. <br />Exemplo: `minecraft:diamond_chestplate`
```helmet```   |   `<item_id>`   | Aplica a bandeira a um capacete específico usado. <br />Exemplo: `minecraft:diamond_helmet
```leggings```   |   `<item_id>`   | Aplica a bandeira a leggings desgastadas específicas. <br />Exemplo: `minecraft:diamond_leggings`
```enchant```   |   `<enchant_id>`   |Aplica bandeira para encantamento específico no item. <br />Exemplo: `minecraft:flame`
```enchant_data```   |   `<data_id>`   | Aplica bandeira a dados de encantamento específicos no item. <br />Exemplo: `lvl:3`
```mainhand_enchant```   |   `<enchant_id>`   |Aplica a bandeira a um encantamento específico no item na mão principal. <br />Exemplo: `minecraft:efficiency`
```offhand_enchant```   |   `<enchant_id>`   | Aplica a bandeira a um encantamento específico no item na mão secundária. <br />Exemplo: `minecraft:unbreaking`
```mainhand_enchant_data```   |   `<data_id>`   | Aplica bandeira a dados de encantamento específicos no item na mão principal. <br />Exemplo: `lvl:1`
```offhand_enchant_data```   |   `<data_id>`   | Aplica bandeira a dados de encantamento específicos no item na mão secundária. <br />Exemplo: `lvl:2`
```potion_effect```   |   `<potion_effect_id>`   | Aplica a bandeira a um efeito de poção específico. <br />Exemplo: `minecraft:speed`
```run_as```   |   ```console```<br>```player```   | Execute o comando como console ou player. <br />Nota: Este contexto só se aplica a `griefdefender.player-command-enter` e `griefdefender.player-command-exit` opções
```run_for```   |   ```member```<br>```owner```<br>```public```   | Execute o comando apenas para membros com trust na reivindicação, apenas para o proprietário da reivindicação ou apenas para todos, exceto o proprietário da reivindicação. Mais de um pode ser usado ao mesmo tempo para usuários efetuados desejados. <br />Nota: Este contexto só se aplica às opções `griefdefender.player-command-enter` e `griefdefender.player-command-exit`
```server```   |   `<server_name>`  | Aplica bandeira a um servidor específico.<br />Nota: Isso usa o nome do servidor especificado no plugin de permissões. Se nenhum contexto de servidor for especificado ou o nome do servidor não estiver definido, o padrão será `global`.
```world```   |   `<world_name>`  | Aplica bandeira a um mundo específico.

Nota: Cada permissão de bandeira ou opção SEMPRE conterá um dos seguintes contextos principais `gd_claim`, `gd_claim_default` ou `gd_claim_override`.
Nota: Ao usar contextos com comandos `/cf`, `/claimoption` ou `flags.conf`, você pode usar os seguintes aliases para chaves de contexto
`gd_claim_default` - `default`  
`gd_claim_override` - `override`  
Então como exemplo
`/cf block-break grass false gd_claim_default=global`  
é o mesmo que 
`/cf block-break grass false default=global`  

No entanto, em LuckPerms, SEMPRE aparecerá como a chave de contexto real que, neste caso, seria `gd_claim_default`



### Como os contextos são aplicados


Nota: Um uuid significa [Identificador Único Universal](https://pt.wikipedia.org/wiki/Identificador_%C3%BAnico_universal) que o GD atribui a cada reivindicação criada no mundo. 


* **gd_claim**  

:warning: Este contexto NÃO afeta os proprietários de reivindicações quando usado com bandeiras, mas afeta os proprietários quando usado com opções :warning: 

O contexto `gd_claim=<claim_uuid>` é usado para aplicar uma bandeira ou opção a uma reivindicação específica que corresponda ao uuid especificado.
Observação: se você APENAS quiser aplicar uma bandeira ou opção à reivindicação em que está, o GD aplicará automaticamente esse contexto, desde que você não forneça `gd_claim`, `gd_claim_default` ou `gd_claim_override` na seção de contexto do comando. 

Vamos ver um exemplo de como isso ficaria no LuckPerms

```
    {
      "permission": "griefdefender.flag.entity-spawn",
      "value": false,
      "context": {
        "gd_claim": "9594ca69-47d6-422a-8236-7c697d832ac9",
        "target": "#animal"
      }
    },
```

Esta permissão está negando a bandeira `entity-spawn` na reivindicação com uuid `9594ca69-47d6-422a-8236-7c697d832ac9` visando apenas animais.


* **gd_claim_default**  

:warning: Este contexto NÃO afeta os proprietários de reivindicações quando usado com uma bandeira, mas afeta os proprietários quando usado com opções :warning: 

Ele é usado para aplicar uma bandeira ou opção a um ou mais tipos de reivindicação ou globalmente e atua como uma permissão padrão, o que significa que é aplicado aos usuários até que um contexto superior seja usado.
Veja https://github.com/bloodmc/GriefDefender/wiki/Contexts#context-core-priority

Vamos quebrar cada combinação

`gd_claim_default=admin` - Uma permissão contendo esse contexto afetará apenas as reivindicações administrativas e atuará como uma permissão padrão. 
`gd_claim_default=basic` - Uma permissão contendo esse contexto afetará apenas as reivindicações básicas e funcionará como uma permissão padrão. 
`gd_claim_default=subdivision` - Uma permissão contendo esse contexto afetará apenas as subdivisões e atuará como uma permissão padrão.  
`gd_claim_default=global` - Uma permissão que contenha esse contexto afetará todas as reivindicações, incluindo região selvagem, e funcionará como uma permissão padrão. 
`gd_claim_default=user` - Uma permissão contendo esse contexto afetará todas as reivindicações, exceto a região selvagem, e funcionará como uma permissão padrão. 

Tomando nosso exemplo anterior de LuckPerms, aqui está como ele pode aparecer como uma permissão

```
    {
      "permission": "griefdefender.flag.entity-spawn",
      "value": false,
      "context": {
        "gd_claim_default": "admin",
        "target": "#animal"
      }
    },
```

Essa permissão está negando a bandeira `entity-spawn` como padrão em todas as reivindicações administrativas e visando apenas animais.


* **gd_claim_override**  

:warning: Este contexto afeta os proprietários de reivindicações :warning: 

A coisa mais importante sobre esse contexto é que ele é o único contexto que afetará os proprietários de reivindicações.
É usado para aplicar uma bandeira ou opção a uma única reivindicação, um ou mais tipos de reivindicações ou globalmente. Funciona essencialmente como uma proibição.

Vamos quebrar cada combinação

`gd_claim_override=admin` - Uma permissão que contenha esse contexto afetará apenas as reivindicações administrativas.
`gd_claim_override=basic` - Uma permissão contendo esse contexto afetará apenas as reivindicações básicas.
`gd_claim_override=subdivision` - Uma permissão contendo esse contexto afetará apenas as subdivisões.
`gd_claim_override=global` - Uma permissão contendo este contexto afetará todas as reivindicações, incluindo região selvagem.
`gd_claim_override=user` - Uma permissão contendo este contexto afetará todas as reivindicações, exceto a região selvagem.

Vamos ver um exemplo de como isso ficaria no LuckPerms

```
    {
      "permission": "griefdefender.flag.entity-spawn",
      "value": false,
      "context": {
        "gd_claim_override": "basic",
        "target": "#animal"
      }
    },
```
Esta permissão está banindo a capacidade de gerar animais em TODAS as reivindicações básicas. Isso também afetará os proprietários de reivindicações.

### Prioridade principal do contexto

Um dos contextos a seguir é necessário em cada bandeira ou opção de permissão definida em LuckPerms
 `gd_claim_default`, `gd_claim`, `gd_claim_override`

A ordem de prioridade de contexto nas permissões é a seguinte, começando com o menor

* `gd_claim_default` - Prioridade mais baixa. Sempre usado com o `griefdefender_definition` e `griefdefender_default` grupos para aplicar como padrão a todos os jogadores.
* `gd_claim` - Superior ao padrão. Se estiver usando comandos ou GUI ADVANCED, essas permissões sempre terminarão no grupo `griefdefender_claim`. Se estiver usando a GUI de definição de bandeira com PRESET, as permissões sempre terminarão em `griefdefender_definition`.  
Nota: Ao usar comandos `/cfp`, `/cfg`, `/cop`, `/cog` que aplicará uma bandeira ou permissão ao usuário ou grupo, o contexto `gd_claim` sempre será usado.
* `gd_claim_override` - O contexto de maior prioridade que o GD usa. O GD sempre fará uma pesquisa de permissão para qualquer permissão com este contexto. Se encontrado, este será o resultado final. Para vários, os mesmos valores que `gd_claim_default` podem ser usados.


## Perguntas frequentes

1. Por que alguns contextos não afetam os proprietários quando usados ​​com bandeira?
R. A razão é simples, dá aos proprietários de reivindicações a capacidade de gerenciar suas próprias reivindicações de jogadores sem trust. Assim, um proprietário pode negar ações específicas, mas ainda assim não ser afetado.
2. As bandeira afetam jogadores com trust?
R. Os jogadores com trust ​​podem não ser afetados dependendo do nível de trust necessário para a ação. Por exemplo, se um jogador tentar colocar um bloco em uma reivindicação, a bandeira `block-place` será verificado com `builder`. O GD então verificaria se uma bandeira está negando especificamente esta ação contra o jogador e, caso contrário, prosseguiria para verificar se o usuário tem trust de 'builder' ou superior e, em caso afirmativo, pararia por aí e permitiria a ação.
Observação: as substituições sempre afetarão proprietários e jogadores com trust.
3. Como posso saber quais contextos, trust, permissões estão sendo verificados quando executo uma ação?
Se você for um administrador, poderá encontrar informações para cada ação executando um comando `/gddebug record Claim` dentro da reivindicação em que está.
Veja [Depuração](/br/wiki/advanced/Debugging.html) para mais informações