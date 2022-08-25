const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

const delay = (interval) =>
  new Promise((resolve) => setTimeout(resolve, interval))

export async function getApiByUrl(url) {
  await delay(1000)

  return fetch(BASE_URL + url).then((res) => res.json())
}
