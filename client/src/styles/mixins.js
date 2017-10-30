import { css } from 'styled-components'

export const container = css`
  background: hsl(0,0%,99%);
  width: 100%;
  max-width: 720px;
  margin: 1rem auto;
  padding: 2rem;
  border-radius: 0.25rem;
`

const properties = {
  m: 'margin',
  p: 'padding',
}
const orientations = {
  t: ['top'],
  b: ['bottom'],
  l: ['left'],
  r: ['right'],
  v: ['top', 'bottom'],
  h: ['left', 'right'],
}
const values = {
  a: 'auto',
  '0': '0',
  '025': '0.25rem',
  '05': '0.5rem',
  '1': '1rem',
  '15': '1.5rem',
  '2': '2rem',
}
const all_spacings = {}
for (let short_prop in properties) {
  for (let value in values) {
    all_spacings[`${short_prop}${value}`] = `${properties[short_prop]}: ${values[value]};`
    for (let orientation in orientations) {
      all_spacings[`${short_prop}${orientation}${value}`] =
        orientations[orientation].map(o =>
          `${properties[short_prop]}-${o}: ${values[value]};`,
        )
    }
  }
}

export const spacingProps = css`
  ${ props => Object.keys(props).map(prop => all_spacings[prop]) } 
`
