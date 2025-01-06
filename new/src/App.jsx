import { useState } from "react";
import Counter from './Counter.jsx';
import "./App.css";
import Desc from "./Desc.jsx";

function App() {
  
const [count,setCount]= useState(1);
const increment= ()=>{
  setCount(count+1)
}
  return (
    <div className="mainDiv">
      <Counter count1={count}/>
     <button onClick={increment}>go</button>
     <Desc/>
    </div>
  );
}

export default App;
