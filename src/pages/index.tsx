import styled from "styled-components"

import { PageContainer, Navigation } from "../components/layout"
import Seo from "../components/Seo"

import "/src/styles/index.css"

const Container = styled(PageContainer)`
  width: 100vw;
  height: 100vh;

  display: grid;
  place-items: center;
`

const IndexPage = () => (
  <Container>
    <Seo title="Home" />
    <Navigation />

    <section>
      <p
        style={{
          textAlign: "center",
          fontSize: "3.5rem",
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
