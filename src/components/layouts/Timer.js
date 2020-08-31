import React from "react";
import "../../style/timer.css";
import { helpers } from "../../helper";
import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";

export const Timer = (props) => {
  const elapsedString = helpers.renderElapsedString(props.elapsed);
  const buttonText = props.running ? "Stop" : "Start";
  return (
    <div>
      <div className="timer container">
        <div className="timer-tile">{props.title}</div>
        <div className="timer-project">{props.project}</div>
        <div className="timer-elapsed">{elapsedString}</div>
        <div className="timer-icons">
          <div className="timer-delete">
            <RiDeleteBin5Fill />
          </div>
          <div className="timer-edit">
            <RiEdit2Fill />
          </div>
        </div>
      </div>
      <button className={`runtime-button ${props.running ? "running" : ""}`}>
        {buttonText}
      </button>
    </div>
  );
};
