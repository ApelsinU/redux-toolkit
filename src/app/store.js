import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import pokemonsReducer from '../features/pokemons/pokemonsSlice'

export const store = configureStore({
  reducer: { counter: counterReducer, pokemons: pokemonsReducer },
})
