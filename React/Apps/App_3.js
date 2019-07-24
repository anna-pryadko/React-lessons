import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PrintStudents from './Components/PrintStudents'
import Input from './Components/InputText'


class App extends Component {
  state={
    studentsArray :[],
    student:{

    }
   
  }

ChangeFun() {
  event.target.value
  if (index==0)
  student.name=event.target.value
}

InsertStudent() {

}

  render() {    

    let Input = (<div>
            {
                this.state.studentsArray.map((item, index) => {
                    return <InputT changed={(event) => this.changeName(event,index)} name={item.name} key={item.id}></InputT>
                })}
        </div>)
     
    return (
      <div className="App">

        <form>
            <div className="form-group">
                <label for="f1">Enter Name</label>
                <input type="text" className="form-control" id="f1" placeholder="Enter Name" ></input>
            </div>
            <div className="form-group">
                <label for="f2">Enter Mail</label>
                <input type="text" className="form-control" id="f2" placeholder="Enter Mail"></input>
            </div>
            <div className="form-group">
                <label for="f3">Enter Phone</label>
                <input type="text" className="form-control" id="f3" placeholder="Enter Phone"></input>
            </div>
        
            <input type="buttom" className="btn btn-primary but" id="bt" value="Save" onclick="Save()"/>
            
        </form>
   
       
      </div>
    );
  }
}

export default App;
