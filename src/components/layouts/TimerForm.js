import React from "react";
import { useEffect, useState } from "react";
import "../../style/timerForm.css";

export const TimerForm = (props) => {
  const [state, setState] = useState({
    title: props.title || "",
    project: props.project || "",
  });

  const handleTitleChange = (e) => {
    setState({ title: e.target.value });
  };
  const handleProjectChange = (e) => {
    setState({ title: e.target.value });
  };

  const buttonText = props.title ? "Update" : "Create";
  return (
    <div className="timer-form container">
      <div className="field">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          defaultValue={state.title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="field">
        <label htmlFor="project">Project</label>
        <input
          type="text"
          id="project"
          defaultValue={state.project}
          onChange={handleProjectChange}
        />
      </div>
      <div className="timer-form-buttons">
        <button className="submit-button button">{buttonText}</button>
        <button className="cancel-button button">Cancel</button>
      </div>
    </div>
  );
};
