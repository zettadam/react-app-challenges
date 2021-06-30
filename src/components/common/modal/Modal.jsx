import ReactDOM from 'react-dom'


const modalRootEl = document.getElementById('modal-root')

const Modal = ({
  children,
  open = false
}) => !open ? null : ReactDOM.createPortal(children, modalRootEl)

export default Modal
