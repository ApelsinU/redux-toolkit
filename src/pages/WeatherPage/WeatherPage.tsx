import './weather-page.scss'

import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";
import {
  getAstronomyByCity,
  getWeatherByCity
} from "../../redux/slices/weather/weatherSlice";
import { useAppDispatch } from "../../redux/hooks";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // TODO: comennted to avoid too much API-requests while Dev
    // dispatch(getWeatherByCity(city))
    // dispatch(getAstronomyByCity(city))

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
