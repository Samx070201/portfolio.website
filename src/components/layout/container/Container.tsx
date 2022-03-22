import { CSSProperties } from "react"
import styled from "styled-components"
import Content from "./Content"
import Footer from "./Footer"
import NavMenu from "./NavMenu"
import SideMenu from "./side-menu/SideMenu"
import TopExplorer from "./top-explorer/TopExplorer"

const Main = styled.main`
  width: 100%;
  height: 100vh;
`

const Workspace = styled.div`
  display: flex;
  align-items: stretch;
  height: calc(100% - var(--nav-menu-height) - var(--footer-height));
`

interface ContainerProps {
  title: string
  children: React.ReactNode
  className?: string
  style?: CSSProperties
}

const Container = ({ title, children, className, style }: ContainerProps) => {
  return (
    <Main>
      <NavMenu title={title} />

      <Workspace>
        <SideMenu />

        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <TopExplorer items={[]} />
          <Content className={className} style={style}>
            {children}
          </Content>
        </div>
      </Workspace>

      <Footer />
    </Main>
  )
}

export default Container
