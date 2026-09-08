import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import TelaImobiliaria from './componentes/Cadastrar/Cadastrar'
import Cadastro from './componentes/Cadastrar/Cadastrar'
import Buscar from './componentes/Buscar/Buscar'

function App() {
  return (
    <div>
     <Navbar/>
     <Cadastro/>  
    </div>
  )
}

export default App
