import { Button, BUTTON_TYPE } from "../../button";
import style from "./TaskListItem.module.css";

const TaskListItem = (props) => {
  const { taskName } = props;

  return (
    <li className={style.TaskListItem}>
      {taskName}
      <Button text="-" type={BUTTON_TYPE.SECONDARY} />
    </li>
  );
};

export { TaskListItem };
