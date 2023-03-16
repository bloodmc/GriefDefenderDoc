import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { searchProPlugin } from "vuepress-plugin-search-pro";


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
    searchProPlugin({
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: {
            "/": "Category: $content",
            "/zh/": "分类：$content",
          },
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: {
            "/": "Tag: $content",
            "/zh/": "标签：$content",
          },
        },
      ],
    }),
  ]],
  theme,
});
