import './local-date-widget.scss'
import { useParsedDate } from '../../../../hooks/useParsedDate'
import { useSelector } from 'react-redux'

export const LocalDateWidget = ({ className }) => {
  const location = useSelector((state) => state.weather.tempLocation)

  const {
    day,
    dayPostfix,
    shortMonth,
    shortYear,
    weekDay,
    hour,
    minute,
    timePostfix,
  } = useParsedDate(location.localtime)

  return (
    <div className={`${className} local-date-widget`}>
      <span className="date">
        {day}
        {dayPostfix} {shortMonth} {shortYear}
      </span>

      <div className="time-block">
        <span className="week-day">{weekDay}</span>
        <span className="clock">
          <span>
            {hour}:{minute}
          </span>
          <span>{timePostfix}</span>
        </span>
      </div>
    </div>
  )
}
