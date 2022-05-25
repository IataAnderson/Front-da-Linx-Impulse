import React from 'react'
import Botao from '../Botao/Botao'

function Cabecalho() {
  return (
    <header>
        <h2>Uma seleção de produtos</h2>
        <h1>Especial para você!</h1>
        <p>Todos produtos dessa lista foram selecionados a partir
            de sua navegação. Aproveite!
        </p>
        <nav>
            <ul>
                <ol><Botao texto='Conheça a Linx' cor='gray'/> </ol>
                <ol><Botao texto='Ajude o algoritimo' cor='gray'/> </ol>
                <ol><Botao texto='Seus produtos' cor='gray'/> </ol>
                <ol><Botao texto='Compartilhe' cor='gray'/> </ol>
                
            </ul>
        </nav>
    </header>
  )
}

export default Cabecalho