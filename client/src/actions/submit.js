import { action } from 'mobx'
import store from '../stores/store'

export default (submission) => {
  submission.submit()
    .then(action(response => {
      store.submission_complete = true
      store.submission_url = `${window.location.href.replace(/\?\w+$/, '')}?${response.sekret}`
    }))
}
