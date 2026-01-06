import React from 'react';

export default function Hide_show(){
    const [show, setShow]=React.useState(false);
    
    return(
        <div>
        {
            show? <h3>This is Hide and Show Component</h3> : null
        }
        {/* 1.way*/}
        {/* <button onClick={()=>setShow(false)}>Hide</button>
        <button onClick={()=>setShow(true)}>Show</button> */}

        {/* 2.way */}
        <button onClick={()=>setShow(!show)}>toggle</button>
        </div>
    );
}