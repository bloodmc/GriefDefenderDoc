module.exports = {
	"/resources/": require("./resources/sidebar"),
	"/hooks/": require("./hooks/sidebar"),
	"/": [
        "/",
        {
          title: "Start",
          icon: "config",
          prefix: "guide/",
		  collapsable: false,
          children: ["", "install", "commands", "permissions"],
        },
		{
		  title: "Basics",
		  icon: "type",
		  prefix: "guide/basic/",
		  children: ["claim-management", "claim-types", "custom-alias-creation",
		  "flag-definitions-gui", "options", "pvp", "tags", "trust-system", "claim-rent-system"],
		},
		{
		  title: "Advanced Usage",
		  icon: "advance",
		  prefix: "guide/advanced/",
		  children: ["contexts", "debugging", "flags", "global-config"],
		},
		{
		  title: "Migration",
		  icon: "alias",
		  collapsable: false,
		  prefix: "guide/migration/",
		  children: ["griefprevention", "worldguard"],
		},
		{
		  title: "Hook",
		  icon: "plugin",
		  prefix: "hooks/",
		  children: ["gdhooks", "dynmap", "placeholder", "wecui"],
		},
    ],
};