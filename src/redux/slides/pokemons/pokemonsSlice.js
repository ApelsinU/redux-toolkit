import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllPokemons, getAllPokemonsByName } from '../../../api/Api'

const initialState = {
  pokemons: null,
}

export const fetchAllPokemons = createAsyncThunk(
  'pokemons/fetchPokemonsAll',
  async (limit) =>
    await getAllPokemons(limit).then(
      async (res) => await getAllPokemonsByName(res),
    ),
)

export const PokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPokemons.fulfilled, (state, action) => {
      state.pokemons = action.payload
    })
  },
})

export default PokemonsSlice.reducer
