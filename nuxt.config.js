export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      title: "FTS Assesment v1",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no",
        },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/mobile.css",
    "@/assets/categories.less",
    "@/assets/buttons.less",
    "@/assets/questions.less",
    "@/assets/results.less",
    "@/assets/answers.less",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          test: /\.less$/,
          use: ["style-loader", "css-loader", "less-loader"],
        });
      }
    },
  },
};
