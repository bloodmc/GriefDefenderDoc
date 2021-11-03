module.exports = {
	"/zh/resources/": require("./resources/sidebar"),
	"/zh/hooks/": require("./hooks/sidebar"),
	"/zh/": [
        "/",
        {
          title: "开始",
          icon: "config",
          prefix: "/zh/guide/",
		  collapsable: false,
          children: ["", "install", "commands", "permissions"],
        },
		{
		  title: "基础",
		  icon: "type",
		  prefix: "/zh/guide/basic/",
		  children: ["claim-management", "claim-types", "custom-alias-creation",
		  "flag-definitions-gui", "options", "pvp", "tags", "trust-system", "claim-rent-system"],
		},
		{
		  title: "进阶",
		  icon: "advance",
		  prefix: "/zh/guide/advanced/",
		  children: ["contexts", "debugging", "flags", "global-config"],
		},
		{
		  title: "迁移",
		  icon: "alias",
		  collapsable: false,
		  prefix: "/zh/guide/migration/",
		  children: ["griefprevention", "worldguard"],
		},
		{
		  title: "联动",
		  icon: "plugin",
		  prefix: "/zh/hooks/",
		  children: ["gdhooks", "dynmap", "placeholder", "wecui"],
		},
    ],
};
