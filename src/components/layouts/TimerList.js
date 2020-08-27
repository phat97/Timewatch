import React from "react";
import { Timer } from "./Timer";
import "../../style/timerlist.css";

export const TimerList = () => {
  return (
    <div className="timerlist">
      TimerList
      <Timer />
      <Timer />
      <Timer />
    </div>
  );
};
