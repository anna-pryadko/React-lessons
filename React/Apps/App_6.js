import React, { Component } from 'react';
import './App.css';
//import Left from './Components/LeftPage'
//import InputT from './Components/InputText'
//import Buttons from './Components/Buttons'
//import Box from './Components/Box'
import Card from './Components/Card'
import axios from 'axios'

class App extends Component {
 
    state={
      arrPosts:[],  
      
    }
componentDidMount=()=>
{
  var self=this;
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function(response){
    self.setState({arrPosts:response.data});
    //console.log(response.data);
    //console.log(self.state.arrPosts);
    
  })
  .catch(function(error){
     console.log(error);
  });
}
 
print=()=>{
      //console.log(this.state.arrPosts);
      let arrPostsNew  = [...this.state.arrPosts];
      let printArray=[];
      console.log(arrPostsNew);
      for (let post of arrPostsNew)
      { 
        printArray.push(<Card userId={post.userId} title={post.title} body={post.body}></Card>); 
      };
      return printArray;  
}

    render() {
        return (
           <div className="App">
           <div className="container">
            <div className="row">
                {this.print()}
            </div>
            </div>
          </div>
        )
      }
    }

export default App;




