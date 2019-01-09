import { Link } from 'gatsby'
// import Scrollchor from 'react-scrollchor'
import PropTypes from 'prop-types'
import React from 'react'

// TODO: replace with Navigation component?
class Header extends React.Component {
  render() {
    return (
      <div
        style={{
          position: `fixed`,
          top: `0`,
          width: `100%`,
          background: `rgba(102, 51, 153, 0.98)`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            padding: `1.45rem 1.0875rem`, //adds space surrounding the text
          }}
        >
          <h1
            style={{ margin: 0 /* removes excess margin below the text */ }}
          />
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
