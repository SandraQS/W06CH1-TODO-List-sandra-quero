import actionTypes from "../actions/actionTypes";

const currentToDoReducer = (
  currentToDo = { toDo: {}, isEditing: false },
  action
) => {
  let newCurrentToDo = currentToDo;

  switch (action.type) {
    case actionTypes.loadCurrentToDo:
      newCurrentToDo = { toDo: action.toDo, isEditing: true };
      break;
    case actionTypes.resetCurrentCurrentToDo:
      newCurrentToDo = { toDo: {}, isEditing: false };
      break;
    default:
      break;
  }

  return newCurrentToDo;
};

export default currentToDoReducer;
