import { useEffect, useState } from "react";

/**
 * Checks whether the passed ref is scrollable
 * 
 * @returns true or false.
 */
export function useIsScrollable(ref: HTMLElement | null): boolean {
    const [shouldShow, setShouldShow] = useState(false)

    useEffect(() => {
        const isScrollable = () => {
            if(ref) {
                setShouldShow(ref.scrollHeight > ref.clientHeight)
            }
        }

        isScrollable()

        window.addEventListener("resize", isScrollable)

        return () => window.removeEventListener("resize", isScrollable)
    }, [ref])

    return ref ? shouldShow : false
}