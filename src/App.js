//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Input from './component/Input.js';
import Para from './component/Heading.js';
class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={data:[], getdata:'', ischecked:false} 
  };
  

  handleChange=(e) => {
    const demo=e.target.value
    this.setState({getdata:demo})
  };

  handleAdd=()=>{
   if(this.state.getdata!==''){
      this.setState({data:[...this.state.data,{todo:this.state.getdata}]})
      this.setState({getdata:''})
    }  
  }

  deleteitem =(index)=>{
    //console.log(index)
    return(
     this.setState( {data:this.state.data.filter((item,i) => {
        return index !== i})
      }) )
    }
    onCheck=()=>{
      this.setState({ischecked:true})
    }
  check=(e) => {
      this.setState({ischecked:e.target.checked}) 
   }
  

  render(){
   const data=this.state.data;
   console.log(this.state);
   const handlecheck=(index)=>this.onCheck(index)
 return (
    <div className="main_div">
       <div className="center_div">
           <br/>
           <h1>ToDo list</h1>
           <br/>
           <div className="inputdiv">
           <input type="text" id="type" placeholder="Add a item"  onChange={this.handleChange}
            value={this.state.getdata} />
           <button id="click" onClick={this.handleAdd}> + </button><br/>
          {
          data.map((item,index)=>{
            return <> 
            <div className ="div">
            <ul>
            <input type="checkbox" id="check" style={{width:"30px", height:"auto"}} onChange={this.check} onClick={this.handlecheck} checked={this.state.ischecked}/>
            <br/>
            <span>{item.todo}</span>
            <Input 
            handledelete={this.deleteitem}
            editIndex={index}/>
             {(this.state.ischecked)?<span><button>complete</button></span>:null}
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
