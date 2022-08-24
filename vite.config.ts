import { defineConfig } from "vite"
import preact from "@preact/preset-vite"
import Unocss from "unocss/vite"

export default defineConfig({
  plugins: [
    preact({
      babel: {
        plugins: [
          ["babel-plugin-htm", {
            "tag": "html",
            "import": "preact"
          }]
        ]
      }
    }),
    Unocss(),
   ],
  server: {
    host: true
  },
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat"
    }
  }
})
