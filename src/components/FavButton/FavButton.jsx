import React, { useState } from 'react'
import './fav-button.sass'

export const FavButton = () => {
  const [favSubsribe, setFavSubsribe] = useState(false)
  function onFavClick() {
    setFavSubsribe(!favSubsribe)
  }
  return (
    <button onClick={() => onFavClick()} className="pokemon-fav">
      {favSubsribe ? (
        <span className="icon-subscribed">&#9733;</span>
      ) : (
        <span>&#9734;</span>
      )}
    </button>
  )
}
