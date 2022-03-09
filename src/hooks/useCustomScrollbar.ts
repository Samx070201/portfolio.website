import { useEffect, useState } from "react";

/**
 * Checks whether the entire document is scrollable
 * 
 * @returns true or false.
 */
export function useIsScrollable(): boolean {
    const [shouldShow, setShouldShow] = useState(false)

    useEffect(() => {
        setShouldShow(document.body.scrollHeight > window.innerHeight)
    })

    return shouldShow
}