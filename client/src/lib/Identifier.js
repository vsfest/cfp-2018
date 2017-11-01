import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Identifier extends Component {

	handleUpdateContext(event) {
    if (!this.props.readonly) {
      this.props.onUpdateContext(event.target.value,this.props.index);
    }
  }

  handleUpdateName(event) {
    if (!this.props.readonly) {
  	 this.props.onUpdateName(event.target.value,this.props.index);
    }
  }

  handleUpdateRedacted(event) {
    if (!this.props.readonly) {
      this.props.onUpdateRedacted(event.target.value,this.props.index);
    }
  }

  render() {
  	const { type, name, details, index } = this.props;
    const context = details ? details.context : '';
    const redacted = details ? details.redacted : '';
  	const handleUpdateContext = this.handleUpdateContext.bind(this);
  	const handleUpdateName = this.handleUpdateName.bind(this);
    const handleUpdateRedacted = this.handleUpdateRedacted.bind(this);
    return (
      <div className="identifier-container">
        <div className="identifier-row">
        	<div className={"identifier-type underline underline-" + (index % 6)}>{type}</div>
        	<input type='text' className="identifier-name" value={name} onChange={handleUpdateName} />
        </div>
        <div className="identifier-label">The real value (hidden from reviewers)</div>
        <div className="identifier-row">
          <input type='text' required className="identifier-redacted" value={redacted} placeholder='Actual Name...' onChange={handleUpdateRedacted} />
        </div>
        <div className="identifier-label">A definition the reviewers will see</div>
        <div className="identifier-row">
          <input type='text' required className="identifier-description" value={context} placeholder='Context...' onChange={handleUpdateContext} />
        </div>
      </div>
    );
  }

}
