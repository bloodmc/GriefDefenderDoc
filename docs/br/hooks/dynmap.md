---
title: Dynmap
tag: map
category: hooks
icon: map
---

Para usar o Dynmap no GriefDefender, você deve ter GDHooks instalado.
Veja [GDHooks](/br/hooks)  


**Bukkit** 
 
* Dynmap - [Download](https://www.spigotmc.org/resources/dynmap.274/) 

<details>
  <summary>Exemplo de configuração do Dynmap</summary>

```
dynmap {
    claimtype-styles {
        admin {
            fill-color="#FF0000"
            fill-opacity=0.35
            label=none
            stroke-color="#FF0000"
            stroke-opacity=0.8
            stroke-weight=3
        }
        basic {
            fill-color="#FF0000"
            fill-opacity=0.35
            label=none
            stroke-color="#FF0000"
            stroke-opacity=0.8
            stroke-weight=3
        }
        subdivision {
            fill-color="#FF0000"
            fill-opacity=0.35
            label=none
            stroke-color="#FF0000"
            stroke-opacity=0.8
            stroke-weight=3
        }
        town {
            fill-color="#FF0000"
            fill-opacity=0.35
            label=none
            stroke-color="#FF0000"
            stroke-opacity=0.8
            stroke-weight=3
        }
    }
    enabled=true
    hidden-regions=[]
    info-window-admin="<div class=\"infowindow\"><span style=\"font-weight:bold;\">Reivindicação administrativa </span><br/>Permissão de Trust: <span style=\"font-weight:bold;\">%managers%</span><br/>Trust: <span style=\"font-weight:bold;\">%builders%</span><br/>Trust de Recipiente: <span style=\"font-weight:bold;\">%containers%</span><br/>Trust de acesso: <span style=\"font-weight:bold;\">%accessors%</span></div>"
    info-window-basic="<div class=\"infowindow\">Nome: <span style=\"font-weight:bold;\">%claimname%</span><br/>Dono: <span style=\"font-weight:bold;\">%owner%</span><br/>Type: <span style=\"font-weight:bold;\">%gdtype%</span><br/>Visto pela última vez: <span style=\"font-weight:bold;\">%lastseen%</span><br/>Permissão para gerenciar Trust: <span style=\"font-weight:bold;\">%managers%</span><br/>Trust: <span style=\"font-weight:bold;\">%builders%</span><br/>Trust de Recipiente: <span style=\"font-weight:bold;\">%containers%</span><br/>Trust de Acesso: <span style=\"font-weight:bold;\">%accessors%</span></div>"
    layer-hide-by-default=false
    layer-priority=10
    minzoom=0
    owner-styles {}
    use-3d-regions=false
}
```
</details>