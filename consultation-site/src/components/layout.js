import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Scroller, scrollInitialState } from 'react-skroll'

import Header from './header'
import './layout.css'

const colors = [
  { name: 'Blue', color: '#215cf4' },
  { name: 'Cyan', color: '#0ccabf' },
  { name: 'Green', color: '#4ac36c' },
  { name: 'Yellow', color: '#e0be18' },
  { name: 'Red', color: '#e91e4f' },
  { name: 'Magenta', color: '#ca28e4' },
]

class Layout extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                description
                author
              }
            }
          }
        `}
        render={data => (
          <>
            {/* <Header scroll={scroll} siteTitle={data.site.siteMetadata.title} /> */}
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `100px 1.0875rem 1.45rem`,
              }}
            >
              {this.props.children}
              <footer>
                © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
