import React, { useState } from "react";
import ToDoList from './ToDoList';



const Container = () => {
  const [inputList,setInputList] = useState("");
  const[Items,setItems] = useState([]);

  const itemEvent = (event) => {
     
     
        setInputList(event.target.value)
    
};


const listofItems = () => {
     setItems((oldItems) => {
         return[...oldItems, inputList]; 
     });
     setInputList("");
};
const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) =>  {
        return oldItems.filter((arrElem,index)=> {
            return index!==id;

        })
    })
};

    return (
    <>
   <div className="main_div">
       <div className="center_div">
           <br/>
           <h1>ToDo list</h1>
           <br/>
           <div className="inputdiv">
           <input type="text"
             placeholder="Add a item"
             onChange={itemEvent} 
             value={inputList}
             className="InputClass"/>
             <button  
             onClick={listofItems}
             className="ButtonClass"> + </button>
           </div>
           <div>
              
               {Items.map((itemval,index) => {
               if(itemval===''){
                   return;
               } else{
                return <ToDoList 
                key={index}
                 id={index}
                 text = {itemval}
                 onSelect={deleteItems}
                 />;
                
               }
                   
               })}

           </div>
       </div>

   </div>
    </>
 );
}

export default Container;