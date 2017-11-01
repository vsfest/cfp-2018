import React, { Component } from 'react'
import { Editor } from 'draft-js'
import Description from './Description'

export default class TextArea extends Component {

  render() {
    const handleUpdate = (editorState) => {
      if (!this.props.readonly) {
        this.props.onUpdate(editorState)
      }
    }
    return (
      <Description>
        <Description.Field>
          <Editor editorState={ this.props.state } onChange={ handleUpdate }/>
        </Description.Field>
      </Description>
    )
  }
}
