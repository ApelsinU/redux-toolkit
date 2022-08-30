import React from 'react'
import './styles/reset.sass'
import './styles/global.sass'

import MainPage from './pages/MainPage/MainPage'
import PokemonsPage from './pages/PokemonsPage/PokemonsPage'
import CounterPage from './pages/CounterPage/CounterPage'
import TranslatePage from './pages/TranslatePage/TranslatePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WeatherPage from './pages/WeatherPage/WeatherPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/counter/" element={<CounterPage />} />
        <Route path="/api-list/" element={<PokemonsPage />} />
        <Route path="/api-translate/" element={<TranslatePage />} />
        <Route path="/api-weather/" element={<WeatherPage />} />
      </Routes>
    </Router>
  )
}

export default App
