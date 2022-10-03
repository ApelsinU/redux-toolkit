import './weather-extended-item.scss'

import '../../../../assets/icons/CompasLayoutIcon'

export const WeatherExtendedItemWind = ({
  title = '',
  icon = null,
  text = null,
}) => {
  console.log(text.value)

  return (
    <div className="weather-extended-item wind-dir-item">
      <h4 className="title">{title}</h4>
      <div className="content ">
        {/*<CompasLayoutIcon width={50} height={50} />*/}

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
