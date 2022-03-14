import { useEffect } from "react";

export function useClickedOutside(ref: HTMLElement | null | undefined, fn: () => void, ignoreTargets?: Node[]): void {
    useEffect(() => {
        if(ref) {
            const onClick = (event: MouseEvent) => {
                if(!ignoreTargets?.some(ignoreTarget => event.target === ignoreTarget || ignoreTarget.contains(event.target as Node)) && event.target !== ref && event.target instanceof Node && !ref.contains(event.target as Node)) {
                    fn()
                }
            }
    
            document.addEventListener("click", onClick)
    
            return () => document.removeEventListener("click", onClick)
        }

    }, [ref, fn, ignoreTargets])
}