import { OffsetModifier } from "@popperjs/core/lib/modifiers/offset"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useCallback, useMemo } from "react"
import { useState } from "react"
import { usePopper } from "react-popper"
import styled from "styled-components"
import { useClickedOutside } from "../../../hooks"

const Container = styled.ul`
  list-style-type: none;

  background-color: var(--nav-menu);

  position: relative;

  margin: 0;
  padding: 0;

  height: 1.8rem;
  font-size: 0.9rem;

  display: flex;
  align-items: stretch;
`

const MenuItem = styled.li`
  display: flex;
  align-items: center;
`

interface MenuDropdownStyleProps {
  disabled?: boolean
}

const MenuDropdown = styled(MenuItem)<MenuDropdownStyleProps>`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;

  user-select: none;

  font-weight: 500;

  ${({ disabled }) => disabled && "color: #8d8d8d;"}

  :not(:nth-child(1)) {
    :hover {
      background-color: #505050;
      cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
    }
  }
`

interface PopoverStyleProps {
  show?: boolean
}

const Popover = styled.div<PopoverStyleProps>`
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  background-color: var(--side-menu-open);
  padding: 0.4rem 0.1rem;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.6);
  z-index: 999;
`

const PopoverItem = styled.span`
  width: 12em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  cursor: pointer;
  user-select: none;

  :hover {
    background-color: var(--hover-nav-menu-item);
    color: white;
  }
`

interface NavMenuProps {
  title: string
}

const NavMenu = ({ title }: NavMenuProps) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLLIElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )

  const [showDownloadPopover, setShowDownloadPopover] = useState<boolean>(false)

  const offsetModifier = useMemo<Partial<OffsetModifier>>(
    () => ({
      name: "offset",
      options: {
        offset: ({ placement }) => {
          if (placement === "bottom") {
            return [68, 0]
          } else {
            return [0, 0]
          }
        },
      },
    }),
    []
  )

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [offsetModifier],
  })

  const hideDownloadPopover = useCallback(() => {
    setShowDownloadPopover(false)
  }, [setShowDownloadPopover])

  useClickedOutside(
    popperElement,
    hideDownloadPopover,
    referenceElement ? [referenceElement] : []
  )

  return (
    <Container>
      <MenuDropdown>
        <Link to="/">
          <StaticImage
            src="https://picsum.photos/24"
            alt="Samuele Musazzi's logo"
          />
        </Link>
      </MenuDropdown>

      <MenuDropdown
        ref={setReferenceElement}
        onClick={() => setShowDownloadPopover(prev => !prev)}
      >
        <span>File</span>
      </MenuDropdown>
      <Popover
        show={showDownloadPopover}
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        <PopoverItem>
          Download CV
          <span className="material-icons md-18">file_download</span>
        </PopoverItem>
      </Popover>

      <MenuDropdown disabled>
        <span>Edit</span>
      </MenuDropdown>
      <MenuDropdown disabled>
        <span>Selection</span>
      </MenuDropdown>
      <MenuDropdown disabled>
        <span>View</span>
      </MenuDropdown>
      <MenuDropdown disabled>
        <span>Go</span>
      </MenuDropdown>
      <MenuDropdown disabled>
        <span>Run</span>
      </MenuDropdown>
      <MenuDropdown disabled>
        <span>Terminal</span>
      </MenuDropdown>
      <MenuDropdown disabled>
        <span>Help</span>
      </MenuDropdown>

      <MenuItem
        style={{
          padding: 0,
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%) translateY(-50%)",
          top: "50%",
        }}
      >
        <span>{title}</span>
      </MenuItem>
    </Container>
  )
}

export default NavMenu
