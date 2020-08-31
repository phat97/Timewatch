import React from "react";
import "./style/App.css";
import { TimersDashboard } from "./components/layouts/TimersDashboard";

export const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Time Watch</h1>
      </header>

      <TimersDashboard />
    </div>
  );
};
