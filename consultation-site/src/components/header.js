import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

const titleStyle = css`
  padding: 1.45rem 1.0875rem;
`

// TODO: replace with Navigation component?
class Header extends React.Component {
  static defaultProps = {
    siteTitle: ``,
  }

  static propTypes = {
    siteTitle: PropTypes.string,
  }

  render() {
    return (
      <div className={titleStyle}>
        <h1 style={{ margin: 0 /* removes excess margin below the text */ }}>
          {this.props.siteTitle}
        </h1>
      </div>
    )
  }
}

export default Header
