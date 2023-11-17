import React, { useState } from "react";
import SliderContainer from "./SliderContainer";

function Modal({ showModal, setShowModal, toggleModal , winnersList }) {
  return (
    <>
      {showModal && (
        <div className="modal">
          {/* <div className="overlay"></div> */}

          <div className="container-modal">
            <SliderContainer winnersList={winnersList} />

            <div className="modal-button-container">
            <button className="modal-close-button" onClick={toggleModal}>Close</button>
            </div>
            
          
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
