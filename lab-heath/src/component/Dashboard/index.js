import React from 'react';
import ExpenseForm from '../NoteCreateForm/index';

class Dashboard extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       notes: [],
     };
 
    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }

   }

  handleAddNotes(notes){
    notes.createdOn = new Date();
    notes.id = Math.random();
    notes.completed = false;
    notes.editing = false;

    this.setState(previousState => {
      return {notes :[...previousState.notes,notes]};
    });
  }

  
  render(){
    return(
      <div>
        <h1>Dashboard</h1>
        <ExpenseForm handleAddNotes={this.handleAddNotes}/>
        <ul>
          {
            this.state.notes.map((notes,index) =>
              <li key={index}>
                <h1>{notes.title}</h1>
                <p> {notes.content}</p>    
              </li>
            )
          }
        </ul>
      </div>
    );

  }
}

export default Dashboard;