import './weather-card.scss'

import { useSelector } from 'react-redux'
import { useState } from 'react'

import { WeatherIcon } from './components/WeatherIcon/WeatherIcon'
import { MeasureSwitcher } from './components/MeasureSwitcher/MeasureSwitcher'
import { ForecastCard } from './components/ForecastCard/ForecastCard'
import { WeatherConditionWidget } from './components/WeatherConditionWidget/WeatherConditionWidget'
import { SunClockCard } from './components/SunClockCard/SunClockCard'
import { LocalDateWidget } from './components/LocalDateWidget/LocalDateWidget'
import { WeatherExtendedItemFabric } from './components/WeatherExtendedItem'

import { LocationIcon } from '../../assets/icons/LocationIcon'
import { HalfSunIcon } from '../../assets/icons/HalfSunIcon'
import { FullSunIcon } from '../../assets/icons/FullSunIcon'

import {
  DirectionMarkerIcon,
  HumidityIcon,
  RainIcon,
  WindIcon,
} from '../../assets/icons/ExtendedWeatherIcons'

export const WeatherCard = () => {
  const weather = useSelector((state) => state.weather.tempCurrentWeather)
  const location = useSelector((state) => state.weather.tempLocation)

  console.log('weather', weather)
  console.log('location', location)

  const weatherCondition = weather.condition.text.toLowerCase()
  const cityBg = location.region.toLowerCase()

  const [isCelsiumMeasure, setIsCelsiumMeasure] = useState(true)

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

            <WeatherConditionWidget
              isCelsiumMeasure={isCelsiumMeasure}
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
              <SunClockCard title="Sunrise" icon={<HalfSunIcon />} />
              <SunClockCard title="Midday" icon={<FullSunIcon />} />
              <SunClockCard title="Sunset" icon={<HalfSunIcon />} />
            </div>

            <div className="weather-extended">
              <WeatherExtendedItemFabric
                title="Humidity"
                icon={<HumidityIcon width={12} />}
                text={{ value: weather.humidity, postfix: '%' }}
              />
              <WeatherExtendedItemFabric
                title="Wind Speed"
                icon={<WindIcon width={30} />}
                text={{ value: weather.wind_kph, postfix: 'km/h' }}
              />
              <WeatherExtendedItemFabric
                title="Rain Chance"
                icon={<RainIcon width={20} />}
                text={{ value: weather.pressure_in, postfix: '%' }}
              />
              <WeatherExtendedItemFabric
                title="Rain Amount"
                icon={<RainIcon width={20} />}
                text={{ value: weather.precip_mm, postfix: 'mm' }}
              />
              <WeatherExtendedItemFabric
                name="wind_dir"
                title="Wind Direction"
                icon={<DirectionMarkerIcon width={45} />}
                text={{ value: weather.wind_degree }}
              />
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
