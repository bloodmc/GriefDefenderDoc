import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./_navbar";
import * as sidebar from "./_sidebar";

export default hopeTheme({
  hostname: "https://griefdefender.vercel.app",

  iconAssets: "//at.alicdn.com/t/c/font_3688305_tdmz24rfeye.css",

  logo: "/logo.png",

  repo: "ahdg6/GriefDefenderDoc",

  docsDir: "",

  pageInfo: ["Original", "Date", "Category", "Tag", "ReadingTime"],

  locales: {
    "/": {
      // navbar
      navbar: navbar.en,

      // sidebar
      sidebar: sidebar.en,

      footer: "Licensed under MIT",

      displayFooter: true,

    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: sidebar.zh,

      footer: "在 MIT 下授权分发",

      displayFooter: true,

    },
  },

  plugins: {
    blog: false,

    mdEnhance: {
      enableAll: false,
	  tabs: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
