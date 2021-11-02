import actionTypes from "../actions/actionTypes";

const toDoReducer = (toDoList = [], action) => {
  let newtoDoList = toDoList;

  switch (action.type) {
    case actionTypes.load:
      newtoDoList = [...action.toDoList];
      break;

    case actionTypes.create:
      newtoDoList = [...toDoList, action.toDo];
      break;
    case actionTypes.delete:
      newtoDoList = toDoList.filter((toDo) => toDo.id !== action.id);
      break;
    case actionTypes.modify:
      newtoDoList = toDoList.map((task) =>
        action.toDo.id === task.id ? { ...task, name: action.toDo.name } : task
      );
      break;
    default:
      break;
  }

  return newtoDoList;
};

export default toDoReducer;
