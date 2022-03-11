import { Layout } from "../components/layout"
import Seo from "../components/Seo"

import "/src/styles/index.css"

const IndexPage = () => (
  <>
    <Seo title="Welcome!" />

    <Layout
      title="index.tsx - Samuele's portoflio - Samuele Studio Code"
      style={{
        padding: "1rem",
        flex: 1,
        display: "grid",
        placeItems: "center",
      }}
    >
      <p style={{ fontSize: "3rem" }}>
        <span>
          Hi, I'm{" "}
          <strong style={{ color: "var(--primary-color)" }}>Samuele</strong>,
        </span>
        <br />
        <span>I'm a web developer.</span>
        <br />
        <br />
        <span style={{ fontSize: "2rem" }}>
          Try clicking around in this simulated IDE to find out more about me!
        </span>
      </p>
    </Layout>
  </>
)

export default IndexPage
