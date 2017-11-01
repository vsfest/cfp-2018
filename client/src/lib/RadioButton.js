import React, { Component } from 'react'
import Field from './Field'

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
              <label>
                <input required type="radio" { ...props } />
                <span>{ text }</span>
              </label>
            </div>
          )
        })
      }
    </Field>
  }
}
