import React, { Component } from 'react';
import './App.css';
//import Left from './Components/LeftPage'
//import InputT from './Components/InputText'
import Buttons from './Components/Buttons'
import Box from './Components/Box'

class App extends Component {
 
    state={
      colors:['red','blue','green'],
      colorsBox:[],  
      number:0,
    }

    getColor=(color)=>
    {
        let getColor=[...this.state.colorsBox];
        let newColor=color;
        getColor.push(newColor);
        console.log(color);
        console.log(getColor);
        this.setState({colorsBox:getColor});
    }

    print = () => {
      let colorsBox  = [...this.state.colorsBox];
      let printArray=[];
      colorsBox.forEach(function(color)
      { 
        printArray.push(<Box color={color}></Box>); 
      });
      return printArray;  
    }

    // delBox=(id)=>{
    //    let getColor1=[...this.state.colorsBox];
    //    let numBox=id;
    //    getColor1.splice(getColor1.indexOf(numBox), 1); 
    //    this.setState({colorsBox:getColor1});
    // }
  
    render() {
        return (
           <div className="App">
            <div className="row">
            {this.state.colors.map( (color) => {
                return (
                    
                    <div className="col-3">
                        <Buttons color={color} getColorFun={this.getColor}></Buttons>
                    </div>
                )
            })}
            </div>
            <div className="row">
            {this.print()}
            </div>
          </div>
        )
      }
    }

export default App;




