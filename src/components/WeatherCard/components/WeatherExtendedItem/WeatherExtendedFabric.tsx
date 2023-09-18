import { WeatherExtendedItem } from './WeatherExtendedItem'
import { WeatherExtendedItemWind } from './WeatherExtendedItemWind'
import { IWeatherExtendedFabric } from "./types";

export const WeatherExtendedFabric = ({ name = '', ...props }: IWeatherExtendedFabric) => {
  switch (name) {
    case 'wind_dir':
      return <WeatherExtendedItemWind {...props} />
    default:
      return <WeatherExtendedItem {...props} />
  }
}
