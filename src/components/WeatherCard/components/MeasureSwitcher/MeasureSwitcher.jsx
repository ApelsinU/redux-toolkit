import './measure-switcher.scss'

export const MeasureSwitcher = ({ isCelsiumMeasure, setIsCelsiumMeasure }) => {
  return (
    <div className="measure-switcher">
      <label className="switch">
        <input
          type="checkbox"
          onClick={() => setIsCelsiumMeasure(!isCelsiumMeasure)}
        />
        <div className="slider">
          <span className="slider-measure">°C</span>
          <span className="slider-measure">°F</span>
        </div>
      </label>
    </div>
  )
}
