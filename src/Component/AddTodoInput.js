 import React from "react"
 const AddTodoInput = (props) => {
    const {handleAddTodo,handleOnTodoName,todoName ,error}=props;
        return (<>
            <div className="TodoInput">
                <input type="text"
                value={todoName}
                 placeholder="Enter item here" 
                onChange={handleOnTodoName}
                />
                <button 
                className="button"
                onClick={handleAddTodo}>Add 
                </button>
                <span>{error}</span>
            </div>
        </>
        )
    }
    
    export default AddTodoInput