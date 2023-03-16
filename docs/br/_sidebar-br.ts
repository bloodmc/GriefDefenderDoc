import { sidebar } from "vuepress-theme-hope";

export const br = sidebar({
	"/br/faq/": require("./faq/_sidebar"),
    "/br/hooks/": require("./hooks/_sidebar"),
	"/br/mods/": require("./mods/_sidebar"),
	"/br/wiki/": [ 
        "/br/",
        {
		  text: "Começando",
		  icon: "start",
          prefix: "/br/wiki/",
		  collapsible: true,
          children: ["", "Configuration", "Permissions", "Commands"],
        },
		{
		  text: "Básico",
		  icon: "search",
		  prefix: "/br/wiki/basic/",
		  collapsible: true,
		  children: ["Claim-Management", "Claim-Types", "Custom-Alias-Creation", 
		  "GUI", "Bedrock", "Flag-Definitions-GUI", "Options", "PvP",
		  "Tags", "Tax-System", "Trust-System", "Rent-System"],
		},
		{
		  text: "Uso avançado",
		  icon: "grid",
		  prefix: "/br/wiki/advanced/",
		  collapsible: true,
		  children: ["Contexts", "Debugging", "Flags", "Global-Config", "Optimizations"],
		},
		{
		  text: "Migração",
		  icon: "import",
		  prefix: "/br/wiki/migration/",
		  collapsible: true,
		  children: ["GriefPrevention", "WorldGuard"],
		},
    ],
});