---
title: Contexts
tag: Info
category: info
icon: image-text
---

# Contexts

Contexts are a fundamental part of how GriefDefender is able to apply protection to claims. In order to understand how it works, you must first understand what a Context is. See https://luckperms.net/wiki/Context

Now that you have a basic understanding of what a context is and how they work with permissions, below is a list of contexts that GD uses with its flag and option command.

Context                                          |     Value     | Description | 
-------------------------------------------------|---------------|--------------|
```gd_claim```            |   ```<claim_uuid>```  | Applies flag to claim with specified uuid.
```gd_claim_default```    |   ```admin```<br>```basic```<br>```subdivision```<br>```town```<br>```global```<br>```user```  | Applies flag as a default to all claims of type specified. <br />Note: Use `global` as value to apply to all types.<br/>Note: Use `user` as value to apply to all types EXCEPT wilderness.
```gd_claim_override```   |   ```admin```<br>```basic```<br>```claim```<br>```subdivision```<br>```town```<br>```global```<br>```user```  | Applies flag as an override to all claims of type specified. <br />Note: Use `global` as value to apply to all types.<br/>Note: Use `user` as value to apply to all types EXCEPT wilderness.
```source```   |   `<source_id>`  | Applies flag to a specific source. <br />Example: `minecraft:creeper`
```target```   |   `<target_id>`  | Applies flag to a specific target. <br />Example: `minecraft:player` <br />Note: Target is **ALWAYS** required after the flag in /cf command usage, but more than one target can be specified with use of context.
```state```   |   `<state>`  | Applies flag to a specific block state. <br />Example: `powered:true` <br /> See https://minecraft.gamepedia.com/Block_states for a list of all vanilla block states.
```used_item``` |   `<item_id>`  | Applies flag to a specific used item. <br />Example: `minecraft:diamond_sword`
```boots```   |   `<item_id>`   | Applies flag to specific worn boots. <br />Example: `minecraft:diamond_boots`
```chestplate```   |   `<item_id>`   | Applies flag to a specific worn chestplate. <br />Example: `minecraft:diamond_chestplate`
```helmet```   |   `<item_id>`   | Applies flag to a specific worn helmet. <br />Example: `minecraft:diamond_helmet
```leggings```   |   `<item_id>`   | Applies flag to specific worn leggings. <br />Example: `minecraft:diamond_leggings`
```enchant```   |   `<enchant_id>`   | Applies flag to specific enchantment on item. <br />Example: `minecraft:flame`
```enchant_data```   |   `<data_id>`   | Applies flag to specific enchantment data on item. <br />Example: `lvl:3`
```mainhand_enchant```   |   `<enchant_id>`   | Applies flag to specific enchantment on item in main hand. <br />Example: `minecraft:efficiency`
```offhand_enchant```   |   `<enchant_id>`   | Applies flag to specific enchantment on item in off-hand. <br />Example: `minecraft:unbreaking`
```mainhand_enchant_data```   |   `<data_id>`   | Applies flag to specific enchantment data on item in main hand. <br />Example: `lvl:1`
```offhand_enchant_data```   |   `<data_id>`   | Applies flag to specific enchantment data on item in off-hand. <br />Example: `lvl:2`
```potion_effect```   |   `<potion_effect_id>`   | Applies flag to specific potion effect. <br />Example: `minecraft:speed`
```run_as```   |   ```console```<br>```player```   | Run command as console or player. <br />Note: This context only applies to `griefdefender.player-command-enter` and `griefdefender.player-command-exit` options
```run_for```   |   ```member```<br>```owner```<br>```public```   | Run command for only trusted members of claim, only for owner of claim, or only for everyone except the claim owner. More than one can be used at the same time for desired effected users. <br />Note: This context only applies to `griefdefender.player-command-enter` and `griefdefender.player-command-exit` options
```server```   |   `<server_name>`  | Applies flag to a specific server.<br />Note: This uses the server name specified in permissions plugin. If no server context is specified or server name is not set, it defaults to `global`.
```world```   |   `<world_name>`  | Applies flag to a specific world.

Note: Every flag or option permission will ALWAYS contain one of the following core contexts `gd_claim`, `gd_claim_default`, or `gd_claim_override`.  
Note: When using contexts with commands `/cf`, `/claimoption`, or `flags.conf` you can use the following aliases for context keys  
`gd_claim_default` - `default`  
`gd_claim_override` - `override`  
So as an example  
`/cf block-break grass false gd_claim_default=global`  
is the same as   
`/cf block-break grass false default=global`  

However, in LuckPerms it will ALWAYS show up as the actual context key which in this case would be `gd_claim_default`



### How contexts are applied


Note: A uuid stands for [Universal Unique Identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier) which GD assigns to each claim created in the world.  


* **gd_claim**  

:warning: This context does NOT affect owners of claims when used with flags but does affect owners when used with options :warning: 

The context `gd_claim=<claim_uuid>` is used to apply a flag or option to a specific claim that matches the uuid specified.  
Note: If you ONLY want to apply a flag or option to the claim you are standing in, GD will automatically apply this context as long as you do not provide `gd_claim`, `gd_claim_default`, or `gd_claim_override` in the context section of command.  

Let's go over an example of how this would look in LuckPerms

```
    {
      "permission": "griefdefender.flag.entity-spawn",
      "value": false,
      "context": {
        "gd_claim": "9594ca69-47d6-422a-8236-7c697d832ac9",
        "target": "#animal"
      }
    },
```

This permission is denying the flag `entity-spawn` in claim with uuid `9594ca69-47d6-422a-8236-7c697d832ac9` targeting only animals.


* **gd_claim_default**  

:warning: This context does NOT affect owners of claims when used with flags but does affect owners when used with options :warning: 

It is used to apply a flag or option to one or more claim types or globally and acts as a default permission meaning it is applied to users until a higher context is used.  
See https://github.com/bloodmc/GriefDefender/wiki/Contexts#context-core-priority  

Let's break each combination down  

`gd_claim_default=admin` - A permission containing this context will only affect admin claims and act as a default permission.  
`gd_claim_default=basic` - A permission containing this context will only affect basic claims and act as a default permission.  
`gd_claim_default=subdivision` - A permission containing this context will only affect subdivision claims and act as a default permission.  
`gd_claim_default=global` - A permission containing this context will affect all claims, including wilderness, and act as a default permission.  
`gd_claim_default=user` - A permission containing this context will affect all claims except wilderness and act as a default permission.  

Taking our previous LuckPerms example, here is how it might show up as a permission

```
    {
      "permission": "griefdefender.flag.entity-spawn",
      "value": false,
      "context": {
        "gd_claim_default": "admin",
        "target": "#animal"
      }
    },
```

This permission is denying the flag `entity-spawn` as a default on all admin claims and targeting only animals.


* **gd_claim_override**  

:warning: This context DOES affect owners of claims :warning: 

The most important thing about this context is it is the only context that will affect claim owners.  
It is used to apply a flag or option to a single claim, one or more claim types, or globally. It essentially acts as a ban.  

Let's break each combination down  

`gd_claim_override=admin` - A permission containing this context will only affect admin claims.  
`gd_claim_override=basic` - A permission containing this context will only affect basic claims.  
`gd_claim_override=subdivision` - A permission containing this context will only affect subdivision claims.  
`gd_claim_override=global` - A permission containing this context will affect all claims including wilderness.  
`gd_claim_override=user` - A permission containing this context will affect all claims except wilderness.  

Let's go over an example of how this would look in LuckPerms

```
    {
      "permission": "griefdefender.flag.entity-spawn",
      "value": false,
      "context": {
        "gd_claim_override": "basic",
        "target": "#animal"
      }
    },
```
This permission is banning the ability to spawn animals in ALL basic claims. It will also affect claim owners.  

### Context core priority

One of the following contexts are required in every flag or option permission set in LuckPerms 
 `gd_claim_default`, `gd_claim`, `gd_claim_override`

The order of context priority in permissions is as follows starting with the lowest

* `gd_claim_default` - Lowest priority. Always used with the `griefdefender_definition` and `griefdefender_default` groups to apply as a default to all players.  
* `gd_claim` - Higher than default. If using commands or ADVANCED GUI, these permissions will always end up in `griefdefender_claim` group. If using the flag definition GUI w/ PRESET, permissions will always end up in `griefdefender_definition`.  
Note: When using commands `/cfp`, `/cfg`, `/cop`, `/cog` which will apply a flag or permission to user or group, the `gd_claim` context will always be used.  
* `gd_claim_override` - The highest priority context GD uses. GD will always do a permission lookup for any permission with this context. If found, this will be the end result. For multiple, the same values as `gd_claim_default` can be used.  


## FAQ

1. Why do some contexts not affect owners when used with flags?  
A. The reason is simple, it gives claim owners the ability to manage their own claims from non-trusted players. So an owner can deny specific actions but still have themselves not be affected.  
2. Do flags affect trusted users?  
A. Trusted users may not be affected depending on the level of trust required for the action. For example, if a player attempts to place a block in a claim, the `block-place` flag would be checked with `builder`. GD would then verify if a flag is specifically denying this action against the user and if not it would proceed to check if the user has `builder` trust or higher and if so stop there and allow the action.  
Note: Overrides will always affect owners and trusted users.  
3. How would I know what contexts, trust, permissions are being checked when I perform an action?  
If you are an administrator, you can find information for each action by performing a `/gddebug record claim` command inside the claim you are in.  
See https://github.com/bloodmc/GriefDefender/wiki/Debugging for more info  