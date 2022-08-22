import { TransformWrapper, TransformComponent } from "@pronestor/react-zoom-pan-pinch"
import { html } from "htm/preact"
import { FunctionComponent, JSX } from "preact"
import { useState } from "preact/hooks"
import { Link, useLocation, useRoute } from "wouter-preact"
import { Bottom } from "../components/Bottom"

const pages: { [key: number]: (setModelContent: (content: JSX.Element) => void) => JSX.Element } = {
  1: () => html``,
  2: () => {
    return html`
      <nav style=${{ marginTop: "300px", width: "520px" }}>
        <ul class="list-none">
          <li>
            <${Link} class="flex text-white text-3xl no-underline" href="/3">
              <span class="whitespace-nowrap">Carta ao leitor</span>
              <div class="border-0 border-b-2 border-dotted w-full mb-2 mx-3"></div>
              <span>3</span>
            </>
          </li>
          <li>
            <${Link} class="flex text-white text-3xl no-underline mt-5" href="/4">
              <span class="whitespace-nowrap">Quem somos nós?</span>
              <div class="border-0 border-b-2 border-dotted w-full mb-2 mx-3"></div>
              <span>4</span>
            </>
          </li>
          <li>
            <${Link} class="flex text-white text-3xl no-underline mt-5" href="/5">
              <span class="whitespace-nowrap">A capoeira</span>
              <div class="border-0 border-b-2 border-dotted w-full mb-2 mx-3"></div>
              <span>5</span>
            </>
          </li>
          <li>
            <${Link} class="flex text-white text-3xl no-underline mt-5" href="/8">
              <span class="whitespace-nowrap">Judô</span>
              <div class="border-0 border-b-2 border-dotted w-full mb-2 mx-3"></div>
              <span>8</span>
            </>
          </li>
          <li>
            <${Link} class="flex text-white text-3xl no-underline mt-5" href="/10">
              <span class="whitespace-nowrap">Kung fu</span>
              <div class="border-0 border-b-2 border-dotted w-full mb-2 mx-3"></div>
              <span>10</span>
            </>
          </li>
          <li>
            <${Link} class="flex text-white text-3xl no-underline mt-5" href="/11">
              <span class="whitespace-nowrap">Jackie Chan</span>
              <div class="border-0 border-b-2 border-dotted w-full mb-2 mx-3"></div>
              <span>12</span>
            </>
          </li>
          <li>
            <${Link} class="flex text-white text-3xl no-underline mt-5" href="/11">
              <span class="whitespace-nowrap">Bruce Lee</span>
              <div class="border-0 border-b-2 border-dotted w-full mb-2 mx-3"></div>
              <span>13</span>
            </>
          </li>
        </ul>
      </nav>
    `
  },
  3: () => html``,
  4: () => html`
    <div></div>
  `,
  5: (setModelContent: (content: JSX.Element) => void) => {
    function modalContent() {
      return html`
        <iframe
          width="630"
          height="355"
          src="https://www.youtube.com/embed/u8k31o0dhDw"
          title="Besouro: da capoeira nasce um herói"
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
  6: () => html``,
  7: () => html``,
  8: () => html``,
  9: () => html``,
  10: () => html``,
  11: () => html``,
  12: () => html``,
  13: () => html``,
  14: () => html``,
  15: () => html``,
  16: () => html``,
  17: () => html``
}

export const Maganize: FunctionComponent = () => {
  const [, params] = useRoute<{ page: string }>("/:page")
  const currentPage = params?.page ? parseInt(params.page) : 1
  const pagesNumber = 17
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
