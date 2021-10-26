//import logo from './logo.svg';
import './App.css';
import React from 'react';

class Sumit extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={data:[], get:''}
    
  };
  handleChange=(e) => {
    const sumit=e.target.value
    
    this.setState({get:sumit})
  };
  handleAdd=()=>{
    //const abc=this.state
   if(this.state.get!==''){
      this.setState({data:[...this.state.data,this.state.get]})
      this.setState({get:''})
      this.setState({text:""})
   }
  }
  
  
  render(){
   const data=this.state.data;
   
 return (
    <div className="main_div">
       <div className="center_div">
           <br/>
           <h1>ToDo list</h1>
           <br/>
           <div className="inputdiv">
           <input type="text" id="type" placeholder="Add a item"  onChange={this.handleChange} value={this.state.text}/>
           <button id="click" onClick={this.handleAdd}> + </button><br/>
           
          {
          data.map((item)=>{
            return <>
            <span>{item}</span>
            <br/>
            </>

          })
          }
           </div>
           </div>
    </div>
  
 );
 }
}

export default Sumit;
