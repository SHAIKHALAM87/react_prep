import React from 'react';

function HOC(WrappedComponent){

    return function childcomp(){
        return(
            <>
                <div>
                    <p>HIGHER ORDER COMPONENT</p>
                    <WrappedComponent></WrappedComponent>
                </div>
            </>
        );
    }
}

export default HOC;