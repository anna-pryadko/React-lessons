import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Left from './Components/LeftPage'
import Right from './Components/RightPage'

class App extends Component {
  state={
    numberMy:7,
   
  }

  print = () => {
    let printArray=[];
    for(let i=0;i<this.state.numberMy;i++)
    {
      printArray.push(<Left></Left>)
        
    }
    return printArray;
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-6">{this.print()}</div>
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
