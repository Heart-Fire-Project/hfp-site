import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "关于我们",
      icon: "laptop-code",
      prefix: "about/",
      link: "about/",
      children: "structure",
    },
    {
      text: "作品",
      icon: "folder",
      prefix: "works/",
      children: "structure",
    },
  ],
});
