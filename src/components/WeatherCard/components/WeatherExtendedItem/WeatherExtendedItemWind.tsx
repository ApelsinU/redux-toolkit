import './weather-extended-item.scss'
import { IWeatherExtendedItem } from "./types";

export const WeatherExtendedItemWind = ({
  title = '',
  icon = null,
  text = null,
}:IWeatherExtendedItem) => {
  return (
    <div className="weather-extended-item wind-dir-item">
      <h4 className="title">{title}</h4>
      <div className="content ">
        <span
          className="icon"
          style={{ transform: `rotate(${text?.value}deg)` }}
        >
          {icon && icon}
        </span>
      </div>
    </div>
  )
}
