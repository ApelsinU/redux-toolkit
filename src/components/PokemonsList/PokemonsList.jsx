import React, { useEffect } from 'react'
import './pokemons-list.sass'

import { fetchPokemons } from '../../redux/slides/pokemons/pokemonsSlice'
import { useDispatch, useSelector } from 'react-redux'

import PokemonCard from '../PokemonCard/PokemonCard'

export default function PokemonsList() {
  const dispatch = useDispatch()
  const pokemonsStore = useSelector((state) => state.pokemons.list)?.results

  useEffect(() => {
    dispatch(fetchPokemons())
  }, [])

  return (
    <>
      <h2>Pokemons:</h2>
      <ul className="pokemon-list">
        {pokemonsStore?.length ? (
          pokemonsStore.map((pokemon, index) => (
            <PokemonCard key={index} name={pokemon?.name} />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </>
  )
}
