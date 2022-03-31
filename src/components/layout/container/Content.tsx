import { useIsScrollable } from "@hooks/useIsScrollable"
import clamp from "@utility/clamp"
import HistoryContext from "context/HistoryContext"
import {
  CSSProperties,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import styled from "styled-components"
import ScrollBar from "../ScrollBar"

interface WrapperStyleProps {
  isScrollable?: boolean
}

const Wrapper = styled.div<WrapperStyleProps>`
  display: flex;
  flex: 1;
  overflow: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  margin-right: ${({ isScrollable }) =>
    isScrollable
      ? "calc(var(--scrollbar-width) + 1px)"
      : 0}; // 1px is for the border of the scrollbar container

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`

interface ContentProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

function Content({ children, className, style }: ContentProps) {
  const { visitedPages } = useContext(HistoryContext)

  const isTopExplorerVisible = useMemo(
    () => !!visitedPages.length,
    [visitedPages]
  )

  const [contentRef, setContentRef] = useState<HTMLElement | null>(null)
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null)

  const [draggableHeight, setDraggableHeight] = useState<number | string>(0)

  const [containerScrollTop, setContainerScrollTop] = useState<number>(0)
  const [containerScrollTopMax, setContainerScrollTopMax] = useState<number>(0)

  const isScrollable = useIsScrollable(contentRef)

  useEffect(() => {
    const updateDraggableHeight = () => {
      setDraggableHeight(
        contentRef
          ? `${(contentRef.clientHeight * 100) / contentRef.scrollHeight}%`
          : 0
      )
    }

    updateDraggableHeight()

    window.addEventListener("resize", updateDraggableHeight)

    return () => window.removeEventListener("resize", updateDraggableHeight)
  }, [contentRef])

  useEffect(() => {
    if (containerRef) {
      setContainerScrollTopMax(
        containerRef.scrollHeight - containerRef.clientHeight
      )
    }
  }, [containerRef])

  return (
    <Wrapper
      ref={setContainerRef}
      isScrollable={isScrollable}
      onScroll={({ target }) =>
        setContainerScrollTop((target as HTMLDivElement).scrollTop)
      }
    >
      <section ref={setContentRef} className={className} style={style}>
        {children}
      </section>
      {isScrollable && (
        <ScrollBar
          draggableHeight={draggableHeight}
          draggableTopOffset={
            contentRef
              ? `${(containerScrollTop * 100) / contentRef.scrollHeight}%`
              : 0
          }
          considerTopExplorer={isTopExplorerVisible}
          onDrag={deltaY => {
            if (containerRef) {
              const newScrollTop = clamp(
                0,
                containerScrollTopMax,
                containerScrollTop + deltaY
              )

              containerRef.scrollTop = newScrollTop

              setContainerScrollTop(newScrollTop)
            }
          }}
        />
      )}
    </Wrapper>
  )
}

export default Content
