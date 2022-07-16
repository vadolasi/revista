import { TransformWrapper, TransformComponent } from "@pronestor/react-zoom-pan-pinch"
import { html } from "htm/preact"

export function App() {
  return html`
    <div class="max-w-screen max-h-screen overflow-hidden">
      <${TransformWrapper} minScale=${.5} centerOnInit=${true}>
        <${TransformComponent} wrapperClass="w-screen h-screen bg-red">
          <div class="p-30">
            <div class="w-200 h-300 bg-blue">
              <p>Lorem ipsum at dolor amet</p>
            </div>
          </div>
        </>
      </>
    </div>
  `
}
