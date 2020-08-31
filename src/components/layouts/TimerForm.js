import React from "react";
import "../../style/timerForm.css";

export const TimerForm = (props) => {
  const buttonText = props.title ? "Update" : "Create";
  return (
    <div className="timer-form container">
      <div className="field">
        <label for="title">Title</label>
        <input type="text" id="title" defaultValue={props.title} />
      </div>
      <div className="field">
        <label for="project">Project</label>
        <input type="text" id="project" defaultValue={props.project} />
      </div>
      <div className="timer-form-buttons">
        <button className="submit-button button">{buttonText}</button>
        <button className="cancel-button button">Cancel</button>
      </div>
    </div>
  );
};
