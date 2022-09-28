import './sun-clock-card.scss'

import { useSelector } from 'react-redux'
import { useParsedDate } from '../../../../hooks/useParsedDate'

import { SunClockWidget } from '../SunClockWidget/SunClockWidget'

export const SunClockCard = ({ title, icon }) => {
  const location = useSelector((state) => state.weather.tempLocation)
  const { hour, minute, timePostfix } = useParsedDate(location.localtime)

  return (
    <div className="sun-clock-card">
      <h3 className="title">{title}</h3>
      <div className="card">
        <SunClockWidget />

        <span className="time-block">
          <span className="time">
            {hour}:{minute}
          </span>
          <span className="time-postfix">{timePostfix}</span>
        </span>
        {icon}
      </div>
    </div>
  )
}
