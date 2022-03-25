import { createContext, useState, useCallback, useMemo, ReactNode } from "react"
import { AvailablePages } from "@common/types"

interface PagesHistory {
  visitedPages: AvailablePages[]
  addPage: (page: AvailablePages) => void
  removePageAt: (index: number) => void
}

const defaultPagesHistoryContext: PagesHistory = {
  visitedPages: [],
  addPage: () => {
    console.warn("default implementation of addPage.")
  },
  removePageAt: () => {
    console.warn("default implementation of removePageAt.")
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
      setVisitedPages(prev => {
        if (!prev.some(vp => vp === page)) {
          return [...prev, page]
        }

        return prev
      })
    },
    [setVisitedPages]
  )

  const removePageAt = useCallback(
    (index: number) => {
      setVisitedPages(prev => {
        const newVisitedPages = [...prev]
        newVisitedPages.splice(index, 1)

        return newVisitedPages
      })
    },
    [setVisitedPages]
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
