import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
const initialTasks = [
    { text: "Do coding challenges", completed: false },  // Active task
    { text: "Do coding challenges", completed: true },   // Completed task
    { text: "Do coding challenges", completed: false },
    { text: "Task done", completed: true },               // Completed task
    { text: "Task done", completed: true },    // Active task
    ];
  const [tasks, setTasks] = useState(initialTasks);
  const [input, setInput] = useState("");
  const [tab, setTab] = useState("All");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const deleteCompleted = () => {
    const newTasks = tasks.filter((task) => !task.completed);
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (tab === "All") return true;
    if (tab === "Active") return !task.completed;
    if (tab === "Completed") return task.completed;
    return false;
  });

  return (
    <div className="todo-list">
      <div className="tabs">
        <button onClick={() => setTab("All")}>All</button>
        <button onClick={() => setTab("Active")}>Active</button>
        <button onClick={() => setTab("Completed")}>Completed</button>
      </div>
      <div className="input-container">
        {(tab === "All" || tab === "Active") && (
          <>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new task"
            />
            <button onClick={addTask}>Add</button>
          </>
        )}
      </div>
      <div className="tasks">
        {filteredTasks.map((task, index) => (
          <TodoItem
            key={index}
            index={index}
            task={task}
            toggleCompletion={toggleCompletion}
            deleteTask={deleteTask}
            tab={tab}
          />
        ))}
      </div>
      {tab === "Completed" && tasks.some((task) => task.completed) && (
        <button className="delete-completed" onClick={deleteCompleted}>
          Delete All
        </button>
      )}
    </div>
  );
};

export default TodoList;
