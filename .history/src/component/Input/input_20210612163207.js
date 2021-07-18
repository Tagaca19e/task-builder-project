import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./input.css";

const initialTodo = ["finish IBM", "go to school"];

function Input(props) {
  const [input, setInput] = useState("");
  const [list, setTodo] = React.useState(initialTodo);

  function handleAdd() {
    const newList = list;
    newList.push(input);
    setTodo(newList);
    console.log(list);
    setInput("");
    handleClear();
    // debugger;
  }

  const handleClear = () => {
    Array.from(document.querySelectorAll("input")).forEach((input) => {
      input.value = "";
    });
    Array.from(document.querySelectorAll("textarea")).forEach((textarea) => {
      textarea.value = "";
    });
  };
  return (
    <div className="inputcolor">
      <TextField
        onChange={(event) => {
          setInput(event.target.value);
          console.log(input);
        }}
        // onEnter={() => {
        //   list.push(input);
        // }}
        // id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />

      <Button onClick={handleAdd} variant="contained" color="primary">
        Submit
      </Button>

      {/* list not updating quick but data does get added */}
      {list &&
        list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
    </div>
  );
}

export default Input;
