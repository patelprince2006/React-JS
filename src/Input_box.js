import React from 'react';
import {useState} from 'react';
export default function Student(){
    const [data, setData]=useState(null);
    const [print, setprint]=useState(false);
    
    function getdata(val){
    
     setData(val.target.value)
        
    }
    return(
        <div>
        <h3>input box to change name</h3>
        {print? <h4>Hello, {data} using Props</h4>: null}
        <input type="text" onChange={getdata}/>
        <button onClick={()=>setprint(true)}>submit</button>
         </div>
    );
}