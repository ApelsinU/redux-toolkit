import './weather-card.scss'

import { useState } from 'react'

import { WeatherIcon } from './components/WeatherIcon/WeatherIcon'
import { MeasureSwitcher } from './components/MeasureSwitcher/MeasureSwitcher'
import { ForecastCard } from './components/ForecastCard/ForecastCard'
import { WeatherConditionWidget } from './components/WeatherConditionWidget/WeatherConditionWidget'
import { SunClockCard } from './components/SunClockCard/SunClockCard'
import { LocalDateWidget } from './components/LocalDateWidget/LocalDateWidget'
import { WeatherExtendedFabric } from './components/WeatherExtendedItem/WeatherExtendedFabric'

import { LocationIcon } from '../../assets/icons/LocationIcon'
import { HalfSunIcon } from '../../assets/icons/HalfSunIcon'

import {
  DirectionMarkerIcon,
  HumidityIcon,
  RainIcon,
  WindIcon,
} from '../../assets/icons/ExtendedWeatherIcons'

import { useAppSelector } from '../../redux/hooks'

export const WeatherCard = () => {
  const location = useAppSelector((state) => state.weather.tempLocation)
  const weather = useAppSelector((state) => state.weather.tempCurrentWeather)
  const astronomy = useAppSelector((state) => state.weather.tempAstronomy)

  console.log('location', location)
  console.log('weather', weather)
  console.log('astronomy', astronomy)

  const weatherCondition = weather.condition.text.toLowerCase()
  const cityBg = location.region.toLowerCase()

  const [isCelsiusMeasure, setIsCelsiusMeasure] = useState(true)

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
                isCelsiusMeasure={isCelsiusMeasure}
                setIsCelsiusMeasure={setIsCelsiusMeasure}
              />
            </div>

            <WeatherConditionWidget
              isCelsiusMeasure={isCelsiusMeasure}
              weather={weather}
            />

            <LocalDateWidget className="date-block" />

            <div className="left-forecasts-block">
              <ForecastCard />
              <ForecastCard />
              <ForecastCard />
            </div>
          </div>

          <div className="right-col">
            <div className="right-header">
              <LocationIcon width={16} height={22} />
              <h3 className={'location-title'}>
                {location.name}, {location.country}
              </h3>
            </div>

            <div className="sun-clock">
              <SunClockCard
                title="Sunrise"
                time={astronomy.sunrise}
                icon={<HalfSunIcon />}
              />
              <SunClockCard
                title="Sunset"
                time={astronomy.sunset}
                icon={<HalfSunIcon />}
              />
            </div>

            <div className="weather-extended">
              <WeatherExtendedFabric
                title="Humidity"
                icon={<HumidityIcon width={12} />}
                text={{ value: weather.humidity, postfix: '%' }}
              />
              <WeatherExtendedFabric
                title="Wind Speed"
                icon={<WindIcon width={30} />}
                text={{ value: weather.wind_kph, postfix: 'km/h' }}
              />
              <WeatherExtendedFabric
                title="Rain Chance"
                icon={<RainIcon width={20} />}
                text={{ value: weather.pressure_in, postfix: '%' }}
              />
              <WeatherExtendedFabric
                title="Rain Amount"
                icon={<RainIcon width={20} />}
                text={{ value: weather.precip_mm, postfix: 'mm' }}
              />
              <WeatherExtendedFabric
                name="wind_dir"
                title="Wind Direction"
                icon={<DirectionMarkerIcon width={45} />}
                text={{ value: weather.wind_degree }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
