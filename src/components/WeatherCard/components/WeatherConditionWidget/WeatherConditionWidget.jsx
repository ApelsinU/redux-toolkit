import './weather-condition-widget.scss'
import { useEffect, useState } from 'react'

export const WeatherConditionWidget = ({ isCelsiumMeasure, weather }) => {
  const [temperature, setTemperature] = useState({ real: '', feels: '' })

  useEffect(() => {
    isCelsiumMeasure
      ? setTemperature({ real: weather?.temp_c, feels: weather?.feelslike_c })
      : setTemperature({ real: weather?.temp_f, feels: weather?.feelslike_f })
  }, [weather, isCelsiumMeasure])

  return (
    <div className="weather-condition-widget">
      <h2 className="temperature">
        {temperature.real}
        <span>{isCelsiumMeasure ? ' °C' : ' °F'}</span>
      </h2>
      <span className="condition">
        {weather.condition.text}, Feels like {temperature.feels}
        <span>{isCelsiumMeasure ? ' °C' : ' °F'}</span>
      </span>
    </div>
  )
}
