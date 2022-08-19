import { html } from "htm/preact"
import { FunctionComponent } from "preact"

interface Props {
  pagesNumber: number
  currentPage: number
  onNextPage: () => void
  onPreviousPage: () => void
}

export const Bottom: FunctionComponent<Props> = ({ currentPage, pagesNumber, onNextPage, onPreviousPage }) => {
  const pagesProgress = currentPage * (100 / pagesNumber)

  return (
    <div class="w-full bg-blue h-15 flex flex-col">
      <div class="h-1 bg-yellow" style={{ width: `${pagesProgress}%` }}></div>
      <div class="flex items-center content-center justify-center">
        <div class="flex">
          <button class="bg-transparent text-gray-200 border-0 text-3xl" onClick={() => onPreviousPage()}><i class="fa-solid fa-arrow-left"></i></button>
          <button class="bg-transparent text-gray-200 border-0 text-3xl" onClick={() => onNextPage()}><i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
  )
}
