import React, { useEffect, useState } from "react";
import { TimerList } from "./TimerList";
import { ToggleTimerForm } from "./ToggleTimerForm";
import "../../style/timerDashboard.css";

export const TimersDashboard = (props) => {
  const dummyData = [
    {
      title: "Practice squat",
      project: "Gym Chores",
      id: 0,
      elapsed: 5456099,
      runningSince: Date.now(),
    },
    {
      title: "Bake squash",
      project: "Kitchen Chores",
      id: 1,
      elapsed: 1273998,
      runningSince: null,
    },
  ];
  const [timers, setTimers] = useState(dummyData);

  return (
    <div className="timer-dashboard">
      <TimerList timers={timers} />
      <ToggleTimerForm />
    </div>
  );
};
