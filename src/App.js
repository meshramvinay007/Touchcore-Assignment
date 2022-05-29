import "./App.css";
import { useState } from "react";
import LeftSection from "./components/LeftSection";
import MiddleSection from "./components/MiddleSection";
import RightSection from "./components/RightSection";

function App() {
  const [state, setState] = useState({
    contribution: 0,
    age: 25,
  });

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="App row">
      <LeftSection />
      <MiddleSection />
     <RightSection state={state} handleChange={handleChange} />
    </div>
  );
}

export default App;
