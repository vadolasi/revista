import { html } from "htm/preact"
import { FunctionComponent } from "preact"
import { Route } from "wouter-preact"
import { LoginPage } from "./pages/Login"
import { Maganize } from "./pages/Magazine"

export const Routes: FunctionComponent = () => {
  return html`
    <${Route} path="/" component=${Maganize} />
    <${Route} path="/login" component=${LoginPage} />
  `
}
