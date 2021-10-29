//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Input from './component/Input.js';
import Para from './component/Heading.js';
class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={data:[],edit:false, get:''} 
  };
  

  handleChange=(e) => {
    const xyz=e.target.value
    this.setState({get:xyz})
  };

  handleAdd=()=>{
   if(this.state.get!==''){
      this.setState({data:[...this.state.data,{todo:this.state.get}]})
      this.setState({get:''})
    }  
  }

  deleteitem =(index)=>{
    //console.log(index)
    return(
     this.setState( {data:this.state.data.filter((item,i) => {
        return index !== i})
      }) )
    }
  
  checked=(e) => {
      
    const cb = this.state("check");
    
     if(cb.checked==true){
        Text.display ="block";
        }else{
          Text.display ="none";
        }
   }
  
  
  render(){
   const data=this.state.data;
   console.log(this.state);
 return (
    <div className="main_div">
       <div className="center_div">
           <br/>
           <h1>ToDo list</h1>
           <br/>
           <div className="inputdiv">
           <input type="text" id="type" placeholder="Add a item"  onChange={this.handleChange}
            value={this.state.get} />
           <button id="click" onClick={this.handleAdd}> + </button><br/>
          {
          data.map((item,index)=>{
            return <>
            <Input/>,
            <Para Number="first"/>
            <div className ="div">
            <ul>
            <input type="checkbox" id="check" style={{width:"30px", height:"auto"}} onClick={this.checked}/>
            <span>{item.todo}</span>
            <button id="secondclick" onClick={()=>this.deleteitem(index)}>x</button>
            <button id ="edit" onClick={()=>this.editItem(index)}>EDIT</button>
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

export default App;
