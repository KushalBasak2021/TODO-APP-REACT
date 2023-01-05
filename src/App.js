import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>Kushal's Todo List</h1>
      <TodoForm
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        editId={editId}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setIsEditing={setIsEditing}
        setEditId={setEditId}
      />
    </div>
  );
}

export default App;
