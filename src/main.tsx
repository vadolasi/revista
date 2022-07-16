import { render } from "preact"
import { App } from "./app"
import { html } from "htm/preact"

import "uno.css"

render(html`<${App} />`, document.getElementById("app") as HTMLElement)
