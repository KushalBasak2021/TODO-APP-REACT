import React from "react";

const Todo = ({
  todo,
  todos,
  setTodos,
  setIsEditing,
  setEditId,
  setInputText,
}) => {
  function trashButtonClickHandler() {
    setTodos(todos.filter((el) => el.id !== todo.id));
  }

  // function checkButtonClickHandler() {
  //   setTodos(
  //     todos.map((item) => {
  //       if (item.id === todo.id) {
  //         return {
  //           ...item,
  //           completed: !item.completed,
  //         };
  //       }
  //       return item;
  //     })
  //   );
  // }

  function editButtonClickHandler() {
    setIsEditing(true);
    setEditId(todo.id);
    setInputText(todo.text);
  }

  //   onTodoUpdate={(prevTodo, newTodo) => {
  //     setTodoList(oldVal => {
  //         return oldVal.map(todo => {
  //             if(todo !== prevTodo){
  //                 return todo
  //             }
  //             return newTodo
  //         })
  //     })
  // }}
  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <div className="todoText">{todo.text}</div>
      <div className="btn">
        <button className="check-btn" onClick={editButtonClickHandler}>
          <i className="far fa-edit"></i>
        </button>
        <button className="trash-btn" onClick={trashButtonClickHandler}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
