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
      runningSince={timer.runningSince}
      onFormSubmit={props.onFormSubmit}
      onFormDelete={props.onFormDelete}
    />
  ));
  return <div className="timerlist">{timers}</div>;
};
