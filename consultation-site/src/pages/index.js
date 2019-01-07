import React from 'react'
import { Link } from 'gatsby'
import { Scroller, scrollInitialState } from 'react-skroll'
import { css } from 'emotion'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import LargeMessage from '../components/large-message'
import ContentSection from '../components/content-section'

import Skully from '../icons/skully'

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus nibh vitae metus luctus condimentum. Ut ut mauris tincidunt, luctus justo nec, commodo nisl. Sed cursus tellus vitae egestas ullamcorper.'

const sections = [
  { name: 'Services', content: loremIpsum },
  { name: 'About Us', content: loremIpsum },
  { name: 'Contact Us', content: loremIpsum },
]

class IndexPage extends React.Component {
  constructor() {
    super()

    this.state = {
      scroll: scrollInitialState,
    }
  }

  render() {
    const { scroll } = this.state

    let navigation

    if (scroll)
      navigation = (
        <nav>
          {scroll.children.map((child, i) => (
            <a
              key={i}
              onClick={() => this.scroll.scrollToPosition(child.start)}
            >
              {sections[i].name}
            </a>
          ))}
        </nav>
      )

    return (
      <>
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          {navigation}
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
                style={{ minHeight: '100vh', display: 'flex' }}
              >
                <LargeMessage color="main" variant="right" icon={Skully}>
                  {content}
                </LargeMessage>
              </section>
            ))}
          </Scroller>
        </Layout>
      </>
    )
  }
}

export default IndexPage
