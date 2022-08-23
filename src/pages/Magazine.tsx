import { TransformWrapper, TransformComponent } from "@pronestor/react-zoom-pan-pinch"
import { html } from "htm/preact"
import { FunctionComponent, JSX } from "preact"
import { useState } from "preact/hooks"
import { Link, useLocation, useRoute } from "wouter-preact"
import { Bottom } from "../components/Bottom"
import axios from "axios"

const pages: { [key: number]: (setModelContent: (content: JSX.Element) => void, setPage: (page: number) => void) => JSX.Element } = {
  1: () => html``,
  2: (_, setPage) => {
    return html`
      <nav style=${{ marginTop: "300px", width: "520px" }}>
        <ul class="list-none">
          <li>
            <div class="flex text-white text-3xl no-underline" onClick=${() => setPage(3)}>
              <span class="whitespace-nowrap">Carta ao leitor</span>
              <div class="border-0 border-b-2 border-dotted w-full mb-2 mx-3"></div>
              <span>3</span>
            </div>
          </li>
          <li>
            <div class="flex text-white text-3xl no-underline mt-5" onClick=${() => setPage(4)}>
              <span class="whitespace-nowrap">Quem somos nós?</span>
              <div class="border-0 border-b-2 border-dotted w-full mb-2 mx-3"></div>
              <span>4</span>
            </div>
          </li>
          <li>
            <div class="flex text-white text-3xl no-underline mt-5" onClick=${() => setPage(5)}>
              <span class="whitespace-nowrap">A capoeira</span>
              <div class="border-0 border-b-2 border-dotted w-full mb-2 mx-3"></div>
              <span>5</span>
            </div>
          </li>
          <li>
            <div class="flex text-white text-3xl no-underline mt-5" onClick=${() => setPage(8)}>
              <span class="whitespace-nowrap">Judô</span>
              <div class="border-0 border-b-2 border-dotted w-full mb-2 mx-3"></div>
              <span>8</span>
            </div>
          </li>
          <li>
            <div class="flex text-white text-3xl no-underline mt-5" onClick=${() => setPage(10)}>
              <span class="whitespace-nowrap">Kung fu</span>
              <div class="border-0 border-b-2 border-dotted w-full mb-2 mx-3"></div>
              <span>10</span>
            </div>
          </li>
          <li>
            <div class="flex text-white text-3xl no-underline mt-5" onClick=${() => setPage(12)}>
              <span class="whitespace-nowrap">Jackie Chan</span>
              <div class="border-0 border-b-2 border-dotted w-full mb-2 mx-3"></div>
              <span>12</span>
            </div>
          </li>
          <li>
            <div class="flex text-white text-3xl no-underline mt-5" onClick=${() => setPage(13)}>
              <span class="whitespace-nowrap">Bruce Lee</span>
              <div class="border-0 border-b-2 border-dotted w-full mb-2 mx-3"></div>
              <span>13</span>
            </div>
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
        class="bg-transparent rounded-0 border-0"
        style=${{ width: "92px", height: "70px", marginLeft: "538px", marginTop: "875px" }}
        onClick=${() => setModelContent(modalContent())}>
      </button>
    `
  },
  6: () => html``,
  7: () => html`
    <button
      class="border-0 bg-transparent"
      style=${{ width: "160px", height: "170px", marginLeft: "338px", marginTop: "710px" }}
      onClick=${() => {
        window.open("https://puzzlefactory.pl/pt/quebra-cabeça/peça/paisagens/467868-capoeira#7x4")
      }}
    ></button>
  `,
  8: () => html``,
  9: () => html``,
  10: () => html``,
  11: () => html``,
  12: () => html``,
  13: () => html``,
  14: () => html``,
  15: () => {
    const api = axios.create({ baseURL: "https://imdb-api.com/API/SearchMovie/k_0oi2umec/" })

    function modalContent() {
      return html`
        <label>Nome do filme</label>
        <input type="text" />

        <button>Pesquisar</button>
      `
    }

    return html`
      <button style=${{}}></button>
    `
  },
  16: () => html``,
  17: () => html``,
  18: () => html``,
  19: () => html``,
  20: () => html``,
  21: () => html``,
  22: () => html``,
  23: () => html`
    <button
      class="border-0 bg-transparent"
      style=${{ width: "160px", height: "170px", marginLeft: "540px", marginTop: "610px" }}
      onClick=${() => {
        window.open("https://criadordecruzadinhas.com.br/wordsearch/6302d6da796f0b005ca55482")
      }}
    ></button>
  `,
  24: () => html``
}

export const Maganize: FunctionComponent = () => {
  const pagesNumber = 24
  const [modelContent, setModelContent] = useState<JSX.Element>()
  const [modelIsOpen, setModelIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const currentImage = new URL(`../assets/magazine/${currentPage}.svg`, import.meta.url).href

  function setModalContent(content: JSX.Element) {
    setModelContent(content)
    setModelIsOpen(true)
  }

  return html`
    <div class="!w-screen !h-screen flex flex-col bg-slate-800">
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
            ${pages[currentPage](setModalContent, setCurrentPage)}
          </div>
        </>
      </>
      <${Bottom}
        pagesNumber=${pagesNumber - 1}
        currentPage=${currentPage - 1}
        onPreviousPage=${() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
          }
        }}
        onNextPage=${() => {
          if (currentPage < pagesNumber) {
            setCurrentPage(currentPage + 1)
          }
        }}
      />
    </div>
  `
}
