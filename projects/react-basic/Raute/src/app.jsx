import "./app.css";
import React, { useEffect, useState } from "react";
import Button from "./button";

function App() {
  const [count, setCount] = useState(0);

  const handleEvent = (count) => {
    setCount(count);
  };
  return (
    <>
      <h1>{count}</h1>
      <Button onSearch={handleEvent}></Button>
    </>
  );
}

export default App;
