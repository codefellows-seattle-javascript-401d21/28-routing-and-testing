import React from 'react';
import NoteCreateForm from '../note-create-form/index.js';

class Dashboard extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       notes: [],
     };
    //----------------------------------------------------
    // Binding Handlers
    //----------------------------------------------------
    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
    //----------------------------------------------------
   }
  //------------------------------------------------------
  // Member Function
  //------------------------------------------------------
  handleAddNote(note){
    note.id = Math.random();

    this.setState(previousState => {
      return {notes :[...previousState.notes,note]};
    });
  }
  //------------------------------------------------------
  // Hooks
  //------------------------------------------------------


  render(){
    return(
      <div>
        <h1>Dashboard</h1>
        <NoteCreateForm handleAddNote={this.handleAddNote}/>
        <ul>
          {
            this.state.notes.map((note,index) =>
              <li key={index}>{note.title}:{note.content}</li>
            )
          }
        </ul>
      </div>
    );

  }
}

export default Dashboard;