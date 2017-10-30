import styled, { css } from 'styled-components'

export default styled.button`
  font-size: 1rem;
  padding: 1rem;
  background: none;
  border: 2px solid;
  min-width: 10rem;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    color: #000;
    border-color: #000;
  }
  
  ${ props => props.theme.conference === 'css' && css`
    color: hsl(12, 86%, 48%);
    border-color: hsl(12, 86%, 48%);
  ` }
  
  ${ props => props.theme.conference === 'js' && css`
    color: hsl(233, 71%, 40%);
    border-color: hsl(233, 71%, 40%);
  ` }
`
