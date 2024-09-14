import React from "react";
import "./Todo.css";
import tick from "../../assets/tick.png";
import not_tick from "../../assets/not_tick.png";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TodoItems = ({ text, id, isComplete, removeTodo, toggle, editTodo }) => {
  return (
    <div className="task-item-container">
      <div className="task-item" onClick={() => toggle(id)}>
        <img
          src={isComplete ? tick : not_tick}
          alt=""
          className="task-item-icon"
        />
        <p className={`task-item-text ${isComplete ? "line-through" : ""}`}>
          {text}
        </p>
      </div>
      <div className="task-actions">
        <FaEdit className="task-item-edit" onClick={() => editTodo(id, text)} />{" "}
        {/* Edit Button */}
        <MdDeleteOutline
          className="task-item-delete"
          onClick={() => removeTodo(id)}
        />
      </div>
    </div>
  );
};

export default TodoItems;
