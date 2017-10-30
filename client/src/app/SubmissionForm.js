import React from 'react'

export default ({
  submitted,
}) => (
  <div className="Form -submitted">
    <h1 className="Header">
      You're Awesome 😍
    </h1>
    <p className="Intro">
      You can come back and edit your submission any time at
      <br/>
      <a target="_blank" href={ submitted } className="Link">{ submitted }</a>
    </p>
  </div>
)
