import { useEffect, useMemo, useState } from "react";
import useToDo from "../../hooks/useToDo";

const Form = () => {
  const { currentToDo, createNewTask, modifyTask, resetCurrentToDo } =
    useToDo();
  const initialTask = useMemo(
    () => ({
      name: "",
      done: false,
    }),
    []
  );
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

  const editClick = (event) => {
    event.preventDefault();
    modifyTask({ ...newTask, id: currentToDo.toDo.id });
    resetCurrentToDo();
    setNewTask(initialTask);
  };

  useEffect(() => {
    if (currentToDo.isEditing) {
      setNewTask({ ...initialTask, name: currentToDo.toDo.name });
    }
  }, [currentToDo, initialTask]);

  return (
    <>
      <form
        onSubmit={
          currentToDo.isEditing
            ? (event) => {
                editClick(event);
              }
            : createClick
        }
      >
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
        <button type="submit" className="btn btn-dark mb-3">
          {currentToDo.isEditing ? "Edit" : "Create"}
        </button>
      </form>
    </>
  );
};
export default Form;
