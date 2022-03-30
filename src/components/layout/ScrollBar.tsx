import styled from "styled-components"

interface ScrollBarContainerStyleProps {
  considerTopExplorer: boolean
}

const ScrollBarContainer = styled.aside<ScrollBarContainerStyleProps>`
  position: fixed;
  right: 0;
  bottom: var(--footer-height);
  height: ${({ considerTopExplorer }) =>
    considerTopExplorer
      ? `calc(
    100vh - var(--nav-menu-height) - var(--footer-height) -
      var(--top-explorer-height)
  )`
      : `calc(100vh - var(--nav-menu-height) - var(--footer-height))`};
  width: var(--scrollbar-width);
  background-color: transparent;
  border-left: 1px solid #464545;
  overflow: hidden;
`

interface DraggableStyleProps {
  draggableHeight: number | string
  draggableTopOffset: number | string
}

const Draggable = styled.div.attrs<DraggableStyleProps>(
  ({ draggableTopOffset }) => ({
    style: {
      top: draggableTopOffset,
    },
  })
)<DraggableStyleProps>`
  position: relative;
  width: var(--scrollbar-width);
  background-color: var(--scrollbar-bg-color);
  opacity: 0.7;
  cursor: default;

  height: ${({ draggableHeight }) => draggableHeight};

  :hover {
    background-color: var(--scrollbar-bg-color-hover);
    opacity: 0.9;
  }
`

interface ScrollBarProps {
  draggableHeight: number | string
  draggableTopOffset: number | string
  considerTopExplorer: boolean
}

const ScrollBar = ({
  draggableHeight,
  draggableTopOffset,
  considerTopExplorer,
}: ScrollBarProps) => (
  <ScrollBarContainer considerTopExplorer={considerTopExplorer}>
    <Draggable
      // onPointerMove={({ clientY, buttons }) => {
      //   if (buttons !== 1) {
      //     return
      //   }

      //   console.log(clientY)
      // }}
      draggableHeight={draggableHeight}
      draggableTopOffset={draggableTopOffset}
    />
  </ScrollBarContainer>
)

export default ScrollBar
