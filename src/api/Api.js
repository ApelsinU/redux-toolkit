const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

// const delay = (interval) =>
//   new Promise((resolve) => setTimeout(resolve, interval))

export async function getApiByUrl(url) {
  //await delay(1000)
  return await fetch(BASE_URL + url).then((res) => res.json())
}

export async function getAllPokemons(limit) {
  return await fetch(BASE_URL + `?offset=0&limit=${limit}`).then((res) =>
    res.json(),
  )
}

export async function getAllPokemonsByName(list) {
  let requests = list.results.map((el) => fetch(el.url))

  return Promise.all(requests)
    .then((responses) => {
      return responses
    })
    .then((responses) => Promise.all(responses.map((r) => r.json())))
}
