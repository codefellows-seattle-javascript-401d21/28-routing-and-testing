import React from 'react';
import NoteItem from '../note-item/index';

class NoteList extends React.Component {
  constructor(props){
    super(props);
   
  }
  render() {
    return (
      <ul>
        {
          this.props.notes.map((note, index) => {
          
            return <NoteItem note={note} delete_note={this.props.delete_note} key={note.id}/>
          })
          
        }
      </ul>
    );
  }
};

export default NoteList;