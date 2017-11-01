import React from 'react'
import Header from './Header'
import InertMessage from './InertMessage'
import Para from './Para'
import Link from './Link'

export default ({
  url,
}) => (
  <InertMessage>
    <Header>
      You're Awesome 😍
    </Header>
    <Para>
      You can come back and edit your submission any time at
      <br/>
      <Link external href={ url }>{ url }</Link>
    </Para>
  </InertMessage>
)
