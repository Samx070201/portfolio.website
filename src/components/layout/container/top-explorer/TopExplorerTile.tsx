import { CSSProperties } from "react"
import styled from "styled-components"
import { AvailablePages, TopExplorerItem } from "@common/types"
import { Link } from "gatsby"

interface ItemStyleProps {
  $active: boolean
}

const Item = styled(Link)<ItemStyleProps>`
  background-color: ${({ $active }) =>
    $active
      ? "var(--top-explorer-tile-active-bg-color)"
      : "var(--top-explorer-tile-bg-color)"};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  .iconVisibility {
    visibility: ${({ $active }) => ($active ? "visible" : "hidden")};
  }

  :hover {
    .iconVisibility {
      visibility: visible;
    }
  }
`

interface IconStyleProps {
  color: string
}

const Icon = styled.span.attrs(({ className: additionalClassNames }) => ({
  className: additionalClassNames
    ? "material-icons md-18 " + additionalClassNames
    : "material-icons md-18",
}))<IconStyleProps>`
  margin: 0 0.5em;
  color: ${({ color }) => (color ? color : "whitesmoke")};
  user-select: none;
`

const CloseIcon = styled(Icon)`
  border-radius: 5px;
  color: ${({ color }) => color};
  padding: 0.1em;

  :hover {
    background-color: var(--top-explorer-tile-close-hover-bg-color);
  }
`

const Title = styled.span`
  font-size: 0.9em;
  color: whitesmoke;
  user-select: none;
`

interface TopExplorerTileProps extends Omit<TopExplorerItem, "title"> {
  title: `${AvailablePages}.html`

  active?: boolean
  className?: string
  style?: CSSProperties

  onClose: () => void
}

const TopExplorerTile = ({
  icon,
  title,
  href,

  onClose,

  className,
  style,

  active = false,
}: TopExplorerTileProps) => (
  <Item to={href} $active={active} className={className} style={style}>
    <Icon color="#dd4c35">{icon}</Icon>
    <Title>{title}</Title>
    <CloseIcon
      className="iconVisibility"
      color={active ? "whitesmoke" : "var(--top-explorer-tile-close-color)"}
      onClick={e => {
        onClose()

        e.preventDefault()
      }}
    >
      close
    </CloseIcon>
  </Item>
)

export default TopExplorerTile
