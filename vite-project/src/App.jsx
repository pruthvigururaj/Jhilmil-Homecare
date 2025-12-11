import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Componenets/Navbar'
import Dashboard from './Componenets/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientsList from './Componenets/PatientsList'
import ServicesList from './Componenets/ServicesList'
import Booking from './Componenets/Booking'
import History from './Componenets/History'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        
        <Route path="/" element={<Dashboard />} />
        
        <Route path="/patients" element={<PatientsList/>} />
        <Route path="/services" element={<ServicesList />} />
        <Route path="/bookings" element={<Booking />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
   
     
   
  )
}

export default App
