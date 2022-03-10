import { useMemo } from "react";

/**
 * Gets the name of the currently shown page.
 * 
 * @returns the name of the page as a string.
 */
export function useCurrentPageName(): string {
    const currentPage = useMemo(() => window.location.pathname, [])

    return currentPage
}