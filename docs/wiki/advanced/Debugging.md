---
title: Debugging
tag: Info
category: info
icon: debug
---

# 🐞 Debugging

GriefDefender is a **flag-driven** protection system. Every in-game action is evaluated against a set of flag permissions. If you're unsure why something is **allowed** or **blocked**, the `/gddebug` tool helps identify the exact flag check and context involved.

---

## 🛠️ Command Syntax

```
/gddebug record [filter]
```

### 🔍 Filter Options
- `claim` — Only records events in the **claim you're currently standing in**.
- `username` — Filters records for a **specific user** (e.g. `/gddebug record Notch`).
- Any custom string — Used to help identify your debug session.
- No filter — Captures **all flag checks globally**.

### 🧪 Examples

| Use Case | Command |
|----------|---------|
| Record all flag checks | `/gddebug record` |
| Record checks only in the current claim | `/gddebug record claim` |
| Record checks for a specific user | `/gddebug record KratosKnox` |
| Record with a custom filter label | `/gddebug record my-test-session` |

When you're done, **paste the results** with:

```
/gddebug paste
```

This uploads the data and returns a clickable link containing the recorded flag checks.

---

## 📄 Sample Output (Pastebin Viewer)

Every debug session generates a table showing the details of every **flag check** triggered during the recording period.

### 🔑 Metadata

| Key              | Value                  |
|------------------|------------------------|
| GD Version       | 3.0.9                  |
| Record Duration  | 18 seconds             |
| User             | ALL                    |
| World            | survival               |
| Minecraft Version| 1.21.8                 |

---

## 📊 Output Columns Explained

Each line in the output represents a **flag permission check**. Use the following breakdown to interpret each column:

| Column | Description |
|--------|-------------|
| **Flag** | The base flag being checked (e.g. `block-place`, `entity-spawn`) |
| **Definition** | The matching [Flag Definition](/wiki/advanced/Flag-Definitions-GUI.html) used to determine behavior for this permission. Typically maps to entries from `minecraft.yml` or other preset files. |
| **Trust** | The trust level of the user in the claim (e.g. `accessor`, `builder`, `manager`) |
| **Source** | The entity or action that triggered the event (e.g. `minecraft:player`, `spawnreason:natural`) |
| **Target** | The entity, block, or item affected (e.g. `minecraft:zombie`, `minecraft:chest`) |
| **Location** | Coordinates, claim UUID, world, and claim type (e.g. admin, wilderness, basic) |
| **User/Group** | Who triggered the event — a player, group, or `default` (server/system actions) |
| **Contexts** | All applicable [contexts](/wiki/advanced/Contexts.html) used during the check. These can include world, item used, tags, source, target, etc. |
| **Result** | Whether the flag was **allowed (TRUE)** or **blocked (FALSE)** |

---

## 💡 Tips for Troubleshooting

- **Always include `/gddebug paste`** to get the link — without it, the log won’t be viewable.
- Use `claim` filtering in heavily populated servers to reduce noise.
- Pay attention to **context stacks** — they are often the key to identifying incorrect permissions.
- If you're debugging trust issues, cross-check the **trust** column against the user's trust level in the claim.
- `FALSE` results mean a flag was blocked — look for the specific context or target involved.

---

## 🔗 Related Pages

- 🧩 [Flag Guide](/wiki/basic/Flag-Definitions-GUI.html) — Understand how flags, definitions, and GUI behavior work together in GriefDefender.

