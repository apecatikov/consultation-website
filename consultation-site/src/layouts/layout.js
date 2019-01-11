import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

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
  { name: 'Services', content: loremIpsum, order: 1 },
  { name: 'Team', content: loremIpsum, order: 2 },
  { name: 'Dashboard', content: loremIpsum, order: 4 },
  { name: 'Contact Us', content: loremIpsum, order: 5 },
]

const PageWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: linear-gradient(67.86deg, #101730 -3.34%, #375080 92.35%);
  z-index: 0;
`

const Logo = styled.div`
  width: 139px;
  height: 139px;
  flex: 0 0 139px;
  border-radius: 50%;
  border: 3px solid #fff;
  color: #fff;
  order: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`

const Menu = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 15px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  z-index: 2;
`

const MenuItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  height: 146px;
  width: 139px;
  margin: 0 3px;
  color: #f4f4f4;
  position: relative;
  font-size: 14px;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  cursor: pointer;
  order: ${p => p.order};

  &::before {
    opacity: ${p => (p.active ? 1 : 0)};
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(141.97deg, #a5f282 2.2%, #008d3c 108.76%);
  }

  &:hover::before {
    opacity: 1;
    background: linear-gradient(353.61deg, #d13eb9 9.42%, #e99c4a 97.97%);
  }
`

const Navigation = ({ scroll, onNavClick }) => {
  if (scroll)
    return (
      <Menu>
        <Logo>Logo</Logo>
        {scroll.children.map((child, i) => (
          <MenuItem
            key={i}
            onClick={() => onNavClick(child.start)}
            spy={true}
            active={child.active}
            order={sections[i].order}
          >
            {sections[i].name}
          </MenuItem>
        ))}
      </Menu>
    )

  return null
}

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

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
          <PageWrapper>
            {/* {console.log(data)}
            <Header siteTitle={data.site.siteMetadata.title} /> */}
            <Navigation
              scroll={scroll}
              onNavClick={childStartYPos => onNavClick(childStartYPos)}
            />
            {this.props.children}
            <footer />
          </PageWrapper>
        )}
      />
    )
  }
}

export default Layout
