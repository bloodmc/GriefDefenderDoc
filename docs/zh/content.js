module.exports = {
    "/zh/": {
      nav: [
        { text: "项目主页", link: "/zh/home/", icon: "home" },
        {
          text: "如何使用",
          icon: "creative",
          link: "/zh/guide/",
        },
        {
          text: "主题文档",
          icon: "note",
          link: "https://vuepress-theme-hope.github.io/zh/",
        },
      ],
      sidebar: {
        "/zh/": [
          "",
          "home",
          "slides",
          "layout",
          {
            title: "如何使用",
            icon: "creative",
            prefix: "guide/",
            children: ["", "page", "markdown", "disable", "encrypt"],
          },
        ],
      },
    },
};