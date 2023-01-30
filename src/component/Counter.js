import React, { useReducer, useState } from "react";


const Counter = ()=>{

    let leapY = [2000, 2001, 2002, 2003, 2004, 2005];

    function leapyear(leapParam){
        let leaparr = leapParam;

        for(let i=0;i< leapParam.length;i++){
            if((leapParam[i] / 4) > 0){
                console.log("Its not a leap year");
            }else{
                console.log("Its a leap year");
            }
        }
    }

    leapyear(leapY);


    const yourArray = [1, 1, 2, 3, 4, 5, 5];

    function getDuplicate(duparr){
        let getarr = duparr;

        var newarr = [];

        for(let i=0;i< getarr.length;i++){
            if(newarr && newarr.length > 0 && newarr.contains(getarr[i])){
                newarr.push(getarr[i]);
            }
        }
    }


    getDuplicate(yourArray);

    var initialstate = {
        count:0,
        type:''
    }

    function reducer(state,action){
        switch (action.type) {
            case 'INCREMENT':
                state.count++;
        case 'DECREMENT':
            state.count++;
        case 'RESET':
            state.count = 0;
            default:
                state;
        }
    }

    const [state,dispatch] = useReducer(initialstate,reducer);

    const incrementor = ()=>{
        dispatch('INCREMENT');
    }

    const deccrementor = ()=>{
        dispatch('DECREMENT');
    }

    const resettor = ()=>{
        dispatch('RESET');
    }

    return(
        <>
            <Button onclick={incrementor}>Increment</Button> 
            <Button onclick={incrementor}>Decrement</Button>
            <Button onclick={incrementor}>Reset</Button>
        </>
    );
}