import { CSSProperties, ReactNode } from "react"
import styled from "styled-components"

const Tag = styled.span`
  display: block;
  color: var(--primary-color-dark);
`

const Content = styled.span`
  display: block;
  padding-left: 1em;
`

interface HtmlNodeProps {
  tag: string

  selfClosed?: boolean
  children?: ReactNode
  className?: string
  style?: CSSProperties
}

const HtmlNode = ({
  tag,
  selfClosed,
  children,
  className,
  style,
}: HtmlNodeProps) => {
  return selfClosed ? (
    <Tag>&lt;{tag} /&gt;</Tag>
  ) : (
    <div className={className} style={style}>
      <Tag>&lt;{tag}&gt;</Tag>
      <Content>{children}</Content>
      <Tag>&lt;/{tag}&gt;</Tag>
    </div>
  )
}

export default HtmlNode
