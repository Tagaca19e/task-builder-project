import "./App.css";
import Form from "./components/form";
import React, { useState } from "react";
import List from "./components/list";
import Header from "./components/header";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState("");

  return (
    <div className="App">
      <Header />
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <List setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
