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
          }],
          "@babel/plugin-transform-react-jsx-source"
        ]
      }
    }),
    Unocss()
  ],
  server: {
    host: true
  }
})
