import React from 'react';
import NoteItem from './noteitem';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          { this.props.notes.map(note =>
            <NoteItem key={note.id} note={note} key={note.id} remove={this.props.remove} />
          )}
        </ul>
      </div>
    );
  }
}

export default NoteList;