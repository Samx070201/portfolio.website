import styled from 'styled-components'

import '/src/styles/hide-scrollbar.css'

const CustomScrollBarContainer = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 10px;
`

const CustomScrollBar = styled.span`
    display: inline-block;
    height: 50%;
    width: 90%;
    border-radius: 25px;
    background-color: lightgray;
`

const ScrollBar = () => {
    return <CustomScrollBarContainer>
        <CustomScrollBar />
    </CustomScrollBarContainer>
}

export default ScrollBar