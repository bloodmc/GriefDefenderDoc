---
title: GriefPrevention
tags: Merge
category: Migration
---

:warning: Before using GriefPrevention migrator, backup your data (including LuckPerms).  
It is recommended to test migration on a test server before applying to production to ensure everything works as expected.  
:warning: All player data that contains accrued claim blocks and bonus claim blocks will be stored as meta in LuckPerms when migrator is finished.  
:warning: Converting a GP SQL Database back to file storage can be done with the python script found [here](https://gist.github.com/ar00n/f1ac69dd52554e56f012c8d631bed5d7), alter the database connection details in the script.  
Accrued claim blocks will use meta key `griefdefender.accrued-blocks`  
Bonus claim blocks will use meta key `griefdefender.bonus-blocks`  
See https://github.com/lucko/LuckPerms/wiki/Prefixes,-Suffixes-&-Meta#meta for more info

## Bukkit
### GriefDefender supports a complete migration from GriefPrevention Bukkit. To migrate to GriefDefender, perform the following steps 

1. Add GriefDefender jar to plugins
2. Remove GriefPrevention jar from plugins
3. Start the server to generate GriefDefender configs.
4. Stop server
5. Edit global.conf under ./plugins/GriefDefender/
6. Locate section
```
# List of migrators that convert old or other protection data into the current GD claim data format.
# Note: It is recommended to backup data before using.
migrator {
    # Set to true to enable the classic migrator.
    # Note: Migrates GP bukkit classic claim data and GPFlags data, if available, to current format.
    # Note: It is recommended to backup data before using.
    classic=false
    # Set to true to enable the legacy playerdata file migrator.
    # Note: Migrates legacy playerdata file format to permissions storage such as LuckPerms json or mysql storage.
    # Note: Before turning this on, make sure you properly set 'context-storage-type' in the the playerdata section of this config.
    # Note: It is HIGHLY recommended to backup your permissions database before running this migrator as all local playerdata files will be migrated to it.
    # Note: Do NOT run this migrator on more than one server if multiple servers share the same permissions database.
    playerdata=false
    # Set to true to enable WorldGuard data migrator.
    # Note: Only cuboid regions are supported.
    # Note: It is recommended to backup data before using.
    worldguard=false
}
```
7. Set classic to `true`
8. Start Server  
If done properly, GriefDefender will migrate all data from `plugins/GriefPreventionData` to `plugins/GriefDefender`.  
Migration output should appear in console as it is migrating.  
9. Disable the migrator in `global.conf` 

## Sponge

:warning: The migrator will not copy the `global.conf` as there have been many changes to it in GriefDefender. You will have to manually copy the settings you want from GP's `global.conf` to GD.

1. Add GriefDefender jar to mods or plugins folder
2. Remove GriefPrevention jar from mods/plugins folder
3. Start the server to generate GriefDefender configs.
4. Stop server
5. Edit global.conf under ./plugins/GriefDefender/
6. Locate section
```
# List of migrators that convert old or other protection data into the current GD claim data format.
# Note: It is recommended to backup data before using.
migrator {
    # Set to true to enable the griefprevention bukkit migrator.
    # Note: Migrates GP bukkit classic claim data and GPFlags data, if available, to current format.
    # Note: It is recommended to backup data before using.
    griefprevention-bukkit=false
    # Set to true to enable the griefprevention sponge migrator.
    # Note: Migrates GP sponge claim data to current format.
    # Note: It is recommended to backup data before using.
    griefprevention-sponge=false
    # Set to true to enable the legacy playerdata file migrator.
    # Note: Migrates legacy playerdata file format to permissions storage such as LuckPerms json or mysql storage.
    # Note: Before turning this on, make sure you properly set 'context-storage-type' in the the playerdata section of this config.
    # Note: It is HIGHLY recommended to backup your permissions database before running this migrator as all local playerdata files will be migrated to it.
    # Note: Do NOT run this migrator on more than one server if multiple servers share the same permissions database.
    playerdata=false
    # Set to true to enable RedProtect data migrator.
    # Note: All RedProtect data will be converted into basic claim data.
    red-protect=false
    # Set to true to enable WorldGuard data migrator.
    # Note: Only cuboid regions are supported.
    # Note: It is recommended to backup data before using.
    worldguard=false
}
```
7. Set `griefprevention-sponge` to `true`
8. Set 'playerdata' to true.  
Note: Make sure to read the comment carefully as there are things to check before turning on the migrator.
9. Locate section
```
playerdata {
    # Determines which claim block system to use for claims. (Default: AREA)
    # If set to VOLUME, claim blocks will use the chunk count system to balance 3d claiming.
    # If set to AREA, the standard 2d block count system will be used.
    claim-block-system=AREA
    # The context type used when storing playerdata within a permissions database.
    # Available types are : global, server, world. (Default: global)
    # Global will store data globally shared by all servers.
    # Server will store data per server. Note: This requires servername to be properly set in permissions config.
    # World will store data per world.
    context-storage-type=global
    ...
}
```
10. `context-storage-type` needs to be set to `global`, `server`, or `world`. Read comment for more information.
11. Start server  
If done properly, GriefDefender will migrate all data from `plugins/GriefPreventionData` to `plugins/GriefDefender` including permission data.  
Migration output should appear in console as it is migrating.  
12. Disable the migrator in `global.conf` 