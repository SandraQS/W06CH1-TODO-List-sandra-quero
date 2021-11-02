import actionTypes from "./actionTypes";

export const loadAction = (toDoList) => ({
  type: actionTypes.load,
  toDoList,
});

export const createAction = (toDo) => ({
  type: actionTypes.create,
  toDo,
});

export const deleteAction = (id) => ({
  type: actionTypes.delete,
  id,
});

export const modifyAction = (toDo) => ({
  type: actionTypes.modify,
  toDo,
});

export const loadCurrentToDoAction = (toDo) => ({
  type: actionTypes.loadCurrentToDo,
  toDo,
});

export const resetCurrentCurrentAction = () => ({
  type: actionTypes.resetCurrentCurrentToDo,
});
