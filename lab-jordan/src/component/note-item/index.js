import React from 'react';

class NoteItem extends React.Component {

  render() {
    return(
        <div>
          <h3>{this.props.note.title}</h3>
          <p>{this.props.note.content}</p>
          <button id={this.props.note.id} onClick={this.props.handleRemoveNote}>REMOVE</button>
        </div>
    );
  }
}

export default NoteItem;
