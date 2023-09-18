import './measure-switcher.scss'
import { SetStateAction } from "react";

interface IMeasureSwitcher {
  isCelsiusMeasure: boolean
  setIsCelsiusMeasure: SetStateAction<any> // todo: type
}

export const MeasureSwitcher = ({ isCelsiusMeasure, setIsCelsiusMeasure }:IMeasureSwitcher) => {
  return (
    <div className="measure-switcher">
      <label className="switch">
        <input
          type="checkbox"
          onClick={() => setIsCelsiusMeasure(!isCelsiusMeasure)}
        />
        <div className="slider">
          <span className="slider-measure">°C</span>
          <span className="slider-measure">°F</span>
        </div>
      </label>
    </div>
  )
}
