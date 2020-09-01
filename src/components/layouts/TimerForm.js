import React from "react";
import { useEffect, useState } from "react";
import "../../style/timerForm.css";

export const TimerForm = (props) => {
  const [title, setTitle] = useState(props.title || "");
  const [project, setProject] = useState(props.project || "");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleProjectChange = (e) => {
    setProject(e.target.value);
  };

  const handleSubmit = () => {
    props.onFormSubmit({
      id: props.id,
      title: title,
      project: project,
    });
  };

  const buttonText = props.id ? "Update" : "Create";
  return (
    <div className="timer-form container">
      <div className="field">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          defaultValue={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="field">
        <label htmlFor="project">Project</label>
        <input
          type="text"
          id="project"
          defaultValue={project}
          onChange={handleProjectChange}
        />
      </div>
      <div className="timer-form-buttons">
        <button className="submit-button button" onClick={handleSubmit}>
          {buttonText}
        </button>
        <button className="cancel-button button" onClick={props.onFormClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};
