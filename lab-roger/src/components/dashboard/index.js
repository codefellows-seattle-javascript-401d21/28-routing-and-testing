import React from 'react';
import NoteCreateform from '../note-create-form/index';
import NoteList from '../note-list/index';
const uuidv1 = require('uuid/v1');

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
  };

// -----------------------------Handlers
handleAddNote(note) {
  note.createdOn = new Date();
  note.id = uuidv1();
  note.editing = false;
  note.completed = false;
  note.content = note.content;
  note.title = note.title;
  this.setState(previousState => {
    return {notes: [...previousState.notes, note]};
  });

}
handleDeleteNote(uuid) {
  
  this.setState(previousState => {
    let y = uuid.toString();
    let x = previousState.notes;
    return {notes: x.filter(x => x.id !== y) };
  })

};


render(){
  return(
    <div>
      <h1>dashboard</h1>
      <NoteCreateform handleAddNote={this.handleAddNote} />
      <h2>Note List</h2>
      <div>
      <h3 className='note-title-header'>Note Title</h3>
      <h3 className='note-content-header'>Note Content</h3>
      </div>
      <NoteList notes={this.state.notes} delete_note={this.handleDeleteNote}/>
    </div>

  );
};


};

export default Dashboard;