import { html } from "htm/preact"
import { FunctionComponent } from "preact"

interface Props {
  pagesNumber: number
  currentPage: number
}

export const Bottom: FunctionComponent<Props> = ({ currentPage, pagesNumber }) => {
  const pagesProgress = currentPage * (100 / pagesNumber)

  return html`
    <div class="w-full bg-blue h-15 flex flex-col">
      <div class="h-1 bg-yellow" style="width: ${pagesProgress}%"></div>
      <div class="flex items-center content-center justify-center">
        <div class="flex">
          <button>←</button>
          <button>→</button>
        </div>
      </div>
    </div>
  `
}
