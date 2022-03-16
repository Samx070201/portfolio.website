import { Layout } from "../components/layout"
import Seo from "../components/Seo"

const ContactsPage = () => (
  <>
    <Seo title="Contacts" />

    <Layout
      title="contacts.tsx"
      style={{
        padding: "1rem",
        flex: 1,
        display: "grid",
        placeItems: "center",
      }}
    >
      <p style={{ fontSize: "3rem" }}>
        <span>Contacts</span>
      </p>
    </Layout>
  </>
)

export default ContactsPage
