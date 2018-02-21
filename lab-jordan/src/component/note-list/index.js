import React from 'react';
import Dashboard from '../dashboard/index.js';
import NoteItem from '../note-item/index.js';

class NoteList extends React.Component{
   constructor(props){
     super(props);
  }

  render(){
    return(
        <ul>
          {
            this.props.notes.map((note, index) =>
              <li key={index}>
                <NoteItem note={note} />
              </li>
            )
          }
        </ul>
    );
  }
}

export default NoteList;
