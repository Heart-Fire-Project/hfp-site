import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Heart Fire Project",
      description: "A docs for Heart Fire Project",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "心火计划",
      description: "心火计划的中文文档",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
