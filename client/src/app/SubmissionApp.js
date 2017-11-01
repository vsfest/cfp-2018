import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { observer } from 'mobx-react'

import store from '../stores/store'
import { primary } from '../styles/colors'
import SubmissionForm from './SubmissionForm'
import InertMessage from '../lib/InertMessage'
import ThankYou from '../lib/ThankYou'

const Container = styled.div`
  padding: 1rem;
  min-height: 100vh;

  background: ${ props => primary[props.theme.conference] };
`

const SubmissionApp = () => (
  <ThemeProvider theme={ { conference: store.conference.id } }>
    <Container>
      { store.loading
        ? <InertMessage>Loading...</InertMessage>
        : store.submission_complete
          ? <ThankYou url={ store.submission }/>
          : <SubmissionForm/>
      }
    </Container>
  </ThemeProvider>
)

export default observer(SubmissionApp)
