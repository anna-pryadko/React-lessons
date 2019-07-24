import React, { Component } from 'react';
import './App.css';
import PrintStudents from './Components/PrintStudents'
//import InputStudent from './Components/InputStudent'
//import Input from './Components/InputText'


class App extends Component {
  student={ 
    id:"",
    name:"",
    mail:"",
    phone:""
  }
  counter=0;

  state={
    studentsArray :[]
    
  }

changeStudent = (event,type) => {
    if (type === 0){
      this.student.name=event.target.value;
      console.log(this.student.name)
    }
    if (type === 1) {
      this.student.mail = event.target.value;
      console.log(this.student.mail)
    }
    if (type === 2) {
      this.student.phone = event.target.value;
      console.log(this.student.phone)
    }
    this.student.id=this.counter;
  }

  Save=() => {
    let arr = [...this.state.studentsArray];
    let stu = {...this.student};
    this.counter++;
    arr.push(stu);
    console.log(arr);
    this.setState({studentsArray:arr});
    console.log(this.state)
  }

  print = () => {
    let students  = [...this.state.studentsArray];
    let printArray=[];
    students.forEach(function(student)
    {
      printArray.push(<PrintStudents student={student}></PrintStudents>); 
    });
    return printArray;  
  }


  render() {    

    // let Input = (<div>
    //         {
    //             this.state.studentsArray.map((item, index) => {
    //                 return <InputT changed={(event) => this.changeName(event,index)} name={item.name} key={item.id}></InputT>
    //             })}
    //     </div>)
     
    return (
      <div className="App">
      <div className="row">
        <div className="col-4 offset-1">
        <form>
   <div className="form-group">
       <label htmlFor="f1">Enter Name</label>
       <input type="text" className="form-control" id="f1" placeholder="Enter Name"  onChange={(event) => this.changeStudent(event,0)}></input>
   </div>
   <div className="form-group">
       <label htmlFor="f2">Enter Mail</label>
       <input type="text" className="form-control" id="f2" placeholder="Enter Mail" onChange={(event) => this.changeStudent(event,1)}></input>
   </div>
   <div className="form-group">
       <label htmlFor="f3">Enter Phone</label>
       <input type="text" className="form-control" id="f3" placeholder="Enter Phone" onChange={(event) => this.changeStudent(event,2)}></input>
   </div>

   <input type="buttom" className="btn btn-primary but" id="bt" defaultValue="Save" onClick={this.Save}/>
   
</form>

        {/* <InputStudent
            changeName={(event) => this.changeStudent(event,0)}
            changeMail={(event) => this.changeStudent(event,1)}
            changePhone={(event) => this.changeStudent(event,2)}
            Save = {this.Save}
         ></InputStudent> */}
        </div>
        <div className="col-4 offset-1">
        <table className='table'>
              <thead>
              <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Name</th>
              <th scope='col'>Mail</th>
              <th scope='col'>Phone</th>
              </tr>
              </thead>
              <tbody>{this.print()}</tbody>
        </table>
        </div>
      
      </div>
      </div>
    );
  }
}

export default App;
