---
title: Claim-Management
tag: faq
category: faq
icon: faq
---

## 1. How do allow all users to create claims for free?**

Set `requires-claim-blocks` to `false` in `global.conf` within claim `creation-settings` section.  

## 2. How do I transfer a claim to another player for free?**

Create claim, use `/claiminfo` -> `Admin Settings` and toggle `Requires Claim Blocks` to false.  
Then use `/claimtransfer <playername>` to transfer claim to player.  

## 3. How do I create a claim using WorldEdit?**  

First make sure your wand is set for cuboid mode as GD only supports cuboid. Use the wand to select your 2 points.  
If you want to create a 2D claim from bedrock to sky then type `/claimwe`.  

If you want to create a 3D claim that respect the height of your selection then type `/cuboid` then `/claimwe`.  
Using `/cuboid` will put you into 3D claiming mode where your selection will always respect block height.  

## 4. How do I make use of WECUI visuals with GD claims?**

Make sure you use the investigation tool (minecraft:stick by default) or are in `/claimmode` then right-click an area.
  
## 5. How do I allow everyone to access my spawn?** 

Give them accessor trust by using `/at public` where public represents all players.  
See https://github.com/bloodmc/GriefDefender/wiki/Trust-System.  

If you need more detailed protection then use the flag system.  
See https://github.com/bloodmc/GriefDefender/wiki/Flag-Definitions-GUI

## 6. How do I select a specific claim to work in? (change settings, etc..)**

Most GD commands will use the claim you are standing in. Simply stand in the claim and make your change.  
If the claim is far, use `/claimlist` and TP to it.  

## 7. How do I test flags as a non-trusted user in a claim?**

Use `/cfdebug` to put yourself into claim flag debug mode then perform any action.  
This will internally set you as a non-trusted player for all claims. When done, simply run `/cfdebug` command again.  

## 8. Is there a way to allow a permission within all claims but deny it in the wild?**

  - ### To deny a specific player permission in wilderness

1. Assign permission to all players in LuckPerms.
2. Stand in wilderness claim.
3. Execute command `/cpp <playername> <permission> false`

  - ### To deny a specific group permission in wilderness

1. Assign permission to all players in LuckPerms.
2. Stand in wilderness claim.
3. Execute command `/cpg <group> <permission> false`

Note: The same steps can be applied to any claim.

## 9. How do I stop a player from executing a command in a claim like `/sethome` ?**  

  - ### Deny the permission on a group in claim.  

1. Stand in claim where you want to deny the permission.  
2. Execute command `/cpg <group> <permission> false`  
ex. To deny the permission `essentials.sethome` for group `default`  
`/cpg default essentials.sethome false`  

  - ### Deny the permission on a single player in claim.  

1. Stand in claim where you want to deny the permission.  
2. Execute command `/cpp <playername> <permission> false`  
ex. To deny the permission `essentials.sethome` for player `Mike`  
`/cpp Mike essentials.sethome false`  

  - ### Deny the command-execute flag on a group in claim.  

1. Stand in claim where you want to deny the `command-execute` flag.  
2. Execute command `/cfg <group> command-execute <pluginid:command[arg]> false`  
ex. To deny the essentials command `/sethome` for group `default`  
`/cfg default command-execute essentials:sethome false`  

  - ### Deny the command-execute flag on a single player in claim.

1. Stand in claim where you want to deny the `command-execute` flag.  
2. Execute command `/cfp <playername> command-execute <pluginid:command[arg]> false`  
ex. To deny the essentials command `/sethome` for player `Mike`  
`/cfp Mike command-execute essentials:sethome false`  

Note: Use `/gddebug record claim` to get the proper info for command.  
See https://github.com/bloodmc/GriefDefender/wiki/Debugging for more info.

## 10. How do I allow my admins to bypass protection ?**  

Grant them access to use the `/ignoreclaims` command in order to toggle GriefDefender god-mode. 

## 11. How do I allow essentials `/sethome` in only claims users are trusted in?**

Run the command `/cf command-execute essentials:sethome false default=user`

## 12. How do I allow players to fly in their own claims?**

1. Deny flight globally in all claims by running command `/claimoption player-deny-flight true default=global`
2. Give players permission to use the `fly` command.
3. Assign the permission `griefdefender.admin.option.perk.fly.owner` to player or group.

## 13. How do I give claim owners the ability to allow other players to fly in their claims?**

1. Admins need to assign all players the following perk permissions
```
griefdefender.admin.option.perk.fly.accessor
griefdefender.admin.option.perk.fly.builder
griefdefender.admin.option.perk.fly.container
griefdefender.admin.option.perk.fly.manager
```
Note: Don't forget to run `/gdreload` after changing permissions

These permissions allow the trusted player to fly in claims they are trusted to.

2. Have the claim owners trust players they wish to fly in their claims.

## 14. Is it possible to copy flags from and admin claim to other admin claim?**

1. From the `/gd` menu navigate to `CLAIM` then `CLAIMGROUP`.
2. Click `ADMIN` tab.
3. Click `+` button.
4. Enter claimgroup name.
5. Go to an admin claim that you want joined to group and navigate back to `CLAIMGROUP` in gd menu.
6. Click `ADMIN` tab.
7. Click `JOIN`

Repeat steps 5-7 for each claim you wanted joined to claimgroup.

Once this is complete, setup your flags in any claim joined to claimgroup. All claims in claimgroup will share flags.

Note: Unjoining a claim from a claimgroup will revert the claim back to its local flags.

## 15. How do Geyser players confirm commands?  

They can use the command `/gdconfirm`  


## 16. How do I prevent players from earning blocks while AFK?  

1. Open `global.conf`.  
2. Search for the following section  
```
# The minimum threshold of movement (in blocks) required to receive accrued claim blocks. (Default: 0)
# Note: The claim block task runs every 5 minutes which is the time each player will get to move the required amount of blocks.
claim-block-task-move-threshold=0
```
3. Set `claim-block-task-move-threshold` to the amount of blocks you want to require players to move every 5 minutes to not be considered AFK.  
