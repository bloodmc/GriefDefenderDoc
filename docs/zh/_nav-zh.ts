import { navbar } from "vuepress-theme-hope";

export const zh = navbar([
  { text: "主页", link: "/zh/", icon: "home" },
  { text: "文档", link: "/zh/guide/", icon: "edit" },
  { text: "插件联动", link: "https://github.com/bloodmc/GDHooks", icon: "plugin"},
  { text: "API", link: "/zh/api", icon: "api" },
  { text: "常见问题及解答", link: "/faq/", icon: "faq" },
  {
	text: "购买支持",
    icon: "support",
    children: [
	  { text: "Patreon", link: "https://www.patreon.com/bloodmc" },
      { text: "Spigot", link: "https://www.spigotmc.org/resources/griefdefender.68900/" }
	]
  },
]);
