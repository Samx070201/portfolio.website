import styled from "styled-components"

import "/src/styles/hide-scrollbar.css"

const CustomScrollBarContainer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 10px;
`

const CustomScrollBar = styled.div`
  height: 50%; // To be calculated. This is a placeholder for easier styling.
  width: 90%;
  margin: auto;
  border-radius: 25px;
  background-color: lightgray; // Placeholder color.
`

const ScrollBar = () => {
  return (
    <CustomScrollBarContainer>
      <CustomScrollBar />
    </CustomScrollBarContainer>
  )
}

export default ScrollBar
