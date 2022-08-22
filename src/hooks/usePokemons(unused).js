export async function usePokemonsUnused() {
  const data = await fetch(
    'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=100',
  )
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log('Something went wrong: ', err.message))

  const pokemons = data?.results
  console.log('pokemons', pokemons)

  return { pokemons }
}
