import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Title = styled.h1`
  margin: 0;
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
    return <Title>{this.props.siteTitle}</Title>
  }
}

export default Header
