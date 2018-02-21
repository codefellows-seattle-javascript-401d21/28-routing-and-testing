import React from 'react';
import NoteList from '../note-list/index.js';

class NoteItem extends React.Component{
   constructor(props){
     super(props);
  }

  render(){
    return(
        <div>
          <h3>{this.props.note.title}</h3>
          <p>{this.props.note.content}</p>
          <button>REMOVE</button>
        </div>
    );
  }
}

export default NoteItem;
