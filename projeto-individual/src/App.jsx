import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import TelaImobiliaria from './componentes/ImovelCard/Imobiliario'
import Imobiliario from './componentes/ImovelCard/Imobiliario'

function App() {
  return (
    <div>
     <Navbar/>
    <Imobiliario/>
    </div>
  )
}

export default App
