import { CSSProperties, useCallback, useContext, useMemo } from "react"
import styled from "styled-components"
import Content from "./Content"
import Footer from "./Footer"
import NavMenu from "./NavMenu"
import SideMenu from "./side-menu/SideMenu"
import TopExplorer from "./top-explorer/TopExplorer"
import { navigate } from "gatsby"
import { clamp } from "@utility"

import HistoryContext from "context/HistoryContext"

import type { TopExplorerItem } from "@common/types"

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
  const { visitedPages, removePageAt } = useContext(HistoryContext)

  const topExplorerTiles = useMemo(() => {
    return visitedPages.map<TopExplorerItem>(vp => ({
      icon: "html",
      title: vp,
      href: `/${vp}`,
    }))
  }, [visitedPages])

  const onItemClose = useCallback(
    (index: number) => {
      if (index >= 0) {
        const newVisitedPages = removePageAt(index)

        const indexToNavigateTo = clamp(
          0,
          newVisitedPages.length ? newVisitedPages.length - 1 : 0,
          index
        )

        navigate(`/${newVisitedPages[indexToNavigateTo] ?? ""}`, {
          replace: true,
        })
      }
    },
    [removePageAt]
  )

  return (
    <Main>
      <NavMenu title={title} />

      <Workspace>
        <SideMenu />

        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          {!!visitedPages.length && (
            <TopExplorer items={topExplorerTiles} onItemClose={onItemClose} />
          )}
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
