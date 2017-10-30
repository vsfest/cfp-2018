export default window.location.hostname.match(/localhost/)
  ? 'http://localhost:3000'
  : 'https://cfp-2018.herokuapp.com'
