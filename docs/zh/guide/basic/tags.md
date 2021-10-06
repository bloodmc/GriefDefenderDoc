---
title: 标签组系统
category: Tag
tags: QOL
icon: list
---

 `标签` 是一个于 Minecraft 1.13 引入的新系统，其允许用户将 物品，方块，实体 的标志符捆绑为一个标签组以方便分类。GriefDefender 将与标签系统集成并将其导出为情境用以 标签(Flag)/选项(Option)。

例如，假设您希望允许与以下站立告示牌进行交互

* oak_sign, spruce_sign, birch_sign, acacia_sign, jungle_sign, dark_oak_sign, crimson_sign, warped_sign 

如果没有标签组，您只能手动将一个个告示牌的标志符添加到权限的情境当中，就像这样

```
/cf interact-block-secondary oak_sign true
/cf interact-block-secondary spruce_sign true
/cf interact-block-secondary birch_sign true
更多诸如此类的东西..
```

这十分麻烦且会让您的权限系统变得一团乱麻。

使用标签系统，您可以将提供的标签组用于所有名为 [#standing_signs](https://minecraft.gamepedia.com/Tag#blocks_standing_signs)

使用如上的标签组将简化您原来繁琐的命令为一条

```
/cf interact-block-secondary #standing_signs
```

这为用户提供了极大的灵活性，不仅可以保护一件东西，还可以保护许多东西。
注意: 标签组名称总以 `#`  开头

现在让我们假设您有一些特殊需求，并且提供的原版标签组所标记的内容并不能满足您的服务器的需求。该示例将指导您将 [数据包](https://minecraft.gamepedia.com/Data_Pack) 引入游戏。

[数据包](https://minecraft.gamepedia.com/Data_Pack) 允许服务器管理员通过定制成就、合成表、掉落物表、标签组 等行为增强 minecraft 体验。

要创建一个用以添加 自定义标签组 的数据包，请执行以下操作

1. 导航到要在其中使用数据包的世界文件夹。
例如 `./world/datapacks`  
2. 参考 [这里](https://minecraft.gamepedia.com/Data_Pack) 的介绍来创建一个数据包。 
注意：数据包文件夹结构应在 world 文件夹中设置如下
```
datapacks/
└── <datapack_name>/
    ├── data/
    │   ├── <namespace>/
    │   │   ├── tags/
    │   │   │   ├── blocks/
    │   │   │   ├── entity_types/
    │   │   │   ├── fluids/
    │   │   │   └── items/
    │   │   └── other...
    │   └── 
    └── pack.mcmeta

注意：在文件夹中的 minecraft 服务器 jar 的根目录中可以找到一个实际的示例 `data`  
```  
3. 在数据包中创建任意数量的 标签组，并在其中添加所需的任何其他自定义数据。
4. 启动服务器  
5. 通过运行命令验证您的数据包是否已加载 `/datapack list enabled`。查看 [数据包命令](https://minecraft.gamepedia.com/Data_Pack) 以获取更多信息
注意：如果未启用数据包，则步骤2中显示的数据包结构很可能是错误的。

如果您成功加载数据包，GD 将自动将所有 标签组 加载到其 情境注册表 中，供您与 标志(Flag) 一起使用。

要验证 标签组 是否与 GriefDefender 中的特定操作一起工作，请运行 `/gddebug` 命令并检查 情境 列，该列将显示所有已被调用的 标签组。
