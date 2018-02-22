'use strict';

import React from 'react';
import Note_create_form from '../note-create-form/index.js';
import Note_list from '../note-list/index.js';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    }
  this.handleNoteUpdate = this.handleNoteUpdate.bind(this);
  this.handleRemoveNote = this.handleRemoveNote.bind(this);
  }

  handleNoteUpdate(note_state){
    this.setState(dashState => ({notes: [...dashState.notes, note_state]}));
  }

  handleRemoveNote(note_id){
    this.setState(dashState => ({notes: dashState.notes.filter(note => note.id !== note_id)}))
  }

  render(){
    return (
    <section className="dashboard">
      <h2>Said I'd like to know where you got the notion</h2>
      <article className="note-create">
        <Note_create_form update_notes={this.handleNoteUpdate} />
      </article>
      <article className="notes">
        <Note_list notes={this.state.notes} remove_note={this.handleRemoveNote} />
      </article>
    </section>
    );
  }
}

export default Dashboard;