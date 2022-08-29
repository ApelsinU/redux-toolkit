/* Poke Api,
   'https://pokeapi.co/' */

import { BASE_URLS } from './baseUrls'

export async function getApiByUrl(url) {
  return await fetch(BASE_URLS.POKEMONS + url).then((res) => res.json())
}

export async function getAllPokemons(limit) {
  return await fetch(BASE_URLS.POKEMONS + `?offset=0&limit=${limit}`).then(
    (res) => res.json(),
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
