import React from 'react'
import styled from 'styled-components'

import { container } from '../styles/mixins'

export default styled.main`
  ${ container }
  
  min-height: calc(100vh - 4rem);
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
