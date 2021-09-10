import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { nextSearchPlugin } from "vuepress-plugin-next-search";

export default defineUserConfig({
  base: "/",
  dest: "./dist",

  locales: {
    "/": {
      lang: "en-US",
      title: "GriefDefender",
      description: "Documentation for plugin GriefDefender",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "GriefDefender",
      description: "为 GriefDefender 准备的文档",
    },
  },

  plugins: [[ nextSearchPlugin({}), ]],

  theme,
});
