import { useEffect } from "react";
import useToDo from "../../hooks/useToDo";

const ListToDo = () => {
  const { toDo, loadToDo } = useToDo();

  const editClick = (event) => {
    console.log("editar");
  };

  const deleteClick = (event) => {
    console.log("borrar");
  };

  useEffect(() => {
    loadToDo();
  }, [loadToDo]);

  return (
    <div className="form-check">
      {toDo.map((tasck) => (
        <div key={tasck.id}>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            {tasck.name}
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
              deleteClick(event);
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
