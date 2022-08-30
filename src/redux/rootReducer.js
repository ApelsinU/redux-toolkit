import counterReducer from './slides/counter/counterSlice'
import pokemonsReducer from './slides/pokemons/pokemonsSlice'
import translateReducer from './slides/translate/translateSlice'
import weatherReducer from './slides/weather/weatherSlice'

import { persistReducer } from 'redux-persist'
import { createBlacklistFilter } from 'redux-persist-transform-filter'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'

const translateBlackListedFields = createBlacklistFilter('translate', [
  'languages',
  'detectedLang',
])

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['translate'],
  transforms: [translateBlackListedFields],
}

const rootReducer = combineReducers({
  counter: counterReducer,
  pokemons: pokemonsReducer,
  translate: translateReducer,
  weather: weatherReducer,
})

export default persistReducer(persistConfig, rootReducer)
