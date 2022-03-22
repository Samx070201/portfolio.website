import { CSSProperties, ReactNode } from "react"
import styled from "styled-components"
import { AvailablePages } from "../../../../constants"

export interface TopExplorerItem {
  icon: ReactNode
  title: AvailablePages
}

const Item = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

interface TopExplorerItemProps extends TopExplorerItem {
  className?: string
  style?: CSSProperties
}

const TopExplorerItem = ({
  icon,
  title,
  className,
  style,
}: TopExplorerItemProps) => {
  return (
    <Item className={className} style={style}>
      {icon}
      <span style={{ color: "whitesmoke" }}>{title}</span>
    </Item>
  )
}

export default TopExplorerItem
