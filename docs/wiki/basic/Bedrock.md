---
title: Bedrock
tag: Info
category: info
icon: gui
---

For servers allowing Bedrock players to join, this page will provide necessary steps to make sure your bedrock players have no issues.  

## LuckPerms setup
Set `allow-invalid-usernames` to `true` in [LuckPerm's](https://luckperms.net/) `config.yml`.

## Inventory GUI
GriefDefender provides 2 GUI's for players : [Chat](/wiki/basic/GUI.html#chat) and [Inventory](/wiki/basic/GUI.html#inventory). The Chat GUI will not function properly with Bedrock players as they are unable to click chat.  

All Bedrock players should be given the permission `griefdefender.login.inventory-gui` in order to default to the Inventory GUI when executing command `/gd`.  

Being able to switch between Chat & GUI with `/claimgui` command  

### Confirm
There are various commands that may prompt bedrock players with confirmations in Chat. If this occurs, bedrock players can use the command `/gdconfirm` in order to trigger the confirm.  

![GUI Preview](https://i.imgur.com/2iqE2ma.gif)