import examples from '../extern/examples'

const lookup = window.location.search.match(/^\?(example(\d+)|([0-9a-f]{24}))$/)

export default async () => {
  if (lookup) {
    //eslint-disable-next-line no-unused-vars
    const [_, __, exampleId, existingId] = lookup
    if (exampleId) {
      return {
        type: 'example',
        data: examples[exampleId],
      }
    } else {
      try {
        const response = await fetch(`/api/proposals/${existingId}`)
        const json = await response.json()
        return {
          type: 'existing',
          sekret: json.sekret,
          data: json.submission,
        }
      } catch (e) {
      }
    }
  }
}
