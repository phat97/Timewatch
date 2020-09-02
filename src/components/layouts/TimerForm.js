import React from "react";
import { useState } from "react";
import "../../style/timerForm.css";

export const TimerForm = (props) => {
  /**
   * Title form data
   */
  const [title, setTitle] = useState(props.title || "");

  /**
   * Project form data
   */
  const [project, setProject] = useState(props.project || "");

  const buttonText = props.id ? "Update" : "Create";

  /**
   * Store new title
   * @param {Event} e
   */
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  /**
   * Store new project
   * @param {Event} e
   */
  const handleProjectChange = (e) => {
    setProject(e.target.value);
  };

  /**
   * handle form subission
   */
  const handleSubmit = () => {
    props.onFormSubmit({
      id: props.id,
      title: title,
      project: project,
    });
  };

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
