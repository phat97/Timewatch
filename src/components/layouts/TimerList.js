import React from "react";
import { EditableTimer } from "./EditableTimer";
import "../../style/timerlist.css";

export const TimerList = (props) => {
  const timers = props.timers.map((timer) => (
    <EditableTimer
      key={timer.id}
      id={timer.id}
      title={timer.title}
      project={timer.project}
      elapsed={timer.elapsed}
      onFormSubmit={props.onFormSubmit}
      onFormDelete={props.onFormDelete}
      updateElapsed={props.updateElapsed}
    />
  ));
  return <div className="timerlist">{timers}</div>;
};
