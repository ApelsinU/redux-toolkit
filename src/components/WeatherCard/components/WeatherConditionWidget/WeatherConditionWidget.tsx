import './weather-condition-widget.scss'
import { useEffect, useState } from 'react'
import { ICurrentWeather } from "../../../../interfaces";

type Temperature = {
  real: number
  feels: number
}

interface IWeatherConditionWidget {
  isCelsiusMeasure: boolean
  weather: ICurrentWeather
}

export const WeatherConditionWidget = ({ isCelsiusMeasure, weather }: IWeatherConditionWidget) => {
  const [temperature, setTemperature] = useState<Temperature>({ real: 0, feels: 0 })

  useEffect(() => {
    isCelsiusMeasure
      ? setTemperature({ real: weather?.temp_c, feels: weather?.feelslike_c })
      : setTemperature({ real: weather?.temp_f, feels: weather?.feelslike_f })
  }, [weather, isCelsiusMeasure])

  return (
    <div className="weather-condition-widget">
      <h2 className="temperature">
        {temperature.real}
        <span>{isCelsiusMeasure ? ' °C' : ' °F'}</span>
      </h2>
      <span className="condition">
        {weather.condition.text}, Feels like {temperature.feels}
        <span>{isCelsiusMeasure ? ' °C' : ' °F'}</span>
      </span>
    </div>
  )
}
