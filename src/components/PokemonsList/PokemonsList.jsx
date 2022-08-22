import React, { useEffect } from 'react'
import './pokemons-list.sass'

import { fetchPokemons } from '../../features/pokemons/pokemonsSlice'
import { useDispatch, useSelector } from 'react-redux'

import PokemonCard from '../PokemonCard/PokemonCard'

export default function PokemonsList() {
  const dispatch = useDispatch()
  const pokemons = useSelector((state) => state.pokemons.value)?.results

  useEffect(() => {
    dispatch(fetchPokemons())
  }, [])

  return (
    <div>
      <h2>Pokemons:</h2>
      <ul className="pokemon-list">
        {pokemons?.length ? (
          pokemons.map((pokemon, index) => {
            return <PokemonCard key={index} pokemon={pokemon} />
          })
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </div>
  )
}
