import React from "react";
import ChildComponent from "./LiftingStateChild";


const ParentComponent = ()=>{
    const childtoparent = (msg)=>{
        console.log(msg);
    }
    return(
        <>
            <div>This is parent div</div>
            <ChildComponent childtoparent={childtoparent}/>
        </>
    );
}

export default ParentComponent;