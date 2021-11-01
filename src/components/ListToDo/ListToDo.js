import { useEffect } from "react";
import useToDo from "../../hooks/useToDo";

const ListToDo = () => {
  const { toDo, loadToDo } = useToDo();

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
        </div>
      ))}
    </div>
  );
};
export default ListToDo;
