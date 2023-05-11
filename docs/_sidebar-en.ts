import { sidebar } from "vuepress-theme-hope";

export const en = sidebar({
	"/faq/": require("./faq/_sidebar"),
    "/hooks/": require("./hooks/_sidebar"),
	"/mods/": require("./mods/_sidebar"),
	"/wiki/": [ 
        "/",
        {
          prefix: "/wiki/",
		  collapsible: false,
          children: ["", "Configuration", "Permissions", "Commands"],
        },
{
		  text: "Basics",
		  icon: "search",
		  prefix: "/wiki/basic/",
		  collapsible: true,
		  children: ["Claim-Management", "Claim-Types", "Custom-Alias-Creation", 
		  "GUI", "Bedrock", "Flag-Definitions-GUI", "Options", "PvP",
		  "Tags", "Tax-System", "Trust-System", "Rent-System", "Storage"],
		},
		{
		  text: "Advanced Usage",
		  icon: "grid",
		  prefix: "/wiki/advanced/",
		  collapsible: true,
		  children: ["Contexts", "Debugging", "Flags", "Global-Config", "Optimizations"],
		},
		{
		  text: "Migration",
		  icon: "import",
		  prefix: "/wiki/migration/",
		  collapsible: true,
		  children: ["GriefPrevention", "WorldGuard"],
		},
    ],
});