import type { GatsbySSR } from "gatsby"
import { HistoryProvider } from "./src/context/HistoryContext"

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => (
  <HistoryProvider>{element}</HistoryProvider>
)
