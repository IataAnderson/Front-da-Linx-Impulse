import React from 'react'
import Formulario from '../Formulario/Formulario.jsx'
import SeusProdutos from './SeusProdutos.jsx'
import styled from './ConteudoPrincipal.css'

function ConteudoPrincipal() {
  return (
    <body>
      <section className='CaixaTexto'>
        <div className='titulo2'>
        <h1>Ajude o algoritimo a ser mais certeiro</h1>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, 
            sit temporibus soluta quo officia quae qui ad nulla veritatis, nihil voluptas 
            eaque! Deleniti recusandae, et nobis vel pariatur quibusdam ipsum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
             molestias eius! Accusantium hic quisquam perferendis saepe aperiam beatae, 
             eos unde at. Dignissimos suscipit praesentium iure! Corporis aliquid obcaecati 
             dolores possimus.</p>
             </section>
             <form>
               <Formulario />
             </form>
             <section className='cards' >
               <SeusProdutos />
             </section>
    </body>
  )
}

export default ConteudoPrincipal