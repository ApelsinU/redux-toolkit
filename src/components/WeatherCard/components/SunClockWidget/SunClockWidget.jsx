import './sun-clock-widget.scss'

export const SunClockWidget = ({ time }) => {
  console.log('time', time)

  const hourAngle = time.split(':')[0] * 30
  const minAngle = time.split(':')[1] * 6

  function setClockTime(h, m, s) {
    const hourAngle = h * 30
    const minAngle = m * 6

    const secAngle = s * 6

    // hour.style.transform = `rotateZ(${hourAngle + minAngle / 12}deg)`
    // min.style.transform = `rotateZ(${minAngle}deg)`
    // sec.style.transform = `rotateZ(${secAngle}deg)`
  }

  return (
    <div className="sun-clock-widget">
      <div className="bg">
        <div
          className="arrow-hour"
          style={{ transform: `rotateZ(${hourAngle}deg)` }}
        />
        <div
          className="arrow-min"
          style={{ transform: `rotateZ(${hourAngle}deg)` }}
        />
      </div>
    </div>
  )
}
