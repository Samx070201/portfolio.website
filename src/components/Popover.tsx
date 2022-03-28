import {
  useEffect,
  useCallback,
  CSSProperties,
  ReactNode,
  useMemo,
  useState,
} from "react"
import { Placement, Rect } from "@popperjs/core"
import { ArrowModifier } from "@popperjs/core/lib/modifiers/arrow"
import { OffsetModifier } from "@popperjs/core/lib/modifiers/offset"
import { usePopper } from "react-popper"
import styled from "styled-components"
import { useClickedOutside } from "@hooks"

interface BaseStyleProps {
  show?: boolean
}

const Base = styled.div<BaseStyleProps>`
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.6);
  z-index: 999;
`

interface ArrowStyleProps {
  show?: boolean
}

const Arrow = styled.div<ArrowStyleProps>`
  :before {
    visibility: ${({ show }) => (show ? "visible" : "hidden")} !important;
  }
`

type OffsetFunction = (arg0: {
  popper: Rect
  reference: Rect
  placement: Placement
}) => [number | null | undefined, number | null | undefined]

interface PopoverProps<TParentRef extends HTMLElement> {
  parentRef: TParentRef | null
  children: ReactNode

  arrow?: boolean
  placement?: Placement
  offset?: OffsetFunction | [number, number]
  show?: boolean
  showOnHover?: boolean
  className?: string
  style?: CSSProperties

  onClickedOutside?: () => void
}

const Popover = <TParentRef extends HTMLElement>({
  onClickedOutside,
  parentRef,
  children,
  show = true,
  showOnHover = false,
  arrow,
  placement,
  offset,
  className,
  style,
}: PopoverProps<TParentRef>) => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null)

  const [internalShow, setInternalShow] = useState<boolean | null>(
    showOnHover ? false : null
  )

  const offsetModifier = useMemo<Partial<OffsetModifier>>(
    () => ({
      name: "offset",
      options: {
        offset: offset ?? [0, 0],
      },
    }),
    [offset]
  )

  const arrowModifier = useMemo<Partial<ArrowModifier>>(
    () => ({
      name: "arrow",
      options: {
        element: arrowElement,
      },
    }),
    [arrowElement]
  )

  const { styles, attributes } = usePopper(parentRef, popperElement, {
    placement: placement,
    modifiers: arrow ? [arrowModifier, offsetModifier] : [offsetModifier],
  })

  const onMouseEnter = useCallback(
    () => setInternalShow(true),
    [setInternalShow]
  )
  const onMouseLeave = useCallback(
    () => setInternalShow(false),
    [setInternalShow]
  )

  useClickedOutside(
    popperElement,
    onClickedOutside,
    parentRef ? [parentRef] : []
  )

  useEffect(() => {
    if (showOnHover && parentRef) {
      parentRef.addEventListener("mouseenter", onMouseEnter)
      parentRef.addEventListener("mouseleave", onMouseLeave)

      return () => {
        parentRef.removeEventListener("mouseenter", onMouseEnter)
        parentRef.removeEventListener("mouseleave", onMouseLeave)
      }
    }
  }, [parentRef])

  return (
    <Base
      id="tooltip"
      role="tooltip"
      ref={setPopperElement}
      show={internalShow ?? show}
      className={className}
      style={{ ...style, ...styles.popper }}
      {...attributes.popper}
    >
      {children}
      {arrow && (
        <Arrow
          id="arrow"
          ref={setArrowElement}
          show={internalShow ?? show}
          style={styles.arrow}
          data-popper-arrow
        />
      )}
    </Base>
  )
}

export default Popover
