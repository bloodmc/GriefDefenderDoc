---
title: Pixelmon
---

## Pixelmon

:warning:  O GD Sponge requer o Luckperms 5.3.98, e as versões recentes do Luckperms for Sponge suportam apenas a Sponge API 8. O Luckperms 5.3.98 pode ser encontrado no Ore https://ore.spongepowered.org/Luck/LuckPerms/versions/5.3.98

### Configurar

##### Permitir que Pokébolas ocupadas gerem animais pixelmon por padrão
* Execute o comando `/cf entity-spawn #pixelmon:animal true source=pixelmon:occupied_pokeball default=global`  
Nota: Este comando deve ser executado por um administrador com permissão `griefdefender.advanced.*`  

##### Força: permite que Pokébolas dêem impactos em blocos
* Execute o comando `/cf projectile-impact-block any true source=pixelmon:occupied_pokeball override=global`  
Nota: Este comando deve ser executado por um administrador com permissão `griefdefender.advanced.*`  

#### Instala bandeiras definidas para o Pixelmon

* https://raw.githubusercontent.com/bloodmc/GriefDefenderDefinitions/master/1.12.2/presets/pixelmon.conf

  Clique com o botão direito na página e selecione "Salvar como...", salve como `pixelmon.conf` em config/griefdefender/presets

* https://raw.githubusercontent.com/bloodmc/GriefDefenderDefinitions/master/1.12.2/lang/presets/pixelmon/en_US.conf

  Clique com o botão direito na página e selecione "Salvar como...", salve como `en_US.conf` em config/griefdefender/lang/presets/pixelmon

* Depois de fazer os dois, execute /gdreload

* Execute o comando `/cf` e você deverá ver uma nova predefinição chamada `pixelmon`. Clique nele para carregar e configurar por reivindicação conforme o necessário.  

Nota: Se você não ver a predefinição na GUI, verifique se os arquivos acima terminam `.conf`.  

Veja https://github.com/bloodmc/GriefDefender/wiki/Flag-Definitions-GUI para obter mais informações sobre como trabalhar com predefinições e configurações padrão para bandeiras.