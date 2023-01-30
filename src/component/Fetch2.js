import React, { useState, useEffect } from "react";

const API = 'https://fortnite-api.theapinetwork.com/upcoming/get';

const Fetch2 = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      const request = fetch(API);
      const response = await request;
      const parsed = await response.json();
      console.log("parsed");
      console.log(parsed.data);
      setData(parsed.data);
      setLoading(true);
    }

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data === undefined) {
      console.log("undefined");
    return null;
  }

  const generateKey = (pre) => {
    let geykey = `${ pre }_${ new Date().getTime() }`;
    console.log(geykey);
    return geykey;
    }

  if(!isLoading){
      return (<span>loading...</span>);
  }

  return (
  <div>
      {

      data.map((items,index)=>{
        
         return <h4 key={generateKey(index)}> {items.item.name}</h4>
      })
  }
  </div>
  );
};

export default Fetch2;