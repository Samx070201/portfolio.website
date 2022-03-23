import { CSSProperties, useMemo, useState } from "react"
import styled from "styled-components"
import type { TreeNode } from "@common/types"
import { useCurrentPageName } from "@hooks"
import ExpandIcon from "./ExpandIcon"

const Node = styled.div`
  height: 1.7em;
`

const NodeContent = styled(Node)`
  display: flex;
  align-items: center;
  padding-right: 1.5rem;
  user-select: none;
  position: relative;
`

interface NodeHighlightStyleProps {
  active?: boolean
}

const NodeHighlight = styled(Node)<NodeHighlightStyleProps>`
  position: absolute;
  width: 100%;
  left: 0;
  background-color: ${({ active }) =>
    active ? "var(--side-menu-item-active)" : "var(--side-menu-item-hover)"};
`

interface TreeItemProps extends TreeNode {
  style?: CSSProperties
}

function TreeItem({
  nodeId,
  content,
  subNodes,
  style,
  root = false,
}: TreeItemProps) {
  const currentPage = useCurrentPageName()

  const [showSubNodes, setShowSubNodes] = useState<boolean>(true)
  const [showHoverEffect, setShowHoverEffect] = useState<boolean>(false)

  const isActive = useMemo(() => currentPage === nodeId, [currentPage])

  return (
    <div style={{ cursor: "pointer", ...style }}>
      {(showHoverEffect || isActive) && <NodeHighlight active={isActive} />}
      <NodeContent
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
      </NodeContent>

      {showSubNodes &&
        subNodes &&
        (Array.isArray(subNodes) ? (
          subNodes.map((subNode, index) => (
            <TreeItem
              key={index}
              nodeId={subNode.nodeId}
              content={subNode.content}
              subNodes={subNode.subNodes}
              style={{ paddingLeft: subNode.subNodes ? "0.5rem" : "1.5rem" }}
            />
          ))
        ) : (
          <TreeItem
            nodeId={subNodes.nodeId}
            content={subNodes.content}
            subNodes={subNodes.subNodes}
            style={{ paddingLeft: subNodes.subNodes ? "0.5rem" : "1.5rem" }}
          />
        ))}
    </div>
  )
}

export default TreeItem
