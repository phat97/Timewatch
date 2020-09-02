import React from "react";
import "../../style/timer.css";
import { helpers } from "../../helper";
import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { TimeInterval } from "../constants/constants";

export const Timer = (props) => {
  /**
   * State if timer is currently running
   */
  const [isRunning, setIsRunning] = useState(false);

  /**
   * State for elasped time counter
   */
  const [localElapsed, setLocalElapsedTime] = useState(props.elapsed);

  const elapsedString = helpers.renderElapsedString(localElapsed);
  const buttonText = isRunning ? "Stop" : "Start";

  /**
   * Update localElapsed each second and render to user
   */
  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(
        () =>
          setLocalElapsedTime(
            (prevElapsedTime) => prevElapsedTime + TimeInterval.ONE_SECOND
          ),
        TimeInterval.ONE_SECOND
      );
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  /**
   * Handle for deletion
   */
  const handleDeleteForm = () => {
    handleStopwatch();
    props.onFormDelete(props.id);
  };

  /**
   * Handle form edit
   */
  const handleEdit = () => {
    handleStopwatch();
    props.onEditClick();
  };

  /**
   * Update parent with new elapsed time
   */
  const handleUpdateElapsed = () => {
    props.updateElapsed({
      id: props.id,
      elapsed: localElapsed,
    });
  };

  /**
   * Update parent when timer is stopped
   */
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
        <div className="timer-elapsed no-select">{elapsedString}</div>
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
