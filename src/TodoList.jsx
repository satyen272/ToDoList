import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState(["Initial Task"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgb(120, 154, 131)",
        padding: "20px",
        borderRadius: "10px",
        width: "300px",
        margin: "auto",
      }}
    >
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter your task"
        value={newTask}
        onChange={handleInputChange}
        style={{ padding: "5px", marginBottom: "10px", width: "100%" }}
      />
      <button onClick={addTask} style={{ padding: "5px", cursor: "pointer" }}>
        Add Task
      </button>

      <hr style={{ width: "100%", margin: "15px 0" }} />

      <h4>Tasks To Do</h4>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
