import React from 'react'
import Card from './Cartao'
import '../App.css'

const Comentario = (props) => {
  const aprovar = () => {
    alert('Comentário Aprovado')
  }
  const reprovar = () => {
    alert('Comentário Reprovado')
  }

  return (
    <Card 
      header={props.dataHora}
      aprovar={aprovar}
      reprovar={reprovar}
      buttonOK='Aprovar'
      buttonNOK='Reprovar'
    >
      <div className="d-flex align-items-center">
        <img className="avatar" src={props.avatar} alt="avatar"/>
        <div className="flex-grow-1 ms-2 border">
          <p className="card-text">{props.conteudo}</p>
        </div>
      </div>
    </Card>
  )
}

export default Comentario;