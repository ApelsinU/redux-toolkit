import './weather-city-page.scss'
import { useSelector } from 'react-redux'
import { WeatherCard } from '../../components/WeatherCard/WeatherCard'

export default function WeatherCityPage() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <WeatherCard />
      </div>
    </div>
  )
}
