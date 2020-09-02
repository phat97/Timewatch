import React from "react";
import { useState } from "react";
import { Timer } from "./Timer";
import { TimerForm } from "./TimerForm";
import "../../style/editableTimer.css";

export const EditableTimer = (props) => {
  /**
   * State to open time card editor
   */
  const [editFormOpen, setEditFormOpen] = useState(false);

  /**
   * Open form when edit button is clicked
   */
  const handleEditClick = () => {
    openForm();
  };

  /**
   * Close form when close button is clicked
   */
  const handleFormClose = () => {
    closeForm();
  };

  /**
   * Close form when data is submitted
   *
   * @param {Object} timer
   */
  const handleSubmit = (timer) => {
    props.onFormSubmit(timer);
    closeForm();
  };

  /**
   * Close the form
   */
  const closeForm = () => {
    setEditFormOpen(false);
  };

  /**
   * Edit the form
   */
  const openForm = () => {
    setEditFormOpen(true);
  };

  if (editFormOpen) {
    return (
      <div className="editable-timer">
        <TimerForm
          id={props.id}
          title={props.title}
          project={props.project}
          onFormSubmit={handleSubmit}
          onFormClose={handleFormClose}
        />
      </div>
    );
  } else {
    return (
      <div className="editable-timer">
        <Timer
          id={props.id}
          title={props.title}
          project={props.project}
          elapsed={props.elapsed}
          onEditClick={handleEditClick}
          onFormDelete={props.onFormDelete}
          updateElapsed={props.updateElapsed}
        />
      </div>
    );
  }
};
