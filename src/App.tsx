import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import type { ICountry } from './types/country'
import Navbar from './components/Navbar'
import Main from './pages/Main'

function App() {
  const [plans, setPlans] = useState<ICountry[]>([])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main list={plans} />} />
        <Route path="/add" element={<div>Заглушка</div>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;