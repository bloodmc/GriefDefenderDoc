import { sidebar } from "vuepress-theme-hope";

export const en = sidebar(
            {
	        "/wiki/": [ 
              "/",
            {
		  text: "",
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
		  "GUI", "Bedrock", "Flag-Definitions-GUI", "Options", "Storage", "PvP",
		  "Tags", "Tax-System", "Trust-System", "Rent-System"],
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