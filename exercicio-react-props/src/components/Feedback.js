import React from 'react'

const Feedback = (props) => {
  return (
    <div className="d-flex justify-content-evenly m-2">
      <button type="button" onClick={props.aprovar} className="btn btn-primary">
        {props.buttonOK}
      </button>
      <button type="button" onClick={props.reprovar} className="btn btn-danger">
        {props.buttonNOK}
      </button>
    </div>
  )
}

export default Feedback