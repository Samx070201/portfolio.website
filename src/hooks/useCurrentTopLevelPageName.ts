import { useMemo } from "react"
import type { AvailablePages } from "@common/types"

/**
 * Gets the name of the root pathname page.
 *
 * @returns the name of the page as a string.
 */
export function useCurrentTopLevelPageName(): AvailablePages {
  const currentPage = useMemo(() => {
    const splitPathName = window.location.pathname.split("/")

    return splitPathName[1]
  }, [])

  return currentPage as AvailablePages
}
