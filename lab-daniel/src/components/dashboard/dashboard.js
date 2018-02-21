import React from 'react';
import NoteForm from '../note-form/note-form';
import NoteList from '../note-list/note-list';
import uuid from 'uuid';

class Dashboard extends React.Component {
  constructor (props) {
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

  handleAddNote (note) {
    note.createdOn = new Date();
    note.editing = false;
    note.completed = false;
    note.id = uuid('v1');
    this.setState(state => ({ notes: [...state.notes, note]}));
  }

  handleRemove (e) {
    let id = e.target.id;
    this.setState({notes: this.state.notes.filter(note => note.id !== id)});
  }

  render () {
    return (
      <div>
        <h1>Dashboard</h1>
        <NoteForm handleAddNote={this.handleAddNote}/>
        <NoteList remove={this.handleRemove} notes={this.state.notes} />
      </div>
    );
  }
}

export default Dashboard;