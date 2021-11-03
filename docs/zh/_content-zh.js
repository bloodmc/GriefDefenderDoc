module.exports = {
    nav: [
      { text: "项目主页", link: "/zh/", icon: "home" },
      { text: "Wiki", link: "/zh/guide/", icon: "repo" },
      { text: "联动", link: "/zh/hooks/", icon: "plugin"},
      { text: "API", link: "/zh/API", icon: "api" },
      { text: "资源", link: "/zh/resources/", icon: "code" },
      {
	      text: "获取支持",
          ariaLabel: "购买支持",
	      items: [
	          { text: "Patreon", link: "https://www.patreon.com/bloodmc" },
              { text: "Spigot", link: "https://www.spigotmc.org/resources/griefdefender.68900/" }
	      ]
      },
    ], 
    sidebar: require("./_sidebar-zh.js"),
};