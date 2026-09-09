import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import Cadastro from './componentes/Cadastrar/Cadastrar'
import Buscar from './componentes/Buscar/Buscar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Buscar />} />
        <Route path="/cadastrar" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
