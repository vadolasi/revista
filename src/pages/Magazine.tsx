import { TransformWrapper, TransformComponent } from "@pronestor/react-zoom-pan-pinch"
import { html } from "htm/preact"
import { FunctionComponent } from "preact"
import { Bottom } from "../components/Bottom"
import Capa from "./Capa.svg"

export const Maganize: FunctionComponent = () => {
  return html`
    <div class="w-screen h-screen flex flex-col">
      <${TransformWrapper} minScale=${.25} initialScale=${.5} centerOnInit=${true}>
        <${TransformComponent} wrapperClass="w-full">
          <img src=${Capa} />
        </>
      </>
      <${Bottom} pagesNumber=${7} currentPage=${1} />
    </div>
  `
}
