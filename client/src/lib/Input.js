import React from 'react'
import styled, { css } from 'styled-components'

const Input = styled.input`
  font-family: inherit;
  font-size: 1em;
  line-height: 1.6em;
  padding: 0.1em 0.3em;
  width: 100%;
  margin: 1rem 0 0;
  border: 1px solid #ccc;
  
  &:invalid {
    box-shadow: none;
  }
  ${ props => props.touched && css`
    &:invalid {
      box-shadow: 0 0 1px 1px hsla(10, 100%, 50%, 0.8);
    }
  `} 
`

export default class extends React.Component {
  state = { touched: false }
  onTouched = () => this.setState({ touched: true })
  setRef = el => el && el.addEventListener('invalid', this.onTouched)

  render() {
    return (
      <Input innerRef={ this.setRef }
             onBlur={ this.onTouched }
             touched={ this.state.touched }
             { ...this.props }/>
    )
  }
}
