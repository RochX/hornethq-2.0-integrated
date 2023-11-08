import logo from './logo.svg';
import React from 'react';
import './App.css';
import DropdownMenu from './DropdownMenu';
import SubjectDropdown from './SubjectDropdown';
import Navbar from './NavBar';
import './NavBar.css';
import Modal from './Modal'
import ClassPicker from './ClassPicker'
import { useState } from 'react';


function App() {
    const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <h1>Hornet HQ</h1>
      <Navbar/>
      <h3>click the button to see your schedule</h3>
      <button className="openModalButton" 
      onClick={() => {
        setOpenModal(true);
      }}
      >
        open
       </button>
       {openModal && <Modal closeModal={setOpenModal} />}
      <DropdownMenu />
      <SubjectDropdown />
      <ClassPicker/>


    </div>
  );
}

export default App;
