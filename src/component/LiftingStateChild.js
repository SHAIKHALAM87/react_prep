import React from "react";
import { useState } from "react";


const ChildComponent = ({childtoparent})=>{
    const [chldstate,setchldstate] = useState('CHILD DATA');
    return(
        <>
        <button onClick={()=>{childtoparent(chldstate)}}>Click me</button>
        </>
    );
}

export default ChildComponent;