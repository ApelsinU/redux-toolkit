import React from 'react'
import './styles/global.sass'

import MainPage from './pages/MainPage/MainPage'
import ApiListPage from './pages/ApiListPage/ApiListPage'
import CounterPage from './pages/CounterPage/CounterPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/counter/" element={<CounterPage />} />
        <Route path="/api-list/" element={<ApiListPage />} />
      </Routes>
    </Router>
  )
}

export default App
