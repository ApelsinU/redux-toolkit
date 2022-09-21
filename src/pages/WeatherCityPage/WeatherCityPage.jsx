import './weather-city-page.sass'
import { useSelector } from 'react-redux'

export default function WeatherCityPage() {
  const weather = useSelector((state) => state.weather.tempCurrentWeather)
  const location = useSelector((state) => state.weather.tempLocation)

  console.log('weather', weather)
  console.log('location', location)

  return (
    <div className="page-wrapper">
      <div className="container">
        <h1 className="title">Weather for {location.name}</h1>
        <div>Last updated: {weather.last_updated}</div>

        <div>
          <img src={weather.condition.icon} alt="" />
          <h2>{weather.condition.text}</h2>
        </div>
      </div>
    </div>
  )
}
