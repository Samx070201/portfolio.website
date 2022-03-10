import { CSSProperties, useMemo } from "react"
import { useIsScrollable } from "../../hooks"
import CursorHighlight from "../CursorHighlight"
import Footer from "./Footer"
import ScrollBar from "./ScrollBar"

interface PageContainerProps {
  children: React.ReactNode
  cursorHighlight?: boolean
  style?: CSSProperties
  className?: string
}

function PageContainer({
  cursorHighlight = false,
  children,
  className,
  style,
}: PageContainerProps) {
  const isScrollable = useIsScrollable()

  const mainStyle = useMemo(
    () => (cursorHighlight ? { zIndex: 1, ...style } : style),
    [cursorHighlight]
  )

  return (
    <>
      <main className={className} style={mainStyle}>
        {children}
        <Footer />
      </main>
      {cursorHighlight && <CursorHighlight />}

      {isScrollable && <ScrollBar />}
    </>
  )
}

export default PageContainer
