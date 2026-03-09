import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import type { ICountry } from './types/country'
import Navbar from './components/Navbar'
import Main from './pages/Main'
import AddPlan from './pages/AddPlan' 
import CountryDetail from './pages/CountryDetail'

function App() {
  const [plans, setPlans] = useState<ICountry[]>([])

  const addPlan = (newCountry: ICountry) => {
    if (!plans.some(p => p.alpha3Code === newCountry.alpha3Code)) {
      setPlans([...plans, newCountry])
    }
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main list={plans} />} />
        <Route path="/add" element={<AddPlan onSave={addPlan} />} />
        <Route path="/country/:id" element={<CountryDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;