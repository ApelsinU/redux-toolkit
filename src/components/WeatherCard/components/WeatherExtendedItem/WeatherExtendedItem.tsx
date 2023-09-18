import './weather-extended-item.scss'
import { IWeatherExtendedItem } from './types'

export const WeatherExtendedItem = ({
  title = '',
  icon = null,
  text = null,
}:IWeatherExtendedItem) => {
  return (
    <div className="weather-extended-item">
      <h4 className="title">{title}</h4>
      <div className="content">
        {icon && icon}
        <span className="value">{text?.value}</span>
        <span>{text?.postfix}</span>
      </div>
    </div>
  )
}
