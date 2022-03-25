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
  onItemClose: (index: number) => void
}

const TopExplorer = ({ items, onItemClose }: TopExplorerProps) => {
  const currentPage = useCurrentPageName()

  return (
    <Container>
      {items.map((item, index) => (
        <ExplorerItem
          key={item.title}
          icon={item.icon}
          title={`${item.title}.html`}
          href={item.href}
          active={currentPage === item.title}
          onClose={() => {
            onItemClose(index)
          }}
        />
      ))}
    </Container>
  )
}

export default TopExplorer
