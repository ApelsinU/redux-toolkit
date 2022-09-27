import './weather-city-page.scss'
import { useSelector } from 'react-redux'
import { WeatherCard } from '../../components/WeatherCard/WeatherCard'

export default function WeatherCityPage() {
  const weather = useSelector((state) => state.weather.tempCurrentWeather)
  const location = useSelector((state) => state.weather.tempLocation)

  const city = location.name

  return (
    <div className="page-wrapper">
      <WeatherCard />

      {/*<div className="row">*/}
      {/*  <div>*/}
      {/*    {Object.keys(weather).map((key) => (*/}
      {/*      <div>{key}</div>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    {Object.values(weather).map((val) => (*/}
      {/*      <div>{val}</div>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}
