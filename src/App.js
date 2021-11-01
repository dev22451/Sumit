import React from 'react';
import './App.css';
import TodoContainer from './Container/TodoContainer';

function App(){
  return(
    <div>
      <div className="main">
        <div className="Todo">
        <h1>Todo App</h1>
        </div>
      <TodoContainer/>
      </div>
    </div>
  )
}
export default App;