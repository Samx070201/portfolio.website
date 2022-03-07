import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import "/src/styles/index.css"

const IndexPage = () => (
  <Layout style={{ padding: "1rem" }}>
    <Seo title="Home" />
    <Link to="/page-2">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
