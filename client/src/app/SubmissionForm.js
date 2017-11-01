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
import submit from '../actions/submit'
import BooleanCheckBox from '../lib/BooleanCheckBox'

export default class App extends Component {
  state = {
    submission: new Submission(store.conference, store.existing),
    inProgress: false,
  }

  onSubmit(e) {
    e.preventDefault()
    this.setState({ inProgress: true })
    submit(this.state.submission)
  }

  render() {
    const { submission, inProgress } = this.state
    const { newnessOptions, locationOptions, techExperienceOptions, speakingExperienceOptions, conferenceOptions } = FormData(store.conference)
    const blogPostUrl = `${store.conference.url}/call-for-speakers`

    return (
      <Form onSubmit={ this.onSubmit.bind(this) } inProgress={ inProgress }>
        <Header>
          { store.conference.title } call for proposals
        </Header>
        { submission.example
          ?
          <Para>
            This is an example proposal that was accepted in a previous year.
          </Para>
          :
          <Para>
            This year we're doing things a little differently, you should have
            a <Link external href={ blogPostUrl }>
            read about why</Link>. <strong>Submissions are open until December 1st.</strong>
          </Para>
        }
        <hr/>
        <TextField name="title" label="Title" form={ submission }/>
        <Field>
          <Field.Label>
            Talk Description
          </Field.Label>
          <Field.Note>
            <strong>NOTE</strong> please replace anything personally-identifiable in your talk submission with a
            string like COMPANY_A, PROJECT_B, PERSON_C, or OTHER_D.
          </Field.Note>
          <SanitisingDescription name="description" label="Description" form={ submission }/>
        </Field>
        <RadioButton name="newness" label="Have you given this talk before?" options={ newnessOptions } form={ submission }/>
        <TextField name="gender" label="Gender" form={ submission }>
          Feel free to put "Prefer not to say".
        </TextField>
        <BooleanCheckBox name="submitToBoth"
                         label={ `Would you like this talk to be considered for ${store.conference.id === 'js' ? 'CSSConf' : 'JSConf'} as well?` }
                         text="Yep, this would work at either event."
                         form={ submission }/>
        <RadioButton name="location" label="Location" options={ locationOptions } form={ submission }/>
        <RadioButton name="techExperience" label="Tech industry experience" options={ techExperienceOptions }
                     form={ submission }/>
        <RadioButton name="speakingExperience" label="Speaking experience" options={ speakingExperienceOptions }
                     form={ submission }/>
        <RadioButton name="flights" label="Can your company pay for flights" options={ ["Yes", "No"] }
                     form={ submission }/>
        <TextField type="text" name="speakerName" label="Your Name" form={ submission }/>
        <TextField type="text" name="twitter" label="Twitter Handle or Website" form={ submission } required={ false }/>
        <TextField type="email" name="email" label="Email Address" form={ submission }/>
        <TextField type="text" name="anythingElse" label="Anything else you need to tell us?" form={ submission } required={ false }/>
        <BooleanCheckBox name="readTheCfp"
                         text="Yes, and I agree to be bound by it."
                         form={ submission }>
          Have you read our <Link external href={`${store.conference.url}/code-of-conduct`}>Code of Conduct</Link>
        </BooleanCheckBox>
        { submission.example ? null :
          <Form.Buttons>
            <Para>Once you're happy with your submission, send it to us. You will receive a link to access your proposals afterwards.</Para>
            <Button type="submit">{ submission.inProgress ? 'Saving...' : submission.sekret ? 'Save' : 'Submit' }</Button>
          </Form.Buttons>
        }
      </Form>
    )
  }
}
