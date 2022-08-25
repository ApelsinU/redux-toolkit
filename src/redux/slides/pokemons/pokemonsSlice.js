import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getApiByUrl } from '../../../api/Api'

const initialState = {
  list: null,
  pokemon: null,
}

export const fetchPokemons = createAsyncThunk(
  'pokemons/fetchAllPokemons',
  async () => await getApiByUrl('?offset=20&limit=2'),
)

export const fetchPokemonByName = createAsyncThunk(
  'pokemons/fetchPokemonByName',
  async (name) => {
    return await getApiByUrl(name)
  },
)

export const PokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.list = action.payload
    })
    builder.addCase(fetchPokemonByName.fulfilled, (state, action) => {
      state.pokemon = action.payload
    })
  },
})

export default PokemonsSlice.reducer
