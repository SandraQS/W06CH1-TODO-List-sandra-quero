import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadActionThunks } from "../redux/thunks/toDoThunks";

const useToDo = () => {
  const dispatch = useDispatch();
  const toDo = useSelector(({ toDo }) => toDo);

  const loadToDo = useCallback(() => {
    dispatch(loadActionThunks());
  }, [dispatch]);

  return {
    loadToDo,
    dispatch,
    toDo,
  };
};
export default useToDo;
