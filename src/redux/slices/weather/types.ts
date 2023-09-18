import { IAstronomy, ICurrentWeather, ILocation } from '../../../interfaces'

export interface IWeatherSlice {
  current: ICurrentWeather | null
  location: ILocation | null
  astronomy: IAstronomy | null

  tempLocation: ILocation
  tempCurrentWeather: ICurrentWeather
  tempAstronomy: IAstronomy
}
