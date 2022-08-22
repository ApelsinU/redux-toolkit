import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  v: 0,
}

export const PokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    writeFromApi: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { writeFromApi } = PokemonsSlice.actions

export default PokemonsSlice.reducer
