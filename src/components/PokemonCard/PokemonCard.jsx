import React from 'react'
import './pokemon-card.scss'

import { FavButton } from '../FavButton/FavButton'

export default function PokemonCard({ pokemon = null }) {
  return (
    <li className="pokemon-item">
      <div className="pokemon-image">
        <FavButton />
        <img src={pokemon?.sprites?.front_shiny} alt={pokemon?.name} />
      </div>
      <span className="pokemon-name">{pokemon?.name}</span>
      <div className="pokemon-stats-block">
        <span className="pokemon-stat-item">
          <b>H:</b> {pokemon?.height}
        </span>
        <span className="pokemon-stat-item">
          <b>W:</b> {pokemon?.weight}
        </span>
      </div>
    </li>
  )
}
