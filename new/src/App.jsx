import { useState } from "react";
import Counter from './Counter.jsx';
import "./App.css";
import Button from "./Button.jsx";
function App() {
  
const [count,setCount]= useState(1);
  return (
    <div className="mainDiv">
      <Counter count1={count}/>
      <Button/>
    </div>
  );
}

export default App;
