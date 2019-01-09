import React from 'react'
import { Scroller, scrollInitialState } from 'react-skroll'
import { css } from 'emotion'

import Layout, { loremIpsum, sections } from '../layouts/layout'

import SEO from '../components/seo'
import LargeMessage from '../components/large-message'

import Services from '../icons/services'

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
            <section
              key={index}
              name={name}
              style={{
                minHeight: '100vh',
                display: 'flex',
              }}
            >
              <LargeMessage color="#F4F4F4" variant="right" icon={Services}>
                {content}
              </LargeMessage>
            </section>
          ))}
        </Scroller>
      </Layout>
    )
  }
}

export default IndexPage
