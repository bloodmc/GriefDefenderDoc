import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
	"/zh/resources/": require("./resources/_sidebar"),
	"/zh/hooks/": require("./hooks/_sidebar"),
	"/zh/": [
        "/zh/",
        {
          text: "开始",
          icon: "settings",
          prefix: "/zh/guide/",
		  collapsable: false,
          children: ["", "install", "permissions", "config"],
        },
		{
		  text: "基础",
		  icon: "search",
		  prefix: "/zh/guide/basic/",
		  collapsable: true,
		  children: ["claim-types", "trust-system", "claim-management", "options", "pvp", "tags", "claim-rent-system"],
		},
		{
		  text: "进阶",
		  icon: "grid",
		  prefix: "/zh/guide/advanced/",
		  children: ["flags", "flag-definitions-gui", "options", "contexts"],
		},
		{
		  text: "杂项",
		  icon: "grid",
		  prefix: "/zh/guide/misc/",
		  children: ["debuging"],
		},
		{
		  text: "联动",
		  icon: "plugin",
		  prefix: "/zh/hooks/",
		  children: ["gdhooks", "dynmap", "placeholder", "wecui"],
		},
    ],
});