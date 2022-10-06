---
title: Custom-Alias-Creation
tag: Misc
category: misc
icon: quill
---

## User-Friendly Commands

One of the multiple uses that you can implement in your server is creating alias commands that will enhance the ability and improve the use of these advanced options, making them more accessible for everyone with shorter commands.

For this, you may need to install an alias plugin like `CustomCommands`, or the `commands.yml` inside of the server folder. 

Here is one example of using the brand new fly-speed option. This example was developed using CMI alias system built-in, but as mentioned before, you can use any.

```
 CustomAlias:
  fspeed:
    Cmds:
    - cop [playerName] player-fly-speed $1 context[default=global]
    Perm: true
```
This will result on a player executing `/fspeed 0.5` and having his flight updated immediately, instead of using the longer input.

You could basically make anything from GriefDefender shortened with custom alias.

**NOTE:** For this specific case, apart from having a CMI permission to execute the `/fspeed` command, the player also needs to have the GriefDefender permission to interact with Advanced Options. For more information: [See Advanced Options Wiki](https://github.com/bloodmc/GriefDefender/wiki/Advanced-Options)