import HtmlNode from "components/HtmlNode"
import styled from "styled-components"
import { Layout } from "../components/layout"
import Seo from "../components/Seo"

const Content = styled(Layout)`
  flex: 1;
  padding: 0 max(50px, 20%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 2em;
`

const Paragraph = styled.code`
  margin: 0;
  font-size: 2em;

  :first-child {
    padding-top: 1em;
  }

  :last-child {
    padding-bottom: 1em;
  }
`

const Highlight = styled.strong`
  color: var(--primary-color);
`

const SkillsList = styled.ul`
  list-style-type: none;
  margin: 0.5em 0 0 0;
  padding-left: 0.5em;

  li {
    display: flex;
    align-items: center;
  }

  li::before {
    content: "•";
    margin-right: 0.5em;
  }
`

interface SkillStyleProps {
  color?: string
}

const Skill = styled.span<SkillStyleProps>`
  color: ${({ color }) => color};
  font-weight: bold;
`

const HomePage = () => (
  <>
    <Seo title="Home" />

    <Content title="home.html - Samuele's portoflio - Samuele Studio Code">
      <Paragraph>
        <HtmlNode tag="p">
          <HtmlNode tag="span">
            Extremely passionate about developing application and websites since
            the age of 13.
          </HtmlNode>
          <HtmlNode tag="br" selfClosed />
          <HtmlNode tag="span">
            More than 3 years of experience professionally developing{" "}
            <Highlight>front-end</Highlight>, especially with{" "}
            <Highlight>React</Highlight>.
          </HtmlNode>
          <HtmlNode tag="br" selfClosed />
          <HtmlNode tag="span">
            I take great pride in building beautifully looking web pages and
            applications. Both as a hobbyist as well as a professional.
          </HtmlNode>
          <HtmlNode tag="br" selfClosed />
          <HtmlNode tag="span">
            Always on the lookout for new challenges and learning opportunities
            that can push my career even further.
          </HtmlNode>
        </HtmlNode>
      </Paragraph>
      <Paragraph>
        <HtmlNode tag="p">
          <span>Main areas of competence and skills:</span>
          <SkillsList>
            <li>
              <span>
                <Skill color="#08d9ff">React</Skill> v17.0+
              </span>
            </li>
            <li>
              <span>
                <Skill color="#e64c18">HTML</Skill> 5
              </span>
            </li>
            <li>
              <span>
                <Skill color="#1171bd">CSS</Skill> 3
              </span>
            </li>
            <li>
              <span>
                <Skill color="#edda4f">ECMAScript</Skill> 2021+ (
                <Skill color="#edda4f">JavaScript</Skill>)
              </span>
            </li>
            <li>
              <span>
                <Skill color="#007acc">Typescript</Skill> 4+
              </span>
            </li>
            <li>
              <span>
                <Skill color="#5027d5">.NET</Skill> 6
              </span>
            </li>
            <li>
              <span>
                <Skill color="#953dac">C#</Skill> 10
              </span>
            </li>
            <li>
              <Skill color="#337bb6">Microsoft Azure</Skill>
            </li>
            <li>
              <Skill>SQL</Skill>
            </li>
          </SkillsList>
        </HtmlNode>
      </Paragraph>
    </Content>
  </>
)

export default HomePage
