import { TransformWrapper, TransformComponent } from "@pronestor/react-zoom-pan-pinch"
import { html } from "htm/preact"
import { FunctionComponent, JSX } from "preact"
import { useEffect, useState } from "preact/hooks"
import { useLocation, useRoute } from "wouter-preact"
import { Bottom } from "../components/Bottom"
import { classes } from "../utils"

const pages: { [key: number]: (setModelContent: (content: JSX.Element) => void) => JSX.Element } = {
  1: () => <></>,
  2: () => <></>,
  3: () => <></>,
  4: () => <></>,
  5: (setModelContent: (content: JSX.Element) => void) => {
    function modalContent() {
      return html`
        <iframe
          width="630"
          height="355"
          src="https://www.youtube.com/embed/u8k31o0dhDw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      `
    }

    return html`
      <button
        class="bg-transparent rounded-0"
        style=${{ width: "336px", height: "270px", marginLeft: "416px", marginTop: "237px" }}
        onClick=${() => setModelContent(modalContent())}>
      </button>
    `
  },
  6: () => <></>,
  7: () => <></>,
  8: () => <></>,
  9: () => <></>,
  10: () => <></>,
  11: () => <></>,
  12: () => <></>,
  13: () => <></>,
  14: () => <></>,
  15: () => <></>,
  16: () => <></>,
  17: () => <></>,
  18: () => <></>
}

export const Maganize: FunctionComponent = () => {
  const [, params] = useRoute<{ page: string }>("/:page")
  const currentPage = params?.page ? parseInt(params.page) : 1
  const pagesNumber = 18
  const [, setLocation] = useLocation()
  const [modelContent, setModelContent] = useState<JSX.Element>()
  const [modelIsOpen, setModelIsOpen] = useState(false)

  const currentImage = new URL(`../assets/magazine/${currentPage}.svg`, import.meta.url).href

  function setModalContent(content: JSX.Element) {
    setModelContent(content)
    setModelIsOpen(true)
  }

  return html`
    <div class="!w-screen !h-screen flex flex-col">
      ${modelIsOpen && html`
        <div class="absolute w-100 h-100 w-screen h-screen z-50 flex justify-center items-center">
          <div class="w-screen h-screen bg-black opacity-75 absolute z-40" onClick=${() => setModelIsOpen(false)}></div>
          <div class="z-50">
            ${modelContent}
          </div>
        </div>
      `}
      <${TransformWrapper} minScale=${.25} initialScale=${.5} centerOnInit=${true}>
        <${TransformComponent} wrapperClass="!w-full">
          <img src=${currentImage} />
          <div class="absolute">
            ${pages[currentPage](setModalContent)}
          </div>
        </>
      </>
      <${Bottom}
        pagesNumber=${pagesNumber}
        currentPage=${currentPage}
        onPreviousPage=${() => {
          if (currentPage > 1) {
            setLocation(`/${currentPage - 1}`)
          }
        }}
        onNextPage=${() => {
          if (currentPage < pagesNumber) {
            setLocation(`/${currentPage + 1}`)
          }
        }}
      />
    </div>
  `
}
