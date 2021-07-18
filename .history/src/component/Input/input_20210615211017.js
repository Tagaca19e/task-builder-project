// import { TextField, Button } from "@material-ui/core";
// import React, { useState } from "react";
// import "./input.css";

// const initialTodo = [""];

// function Input(props) {
//   const [input, setInput] = useState("");
//   const [list, setTodo] = React.useState(initialTodo);

//   function handleAdd() {
//     const newList = list;
//     newList.push(input);
//     setTodo(newList);
//     console.log(list);
//     setInput("");
//     handleClear();
//     // debugger;
//   }

//   const handleClear = () => {
//     Array.from(document.querySelectorAll("input")).forEach((input) => {
//       input.value = "";
//     });
//     Array.from(document.querySelectorAll("textarea")).forEach((textarea) => {
//       textarea.value = "";
//     });
//   };

//   return (
//     <div className="inputcolor">
//       <TextField
//         className="inputtext"
//         onKeyPress={(event) => {
//           if (event.key === "Enter") {
//             handleAdd();
//           }
//         }}
//         onChange={(event) => {
//           setInput(event.target.value);
//           console.log(input);
//         }}
//         label=""
//         variant="outlined"
//       />

//       <Button
//         onClick={handleAdd}
//         variant="contained"
//         color="primary"
//         className="button"
//       >
//         Submit
//       </Button>

//       <div className="list">
//         <p className="container">
//           {list &&
//             list.map((item, index) => {
//               return (
//                 <div className="line">
//                   <li className="list" key={index}>
//                     {item} <button> Delete </button>
//                   </li>
//                 </div>
//               );
//             })}
//         </p>
//       </div>
//       {/* list not updating quick but data does get added */}
//     </div>
//   );
// }

// export default Input;

import "./App.css";
import Form from "./components/form";
import React, { useState } from "react";
import List from "./components/list";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>IBM To do list</h1>
      </header>
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
