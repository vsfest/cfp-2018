import React, { Component } from 'react'
import {Editor, ContentState} from 'draft-js'
import Description from './Description'

export default class TextArea extends Component {

  render() {
    const handleUpdate = (editorState) => {
      if (!this.props.readonly) {
        this.props.onUpdate(editorState);
      }
    };
    return (
      <div>
        <Description.Field>
          <Editor editorState={this.props.state} onChange={handleUpdate} />
        </Description.Field>
      </div>
    );
  }
}
