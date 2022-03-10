import { Layout } from "../components/layout"
import Seo from "../components/Seo"

import "/src/styles/index.css"

const IndexPage = () => (
  <>
    <Seo title="Home" />

    <Layout title="home.tsx" style={{ padding: "1rem" }}>
      <span>home</span>
    </Layout>
  </>
)

export default IndexPage
