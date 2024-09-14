import React, { useEffect, useRef, useState } from "react";
import "./Todo.css";
import ToDoImage from "../../assets/Todo.png";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const [editId, setEditId] = useState(null);
  const inputRef = useRef();

  const addOrUpdate = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    if (editId) {
      setTodoList((prev) =>
        prev.map((todo) =>
          todo.id === editId ? { ...todo, text: inputText } : todo
        )
      );
      setEditId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text: inputText,
        isComplete: false,
      };
      setTodoList((prev) => [...prev, newTodo]);
    }

    inputRef.current.value = "";
  };

  const removeTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  const editTodo = (id, text) => {
    inputRef.current.value = text;
    setEditId(id);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="main-task-background">
      <div className="todo-main-container">
        {/* Title */}
        <div className="todo-container">
          <img src={ToDoImage} alt="" className="todo-image" />
          <h1 className="todo-heading">To-Do List</h1>
        </div>

        {/* Input-Box */}
        <div className="task-input-container">
          <input
            className="task-input"
            ref={inputRef}
            type="text"
            placeholder="Add your Task?"
          />
          <button
            className={`task-add-button ${editId ? "update-button" : ""}`}
            onClick={addOrUpdate}
          >
            {editId ? "Update" : "Add +"}
          </button>
        </div>

        {/* To-do List */}
        <div>
          {todoList.map((item) => (
            <TodoItems
              text={item.text}
              key={item.id}
              id={item.id}
              isComplete={item.isComplete}
              removeTodo={removeTodo}
              toggle={toggle}
              editTodo={editTodo} // Pass edit function
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
