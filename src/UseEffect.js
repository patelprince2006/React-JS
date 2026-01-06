import React,{useEffect, useState} from 'react';

export default function UseEffect(){
    const [data, setdata]=useState(0);
    const [count, setcount]=useState(0);

    useEffect(()=>{
        alert("UseEffect Called"+data)
    },[count]);
 
    return(
        <>
         <h3>UseEffect</h3>
           <h2>data:{data}</h2>
        <h2>count: {count}</h2>
         <button onClick={()=>setdata(data+1)}>data update</button>
         <button onClick={()=>setcount(count+1)}>count update</button>
        </>
    );
}