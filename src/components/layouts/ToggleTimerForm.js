import React from "react";
import { useEffect, useState } from "react";
import { TimerForm } from "./TimerForm";
import { VscDiffAdded } from "react-icons/vsc";
import "../../style/toggleTimerForm.css";

export const ToggleTimerForm = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFormOpen = () => {
    setIsOpen(true);
  };

  const handleFormClose = () => {
    setIsOpen(false);
  };

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
