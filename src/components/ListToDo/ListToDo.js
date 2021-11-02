import { useEffect } from "react";
import useToDo from "../../hooks/useToDo";

const ListToDo = () => {
  const { toDo, loadToDo, deleteTask, loadCurrentToDo } = useToDo();

  const editClick = (event, toDo) => {
    loadCurrentToDo(toDo);
  };

  const deleteClick = (event, id) => {
    deleteTask(id);
  };

  useEffect(() => {
    loadToDo();
  }, [loadToDo]);

  return (
    <div className="form-check">
      {toDo.map((task) => (
        <div key={task.id} className="row justify-content-center text-center">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            {task.name}
          </label>
          <button
            type="button"
            className="btn btn-dark"
            onClick={(event) => {
              editClick(event, task);
            }}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={(event) => {
              deleteClick(event, task.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
export default ListToDo;
