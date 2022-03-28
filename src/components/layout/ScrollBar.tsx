import styled from "styled-components"

const ScrollBarContainer = styled.aside`
  position: absolute;
  right: 0;
  height: 100%;
  width: 15px;
  background-color: red;
`

const ScrollBar = () => {
  return <ScrollBarContainer></ScrollBarContainer>
}

export default ScrollBar
