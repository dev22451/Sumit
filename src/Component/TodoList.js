import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
const TodoList = (props) => {
    const {todoList , handleCheck,handleOnRemove} = props;
    return (
        <div>
            {
                todoList.map((list,index) => {
                    const {name , isCompleted} = list
                    return(
                        <div className="todolist">
                            <input type="checkbox" checked={isCompleted} onChange={()=>{handleCheck(index)}} className="checkbox" />
                            {name}
                            <span style={{float:"right" ,marginRight:"10px"}} onClick={()=>{handleOnRemove(index)}}><AiFillDelete/></span>
                            {isCompleted===true && <span style={{float:"right",background:"blue",border:"1px solid black"}}> Completed</span>}
                        </div>
                )
            })

        } 
        </div>
    );
}
export default TodoList