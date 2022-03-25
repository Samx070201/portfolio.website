import { CSSProperties, useMemo, useState } from "react"
import styled from "styled-components"
import { availablePages, explorerItems } from "@common"
import FileExplorer from "./file-explorer/FileExplorer"
import SideMenuLink from "./SideMenuLink"
import { useCurrentTopLevelPageName } from "@hooks"

const Aside = styled.aside`
  background-color: var(--side-menu);
  display: flex;
`

const SideMenuLinks = styled.ul`
  list-style-type: none;

  background-color: var(--side-menu);

  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
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
      <SideMenuLinks>
        {availablePages.map(({ to, pageName, icon }) => {
          const activeLink = currentPath === to

          return (
            <SideMenuLink
              key={to}
              to={to}
              pageName={pageName}
              icon={icon}
              active={activeLink}
              onClick={() => {
                if (activeLink) {
                  setShowExplorer(prev => !prev)
                }
              }}
              popoverContent={
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.75rem",
                    padding: "0.25rem 0.5rem",
                    backgroundColor: "var(--side-menu-popover-bg-color)",
                    border: "1px solid var(--side-menu-popover-border)",
                  }}
                >
                  {pageName}
                </span>
              }
            />
          )
        })}
      </SideMenuLinks>
      {showExplorer && explorerItems[currentPage] && (
        <FileExplorer items={explorerItems[currentPage] ?? []} />
      )}
    </Aside>
  )
}

export default SideMenu
