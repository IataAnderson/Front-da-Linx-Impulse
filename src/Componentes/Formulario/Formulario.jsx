import React from 'react'

function Formulario() {
  return (
    <div className='form'>
        <h2>Entre em contato!</h2>
          <form>            
            <div className='items-form'>
              <input placeholder='Nome' type="text" />
              <input placeholder='Email' type="text" />
              <input placeholder='CPF' type="number" />
              <button>Enviar</button>
            </div>
            </form>
            </div>
  )
}

export default Formulario