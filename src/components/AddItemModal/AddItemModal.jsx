import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const defaultValues = {
    name: "",
    imageUrl: "",
    weather: "",
  };

  const validateForm = (formValues) => {
    const newErrors = {};

    if (!formValues.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formValues.name.length > 30) {
      newErrors.name = "Name must not exceed 30 characters";
    }

    if (!formValues.imageUrl.trim()) {
      newErrors.imageUrl = "Image URL is required";
    } else {
      try {
        new URL(formValues.imageUrl);
      } catch {
        newErrors.imageUrl = "Please enter a valid URL";
      }
    }

    return newErrors;
  };

  const {
    values,
    handleChange,
    errors,
    isFormValid,
    handleSubmit,
    resetForm,
    submitted,
  } = useFormWithValidation(defaultValues, validateForm);

  useEffect(() => {
    if (isOpen) resetForm();
  }, [isOpen]);

  const onSubmit = handleSubmit(() => {
    onAddItem(values);
  });

  return (
    <ModalWithForm
      title="New garment"
      name="new-card"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      buttonText="Add garment"
      isDisabled={submitted && !isFormValid}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className={`modal__input ${errors.name ? "modal__input_error" : ""}`}
          id="name"
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          autoComplete="off"
        />
        {errors.name && <span className="modal__error">{errors.name}</span>}
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          type="text"
          className={`modal__input ${errors.imageUrl ? "modal__input_error" : ""}`}
          id="imageUrl"
          placeholder="Image URL"
          name="imageUrl"
          value={values.imageUrl}
          onChange={handleChange}
          autoComplete="off"
        />
        {errors.imageUrl && (
          <span className="modal__error">{errors.imageUrl}</span>
        )}
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            type="radio"
            className="modal__radio-input"
            name="weather"
            value="hot"
            onChange={handleChange}
          />{" "}
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            className="modal__radio-input"
            name="weather"
            value="warm"
            onChange={handleChange}
          />{" "}
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            type="radio"
            className="modal__radio-input"
            name="weather"
            value="cold"
            onChange={handleChange}
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
