import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {

  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  function handleDelete() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  function handleConfirmModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={handleDelete}>Delete</button>
        </div>
      </div>
      { /* the same as: modalIsOpen ? <Modal /> : null */ }
      { modalIsOpen && <Modal 
                          onCancel={ handleCloseModal }
                          onConfirm={ handleConfirmModal }
                       /> }
      { modalIsOpen && <Backdrop onCancel={ handleCloseModal }/> }
    </div>
  );
}

export default Todo;