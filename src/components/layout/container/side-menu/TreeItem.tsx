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

const Node = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1.25rem;
  height: 1.6em;
  user-select: none;
  position: relative;
  cursor: pointer;
`

interface NodeHighlightStyleProps {
  active?: boolean
}

const NodeHighlight = styled.div<NodeHighlightStyleProps>`
  position: absolute;
  width: 100%;
  height: 1.6em;
  left: 0;
  background-color: ${({ active }) =>
    active ? "var(--side-menu-item-active)" : "var(--side-menu-item-hover)"};
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
  const [showHoverEffect, setShowHoverEffect] = useState<boolean>(false)

  const isActive = useMemo(() => currentPage === nodeId, [currentPage])

  return (
    <div style={style}>
      {(showHoverEffect || isActive) && <NodeHighlight active={isActive} />}
      <Node
        onClick={() => setShowSubNodes(prev => !prev)}
        onMouseEnter={() => setShowHoverEffect(true)}
        onMouseLeave={() => setShowHoverEffect(false)}
      >
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
                paddingLeft: subNode.subNodes ? "0.5rem" : "1.5rem",
                marginTop: "0.25rem",
              }}
            />
          ))
        ) : (
          <TreeItem
            nodeId={subNodes.nodeId}
            content={subNodes.content}
            subNodes={subNodes.subNodes}
            style={{
              paddingLeft: subNodes.subNodes ? "0.5rem" : "1.5rem",
              marginTop: "0.25rem",
            }}
          />
        ))}
    </div>
  )
}

export default TreeItem
