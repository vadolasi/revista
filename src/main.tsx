import { render } from "preact"
import { Routes } from "./routes"
import { html } from "htm/preact"

import "uno.css"

render(html`<${Routes} />`, document.getElementById("app") as HTMLElement)
