import React, { Component } from 'react'
import Field from './Field'
import Input from './Input'

export default class TextArea extends Component {
  handleUpdate(e) {
    if (!this.props.form.example) {
      this.props.form.data[this.props.name] = e.target.value
      this.forceUpdate()
    }
  }

  render() {
    const { name, label, form, children, type = 'text', required = true } = this.props
    const value = form.data[name]
    return <Field>
      <Field.Label>{ label }</Field.Label>
      { children ? <Field.Note>{ children }</Field.Note> : null }
      <Input required={ required }
             type={ type }
             value={ value }
             onChange={ this.handleUpdate.bind(this) }/>
    </Field>
  }
}
