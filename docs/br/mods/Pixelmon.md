---
title: Pixelmon
---

## Pixelmon

:warning:  O GD Sponge requer o [Luckperms 5.3.98](https://ore.spongepowered.org/Luck/LuckPerms/versions/5.3.98), e as versões recentes do Luckperms for Sponge suportam apenas a Sponge API 8. O [Luckperms 5.3.98](https://ore.spongepowered.org/Luck/LuckPerms/versions/5.3.98) pode ser encontrado no [Ore](https://ore.spongepowered.org/)

## Configurar

### Permitir que Pokébolas ocupadas gerem animais pixelmon por padrão
* Execute o comando `/cf entity-spawn #pixelmon:animal true source=pixelmon:occupied_pokeball default=global`  
Nota: Este comando deve ser executado por um administrador com permissão `griefdefender.advanced.*`  

### Força: permite que Pokébolas dêem impactos em blocos
* Execute o comando `/cf projectile-impact-block any true source=pixelmon:occupied_pokeball override=global`  
Nota: Este comando deve ser executado por um administrador com permissão `griefdefender.advanced.*`  

## Instala bandeiras definidas para o Pixelmon

* [presets/pixelmon.yml](https://raw.githubusercontent.com/bloodmc/GriefDefenderDefinitions/master/1.12.2/presets/pixelmon.yml)

  Clique com o botão direito na página e selecione "Salvar como...", salve como `pixelmon.yml` em `config/griefdefender/presets`

* [lang/presets/pixelmon/en_US.yml](https://raw.githubusercontent.com/bloodmc/GriefDefenderDefinitions/master/1.12.2/lang/presets/pixelmon/en_US.yml) ([zh_CN](https://raw.githubusercontent.com/bloodmc/GriefDefenderDefinitions/master/1.12.2/lang/presets/pixelmon/zh_CN.yml)/[pt_BR](https://raw.githubusercontent.com/bloodmc/GriefDefenderDefinitions/master/1.12.2/lang/presets/pixelmon/pt_BR.yml))

  Clique com o botão direito na página e selecione "Salvar como...", salve como `en_US.yml` em config/griefdefender/lang/presets/pixelmon

* Depois de fazer os dois, execute /gdreload

* Execute o comando `/cf` e você deverá ver uma nova predefinição chamada `pixelmon`. Clique nele para carregar e configurar por reivindicação conforme o necessário.  

Nota: Se você não ver a predefinição na GUI, verifique se os arquivos acima terminam `.yml`.  

Veja [Interface de definições de bandeira](/br/wiki/basic/Flag-Definitions-GUI.html) para obter mais informações sobre como trabalhar com predefinições e configurações padrão para bandeiras.

## FITFC Otimização para o PixelMon

::: info Requer mescla com a Otimização para o Minecraft
Essas otimizações precisam ser mescladas com as otimizações para o Minecraft:*, recomendo utilizar a otimização [FITFC Otimização para o Minecraft](/br/wiki/advanced/Optimizations.html#fitfc-s-otimizacao)
:::

<details>
  <summary>FITFC Blacklist-PixelMon</summary>

```
GriefDefender {
    entity-damage-source-blacklist=[]
    flag-id-blacklist {
        block-break=[]
        block-grow=[]
        block-modify=[]
        block-place=[]
        block-spread=[]
        collide-block=[
	# pixelmon_grass
			"pixelmon:pixelmon_grass"
		]
        collide-entity=[]
        command-execute=[]
        command-execute-pvp=[]
        enter-claim=[]
        entity-chunk-spawn=[]
        entity-damage=[]
        entity-riding=[]
        entity-spawn=[
	# empty pokeball
			"pixelmon:empty_pokeball",
        ]
        entity-teleport-from=[]
        entity-teleport-to=[]
        exit-claim=[]
        explosion-block=[]
        explosion-entity=[]
        interact-block-primary=[]
        interact-block-secondary=[
	# tv
			"pixelmon:tv",
			"pixelmon:tv2",
	# berrys
			"pixelmon:berry_leaves_cheri",
			"pixelmon:berry_leaves_chesto",
			"pixelmon:berry_leaves_pecha",
			"pixelmon:berry_leaves_rawst",
			"pixelmon:berry_leaves_aspear",
			"pixelmon:berry_leaves_leppa",
			"pixelmon:berry_leaves_oran",
			"pixelmon:berry_leaves_persim",
			"pixelmon:berry_leaves_lum",
			"pixelmon:berry_leaves_sitrus",
			"pixelmon:berry_leaves_figy",
			"pixelmon:berry_leaves_wiki",
			"pixelmon:berry_leaves_mago",
			"pixelmon:berry_leaves_aguav",
			"pixelmon:berry_leaves_iapapa",
			"pixelmon:berry_leaves_razz",
			"pixelmon:berry_leaves_bluk",
			"pixelmon:berry_leaves_nanab",
			"pixelmon:berry_leaves_wepear",
			"pixelmon:berry_leaves_pinap",
			"pixelmon:berry_leaves_pomeg",
			"pixelmon:berry_leaves_kelpsy",
			"pixelmon:berry_leaves_qualot",
			"pixelmon:berry_leaves_hondew",
			"pixelmon:berry_leaves_grepa",
			"pixelmon:berry_leaves_tamato",
			"pixelmon:berry_leaves_cornn",
			"pixelmon:berry_leaves_"magost,
			"pixelmon:berry_leaves_rabuta",
			"pixelmon:berry_leaves_nomel",
			"pixelmon:berry_leaves_spelon",
			"pixelmon:berry_leaves_pamtre",
			"pixelmon:berry_leaves_watmel",
			"pixelmon:berry_leaves_durin",
			"pixelmon:berry_leaves_belue",
			"pixelmon:berry_leaves_occa",
			"pixelmon:berry_leaves_passho",
			"pixelmon:berry_leaves_wacan",
			"pixelmon:berry_leaves_rindo",
			"pixelmon:berry_leaves_yache",
			"pixelmon:berry_leaves_chople",
			"pixelmon:berry_leaves_kebia",
			"pixelmon:berry_leaves_shuca",
			"pixelmon:berry_leaves_coba",
			"pixelmon:berry_leaves_payapa",
			"pixelmon:berry_leaves_tanga",
			"pixelmon:berry_leaves_charti",
			"pixelmon:berry_leaves_kasib",
			"pixelmon:berry_leaves_haban",
			"pixelmon:berry_leaves_colbur",
			"pixelmon:berry_leaves_babiri",
			"pixelmon:berry_leaves_chilan",
			"pixelmon:berry_leaves_roseli",
			"pixelmon:berry_leaves_liechi",
			"pixelmon:berry_leaves_ganlon",
			"pixelmon:berry_leaves_salac",
			"pixelmon:berry_leaves_petaya",
			"pixelmon:berry_leaves_apicot",
			"pixelmon:berry_leaves_lansat",
			"pixelmon:berry_leaves_starf",
			"pixelmon:berry_leaves_pumkin",
			"pixelmon:berry_leaves_drash",
			"pixelmon:berry_leaves_eggant",
			"pixelmon:berry_leaves_strib",
			"pixelmon:berry_leaves_nutpea",
			"pixelmon:berry_leaves_ginema",
			"pixelmon:berry_leaves_kuo",
			"pixelmon:berry_leaves_yago",
			"pixelmon:berry_leaves_touga",
			"pixelmon:berry_leaves_niniku",
			"pixelmon:berry_leaves_topo",
			"pixelmon:berry_leaves_enigma",
			"pixelmon:berry_leaves_micle",
			"pixelmon:berry_leaves_custap",
			"pixelmon:berry_leaves_jaboca",
			"pixelmon:berry_leaves_rowap",
			"pixelmon:berry_leaves_kee",
			"pixelmon:berry_leaves_maranga",
	# apricorns tree
			"pixelmon:white_apricorn_tree",
            "pixelmon:black_apricorn_tree",
            "pixelmon:pink_apricorn_tree",
            "pixelmon:green_apricorn_tree",
            "pixelmon:blue_apricorn_tree",
            "pixelmon:yellow_apricorn_tree",
            "pixelmon:red_apricorn_tree"
	# apricorns
			"pixelmon:black_apricorn",
			"pixelmon:white_apricorn",
			"pixelmon:pink_apricorn",
			"pixelmon:green_apricorn",
			"pixelmon:blue_apricorn",
			"pixelmon:yellow_apricorn",
			"pixelmon:red_apricorn",
	# color vending machine
			"pixelmon:pink_vending_machine",
			"pixelmon:blue_vending_machine",
			"pixelmon:green_vending_machine",
			"pixelmon:orange_vending_machine",
			"pixelmon:red_vending_machine",
			"pixelmon:yellow_vending_machine",
			"pixelmon:brown_vending_machine",
			"pixelmon:white_vending_machine",
			"pixelmon:gray_vending_machine",
			"pixelmon:black_vending_machine",
			"pixelmon:cyan_vending_machine",
			"pixelmon:purple_vending_machine",
	# trade_machine
			"pixelmon:trade_machine",
	# pc
			"pixelmon:pc",
	# fossil
			#"pixelmon:fossil_machine",
			#"pixelmon:fossil_cleaner",
	# froggy chair
			"pixelmon:froggy_chair",
	# chair
			"pixelmon:red_chair",
			"pixelmon:yellow_chair",
			"pixelmon:green_chair",
			"pixelmon:pink_chair",
			"pixelmon:blue_chair",
			"pixelmon:black_chair",
			"pixelmon:gray_chair",
			"pixelmon:cyan_chair",
			"pixelmon:white_chair",
			"pixelmon:brown_chair",
			"pixelmon:orange_chair",
			"pixelmon:purple_chair",
	# cushion chair
			"pixelmon:red_cushion_chair",
			"pixelmon:yellow_cushion_chair",
			"pixelmon:green_cushion_chair",
			"pixelmon:pink_cushion_chair",
			"pixelmon:blue_cushion_chair",
			"pixelmon:black_cushion_chair",
			"pixelmon:gray_cushion_chair",
			"pixelmon:cyan_cushion_chair",
			"pixelmon:white_cushion_chair",
			"pixelmon:brown_cushion_chair",
			"pixelmon:orange_cushion_chair",
			"pixelmon:purple_cushion_chair",
	# armchair
			"pixelmon:red_armchair",
			"pixelmon:yellow_armchair",
			"pixelmon:green_armchair",
			"pixelmon:pink_armchair",
			"pixelmon:blue_armchair",
			"pixelmon:black_armchair",
			"pixelmon:gray_armchair",
			"pixelmon:cyan_armchair",
			"pixelmon:white_armchair",
			"pixelmon:brown_armchair",
			"pixelmon:orange_armchair",
			"pixelmon:purple_armchair",
	# couch
			"pixelmon:red_couch",
			"pixelmon:yellow_couch",
			"pixelmon:green_couch",
			"pixelmon:pink_couch",
			"pixelmon:blue_couch",
			"pixelmon:black_couch",
			"pixelmon:gray_couch",
			"pixelmon:cyan_couch",
			"pixelmon:white_couch",
			"pixelmon:brown_couch",
			"pixelmon:orange_couch",
			"pixelmon:purple_couch",
	# folding
			"pixelmon:red_folding_chair",
			"pixelmon:yellow_folding_chair",
			"pixelmon:green_folding_chair",
			"pixelmon:pink_folding_chair",
			"pixelmon:blue_folding_chair",
			"pixelmon:black_folding_chair",
			"pixelmon:gray_folding_chair",
			"pixelmon:cyan_folding_chair",
			"pixelmon:white_folding_chair",
			"pixelmon:brown_folding_chair",
			"pixelmon:orange_folding_chair",
			"pixelmon:purple_folding_chair",
	# Healer
			"pixelmon:healer",
			"pixelmon:orange_healer",
			"pixelmon:magenta_healer",
			"pixelmon:light_blue_healer",
			"pixelmon:yellow_healer",
			"pixelmon:lime_healer",
			"pixelmon:pink_healer",
			"pixelmon:gray_healer",
			"pixelmon:light_gray_healer",
			"pixelmon:cyan_healer",
			"pixelmon:purple_healer",
			"pixelmon:blue_healer",
			"pixelmon:brown_healer",
			"pixelmon:green_healer",
			"pixelmon:red_healer",
			"pixelmon:black_healer",
	# Fridge
			#"pixelmon:fridge",
	# End_table
			#"pixelmon:end_table",
			"pixelmon:pixelmon_grass"
		]
        interact-entity-primary=[]
        interact-entity-secondary=[
            "pixelmon:chattingnpc",
			"pixelmon:relearner",
			"pixelmon:tutor",
			"pixelmon:nursejoy",
			"pixelmon:oldfisherman",
			"pixelmon:shopkeeper",
			"pixelmon:trader"
        ]
        interact-inventory=[
			"pixelmon:end_table",
			"pixelmon:fridge"
		]
        interact-inventory-click=[]
        interact-item-primary=[]
        interact-item-secondary=[
	# pokeball
			"pixelmon:poke_ball",
	# pokeball 1.12.2
			"pixelmon:great_ball",
			"pixelmon:ultra_ball",
			"pixelmon:master_ball",
			"pixelmon:level_ball",
			"pixelmon:moon_ball",
			"pixelmon:friend_ball",
			"pixelmon:love_ball",
			"pixelmon:safari_ball",
			"pixelmon:heavy_ball",
			"pixelmon:fast_ball",
			"pixelmon:repeat_ball",
			"pixelmon:timer_ball",
			"pixelmon:nest_ball",
			"pixelmon:net_ball",
			"pixelmon:dive_ball",
			"pixelmon:luxury_ball",
			"pixelmon:heal_ball",
			"pixelmon:dusk_ball",
			"pixelmon:premier_ball",
			"pixelmon:sport_ball",
			"pixelmon:quick_ball",
			"pixelmon:lure_ball",
			"pixelmon:park_ball",
			"pixelmon:cherish_ball",
			"pixelmon:gs_ball",
			"pixelmon:beast_ball",
			"pixelmon:dream_ball",
	# bags 
			"pixelmon:white_poke_bag",
			"pixelmon:orange_poke_bag",
			"pixelmon:magenta_poke_bag",
			"pixelmon:light_blue_poke_bag",
			"pixelmon:yellow_poke_bag",
			"pixelmon:lime_poke_bag",
			"pixelmon:pink_poke_bag",
			"pixelmon:gray_poke_bag",
			"pixelmon:light_gray_poke_bag",
			"pixelmon:cyan_poke_bag",
			"pixelmon:purple_poke_bag",
			"pixelmon:blue_poke_bag",
			"pixelmon:brown_poke_bag",
			"pixelmon:green_poke_bag",
			"pixelmon:red_poke_bag",
			"pixelmon:black_poke_bag",
	# pokestop
			"pixelmon:legendary_pokestop",
			"pixelmon:rare_pokestop",
			"pixelmon:common_pokestop",
	# item_finder
			"pixelmon:item_finder",
	# berrys
			"pixelmon:berry_leaves_cheri",
			"pixelmon:berry_leaves_chesto",
			"pixelmon:berry_leaves_pecha",
			"pixelmon:berry_leaves_rawst",
			"pixelmon:berry_leaves_aspear",
			"pixelmon:berry_leaves_leppa",
			"pixelmon:berry_leaves_oran",
			"pixelmon:berry_leaves_persim",
			"pixelmon:berry_leaves_lum",
			"pixelmon:berry_leaves_sitrus",
			"pixelmon:berry_leaves_figy",
			"pixelmon:berry_leaves_wiki",
			"pixelmon:berry_leaves_mago",
			"pixelmon:berry_leaves_aguav",
			"pixelmon:berry_leaves_iapapa",
			"pixelmon:berry_leaves_razz",
			"pixelmon:berry_leaves_bluk",
			"pixelmon:berry_leaves_nanab",
			"pixelmon:berry_leaves_wepear",
			"pixelmon:berry_leaves_pinap",
			"pixelmon:berry_leaves_pomeg",
			"pixelmon:berry_leaves_kelpsy",
			"pixelmon:berry_leaves_qualot",
			"pixelmon:berry_leaves_hondew",
			"pixelmon:berry_leaves_grepa",
			"pixelmon:berry_leaves_tamato",
			"pixelmon:berry_leaves_cornn",
			"pixelmon:berry_leaves_"magost,
			"pixelmon:berry_leaves_rabuta",
			"pixelmon:berry_leaves_nomel",
			"pixelmon:berry_leaves_spelon",
			"pixelmon:berry_leaves_pamtre",
			"pixelmon:berry_leaves_watmel",
			"pixelmon:berry_leaves_durin",
			"pixelmon:berry_leaves_belue",
			"pixelmon:berry_leaves_occa",
			"pixelmon:berry_leaves_passho",
			"pixelmon:berry_leaves_wacan",
			"pixelmon:berry_leaves_rindo",
			"pixelmon:berry_leaves_yache",
			"pixelmon:berry_leaves_chople",
			"pixelmon:berry_leaves_kebia",
			"pixelmon:berry_leaves_shuca",
			"pixelmon:berry_leaves_coba",
			"pixelmon:berry_leaves_payapa",
			"pixelmon:berry_leaves_tanga",
			"pixelmon:berry_leaves_charti",
			"pixelmon:berry_leaves_kasib",
			"pixelmon:berry_leaves_haban",
			"pixelmon:berry_leaves_colbur",
			"pixelmon:berry_leaves_babiri",
			"pixelmon:berry_leaves_chilan",
			"pixelmon:berry_leaves_roseli",
			"pixelmon:berry_leaves_liechi",
			"pixelmon:berry_leaves_ganlon",
			"pixelmon:berry_leaves_salac",
			"pixelmon:berry_leaves_petaya",
			"pixelmon:berry_leaves_apicot",
			"pixelmon:berry_leaves_lansat",
			"pixelmon:berry_leaves_starf",
			"pixelmon:berry_leaves_pumkin",
			"pixelmon:berry_leaves_drash",
			"pixelmon:berry_leaves_eggant",
			"pixelmon:berry_leaves_strib",
			"pixelmon:berry_leaves_nutpea",
			"pixelmon:berry_leaves_ginema",
			"pixelmon:berry_leaves_kuo",
			"pixelmon:berry_leaves_yago",
			"pixelmon:berry_leaves_touga",
			"pixelmon:berry_leaves_niniku",
			"pixelmon:berry_leaves_topo",
			"pixelmon:berry_leaves_enigma",
			"pixelmon:berry_leaves_micle",
			"pixelmon:berry_leaves_custap",
			"pixelmon:berry_leaves_jaboca",
			"pixelmon:berry_leaves_rowap",
			"pixelmon:berry_leaves_kee",
			"pixelmon:berry_leaves_maranga",
	# apricorns
			"pixelmon:black_apricorn",
			"pixelmon:white_apricorn",
			"pixelmon:pink_apricorn",
			"pixelmon:green_apricorn",
			"pixelmon:blue_apricorn",
			"pixelmon:yellow_apricorn",
			"pixelmon:red_apricorn",
	# color vending machine
			"pixelmon:pink_vending_machine",
			"pixelmon:blue_vending_machine",
			"pixelmon:green_vending_machine",
			"pixelmon:orange_vending_machine",
			"pixelmon:red_vending_machine",
			"pixelmon:yellow_vending_machine",
			"pixelmon:brown_vending_machine",
			"pixelmon:white_vending_machine",
			"pixelmon:gray_vending_machine",
			"pixelmon:black_vending_machine",
			"pixelmon:cyan_vending_machine",
			"pixelmon:purple_vending_machine",
	# trade_machine
			"pixelmon:trade_machine",
	# pc
			"pixelmon:pc",
	# fossil
			#"pixelmon:fossil_machine",
			#"pixelmon:fossil_cleaner",
	# froggy chair
			"pixelmon:froggy_chair",
	# chair
			"pixelmon:red_chair",
			"pixelmon:yellow_chair",
			"pixelmon:green_chair",
			"pixelmon:pink_chair",
			"pixelmon:blue_chair",
			"pixelmon:black_chair",
			"pixelmon:gray_chair",
			"pixelmon:cyan_chair",
			"pixelmon:white_chair",
			"pixelmon:brown_chair",
			"pixelmon:orange_chair",
			"pixelmon:purple_chair",
	# cushion chair
			"pixelmon:red_cushion_chair",
			"pixelmon:yellow_cushion_chair",
			"pixelmon:green_cushion_chair",
			"pixelmon:pink_cushion_chair",
			"pixelmon:blue_cushion_chair",
			"pixelmon:black_cushion_chair",
			"pixelmon:gray_cushion_chair",
			"pixelmon:cyan_cushion_chair",
			"pixelmon:white_cushion_chair",
			"pixelmon:brown_cushion_chair",
			"pixelmon:orange_cushion_chair",
			"pixelmon:purple_cushion_chair",
	# armchair
			"pixelmon:red_armchair",
			"pixelmon:yellow_armchair",
			"pixelmon:green_armchair",
			"pixelmon:pink_armchair",
			"pixelmon:blue_armchair",
			"pixelmon:black_armchair",
			"pixelmon:gray_armchair",
			"pixelmon:cyan_armchair",
			"pixelmon:white_armchair",
			"pixelmon:brown_armchair",
			"pixelmon:orange_armchair",
			"pixelmon:purple_armchair",
	# couch
			"pixelmon:red_couch",
			"pixelmon:yellow_couch",
			"pixelmon:green_couch",
			"pixelmon:pink_couch",
			"pixelmon:blue_couch",
			"pixelmon:black_couch",
			"pixelmon:gray_couch",
			"pixelmon:cyan_couch",
			"pixelmon:white_couch",
			"pixelmon:brown_couch",
			"pixelmon:orange_couch",
			"pixelmon:purple_couch",
	# folding
			"pixelmon:red_folding_chair",
			"pixelmon:yellow_folding_chair",
			"pixelmon:green_folding_chair",
			"pixelmon:pink_folding_chair",
			"pixelmon:blue_folding_chair",
			"pixelmon:black_folding_chair",
			"pixelmon:gray_folding_chair",
			"pixelmon:cyan_folding_chair",
			"pixelmon:white_folding_chair",
			"pixelmon:brown_folding_chair",
			"pixelmon:orange_folding_chair",
			"pixelmon:purple_folding_chair",
	# Healer
			"pixelmon:healer",
			"pixelmon:orange_healer",
			"pixelmon:magenta_healer",
			"pixelmon:light_blue_healer",
			"pixelmon:yellow_healer",
			"pixelmon:lime_healer",
			"pixelmon:pink_healer",
			"pixelmon:gray_healer",
			"pixelmon:light_gray_healer",
			"pixelmon:cyan_healer",
			"pixelmon:purple_healer",
			"pixelmon:blue_healer",
			"pixelmon:brown_healer",
			"pixelmon:green_healer",
			"pixelmon:red_healer",
			"pixelmon:black_healer",
	# Fridge
			#"pixelmon:fridge",
	# End_table
			#"pixelmon:end_table",
			"pixelmon:pixelmon_grass"
		]
        inventory-item-move=[]
        item-damage=[]
        item-drop=[]
        item-pickup=[]
        item-spawn=[]
        item-use=[]
        leaf-decay=[]
        liquid-flow=[]
        portal-use=[]
        projectile-impact-block=[
			"pixelmon:occupied_pokeball",
			"pixelmon:empty_pokeball"
		]
        projectile-impact-entity=[
            "pixelmon:occupied_pokeball",
			"pixelmon:empty_pokeball"
        ]
    }
    global-source=[]
    global-target=[]
}
```
</details>