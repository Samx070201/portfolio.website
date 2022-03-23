import { Link } from "gatsby"
import { useState } from "react"
import styled from "styled-components"
import Popover from "../../../Popover"

interface LinkContainerProps {
  active?: boolean
}

const LinkContainer = styled.li<LinkContainerProps>`
  position: relative;
  opacity: ${({ active }) => (active ? 1 : 0.5)};

  :hover {
    opacity: 1;
    cursor: pointer;
  }

  ${({ active }) =>
    active &&
    `:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: whitesmoke;
  }`}

  :active:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: var(--primary-color);
  }
`

const LinkItem = styled(Link)`
  display: inline-block;
  padding: 0.5rem;
`

interface SideMenuLinkProps {
  to: string
  icon: string
  active: boolean

  popover?: boolean
  popoverContent?: React.ReactNode

  onClick: () => void
}

const SideMenuLink = ({
  to,
  icon,
  active,
  popover = true,
  popoverContent,
  onClick,
}: SideMenuLinkProps) => {
  const [itemRef, setItemRef] = useState<HTMLLIElement | null>(null)

  return (
    <>
      <LinkContainer ref={setItemRef} active={active} onClick={onClick}>
        <LinkItem to={to}>
          <span className="material-icons md-36">{icon}</span>
        </LinkItem>
      </LinkContainer>
      {popover && (
        <Popover
          parentRef={itemRef}
          showOnHover
          arrow
          placement="right"
          offset={[0, 5]}
        >
          {popoverContent}
        </Popover>
      )}
    </>
  )
}

export default SideMenuLink
