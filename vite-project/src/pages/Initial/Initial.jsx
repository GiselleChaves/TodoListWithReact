import { CreateTaskForm, TaskList } from "../../components";
import style from "./Initial.module.css";

const Initial = () => {
  return (
    <div className={style.Initial}>
      <CreateTaskForm />
      <TaskList />
    </div>
  );
};

export { Initial };
