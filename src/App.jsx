import { useState } from 'react'

import './App.css'
import Cabecalho from './Componentes/Cabecalho/Cabecalho.jsx'
import ConteudoPrincipal from './Componentes/ConteudoPrincipal/ConteudoPrincipal.jsx'
import Rodape from './Componentes/Rodape/Rodape.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Cabecalho />
      <ConteudoPrincipal/>
      <Rodape />
      
    </div>
  )
}

export default App
