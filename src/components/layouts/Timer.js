import React from "react";
import "../../style/timer.css";
import { helpers } from "../../helper";
import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";
import { useEffect, useState } from "react";

export const Timer = (props) => {
  const [isRunning, setIsRunning] = useState(false);
  const [localElapsed, setLocalElapsedTime] = useState(props.elapsed);

  const elapsedString = helpers.renderElapsedString(localElapsed);
  const buttonText = isRunning ? "Stop" : "Start";

  const handleDeleteForm = () => {
    props.onFormDelete(props.id);
  };

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(
        () => setLocalElapsedTime((prevElapsedTime) => prevElapsedTime + 1000),
        1000
      );
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleEdit = () => {
    handleStopwatch();
    props.onEditClick();
  };

  const handleUpdateElapsed = () => {
    props.updateElapsed({
      id: props.id,
      elapsed: localElapsed,
    });
  };

  const handleStopwatch = () => {
    let status = isRunning;

    if (status) {
      handleUpdateElapsed();
    }
    setIsRunning(!status);
  };

  return (
    <div>
      <div className="timer container">
        <div className="timer-tile">{props.title}</div>
        <div className="timer-project">{props.project}</div>
        <div className="timer-elapsed">{elapsedString}</div>
        <div className="timer-icons">
          <div className="timer-delete" onClick={handleDeleteForm}>
            <RiDeleteBin5Fill />
          </div>
          <div className="timer-edit" onClick={handleEdit}>
            <RiEdit2Fill />
          </div>
        </div>
      </div>
      <button
        className={`runtime-button ${isRunning ? "running" : ""}`}
        onClick={handleStopwatch}
      >
        {buttonText}
      </button>
    </div>
  );
};
