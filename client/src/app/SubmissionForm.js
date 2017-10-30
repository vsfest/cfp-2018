import React, { Component } from 'react'

import Submission from '../models/Submission'
import FormData from '../models/FormData'
import store from '../stores/store'
import TextField from '../lib/TextField'
import SanitisingDescription from '../lib/SanitisingDescription'
import RadioButton from '../lib/RadioButton'
import Form from '../lib/Form'

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
      <Form onSubmit={ this.onSubmit.bind(this) } className={ "Form" + (inProgress ? ' -in-progress' : '') }>
        <h1 className="Header">
          { store.conference.title } call for proposals
        </h1>
        { submission.example
          ? <p className="Intro">This is an example proposal that was accepted in a previous year.</p>
          :
          <p className="Intro">
            This year we're doing things a little differently, you should have
            a <a target="_blank" href={ blogPostUrl } className="Link">read about why</a>. <strong>Submissions are open until July 31st.</strong>
          </p>
        }
        <hr/>
        <TextField name="title" label="Title" form={ submission }/>
        <div className="Field">
          <div className="Field_Label">
            Talk Description
          </div>
          <div className="Field_Note">
            <strong>NOTE</strong> please replace anything personally-identifiable in your talk submission with a
            string like COMPANY_A, PROJECT_B, PERSON_C, or OTHER_D.
            <br/>
            Confused about why? See the
            a <a target="_blank" href={ blogPostUrl + "#anonymised-description-field" } className="Link">relevant section</a> of
            the CFP blog post.
          </div>
          <SanitisingDescription name="description" label="Description" form={ submission }/>
        </div>
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
        { submission.example ? null :
          <div className="Form_Buttons">
            <div className="Intro"><p>Once you're happy with your submission, send it to us. You will receive a link to access your proposals afterwards.</p></div>
            <button type="submit" className="Button">{ submission.inProgress ? 'Saving...' : submission.sekret ? 'Save' : 'Submit' }</button>
          </div>
        }
      </Form>
    )
  }
}
