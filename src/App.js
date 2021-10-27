//import logo from './logo.svg';
import './App.css';
import React from 'react';

class Sumit extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={data:[], get:'',key:""}
    
  };
  handleChange=(e) => {
    const sumit=e.target.value
    
    this.setState({get:sumit})
  };
  handleAdd=()=>{
    //const abc=this.state
   if(this.state.get!==''){
      this.setState({data:[...this.state.data,this.state.get]})
      this.setState({text:""})
      this.setState({get:''})
    }
   
  }
  deleteitem(key){
    const filteritems=this.state.data.filter(data=>
      data.key!==key);
      console.log(key);
      this.setState({data:filteritems})
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
           <input type="text" id="type" placeholder="Add a item"  onChange={this.handleChange}
            value={this.state.data.text}/>
           <button id="click" onClick={this.handleAdd}> + </button><br/>
          {
          data.map((item)=>{
            return <>
            <div className ="div">
            <ul>
            <input type="checkbox" id="check" style={{width:"30px", height:"auto"}}complete/>
            <span>{item}</span>
            <button id="secondclick" onclick={this.deleteitem}>x</button>
            <br/>
            </ul>
            </div>
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
