import React, {Component} from 'react'

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
    return <div className="Field">
      <div className="Field_Label">{ label }</div>
      {
      	options.map((option,i) => {
      		const value = option.value || option;
      		const text = option.text || option;
      		const props = {
      			name: label,
      			value: value,
      			onClick: this.handleUpdate.bind(this),
      			checked: (value == selectedValue) ? "checked" : undefined
      		};
      		return <div key={i}><label><input required type="radio" {...props} /><span>{text}</span></label></div>
      	})
      }
    </div>
  }
}
