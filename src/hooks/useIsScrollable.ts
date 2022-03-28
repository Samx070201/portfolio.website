import { useEffect, useState } from "react";

/**
 * Checks whether the passed ref is scrollable
 * 
 * @returns true or false.
 */
export function useIsScrollable(ref: HTMLElement | null): boolean {
    const [shouldShow, setShouldShow] = useState(false)

    useEffect(() => {
        if(ref) {
            setShouldShow(ref.scrollHeight > ref.clientHeight)
        }
    })

    return ref ? shouldShow : false
}