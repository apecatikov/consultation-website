import React from 'react'
import { css } from 'emotion'

// variant: left/right
// color: main (blue), alt (purple)
const LargeMessage = ({
  color,
  variant,
  icon,
  children,
  style,
  ...restProps
}) => {
  const wrapperStyle = css`
    color: ${color};
    padding: 35px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }

    @media screen and (max-width: 566px) {
      padding-left: 0;
      padding-right: 0;
    }
  `

  const iconWrapperStyle = () => {
    return css`
      flex: 0 0 175px;
      order: ${variant === 'left' ? 0 : 1};
      margin: ${variant === 'left' ? '0 40px 0 0' : '0 0 0 40px'};

      @media screen and (max-width: 767px) {
        margin: 0 40px 70px;
        order: 0;

        svg {
          width: 100%;
        }
      }

      @media screen and (max-width: 566px) {
        margin-left: 20px;
        margin-right: 20px;
      }
    `
  }

  const h3Styles = css`
    font-weight: 300;
    text-transform: uppercase;
    font-size: 30px;
    line-height: 1.2;
    letter-spacing: -0.03em;
  `

  return (
    <div className={wrapperStyle} style={style} {...restProps}>
      {/* TODO: can replace id={id} with something liek {...props} to prevent writing all of them one by one */}
      {icon && <div className={iconWrapperStyle()}>{icon()}</div>}
      <h3 className={h3Styles}>{children}</h3>
    </div>
  )
}

export default LargeMessage
