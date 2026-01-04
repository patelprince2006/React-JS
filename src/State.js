import {useState} from "react";

export default function State() {
    const [data,setData]=useState(0);
    function updatedata(){
       setData(data+1)
    }

    return(
        <div>
            <h1>state</h1>
            <button onClick={updatedata}>{data}</button>
        </div>
    );
}

