export default () => window.location.hostname.match(/css/) ? {
  id: 'css',
  title: 'CSSConf AU 2018',
  url: 'http://2018.cssconf.com.au',
} : {
  id: 'js',
  title: 'JSConf AU 2018',
  url: 'http://2018.jsconfau.com',
}
