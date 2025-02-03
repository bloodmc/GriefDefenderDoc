---
title: Sistema de Lotes
tag: Claim
category: claim
icon: manage
---

_Esta é uma página de trabalho em andamento._

# How to use :

## Plot Creation
The following command will create a 4x4 plot container with each plot being 10x10 in size and a spacing of 1 :

/gd plot create test 10 4 1 [x] [z]​

Each plot would automatically have a claim identifier of test_plot_XXX . So in this case test_plot_001, test_plot_002, etc..

The result is attached picture

![Plot image](/plot-1.webp)


## Plot Claim
A player will claim a plot by executing the following command

/gd plot claim [plot_id]​

So with the example above, if a player wanted to claim the next available plot in container test, they would execute

/gd plot claim test​

If the player wanted to claim a specific `test_plot_002`1 in container test, they would stand in plot and execute

/gd plot claim test_plot_002​

If no identifier is provided, GD will search for next available plot.


## Plot Visuals
Vacant plots will use prismarine (cracked) visuals indicating that noone has claimed the plot.
Occupied plots will use prismarine brick visuals indiciating that the plot has been claimed.

Note: These are just defaults and can be changed to any vanilla/modded block.

## Plot Warps
All plots will generate a default spawn point in center of plot allowing players to easily return to their land.

![Plot image](/plot-2.webp)

## Plot Permissions
Admins will have the ability to lockdown a plot container and only allow specific users to claim plots. This will be handled by permissions. By default, all users will have access to claim plots if they have the base user permission.

## Plot Merging
Players will have ability to merge their plots together if owned by them. See `/gd plot merge` command above.

![Plot image](/plot-3.webp)

![Plot image](/plot-4.webp)

## Plot Abandon
When plots are abandoned, they revert to their original snapshot and schematic at time of creation. Their status also reverts back to 'vacant'.


## Plot Limitations
* Cannot be resized
* Requires admin container which can only be created via '/gd plot create' command.
* Can only be deleted if parent container is removed.