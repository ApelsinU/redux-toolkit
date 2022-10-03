import './weather-extended-item.scss'

export const WeatherExtendedItem = ({
  title = '',
  icon = null,
  text = null,
}) => {
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
