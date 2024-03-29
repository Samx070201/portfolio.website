import styled from "styled-components"

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  height: var(--footer-height);
  background-color: var(--primary-color);
`

const Footer = () => {
  return (
    <FooterContainer>
      <span
        className="material-icons md-18"
        style={{ margin: "0 0.75rem 0 1rem" }}
      >
        account_tree
      </span>
      <a
        href="https://github.com/Samx070201"
        style={{ fontSize: "0.75rem" }}
        target="_blank"
      >
        <span>my GitHub profile</span>
      </a>
    </FooterContainer>
  )
}

export default Footer
