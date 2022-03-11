import { CSSProperties } from "react"
import styled from "styled-components"
import Footer from "./Footer"
import NavMenu from "./NavMenu"
import SideMenu from "./side-menu/SideMenu"

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
  style?: CSSProperties
}

const Container = ({ title, children, style }: ContainerProps) => {
  return (
    <Main>
      <NavMenu title={title} />

      <Workspace>
        <SideMenu />

        <section style={style}>{children}</section>
      </Workspace>

      <Footer />
    </Main>
  )
}

export default Container
