import React, { Component } from 'react'
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

export default class TextArea extends Component {
  handleUpdate(e) {
    if (!this.props.form.example) {
      this.props.form.data[this.props.name] = e.target.value
      this.forceUpdate()
    }
  }

  render() {
    const { name, label, options, form } = this.props
    const selectedValue = form.data[name]
    return <Field>
      <Field.Label>{ label }</Field.Label>
      {
        options.map((option, i) => {
          const value = option.value || option
          const text = option.text || option
          const props = {
            name: label,
            value: value,
            onClick: this.handleUpdate.bind(this),
            checked: (value === selectedValue) ? "checked" : undefined,
          }
          return (
            <div key={ i }>
              <Label>
                <Radio required type="radio" { ...props } />
                <span>{ text }</span>
              </Label>
            </div>
          )
        })
      }
    </Field>
  }
}
