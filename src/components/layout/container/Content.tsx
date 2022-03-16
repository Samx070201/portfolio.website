import { CSSProperties, ReactNode } from "react"
import styled from "styled-components"

const Section = styled.section`
  overflow-y: scroll;
  scroll-behavior: smooth;
`

interface ContentProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

const Content = ({ children, className, style }: ContentProps) => {
  return (
    <Section className={className} style={style}>
      {children}
    </Section>
  )
}

export default Content
