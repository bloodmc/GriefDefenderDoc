import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./_navbar";
import * as sidebar from "./_sidebar";

export default hopeTheme({
  hostname: "https://docs.griefdefender.com",

  iconAssets: "//at.alicdn.com/t/c/font_3688305_tdmz24rfeye.css",

  logo: "/logo.png",

  repo: "bloodmc/GriefDefenderDoc",

  docsDir: "docs",

  pageInfo: ["Original", "Date", "Category", "Tag", "ReadingTime"],

  locales: {
    "/": {
      navbar: navbar.en,
      sidebar: sidebar.en,
      footer: "Licensed under MIT",
      displayFooter: true,
    },

    "/zh/": {
      navbar: navbar.zh,
      sidebar: sidebar.zh,
      footer: "在 MIT 下授权分发",
      displayFooter: true,
    },

    "/br/": {
      navbar: navbar.br,
      sidebar: sidebar.br,
      footer: "Licenciado sob o MIT",
      displayFooter: true,
    },
  },

  plugins: {
    blog: false,
    slimsearch: true,
    mdEnhance: {
      tabs: true,
    },
    git: {
      createdTime: false,
      updatedTime: true,
      contributors: false,
    },
  },
});
