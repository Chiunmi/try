import React, { useState } from "react";
import MainLayout from "../Layout/MainLayout";
import "./EventPage.css";

const Popup = ({
  isOpen,
  onClose,
  title,
  content,
  button,
  onButtonClick,
  secondButtonLabel,
  onSecondButtonClick,
  quantityLabel,
  thirdButtonLabel,
  onThirdButtonClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-square-rounded-x close-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="#9e9e9e"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={onClose}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10l4 4m0 -4l-4 4" />
          <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
        </svg>
        <h2>{title}</h2>
        <p>{content}</p>
        <p className="note">
          I ensure all fields are correctly filled out and will attend the said
          event.
        </p>
        {secondButtonLabel && (
          <button className="second-button" onClick={onSecondButtonClick}>
            {secondButtonLabel}
          </button>
        )}
        {button && (
          <div>
            {" "}
            {/* Wrap the input and button in a div */}
            <input type="number" defaultValue={1} min={1} />{" "}
            {/* Input field for quantity */}
            <button className="primary-button" onClick={onButtonClick}>
              {button}
            </button>
          </div>
        )}

        {quantityLabel && (
          <div className="quantity-input">
            <label htmlFor="quantity">{quantityLabel}</label>
            <input type="number" id="quantity" defaultValue={1} min={1} />
          </div>
        )}

        <div className="popup-button">
          {thirdButtonLabel && (
            <button className="third-button" onClick={onThirdButtonClick}>
              {thirdButtonLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

function EventPage() {
  const [popupDetails, setPopupDetails] = useState({
    title: "",
    content: "",
    button: "",
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleUploadSubmitClick = () => {
    setIsPopupOpen(true);
    setPopupDetails({
      title: "Bakun Bakuna Bakuna",
      content:
        "Please review the information you've entered before submitting. Ensure all fields are correctly filled out.",
      quantityLabel: "Number of Tickets:", // Label for the quantity input
      thirdButtonLabel: "Attend",
      onThirdButtonClick: handleSubmit,
    });
  };

  const handleSubmit = () => {};

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <MainLayout>
      <div className="event">
        <div className="adminEvent">
          <span>
            {" "}
            To join one jadhsdhsdhsfkdjfk click deiskngnsmf Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod
          </span>

          <svg
            className="event-edit"
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-plus"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="#EDE9E9"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>

          <svg
            className="event-add"
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-pencil"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="#EDE9E9"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
            <path d="M13.5 6.5l4 4" />
          </svg>
        </div>

        <div className="event-container">
          <div className="event1">
            <p className="event-title">Bakuna Bakuna Bakuna Bakuna</p>
            <div className="event-detail">
              MAY 23, 2024
              <br />
              7AM-12PM
            </div>
            <h3>About</h3>
            <div className="about-line"></div>
            <p className="event-about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="form-button">
              <button className="interested" onClick={handleUploadSubmitClick}>
                Interested
              </button>
            </div>
          </div>
        </div>
      </div>

      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        {...popupDetails}
      />
    </MainLayout>
  );
}

export default EventPage;
