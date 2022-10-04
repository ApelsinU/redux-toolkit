import './sun-clock-card.scss'

import { Clock } from '../../../../assets/icons/Clock'

import { SunClockWidget } from '../SunClockWidget/SunClockWidget'
import { ClockIcon } from '../../../../assets/icons/ClockIcon'

export const SunClockCard = ({ title, icon, time }) => {
  const hourAngle = time.split(':')[0] * 30
  const minAngle = time.split(':')[1] * 6

  return (
    <div className="sun-clock-card">
      <h3 className="title">{title}</h3>
      <div className="card">
        {/*<SunClockWidget time={time} />*/}
        <ClockIcon
          width={78}
          height={78}
          hourAngle={hourAngle}
          minAngle={minAngle}
        />

        {/*<Clock*/}
        {/*  width={78}*/}
        {/*  height={78}*/}
        {/*  hourAngle={hourAngle}*/}
        {/*  minAngle={minAngle}*/}
        {/*/>*/}

        <span className="time">{time}</span>
        {icon}
      </div>
    </div>
  )
}
