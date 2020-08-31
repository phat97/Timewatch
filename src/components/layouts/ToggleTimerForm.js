import React from "react";
import { VscDiffAdded } from "react-icons/vsc";
import "../../style/toggleTimerForm.css";

export const ToggleTimerForm = () => {
  return (
    <div className="toggle-time-form">
      <button className="toggle-add">
        <VscDiffAdded />
      </button>
    </div>
  );
};
