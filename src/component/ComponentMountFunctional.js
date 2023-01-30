import React,{useEffect, useState} from 'react';
import ChildComponent from './ChildComponent';

const ComponentMountFunction = ()=>{
    const [name,setname] = useState("aft");
    console.log("ComponentMountInitialize");

    useEffect(()=>{
        console.log("ComponentDidMount");
        console.log(name);
        return ()=>{
            console.log("ComponentDidUnMount");
        }
    },[name]);

    const handleclick = ()=>{
        setname("aftab")
    }

    return (
        <>
            {console.log("ComponentMountRender")}
            <p onClick={handleclick}>COMPONENT</p>
            <ChildComponent/>
        </>
    );
}

export default ComponentMountFunction;