import { IAstronomy, ICurrentWeather, ILocation } from '../interfaces'

export interface ICurrentWeatherData {
  location: ILocation | null
  current: ICurrentWeather | null
}

export interface IAstronomyData {
  location: ILocation | null
  astronomy: IAstronomy | null
}
