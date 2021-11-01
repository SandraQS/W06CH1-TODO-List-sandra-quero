import { useEffect } from "react";
import useToDo from "../../hooks/useToDo";

const ListToDo = () => {
  const { toDo, loadToDo, deleteTask } = useToDo();

  const editClick = (event) => {
    //editar
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
        <div key={task.id}>
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
              editClick(event);
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
