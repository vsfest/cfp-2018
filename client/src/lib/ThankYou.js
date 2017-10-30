import React from 'react'
import Form from './Form'

export default ({
  url,
}) => (
  <Form submitted>
    <h1 className="Header">
      You're Awesome 😍
    </h1>
    <p className="Intro">
      You can come back and edit your submission any time at
      <br/>
      <a target="_blank" href={ url } className="Link">{ url }</a>
    </p>
  </Form>
)
