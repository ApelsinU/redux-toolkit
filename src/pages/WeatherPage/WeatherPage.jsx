import './weather-page.scss'

import CityForm from '../../components/CityForm/CityForm'

export default function WeatherPage() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <h1>Weather Api</h1>
        <CityForm />
      </div>
    </div>
  )
}
