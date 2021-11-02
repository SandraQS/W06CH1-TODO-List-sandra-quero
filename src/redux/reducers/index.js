import { combineReducers } from "redux";
import currentToDoReducer from "./currentToDoReducer";
import toDoReducer from "./toDoReducer";

const rootReducer = combineReducers({
  toDo: toDoReducer,
  currentToDo: currentToDoReducer,
});

export default rootReducer;
