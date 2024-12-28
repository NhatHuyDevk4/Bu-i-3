import React, { useState } from "react";
import "./Modal.scss";

const Modal = () => {
  const [showModel, setShowModel] = useState(false);



  const handleShowModel = () => {
    setShowModel(!showModel);
  }

  const handleCloseModel = () => {
    setShowModel(false);
  }

  return (
    <>
      <button onClick={handleShowModel}>Click</button>

      {showModel && (
        <div className="modal">
          <div className="modal__body">
            <button className="modal__close" onClick={handleCloseModel}>Close</button>
            <div className="modal__content">Nội dung</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
