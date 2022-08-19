import { render } from "preact"
import { Routes } from "./routes"

import "uno.css"
import { html } from "htm/preact"

render(html`<${Routes} />`, document.getElementById("app") as HTMLElement)
