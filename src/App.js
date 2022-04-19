import { useState } from "react";
import "./App.css";
import { Button } from "./Component/Button/Button";
import { Count } from "./Component/Count/Count";

function App() {
  const [count, setCount] = useState(1);
  return (
    <div className="App">
      <Count counter={count} />
      <Button setCount={setCount} title="+" />
      <Button setCount={setCount} title="-" />
    </div>
  );
}

export default App;
