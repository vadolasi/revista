import { html } from "htm/preact"
import { FunctionComponent } from "preact"
import { Route, Redirect } from "wouter-preact"
import { LoginPage } from "./pages/Login"
import { Maganize } from "./pages/Magazine"

export const Routes: FunctionComponent = () => {
  return html`
    <${Route} path="/" component=${() => html`<${Redirect} to="/pages/1" />`} />
    <${Route} path="/pages/:page" component=${Maganize} />
    <${Route} path="/login" component=${LoginPage} />
  `
}
