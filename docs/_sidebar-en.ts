import { sidebar } from "vuepress-theme-hope";

export const en = sidebar({
	"/faq/": require("./faq/_sidebar"),
    "/hooks/": require("./hooks/_sidebar"),
	"/mods/": require("./mods/_sidebar"),
	"/wiki/": [ 
        "/",
        {
          prefix: "/wiki/",
		  collapsable: false,
          children: ["", "Configuration", "Permissions", "Commands"],
        },
		{
		  text: "Basics",
		  icon: "search",
		  prefix: "/wiki/basic/",
		  collapsable: true,
		  children: ["Claim-Management", "Claim-Types", "Custom-Alias-Creation", 
		  "GUI", "Flag-Definitions-GUI", "Options", "PvP",
		  "Tags", "Tax-System", "Trust-System", "Rent-System"],
		},
		{
		  text: "Advanced Usage",
		  icon: "grid",
		  prefix: "/wiki/advanced/",
		  collapsable: true,
		  children: ["Contexts", "Debugging", "Flags", "Global-Config", "Optimizations"],
		},
		{
		  text: "Migration",
		  icon: "import",
		  prefix: "/wiki/migration/",
		  collapsable: true,
		  children: ["GriefPrevention", "WorldGuard"],
		},
    ],
});