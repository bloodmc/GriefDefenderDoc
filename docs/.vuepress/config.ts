import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { viteBundler } from '@vuepress/bundler-vite';
import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension'

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
      lang: "br",
      title: "GriefDefender",
      description: "Documentação do plugin GriefDefender",
    },
  },

  plugins: [removeHtmlExtensionPlugin()],
  theme,
});
