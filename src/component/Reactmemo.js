import React, { useEffect } from "react";

const Reactmemo = ({title,date})=>{

    useEffect(()=>{
        console.log("renders");
    },[title,date]);
    
    return(
        
        <>
            <h2>REACT MEMO</h2>
            <h2>{title}</h2>
            <h2>{date}</h2>
        </>
    );
}

export default  React.memo(Reactmemo);