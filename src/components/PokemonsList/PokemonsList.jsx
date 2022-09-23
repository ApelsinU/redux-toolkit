import React, { useEffect } from 'react'
import './pokemons-list.scss'

import { fetchAllPokemons } from '../../redux/slides/pokemons/pokemonsSlice'
import { useDispatch, useSelector } from 'react-redux'

import PokemonCard from '../PokemonCard/PokemonCard'

export default function PokemonsList() {
  const dispatch = useDispatch()
  const pokemonsStore = useSelector((state) => state.pokemons.pokemons)

  const limit = 54

  useEffect(() => {
    dispatch(fetchAllPokemons(limit))
  }, [])

  return (
    <>
      <h2>Pokemons:</h2>
      <ul className="pokemon-list">
        {pokemonsStore?.length ? (
          pokemonsStore.map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon} />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </>
  )
}
