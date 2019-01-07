import React from 'react'
import { css } from 'emotion'

class ContentSection extends React.Component {
  render() {
    const { children, ...restProps } = this.props

    const sectionStyle = css`
      display: flex;
      min-height: 100vh;
    `
    return (
      <section className={sectionStyle} {...restProps}>
        {children}
      </section>
    )
  }
}

export default ContentSection
