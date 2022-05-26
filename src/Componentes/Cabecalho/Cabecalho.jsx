import React from 'react'
import Botao from '../Botao/Botao'
import Styles from './Cabecalho.css'

function Cabecalho() {
  return (
    <header className='Cabecalho'>
        <h2 className='Sub-titulo' >Uma seleção de produtos</h2>
        <h1 className='titulo'>Especial para você!</h1>
        <p className='paragrafo'>Todos produtos dessa lista foram selecionados a partir
            de sua navegação. Aproveite!
        </p>
        <nav>
            <ul className='BotaoNav'>
                <ol><Botao texto='Conheça a Linx' cor='white'/> </ol>
                <ol><Botao texto='Ajude o algoritimo' cor='white'/> </ol>
                <ol><Botao texto='Seus produtos' cor='white'/> </ol>
                <ol><Botao texto='Compartilhe' cor='white'/> </ol>
                
            </ul>
        </nav>
    </header>
  )
}

export default Cabecalho