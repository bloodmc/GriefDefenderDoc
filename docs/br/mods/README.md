---
title: Mods
tag: mods
category: mods
---

#### Projetado desde o início para mods.

[Archlight](https://github.com/IzzelAliz/Arclight)/[Mohist](https://mohistmc.com/)/[Forge](https://files.minecraftforge.net/net/minecraftforge/forge/)/[Fabric](https://fabricmc.net/) são suportados.

compatível com quase todas as interações de mods Forge, a partir da [depuração](/br/wiki/advanced/Debugging.html) você pode criar regras para os seus mods!
Utilizando o [depuração](/br/wiki/advanced/Debugging.html) para criar novas [bandeiras](/br/wiki/advanced/Flags.html) de controles!

::: info Mods com preset disponíveis
- Pixelmon [Detalhes](/br/mods/Pixelmon) | [Otimização](/br/mods/Pixelmon.html#fitfc-otimizacao-para-o-pixelmon)
:::

::: danger Mods com incompatibilidade
Nota: Alguns mods ignoram eventos devido a plataforma não suportar a ação ou o mod não seguir os padrões, fazendo com que o GD não consiga capturar esses eventos para controlá-los.    
[Snow! Real Magic! - Modrinth](https://modrinth.com/mod/snow-real-magic) (Problema com Mixins)  
[Lycanites Mobs - CurseForge](https://www.curseforge.com/minecraft/mc-mods/lycanites-mobs) (Controle de spawn de mobs)  
Para consertar vá em `config/lycanitesmobs/spawners/`  
procure `ignoreForgeCanSpawnEvent` em cada arquivo e mude para `false`  
:::