import React from 'react';
import NoteCreateForm from '../note-create/index';
// import NoteList from '../note-list/index';
import uuid from 'uuid';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };

    // Binding Handlers
    Object.getOwnPropertyNames(Dashboard.prototype)
      .filter(prop => prop.startsWith('handle'))
      .map(prop => this[prop] = this[prop].bind(this));
  }

  // Member Functions
  handleAddNote(note) {
    note.id = uuid('v1');
    note.editing = false;
    note.completed = false;
    this.setState(prev => ({notes: [...prev.notes, note]}));
  }

  handleRemoveNote(note) {
    this.setState(prev => ({notes: prev.notes.filter(n => n.id !== note.id)}));
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <NoteCreateForm handleAddNote={this.handleAddNote} />
      </div>
    );
  }
}

export default Dashboard;
