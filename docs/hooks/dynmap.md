---
title: Dynmap
tag: map
category: hooks
icon: map
---

In order to use GriefDefender's Dynmap provider, you must have GDHooks installed.  
See https://github.com/bloodmc/GriefDefender/wiki/GDHooks  


**Bukkit** 
 
* Dynmap - [Download](https://www.spigotmc.org/resources/dynmap.274/) 

<details>
  <summary>Sample Dynmap Configuration</summary>

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
    info-window-admin="<div class=\"infowindow\"><span style=\"font-weight:bold;\">Administrator Claim</span><br/>Permission Trust: <span style=\"font-weight:bold;\">%managers%</span><br/>Trust: <span style=\"font-weight:bold;\">%builders%</span><br/>Container Trust: <span style=\"font-weight:bold;\">%containers%</span><br/>Access Trust: <span style=\"font-weight:bold;\">%accessors%</span></div>"
    info-window-basic="<div class=\"infowindow\">Name: <span style=\"font-weight:bold;\">%claimname%</span><br/>Owner: <span style=\"font-weight:bold;\">%owner%</span><br/>Type: <span style=\"font-weight:bold;\">%gdtype%</span><br/>Last Seen: <span style=\"font-weight:bold;\">%lastseen%</span><br/>Permission Trust: <span style=\"font-weight:bold;\">%managers%</span><br/>Trust: <span style=\"font-weight:bold;\">%builders%</span><br/>Container Trust: <span style=\"font-weight:bold;\">%containers%</span><br/>Access Trust: <span style=\"font-weight:bold;\">%accessors%</span></div>"
    layer-hide-by-default=false
    layer-priority=10
    minzoom=0
    owner-styles {}
    use-3d-regions=false
}
```
</details>