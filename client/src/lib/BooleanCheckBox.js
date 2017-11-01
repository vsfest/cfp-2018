import React from 'react'
import styled from 'styled-components'

import Field from './Field'

const Radio = styled.input`
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -7px;
`

const Label = styled.label`
  display: block;
  position: relative;
  span {
    display: inline-block;
    padding-left: 1.5rem;
    line-height: 1.25;
  }
`

export default class CheckBox extends React.Component {
  handleUpdate(e) {
    if (!this.props.form.example) {
      this.props.form.data[this.props.name] = e.target.checked
      this.forceUpdate()
    }
  }

  render() {
    const { name, label, children, form, required, text } = this.props
    const selectedValue = form.data[name]
    return <Field>
      <Field.Label>{ children ? children : label }</Field.Label>
      <Label>
        <Radio required={required}
               type="checkbox"
               checked={ selectedValue }
               name={ name }
               onChange={this.handleUpdate.bind(this)}/>
      <span>{ text }</span>
      </Label>
    </Field>
  }
}
