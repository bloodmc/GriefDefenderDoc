---
title: PVP
tag: misc
category: Misc
icon: swords
---

GriefDefender has the ability to control PvP globally, per user/group, or per claim.  

Here are a few examples on how to configure PvP  
Note: These examples assume a clean installation with no modified settings.

### Disable PvP on server
To disable PvP on server, open `server.properties` and set `pvp` to false (On Sponge, set PVP to false in the Sponge config).

### Disable PvP globally except specific claims

1. Open `presets/minecraft.conf` in the GD config directory.
2. Change `default-value=true` to `default-value=false` under the `pvp` definition
3. Toggle the `pvp` definition to true in claims where pvp is wanted
4. Optional: Move the `pvp` flag definition from USER group to ADMIN group in `minecraft.conf`  
Note: Make this change if you ONLY want admins to be able to toggle `pvp` in claims.  
5. `/gdreload`

### Disable PvP for a specific player

1. Run command `/cfp <player> entity-damage player false source=player`

### Disable PvP for a specific group of users

1. Run command `/cfg <group> entity-damage player false source=player` 

### Allow PvP globally except specific claims

If you want to allow users to enable/disable PvP then have them do the following
1. Run command `/cf` to launch flag GUI.
2. Make sure `PRESET` `USER` tab is selected.
3. Toggle `pvp` to `false`.

### Allow users to configure PvP as they wish

1. Run command `/cf` to launch flag GUI.
2. Make sure `PRESET` `USER` tab is selected.
3. Toggle `pvp` to `false` or `true`.


