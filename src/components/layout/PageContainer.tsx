import { CSSProperties } from "react"
import { useIsScrollable } from "../../hooks"
import Footer from "./Footer"
import ScrollBar from "./ScrollBar"

interface PageContainerProps {
  children: React.ReactNode
  style?: CSSProperties
  className?: string
}

function PageContainer({ children, className, style }: PageContainerProps) {
  const isScrollable = useIsScrollable()

  return (
    <>
      <main className={className} style={style}>
        {children}
      </main>
      <Footer />

      {isScrollable && <ScrollBar />}
    </>
  )
}

export default PageContainer
