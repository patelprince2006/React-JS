import React from 'react';
import {Table} from 'react-bootstrap';

export default function Array(){
    const student=[
        {name:"prince", age:24, course:"MCA"},
        {name:"patel", age:23, course:"BCA"},
        {name:"raman", age:22, course:"BBA"},
    ]

    return(
        <>
        <h3>Array of Object</h3>
        <Table border="1" striped>
            
            <tbody>
             <tr>
                <td>Name</td>
                <td>Age</td>
                <td>course</td>
            </tr>
            
        {
            
            student.map((item,i)=>
             <tr key={i}>
               <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.course}</td>
            </tr>
            )
        }
         </tbody>
         </Table>
        </>
    );
}