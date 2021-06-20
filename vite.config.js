import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock';
import path from "path"


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "comp": path.resolve(__dirname, "src/components"),
      "api": path.resolve(__dirname, "src/api"),
      "views": path.resolve(__dirname, "src/views"),
      "styles": path.resolve(__dirname, "src/styles"),
      "plugins": path.resolve(__dirname, "src/plugins"),
      "layout": path.resolve(__dirname, "src/layout"),
      "utils": path.resolve(__dirname, "src/utils"),
    }
  },

  server: {
    proxy: {
      "/foo": "http://localhost:4567/foo",
      "/api": {
        target: "http://localhost/api",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    },
    cors: true, //开发开启cors跨域请求
    open: false,
  },
  // esbuild: {

  // },
  plugins: [
    vue(),
    viteMockServe({
      supportTs: false,
      // mockPath: "mock",
      // localEnabled: 
    })
  ]
})
