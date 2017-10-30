import React from 'react'
import styled, { css } from 'styled-components'

import { container } from '../styles/mixins'

export default styled.form`
  ${ container }
  
  ${ props => props.inProgress && css`
    > * {
      opacity: 0.2;
      transition: opacity ease-out 2s;
      pointer-events: none;
    }
  ` }
  
  ${ props => props.submitted && css`
  ` }
`
