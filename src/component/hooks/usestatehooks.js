import { useEffect, useState } from "react";

const UseStateHook = ()=>{
    console.log("UseStateHook");
    console.log(this);

    const [count,setcount] = useState(100);
    const [sibcount,setsibcount] = useState(190);
    const [obj,setobj] = useState({name:"AFTAB SHAIKH",age:31});

    const [state, setState] = useState({
        todos: 
        [
            {
              id: 1,
              title: 'take out trash',
              done: false
            }
        ]
      });



    const deccrement = (e)=>{
        setcount(count - 1);
        setsibcount(sibcount - 1);
    }

    const incrementobj = (e)=>{
        setobj({...obj,['age'] : obj['age']+1});

    }

    const [myArray, updateMyArray] = useState([]);

    const onClick = () => {
        //updateMyArray( arr => [...arr, `${arr.length}`]);

        console.log(state);
        let modos = Object.assign([],state.todos);
        setState({...state.modos,modos});
    };
    const onDlick = () => {
      //updateMyArray( arr => [...arr, `${arr.length}`]);

      console.log(state);

  };

    const ingredients = [
        {item:'banana'}, 
        {item:'avocado'}, 
        {item:'pear'}
      ];
      const newIngredients = ingredients.slice();
      newIngredients[2] = {
        ...newIngredients[2],
        item: 'orange'
      };
      //console.log('ingredients', ingredients);
      //console.log('newIngredients', newIngredients);

    return(
        <>
            {/*TODAY I AM {count} YEARS OF AGE.
            MY SIBLING IS {sibcount} YEARS OF AGE.
            <br />
            <button onClick={deccrement}>GET YOUNGER</button><br />

            MY NAME IS {obj?.name} AND MY AGE IS {obj?.age}. <br/>
            <button onClick={incrementobj}>MAKE SIBLING YOUNGER</button>
            <br/>

            <input type="button" onClick={ onClick } value="Update" />,
            <br/>
            <div>{myArray.map( e =>
            <div>{ e }</div>
            )} 
            </div>*/}
            <input type="button" onClick={ onClick } value="Update" />,
            <br/>
            <input type="button" onClick={ onDlick } value="Dupdate" />,
            <br/>
        </>
    );
}

export default UseStateHook;