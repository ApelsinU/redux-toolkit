import React, { useEffect, useState } from 'react'
import { writeFromApi } from '../../features/pokemons/pokemonsSlice'
//import { usePokemons } from '../../hooks/usePokemons'

import { useDispatch, useSelector } from 'react-redux'

export default function PokemonsList() {
  //const { pokemons } = usePokemons()

  const dispatch = useDispatch()
  const pokemonsStore = useSelector((state) => state.pokemons.value)

  useEffect(() => {
    async function getData() {
      const data = await fetch(
        'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=100',
      )
        .then((response) => {
          return response.json()
        })
        .catch((err) => console.log('Something went wrong: ', err.message))

      const pokemons = data?.results

      dispatch(writeFromApi(pokemons))

      return { pokemons }
    }
    getData()
  }, [])

  return (
    <div>
      <h2>Pokemons:</h2>
      <ul>
        {pokemonsStore?.length ? (
          pokemonsStore.map((pokemon, index) => {
            return <li key={index}>{pokemon.name}</li>
          })
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </div>
  )
}
