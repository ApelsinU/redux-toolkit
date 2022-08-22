import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const initialState = {
  v: 0,
}

export const fetchPokemons = createAsyncThunk(
  'pokemons/fetchAllPokemons',
  async () => {
    return await fetch(
      'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=100',
    ).then((res) => res.json())
  },
)

export const PokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.value = action.payload
    })
  },
})

export default PokemonsSlice.reducer
