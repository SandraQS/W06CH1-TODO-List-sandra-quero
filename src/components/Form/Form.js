import { useState } from "react";
import useToDo from "../../hooks/useToDo";

const Form = () => {
  const { createNewTask } = useToDo();
  const initialTask = {
    name: "",
    done: false,
  };
  const [newTask, setNewTask] = useState(initialTask);

  const createTask = (event) => {
    event.preventDefault();
    setNewTask({ ...newTask, name: event.target.value });
  };

  const createClick = (event) => {
    event.preventDefault();
    createNewTask(newTask);
    setNewTask(initialTask);
  };

  return (
    <>
      <form onSubmit={createClick}>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Task
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Task"
          autoComplete="off"
          value={newTask.name}
          onChange={createTask}
        />
        <input type="submit" className="btn btn-dark mb-3" value="Create" />
      </form>
    </>
  );
};
export default Form;
