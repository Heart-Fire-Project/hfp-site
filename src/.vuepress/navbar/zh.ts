import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "作品",
    icon: "lightbulb",
    prefix: "/zh/works/",
    children: [
      {
        text: "分类",
        icon: "lightbulb",
        prefix: "",
        children: ["translate","original","not-minecraft","more"],
      }
    ],
  },
  {
    text: "关于",
    icon: "book",
    link: "about/README.html",
  },
]);
