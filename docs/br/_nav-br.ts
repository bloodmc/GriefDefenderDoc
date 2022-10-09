import { navbar } from "vuepress-theme-hope";

export const en = navbar([
  { text: "Início", link: "/br/", icon: "home" },
  { text: "Wiki", link: "/br/wiki/", icon: "edit" },
  { text: "Hooks", link: "/br/hooks/", icon: "plugin"},
  { text: "API", link: "/br/api", icon: "api" },
  { text: "Mods", link: "/br/mods/", icon: "toolbox" },
  { text: "FAQ", link: "/br/faq/", icon: "faq" },
  {
	text: "Suporte",
    icon: "support",
    children: [
	  { text: "Patreon", link: "https://www.patreon.com/bloodmc" },
      { text: "Spigot", link: "https://www.spigotmc.org/resources/griefdefender.68900" }
	]
  },
]);
