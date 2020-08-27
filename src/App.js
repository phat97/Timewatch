import React, { Component } from "react";
import "./style/App.css";
import { TimersDashboard } from "./components/layouts/TimersDashboard";

export const App = () => {
  return (
    <div className="App">
      Main App
      <TimersDashboard />
    </div>
  );
};
