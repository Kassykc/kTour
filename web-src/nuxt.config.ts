export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],

  plugins: [
    "@/plugins/i18n.ts",
    "@/plugins/disableConsoleWarnings.ts",
    "@/plugins/historyPlugin.ts",
  ],

  // SSR 모드
  target: "server",

  ssr: true,

  typescript: {
    strict: true,
  },

  vite: {
    server: {
      hmr: false, // HMR 비활성화 (개발 모드에서 HMR을 비활성화)
      proxy: {
        "/api": {
          target: process.env.VITE_TARGET,
          changeOrigin: true,
          secure: false,
          ws: true,
          rewrite: (path) => {
            return path.replace(/^\/api\/v1/, ""); // 이 부분에서 /api/v1 을 제거
          },
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/global.scss";`,
        },
      },
    },
  },

  nitro: {
    // Static 설정 제거
    routeRules: {
      "/_file/000/**": {
        proxy: "https://gateway.hicompint.com:60000/medical/v1/_file/000/**",
      },
      "/api/v1/**": {
        proxy: "https://gateway.hicompint.com:60000/medical/v1/**",
      },
    },
  },

  app: {
    buildAssetsDir: "/app",
    head: {
      link: [
        {
          rel: "icon",
          type: "image/jpg",
          href: "/favicon.jpg",
        },
      ],
    },
  },

  env: {
    XENDIT_PUBLIC_KEY: process.env.XENDIT_PUBLIC_KEY,
  },

  hooks: {
    "vue:init"(vueApp) {
      vueApp.config.warnHandler = (msg, vm, trace) => {
        if (!msg.includes("Certain warning to ignore")) {
          console.warn(msg, trace);
        }
      };
    },
  },

  compatibilityDate: "2024-12-09",
});
console.log("VITE_TARGET:", process.env.VITE_TARGET);