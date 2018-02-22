import React from 'react';


class NoteItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="note-item">
        <ul>
          {
            this.props.notes.map(note => {
              <li key={note.id}>
                <p>{note.title}</p>
                <p>{note.content}</p>
                <button
                  className="delete"
                  onClick={this.props.handleRemoveNote(note)}>
                  Delete
                </button>
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default NoteItem;
