import { navbar } from "vuepress-theme-hope";

export const en = navbar([
  { text: "Project Home", link: "/", icon: "home" },
  { text: "Wiki", link: "/wiki/", icon: "edit" },
  { text: "Hooks", link: "/hooks/", icon: "plugin"},
  { text: "API", link: "/api", icon: "api" },
  { text: "Mods", link: "/mods/", icon: "toolbox" },
  { text: "FAQ", link: "/faq/", icon: "faq" },
  {
	text: "Support",
    icon: "support",
    children: [
	  { text: "Patreon", link: "https://www.patreon.com/bloodmc" },
      { text: "Spigot", link: "https://www.spigotmc.org/resources/griefdefender.68900" }
	]
  },
]);
