import styled from "styled-components"

import { PageContainer, Navigation } from "../components/layout"
import Seo from "../components/Seo"

import "/src/styles/index.css"

const Container = styled(PageContainer)`
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  min-height: 100vh;
`

const IndexPage = () => (
  <Container cursorHighlight>
    <Seo title="Home" />
    <Navigation />

    <section style={{ position: "relative" }}>
      <p
        style={{
          textAlign: "center",
          fontSize: "4rem",
          fontWeight: "bold",
        }}
      >
        <span>Hi, I'm Samuele.</span>
        <br />
        <span>I'm a web application developer!</span>
      </p>
    </section>
  </Container>
)

export default IndexPage
