import React from 'react';

function Input(props) {
    const data=props.too
    console.log(data)
    const daa =props.handledelete
    console.log(daa)
    return(
        <button id="secondclick" onClick={()=>props.handledelete(props.editIndex)}>x</button>
    )
}
export default Input;