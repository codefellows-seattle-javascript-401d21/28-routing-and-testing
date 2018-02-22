import React from 'react';
// import NoteCreateForm from '../note-create/index';
// import NoteList from '../note-list/index';

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
    console.log(`handleAddNote ${note}`);
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

export default Dashboard;
