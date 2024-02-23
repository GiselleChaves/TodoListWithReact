import { BUTTON_TYPE, Button, TextField } from "../../components";
import style from "./CreateTaskForm.module.css";

const CreateTaskForm = () => {
  return (
    <form className={style.CreateTaskForm}>
      <TextField />
      <Button text="+" />
    </form>
  );
};

export { CreateTaskForm };
