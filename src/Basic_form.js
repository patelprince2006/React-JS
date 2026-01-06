import React from 'react';
import {useState} from 'react';

export default function Basic_form(){
    const [name, setname]=useState("");
    const [check,setintrest] = useState(false);
    const [tnc,settnc]=useState("");

    function champ(e){
        e.preventDefault();
        console.log(name, check, tnc);
    }
    return(
        <form onSubmit={champ}>
        <h3>Basic Form</h3> 
        <input type="text" onChange={(e)=>setname(e.target.value)} />
        <br />
        <select onChange={(e)=>setintrest(e.target.value)}>
            <option>ce</option>
            <option>cse</option>
            <option>ec</option>
        </select>
        <br />
        <input type="checkbox" onChange={(e)=>settnc(e.target.checked)}/><span>Accept Terms and Conditions</span>
        <br />
        <button type="submit" onClick={champ}>Submit</button>
        </form>
    );
}