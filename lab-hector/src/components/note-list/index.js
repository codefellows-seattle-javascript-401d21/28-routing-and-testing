import React from "react";
import NoteItem from "../note-item/index"
class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
      <ul>
        {this.props.notes.map(note => 
          <NoteItem key={note.id} note={note} handleRemoveNote={this.props.handleRemoveNote} /> 
        )}
      </ul>
    );
  }
}

export default NoteList;
