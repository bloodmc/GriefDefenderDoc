---
title: Pixelmon
---

## Pixelmon

:warning:  GD Sponge requires Luckperms 5.3.98, and recent builds of Luckperms for Sponge only support Sponge API 8. Luckperms 5.3.98 can be found on Ore https://ore.spongepowered.org/Luck/LuckPerms/versions/5.3.98

### Setup

##### Allow occupied pokeballs to spawn pixelmon animals by default  
* Execute the command `/cf entity-spawn #pixelmon:animal true source=pixelmon:occupied_pokeball default=global`  
Note: This command must be executed by an admin with permission `griefdefender.advanced.*`  

##### Force allow pokeballs to impact blocks  
* Execute the command `/cf projectile-impact-block any true source=pixelmon:occupied_pokeball override=global`  
Note: This command must be executed by an admin with permission `griefdefender.advanced.*`  

#### Install Pixelmon Flag Definition

* https://raw.githubusercontent.com/bloodmc/GriefDefenderDefinitions/master/1.12.2/presets/pixelmon.conf

  Right click on the page and select "Save as", save as `pixelmon.conf` in config/griefdefender/presets

* https://raw.githubusercontent.com/bloodmc/GriefDefenderDefinitions/master/1.12.2/lang/presets/pixelmon/en_US.conf

  Right click on the page and select "Save as", save as `en_US.conf` in config/griefdefender/lang/presets/pixelmon

* After doing both, /gdreload

* Execute command `/cf` and you should see a new preset named `pixelmon`. Click that to load and configure per claim as needed.  

Note: If you do not see the preset in GUI, make sure the files above end in `.conf`.  

See https://github.com/bloodmc/GriefDefender/wiki/Flag-Definitions-GUI for more info on how to work with presets and default settings for flags.  