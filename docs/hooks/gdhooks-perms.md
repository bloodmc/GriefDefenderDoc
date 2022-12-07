---
title: GDHooks Permissions
tag: Info
category: hooks
icon: node-tree
---

If you want to have a quickstart, apply `gdhooks.user.*` to your players and both `gdhooks.user.*` and `gdhooks.admin.*` to your staff/admins.  
Obviously these permissions are rather rough and if you want a more fine control read all permissions below and assign accordingly.

## User Permissions

Permission Node                                    | Description | 
-------------------------------------------------| --------------|
gdhooks.user.command.version    |	Allows version to be shown
gdhooks.user.claim.command.trust.clan   |	Allows command `/trustclan` to be used
gdhooks.user.claim.command.trustall.clan    |	Allows command `/trustallclan` to be used
gdhooks.user.claim.command.untrust.clan |   Allows command `/untrustclan` to be used
gdhooks.user.claim.command.untrustall.clan  |	Allows command `/untrustallclan` to be used
gdhooks.user.mcmmo.auto-party-trust |   Provides automatic handling of party trust to player claims

## Admin Permissions

Permission Node                                    | Description | 
-------------------------------------------------| --------------|
gdhooks.admin.command.reload    |   Allows command `/gdhooksreload` to reload GDHooks