import './weather-extended-item.scss'

export const WeatherExtendedItemWind = ({
  title = '',
  icon = null,
  text = null,
}) => {
  return (
    <div className="weather-extended-item wind-dir-item">
      <h4 className="title">{title}</h4>
      <div className="content ">
        <span
          className="icon"
          style={{ transform: `rotate(${text.value}deg)` }}
        >
          {icon && icon}
        </span>
      </div>
    </div>
  )
}
