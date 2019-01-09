import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { css } from 'emotion'

import Header from '../components/header'
import './layout.css'

export const loremIpsum = (
  <div>
    <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. Donec
    faucibus nibh vitae metus luctus condimentum. <b>Ut ut</b> mauris tincidunt,
    luctus justo nec, commodo nisl. Sed cursus tellus vitae egestas ullamcorper.
  </div>
)

export const sections = [
  { name: 'Services', content: loremIpsum },
  { name: 'Team', content: loremIpsum },
  { name: 'Dashboard', content: loremIpsum },
  { name: 'Contact Us', content: loremIpsum },
]

const pageWrapperStyle = css`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(67.86deg, #101730 -3.34%, #375080 92.35%);
`

const menuItemWrapperStyle = css`
  display: flex;
  flexdirection: row;
  justify-content: center;
`

const menuItemStyle = css`
  padding: 0.2rem 0.2rem;
  color: #f4f4f4;
`

// TODO: consider changing <a> elements for buttons -> see href warning
const Navigation = ({ scroll, onNavClick }) => {
  if (scroll)
    return (
      <nav className={menuItemWrapperStyle}>
        {scroll.children.map((child, i) => (
          // eslint-disable-next-line
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

class Layout extends React.Component {
  render() {
    const { scroll, onNavClick } = this.props

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
          <div className={pageWrapperStyle}>
            {console.log(data)}
            <Header siteTitle={data.site.siteMetadata.title} />
            <Navigation
              scroll={scroll}
              onNavClick={childStartYPos => onNavClick(childStartYPos)}
            />
            {this.props.children}
            <footer />
          </div>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
