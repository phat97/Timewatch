import React from "react";
import { EditableTimer } from "./EditableTimer";
import "../../style/timerlist.css";

export const TimerList = (props) => {
  const dummyData = {
    title: "Title",
    project: "project",
    elapsed: "8986300",
    running: false,
    editFormOpen: false,
  };
  return (
    <div className="timerlist">
      TimerList
      <EditableTimer
        title={dummyData.title}
        project={dummyData.project}
        elapsed={dummyData.elapsed}
        running={dummyData.running}
        editFormOpen={dummyData.editFormOpen}
      />
      <EditableTimer
        title={dummyData.title}
        project={dummyData.project}
        elapsed={dummyData.elapsed}
        running={dummyData.running}
        editFormOpen={true}
      />
      <EditableTimer
        title={dummyData.title}
        project={dummyData.project}
        elapsed={dummyData.elapsed}
        running={true}
        editFormOpen={dummyData.editFormOpen}
      />
    </div>
  );
};
