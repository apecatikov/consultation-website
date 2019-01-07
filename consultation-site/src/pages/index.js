import React from 'react'
import { Link } from 'gatsby'
import { Scroller, scrollInitialState } from 'react-skroll'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import LargeMessage from '../components/large-message'
import ContentSection from '../components/content-section'

import Skully from '../icons/skully'

class IndexPage extends React.Component {
  constructor() {
    super()

    this.state = {
      scroll: scrollInitialState,
    }
  }

  render() {
    return (
      <>
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <Scroller
            scrollRef={ref => (this.scroll = ref)}
            autoScroll={true}
            autoFrame={true}
            onScrollChange={scroll => this.setState({ scroll })}
          >
            <ContentSection>
              <LargeMessage
                id="test"
                color="main"
                variant="right"
                icon={Skully}
              >
                <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit.
                Donec faucibus nibh vitae metus luctus condimentum. <b>Ut ut</b>{' '}
                mauris tincidunt, luctus justo nec, commodo nisl. Sed cursus
                tellus vitae egestas ullamcorper.
              </LargeMessage>
            </ContentSection>
            <ContentSection>
              <LargeMessage id="test2" color="alt" variant="left" icon={Skully}>
                <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit.
                Donec faucibus nibh vitae metus luctus condimentum. <b>Ut ut</b>{' '}
                mauris tincidunt, luctus justo nec, commodo nisl. Sed cursus
                tellus vitae egestas ullamcorper.
              </LargeMessage>
            </ContentSection>
            <ContentSection>
              <LargeMessage
                id="test3"
                color="main"
                variant="right"
                icon={Skully}
              >
                <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit.
                Donec faucibus nibh vitae metus luctus condimentum. <b>Ut ut</b>{' '}
                mauris tincidunt, luctus justo nec, commodo nisl. Sed cursus
                tellus vitae egestas ullamcorper.
              </LargeMessage>
            </ContentSection>
            <ContentSection>
              <LargeMessage id="test4" color="alt" variant="left" icon={Skully}>
                <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit.
                Donec faucibus nibh vitae metus luctus condimentum. <b>Ut ut</b>{' '}
                mauris tincidunt, luctus justo nec, commodo nisl. Sed cursus
                tellus vitae egestas ullamcorper.
              </LargeMessage>
            </ContentSection>
          </Scroller>
          <Link to="/page-2/">Go to page 2</Link>
        </Layout>
      </>
    )
  }
}

export default IndexPage
