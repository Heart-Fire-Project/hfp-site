import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "About Us",
      icon: "laptop-code",
      prefix: "about/",
      link: "about/",
      children: "structure",
    },
    {
      text: "Works",
      icon: "folder",
      prefix: "works/",
      children: "structure",
    },
  ],
});
