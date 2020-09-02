import React, { useState, useEffect } from "react";
import { TimerList } from "./TimerList";
import { ToggleTimerForm } from "./ToggleTimerForm";
import "../../style/timerDashboard.css";
import { helpers } from "../../helper";

/**
 *  Main component holding all the child components and Timer states
 */
export const TimersDashboard = () => {
  /**
   * Timer state
   */
  const [timers, setTimers] = useState(
    JSON.parse(localStorage.getItem("localData")) || []
  );

  /**
   * Update localStorage with each state change
   */
  useEffect(() => {
    let data = JSON.stringify(timers);
    localStorage.setItem("localData", data);
  });

  /**
   * handle time card creation
   *
   * @param {Object} timer
   */
  const handleCreateFormSubmit = (timer) => {
    createTimer(timer);
  };

  /**
   * handle time card edit
   *
   * @param {Object} attrs
   */
  const handleEditFormSubmit = (attrs) => {
    updateTimer(attrs);
  };

  /**
   * handle time card deletion
   *
   * @param {String} id
   */
  const handleDeleteFormSubmit = (id) => {
    deleteTimer(id);
  };

  /**
   * Create a new time card
   *
   * @param {Object} timer
   */
  const createTimer = (timer) => {
    const t = helpers.newTimer(timer);
    setTimers((timers) => [...timers, t]);
  };

  /**
   * Update the time card with new input value
   *
   * @param {Object} attrs
   */
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

  /**
   * Delete time card using ID
   *
   * @param {String} id
   */
  const deleteTimer = (id) => {
    setTimers(timers.filter((timer) => timer.id !== id));
  };

  /**
   * Update time card with new time value
   *
   * @param {Object} attrs
   */
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
