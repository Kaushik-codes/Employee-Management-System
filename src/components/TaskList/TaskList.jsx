import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import EmptyTask from "./EmptyTask";

const TaskList = ({ data }) => {
  const hasTasks = data.tasks.some(
    (t) => t.active || t.newTask || t.completed || t.failed,
  );
  return (
    <div
      id="tasklist"
      className="w-full flex flex-nowrap overflow-x-auto items-stretch justify-start gap-5 h-[55%] py-5 mt-12"
    >
      {!hasTasks ? (
        <EmptyTask />
      ) : (
        data.tasks.map((task, idx) => {
          if (task.active) {
            return <AcceptTask key={idx} task={task} employee={data} />;
          }
          if (task.newTask) {
            return <NewTask key={idx} task={task} employee={data} />;
          }
          if (task.completed) {
            return <CompleteTask key={idx} task={task} employee={data} />;
          }
          if (task.failed) {
            return <FailedTask key={idx} task={task} employee={data} />;
          }
        })
      )}
    </div>
  );
};

export default TaskList;
