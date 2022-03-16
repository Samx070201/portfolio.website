import { Layout } from "../components/layout"
import Seo from "../components/Seo"

const AboutPage = () => (
  <>
    <Seo title="About" />

    <Layout
      title="about.tsx"
      style={{
        padding: "1rem",
        flex: 1,
        display: "grid",
        placeItems: "center",
      }}
    >
      <p style={{ fontSize: "3rem" }}>
        <span>About</span>
      </p>
    </Layout>
  </>
)

export default AboutPage
