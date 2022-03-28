import type { TreeNode } from "@common/types"
import styled from "styled-components"
import ItemsTree from "./ItemsTree"

interface ExplorerProps {
  items: TreeNode[]
}

const Container = styled.div`
  background-color: var(--side-menu-open);
  font-size: 14px;
  min-width: 10rem;
`

const Header = styled.div`
  padding: 0.75rem 1.25rem;
`

const FileExplorer = ({ items }: ExplorerProps) => {
  return (
    <Container>
      <Header>
        <span style={{ fontSize: 11, fontWeight: 300 }}>EXPLORER</span>
      </Header>
      <ItemsTree items={items} />
    </Container>
  )
}

export default FileExplorer
