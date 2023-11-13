import React from 'react';
import './SearchPage.css';
import DropdownMenu from './DropdownMenu';
import './DropdownMenu.css';
import Navbar from './NavBar';
import './NavBar.css';
import Modal from './Modal'
import './Modal.css';
import ClassPicker from './ClassPicker'
import { useState } from 'react';
import TermSelection from './TermSelection';
import ClearSearch from './ClearSearch';
import './ClearSearch.css';


function SearchPage() {
    const [openModal, setOpenModal] = useState(false);
  return (
    <div className="search-page">
     <Navbar/>
      <div className="content-container">
      <h3>
        Preview Schedule
      </h3>
      <button className="openModalButton" 
      onClick={() => {
        setOpenModal(true);
      }}
    style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '20px',
      cursor: 'pointer',
      marginTop: '0px',
      border: '2px' 
    }}
      >
       Schedule
       </button>
       {openModal && <Modal closeModal={setOpenModal} />}
       </div>
       <TermSelection/>
      <DropdownMenu />
      <ClassPicker/>
      <ClearSearch/>


    </div>
  );
}

export default SearchPage;
