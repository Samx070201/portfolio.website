import { CSSProperties } from "react"
import styled from "styled-components"
import NavMenu from "./NavMenu"
import SideMenu from "./SideMenu"

const Main = styled.main`
  width: 100%;
  height: 100vh;
`

const Workspace = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
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
    </Main>
  )
}

export default Container
