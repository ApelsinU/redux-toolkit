import './weather-card.scss'

import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { WeatherIcon } from './components/WeatherIcon/WeatherIcon'
import { MeasureSwitcher } from './components/MeasureSwitcher/MeasureSwitcher'
import { LocationIcon } from '../../assets/icons/LocationIcon'

export const WeatherCard = () => {
  const weather = useSelector((state) => state.weather.tempCurrentWeather)
  const location = useSelector((state) => state.weather.tempLocation)

  console.log('weather', weather)
  console.log('location', location)

  const weatherCondition = weather.condition.text.toLowerCase()
  const cityBg = location.region.toLowerCase()

  const [temperature, setTemperature] = useState({ real: '', feels: '' })
  const [isCelsiumMeasure, setIsCelsiumMeasure] = useState(true)

  useEffect(() => {
    isCelsiumMeasure
      ? setTemperature({ real: weather?.temp_c, feels: weather?.feelslike_c })
      : setTemperature({ real: weather?.temp_f, feels: weather?.feelslike_f })
  }, [weather, isCelsiumMeasure])

  function parseDate(localtime) {
    const dateStr = new Date(Date.parse(localtime))
    console.log('dateStr', dateStr)

    const allMonth = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const year = dateStr.getFullYear()
    const shortYear = year.toString().slice(2, 4)
    const month = allMonth[dateStr.getMonth()]
    const day = dateStr.getDay()

    return {
      year,
      shortYear,
      month,
      day,
      // hour,
      // minute,
    }
  }

  const time = parseDate(location.localtime)

  console.log('time', time)

  return (
    <div className="weather-card">
      <div className={`city-mask ${cityBg}`}>
        <div className={`weather-card-inner ${weatherCondition}`}>
          <div className="left-col">
            <div className="left-header">
              <WeatherIcon
                className="weather-icon"
                weather={weatherCondition}
              />
              <MeasureSwitcher
                isCelsiumMeasure={isCelsiumMeasure}
                setIsCelsiumMeasure={setIsCelsiumMeasure}
              />
            </div>
            <div className="left-weather-block">
              <h2 className="temperature">
                {temperature.real}
                <span>{isCelsiumMeasure ? ' °C' : ' °F'}</span>
              </h2>
              <span className="condition">
                {weather.condition.text}, Feels like {temperature.feels}
                <span>{isCelsiumMeasure ? ' °C' : ' °F'}</span>
              </span>
              <div className="date"></div>
            </div>
          </div>

          <div className="right-col">
            <div className="right-header">
              <LocationIcon width={16} height={22} />
              <h3 className={'location-title'}>
                {location.name}, {location.country}
              </h3>
            </div>
          </div>
        </div>

        {/*<h1 className="title">Weather for {location?.name}</h1>*/}
        {/*<div>Last updated: {weather?.last_updated}</div>*/}
        {/*<div>*/}
        {/*  <img src={weather?.condition?.icon} alt="" />*/}
        {/*  <h2>{weather?.condition?.text}</h2>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}
