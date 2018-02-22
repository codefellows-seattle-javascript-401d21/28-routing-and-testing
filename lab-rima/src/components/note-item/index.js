import React from 'react';


class NoteItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li key={this.props.note.id}>
        <p>{this.props.note.title}</p>
        <p>{this.props.note.content}</p>
        <button
          className="delete"
          onClick={this.props.handleRemoveNote(this.props.note)}>
          Delete
        </button>
      </li>
    );
  }
}

export default NoteItem;
