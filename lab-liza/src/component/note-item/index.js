import React from 'react';
import Dashboard from '../dashboard/index.js';

class NoteItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h4>{this.props.note.title}</h4>
        <p>{this.props.note.content}</p>
        <button>delete</button>
    </div>
    );
  }
}

export default NoteItem;
