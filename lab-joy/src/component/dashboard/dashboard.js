import React from 'react';
import NoteCreateForm from '../note/note-create-form';
import uuid from 'uuid';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };

    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleAddNote(note) {
    note.createdOn = new Date();
    note.id = uuid.v1();
    note.editing = false;
    note.completed = false;

    this.setState(previousState => {
      return { notes: [...previousState.notes, note] };
    });
  }

  handleRemoveNote(e) {
    this.setState({ notes: this.state.notes.filter(note => note.id !== e.target.id )});
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <NoteCreateForm handleAddNote={this.handleAddNote} />
        <ul>
          {
            this.state.notes.map((note, index) =>
              <li key={index}><b>{note.title}</b>: {note.content}</li>
            )
          }
        </ul>
      </div>
    );

  }
}

export default Dashboard;