import { observable, action } from 'mobx'

import loadConference from '../extern/loadConference'
import loadExistingData from '../extern/loadExistingData'

const store = observable({
  conference: loadConference(),
  loading: true,
  submission_complete: false,
})

loadExistingData().then(action(existing => {
  store.loading = false
  store.existing = existing
}))

export default store
