import { sidebar } from "vuepress-theme-hope";

export const en = sidebar({
	"/faq/": require("./faq/_sidebar"),
    "/hooks/": require("./hooks/_sidebar"),
	"/mods/": require("./mods/_sidebar"),
	"/wiki/": [ 
        "/",
        {
          prefix: "/br/wiki/",
		  collapsable: false,
          children: ["", "Configuration", "Permissions", "Commands"],
        },
		{
		  text: "Básico",
		  icon: "search",
		  prefix: "/br/wiki/basic/",
		  collapsable: true,
		  children: ["Claim-Management", "Claim-Types", "Custom-Alias-Creation", 
		  "GUI", "Flag-Definitions-GUI", "Options", "PvP",
		  "Tags", "Tax-System", "Trust-System", "Rent-System"],
		},
		{
		  text: "Uso avançado",
		  icon: "grid",
		  prefix: "/br/wiki/advanced/",
		  collapsable: true,
		  children: ["Contexts", "Debugging", "Flags", "Global-Config", "Optimizations"],
		},
		{
		  text: "Migração",
		  icon: "import",
		  prefix: "/br/wiki/migration/",
		  collapsable: true,
		  children: ["GriefPrevention", "WorldGuard"],
		},
    ],
});