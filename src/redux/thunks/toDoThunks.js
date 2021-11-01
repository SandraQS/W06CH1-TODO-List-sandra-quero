import { createAction, loadAction } from "../actions/actionCreators";

export const loadActionThunks = () => async (dispatch) => {
  const response = await fetch("https://todo-api-sqs.herokuapp.com/toDo");
  const toDoList = await response.json();

  dispatch(loadAction(toDoList));
};

export const createActionThunks = (toDo) => async (dispatch) => {
  const response = await fetch("https://todo-api-sqs.herokuapp.com/toDo", {
    method: "POST",
    body: JSON.stringify(toDo),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const newTask = await response.json();
  dispatch(createAction(newTask));
};
