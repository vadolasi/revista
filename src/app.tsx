import { TransformWrapper, TransformComponent } from "@pronestor/react-zoom-pan-pinch"
import { html } from "htm/preact"

export function App() {
  return html`
    <${TransformWrapper} minScale=${.5} centerOnInit=${true}>
      <${TransformComponent} wrapperClass="w-screen h-screen">
        <div class="p-30">
          <div class="w-200 h-300 bg-blue">
            <p>Lorem ipsum at dolor amet</p>
          </div>
        </div>
      </>
    </>
  `
}
