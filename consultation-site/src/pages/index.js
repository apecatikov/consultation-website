import React from 'react'
import { Scroller, scrollInitialState } from 'react-skroll'
import styled from '@emotion/styled'

import SEO from '../components/seo'
import Layout, { sections } from '../layouts/layout'
import LargeMessage from '../components/large-message'
import Services from '../icons/services'

const ContentSection = styled.section`
  min-height: 100vh;
  padding-top: 146px;
  display: flex;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: -40%;
    transform: rotate(-20deg);
    height: 1000px;
    width: 1500px;
    z-index: 1;
    background: rgba(55, 80, 128, 0.28);
  }
`

class IndexPage extends React.Component {
  constructor() {
    super()

    this.state = {
      scroll: scrollInitialState,
    }
  }

  render() {
    const { scroll } = this.state

    return (
      <Layout
        scroll={scroll}
        onNavClick={childStartYPos =>
          this.scroll.scrollToPosition(childStartYPos)
        }
      >
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Scroller
          scrollRef={ref => (this.scroll = ref)}
          autoScroll={true}
          autoFrame={true}
          onScrollChange={scroll => this.setState({ scroll })}
        >
          {sections.map(({ name, content }, index) => (
            <ContentSection key={index} name={name}>
              <LargeMessage variant="right" icon={Services}>
                {content}
              </LargeMessage>
            </ContentSection>
          ))}
        </Scroller>
      </Layout>
    )
  }
}

export default IndexPage
