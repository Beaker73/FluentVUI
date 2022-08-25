import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    react(),
    dts(),
  ],
  build: {
    lib: {
      entry: "src/fluent-vui.ts",
      name: "FluentVUI",
      fileName: "fluent-vui",
    },
    rollupOptions: {
      external: ["vue", "React", "ReactDOM"],
      output: {
        globals: {
          vue: "Vue",

        },
      },
    },
  },
})
