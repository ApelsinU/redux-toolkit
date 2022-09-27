import './weather-page.scss'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getWeatherByCity } from '../../redux/slides/weather/weatherSlice'
import { useDispatch } from 'react-redux'

export default function WeatherPage() {
  const [city, setCity] = useState('')
  const navigate = useNavigate()

  const dispatch = useDispatch()
  function handleSubmit(e) {
    e.preventDefault()

    // dispatch(getWeatherByCity(city))

    navigate(`${city}`)
  }

  return (
    <div className="page-wrapper">
      <div className="container">
        <h1>Weather Api</h1>
        <form className="city-form" onSubmit={(e) => handleSubmit(e)}>
          <label className="city-label" htmlFor="city">
            <span>Enter your city:</span>
            <input
              className="city-input"
              id="city"
              type="text"
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
          <button className="city-button">Next</button>
        </form>
      </div>
    </div>
  )
}
