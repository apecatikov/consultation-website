import React from 'react'
import { Scroller, scrollInitialState } from 'react-skroll'

import Layout from '../layouts/layout'
import SEO from '../components/seo'
import LargeMessage from '../components/large-message'

import Skully from '../icons/skully'

const loremIpsum = (
  <div>
    <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. Donec
    faucibus nibh vitae metus luctus condimentum. <b>Ut ut</b> mauris tincidunt,
    luctus justo nec, commodo nisl. Sed cursus tellus vitae egestas ullamcorper.
  </div>
)

const sections = [
  { name: 'Services', content: loremIpsum },
  { name: 'Team', content: loremIpsum },
  { name: 'Dashboard', content: loremIpsum },
  { name: 'Contact Us', content: loremIpsum },
]

const Navigation = ({ scroll, onNavClick }) => {
  if (scroll)
    return (
      <nav>
        {scroll.children.map((child, i) => (
          <a key={i} onClick={() => onNavClick(child.start)}>
            <b>{sections[i].name}</b>
          </a>
        ))}
      </nav>
    )

  return null
}

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
      <div>
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <div
            style={{
              position: 'fixed',
              left: '0',
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(67.86deg, #101730 -3.34%, #375080 92.35%)',
            }}
          >
            <Navigation
              scroll={scroll}
              onNavClick={childStartYPos =>
                this.scroll.scrollToPosition(childStartYPos)
              }
            />
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
                    // background:
                    //   'linear-gradient(67.86deg, #101730 -3.34%, #375080 92.35%)',
                  }}
                >
                  <LargeMessage color="main" variant="right" icon={Skully}>
                    {content}
                  </LargeMessage>
                </section>
              ))}
            </Scroller>
          </div>
        </Layout>
      </div>
    )
  }
}

export default IndexPage
