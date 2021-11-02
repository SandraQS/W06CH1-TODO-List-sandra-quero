import "./App.css";
import Form from "./components/Form/Form";
import ListToDo from "./components/ListToDo/ListToDo";

function App() {
  return (
    <>
      <div className="container">
        <Form />
        <h1>To Do List</h1>
        <ListToDo />
      </div>
    </>
  );
}

export default App;
