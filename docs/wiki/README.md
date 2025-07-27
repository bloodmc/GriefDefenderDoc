---
title: Getting Started  
tag: Info  
category: info  
icon: start
---

## Getting Started
### 🧭 Table of Contents

* ⚙️ [Requirements](#⚙️-requirements)
* 📥 [Installation](#📥-installation)
* 🛠️ [Configuration](#🛠️-configuration)
  * 🗂️ [Overview](#🗂️-configuration-overview)
  * 🧾 [Format](#🧾-configuration-format)
* 🖍️ [Notepad++ Syntax Highlighting](#🖍️-notepad-syntax-highlighting)
* 🌐 [Language Support](#🌐-language-support)
* 💾 [Storage Options](#💾-storage-options)
* 🔑 [Permissions](#🔑-permissions)
* 🛏️ [Bedrock Support](#🛏️-bedrock-support)
* 🧰 [GUI Modes](#🧰-gui-modes)
* 🚫 [Blacklist](#🚫-blacklist)

### 🔧 Common Configuration Topics

These are optional but highly recommended areas server admins often configure:

* 💰 [Economy Mode](#💰-economy-mode)
* ⚔️ [PvP Configuration](#⚔️-pvp-configuration)
* ⏳ [Claim Expiration](#⏳-claim-expiration)
* 🚩 [Flag Defaults](#🚩-configuring-flag-defaults)
* 📊 [Claim Block Accrual](#📊-claim-block-accrual-settings)
* 💼 [Renting & Leasing Claims](#💼-renting--leasing-claims)
* 🧱 [PlaceholderAPI](#🧱-placeholderapi-support)
* 🔌 [GDHooks Plugin](#🔌-gdhooks-plugin)
    

> 📦 Not sure how claiming works? Learn how to create and manage claims in the [Claim Management Guide](/wiki/basic/Claim-Management.html).

### ⚙️ Requirements

::: tip You need LuckPerms to run the plugin.  
Download the latest [LuckPerms](https://luckperms.net/download) for Bukkit, Folia, or Sponge API 8/9.  
Use [LuckPerms v5.3.98](https://ore.spongepowered.org/Luck/LuckPerms/versions/5.3.98) for Sponge API 7.  
**NOTE: GriefDefender only supports LuckPerms v5.**  
:::

::: warning  
GriefDefender relies heavily on LuckPerms' `default` group. Make sure all LP groups inherit from `default`, or GriefDefender will not function correctly. Disabling the `default` group is strongly discouraged. See [LuckPerms Default Group Guide](https://luckperms.net/wiki/Default-Groups#where-to-start).  
:::

### 📥 Installation

::: tabs

@tab Bukkit / Folia / Hybrid

:warning: If using the `spark` plugin, update to the [latest version](https://ci.lucko.me/job/spark/).  
:warning: Set [`spawn-protection`](https://minecraft.wiki/w/Server.properties#spawn-protection) to `0` in your [`server.properties`](https://minecraft.wiki/w/Server.properties) file. Otherwise, server protection may override GriefDefender.

1.  Install the latest [LuckPerms](https://luckperms.net/download).
    
2.  Download GriefDefender from [Spigot](https://www.spigotmc.org/resources/68900/).
    
3.  Place the jar in the `./plugins` directory.
    
4.  Start your server. Watch the console for: `[GriefDefender] Loaded successfully`
    
5.  Shut down the server to begin configuration.
    

@tab Sponge

:warning: LuckPerms dropped support for Sponge API 7 in v5.3.98. Use [this version](https://ore.spongepowered.org/Luck/LuckPerms/versions/5.3.98) if running API 7.

:information_source: Currently, only **Sponge 1.12.2** and **Sponge 1.16.5** are supported.

1.  Get the proper GD version for Sponge API 7/8 from the appropriate source.
    
2.  Place the jar into the `mods` or `mods/plugins` folder.
    
3.  Start your server and verify `[GriefDefender] Loaded successfully` appears in console.
    
4.  Shut down the server to begin configuration. in v5.3.98. Use [this version](https://ore.spongepowered.org/Luck/LuckPerms/versions/5.3.98) if running API 7.
    
    

@tab Forge / NeoForge (Patreon only)

:lock: Forge and NeoForge builds are available to **Patreon supporters at the Major tier or above**. Access is provided through private Discord channels and requires an active subscription to continue receiving updates.

1.  Install the latest [LuckPerms - Forge](https://luckperms.net/download).
    
2.  Get the appropriate GriefDefender version for your Forge/NeoForge build.
    
3.  Place the jar in the `mods` folder.
    
4.  Start the server and look for `[GriefDefender] Loaded successfully`.
    
5.  Shut down the server to configure settings.
    

@tab Fabric (Patreon only)

:lock: Fabric builds (1.19.2+) are available to **Patreon supporters at the Major tier or above**. Access is provided through private Discord channels and requires an active subscription to continue receiving updates.

1.  Install the latest [LuckPerms - Fabric](https://luckperms.net/download).
    
2.  Download the proper GriefDefender Fabric build.
    
3.  Place the jar into the `mods` folder.
    
4.  Start the server and check console output: `[GriefDefender] Loaded successfully`
    
5.  Shut down the server to begin configuration.
    

:::

---

### 🛠️ Configuration Overview

Configuration file locations depend on your platform:

-   **Bukkit / Folia / Hybrid**: `plugins/GriefDefender`
    
-   **Sponge / Forge / NeoForge / Fabric**: `config/GriefDefender`
    

```
plugins/
└── GriefDefender/
    ├── bans.yml
    ├── blacklist.yml
    ├── claimnames.yml
    ├── config_format.txt
    ├── flags.yml
    ├── global.yml
    ├── gui.yml
    ├── options.yml
    ├── storage.yml
    └── tag.yml

```

See the [Configuration Guide](/wiki/Configuration.html) for details.

#### Special Note for Fabric and NeoForge

On Fabric and NeoForge platforms, an additional configuration file named `world_uuid.yml` will be generated for each world. This file is necessary because these platforms do not support persistent World UUIDs natively, unlike Sponge, Bukkit, or Forge.

This file stores world-specific metadata required for proper claim tracking and configuration isolation. Do not delete or edit this file manually unless you are familiar with its format and function.

### 🧾 Configuration Format

By default, GriefDefender now delivers all configuration files in **YAML** format. YAML is human-readable, widely used, and supported by most tools.

If you prefer the older **HOCON** format, you can enable it manually by changing the `config-format` in `config_format.txt` to `hocon`.

#### YAML (Default)

-   Easier to read and write for most users
    
-   Supported by most modern editors and plugins
    

#### HOCON (Optional)

GriefDefender also supports [HOCON](https://github.com/lightbend/config/blob/main/HOCON.md), a powerful format that supports inline comments and complex structures.

> ⚠️ Note: When using HOCON, all configuration sections are sorted alphabetically and cannot be manually re-ordered.

### 🖍️ Notepad++ Syntax Highlighting

1.  Copy the XML snippet below and save it as `npp-lang-hocon.xml`.
    
2.  Open [Notepad++](https://notepad-plus-plus.org/), then go to **Language > Define your language…**
    
3.  Click **Import** and select the file.
    

```
<NotepadPlus>
  <UserLang name="Hocon" ext="conf" udlVersion="2.1">
    <!-- XML trimmed for brevity -->
  </UserLang>
</NotepadPlus>

```

---

### 🌐 Language Support

GriefDefender supports the following languages:  
`de_DE`, `en_US`, `es_ES`, `fr_FR`, `it_IT`, `pl_PL`, `pt_BR`, `ru_RU`, `tr_TR`, `zh_CN`, `zh_HK`

The default language is `en_US`. To change it:

1.  Open `global.yml`
    
2.  Find the `message` section
    
3.  Set `locale="en_US"` to your desired language code
    

---

### 💾 Storage Options

GriefDefender supports both **file-based** and **database-based** storage.

#### File Storage (Default)

File storage uses YAML (or HOCON if configured) and loads everything into memory at startup, ensuring no performance loss.

```
config/
└── GriefDefender/
    ├── claimgroups/
    ├── GlobalPlayerData/
    ├── lang/
    ├── presets/
    ├── snapshots/
    ├── worlds/
    ├── *.yml

```

#### Database Storage

> ⚠️ If using a port in the `address` field, wrap it in quotes or GD will not load.

To switch to database storage:

1.  Open `storage.yml`
    
2.  Set `storage-method: mysql` (or other supported type)
    
3.  Configure the following:
    
    -   `address: "localhost:3306"`
        
    -   `database-name: griefdefender`
        
    -   `username` and `password`
        

See full setup at: [Storage Settings](/wiki/basic/Storage.html)

---

### 🔑 Permissions

> ⚠️ You must review the [Permissions Guide](/wiki/Permissions.html#important) before configuring.

GriefDefender permissions are managed through LuckPerms.

-   Default players: `griefdefender.user.*`
    
-   Admins: `griefdefender.admin.*` and `griefdefender.user.*`
    

To apply permissions:

```
/lp group <group> permission set griefdefender.user.*

```

Replace `<group>` with your actual group name (typically `default`).

📌 Avoid removing `griefdefender.user.*` entirely — deny individual nodes instead.

See [Full Permission List](/wiki/Permissions.html) or use [Custom Aliases](/wiki/basic/Custom-Alias-Creation.html) to simplify command usage.

---

### 🛏️ Bedrock Support

If your server allows Bedrock players to join, additional configuration is required to ensure compatibility with GriefDefender.

Please refer to the [Bedrock Setup Guide](/wiki/basic/Bedrock.html) for platform-specific instructions.

---

### 🧰 GUI Modes

GriefDefender provides two GUI modes:

-   **Chat-based GUI** (default)
    
-   **Inventory-based GUI**
    

To default players to the inventory GUI, grant:

```
griefdefender.login.inventory-gui

```

For a full breakdown of features, see the [GUI Guide](/wiki/basic/GUI.html).

---

### 🚫 Blacklist

GriefDefender includes default blacklist settings to improve performance by ignoring noisy actions (e.g., particles, ambient events).

These are controlled via `blacklist.yml`. If an item, block, or entity does not appear in debug output, it may be blacklisted or the event is not firing.

Customize behavior by reviewing and editing:

```
blacklist.yml

```

See [Blacklist Configuration](/wiki/Configuration.html#blacklist) for more information.
See [Banlist Configuration](/wiki/Configuration#bans) for more information.

---

### 💰 Economy Mode

> ⚠️ Always test on a non-production server before enabling economy mode.

When `economy-mode` is enabled in `global.yml`, claim creation uses money instead of claim blocks.

To enable:

1.  Set `economy-mode: true` in `global.yml`
    
2.  Set values in `options.yml`:
    
    -   `economy-block-cost`
        
    -   `economy-sell-return`
        

To skip confirmation prompts, deny:

```
griefdefender.user.claim.economy.create-confirm

```

Note: `/buyclaimblocks` and `/sellclaimblocks` also require the above options but do not require `economy-mode` to be enabled.

### ⚔️ PvP Configuration

GriefDefender allows you to customize how PvP is handled across claims or even disable its protection entirely.

#### Options in `global.yml`

You can disable PvP handling globally by setting:

```yaml
enable-pvp: false

```

This will prevent GriefDefender from processing PvP checks server-wide.

#### Control via `options.yml`

PvP-related claim behavior can be configured using options like:

-   `pvp-enabled`
    
-   `pvp-require-trust`
    

These options can be set globally in `options.yml` or per-group using LuckPerms meta.


#### Disabling Claim Block Use for PvP

If you'd rather not use claim blocks to manage PvP and prefer global or world-level PvP rules, just disable GriefDefender’s PvP checks as shown above.

📖 See the [PvP Guide](/wiki/basic/PvP) for more tips and full configuration breakdown.

----------

### ⏳ Claim Expiration

GriefDefender includes an **expiration system** that allows claims to automatically expire based on player inactivity.

#### Global Configuration

In `global.yml`, you can enable and configure:

-   Whether expiration is active
    
-   What type of expiration (e.g., player inactivity)
    
-   How frequently GriefDefender checks for expired claims
    

#### Inactivity Threshold

The number of days a player must be inactive before their claim expires is set using the `claim-expiration` option in `options.yml`.

#### Per-Group Expiration Rules

You can customize expiration rules per LuckPerms group using the `/cog` command or LuckPerms meta options.

This is useful for:

-   Preventing expiration for donor groups
    
-   Setting shorter timeouts for trial or inactive users
    

📖 See: [Options Guide](/wiki/basic/Options.html) and [Command Reference](/wiki/Commands.html#cog)

----------

### 🚩 Configuring Flag Defaults

GriefDefender uses a two-tier flag system: **Root Flags** and **Flag Definitions**. Most users will interact with **definitions** — user-friendly toggles for common actions like `pvp`, `animal-spawn`, and `container-access`.

Even unclaimed land (wilderness) is treated as a claim, so flags apply everywhere unless configured otherwise.

To manage flags easily:

-   Use `/cf` to open the in-game flag editor
    
-   Or use `/gd flags` to access the new GUI interface
    
-   Browse categories like `PUBLIC`, `OWNER`, or `ADMIN`
    
-   Click icons to toggle allow/deny
    

Each definition controls one or more backend root flags and is stored in `presets/minecraft.yml`. You can fully customize them there or assign GUI access with permissions like:

```
griefdefender.user.definition.flag.minecraft.user.pvp

```

For a full breakdown of how flag definitions work — including icons, trust groups, and startup defaults — see the [Flag Definitions GUI Guide](/wiki/basic/Flag-Definitions-GUI.html).

### 📊 Claim Block Accrual Settings

GriefDefender allows you to configure how players earn and store claim blocks using the `options.yml` file or by applying options directly to LuckPerms groups.

##### Via `options.yml`

This file defines the **default values** applied to all players during server startup. Key options include:

-   `initial-blocks`: The number of claim blocks a player starts with
    
-   `block-accrual-per-hour`: How many blocks are earned passively per hour
    
-   `max-accrued-blocks`: Maximum number of blocks a player can store
    

These values apply globally unless overridden by LuckPerms.

#### Via LuckPerms (Recommended for group overrides)

All options in `options.yml` can also be set as **meta values** in LuckPerms. This allows you to customize accruals per group or individual player.

Example:

```bash
/lp group vip meta set initial-blocks 3000
/lp group vip meta set block-accrual-per-hour 150
/lp group vip meta set max-accrued-blocks 10000

```

These values override the defaults from `options.yml` and persist across restarts.

See: [Options Guide](/wiki/basic/Options.html#global-options)

### 💼 Renting & Leasing Claims

GriefDefender recommends using the **RealEstate** plugin for renting and leasing claims.

RealEstate offers a powerful interface for:

-   Renting claims to players for a set duration and price
    
-   Selling claims with sign integration
    

The GriefDefender-compatible version of RealEstate is available in private Discord channels for users with a valid purchase.

See: [RealEstate Integration Guide](https://docs.griefdefender.com/hooks/RealEstate)

RealEstate offers a powerful interface for:

-   Renting claims to players for a set duration and price
    
-   Selling claims with sign integration
    

See: [RealEstate Integration Guide](https://docs.griefdefender.com/hooks/RealEstate)


### 🧱 PlaceholderAPI Support

GriefDefender has built-in integration with PlaceholderAPI for use in chat, signs, and scoreboards.
  
-   Example placeholders: `%griefdefender_claim_name%`, `%griefdefender_owner%`
    

See: [PlaceholderAPI Hook Guide](https://docs.griefdefender.com/hooks/PlaceholderAPI)


### 🔌 GDHooks Plugin

The **GDHooks** plugin extends GriefDefender by enabling integration with external services such as Dynmap, PlaceholderAPI, Denizen, and more.

Key features:

-   Displays claim areas on **Dynmap**
    
-   Allows claim scripting through **Denizen**
    
-   Enhances PlaceholderAPI output options
    
-   Provides additional webhooks and automation triggers
    

> 🔌 GDHooks is an optional companion plugin and requires GriefDefender to be installed first.

See: [GDHooks Documentation](https://docs.griefdefender.com/hooks/GDHooks)