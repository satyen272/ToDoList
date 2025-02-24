import { useState } from "react";
function TodoList() {
  const [task, setTask] = useState(["initiall Task"]);
  const [newTask, setNewTask] = useState("");
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <h1>Todo List</h1>
      <input
        placeholder="Enter your task to add to the list"
        value={newTask}
      ></input>
      <br></br>
      <br></br>
      <button>Add Task</button>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>

      <h4>Task ToDoS</h4>
      <ul>
        {task.map((task) => {
          // eslint-disable-next-line react/jsx-key
          return <li>{task}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
