import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slides/counter/counterSlice'
import pokemonsReducer from './slides/pokemons/pokemonsSlice'

export const store = configureStore({
  reducer: { counter: counterReducer, pokemons: pokemonsReducer },
})
