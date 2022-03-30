import { useIsScrollable } from "@hooks/useIsScrollable"
import HistoryContext from "context/HistoryContext"
import { CSSProperties, ReactNode, useContext, useMemo, useState } from "react"
import styled from "styled-components"
import ScrollBar from "../ScrollBar"

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`

/**
 * Since the original scrollbar is hidden in the Wrapper,
 * we need to simulate what the w3 specification says for the
 * space taken up by the scrollbar, hence we place a ghost underneath
 * the interactable one, since we cannot perform a calc() on flex subtracting
 * the scrollbar width.
 */
const GhostScrollbar = styled.div`
  width: var(--scrollbar-width);
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

  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null)
  const [containerScrollTop, setContainerScrollTop] = useState<number>(0)

  const isScrollable = useIsScrollable(containerRef)

  return (
    <Wrapper
      onScroll={({ target }) =>
        setContainerScrollTop((target as HTMLDivElement).scrollTop)
      }
    >
      <section ref={setContainerRef} className={className} style={style}>
        {children}
      </section>
      {isScrollable && <GhostScrollbar />}
      {isScrollable && (
        <ScrollBar
          draggableHeight={
            containerRef
              ? `${
                  (containerRef.clientHeight * 100) / containerRef.scrollHeight
                }%`
              : 0
          }
          draggableTopOffset={
            containerRef
              ? `${(containerScrollTop * 100) / containerRef.scrollHeight}%`
              : 0
          }
          considerTopExplorer={isTopExplorerVisible}
        />
      )}
    </Wrapper>
  )
}

export default Content
