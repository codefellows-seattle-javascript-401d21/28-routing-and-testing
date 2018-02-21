import React from 'react';
import NoteCreateForm from '../note-create-form/index.js';
import NoteList from '../note-list/index.js';

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

  handleRemoveNote(note){
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
        <NoteList notes={this.state.notes}/>
      </div>
    );

  }
}

export default Dashboard;