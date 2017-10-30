import React, { Component } from 'react'

import Submission from '../models/Submission'
import FormData from '../models/FormData'
import store from '../stores/store'
import TextField from '../lib/TextField'
import SanitisingDescription from '../lib/SanitisingDescription'
import RadioButton from '../lib/RadioButton'
import Form from '../lib/Form'
import Header from '../lib/Header'
import Para from '../lib/Para'
import Field from '../lib/Field'
import Button from '../lib/Button'
import Link from '../lib/Link'

export default class App extends Component {
  state = {
    submission: new Submission(store.conference, store.existing),
    inProgress: false,
    submitted: false,
  }

  onSubmit(e) {
    e.preventDefault()
    this.setState({ inProgress: true })
    this.state.submission.submit()
      .then(response => this.setState({
        submitted: `${window.location.href.replace(/\?\w+$/, '')}?${response.sekret}`,
      }))
  }

  render() {
    const { submission, inProgress, submitted } = this.state
    const { newnessOptions, locationOptions, techExperienceOptions, speakingExperienceOptions } = FormData(store.conference)
    const blogPostUrl = '/2016/07/01/cfp.html'

    return (
      <Form onSubmit={ this.onSubmit.bind(this) } inProgress={ inProgress }>
        <Header>
          { store.conference.title } call for proposals
        </Header>
        { submission.example
          ? <Para>This is an example proposal that was accepted in a previous year.</Para>
          :
          <Para>
            This year we're doing things a little differently, you should have
            a <a target="_blank" href={ blogPostUrl } className="Link">read about why</a>. <strong>Submissions are open until July 31st.</strong>
          </Para>
        }
        <hr/>
        <TextField name="title" label="Title" form={ submission }/>
        <Field className="Field">
          <Field.Label className="Field_Label">
            Talk Description
          </Field.Label>
          <Field.Note className="Field_Note">
            <strong>NOTE</strong> please replace anything personally-identifiable in your talk submission with a
            string like COMPANY_A, PROJECT_B, PERSON_C, or OTHER_D.
            <br/>
            Confused about why? See the
            a <Link external href={ blogPostUrl + "#anonymised-description-field" }>relevant section</Link> of
            the CFP blog post.
          </Field.Note>
          <SanitisingDescription name="description" label="Description" form={ submission }/>
        </Field>
        <RadioButton name="newness" label="Have you given this talk before?" options={ newnessOptions } form={ submission }/>
        <TextField name="gender" label="Gender" form={ submission }>
          Feel free to put "Prefer not to say".
        </TextField>
        <RadioButton name="location" label="Location" options={ locationOptions } form={ submission }/>
        <RadioButton name="techExperience" label="Tech industry experience" options={ techExperienceOptions }
                     form={ submission }/>
        <RadioButton name="speakingExperience" label="Speaking experience" options={ speakingExperienceOptions }
                     form={ submission }/>
        <RadioButton name="flights" label="Can your company pay for flights" options={ ["Yes", "No"] }
                     form={ submission }/>
        <TextField type="text" name="name" label="Your Name" form={ submission }/>
        <TextField name="twitter" label="Twitter Handle or Website" form={ submission } required={ false }/>
        <TextField type="email" name="email" label="Email Address" form={ submission }/>
        <TextField type="text" name="anythingElse" label="Anything else you need to tell us?" form={ submission } required={ false }/>
        { /*{ submission.example ? null :*/ }
          <Form.Buttons>
          <Para>Once you're happy with your submission, send it to us. You will receive a link to access your proposals afterwards.</Para>
          <Button type="submit">{ submission.inProgress ? 'Saving...' : submission.sekret ? 'Save' : 'Submit' }</Button>
          </Form.Buttons>
        { /*}*/ }
      </Form>
    )
  }
}
