import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Rohit",
    age: 22,
  };

  return (
    <>
      <h1 className="bg-green-500 text-black rounded-xl">Tailwind Test</h1>

      {/* <Card username = "rohit" someObj={myObj} /> */}
      <Card username="rohit" btnText="click me" />
      <Card username="rohitmon" btnText="visit me" />
    </>
  );
}

export default App;
