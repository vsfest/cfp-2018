import styled, { css } from 'styled-components'

export default styled.a.attrs({
  target: props => props.external && "_blank",
})`
  text-decoration: none;
  &:hover {
    border: 0;
  }

  ${ props => props.theme.js && css`
    color: hsl(233, 71%, 40%);
    border-bottom: 2px solid hsl(233, 71%, 40%);
  ` }
  
  ${ props => props.theme.css && css`
    color: hsl(12, 86%, 48%);
    border-bottom: 2px solid hsl(12, 86%, 48%);
  ` }
`
