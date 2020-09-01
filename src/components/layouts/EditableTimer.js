import React from "react";
import { useEffect, useState } from "react";
import { Timer } from "./Timer";
import { TimerForm } from "./TimerForm";
import "../../style/editableTimer.css";

export const EditableTimer = (props) => {
  const [editFormOpen, setEditFormOpen] = useState(false);

  const handleEditClick = () => {
    openForm();
  };

  const handleFormClose = () => {
    closeForm();
  };

  const handleSubmit = (timer) => {
    props.onFormSubmit(timer);
    closeForm();
  };

  const closeForm = () => {
    setEditFormOpen(false);
  };

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
          running={props.runningSince}
          onEditClick={handleEditClick}
        />
      </div>
    );
  }
};
