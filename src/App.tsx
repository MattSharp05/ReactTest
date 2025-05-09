import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>My React App</h1>
      <div className="card">
        {"Profile "}
        <Button title="Sign Out" onClick={() => alert("Sign Out")} />
      </div>
      <div className="card">
        <Button title="Register" onClick={() => alert("Registered!")} />
      </div>
    </>
  );
}

export default App;
