import './sun-clock-card.scss'

import { ClockIcon } from '../../../../assets/icons/ClockIcon'
import { ReactElement } from 'react'

// interface ISunClockCard {
//   title: string
//   icon: ReactElement
//   time: string
// }

export const SunClockCard = ({ title, icon, time } /*:ISunClockCard*/) => {
  console.log('time', typeof time)
  const hourAngle = time?.split(':')[0] * 30
  const minAngle = time?.split(':')[1].split(' ')[0] * 6

  return (
    <div className="sun-clock-card">
      <h3 className="title">{title}</h3>
      <div className="card">
        <ClockIcon
          width={78}
          height={78}
          hourAngle={hourAngle}
          minAngle={minAngle}
        />
        <span className="time">{time}</span>
        {icon}
      </div>
    </div>
  )
}
