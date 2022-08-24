import { html } from "htm/preact"
import { FunctionComponent } from "preact"
import { classes } from "../utils"

interface Props {
  pagesNumber: number
  currentPage: number
  onNextPage: () => void
  onPreviousPage: () => void
}

export const Bottom: FunctionComponent<Props> = ({ currentPage, pagesNumber, onNextPage, onPreviousPage }) => {
  const pagesProgress = currentPage * (100 / pagesNumber)

  return html`
    <div class="w-full backdrop-blur bg-black bg-opacity-25 h-20 flex flex-col fixed bottom-0">
      <div class="w-full bg-white">
        <div class="h-1 bg-cyan-400" style=${{ width: `${pagesProgress}%` }}></div>
      </div>
      <div class="flex items-center content-center h-full mx-auto mt-1">
        <div class="flex gap-6">
          <button class=${classes({ "text-transparent": currentPage === 0 }, "text-gray-200 bg-transparent border-0 text-4xl")} onClick=${() => onPreviousPage()}><i class="fa-solid fa-arrow-left"></i></button>
          <button class=${classes({ "text-transparent": currentPage === pagesNumber }, "text-gray-200 bg-transparent border-0 text-4xl")} onClick=${() => onNextPage()}><i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
  `
}
