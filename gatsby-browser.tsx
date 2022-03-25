import type { GatsbyBrowser } from "gatsby"
import { HistoryProvider } from "./src/context/HistoryContext"

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => <HistoryProvider>{element}</HistoryProvider>
