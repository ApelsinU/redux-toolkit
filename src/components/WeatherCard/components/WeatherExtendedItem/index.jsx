import { WeatherExtendedItem } from './WeatherExtendedItem'
import { WeatherExtendedItemWind } from './WeatherExtendedItemWind'

export const WeatherExtendedItemFabric = ({ name = '', ...props }) => {
  switch (name) {
    case 'wind_dir':
      return <WeatherExtendedItemWind {...props} />
    default:
      return <WeatherExtendedItem {...props} />
  }

  /*  <WeatherExtendedItem
    title="Rain chance"
    icon={<RainIcon width={20} />}
    text={{ value: weather.precip_mm, postfix: '%' }}
  />
  <WeatherExtendedItem
    name="wind_dir"
    title="Wind direction"
    icon={<DirectionMarkerIcon width={18} />}
    data={weather.wind_dir}
  />*/
}
