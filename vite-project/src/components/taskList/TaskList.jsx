import { Button, BUTTON_TYPE } from "../button";
import style from "./TaskList.module.css";
import { TaskListItem } from "./taskListItem";

const TaskList = () => {
  const tasks = [
    { id: 1, taskName: "Item 1" },
    { id: 2, taskName: "Item 2" },
    { id: 3, taskName: "Item 3" },
  ];

  return (
    <ul className={style.TaskList}>
      {tasks.map((item) => (
        <TaskListItem key={item.id} taskName={item.taskName} />
      ))}
    </ul>
  );
};

export { TaskList };
