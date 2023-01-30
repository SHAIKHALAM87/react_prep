import React from "react";
import { useState,useDebugValue } from "react"

export const CallBackFunction = ()=>{

   const [input , setInput] = useState("");
   const [count, setCount] = useState(0);

   const incrementcount = React.useCallback((e)=>{setCount(count + 1)},[count]);

    return(
        <div>
            <h1>THIS IS USE CALLBACK</h1>
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
            
            <h3>Input text: {input}</h3>
            <h3>Count: {count}</h3>
            <ChildComponent count={count} incrementcount={incrementcount}/>
        </div> 
    )
}


const ChildComponent = React.memo(({count,incrementcount})=> {
    console.log("Child component is rendering");
    const clown = "🤡";
    useDebugValue(`crazy ${clown}`);
    return (
        <div>
          <button onClick={incrementcount}>Increment Count</button>
          <h2>This is a child component.</h2>
          <h4>Count: {count}</h4>
        </div>
      );
  });