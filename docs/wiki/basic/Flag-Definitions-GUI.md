---
title: "Flag System: Root Flags, Definitions and GUI"
tag: flags
category: claim
icon: screen
---


# Flag System: Root Flags, Definitions and GUI

**Tag**: `flags`
**Category**: `claim`
**Icon**: `screen`

---

## 📌 Table of Contents

* [📖 Overview](#📖-overview)
* [🛠️ Configuration Paths](#🛠️-configuration-paths)
* [🚀New Users Start Here](#🚀-new-users-start-here)
  * [🧩How Flags and Definitions Work](#🧩-how-flags-and-definitions-work) 
* [🚩 Flags Overview](#🚩-flags-overview)
  * [⚙️ Root Flags](#⚙️-root-flags)
  * [🎛️ Flag Definitions](#🎛️-flag-definitions)
    * [🧭 Contexts](#🧭-contexts)
    * [👥 Default Groups](#👥-default-groups)
    * [✅ Default Value](#✅-default-value)
    * [🟢 Enabled](#🟢-enabled)
    * [🧱 Icon](#🧱-icon)
    * [👑 Owner Mode](#👑-owner-mode)
    * [🧩 Permissions](#🧩-permissions)
* [🖥️ GUI Overview](#🖥️-gui-overview)
* [🔐 GUI Permissions](#🔐-gui-permissions)
* [🧱 GUI Structure & Behavior](#🧱-gui-structure--behavior)
  * [💬 Chat GUI](#💬-chat-gui)
  * [🎨 Inventory GUI](#🎨-inventory-gui)
  * [🚫 Restricting GUI Access](#🚫-restricting-gui-access)
  * [📂 Admin Flag Definitions](#📂-admin-flag-definitions)
  * [👤 User Flag Definitions](#👤-user-flag-definitions)
* [🧠 Advanced: Root Flag Usage & Commands](#🧠-advanced-root-flag-usage--commands)

  * [📌 What Are Root Flags?](#📌-what-are-root-flags)
  * [❓ Why Use Root Flags Directly?](#❓-why-use-root-flags-directly)
  * [🛠️ Key Commands](#🛠️-key-commands)
  * [📏 Command Syntax](#📏-command-syntax)
  * [💡 Examples](#💡-examples)
  * [🧩 LuckPerms Equivalents](#🧩-luckperms-equivalents)
  * [📋 Available Root Flags](#📋-available-root-flags)
  * [🏷 Custom Target Tags](#🏷-custom-target-tags)
  * [⚙️ Flag Control Section](#⚙️-flag-control-section)
  * [🏷 Custom Tags](#🏷-custom-tags)
  * [🔍 Interpreting `gddebug` Output](#🔍-interpreting-gddebug-output)
  * [📚 How Flags Are Stored in LuckPerms](#📚-how-flags-are-stored-in-luckperms)
  * [🛠 Applying Custom Root Flag Rules](#🛠-applying-custom-root-flag-rules)
* [🧠 Advanced Flag Definition Configuration](#🧠-advanced-flag-definition-configuration)
  * [📄 Defining New GUI Flags](#📄-defining-new-gui-flags)
  * [📍 Context Application](#📍-context-application)
  * [👥 Group-Based Flag Defaults](#👥-group-based-flag-defaults)


---


## 🚀 New Users Start Here

If you're new to GriefDefender or claim flags, begin with these:

- Use `/cf` to manage claim flags in a GUI
- Understand that each toggle (like `animal-spawn`) is a **definition** that controls one or more **root flags** (like `entity-spawn`)
- Explore the Inventory GUI or Chat GUI to see which flags apply to public vs trusted users
- Use `/gddebug record claim` to inspect what's happening when something is blocked

Once you're comfortable, you can create or customize flags in `minecraft.yml`, set icons, group permissions, and even define what shows up in GUIs.


### 🧩 How Flags and Definitions Work

GriefDefender uses two core systems to control what players and entities can do in claims:

- **Root Flags**: These are the raw server actions (e.g., `block-break`, `entity-damage`, `interact-block-secondary`) triggered by events like placing a block or opening a container.
- **Flag Definitions**: These are pre-built combinations of one or more root flags plus context (like player, block type, or time of day). They’re what you see in the `/cf` GUI.

Definitions make things easier by grouping logic under names like `animal-spawn` or `pvp`, so users and admins don't have to deal with raw flags.

- Definitions are stored in `presets/minecraft.yml`
- The GUI uses these definitions to toggle claim behavior
- If no matching definition is found, the plugin falls back to root flags in `flags.yml`
- Use `/gddebug` to inspect which root flag and definition was triggered during an event


---



## 📖 Overview

GriefDefender’s flag system lets you control what players and entities can do inside (or outside) of claims, through a combination of base events and customizable definitions.

There are two main components:

- **Root Flags**: Low-level events triggered by game actions (like `block-break`, `entity-spawn`, or `command-execute`). These are the raw building blocks of permission checks.
- **Flag Definitions**: Named toggles shown in the GUI (like `animal-spawn` or `pvp`). Each definition maps to one or more root flags, bundled with a specific context, icon, name, and rule.

Players interact with definitions using the `/cf` GUI or command-based editors, while administrators can define, group, and override behaviors using YAML files or LuckPerms directly.

Admins can fully customize definitions and behaviors through YAML-based preset files, while players interact with simplified GUI toggles.

> 💡 You can even define your own GUI flags and allow users to toggle them!

---

## 🛠️ Configuration Paths

* `config/griefdefender/flags.yml`: Enables/disables specific root flags
* `config/griefdefender/presets/minecraft.yml`: Defines GUI claim flags and their behavior
* `config/griefdefender/tags.yml`: Defines custom tags for use in flags

---


## 🚩 Flags Overview

GriefDefender uses a layered flag system that separates raw events from player-facing controls. Understanding the distinction between **Root Flags** and **Flag Definitions** is key to mastering claim behavior.

### ⚙️ Root Flags

Root flags represent the fundamental events GriefDefender listens for — things like `block-break`, `entity-spawn`, or `interact-block-secondary`. These are triggered by the game engine (e.g., PaperMC) and directly determine whether an action is allowed or denied within a claim.

They are:
- **Low-level and fine-grained**, ideal for admins or advanced users
- Managed directly through commands or permission nodes
- Defined internally by the plugin ([see list](https://github.com/bloodmc/GriefDefenderAPI/blob/master/src/main/java/com/griefdefender/api/permission/flag/Flags.java))

Root flags can be modified via:
- `/gd flag ...` commands
- LuckPerms nodes like `griefdefender.flag.block-break`
- Configuration fallbacks in `flags.yml` (used only if no definition applies)

### 🎛️ Flag Definitions

GUI Flags — more precisely called **Flag Definitions** — are higher-level, user-friendly wrappers around root flags. These are the toggles you interact with in the in-game GUI via `/cf` or `/claimgui`.

Each GUI flag is a definition composed of:
- One or more **root flags**
- A set of **contexts** (e.g., claim type, target, source)
- A display name, icon, and default value
- A permission key used for LuckPerms storage

These definitions live in `presets/minecraft.yml` and are organized under `admin` and `user` sections to control what appears in the GUI for each permission group.

Example:
```yaml
animal-spawn:
  contexts:
    gd_claim_default: user
  default-value: true
  enabled: true
  icon:
    id: minecraft:pig_spawn_egg
  title: '&6animal-spawn'
  owner-mode: true
  permissions:
    flag: entity-spawn
    target: "#animal"
```
In this example:

-   The GUI toggle labeled `animal-spawn` maps to the root flag `entity-spawn`
    
-   It applies only to entities tagged `#animal`
    
-   Players see a simple toggle, but behind the scenes it's enforcing a complex rule
    

GUI flags are the **preferred interface** for most users and are critical for creating intuitive claim management menus.

---

####  🧭 Contexts

**What it does:**  
Controls where a flag applies by default during **server startup**.  
These values only apply **initially** — **GUI toggles will override them**.

**Common usage:**  
`gd_claim_default=user` → applies to all user claims (excluding wilderness)

**Accepted values:**

- `user` — All user claims  
- `admin` — Admin claims  
- `basic` — Basic claims  
- `subdivision` — Subdivisions  
- `town` — Towns  
- `global` — All claims (including wilderness)

> ⚠️ GUI toggles always use the `gd_claim` context, which overrides the above on interaction.  
> 💡 See [Advanced Contexts](#advanced-contexts) for full details.

---

#### 👥 Default Groups

**What it does:**  
Applies persistent flag values to specific trust groups or LP groups.

**Examples:**

- `accessor=false` → denies all accessor-trusted users  
- `manager=false` → affects claim owners and managers

These are stored directly in **LuckPerms** and take priority unless the GUI is used to change them.

**To enable GUI toggles for these groups, assign:**

- `griefdefender.advanced.user.gui.flag.group.accessor`
- `griefdefender.advanced.user.gui.flag.group.container`
- `griefdefender.advanced.user.gui.flag.group.manager`  
*(and others)*

> 🛠️ See [Advanced Default Groups](#advanced-default-groups) for more use cases.

---

#### ✅ Default Value

Sets whether the flag is enabled by default when a claim is created.  
Overrides only apply if not toggled manually.

---

#### 🟢 Enabled

Controls whether the definition is available in GUI or `/claimflagdefinition`.

---

####  🧱 Icon

Controls how the flag appears in the **Inventory GUI** (not Chat GUI).

**Available keys:**

| Key            | Type    | Description |
|----------------|---------|-------------|
| `id`           | String  | Item used for the icon (e.g., `minecraft:emerald`) |
| `title`        | String  | Hover title (e.g., `&6villager-trade`) |
| `lore`         | String  | Hover description |
| `quantity`     | Int     | Stack size shown |
| `model-data`   | Int     | Custom model data |
| `enchanted`    | Boolean | Makes the icon glow |
| `icon-flags`   | List    | Hides item metadata like:<br> – `hide_enchants`<br> – `hide_attributes`<br> – `hide_potion_effects` |

📚 See the [Minecraft ID List](https://minecraft-ids.grahamedgecombe.com/) for valid `id` values.

---

#### 👑 Owner Mode

If `true`, lets claim **owners** be affected by the flag.  
Owners will see it under the `OWNER` section in GUI.

---

####  🧩 Permissions

This is the logic behind the toggle.  
Each entry links root flags with conditions like source/target.

**Example:**  
`flag=interact-block-secondary, target=minecraft:chest`

You can use Minecraft tags (e.g., `#animal`) or specific IDs.


---

## 🖥️ GUI Overview

Use `/cf` or `/claimflag` in a claim you own to access the flag menu. You can toggle GUI type (Inventory or Chat) via `/claimgui`.

Each toggleable GUI flag is based on the definitions from `minecraft.yml`.

Use `/claimflagdefinition` to view raw definitions. You can also add your own.

---

## 🔐 GUI Permissions

GriefDefender allows fine-grained control over which GUI flag definitions a user or group can access and toggle.

The permission format is:
```
griefdefender.user.definition.flag.<preset>.<group>.<definition_name>
```

- `<preset>` typically refers to the filename (e.g., `minecraft`)
- `<group>` is usually `user` or `admin`, depending on where the flag is defined
- `<definition_name>` is the key of the flag definition, like `damage-animals`

#### Example: Denying Access to a Specific Flag

To prevent a group from toggling the `damage-animals` flag, apply the following in LuckPerms:

```
/lp group <groupname> permission set griefdefender.user.definition.flag.minecraft.user.damage-animals false
```

> 💡 GUI flags start off with their defined default (`true` or `false`) and reflect the current permission state for the claim you're in. Changing the toggle updates the underlying LuckPerms permission.


---

## 🧱 GUI Structure & Behavior

GriefDefender provides two types of flag management interfaces:

- **Chat GUI**: Text-based interface grouped by trust type (e.g., PUBLIC, OWNER, ADMIN, ACCESSOR, BUILDER, etc.)
- **Inventory GUI**: Visual interface with icons representing each definition, grouped into tabs by preset

Both are accessed via `/cf` or `/gd flag claim`. The display depends on the user's permissions and the `/claimgui` toggle. See the [Main GUI](/wiki/basic/GUI.html) page for visuals and more.

### 💬 Chat GUI

In the Chat GUI, definitions appear as lists grouped by:

- **PUBLIC**: Affects non-trusted users. Always visible.
- **OWNER**: Affects claim owners and trusted users. Only visible if the definition has `owner-mode: true` and the user has the permission:  
  `griefdefender.advanced.user.gui.flag.group.owner`
- **ADMIN**: Affects only the current claim, for administrative control.
- **Trust Types**: Accessor, Builder, Container, Manager — used for fine-tuned trusted role behavior

Each toggle reflects the **current state** (`true` / `false`) for the claim you're standing in.



### 🎨 Inventory GUI

The Inventory GUI displays flag definitions as **Minecraft item icons** inside a chest-style interface.

- Each icon represents a flag definition (like `animal-spawn`, `pvp`, or `container-access`)
- Icons are fully customizable via `inventory.yml` (located in the root GriefDefender config folder), which controls layout, title, lore, and grouping
- Definitions shown depend on the current claim, user trust level, and GUI section (e.g., `PUBLIC`, `OWNER`, `ADMIN`)
- The layout mimics a standard Minecraft chest — all icons appear in a single view
- Hovering over an icon shows its name, description, and current value
- Clicking an icon toggles the flag between `true` and `false`

There are no tabs — everything is arranged visually in one interface using Minecraft’s inventory system.

> 🎨 Inventory GUI is ideal for players who prefer visual cues. Admins can tailor the interface using `inventory.yml` for better UX and organization.

---

### 🚫 Restricting GUI Access

To prevent a group from toggling a specific flag in the GUI (e.g., `damage-animals`):

```bash
/lp group <groupname> permission set griefdefender.user.definition.flag.minecraft.user.damage-animals false
```

###  📂 Admin Flag Definitions

> ⚠️ **Admin flags will ONLY affect the claim you are in.**

![Admin GUI](https://i.imgur.com/tSVSC7q.png)

By default, admins have access to two GUI modes: `PRESET` and `ADVANCED`.

- The **PRESET** mode is directly linked to the `minecraft.yml` preset file.
- Each group in this file (e.g., `USER`, `ADMIN`) becomes a tab in the GUI.
- These groups define which flags appear and how they behave.

> 💡 Admin definitions still apply flags only to the **claim you are standing in**. If you want defaults applied to all claims, use configuration options like `gd_claim_default`.

#### ✨ Delivered Admin Flag Definitions

These definitions are included with GriefDefender by default in the `ADMIN` group:

| Flag Definition                      | Default | Description |
|--------------------------------------|---------|-------------|
| `ambient-spawn`                     | true    | Controls ambient mob spawning (e.g., bats). |
| `animal-block-modify`              | true    | Whether animals can modify blocks (e.g., rabbits eating crops). |
| `animal-spawn`                     | true    | Whether animals like cows or pigs can spawn. |
| `aquatic-spawn`                    | true    | Whether aquatic creatures can spawn. |
| `armorstand-use`                   | false   | Allows placement/breaking of armor stands. |
| `chorus-fruit-teleport`            | false   | Allows teleporting with chorus fruit. |
| `commandblock-block-break`         | false   | Command blocks breaking blocks. |
| `commandblock-block-place`         | false   | Command blocks placing blocks. |
| `creeper-block-explosion`          | false   | Creepers damaging blocks. |
| `creeper-entity-explosion`         | false   | Creepers damaging entities. |
| `endcrystal-use`                   | false   | Allows placing or breaking end crystals. |
| `entity-armorstand-damage`         | false   | Damage to armor stands by any entity. |
| `entity-itemframe-damage`          | false   | Damage to item frames. |
| `exp-drop`                         | true    | Controls XP orb drops. |
| `fall-entity-damage`               | true    | Fall damage to mobs. |
| `fall-player-damage`               | true    | Fall damage to players. |
| `falling-block-break`              | true    | Falling blocks breaking others. |
| `fire-block-damage`                | true    | Fire damaging blocks. |
| `fire-entity-damage`               | true    | Fire damaging entities. |
| `lightning-damage`                 | true    | Lightning causing harm. |
| `monster-animal-damage`            | false   | Monsters damaging animals. |
| `monster-player-damage`            | true    | Monsters damaging players. |
| `monster-spawn`                    | true    | Monster spawn (e.g., creepers, skeletons). |
| `piston-item-spawn`                | true    | Item spawn from piston movement. |
| `piston-use`                       | false   | Whether pistons can be used. |
| `player-block-break`              | false   | Players breaking blocks. |
| `player-block-interact`           | false   | Players interacting with blocks (non-containers). |
| `player-block-place`              | false   | Players placing blocks. |
| `player-damage`                   | true    | Players taking damage. |
| `player-enderpearl-interact`      | true    | Using ender pearls. |
| `player-endportal-use`            | true    | Entering the End via portal. |
| `player-entity-interact`          | true    | Interacting with entities (not containers). |
| `player-exit`                     | true    | Players exiting the claim. |
| `player-item-drop`                | true    | Dropping items. |
| `player-item-pickup`              | true    | Picking up items. |
| `player-itemframe-interact`       | false   | Interacting with item frames. |
| `player-itemhanging-place`        | false   | Placing hanging items (e.g., frames). |
| `player-netherportal-use`         | true    | Using Nether portal. |
| `player-teleport-from`            | true    | Teleporting *from* the claim. |
| `player-teleport-to`              | true    | Teleporting *to* the claim. |
| `player-villager-damage`          | false   | Damaging villagers. |
| `ravager-block-break`             | true    | Ravagers breaking blocks. |
| `silverfish-block-infest`         | false   | Silverfish infesting blocks. |
| `tnt-block-explosion`             | false   | TNT destroying blocks. |
| `tnt-entity-explosion`            | false   | TNT damaging entities. |
| `turtle-egg-hatch`                | true    | Turtle eggs hatching. |
| `villager-farm`                   | true    | Villagers farming crops. |
| `wither-block-break`              | false   | Wither damaging blocks. |
| `wither-entity-damage`            | true    | Wither damaging entities. |

### 👤 User Flag Definitions

> ⚠️ **User flags only affect the claim you are currently standing in.**  
> ⚠️ To modify `USER` flag definitions in a claim you do not own, you must use `/ignoreclaims` and have the appropriate `ignoreclaims` permission.

When a regular user executes `/cf`, they'll see a simplified GUI with flag toggles grouped under the `USER` tab:

![User GUI](https://i.imgur.com/LTeNaaD.png)

The table below outlines the default user-level flag definitions provided in `minecraft.yml`:

| **Flag Definition**       | **Default Value** | **Description**                                                                 |
|---------------------------|-------------------|---------------------------------------------------------------------------------|
| `block-fertilize`         | false             | Controls whether a player can use bonemeal to fertilize blocks.                |
| `block-trampling`         | false             | Controls whether farmland and turtle eggs can be trampled.                     |
| `chest-access`            | false             | Controls whether a player can access chests and other inventory blocks.        |
| `crop-growth`             | true              | Controls whether crops grow naturally.                                         |
| `damage-animals`          | false             | Controls whether animals can be damaged by players.                            |
| `enderman-grief`          | false             | Controls whether endermen can pick up or move blocks.                          |
| `fire-spread`             | false             | Controls whether fire spreads to adjacent blocks.                              |
| `grass-growth`            | true              | Controls whether grass spreads over dirt blocks.                               |
| `ice-form`                | true              | Controls whether water can freeze into ice.                                    |
| `ice-melt`                | true              | Controls whether ice can melt.                                                 |
| `lava-flow`               | false             | Controls whether lava can flow into or out of the claim.                       |
| `leaf-decay`              | true              | Controls whether leaves decay over time.                                       |
| `lighter`                 | false             | Controls whether a player can use flint and steel.                             |
| `mushroom-growth`         | true              | Controls whether mushrooms grow or spread.                                     |
| `mycelium-spread`         | true              | Controls whether mycelium spreads to nearby blocks.                            |
| `painting-damage`         | false             | Controls whether players can break paintings.                                  |
| `player-enter`            | true              | Controls whether a player can enter the claim.                                 |
| `pvp`                     | true              | Controls whether players can engage in PvP combat.                             |
| `ride`                    | false             | Controls whether players can ride vehicles or animals not owned by them.       |
| `sign-edit`               | true              | Controls whether players can edit existing signs.                              |
| `sign-use`                | true              | Controls whether players can use signs (e.g., click events).                   |
| `sleep`                   | true              | Controls whether players can sleep in beds.                                    |
| `snow-fall`               | true              | Controls whether snow can fall naturally.                                      |
| `snow-melt`               | true              | Controls whether snow melts naturally.                                         |
| `snowman-trail`           | true              | Controls whether snowmen leave snow trails.                                    |
| `soil-dry`                | true              | Controls whether tilled soil can dry out.                                      |
| `vehicle-use`             | false             | Controls whether vehicles (boats, minecarts, etc.) can be used or placed.      |
| `villager-trade`          | true              | Controls whether players can trade with villagers.                             |
| `vine-growth`             | true              | Controls whether vines (and kelp) can grow.                                     |
| `water-flow`              | false             | Controls whether water can flow into or out of the claim.                      |


## 🧠 Advanced: Root Flag Usage & Commands

This section expands on low-level control for admins and advanced users.


### 📌 What Are Root Flags?

Root flags are internal triggers used by GD to detect and handle player actions. These include things like:

* `interact-block-secondary` (right-click block)
* `entity-damage` (any damage to entities)
* `command-execute` (any command run by a player)

### ❓ Why Use Root Flags Directly?

GUI flags are great for claim owners, but advanced users may want to:

* Apply flags globally or per-claim-type
* Target specific mod entities/items
* Apply override behavior
* Use via LuckPerms for groups/players


### Key Commands

```shell
/gd flag claim <flag> <target> <value> [contexts]     # /cf
/gd flag group <group> <flag> <target> <value> [contexts]   # /cfg
/gd flag player <player> <flag> <target> <value> [contexts] # /cfp
/gd flag reset                                         # /cfr
```


### Command Syntax

| Argument     | Meaning                                                                       |
| ------------ | ----------------------------------------------------------------------------- |
| `<flag>`     | Root flag to modify (e.g. `entity-spawn`)                                     |
| `<target>`   | Entity, block, or wildcard (e.g. `minecraft:chest`, `#animal`)                |
| `<value>`    | `true`, `false`, or `undefined` (or `0`)                                      |
| `[contexts]` | Optional key-value filters (e.g. `source=minecraft:player`, `override=admin`) |

### Examples

* Block block breaking: `/cf block-break minecraft:diamond_block false`
* Deny right-click on beds: `/cf interact-block-secondary minecraft:bed false`
* Prevent portal use in admin claims: `/cfg Admin portal-use any false override=admin`

---
### LuckPerms Equivalents

The same flag can be applied as a LuckPerms permission:

```
/lp group Admin permission set griefdefender.flag.block-break false gd_claim_default=admin target=minecraft:diamond_block
```

### Available Root Flags

[A full list of root flags is here](https://github.com/bloodmc/GriefDefenderAPI/blob/master/src/main/java/com/griefdefender/api/permission/flag/Flags.java)

Includes: `block-break`, `block-place`, `entity-spawn`, `item-use`, `command-execute`, etc.

### Custom Target Tags

GriefDefender supports Minecraft’s tag system and defines its own target groups like:

* `#animal`
* `#monster`
* `#vehicle`

You can create more tags by defining them in `tags.yml`. Example:

```yaml
container:
  - minecraft:chest
  - minecraft:barrel
  - minecraft:trapped_chest
```
Use them in `target=` for future-proofing definitions.

### Flag Control Section

Enable/disable root flags in `flags.yml`:

```yaml
flag-control:
  block-break: true
  entity-damage: true
  portal-use: false
```
Disable root flags here only if absolutely necessary.

### 🏷 Custom Tags

Custom tags let you group targets under a shared name. Useful for defining broad behavior (e.g. `#containers`) without repeating every block ID. Example:

**Configuration Path:**  
`config/griefdefender/tags.yml`

#### Example `tags.yml`
```yaml
container:
  - minecraft:chest
  - minecraft:barrel
  - minecraft:shulker_box
```

Then use it in a flag:

```
/cf interact-block-secondary #container false
```

### 🔍 Interpreting `gddebug` Output

`/gddebug` helps determine what claim flags are being triggered by specific in-game actions. Run `/gddebug record claim`, perform an action (like breaking a block), then run `/gddebug paste` to see the results.

Each event in the output includes:

* **Flag**: The root claim flag that was triggered (e.g. `block-break`)
* **Definition**: GUI flag definition(s) that matched the root flag (e.g. `player-block-break`)
* **Trust**: The level of trust required (e.g. `builder`)
* **Source**: What triggered the event (e.g. `minecraft:player`)
* **Target**: The object being acted upon (e.g. `minecraft:grass_block`)
* **Location**: Coordinates of the event
* **User/Group**: Who caused the event (e.g. player username or group)
* **Contexts**: Additional metadata that adds meaning to the event (e.g. vanilla or custom tags the target belongs to)
* **Result**: Whether the action was permitted (`true`) or denied (`false`) based on current flag settings

> 💡 **Pro tip**: The last few lines in a `gddebug` output usually relate to the command itself and can often be ignored.

Understanding `gddebug` outputs is essential for:

* Diagnosing why an action was blocked or allowed
* Identifying which flag needs to be edited
* Creating precise flag definitions using `source`, `target`, and `context`

> 💡 See [Debugging](/wiki/advanced/Debugging.html) for full details.

### 📚 How Flags Are Stored in LuckPerms

GriefDefender does **not** store flag states in its own flat files or database. Instead, **all user changes to flag values** (like toggling them in the GUI) are stored as **permissions in LuckPerms**.

For example:

* When you toggle the `block-fertilize` flag in the GUI, it adds a permission to the `griefdefender_definition` group in LuckPerms.
* This permission might look like:

```
griefdefender.flag.block-fertilize target=minecraft:wheat source=minecraft:player gd_claim=claim_abc123
```
#### 🔍 How to Read This

- **Permission Node**: `griefdefender.flag.block-fertilize` is the root flag
- **Context**:
  - `gd_claim` – unique claim ID this permission applies to
  - `source` – who or what triggered the event (e.g., `minecraft:player`)
  - `target` – what the event was acting on (e.g., `minecraft:wheat`)

This setup is how GriefDefender keeps track of which flags are active in which claims — **LuckPerms becomes the real-time storage and logic layer** for permissions enforcement.



#### 🧱 Where Are Flags Stored?

GriefDefender creates several LuckPerms groups on first launch to manage claim and trust data. Here's a breakdown of each group and its purpose:

#### Claim Flag Groups

| Group                        | Purpose                                                                                  |
|-----------------------------|------------------------------------------------------------------------------------------|
| `griefdefender_claim`       | Stores flag permissions set via `/cf` in a specific claim (not from GUI presets)         |
| `griefdefender_default`     | Stores flags with `gd_claim_default` context via `/cf default=<type>`                    |
| `griefdefender_definition`  | Stores GUI-based flag definition permissions (from preset GUI)                           |
| `griefdefender_option`      | Stores all option meta permissions (e.g., max claims, max trust)                         |
| `griefdefender_override`    | Stores flags with `gd_claim_override` context                                            |
| `griefdefender_claim_group` | Stores flags applied to claim groups                                                     |

##### Trust Permission Groups

| Group                            | Purpose                                             |
|----------------------------------|-----------------------------------------------------|
| `griefdefender_trust_resident`   | Trusts with resident-level access                   |
| `griefdefender_trust_accessor`   | Trusts with accessor-level access                   |
| `griefdefender_trust_builder`    | Trusts with builder-level access                    |
| `griefdefender_trust_container`  | Trusts with container-level access                  |
| `griefdefender_trust_manager`    | Trusts with manager-level access                    |


### ⚖️ LuckPerms Group Weights

| Group Name                         | Weight |
|-----------------------------------|--------|
| `griefdefender_option`            | 0      |
| `griefdefender_override`          | -40    |
| `griefdefender_claim`             | -60    |
| `griefdefender_trust_manager`     | -70    |
| `griefdefender_trust_builder`     | -71    |
| `griefdefender_trust_container`   | -72    |
| `griefdefender_trust_accessor`    | -73    |
| `griefdefender_trust_resident`    | -74    |
| `griefdefender_claim_group`       | -75    |
| `griefdefender_definition`        | -80    |
| `griefdefender_default`           | -100   |

Lower weights take priority in LuckPerms. For example, a `-100` weight from `griefdefender_default` will override a `-60` setting from `griefdefender_claim`.


### 🛠 Managing Flags

- Use `/lp editor` to view and edit all GUI flag changes
- Back up your LuckPerms data regularly to preserve flag settings
- Use weights and group inheritance in LP for advanced behavior control

![LuckPerms Flag Entry Example](https://i.imgur.com/1Fci4SS.png)

> 💡 GUI toggles like `/cf` write these permissions behind the scenes—no manual LuckPerms input required.

> 🔒 You’ll need `griefdefender.advanced.admin.flags.*` to work with advanced or custom flag setups.

> 🧠 For complex rule-building, use GD’s `/gddebug record` and analyze contexts before writing new flag logic.



### 🛠 Applying Custom Root Flag Rules

You may have read the last section and thought, well does that mean you can basically skip the step of using a GUI and create a flag in LuckPerms itself? And yes, that is absolutely the case and I would recommend admins go in to edit the actual LuckPerms claim flags for a claim if you are changing the `minecraft.yml` config a lot or are messing with the custom claim flags in a claim.

But in general it’s a pain to do that manually—thankfully GriefDefender comes with its own command just to create these! If you don’t run `/claimflag` directly but instead hit space, you can choose from any of the root claim flags. Hit space again to select from all tags, blocks, and entities (i.e. the target). Then space again to choose the value (true/false).

> 💡 To go deeper, hit space again to choose a context like `source=pixelmon:occupiedpokeball`.

By default, this sets the flag only for the claim you're standing in. If you want to make it global, add `default=basic` (or `admin`, `town`, etc.).

This method excels at per-claim customization. For example:

* Allowing only Shulker Boxes to be broken/placed at spawn via 3D claim groups
* Allowing end crystals to only be right-clicked on bedrock in the End (dragon summoning)

However, it's **not ideal** for global claim flags—use Method 2 for that.


## 🧠 Advanced: Flag Definition Configuration

The following sections provide advanced configuration techniques for flag definitions. These are intended for server administrators who want fine-grained control over how default flag values are applied at startup or vary by group.

While GUI toggles apply directly to the claim you are in, the methods below allow you to automate and enforce default behaviors across all claims, based on context or group membership.

Use these tools to predefine protection rules for new claims, limit trust groups from performing actions by default, or create scalable rule sets for your server.


### 📄 Defining New GUI Flags

The `minecraft.yml` file in the `presets` folder is the main place to define new **GUI claim flags**. It contains two main sections: `admin` flags and `user` flags. Whichever heading a flag is placed under determines which GUI menu it will appear in.

The easiest way to create a new flag is to copy and modify an existing one. Typically, you only need to adjust values between `default-value` and `permissions`.

When setting the permission, it's best to first run `/gddebug` while performing the action you want to control—this will reveal the root flag and context.

> 🔎 Tip: Use `/gddebug record claim` to limit debug output to only the claim you're standing in.

For example, to fix an issue where players could change what Allays were holding in other people’s claims, the user created an **admin-only claim flag** with a `default-value: false`—effectively turning off the feature unless explicitly re-enabled.

By also setting `owner-mode: false`, this flag could be enforced even for claim owners.

Claim flags can also be applied to **wilderness**, effectively disabling features server-wide.

This method is ideal for:

* Flags you want permanently enabled/disabled
* Admin-only controls
* Server-wide configuration defaults

For greater flexibility and a user-friendly interface, consider combining this with Method 1 (in-game commands + GUI).

---

### 📍 Context Application

:::: warning Important  
**Contexts in a flag definition only apply at server startup.** When players toggle a flag in the GUI, it is always applied using the `gd_claim` context for the claim they are currently standing in.  
::::

```yaml
contexts = [
  "gd_claim_default=user"
]
```
The `contexts` section defines _where and how_ a flag definition should be applied during server startup.  
Each context applies to all `permissions=[...]` entries inside the definition.

GriefDefender supports **two context types** in definitions:


---

##### 🔹 `gd_claim_default`

This is the **most common** context. It tells GriefDefender to apply the definition as a **transient (non-persistent)** permission to specified claim types when the server starts.

**Supported values:**

| Value         | Applies To                                |
|---------------|-------------------------------------------|
| `admin`       | Admin claims only                         |
| `basic`       | Basic claims only                         |
| `subdivision` | Subdivisions only                         |
| `town`        | Town claims only                          |
| `user`        | All claims **except** wilderness          |
| `global`      | All claims **including** wilderness       |

**Notes:**

- These flags only exist in memory unless changed by a player or admin.
- If a flag is toggled in GUI or applied via command, it gets stored permanently in LuckPerms and **overrides** this default.
- Such GUI-based changes are saved in the `griefdefender_definition` group.
- To reset, simply remove the specific permission from LuckPerms.

---
##### 🔹 `gd_claim_override`

This context sets up **persistent override flags** during startup, saved in the `griefdefender_override` LP group — which has the **highest priority** across GD permissions.

**Supported values:**

| Value         | Applies To                                |
|---------------|-------------------------------------------|
| `admin`       | Admin claims only                         |
| `basic`       | Basic claims only                         |
| `subdivision` | Subdivisions only                         |
| `town`        | Town claims only                          |
| `user`        | All claims **except** wilderness          |
| `global`      | All claims **including** wilderness       |

**Notes:**

- Unlike `gd_claim_default`, these overrides are written to LuckPerms storage and persist across restarts.
- If both override and default are present, **override takes precedence**.

---

##### 🔗 Learn More

- [GriefDefender - Contexts](https://docs.griefdefender.com/wiki/advanced/Contexts.html)  
- [LuckPerms - Context System](https://luckperms.net/wiki/Context)
---

###  👥 Group-Based Flag Defaults

The `default-groups` section allows admins to segment specific LP groups with their own default values. These permissions will always be applied as **persistent** in LuckPerms, meaning they are stored in LP rather than applied transiently at runtime.

#### 🧪 Example 1: Trust-Based Defaults

Apply different defaults based on the trust level:

```
default-groups {
    accessor=false,
    container=false
}
```

This prevents players with **accessor** and **container** trust from interacting with certain entities (e.g., villagers) by default. Claim owners can override this via the GUI under the appropriate trust tab.

> By default, players can only toggle `PUBLIC` flags in the GUI. To enable control over trust-specific groups, assign:

```
griefdefender.advanced.user.gui.flag.group.owner
griefdefender.advanced.user.gui.flag.group.accessor
griefdefender.advanced.user.gui.flag.group.builder
griefdefender.advanced.user.gui.flag.group.container
griefdefender.advanced.user.gui.flag.group.manager
```

> Note: Internally, these groups are prefixed with `griefdefender_`, but GD allows you to omit that prefix in the definition.

---

#### 🧪 Example 2: Group-Based Restriction

Restrict interaction for users in a specific LP group:

```
default-groups {
    novice=false
}
```

Even if the `default-value` is `true`, users in the `novice` group would be denied this flag by default.

---

#### 🧪 Example 3: Affecting Claim Owners

Apply a default to all claim owners:

```
default-groups {
    manager=false
}
```

The `manager` group has special behavior: it affects not only users with **manager trust**, but also **claim owners**. Admins can use this to configure claim-wide owner defaults.

> To prevent owners from overriding this in the GUI, deny the permission:  
> `griefdefender.advanced.user.gui.flag.group.manager`
