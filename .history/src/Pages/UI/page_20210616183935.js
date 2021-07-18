import React from "react";
import Header from "../../components/header/header"; // no target file, targets index.js
import Input from "../../components/Input";

function page(props) {
  return (
    <div>
      <Header />
      <Input />
    </div>
  );
}

export default page;
