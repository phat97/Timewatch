import React, { useEffect, useState } from "react";
import { TimerList } from "./TimerList";
import { ToggleTimerForm } from "./ToggleTimerForm";
import "../../style/timerDashboard.css";
import { v4 as uuidv4, v4 } from "uuid";
import { helpers } from "../../helper";

export const TimersDashboard = (props) => {
  const dummyData = [
    {
      title: "Practice squat",
      project: "Gym Chores",
      id: v4(),
      elapsed: 5456099,
      runningSince: Date.now(),
    },
    {
      title: "Bake squash",
      project: "Kitchen Chores",
      id: v4(),
      elapsed: 1273998,
      runningSince: null,
    },
  ];

  const handleEditFormSubmit = (attrs) => {
    updateTimer(attrs);
  };

  const [timers, setTimers] = useState(dummyData);

  const createTimer = (timer) => {
    const t = helpers.newTimer(timer);
    setTimers((timers) => [...timers, t]);
  };

  const updateTimer = (attrs) => {
    setTimers(
      timers.map((timer) => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project,
          });
        } else {
          return timer;
        }
      })
    );
  };

  const handleCreateFormSubmit = (timer) => {
    createTimer(timer);
  };

  return (
    <div className="timer-dashboard">
      <TimerList timers={timers} onFormSubmit={handleEditFormSubmit} />
      <ToggleTimerForm onFormSubmit={handleCreateFormSubmit} />
    </div>
  );
};
