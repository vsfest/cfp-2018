import styled from 'styled-components'

const Field = styled.div`
  padding: 1rem 0;
> *+* {
  margin-top: 1rem;
}
`

Field.Label = styled.label`
  font-size: 1.5rem;
  font-weight: 500;
`

Field.Note = styled.p`
  font-size: 0.9rem;
  color: hsl(0,0%,40%);
  line-height: 1.4; 
  strong {
    font-weight: 700;
    color: black;
  }
`

export default Field
