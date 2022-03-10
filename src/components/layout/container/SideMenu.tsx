import { Link } from "gatsby"
import { CSSProperties } from "react"
import styled from "styled-components"
import { availablePages } from "../../../constants/constants"
import { useCurrentPageName } from "../../../hooks"

const Aside = styled.aside`
  background-color: var(--side-menu);
`

const Container = styled.ul`
  list-style-type: none;

  background-color: var(--side-menu);

  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
`

interface SideMenuItemProps {
  active?: boolean
}

const SideMenuItem = styled.li<SideMenuItemProps>`
  position: relative;
  padding: 0.5rem;
  color: whitesmoke !important;
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
`

interface SideMenuProps {
  className?: string
  style?: CSSProperties
}

const SideMenu = ({ className, style }: SideMenuProps) => {
  const currentPage = useCurrentPageName()

  return (
    <Aside className={className} style={style}>
      <Container>
        {availablePages.map(({ to, icon }) => (
          <SideMenuItem key={to} active={currentPage === to}>
            <Link to={to}>
              <span className="material-icons md-36">{icon}</span>
            </Link>
          </SideMenuItem>
        ))}
      </Container>
    </Aside>
  )
}

export default SideMenu
