import { Link } from "gatsby"
import styled from "styled-components"

const Foreground = styled.div`
  z-index: 999;
`

const CenterHorizontally = styled(Foreground)`
  left: 50%;
  transform: translateX(-50%);
`

const CenterVertically = styled(Foreground)`
  top: 50%;
  transform: translateY(-50%);
`

const Navigation = () => {
  return (
    <>
      <CenterHorizontally style={{ position: "fixed", top: "1rem" }}>
        <Link to="/">
          <span className="material-icons">home</span>
        </Link>
      </CenterHorizontally>
      <CenterHorizontally style={{ position: "fixed", bottom: "1rem" }}>
        <Link to="/about">
          <span className="material-icons">question_mark</span>
        </Link>
      </CenterHorizontally>
      <CenterVertically style={{ position: "fixed", left: "1rem" }}>
        <Link to="/contact">
          <span className="material-icons">call</span>
        </Link>
      </CenterVertically>
      <CenterVertically style={{ position: "fixed", right: "1rem" }}>
        <Link to="/work">
          <span className="material-icons">work</span>
        </Link>
      </CenterVertically>
    </>
  )
}

export default Navigation
