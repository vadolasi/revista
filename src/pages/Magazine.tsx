import { TransformWrapper, TransformComponent } from "@pronestor/react-zoom-pan-pinch"
import { html } from "htm/preact"
import { FunctionComponent, JSX } from "preact"
import { useState } from "preact/hooks"
import { Bottom } from "../components/Bottom"
import axios from "axios"
import { useLocation, useRoute } from "wouter-preact"

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
              <span class="whitespace-nowrap">Capoeira</span>
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
            <div class="flex text-white text-3xl no-underline mt-5" onClick=${() => setPage(13)}>
              <span class="whitespace-nowrap">Jackie Chan</span>
              <div class="border-0 border-b-2 border-dotted w-full mb-2 mx-3"></div>
              <span>13</span>
            </div>
          </li>
          <li>
            <div class="flex text-white text-3xl no-underline mt-5" onClick=${() => setPage(14)}>
              <span class="whitespace-nowrap">Bruce Lee</span>
              <div class="border-0 border-b-2 border-dotted w-full mb-2 mx-3"></div>
              <span>14</span>
            </div>
          </li>
          <li>
            <div class="flex text-white text-3xl no-underline mt-5" onClick=${() => setPage(16)}>
              <span class="whitespace-nowrap">Filmes com lutas</span>
              <div class="border-0 border-b-2 border-dotted w-full mb-2 mx-3"></div>
              <span>16</span>
            </div>
          </li>
          <li>
            <div class="flex text-white text-3xl no-underline mt-5" onClick=${() => setPage(17)}>
              <span class="whitespace-nowrap">Muay Thai</span>
              <div class="border-0 border-b-2 border-dotted w-full mb-2 mx-3"></div>
              <span>17</span>
            </div>
          </li>
          <li>
            <div class="flex text-white text-3xl no-underline mt-5" onClick=${() => setPage(21)}>
              <span class="whitespace-nowrap">Boxe</span>
              <div class="border-0 border-b-2 border-dotted w-full mb-2 mx-3"></div>
              <span>21</span>
            </div>
          </li>
          <li>
            <div class="flex text-white text-3xl no-underline mt-5" onClick=${() => setPage(23)}>
              <span class="whitespace-nowrap">Esgrima</span>
              <div class="border-0 border-b-2 border-dotted w-full mb-2 mx-3"></div>
              <span>23</span>
            </div>
          </li>
          <li>
            <div class="flex text-white text-3xl no-underline mt-5" onClick=${() => setPage(25)}>
              <span class="whitespace-nowrap">Atores que já lutaram na vida real</span>
              <div class="border-0 border-b-2 border-dotted w-full mb-2 mx-3"></div>
              <span>25</span>
            </div>
          </li>
          <li>
            <div class="flex text-white text-3xl no-underline mt-5" onClick=${() => setPage(29)}>
              <span class="whitespace-nowrap">Referências</span>
              <div class="border-0 border-b-2 border-dotted w-full mb-2 mx-3"></div>
              <span>29</span>
            </div>
          </li>
        </ul>
      </nav>
    `
  },
  3: () => html``,
  4: () => html`
    <button
      class="absolute border-0 bg-transparent"
      style=${{ width: "70px", height: "70px", marginLeft: "185px", marginTop: "287px" }}
      onClick=${() => window.open("https://instagram.com/frosy_sant0s")}
    ></button>
    <button
      class="absolute border-0 bg-transparent"
      style=${{ width: "70px", height: "70px", marginLeft: "185px", marginTop: "810px" }}
      onClick=${() => window.open("https://instagram.com/m.a.r.i.a.n.a_2.0")}
    ></button>
    <button
      class="absolute border-0 bg-transparent"
      style=${{ width: "70px", height: "70px", marginLeft: "647px", marginTop: "295px" }}
      onClick=${() => window.open("https://instagram.com/lusiilva0")}
    ></button>
    <button
      class="absolute border-0 bg-transparent"
      style=${{ width: "70px", height: "70px", marginLeft: "624px", marginTop: "810px" }}
      onClick=${() => window.open("https://instagram.com/vitordaniel.dev")}
    ></button>
    <button
      class="absolute border-0 bg-transparent"
      style=${{ width: "70px", height: "70px", marginLeft: "432px", marginTop: "576px" }}
      onClick=${() => window.open("https://instagram.com/tarsillaeloi")}
    ></button>
  `,
  5: (setModelContent: (content: JSX.Element) => void) => {
    function modalContent() {
      return html`
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/u8k31o0dhDw"
          title="Besouro: da capoeira nasce um herói"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `
    }

    return html`
      <button
        class="bg-transparent rounded-0 border-0"
        style=${{ width: "335px", height: "270px", marginLeft: "420px", marginTop: "265px" }}
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
  8: (setModelContent: (content: JSX.Element) => void) => {
    function modalContent() {
      return html`
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kzRFMIFVpZM"
          title="YouTube video player"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `
    }

    return html`
      <button
        class="bg-transparent rounded-0 border-0"
        style=${{ width: "265px", height: "400px", marginLeft: "460px", marginTop: "500px" }}
        onClick=${() => setModelContent(modalContent())}>
      </button>
    `
  },
  9: () => html`
    <button class="border-0 bg-transparent" style=${{ width: "165px", height: "165px", marginTop: "730px", marginLeft: "321px" }} onClick=${() => window.open("https://forms.gle/PvEEBtnnZywrpVWw7")}></button>
  `,
  10: () => html``,
  11: (setModelContent: (content: JSX.Element) => void) => {
    function modalContent() {
      return html`
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YZb5YNghQxA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `
    }

    return html`
      <button
        class="bg-transparent rounded-0 border-0"
        style=${{ width: "305px", height: "450px", marginLeft: "435px", marginTop: "185px" }}
        onClick=${() => setModelContent(modalContent())}>
      </button>
    `
  },
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
  19: (setModelContent: (content: JSX.Element) => void) => {
    function modalContent() {
      return html`
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TyAB2gtsgSw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `
    }

    return html`
      <button
        class="bg-transparent border-0"
        style=${{ width: "330px", height: "490px", marginLeft: "425px", marginTop: "145px" }}
        onClick=${() => setModelContent(modalContent())}>
      </button>
    `
  },
  20: () => html`
    <button class="border-0 bg-transparent" style=${{ width: "165px", height: "165px", marginTop: "810px", marginLeft: "310px" }} onClick=${() => window.open("https://forms.gle/PdmTbT5o4S1PEUPu6")}></button>
  `,
  21: () => html``,
  22: () => html``,
  23: (setModelContent: (content: JSX.Element) => void) => {
    function modalContent() {
      return html`
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pTSmgRjCg2Y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `
    }

    return html`
      <button
        class="bg-transparent border-0"
        style=${{ width: "200px", height: "140px", marginLeft: "120px", marginTop: "890px" }}
        onClick=${() => setModelContent(modalContent())}>
      </button>
    `
  },
  24: () => html`
    <button
      class="bg-transparent border-0"
      style=${{ width: "165px", height: "160px", marginLeft: "320px", marginTop: "705px" }}
      onClick=${() => {
        window.open("https://criadordecruzadinhas.com.br/wordsearch/6302d6da796f0b005ca55482")
      }}
    ></button>
  `,
  25: (setModelContent: (content: JSX.Element) => void) => {
    function dragoesParaSempre() {
      return html`
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PMLdKeKdNgg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `
    }

    function lutarOuMorrer() {
      return html`
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AnhQZT_4sao"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `
    }

    return html`
      <button
        class="bg-transparent border-0"
        style=${{ width: "250px", height: "355px", marginLeft: "470px", marginTop: "205px" }}
        onClick=${() => setModelContent(dragoesParaSempre())}>
      </button>
      <button
        class="bg-transparent border-0"
        style=${{ width: "255px", height: "355px", marginLeft: "470px", marginTop: "65px" }}
        onClick=${() => setModelContent(lutarOuMorrer())}>
      </button>
    `
  },
  26: (setModelContent: (content: JSX.Element) => void) => {
    function detonandoEmBarcelona() {
      return html`
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SA_2sYJIT3w"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `
    }

    function detonandoEmBarcelonaLuta() {
      return html`
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SA_2sYJIT3w?start=5761"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `
    }

    function dragoesParaSempreLuta() {
      return html`
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PMLdKeKdNgg?start=5136"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `
    }

    return html`
      <button
        class="bg-transparent border-0 absolute"
        style=${{ width: "350px", height: "190px", marginLeft: "25px", marginTop: "475px" }}
        onClick=${() => setModelContent(detonandoEmBarcelonaLuta())}>
      </button>
      <button
        class="bg-transparent border-0 absolute"
        style=${{ width: "330px", height: "180px", marginLeft: "40px", marginTop: "765px" }}
        onClick=${() => setModelContent(dragoesParaSempreLuta())}>
      </button>
      <button
        class="bg-transparent border-0 absolute"
        style=${{ width: "225px", height: "260px", marginLeft: "480px", marginTop: "660px" }}
        onClick=${() => setModelContent(detonandoEmBarcelona())}>
      </button>
    `
  },
  27: (setModelContent: (content: JSX.Element) => void) => {
    function modalContent() {
      return html`
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/I5f1QcawTRc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `
    }

    return html`
      <button
        class="bg-transparent border-1"
        style=${{ width: "350px", height: "190px", marginLeft: "25px", marginTop: "475px" }}
        onClick=${() => setModelContent(modalContent())}>
      </button>
    `
  },
  28: () => html``,
  29: (setModelContent: (content: JSX.Element) => void) => {
    function capoeiraReferences() {
      return html`
        <div class="bg-slate-900 p-10">
          <ul class="list-none">
            <li>
              <a class="flex text-white text-3xl no-underline mt-5" href="https://www.suapesquisa.com/educacaoesportes/historia_da_capoeira.htm">História da Capoeira - origem, estilos, capoeira angola e características | suapesquisa.com</a>
            </li>
            <li>
              <a class="flex text-white text-3xl no-underline mt-5" href="https://pt.wikipedia.org/wiki/Besouro_(filme)">Besouro (filme) | wikipedia.org</a>
            </li>
            <li>
              <a class="flex text-white text-3xl no-underline mt-5" href="https://cinema10.com.br/filme/besouro">Besouro (Filme), Trailer, Sinopse e Curiosidades | cinema10.com.br</a>
            </li>
          </ul>
        </div>
      `
    }

    function judoReferences() {
      return html`
        <div class="bg-slate-900 p-10">
          <ul class="list-none">
            <li>
              <a class="flex text-white text-3xl no-underline mt-5" href="https://m.suapesquisa.com/educacaoesportes/judo.htm">Judô | suapesquisa.com</a>
            </li>
            <li>
              <a class="flex text-white text-3xl no-underline mt-5" href="http://www.cinevitor.com.br/elenco-de-grande-vitoria-lanca-filme-em-sao-paulo/">Elenco de A Grande Vitória lança filme em São Paulo | cinevitor.com.br</a>
            </li>
            <li>
              <a class="flex text-white text-3xl no-underline mt-5" href="https://cinema10-com-br.cdn.ampproject.org/v/s/cinema10.com.br/filme/a-grande-vitoria?amp=&amp_gsa=1&amp_js_v=a9&usqp=mq331AQKKAFQArABIIACAw%3D%3D#amp_tf=De%20%251%24s&aoh=16600906622281&referrer=https%3A%2F%2Fwww.google.com&ampshare=https%3A%2F%2Fcinema10.com.br%2Ffilme%2Fa-grande-vitoria">A Grande Vitória | cinema10-com-br.cdn.ampproject.org</a>
            </li>
          </ul>
        </div>
      `
    }

    function KungFuReferences() {
      return html`
        <div class="bg-slate-900 p-10">
          <ul class="list-none">
            <li>
              <a class="flex text-white text-3xl no-underline mt-5" href="https://www.adorocinema.com/filmes/filme-57959">KUNG-FUSÃO | adorocinema.com</a>
            </li>
            <li>
              <a class="flex text-white text-3xl no-underline mt-5" href="https://brasilescola.uol.com.br/educacao-fisica/kung-fu.htm#:~:text=Acredita%2Dse%20que%20o%20kung,instalar%20no%20templo%20chin%C3%AAs%20Shaolin">Kung-Fu | brasilescola.uol.com.br</a>
            </li>
            <li>
              <a class="flex text-white text-3xl no-underline mt-5" href="https://www.infoescola.com/artes-marciais/kung-fu">Kung Fu | infoescola.com</a>
            </li>
          </ul>
        </div>
      `
    }

    function JackieChanAndBruceLeeReferences() {
      return html`
        <div class="bg-slate-900 p-10">
          <ul class="list-none">
            <li>
              <a class="flex text-white text-3xl no-underline mt-5" href="https://www.ebiografia.com/bruce_lee/#:~:text=Bruce%20Lee%20(1940%2D1973),tornou%20uma%20lenda%20do%20esporte">Bruce Lee | ebiografia.com</a>
            </li>
            <li>
              <a class="flex text-white text-3xl no-underline mt-5" href="https://consideracoessobrefilmes.blogspot.com/2017/11/o-protetor-2005.html?m=1">JACKIE CHAN | adorocinema.com</a>
            </li>
            <li>
              <a class="flex text-white text-3xl no-underline mt-5" href="https://rollingstone.uol.com.br/noticia/jackie-chan-conheceu-bruce-lee-depois-de-apanhar-de-verdade-em-filmagem-conheca-historia">Jackie Chan conheceu Bruce Lee depois de apanhar de verdade em filmagem; conheça a história | rollingstone.uol.com.br</a>
            </li>
          </ul>
        </div>
      `
    }

    function muayThayReferences() {
      return html`
        <div class="bg-slate-900 p-10">
          <ul class="list-none">
            <li>
              <a class="flex text-white text-3xl no-underline mt-5" href="https://www.significados.com.br/muay-thai/#:~:text=O%20Muay%20Thai%20surge%20como,ser%20praticada%20como%20um%20esporte">Significado de Muay Thai | significados.com.br</a>
            </li>
            <li>
              <a class="flex text-white text-3xl no-underline mt-5" href="https://consideracoessobrefilmes.blogspot.com/2017/11/o-protetor-2005.html?m=1">O PROTETOR (2005) | consideracoessobrefilmes.blogspot.com</a>
            </li>
            <li>
              <a class="flex text-white text-3xl no-underline mt-5" href="https://www.adorocinema.com/filmes/filme-182873/curiosidades/#:~:text=No%20in%C3%ADcio%2C%20o%20diretor%20Paul,que%20tamb%C3%A9m%20abandonou%20o%20filme">O PROTETOR | adorocinema.com</a>
            </li>
          </ul>
        </div>
      `
    }

    function boxeReferences() {
      return html`
        <div class="bg-slate-900 p-10">
          <ul class="list-none">
            <li>
              <a class="flex text-white text-3xl no-underline mt-5" href="https://www.guiadoscuriosos.com.br/esportes/boxe/10-curiosidades-sobre-o-boxe">10 curiosidades sobre o boxe | guiadoscuriosos.com.br</a>
            </li>
            <li>
              <a class="flex text-white text-3xl no-underline mt-5" href="https://www.significados.com.br/boxe/#:~:text=Boxe%20ou%20pugilismo%20%C3%A9%20um,um%20conjunto%20de%20regras%20predeterminadas">Boxe | significados.com.br</a>
            </li>
          </ul>
        </div>
      `
    }

    function esgrimaReferences() {
      return html`
        <div class="bg-slate-900 p-10">
          <ul class="list-none">
            <li>
              <a class="flex text-white text-3xl no-underline mt-5" href="https://www.esgrimaster.com/historia-esgrima">HISTÓRIA DA ESGRIMA | esgrimaster.com</a>
            </li>
            <li>
              <a class="flex text-white text-3xl no-underline mt-5" href="https://consideracoessobrefilmes.blogspot.com/2017/11/o-protetor-2005.html?m=1">Na Ponta | filmow.com</a>
            </li>
          </ul>
        </div>
      `
    }

    function atoresQueJaLutaramNaVidaRealReferences() {
      return html`
        <div class="bg-slate-900 p-10">
          <ul class="list-none">
            <li>
              <a class="flex text-white text-3xl no-underline mt-5" href="https://youtu.be/LagioeOOUTs">14 ATORES do CINEMA que LUTAM na vida real!!! | youtube.com</a>
            </li>
            <li>
              <a class="flex text-white text-3xl no-underline mt-5" href="https://youtu.be/CpU47CJZiJ4">10 Curiosidades Billy Chow | youtube.com</a>
            </li>
            <li>
              <a class="flex text-white text-3xl no-underline mt-5" href="https://pt.wikipedia.org/wiki/Benny_Urquidez">Benny Urquidez | wikipedia.org</a>
            </li>
            <li>
              <a class="flex text-white text-3xl no-underline mt-5" href="https://pt.wikipedia.org/wiki/Chuck_Norris">Chuck Norris | wikipedia.org</a>
            </li>
          </ul>
        </div>
      `
    }

    return html`
      <nav style=${{ marginTop: "300px", width: "520px" }}>
        <ul class="list-none">
          <li>
            <div class="flex text-white text-3xl no-underline mt-5" onClick=${() => setModelContent(capoeiraReferences())}>
              <span class="whitespace-nowrap">Capoeira</span>
            </div>
          </li>
          <li>
            <div class="flex text-white text-3xl no-underline mt-5" onClick=${() => setModelContent(judoReferences())}>
              <span class="whitespace-nowrap">Judô</span>
            </div>
          </li>
          <li>
            <div class="flex text-white text-3xl no-underline mt-5" onClick=${() => setModelContent(KungFuReferences())}>
              <span class="whitespace-nowrap">Kung fu</span>
            </div>
          </li>
          <li>
            <div class="flex text-white text-3xl no-underline mt-5" onClick=${() => setModelContent(JackieChanAndBruceLeeReferences())}>
              <span class="whitespace-nowrap">Jackie Chan e Bruce Lee</span>
            </div>
          </li>
          <li>
            <div class="flex text-white text-3xl no-underline mt-5" onClick=${() => setModelContent(muayThayReferences())}>
              <span class="whitespace-nowrap">Muay Thai</span>
            </div>
          </li>
          <li>
            <div class="flex text-white text-3xl no-underline mt-5" onClick=${() => setModelContent(boxeReferences())}>
              <span class="whitespace-nowrap">Boxe</span>
            </div>
          </li>
          <li>
            <div class="flex text-white text-3xl no-underline mt-5" onClick=${() => setModelContent(esgrimaReferences())}>
              <span class="whitespace-nowrap">Esgrima</span>
            </div>
          </li>
          <li>
            <div class="flex text-white text-3xl no-underline mt-5" onClick=${() => setModelContent(atoresQueJaLutaramNaVidaRealReferences())}>
              <span class="whitespace-nowrap">Atores que já lutaram na vida real</span>
            </div>
          </li>
        </ul>
      </nav>
    `
  }
}

export const Maganize: FunctionComponent = () => {
  const pagesNumber = 29
  const [, params] = useRoute<{ page: string }>("/pages/:page")
  const currentPage = parseInt(params!.page)
  const [modelContent, setModelContent] = useState<JSX.Element>()
  const [, setLocation] = useLocation()
  const [modelIsOpen, setModelIsOpen] = useState(false)

  const currentImage = new URL(`../assets/magazine/${currentPage}.svg`, import.meta.url).href

  function setModalContent(content: JSX.Element) {
    setModelContent(content)
    setModelIsOpen(true)
  }

  const setCurrentPage = (page: number) => {
    setLocation(`/pages/${page}`)
  }

  const [loading, setLoading] = useState(true)

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
      ${loading && html`
        <div class="absolute w-100 h-100 w-screen h-screen z-50 flex justify-center items-center">
          <div class="w-screen h-screen bg-black opacity-75 absolute z-40"></div>
          <div class="z-50">
            <p class="text-3xl text-white font-bold">Carregando...</p>
          </div>
        </div>
      `}
      <${TransformWrapper} minScale=${.25} initialScale=${.5} centerOnInit=${true}>
        <${TransformComponent} wrapperClass="!w-full">
          <img src=${currentImage} onLoad=${() => setLoading(false)} class="m-25" />
          ${!loading && html`<div class="absolute m-25">
            ${pages[currentPage](setModalContent, setCurrentPage)}
          </div>`}
        </>
      </>
      <${Bottom}
        pagesNumber=${pagesNumber - 1}
        currentPage=${currentPage - 1}
        onPreviousPage=${() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            setLoading(true)
          }
        }}
        onNextPage=${() => {
          if (currentPage < pagesNumber) {
            setCurrentPage(currentPage + 1)
            setLoading(true)
          }
        }}
      />
    </div>
  `
}
