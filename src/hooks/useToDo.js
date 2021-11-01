import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createActionThunks,
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

  return {
    loadToDo,
    dispatch,
    createNewTask,
    toDo,
  };
};
export default useToDo;
