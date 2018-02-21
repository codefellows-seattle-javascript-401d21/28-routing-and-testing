import React from 'react';
import NoteBuilder from '../note-builder/note-builder';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="note-list">
        {this.props.notes.map(note => <NoteBuilder remove={this.props.remove} note={note}/>)}
      </ul>
    );
  }
}

export default NoteList;