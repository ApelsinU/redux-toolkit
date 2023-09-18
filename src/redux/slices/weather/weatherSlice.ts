import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { getAstronomy, getRealTimeWeather } from '../../../api/WeatherApi'

import { IWeatherSlice } from './types'

const initialState: IWeatherSlice = {
  current: null,
  location: null,
  astronomy: null,
  tempLocation: {
    name: 'Minsk',
    region: 'Minsk',
    country: 'Belarus',
    lat: 53.9,
    lon: 27.57,
    tz_id: 'Europe/Minsk',
    localtime_epoch: 1663338303,
    localtime: '2022-09-16 17:25',
  },
  tempCurrentWeather: {
    last_updated_epoch: 1663337700,
    last_updated: '2022-09-16 17:15',
    temp_c: 16.0,
    temp_f: 60.8,
    is_day: 1,
    condition: {
      text: 'rain',
      icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
      code: 1000,
    },
    wind_mph: 18.6,
    wind_kph: 29.9,
    wind_degree: 240,
    wind_dir: 'WSW',
    pressure_mb: 999.0,
    pressure_in: 29.5,
    precip_mm: 0.0,
    precip_in: 0.0,
    humidity: 48,
    cloud: 0,
    feelslike_c: 14.0,
    feelslike_f: 52,
    vis_km: 10.0,
    vis_miles: 6.0,
    uv: 5.0,
    gust_mph: 19.5,
    gust_kph: 31.3,
  },
  tempAstronomy: {
    sunrise: '07:15 AM',
    sunset: '06:42 PM',
    moonrise: '04:38 PM',
    moonset: '11:02 PM',
    moon_phase: 'First Quarter',
    moon_illumination: '52',
  },
}

export const getWeatherByCity = createAsyncThunk(
  'weather/current',
  async (city: string) => await getRealTimeWeather(city),
)

export const getAstronomyByCity = createAsyncThunk(
  'weather/astronomy',
  async (city: string) => await getAstronomy(city),
)

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getWeatherByCity.fulfilled,
        (state: IWeatherSlice, action: any) => {
          state.current = action.payload.current
          state.location = action.payload.location?.country
        },
      )
      .addCase(getAstronomyByCity.fulfilled, (state: IWeatherSlice, action) => {
        state.astronomy = action.payload?.astronomy
      })
  },
})

export default weatherSlice.reducer
