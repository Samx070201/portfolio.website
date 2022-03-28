import { createContext, useState, useCallback, useMemo, ReactNode } from "react"
import { AvailablePages } from "@common/types"

interface PagesHistory {
  visitedPages: AvailablePages[]
  addPage: (page: AvailablePages) => AvailablePages[]
  removePageAt: (index: number) => AvailablePages[]
}

const defaultPagesHistoryContext: PagesHistory = {
  visitedPages: [],
  addPage: () => {
    console.warn("default implementation of addPage.")

    return []
  },
  removePageAt: () => {
    console.warn("default implementation of removePageAt.")

    return []
  },
}

const HistoryContext = createContext<PagesHistory>(defaultPagesHistoryContext)

interface HistoryProviderProps {
  children: ReactNode
}

const HistoryProvider = ({ children }: HistoryProviderProps) => {
  const [visitedPages, setVisitedPages] = useState<AvailablePages[]>([])

  const addPage = useCallback(
    (page: AvailablePages) => {
      const newVisitedPages = [...visitedPages]

      if (!visitedPages.some(vp => vp === page)) {
        newVisitedPages.push(page)

        setVisitedPages(newVisitedPages)
      }

      return newVisitedPages
    },
    [visitedPages, setVisitedPages]
  )

  const removePageAt = useCallback(
    (index: number) => {
      const newVisitedPages = [...visitedPages]

      if (index >= 0 && index < newVisitedPages.length) {
        newVisitedPages.splice(index, 1)

        setVisitedPages(newVisitedPages)
      }

      return newVisitedPages
    },
    [visitedPages, setVisitedPages]
  )

  const providerValues = useMemo<PagesHistory>(
    () => ({
      visitedPages,
      addPage,
      removePageAt,
    }),
    [visitedPages, addPage, removePageAt]
  )

  return (
    <HistoryContext.Provider value={providerValues}>
      {children}
    </HistoryContext.Provider>
  )
}

export { HistoryProvider }

export default HistoryContext
