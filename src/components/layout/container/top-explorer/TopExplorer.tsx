import styled from "styled-components"
import ExplorerItem, { TopExplorerItem } from "./TopExplorerItem"

const Container = styled.div`
  height: 2rem;
  display: flex;
  align-items: stretch;
  background-color: whitesmoke;
`

interface TopExplorerProps {
  items: TopExplorerItem[]
}

const TopExplorer = ({ items }: TopExplorerProps) => {
  return (
    <Container>
      {items.map(item => (
        <ExplorerItem key={item.title} {...item} />
      ))}
    </Container>
  )
}

export default TopExplorer
