---
title: 权限
tags: 信息
category: 信息
icon: condition
---


如果您想快速使用，将 ```griefdefender.user.*``` 授权至您的玩家。
<br>GD 不支持 `*` 或 `OP` 作为管理员权限，请使用 ```griefdefender.user.*``` 和 ```griefdefender.admin.*``` 来授予管理员权限。

```
/lp group <权限组> permission set griefdefender.user.*
```

在大多数情况下，建议使用上面的通用权限，如果您想要更精细的控制，请阅览下面的所有权限并相应地关掉一些不需要的权限。

### 重要信息
:::: warning 警告
由于 GriefDefender 缓存了获取的权限，所以请确保您在更改管理员权限后运行 `/gdreload` 。
 
就目前而言，GD 大量使用了 LP 的 `default` 权限组，以下现象是必须出现的，请不要删除权限组，否则很可能插件将不能正常使用。

- 所有非 GriefDefender 的权限组继承自 `default` 权限组。  
- `default` 权限组继承自以下 GD 创建的权限组： `griefdefender_claim, griefdefender_default, griefdefender_definition, griefdefender_option, griefdefender_override`
- `default` 权限组不应该被禁用。LP 强烈建议不要禁用此组。 
详见 https://luckperms.net/wiki/Default-Groups  
- 一般情况下不要将 `griefdefender.flag.xxx` 当作权限授予玩家，其作为内部领地权限检查使用！(使用准则参考[特殊用例](./usecases.md))
::::

# 用户权限

## 领地相关
:::: warning
注意：此处文档与最新版不符，请参阅 [英文文档](https://github.com/bloodmc/GriefDefender/wiki/Permissions)
::::
| 权限节点 | 描述 |
| --------- | ----------- |
| griefdefender.user.claim.command.abandon.basic | 允许遗弃 基础 领地 |
| griefdefender.user.claim.command.abandon.town | 允许遗弃 城镇 领地 |
| griefdefender.user.claim.command.abandon-all | 允许遗弃 全部 领地 |
| griefdefender.user.claim.command.abandon-top-level  | 允许遗弃母领地及其下属的子领地 |
| griefdefender.user.claim.command.ban-item | 允许在领地内 禁用 物品 |
| griefdefender.user.claim.command.basic-mode  | 允许使用 基础 领地圈地模式 |
| griefdefender.user.claim.command.bank | 允许使用 领地银行 |
| griefdefender.user.claim.command.buy | 允许 购买 领地 (需要经济插件) |
| griefdefender.user.claim.command.buy-blocks | 允许购买 领地方块 (需要经济插件) |
| griefdefender.user.claim.command.claim.tax | 允许 查看/支付 税务 |
| griefdefender.user.claim.command.contract | 允许在一个方向上 缩减 领地 |
| griefdefender.user.claim.command.cuboid | 允许切换到 3D 领地模式 |
| griefdefender.user.claim.command.expand | 允许在一个方向上 扩大 领地 |
| griefdefender.user.claim.command.farewell | 允许设置 领地 告别信息 |
| griefdefender.user.claim.command.give.blocks | 允许玩家给予别的玩家 领地方块 |
| griefdefender.user.claim.command.give.pet | 允许玩家给予别的玩家已驯服宠物 |
| griefdefender.user.claim.command.greeting | 允许设置 领地 问候信息 |
| griefdefender.user.claim.command.info.others | 允许获取有关 其他领地 的信息 |
| griefdefender.user.claim.command.info.base | 允许获取有关 领地 的信息 |
| griefdefender.user.claim.command.info.teleport.others | 允许用户在 其他领地 中使用 claiminfo中的传送功能 |
| griefdefender.user.claim.command.info.teleport.base | 允许用户在 领地 中使用 claiminfo |
| griefdefender.user.claim.command.inherit | 允许从 母领地 开关继承 |
| griefdefender.user.claim.command.list.base | 允许列出 属于自己 的领地 |
| griefdefender.user.claim.command.list.others | 允许列出 其他玩家 的领地 |
| griefdefender.user.claim.command.list-flags | 允许列出 领地标签 |
| griefdefender.user.claim.command.name | 允许设置 领地名称 |
| griefdefender.user.claim.command.sell | 允许 出售 领地 (需要经济插件) |
| griefdefender.user.claim.command.sell-blocks | 允许 出售 领地方块 (需要经济插件) |
| griefdefender.user.claim.command.set-spawn | 允许 设置 领地出生点 |
| griefdefender.user.claim.command.spawn | 允许 使用 领地出生点 |
| griefdefender.user.claim.command.subdivide-mode | 允许使用 子领地 圈地模式 |
| griefdefender.user.claim.command.town-mode | 允许使用 城镇 圈地模式 |
| griefdefender.user.claim.command.transfer  | 允许 转让 个人的领地 |
| griefdefender.user.claim.command.trapped | 如果玩家被卡住无法建造，则将其传送到安全位置 |
| griefdefender.user.claim.command.unban-item | 允许取消 领地 中的禁用物品 |
| griefdefender.user.claim.command.unlock-drops | 允许玩家拾取所有死亡掉落的物品 |
| griefdefender.user.claim.command.worldedit-claim | 允许使用 worldedit 的选中区域创建领地 |
| griefdefender.user.claim.create.base  | 允许创建一个 基础 领地 |
| griefdefender.user.claim.create.basic | 允许创建/更改大小于 基础 领地 |
| griefdefender.user.claim.create.subdivision | 允许创建/更改大小于 子领地 |
| griefdefender.user.claim.create.town | 允许创建/更改大小于 城镇 领地 |
| griefdefender.user.claim.create.cuboid.basic | 允许创建/更改大小于 3D 基础 领地 |
| griefdefender.user.claim.create.cuboid.subdivision | 允许创建/更改大小于 3D 子领地 |
| griefdefender.user.claim.create.cuboid.town | 允许创建/更改大小于 3D 城镇 领地 |
| griefdefender.user.claim.resize | 允许重新定义领地的大小 |
| griefdefender.user.claim.show-tutorial | 允许玩家于领地创建或更改大小时显示向导 |
| griefdefender.user.claim.list.other | 允许列出 其他玩家 的领地 |
| griefdefender.user.claim.visualize.base | 允许玩家可视化他们的领地 |
| griefdefender.user.claim.visualize.nearby | 允许玩家可视化周围的领地 |
| griefdefender.user.command.info.base | 允许玩家获取自己的个人信息 |
| griefdefender.user.command.info.others | 允许玩家获取别人的个人信息 |
| griefdefender.user.command.version | 允许获取有关 GD，服务器和 LP 等版本信息 |
| griefdefender.user.town.command.bank |  |
| griefdefender.user.town.command.info.base | 允许获取 城镇 信息 |
| griefdefender.user.town.command.info.others | 允许获取 别人城镇 的信息 |
| griefdefender.user.town.command.name | 允许设置 城镇 名称 |
| griefdefender.user.town.command.tag | 允许设置 城镇 的聊天标签 |
| griefdefender.user.town.command.tax |  |

## 标签相关
| 权限节点 | 描述 |
| --------- | ----------- |
| griefdefender.admin.claim.command.flag.arg | 允许使用 claimflag 相关指令的时候附加参数 |
| griefdefender.user.claim.command.flag.base | 允许使用 claimflag 相关指令 |
| griefdefender.user.claim.command.flag.gui | 允许使用 claimflag 命令的GUI |
| griefdefender.user.claim.command.flag.debug | 允许切换 领地标签调试 模式 |
| griefdefender.user.claim.command.flag.player | 允许指定 claimflag 所影响的玩家 |
| griefdefender.user.claim.command.flag.group | 允许指定 claimflag 所影响的玩家组 |
| griefdefender.user.claim.command.flag.reset | 允许使用 claimreset 命令 |
| griefdefender.user.claim.flag | 用以检查玩家是否有相关 标签 的权限<br />格式 `griefdefender.user.claim.flag.<标签名称>`。<br />注意：在访问 高级标签 GUI部分以及使用带有参数的 flag 命令时，会检查此权限。<br/>注意：不要将 标签名称 与 自定义标签名称 混淆。这里指的是检查 GD 的 核心标签。 在[这里](https://github.com/bloodmc/GriefDefender/wiki/Flags#available-flags)获取更多 |

## 预制标签
| 权限节点 | 描述 |
| --------- | ----------- |
| griefdefender.admin.custom.flag | 用于检查用户是否有权限访问 管理员自定义标签 的基础权限 <br />权限格式   `griefdefender.admin.custom.flag.<预制标签组>.<预制标签名称>`。 <br />注意：在默认情况下，这个权限管理了对 设定UI 中 管理员 选项卡的使用。 |
| griefdefender.user.custom.flag | 用于检查用户是否有权限访问 用户自定义标签 的基础权限 <br />权限格式  `griefdefender.user.custom.flag.<预制标签组>.<预制标签名称>`。<br />注意：在默认情况下，这个权限管理了对 设定UI 中 用户 选项卡的使用。 |

_*查看 [预制标签 GUI](https://github.com/bloodmc/GriefDefender/wiki/Flag-Definitions-GUI) 来获取更多关于预制管理员或用户标签设定的信息。_

## 选项
| 权限节点 | 描述 |
| --------- | ----------- |
| griefdefender.user.claim.command.option.base | 允许使用 claimoption 命令 |
| griefdefender.user.claim.command.option.group | 允许在领地里对 玩家组 修改选项 |
| griefdefender.user.claim.command.option.player | 允许在领地里对 玩家 修改选项 |
| griefdefender.user.claim.option | 允许在领地里使用选项设置 |
| griefdefender.user.option.perk.owner-fly.basic | 允许在自己领地里飞行 |
| griefdefender.user.option.perk.owner-fly.town | 允许在所有的城镇里飞行 |

## 信任相关
| 权限节点 | 描述 |
| --------- | ----------- |
| griefdefender.user.claim.command.trust.group | 允许给予 玩家组 领地权限 |
| griefdefender.user.claim.command.trust.player | 允许给予 玩家 领地权限 |
| griefdefender.user.claim.command.trust.list | 允许列出受信任的名单 |
| griefdefender.user.claim.command.trustall.group | 允许一次性对所有领地授予 玩家组 权限 |
| griefdefender.user.claim.command.trustall.player | 允许一次性对所有领地授予 玩家 权限 |
| griefdefender.user.claim.command.untrust.group | 允许撤销 玩家组 的领地权限 |
| griefdefender.user.claim.command.untrust.player | 允许撤销 玩家 的领地取消 |
| griefdefender.user.claim.command.untrustall.group | 允许在所有领地中一次性撤销 玩家组 的权限 |
| griefdefender.user.claim.command.untrustall.player | 允许在所有领地中一次性撤销 玩家 的权限 |
| griefdefender.user.claim.trust.accessor | 允许添加 访客 权限 |
| griefdefender.user.claim.trust.container | 允许添加 容器存取 权限 |
| griefdefender.user.claim.trust.builder | 允许添加 领地建筑师 权限 |
| griefdefender.user.claim.trust.manager | 允许添加 领地管理者 权限 |
| griefdefender.user.claim.trust.remove | 允许撤销权限 |

# 管理员权限

| 权限节点 | 描述 |
| --------- | ----------- |
| griefdefender.admin.advanced-flags | 允许使用 高级标签GUI |
| griefdefender.admin.bypass.ban | 允许绕过物品封禁 |
| griefdefender.admin.bypass.border-check | 允许绕过领地超界检测 |
| griefdefender.admin.bypass.option | 允许绕过选项设置 |
| griefdefender.admin.bypass.override.resize | 允许绕过领地调整大小限制 |
| griefdefender.admin.bypass.override.limit | 允许绕过领地所有量限制 |
| griefdefender.admin.claim.command.adjust-claim-blocks | 允许编辑奖励领地方块数量 |
| griefdefender.admin.claim.command.admin-mode | 允许使用 管理员 圈地模式 |
| griefdefender.admin.claim.command.ban | 允许封禁 物品 的所有用途 |
| griefdefender.admin.claim.command.clear | 允许清除一个或多个领地的实体 |
| griefdefender.admin.claim.command.schematic | 允许管理领地图纸 |
| griefdefender.admin.claim.command.debug | 允许玩家使用 GDdebug |
| griefdefender.admin.claim.command.delete.base | 允许使用 deleteclaim 命令 |
| griefdefender.admin.claim.command.delete.basic | 允许删除 基础 领地 |
| griefdefender.admin.claim.command.delete.admin | 允许删除 管理员 领地 |
| griefdefender.admin.claim.command.delete-claims | 允许删除另一名玩家所有的领地 |
| griefdefender.admin.claim.command.ignore.base | 允许使用 ignore claims 命令用以无视领地保护 |
| griefdefender.admin.claim.command.ignore.basic | 允许无视 基础 领地的保护 |
| griefdefender.admin.claim.command.ignore.admin | 允许无视 管理员 领地标签 |
| griefdefender.admin.claim.command.ignore.town | 允许无视 城镇 领地标签 |
| griefdefender.admin.claim.command.ignore.wilderness | 允许无视 荒野 领地标签 |
| griefdefender.admin.claim.command.permission-group | 允许对权限组使用领地指令 |
| griefdefender.admin.claim.command.permission-player | 允许对玩家权限使用领地指令 |
| griefdefender.admin.claim.command.reserve-name | 允许使用服务器保留领地名称 |
| griefdefender.admin.claim.cuboid | 允许创建/重建大小于 3D 模式的 管理员 领地 |
| griefdefender.admin.claim.list.admin | 允许列出管理员领地 |
| griefdefender.admin.claim.option.global | 允许管理全局选项 |
| griefdefender.admin.claim.resize | 允许重建领地尺寸 |
| griefdefender.admin.claim.resize.admin | 允许重建管理员领地的尺寸 |
| griefdefender.admin.claim.resize.admin.subdivision | 允许重建管理员子领地的尺寸 |
| griefdefender.admin.claim.resize.basic | 允许重建 基础 领地的尺寸 |
| griefdefender.admin.claim.resize.basic.subdivision | 允许重建 基础子领地 的大小 |
| griefdefender.admin.claim.resize.town | 允许重建 城镇 领地的大小 |
| griefdefender.admin.claim.set-admin-flags | 允许在 管理员 领地中编辑管理员标签 |
| griefdefender.admin.claim.use-reserved-names | 允许使用服务器保留名称 |
| griefdefender.admin.claim.wilderness | 允许编辑 荒野 领地 |
| griefdefender.admin.command.delete-admin-claims | 允许删除所有 管理员 领地 |
| griefdefender.admin.command.reload | 允许重新加载 GP |
| griefdefender.admin.command.restore-claim.base | 允许将领地恢复到初始状态 |
| griefdefender.admin.command.restore-nature.base | 允许切换圈地工具为恢复模式 |
| griefdefender.admin.command.restore-nature.aggressive |  |
| griefdefender.admin.command.restore-nature.fill |  |
| griefdefender.admin.command.set-accrued-claim-blocks | 允许编辑 累积领地方块数目 |
| griefdefender.admin.custom.flag | 允许在 GUI 中使用高级标签 |
| griefdefender.admin.flag-defaults | 允许编辑 默认标签 |
| griefdefender.admin.flag-overrides | 允许编辑 覆写标签 |

## 选项
| 权限节点 | 描述 |
| --------- | ----------- |
| griefdefender.admin.claim.command.option.group.base | 允许设置领地中权限组的选项 |
| griefdefender.admin.claim.command.option.player.base | 允许设置领地玩家的选项 |

# 杂项
| 权限节点 | 描述 |
| --------- | ----------- |
| griefdefender.user.command.help | 允许您查看帮助菜单 |
| griefdefender.user.chat.capture | 在命令 GUI 中查看玩家聊天记录 |
