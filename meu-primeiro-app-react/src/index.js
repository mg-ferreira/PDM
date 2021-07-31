import React from 'react'
import ReactDom from 'react-dom'
import image from './images/image01.jpg'
import './styles.css'

const App = () => {
  const medicos = {
    nome1: 'Cristina Dornelles',
    nome2: 'Juliana Dias Oliveira',
    nome3: 'Roberto Mendes'
  }
  
  const obterEstilos = (item) => {
    switch (item) {
      case 'container':
        return {
          backgroundColor: '#eee',
          border: 'solid 1px #333',
          borderRadius: 5,
          padding: 10,
          alignItems: 'center',
          textAlign: 'center'
        }

      case 'title':
        return {
          fontSize: 21,
          textAlign: 'center',
          fontWeight: 'bold',
          margin: '5px 0'
        }

      default:
        return null
    }
  }
 
  return (
    <div style={obterEstilos('container')}>
      <p style={obterEstilos('title')}>Profissionais de Saúde</p>

      <div style={
        {
          border: 'solid 1px #ddd',
          display: 'flex',
          justifyContent: 'space-around',
          padding: '8px',
          borderRadius: '5px'
        }
      }>
        
        <div className={'card'}>
          <img className={'photo'} src={image} alt='imagem 1'/>
          <p>{medicos.nome1}</p>
        </div>
        
        <div className={'card'}>
          <img className={'photo'} src={`${process.env.PUBLIC_URL}/image02.jpg`} alt='imagem 2'/>
          <p>{medicos.nome2}</p>
        </div>

        <div className={'card'}>
          <img className={'photo'} src={'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'} alt='imagem 3'/>
          <p>{medicos.nome3}</p>
        </div>

      </div>
    </div>
  )
}

ReactDom.render(
  <App />,
  document.querySelector('#root')
)