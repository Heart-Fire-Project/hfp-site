import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Works",
    icon: "lightbulb",
    prefix: "/zh/works/",
    children: [
      {
        text: "Categorize",
        icon: "lightbulb",
        prefix: "",
        children: ["translate","original","not-minecraft","more"],
      }
    ],
  },
  {
    text: "About",
    icon: "book",
    link: "about/README.html",
  },
]);
