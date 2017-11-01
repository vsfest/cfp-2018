import { observable, action } from 'mobx'

import loadConference from '../actions/loadConference'
import loadExistingData from '../actions/loadExistingData'

const store = observable({
  conference: loadConference(),
  loading: true,
  submission_complete: false,
  submission_url: null,
  existing: null
})

loadExistingData().then(action(existing => {
  store.loading = false
  store.existing = existing
}))

export default store
