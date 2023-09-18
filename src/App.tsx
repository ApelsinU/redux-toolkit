
import MainPage from './pages/MainPage/MainPage'
import PokemonsPage from './pages/PokemonsPage/PokemonsPage'
import CounterPage from './pages/CounterPage/CounterPage'
import TranslatePage from './pages/TranslatePage/TranslatePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WeatherPage from './pages/WeatherPage/WeatherPage'
import WeatherCityPage from './pages/WeatherCityPage/WeatherCityPage'
import Header from './components/common/Header/Header'

function App() {
  return (
    <>
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/counter/" element={<CounterPage />} />
          <Route path="/api-list/" element={<PokemonsPage />} />
          <Route path="/api-translate/" element={<TranslatePage />} />
          <Route path="/api-weather/" element={<WeatherPage />} />
          <Route path="/api-weather/:city" element={<WeatherCityPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
