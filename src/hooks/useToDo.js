import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCurrentToDoAction,
  resetCurrentCurrentAction,
} from "../redux/actions/actionCreators";
import {
  createActionThunks,
  deleteActionThunks,
  loadActionThunks,
  modifyActionThunks,
} from "../redux/thunks/toDoThunks";

const useToDo = () => {
  const dispatch = useDispatch();
  const { toDo, currentToDo } = useSelector(({ toDo, currentToDo }) => ({
    toDo,
    currentToDo,
  }));

  const loadToDo = useCallback(() => {
    dispatch(loadActionThunks());
  }, [dispatch]);

  const createNewTask = (newTask) => {
    dispatch(createActionThunks(newTask));
  };

  const deleteTask = (id) => {
    dispatch(deleteActionThunks(id));
  };

  const loadCurrentToDo = (toDo) => {
    dispatch(loadCurrentToDoAction(toDo));
  };

  const resetCurrentToDo = () => {
    dispatch(resetCurrentCurrentAction());
  };

  const modifyTask = (toDo) => {
    dispatch(modifyActionThunks(toDo));
  };

  return {
    loadToDo,
    dispatch,
    createNewTask,
    deleteTask,
    loadCurrentToDo,
    resetCurrentToDo,
    modifyTask,
    toDo,
    currentToDo,
  };
};
export default useToDo;
