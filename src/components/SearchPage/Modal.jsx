import React from 'react'
import "./Modal.css";

function Modal({closeModal}) {
  return <div className="modalBackground">
    <div className="modalContainer">
        <div className='closeButton'>
        <button onClick={() => closeModal(false)}
        > X </button>
        </div>
        <div className="title"> 
        <h1> This is your schedule</h1>
        </div>
        <div className="body"> 
        <img src={require('./sample.png')}></img>

        </div>
     </div>
  </div>;
  
}

export default Modal