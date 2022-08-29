import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slides/counter/counterSlice'
import pokemonsReducer from './slides/pokemons/pokemonsSlice'
import translateReducer from './slides/translate/translateSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsReducer,
    translate: translateReducer,
  },
})
