const DISCOGS_ENDPOINT = `${import.meta.env.PUBLIC_SERVER_ENDPOINT}/api/search`

export async function getResultsFromSearch(searchTerm: string|null) {
  try {
    const response = await fetch(`${DISCOGS_ENDPOINT}/${searchTerm}`)
    const data = await response.json()
    const results = data?.results
    console.log(data)

    return results
  } catch (err) {
    console.error(err)
  }
}

