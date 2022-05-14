import "./modal.css";
import "./detalles.css"
import Arrow from '../../Img/arrow-left.svg'

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button type="button" onClick={handleClose} className='close'>
          <img src={Arrow} alt="" />
        </button>
        {children}
      </section>
    </div>
  );
};

export default Modal;