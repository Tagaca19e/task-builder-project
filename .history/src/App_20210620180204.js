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
  const [tDL, setTDL] = useState([]);
  return (
    <div className="App">
      <Header />

      <Form
        data-testid="new-item-input"
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setTDL={setTDL}
        tDL={tDL}
      />

      <List setTodos={setTodos} todos={todos} setTDL={setTDL} tDL={tDL} />
      {/* <DateTime /> */}
    </div>
  );
}

export default App;
