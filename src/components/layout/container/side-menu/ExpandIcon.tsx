import styled from "styled-components"

interface IconStyleProps {
  collapse: boolean
}

const Icon = styled.span.attrs(() => ({
  className: "material-icons",
}))<IconStyleProps>`
  transform: ${({ collapse }) =>
    collapse ? "rotate(0deg)" : "rotate(-90deg)"};
`

interface ExpandIconProps {
  collapse: boolean
}

const ExpandIcon = ({ collapse }: ExpandIconProps) => {
  return <Icon collapse={collapse}>expand_more</Icon>
}

export default ExpandIcon
