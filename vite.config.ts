import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// plugins
import pugPlugin from "vite-plugin-pug"
import Pages from "vite-plugin-pages"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://www.npmjs.com/package/vite-plugin-pug
    pugPlugin({
      // pug-plugin options
      pretty: true
    }, {
      // pug-plugin locals
    }),
    Pages({
      // options
      dirs: "src/pages",
      exclude: ["**/components/*.vue"]
    })
  ]
})
