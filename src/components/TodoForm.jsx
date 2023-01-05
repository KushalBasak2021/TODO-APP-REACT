import React from "react";

const TodoForm = ({
  setInputText,
  setTodos,
  todos,
  inputText,
  isEditing,
  setIsEditing,
  editId,
}) => {
  function inputChangeHandler(e) {
    setInputText(e.target.value);
  }

  function todoHandler(e) {
    e.preventDefault();
    if (!inputText || /^\s*$/.test(inputText)) {
      return;
    }

    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  }

  function updateHandler(e) {
    e.preventDefault();
    if (!inputText || /^\s*$/.test(inputText)) {
      return;
    }
    setTodos(
      todos.map((item) => {
        if (item.id === editId) {
          return {
            ...item,
            text: inputText,
          };
        }
        return item;
      })
    );
    setInputText("");
    setIsEditing(false);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Add a todo"
        onChange={inputChangeHandler}
        value={inputText}
      />
      <button onClick={isEditing ? updateHandler : todoHandler}>
        {isEditing ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
