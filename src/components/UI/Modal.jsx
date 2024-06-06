import { createPortal } from "react-dom";
import PropTypes from "prop-types";

function Modal(props) {
  function handleCloseModal() {
    props.setIsShowModal(false);
  }

  return createPortal(
    <div className="modal d-inline-block">
      <div
        className="modal-overlay"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#0D6EFD",
          position: "absolute",
          opacity: ".3",
        }}
        onClick={handleCloseModal}
      ></div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleCloseModal}
            ></button>
          </div>
          <div className="modal-body">
            <p>{props.description}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCloseModal}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modals")
  );
}

Modal.propTypes = {
  setIsShowModal: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Modal;
