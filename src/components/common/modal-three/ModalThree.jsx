import React from 'react'

import Modal from '../modal/Modal'


const ModalThree = ({
  closeFn = () => null,
  open = false
}) => (
  <Modal open={open}>
    <div className="modal--mask">
      <div className="modal-window">
        <header className="modal--header">
          <h1>Modal Three</h1>
        </header>
        <div className="modal--body">
          <p>Modal Three content will be rendered here.</p>
        </div>
        <footer className="modal--footer">
          <button type="button" onClick={closeFn}>Close</button>
        </footer>
      </div>
    </div>
  </Modal>
)

export default ModalThree
