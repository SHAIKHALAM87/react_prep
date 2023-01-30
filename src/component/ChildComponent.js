import React,{useState, useEffect} from 'react';

const ChildComponent = ()=>{
    console.log("ChildInitialize");
    const [stext,settext] = useState("");

    useEffect(()=>{
        console.log("ChildDidMount");
        setTimeout(() => {
            console.log("####################################");
            //settext("This is a componentDidMount Method");
          }, 5000)
        return ()=>{
            console.log("ChildDidUnMount");
        }
    },[stext]);

    
    const handleclick = ()=>{
        settext("aftab")
    }

    return (
        <>
            {console.log("ChildMountRender")}
            <p onClick={handleclick}>CHILD COMPONENT {stext}</p>s 
        </>
    );
}

export default ChildComponent;