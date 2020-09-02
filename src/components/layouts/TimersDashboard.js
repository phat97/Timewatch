import React, { useState, useEffect } from "react";
import { TimerList } from "./TimerList";
import { ToggleTimerForm } from "./ToggleTimerForm";
import "../../style/timerDashboard.css";
import { v4 } from "uuid";
import { helpers } from "../../helper";

export const TimersDashboard = (props) => {
  const [timers, setTimers] = useState(
    JSON.parse(localStorage.getItem("localData")) || []
  );

  useEffect(() => {
    let data = JSON.stringify(timers);
    localStorage.setItem("localData", data);
  });

  const handleCreateFormSubmit = (timer) => {
    createTimer(timer);
  };

  const handleEditFormSubmit = (attrs) => {
    updateTimer(attrs);
  };

  const handleDeleteFormSubmit = (attrs) => {
    deleteTimer(attrs);
  };

  const createTimer = (timer) => {
    const t = helpers.newTimer(timer);
    setTimers((timers) => [...timers, t]);
  };

  const updateTimer = (attrs) => {
    setTimers(
      timers.map((timer) => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title: attrs.title || "Title",
            project: attrs.project || "Project",
          });
        } else {
          return timer;
        }
      })
    );
  };

  const updateElapsed = (attrs) => {
    setTimers(
      timers.map((timer) => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            elapsed: attrs.elapsed,
          });
        } else {
          return timer;
        }
      })
    );
  };

  const deleteTimer = (id) => {
    setTimers(timers.filter((timer) => timer.id !== id));
  };

  return (
    <div className="timer-dashboard">
      <TimerList
        timers={timers}
        onFormSubmit={handleEditFormSubmit}
        onFormDelete={handleDeleteFormSubmit}
        updateElapsed={updateElapsed}
      />
      <ToggleTimerForm onFormSubmit={handleCreateFormSubmit} />
    </div>
  );
};
