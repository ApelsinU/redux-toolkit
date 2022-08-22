import React, { useState } from 'react'
import './pokemon-card.sass'

export default function PokemonCard({ index = 0, pokemon = null }) {
  const [favSubsribe, seFavSubsribe] = useState(false)
  function onFavClick() {
    seFavSubsribe(!favSubsribe)
  }

  return (
    <li className="pokemon-item" key={index}>
      <div className="pokemon-image">
        {favSubsribe ? (
          <button onClick={() => onFavClick()} className="pokemon-fav">
            &#9733;
          </button>
        ) : (
          <button onClick={() => onFavClick()} className="pokemon-fav">
            &#9734;
          </button>
        )}
        {/*<button onClick={} className="pokemon-fav">&#9733;</button>*/}
      </div>
      <span className="pokemon-name">{pokemon.name}</span>
      {/*<button>&#9733;</button>*/}
    </li>
  )
}
