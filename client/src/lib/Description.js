import styled from 'styled-components'

const Description = styled.div`
  .public-DraftEditor-content {
    min-height: 10rem;
  }
  .public-DraftStyleDefault-block {
    padding: 3px 8px;
  }
`

Description.Field = styled.div`
  width: 100%;
  background-color: white;
  line-height: 1.6em;
  border: solid 1px lightgray;
`

Description.Identifiers = styled.div`
  font-size: 0.9em;
  padding-top: 1rem;
`

export default Description
