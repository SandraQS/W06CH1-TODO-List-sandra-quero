import {
  createAction,
  deleteAction,
  loadAction,
  modifyAction,
} from "../actions/actionCreators";

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

export const deleteActionThunks = (id) => async (dispatch) => {
  const response = await fetch(
    `https://todo-api-sqs.herokuapp.com/toDo/${id}`,
    {
      method: "DELETE",
    }
  );

  if (response.ok) {
    dispatch(deleteAction(id));
  }
};

export const modifyActionThunks = (toDo) => async (dispatch) => {
  const response = await fetch(
    `https://todo-api-sqs.herokuapp.com/toDo/${toDo.id}`,
    {
      method: "PUT",
      body: JSON.stringify(toDo),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const modifyTask = await response.json();
  dispatch(modifyAction(modifyTask));
};
