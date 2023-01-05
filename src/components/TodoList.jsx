import React from "react";
import Todo from "./Todo";

const TodoList = ({
  todos,
  setTodos,
  setIsEditing,
  setEditId,
  setInputText,
}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            setIsEditing={setIsEditing}
            setEditId={setEditId}
            setInputText={setInputText}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
