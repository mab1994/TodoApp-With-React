import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap'
import{v4 as uuidv4} from 'uuid'
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      toDo:[],
      text:"",
      todos:[],
      inpute:""
     
    }
  }
  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };
    addNewName = () => {
      this.setState({
        toDo:this.state.toDo.concat({id:uuidv4(),name: this.state.text, test: false}),text:""
      });
    };
    complete =id=>{
      this.setState({
        toDo:this.state.toDo.map(el=> el.id===id?{...el,test:!el.test}:el)
      })
    };
    deletes = id =>{
      this.setState({
        toDo:this.state.toDo.filter(el=> el.id!==id)
          
        })
    }
      
    
  render(){
     
      return (
        <div className="App">
          <div className="container header">
            <div className="titre">
                  <h1>Annoying TODO App!</h1>
                  <h4>Put a task in the text area below</h4>
            </div>
            <div className="input">
                  <input type="text" class="form-control" name="text" value={this.state.text} placeholder="Enter Your texte" onChange={this.handleChange} aria-label="Username" aria-describedby="addon-wrapping"/>
            </div>      
            <div className="add">
                  <button type="button" class="btn btn-primary" onClick={this.addNewName}> Add</button>
            </div>
          </div>  
           
        <div class="container list">
            {this.state.toDo.map(el=> <div className="boutton">
                <Button className="btn" onClick={()=>this.complete(el.id)} variant="success">{el.test? "Undo":"Complete"}</Button>
                <Button className="btn"  onClick={()=>this.deletes(el.id)} variant="danger">Delete</Button> 
                <h4 className={el.test ?"inder" :"btn"}>{el.name}</h4>         
              </div>
            )}
        
        </div>
       
        
        </div>
      );
  }
}
export default App;