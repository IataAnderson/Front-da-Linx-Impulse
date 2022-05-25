import { useState } from 'react'

import './App.css'
import Header from './Componentes/Header/Header.jsx'
import Body from './Componentes/Body/Body.jsx'
import Rodape from './Componentes/Rodape/Rodape.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Body />
      <Rodape />
      
    </div>
  )
}

export default App
