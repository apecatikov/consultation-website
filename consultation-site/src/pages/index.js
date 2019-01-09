import React from 'react'
import { Scroller, scrollInitialState } from 'react-skroll'
import { css } from 'emotion'

import Layout from '../layouts/layout'
import SEO from '../components/seo'
import LargeMessage from '../components/large-message'

import Services from '../icons/services'

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

const menuItemWrapperStyle = css`
  display: flex;
  flexdirection: row;
  justify-content: center;
`

const menuItemStyle = css`
  padding: 0.2rem 0.2rem;
  color: #f4f4f4;
`

const pageWrapperStyle = css`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(67.86deg, #101730 -3.34%, #375080 92.35%);
`

const Navigation = ({ scroll, onNavClick }) => {
  if (scroll)
    return (
      <nav className={menuItemWrapperStyle}>
        {scroll.children.map((child, i) => (
          <a
            className={menuItemStyle}
            key={i}
            onClick={() => onNavClick(child.start)}
          >
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
          <div className={pageWrapperStyle}>
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
                  }}
                >
                  <LargeMessage color="#F4F4F4" variant="right" icon={Services}>
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
