import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

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

  font-weight: 500;

  ${({ disabled }) => disabled && "color: #8d8d8d;"}

  :not(:nth-child(1)) {
    :hover {
      background-color: #505050;
      cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
    }
  }
`

interface NavMenuProps {
  title: string
}

const NavMenu = ({ title }: NavMenuProps) => {
  return (
    <Container>
      <MenuDropdown>
        <StaticImage
          src="https://picsum.photos/24"
          alt="Samuele Musazzi's logo"
        />
      </MenuDropdown>
      <MenuDropdown>
        <span>File</span>
      </MenuDropdown>
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
