import { TransformWrapper, TransformComponent } from "@pronestor/react-zoom-pan-pinch"
import { FunctionComponent } from "preact"
import { useEffect, useState } from "preact/hooks"
import { Bottom } from "../components/Bottom"

export const Maganize: FunctionComponent = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentImage, setCurrentImage] = useState<string>()

  useEffect(() => {
    setCurrentImage(new URL(`./magazine/${currentPage}.svg`, import.meta.url).toString())
  }, [currentPage])

  return (
    <div class="!w-screen !h-screen flex flex-col">
      <TransformWrapper minScale={.25} initialScale={.5} centerOnInit={true}>
        <TransformComponent wrapperClass="!w-full">
          <img src={currentImage} />
        </TransformComponent>
      </TransformWrapper>
      <Bottom
        pagesNumber={9}
        currentPage={currentPage}
        onPreviousPage={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
          }
        }}
        onNextPage={() => {
          if (currentPage < 9) {
            setCurrentPage(currentPage + 1)
          }
        }}
      />
    </div>
  )
}
