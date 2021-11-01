import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createActionThunks,
  deleteActionThunks,
  loadActionThunks,
} from "../redux/thunks/toDoThunks";

const useToDo = () => {
  const dispatch = useDispatch();
  const toDo = useSelector(({ toDo }) => toDo);

  const loadToDo = useCallback(() => {
    dispatch(loadActionThunks());
  }, [dispatch]);

  const createNewTask = (newTask) => {
    dispatch(createActionThunks(newTask));
  };

  const deleteTask = (id) => {
    dispatch(deleteActionThunks(id));
  };

  return {
    loadToDo,
    dispatch,
    createNewTask,
    deleteTask,
    toDo,
  };
};
export default useToDo;
