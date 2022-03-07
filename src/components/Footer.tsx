import styled from "styled-components"

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
`

const Footer = () => {
  return <FooterContainer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </FooterContainer>
}

export default Footer