import React from 'react';
import NoteCreateForm from '../note-create-form';
import NoteList from '../note-list';

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

  handleAddNote(note){
    // note.createdOn = new Date();
    note.id = Math.ceil(Math.random() * 1000).toString();

    this.setState(previousState => {
      return {notes:[...previousState.notes, note]};
    });
  }

  handleRemoveNote(e){
    let noteID = e.target.id;

    this.setState(ammendNotes => {
      let ammend = ammendNotes.notes.filter(note => note.id !== noteID);
      return {notes: ammend};
    });
  }
    
  render(){
    return(
      <div>
        <h1>Dashboard</h1>
        <NoteCreateForm handleAddNote={this.handleAddNote}/>
        <NoteList list={this.state.notes} handleRemoveNote={this.handleRemoveNote}/>
      </div>
    );

  }
}

export default Dashboard;