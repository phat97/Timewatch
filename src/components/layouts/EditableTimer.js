import React from "react";
import { Timer } from "./Timer";
import { TimerForm } from "./TimerForm";
import "../../style/editableTimer.css";

export const EditableTimer = (props) => {
  if (props.editFormOpen) {
    return (
      <div className="editable-timer">
        <TimerForm title={props.title} project={props.project} />
      </div>
    );
  } else {
    return (
      <div className="editable-timer">
        <Timer
          title={props.title}
          project={props.project}
          elapsed={props.elapsed}
          running={props.running}
        />
      </div>
    );
  }
};
