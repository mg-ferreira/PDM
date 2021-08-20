import React from 'react'
import Comentario from './Comentario'

const ListaComentarios = (props) => {
  return (
    <div className="container border rounded mt-2">
      <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6 m-2">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default ListaComentarios