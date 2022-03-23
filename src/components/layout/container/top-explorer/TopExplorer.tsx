import styled from "styled-components"
import type { TopExplorerItem } from "@common/types"
import ExplorerItem from "./TopExplorerTile"
import { useCurrentPageName } from "@hooks"

const Container = styled.div`
  height: 2.25rem;
  display: flex;
  align-items: stretch;
  background-color: var(--top-explorer-bg-color);
`

interface TopExplorerProps {
  items: TopExplorerItem[]
}

const TopExplorer = ({ items }: TopExplorerProps) => {
  const currentPage = useCurrentPageName()

  return (
    <Container>
      {items.map(item => (
        <ExplorerItem
          key={item.title}
          icon={item.icon}
          title={`${item.title}.html`}
          active={currentPage === item.title}
        />
      ))}
    </Container>
  )
}

export default TopExplorer
