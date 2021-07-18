import "./App.css";
import Form from "./components/form";
import React, { useState } from "react";
import List from "./components/list";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Header />
      {/* <header>
        <h1 className="ibm-header">IBM To do list</h1>
      </header> */}
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
