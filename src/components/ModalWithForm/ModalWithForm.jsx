import "./ModalWithForm.css";
import close from "../../assets/close.svg";

function ModalWithForm({
  children,
  buttonText = "Add garment",
  title,
  name,
  isOpen,
  onClose,
  onSubmit,
  isDisabled,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
          id="modal-close"
        >
          <img src={close} alt="Close Button" />
        </button>
        <form onSubmit={onSubmit} className="modal__form" name={name}>
          {children}
          <button
            type="submit"
            className={`modal__submit ${
              isDisabled ? "modal__submit_disabled" : ""
            }`}
            disabled={isDisabled}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
