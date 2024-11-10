import React from "react";
import { FaTrash } from "react-icons/fa";

const TodoItem = ({ task, index, toggleCompletion, deleteTask, tab }) => {
  return (
    <div className={`todo-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompletion(index)}
      />
      <span>{task.text}</span>
      {tab === "Completed" && (
        <button className="deleteTask" onClick={() => deleteTask(index)}>
          <FaTrash style={{fill:"gray"}} />
        </button>
      )}
    </div>
  );
};

export default TodoItem;
