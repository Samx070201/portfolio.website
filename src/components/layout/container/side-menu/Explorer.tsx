import styled from "styled-components"
import ItemsTree from "./ItemsTree"
import { TreeNode } from "./TreeItem"

interface ExplorerProps {
  items: TreeNode[]
}

const Container = styled.div`
  background-color: var(--side-menu-open);
  font-size: 14px;
`

const Header = styled.div`
  padding: 0.75rem 1.25rem;
`

const Explorer = ({ items }: ExplorerProps) => {
  return (
    <Container>
      <Header>
        <span style={{ fontSize: 11, fontWeight: 300 }}>EXPLORER</span>
      </Header>
      <ItemsTree items={items} />
    </Container>
  )
}

export default Explorer
