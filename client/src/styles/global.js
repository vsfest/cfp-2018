//import 'css-wipe'
import { injectGlobal } from 'styled-components'

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    font-size: 16px;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }
  
  strong {
    font-weight: bold;
  }
`
