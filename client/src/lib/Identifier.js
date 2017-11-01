import React, { Component } from 'react'
import styled from 'styled-components'

import { borderColors } from '../styles/colors'

const Container = styled.div`
  padding: 1rem 0;
  margin-top: 0.5rem;
  + & {
    border-top: 1px solid rgba(0,0,0,0.2);
  }
`
const Label = styled.div`
  font-size: 0.9em;
  margin: 1rem 0 0.5rem;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  
  > *:not(:first-child) {
    margin-left: 0.8rem;
  }
`

const Type = styled.div`
  padding: 0.5rem 0;
  width: 80px;
  flex-grow: 0;
  text-decoration: none;
  border-bottom: 2px solid ${ props => borderColors[props.nr] };
`

const Name = styled.input`
  font-family: inherit;
  font-size: 1em;
  line-height: 1.6em;
  padding: 0.1em 0.3em;
  width: 80px;
  flex-grow: 0;
`

const Redacted = styled.input`
  font-family: inherit;
  font-size: 1em;
  line-height: 1.6em;
  padding: 0.1em 0.3em;
  flex-grow: 1;
`

const Description = styled.input`
  font-family: inherit;
  font-size: 1em;
  line-height: 1.6em;
  padding: 0.1em 0.3em;
  flex-grow: 1;
`


export default class Identifier extends Component {

  handleUpdateContext(event) {
    if (!this.props.readonly) {
      this.props.onUpdateContext(event.target.value, this.props.index)
    }
  }

  handleUpdateName(event) {
    if (!this.props.readonly) {
      this.props.onUpdateName(event.target.value, this.props.index)
    }
  }

  handleUpdateRedacted(event) {
    if (!this.props.readonly) {
      this.props.onUpdateRedacted(event.target.value, this.props.index)
    }
  }

  render() {
    const { type, name, details, index } = this.props
    const context = details ? details.context : ''
    const redacted = details ? details.redacted : ''
    const handleUpdateContext = this.handleUpdateContext.bind(this)
    const handleUpdateName = this.handleUpdateName.bind(this)
    const handleUpdateRedacted = this.handleUpdateRedacted.bind(this)
    return (
      <Container>
        <Row>
          <Type nr={ index % 6 }>{ type }</Type>
          <Name type='text'
                value={ name }
                onChange={ handleUpdateName }/>
        </Row>
        <Label>
          The real value (hidden from reviewers)
        </Label>
        <Row>
          <Redacted type='text'
                    required
                    value={ redacted }
                    placeholder='Actual Name...'
                    onChange={ handleUpdateRedacted }/>
        </Row>
        <Label>
          A definition the reviewers will see
        </Label>
        <Row>
          <Description type='text'
                       required
                       value={ context }
                       placeholder='Context...'
                       onChange={ handleUpdateContext }/>
        </Row>
      </Container>
    )
  }
}
