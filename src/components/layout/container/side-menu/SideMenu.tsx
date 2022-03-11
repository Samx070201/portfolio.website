import { Link } from "gatsby"
import { CSSProperties, useMemo, useState } from "react"
import styled from "styled-components"
import { availablePages, explorerItems } from "../../../../constants"
import {
  useCurrentPageName,
  useCurrentTopLevelPageName,
} from "../../../../hooks"
import Explorer from "./Explorer"

const Aside = styled.aside`
  background-color: var(--side-menu);
  display: flex;
`

const ExplorerLinks = styled.ul`
  list-style-type: none;

  background-color: var(--side-menu);

  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
`

interface ExplorerLinkItemProps {
  active?: boolean
}

const ExplorerLinkItem = styled.li<ExplorerLinkItemProps>`
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

interface SideMenuProps {
  className?: string
  style?: CSSProperties
}

const SideMenu = ({ className, style }: SideMenuProps) => {
  const currentPage = useCurrentTopLevelPageName()

  const [showExplorer, setShowExplorer] = useState<boolean>(true)

  const currentPath = useMemo(() => `/${currentPage}`, [currentPage])

  return (
    <Aside className={className} style={style}>
      <ExplorerLinks>
        {availablePages.map(({ to, icon }) => {
          const activeLink = currentPath === to

          return (
            <ExplorerLinkItem
              key={to}
              active={activeLink}
              onClick={e => {
                if (activeLink) {
                  e.stopPropagation()
                  e.preventDefault()

                  setShowExplorer(prev => !prev)
                }
              }}
            >
              <Link to={to}>
                <span className="material-icons md-36">{icon}</span>
              </Link>
            </ExplorerLinkItem>
          )
        })}
      </ExplorerLinks>
      {showExplorer && explorerItems[currentPage] && (
        <Explorer items={explorerItems[currentPage] ?? []} />
      )}
    </Aside>
  )
}

export default SideMenu
