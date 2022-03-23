import { useMemo } from "react"
import type { AvailablePages } from "@common/types"

/**
 * Gets the name of the currently shown page.
 *
 * @returns the name of the page as a string.
 */
export function useCurrentPageName(): AvailablePages {
  const currentPage = useMemo(() => {
    const splitPathName = window.location.pathname.split("/")

    return splitPathName[splitPathName.length - 1]
  }, [])

  return currentPage as AvailablePages
}
