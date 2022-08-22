import React from 'react'

import PokemonsList from '../../components/PokemonsList/PokemonsList'

export default function ApiListPage() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <h1>Api List</h1>
        <PokemonsList />
      </div>
    </div>
  )
}
