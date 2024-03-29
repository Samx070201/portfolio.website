import { Layout } from "../components/layout"
import Seo from "../components/Seo"

const PortfolioPage = () => (
  <>
    <Seo title="Portfolio" />

    <Layout
      title="portfolio.html - Samuele's portoflio - Samuele Studio Code"
      style={{
        padding: "1rem",
        flex: 1,
        display: "grid",
        placeItems: "center",
      }}
    >
      <p style={{ fontSize: "3rem" }}>
        <span>Portfolio</span>
      </p>
    </Layout>
  </>
)

export default PortfolioPage
