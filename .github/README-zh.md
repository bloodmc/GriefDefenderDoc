<!--suppress HtmlDeprecatedAttribute -->
<div align="center">
<img alt="GriefDefender" src="./docs/.vuepress/public/logo.png?raw=true" width="80" align=left hspace="5" vspace="5"/>
<br>
<h1>Document</h1>
<h3 align="center">
  <a href="../README.md">English</a>
  <span> · </span>
  <a href="./README-br.md">Português do Brasil</a>
</h3>

**此处托管着 GD 的文档。**

<!-- Shields -->
[Patreon]:https://img.shields.io/badge/-支持作者-F96854.svg?logo=patreon&style=for-the-badge&logoColor=white
[Document]:https://img.shields.io/badge/-网页文档-blue.svg?logo=Wikipedia&style=for-the-badge&logoColor=black
[GD]:https://img.shields.io/badge/-源码-blue.svg?logo=github&style=for-the-badge&logoColor=black

Icon here is clickable.
<br>[![Patreon]](https://www.patreon.com/bloodmc)
[![Document]](https://docs.griefdefender.com/zh)
[![GD]](https://github.com/bloodmc/griefdefender)

![Alt](https://repobeats.axiom.co/api/embed/c343fd07571f6727449099cd3e9374f715a11fcd.svg "Repobeats analytics image")
</div>

## 简介

GriefDefender 的文档使用 [VuePress](https://v2.vuepress.vuejs.org/) 和 [Theme Hope](https://vuepress-theme-hope.github.io/).

## 贡献
- 进行小规模更改
<br>每页底部会有跳转的链接来引导你到该仓库的文件，根据需求做出修改并提交 PR，Netlify 的机器人会自动生成预览。

- 搭建开发环境(适用于大面积更改)
1. 安装 [NodeJS](https://nodejs.org/)(>=16) 及 [pnpm](https://pnpm.io/installation)
2. 在本仓库根目录下运行命令 `pnpm install` 安装依赖。
3. 依赖安装成功后运行 `pnpm docs:dev` 并稍作等待
4. 待命令行出现 http://localhost:8080/ 字样访问该链接以查看文档。
5. 现在当你对文档做出更改时，网页端会进行实时同步！