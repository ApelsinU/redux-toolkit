import './weather-extended-item.scss'
export const WeatherExtendedItem = ({
  title = '',
  icon = null,
  value = null,
}) => {
  return (
    <div className="weather-extended-item">
      <h4 className="title">{title}</h4>
      <div>
        {icon && icon}
        <span className="value">{value}</span>
      </div>
    </div>
  )
}
