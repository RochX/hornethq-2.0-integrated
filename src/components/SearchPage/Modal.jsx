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
        <h2> This is your schedule</h2>
        </div>
        <div className="body"> 
        <img src={require('./sample.png')} alt="Users course schedule for the selected term"></img>

        </div>
     </div>
  </div>;
  
}

export default Modal