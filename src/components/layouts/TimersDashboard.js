import React from "react";
import { TimerList } from "./TimerList";
import { ToggleTimerForm } from "./ToggleTimerForm";
import "../../style/timerDashboard.css";

export const TimersDashboard = (props) => {
  return (
    <div className="timer-dashboard">
      TimersDashboard
      <TimerList />
      <ToggleTimerForm />
    </div>
  );
};
