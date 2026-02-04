import "./ItemModal.css";
import whiteclose from "../../assets/whiteclose.svg";
function ItemModal({ isOpen, card, onClose, onDelete }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close_type_preview"
        >
          <img src={whiteclose} alt="Close Button" />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__footer-description">
            <p className="modal__caption">{card.name}</p>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <button className="modal__delete" onClick={() => onDelete(card._id)}>
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
