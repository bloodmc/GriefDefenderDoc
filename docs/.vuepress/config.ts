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
    "/br/": {
      lang: "pt-BR",
      title: "GriefDefender",
      description: "Documentação do plugin GriefDefender",
    },
  },

  plugins: [[
    nextSearchPlugin({
      locales: {
        '/': {
          fullText: true,
          placeholder: 'search',
          frontmatter: {
            tag: 'tag',
            category: 'category',
          }
        },
        '/zh/': {
          fullText: true,
          placeholder: '搜索',
          frontmatter: {
            tag: '标签',
            category: '分类',
          }
        },
        '/br/': {
          fullText: true,
          placeholder: 'Pesquisar',
          frontmatter: {
            tag: 'tag',
            category: 'category',
          }
        }
      },
    }),
  ]],
  theme,
});
