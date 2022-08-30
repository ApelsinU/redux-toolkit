import './city-form.sass'
import { useDispatch } from 'react-redux'
import { setCurrentCity } from '../../redux/slides/weather/weatherSlice'

export default function CityForm() {
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    const city = e.target.city.value.toLowerCase()

    dispatch(setCurrentCity(city))

    // add redirection to api-weather/${Minsk}
  }

  return (
    <form className="city-form" onSubmit={(e) => handleSubmit(e)}>
      <label className="city-label" htmlFor="city">
        <span>Enter your city:</span>
        <input className="city-input" id="city" type="text" required />
      </label>
      <button className="city-button">Next</button>
    </form>
  )
}
