import "./App.css";
import Form from "./components/form";
import React, { useState } from "react";
import List from "./components/list";
import Header from "./components/header";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState("");
  const [date, setDate] = useState("DateTime");

  return (
    <div className="App">
      <Header />
      <div className="form-list">
        <Form
          data-testid="new-item-input"
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
        />
        <lst className-="list-container">
          <List setTodos={setTodos} todos={todos} />
        </lst>
      </div>
    </div>
  );
}

export default App;
