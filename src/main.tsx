import { render } from "preact"
import { Routes } from "./routes"

import "uno.css"

render(<Routes />, document.getElementById("app") as HTMLElement)
