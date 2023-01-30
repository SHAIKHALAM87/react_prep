import React,{useState,useEffect} from 'react';

const Fetch = ()=>{

    //const [gettext,settext] = useState('Default text');
    const [getjson,setjson] = useState([]); 

    useEffect(()=>{
        getapi();
        
    },[]);


    const getapi = async () => { 
        const fetchitem = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const getjs = await fetchitem.json();
        setjson(getjs.data);
        console.log(getjs.data);
    }



    // const handleClick = (event)=>{
    //     getapi();
    //     settext("New text");
    //     console.log(getjson);
    // }

    return(

            <div>{getjson.map((item)=>{
                console.log(item);
                return <h4>{item.item.name}</h4>
            })}</div>

    );
}

export default Fetch;
