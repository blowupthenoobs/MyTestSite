import React from 'react';
import { useState } from 'react';

export default function Demo() {
    var [num, setNum]=useState(5);

    function updateValue(){
        setNum(num+1);
    }

    return(
        <div>
            <center>
                <h1>{num}</h1>
                <button onClick={updateValue}>Change Value</button>
            </center>
        </div>
    )
}