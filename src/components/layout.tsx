import { graphql, useStaticQuery } from "gatsby"
import { CSSProperties } from "react"
import { useIsScrollable } from "../hooks"
import Footer from "./Footer"
import ScrollBar from "./ScrollBar"

interface LayoutProps {
  style?: CSSProperties;
  children: React.ReactNode
}

const Layout = ({ style, children }: LayoutProps) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const isScrollable = useIsScrollable()

  return (
    <>
      {/* <aside>
        <Navbar />
      </aside> */}
      <main style={style}>{children}</main>
      <Footer />

      {isScrollable && <ScrollBar />}
    </>
  )
}

export default Layout
