import { Link } from 'gatsby'
// import Scrollchor from 'react-scrollchor'
import PropTypes from 'prop-types'
import React from 'react'

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
          <h1 style={{ margin: 0 /* removes excess margin below the text */ }}>
            {/* <Scrollchor to="#test" animate={{ offset: -100 }}>
          test
        </Scrollchor>
        <Scrollchor to="#test2" animate={{ offset: -100 }}>
          test2
        </Scrollchor>
        <Scrollchor to="#test3" animate={{ offset: -100 }}>
          test3
        </Scrollchor>
        <Scrollchor to="#test4" animate={{ offset: -100 }}>
          test4
        </Scrollchor> */}
            {/* <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`, // removes the underline from the link
          }}
        >
          {siteTitle}
        </Link> */}
          </h1>
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
