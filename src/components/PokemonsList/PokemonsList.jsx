import React, { useEffect, useMemo, useState } from 'react'
import './pokemons-list.sass'

import { fetchPokemons } from '../../features/pokemons/pokemonsSlice'
import { useDispatch, useSelector } from 'react-redux'

import PokemonCard from '../PokemonCard/PokemonCard'

export default function PokemonsList() {
  const dispatch = useDispatch()
  const pokemonsStore = useSelector((state) => state.pokemons.value)?.results

  //const [pokemons, setPokemons] = useState([])

  // useMemo(() => {
  //   setPokemons(pokemonsStore)
  // }, [pokemonsStore])

  useEffect(() => {
    // setInterval(() => {
    //   dispatch(fetchPokemons())
    // }, 2000)
    // setPokemons(pokemonsStore)

    dispatch(fetchPokemons())
  }, [])

  return (
    <>
      <h2>Pokemons:</h2>
      <ul className="pokemon-list">
        {pokemonsStore?.length ? (
          pokemonsStore.map((pokemon, index) => {
            return <PokemonCard key={index} pokemon={pokemon} />
          })
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </>
  )
}
