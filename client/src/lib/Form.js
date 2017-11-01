import styled, { css } from 'styled-components'

import { container } from '../styles/mixins'

const Form = styled.form`
  ${ container }
  
  ${ props => props.inProgress && css`
    > * {
      opacity: 0.2;
      transition: opacity ease-out 2s;
      pointer-events: none;
    }
  ` }
`

Form.Buttons = styled.div`
  padding-top: 1rem;
  > *+* {
    margin-top: 1rem;
  }
`

export default Form
