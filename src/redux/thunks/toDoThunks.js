import { loadAction } from "../actions/actionCreators";

export const loadActionThunks = () => async (dispatch) => {
  const response = await fetch("https://todo-api-sqs.herokuapp.com/toDo");
  const toDoList = await response.json();

  dispatch(loadAction(toDoList));
};
