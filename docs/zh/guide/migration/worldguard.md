---
title: WorldGuard
category: Migration
---

:warning: Before using WorldGuard migrator, backup your data (including LuckPerms).  It is recommended to test migration on a test server before applying to production to ensure everything works as expected.

### GriefDefender supports a migration of cuboid regions from WorldGuard. To migrate to GriefDefender, perform the following steps 

### Current Limitations
* Only supports cuboid regions.
* Does not support regions that cross each other's boundaries.
* Does not support custom flags currently. (Will support in future release)

The following WG flags are currently supported for migration:
```
allowed-cmds
block-break
block-place
block-trampling
blocked-cmds
build
chest-access
chorus-fruit-teleport
creeper-explosion
crop-growth
damage-animals
deny-spawn
enderdragon-block-damage
enderman-grief
enderpearl
entity-item-frame-destroy
entity-painting-destroy
entry
exit
exp-drop
fall-damage
farewell
fire-spread
firework-damage
ghast-fireball
grass-growth
greeting
interact
invincible
item-drop
item-pickup
lava-fire
lava-flow
leaf-decay
lighter
lightning
mob-damage
mob-spawning
mushroom-growth
other-explosion
pvp
ride
sleep
snowman-trail
tnt
use
vehicle-place
vine-growth
water-flow
wither-damage
```

### The following flags do not support migration but can be handled via GD's API
```
deny-message
entry-deny-message
exit-deny-message
exit-override
notify-enter
notify-exit
```

## Migration Steps
1. Add GriefDefender jar to plugins
2. Remove WorldGuard jar from plugins
3. Start the server at least once to generate GriefDefender configs.
4. Stop server
5. Edit global.conf under ./plugins/GriefDefender/
6. Locate section
```
# Set to true to enable WorldGuard data migrator.
# Note: Only cuboid regions are supported.
# Note: It is recommended to backup data before using.
worldguard=false
```
7. Set worldguard to `true`
8. Start server

If done properly, GriefDefender will migrate each world's data as it loads from `plugins/WorldGuard/data/<worldname>` to `plugins/GriefDefender`.
Migration output should appear in console as it is migrating.