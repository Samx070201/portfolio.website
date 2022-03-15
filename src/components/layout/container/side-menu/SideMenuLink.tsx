import { Link } from "gatsby"
import { useState } from "react"
import styled from "styled-components"
import Popover from "../../../Popover"

interface LinkItemProps {
  active?: boolean
}

const LinkItem = styled.li<LinkItemProps>`
  position: relative;
  padding: 0.5rem;
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
      <LinkItem ref={setItemRef} active={active} onClick={onClick}>
        <Link to={to}>
          <span className="material-icons md-36">{icon}</span>
        </Link>
      </LinkItem>
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
