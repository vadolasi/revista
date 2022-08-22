import { defineConfig } from "vite"
import preact from "@preact/preset-vite"
import Unocss from "unocss/vite"
import dynamicImport from "vite-plugin-dynamic-import"

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
    dynamicImport()
  ],
  server: {
    host: true
  }
})
