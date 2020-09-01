import React from "react";
import { useEffect, useState } from "react";
import { TimerForm } from "./TimerForm";
import { VscDiffAdded } from "react-icons/vsc";
import "../../style/toggleTimerForm.css";

export const ToggleTimerForm = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFormOpen = () => {
    setIsOpen({ isOpen: true });
  };

  if (isOpen) {
    return <TimerForm />;
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
