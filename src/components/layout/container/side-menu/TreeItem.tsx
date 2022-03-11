import { CSSProperties, useMemo, useState } from "react"
import styled from "styled-components"
import { useCurrentPageName } from "../../../../hooks"
import ExpandIcon from "./ExpandIcon"

export interface TreeNode {
  nodeId: string | null
  content: React.ReactNode
  root?: boolean
  icon?: React.ReactNode
  subNodes?: TreeNode | TreeNode[]
}

interface NodeStyleProps {
  active?: boolean
}

const Node = styled.div<NodeStyleProps>`
  display: flex;
  align-items: center;
  padding-right: 1.25rem;
  min-height: 24px;
  user-select: none;
  ${({ active }) => active && "background-color: var(--side-menu-item-active)"};

  :hover {
    background-color: ${({ active }) =>
      active ? "var(--side-menu-item-active)" : "var(--side-menu-item-hover)"};
    cursor: pointer;
  }
`

interface TreeItemProps extends TreeNode {
  style?: CSSProperties
}

const TreeItem = ({
  nodeId,
  content,
  subNodes,
  style,
  root = false,
}: TreeItemProps) => {
  const currentPage = useCurrentPageName()

  const [showSubNodes, setShowSubNodes] = useState<boolean>(true)

  const isActive = useMemo(() => currentPage === nodeId, [currentPage])

  return (
    <div style={style}>
      <Node active={isActive} onClick={() => setShowSubNodes(prev => !prev)}>
        {subNodes && <ExpandIcon collapse={showSubNodes} />}
        {!root &&
          (subNodes ? (
            <span
              className="material-icons md-18"
              style={{ marginRight: "0.4rem", color: "#c09553" }}
            >
              folder
            </span>
          ) : (
            <span
              className="material-icons md-18"
              style={{ marginRight: "0.4rem", color: "#dd4c35" }}
            >
              html
            </span>
          ))}
        {content}
      </Node>
      {showSubNodes &&
        subNodes &&
        (Array.isArray(subNodes) ? (
          subNodes.map((subNode, index) => (
            <TreeItem
              key={index}
              nodeId={subNode.nodeId}
              content={subNode.content}
              subNodes={subNode.subNodes}
              style={{
                padding: subNode.subNodes
                  ? "0.25rem 0 0 0.5rem"
                  : "0.25rem 0 0 1.5rem",
              }}
            />
          ))
        ) : (
          <TreeItem
            nodeId={subNodes.nodeId}
            content={subNodes.content}
            subNodes={subNodes.subNodes}
            style={{
              padding: subNodes.subNodes
                ? "0.25rem 0 0 0.5rem"
                : "0.25rem 0 0 1.5rem",
            }}
          />
        ))}
    </div>
  )
}

export default TreeItem
