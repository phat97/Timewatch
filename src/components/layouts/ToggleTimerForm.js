import React from "react";
import { useState } from "react";
import { TimerForm } from "./TimerForm";
import { VscDiffAdded } from "react-icons/vsc";
import "../../style/toggleTimerForm.css";

export const ToggleTimerForm = (props) => {
  /**
   * State to determine if new form page is open
   */
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Open form
   */
  const handleFormOpen = () => {
    setIsOpen(true);
  };

  /**
   * Close form
   */
  const handleFormClose = () => {
    setIsOpen(false);
  };

  /**
   * Close form after data is submitted
   *
   * @param {Object} timer
   */
  const handleFormSubmit = (timer) => {
    props.onFormSubmit(timer);
    setIsOpen(false);
  };

  if (isOpen) {
    return (
      <TimerForm
        onFormSubmit={handleFormSubmit}
        onFormClose={handleFormClose}
      />
    );
  } else {
    return (
      <div className="toggle-time-form">
        <button className="toggle-add" onClick={handleFormOpen}>
          <VscDiffAdded />
        </button>
      </div>
    );
  }
};
