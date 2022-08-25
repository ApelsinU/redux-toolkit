import React, { useEffect, useState, useMemo } from 'react'
import './pokemon-card.sass'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemonByName } from '../../redux/slides/pokemons/pokemonsSlice'
import { FavButton } from '../FavButton/FavButton'

export default function PokemonCard({ index = null, name = null }) {
  const pokemon = useSelector((state) => state.pokemons.pokemon)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonByName(name))
  }, [])

  console.log('name', name)

  return (
    <li className="pokemon-item" key={index}>
      <div className="pokemon-image">
        <FavButton />
        <img
          src={pokemon?.sprites?.front_shiny}
          alt={pokemon?.name}
          className="pokemon-logo"
        />
      </div>
      <span className="pokemon-name">{pokemon?.name}</span>
    </li>
  )
}
