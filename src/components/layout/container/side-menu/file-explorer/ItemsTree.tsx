import type { TreeNode } from "@common/types"
import styled from "styled-components"
import TreeItem from "./TreeItem"

interface ItemsTreeProps {
  items: TreeNode[]
}

const Tree = styled.ul`
  list-style-type: none;
  position: relative;

  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
`

const ItemsTree = ({ items }: ItemsTreeProps) => {
  return (
    <Tree>
      {items.map((item, index) => {
        return (
          <TreeItem
            nodeId={null}
            key={index}
            content={item.content}
            subNodes={item.subNodes}
            root={true}
          />
        )
      })}
    </Tree>
  )
}

export default ItemsTree
