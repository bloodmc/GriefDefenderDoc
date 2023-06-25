---
title: mcMMO
tag: Info
category: hooks
icon: quill
---

As seguintes extensões foram adicionadas para [mcMMO](https://mcmmo.org/#home) no GriefDefender

![Visualização das Opções de Reivindicação](https://i.imgur.com/d38LRkv.gif)

Gerencie em `/claimoption` ou mais informações na seção dedicada [Opções](/br/wiki/basic/Options.html)  

## Instalação

### Instalar bandeiras do mcMMO  

* [presets/mcmmo.conf](https://raw.githubusercontent.com/bloodmc/GriefDefenderDefinitions/master/mcMMO/presets/mcmmo.conf)

Clique com o botão direito na página e selecione "Salvar como", salve como `mcmmo.conf` em `config/griefdefender/presets`

* [lang/presets/mcmmo/en_US.conf](https://raw.githubusercontent.com/bloodmc/GriefDefenderDefinitions/master/mcMMO/lang/presets/mcmmo/en_US.conf) ([pt_BR](https://raw.githubusercontent.com/bloodmc/GriefDefenderDefinitions/master/mcMMO/lang/presets/mcmmo/pt_BR.conf))

Clique com o botão direito na página e selecione "Salvar como", salve como `en_US.conf` em `config/griefdefender/lang/presets/mcmmo`    

Depois de fazer os dois, `/gdreload`  

Execute o comando `/claimoption` e você verá uma nova predefinição chamada `mcmmo`. Clique para carregar e configurar por reivindicação, conforme necessário.  

Nota: Se você não vir a predefinição na interface, certifique-se de que os arquivos acima terminam em `.conf`.  

Consulte [Interface de Definições de Bandeira](/br/wiki/basic/Flag-Definitions-GUI.html) para obter mais informações sobre como trabalhar com predefinições e configurações padrões para bandeiras.  

## Bandeiras

- `ability-activate` - Controla se uma habilidade mcmmo pode ou não ser ativada na reivindicação.
Os seguintes contextos são suportados por este sinalizador
    - `mcmmo:skill_level` - O nível de habilidade do jogador mcmmo
    - `mcmmo:skill_type` - O tipo de habilidade.
* `player-disarm` - Controla se um jogador pode ou não ser desarmado na reivindicação.
- `rupture-damage` - Controla se o dano por ruptura pode ou não ser aplicado na reivindicação.
Os seguintes contextos são suportados por este sinalizador
    - `mcmmo:damage_amount` - A quantidade de dano de ruptura.
- `skill-use` - Controla se uma habilidade mcmmo pode ou não ser usada na reivindicação.  
Os seguintes contextos são suportados por este sinalizador
    - `mcmmo:brewing_block` - O bloco de fermentação usado durante o evento de preparação de alquimia.
    - `mcmmo:brewing_ingredient` - O ingrediente cervejeiro usado durante o evento de alquimia.
    - `mcmmo:repair_amount` - A quantidade de reparo usada durante o evento de verificação de reparo.
    - `mcmmo:repair_material` - O material de reparo usado durante o evento de verificação de reparo.
    - `mcmmo:repar_object` - O objeto que foi reparado.
    - `mcmmo:salvage_item` - O item recuperado durante o evento de salvamento.
    - `mcmmo:skill_level` - O nível de habilidade do jogador mcmmo
    - `mcmmo:skill_type` - O tipo de habilidade.
    - `mcmmo:speed` - A velocidade durante o evento de catálise do jogador.

## Opções

As seguintes opções foram adicionadas:  

* `death-penalty` - Controla se a pena de morte será ou não aplicada na reivindicação.
* `xp-gain-modifier` - Controla o modificador de ganho de xp aplicado ao jogador na reivindicação.
Os seguintes contextos são suportados por esta opção
    - `mcmmo:skill_level` - O nível de habilidade do jogador mcmmo
    - `mcmmo:skill_type` - O tipo de habilidade.
    - `mcmmo:reason` - A razão para ganhar xp.

## Party

Juntar-se a uma party concederá confiança de acesso ao grupo mcmmo em todas as reivindicações de propriedade.
Juntar-se a um aliado concederá confiança do acessador ao mcmmo aliado em todas as reivindicações de propriedade.
Sair de uma parte removerá toda a confiança da parte mcmmo em todas as reivindicações de propriedade.
A remoção de um aliado removerá toda a confiança no aliado mcmmo em todas as reivindicações de propriedade.
Para confiar em uma parte, use o comando `/trustgroup` do GD.
Ex.

`/trustgroup <nome_da_party> <tipo_de_trust>`

`/trustgroup mmoparty builder`

## Depuração

Todas as bandeiras do mcmmo aparecerão na [Depuração do GriefDefender](/br/wiki/advanced/Debugging.html) como qualquer outra bandeira.
