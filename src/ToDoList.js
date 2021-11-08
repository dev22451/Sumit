import React from 'react';

const ToDoList = (props) =>{
    const deleteItems = () =>{
        console.log('deleted')
    };
    return (
        <>
    <div className="todo_style">
    
    <i className="fa fa-times"
          aria-hidden="true" 
          onClick={() => {
          props.onSelect(props.id);
    }}
    /><input type="checkbox" style={{width:"20px", height:"auto"}}/>
     <p>  {props.text}</p>
    </div>
    </>
    );
};

export default ToDoList;