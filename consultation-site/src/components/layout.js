import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

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
            <div
              style={{
                padding: `100px 1.0875rem 1.45rem`,
              }}
            >
              {this.props.children}
              <footer />
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
