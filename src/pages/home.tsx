import { Layout } from "../components/layout"
import Seo from "../components/Seo"

import "/src/styles/index.css"

const HomePage = () => (
  <>
    <Seo title="Home" />

    <Layout
      title="home.html - Samuele's portoflio - Samuele Studio Code"
      style={{
        padding: "1rem",
        flex: 1,
        display: "grid",
        placeItems: "center",
      }}
    >
      <p style={{ fontSize: "3rem" }}>
        <span>Home route test</span>
      </p>
    </Layout>
  </>
)

export default HomePage
