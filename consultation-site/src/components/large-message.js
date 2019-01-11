import React from 'react'
import styled from '@emotion/styled'

// variant: left/right
const MessageBlock = styled.div`
  color: ${props => props.color || '#f4f4f4'};
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

const Message = styled.h3`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 30px;
  line-height: 1.2;
  letter-spacing: -0.03em;
`

const Icon = styled.div`
  flex: 0 0 175px;
  order: ${props => (props.variant === 'left' ? 0 : 1)};
  margin: ${props => (props.variant === 'left' ? '0 40px 0 0' : '0 0 0 40px')};

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

const LargeMessage = ({ color, variant, icon, children, style }) => {
  return (
    <MessageBlock style={style}>
      {icon && <Icon variant={variant}>{icon()}</Icon>}
      <Message>{children}</Message>
    </MessageBlock>
  )
}

export default LargeMessage
