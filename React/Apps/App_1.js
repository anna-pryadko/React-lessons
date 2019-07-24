import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comp from './Components/LeftPage'
import Right from './Components/RightPage'
import Left from './Components/Comp'

class App extends Component {
  state={
    numberMy:0,
    numberArray:[],
  }

addToArray=()=>
{
  let numNew=this.state.numberMy;
  let numbers=this.state.numberArray;
  numbers.push(numNew);
  numNew=numNew+1;
  this.setState({numberMy:numNew});
  this.setState({numberArray:numbers});
  console.log(this.state.numberArray);
  return;
 
}
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-6">
             <Left></Left>
          </div>
          <div className="col-6">
             <Right></Right>
          </div>     
        </div>

        {/* <div>{this.printArray()}</div>
        <button onClick={this.addToArray}>Add</button>
        <div>{this.state.numberArray.join(',')}</div> */}
        {/* <Comp></Comp> */}
      </div>
    );
  }
}

export default App;
