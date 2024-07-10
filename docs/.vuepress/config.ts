import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: "/",
  dest: "./dist",
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
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
    "/br/": {
      lang: "pt-BR",
      title: "GriefDefender",
      description: "Documentação do plugin GriefDefender",
    },
  },

  plugins: [[]],
  theme,
});
