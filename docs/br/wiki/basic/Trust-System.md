---
title: Tax System
tag: Claim
category: claim
icon: trust
---

### IMPORTANT
:warning:  
Trust is NOT inherited by subclaims that have inheritance turned on. If a claim owner wants to trust a player across all claims including subclaims, the `/trustall` command should be used.  

There four different types of trust: Accessors, Builders, Containers, and Managers.

### Arguments
| Arguments | Description |
| --------- | ----------- |
| `<player>`| The player to trust. |
| `<group>` | The group to trust. Note: If you want to trust everyone, use `public`. |
| `<type>`  | The type of trust [none, accessor, resident, builder, container, manager]. Note: If you want to remove trust, use `none`. <br>*None*: `Revokes a player/group's access to your claim`<br>*Accessor*: `Grants a player/group access to interact with all blocks except inventory`<br>*Resident*: `Grants a player/group ability to create claims, includes accessor trust.`<br>*Container*: `Grants a player/group access to interact with all blocks including inventory, includes accessor trust.`<br>*Builder*: `Grants a player/group access to everything above, except Resident, including ability to place and break blocks`<br>*Manager*: `Grants a player/group access to all of the above including ability to modify claim`  |

### Trust Player
**Command**: `/gd trust player <player> <type>`  
**Alias**: `trust`  
**Example**: `/gd trust player Kratos basic`  

Grants a player access to your claim(s)

### Trust Group
**Command**: `/gd trust group <group> <type>`  
**Alias**: `trust`  

Grants a group access to your claim(s)

### Remove Trust Player
**Command**: `/gd trust player <player> none`  

Revokes a player's access to all your claims.

### Remove Trust Group
**Command**: `/gd trust group <group> none`  

Revokes a group's access to all your claims.

## List Trusted
**Command**: `/trustlist` 

Lists currently trusted players and the trust type.