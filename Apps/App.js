import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    name:"Anna",
    nameArray:["Dasha","Lena","Ver","Nata","Kate"],
    num:30,
    num1:0,
    // number:0,
    numberArray:[],
  }

ShowNumber=()=>
{ 
  this.setState({num1:10});
  this.setState({name:"Nelly"});
  console.log(this.state);
  for (let item of  this.state.nameArray)
  {
    console.log(item)
  }
}

// printArray=()=>
// {
//   let names=[];

//   for (let n of this.state.nameArray)
//   {
//     names.push(<div>{n}</div>)
//   }

//   return names;
// }

addToArray=()=>
{
  let number=0;
  let numbers=[];
  numbers.push(number);
  this.state.numberArray.push(state.number);
  this.setState({number:number+1});
  this.setState({number:number+1});
  console.log(numberArray);
  return numberArray;
 
}


  render() {
    return (
      <div className="App">
        {/* <div>My name is: {this.state.name}.</div>
        <div>My friend`s names are: {this.state.nameArray[0]} and {this.state.nameArray[1]}.</div>
        <div>We are : {this.state.num} years old.</div> */}
        {/* <div>{this.state.num1}</div>
        <div>{this.state.name}</div> */}
        {/* <div>{this.printArray()}</div> */}
        {/* <button onClick={this.ShowNumber}>Change</button> */}
        <button onClick={this.addToArray}>Add</button>
      </div>
    );
  }
}

export default App;
