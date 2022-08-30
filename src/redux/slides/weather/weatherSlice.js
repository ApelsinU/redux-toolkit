import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getRealTimeWeather } from '../../../api/WeatherApi'

const initialState = { currentWeather: '', city: '' }

export const fetchRealTimeWeather = createAsyncThunk(
  'weather/current',
  async (city) => await getRealTimeWeather(city),
)

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCurrentCity: (state, action) => {
      state.city = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRealTimeWeather.fulfilled, (state, action) => {
      state.currentWeather = action.payload
    })
  },
})

export const { setCurrentCity } = weatherSlice.actions

export default weatherSlice.reducer
