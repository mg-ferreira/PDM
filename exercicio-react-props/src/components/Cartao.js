import React from 'react'
import Feedback from './Feedback';

const Cartao = (props) => {
  return (
    <div className="card text-white bg-dark mb-3">
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.children}
      </div>
      <div className="card-footer">
        <Feedback
          buttonOK={props.buttonOK}
          aprovar={props.aprovar}
          buttonNOK={props.buttonNOK}
          reprovar={props.reprovar}
        />
      </div>
    </div>
  )
}

export default Cartao