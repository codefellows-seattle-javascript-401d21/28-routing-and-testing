import React from 'react';
import Modal from '../modal/index';
import { renderIf } from '../../lib/utils';


class NoteItem extends React.Component{
  constructor(props){
    super(props);

    let memberFunctions = Object.getOwnPropertyNames(NoteItem.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleClick(event) {
    event.preventDefault();
    this.props.handleRemoveNote(this.props.note);
  }

  render(){
    return(
      <li key={this.props.note.id}>
        <p>{this.props.note.title}</p>
        <p>{this.props.note.content}</p>
        <button
          className="delete"
          onClick={this.handleClick}>
          Delete
        </button>

        {renderIf(this.props.note.editing,
          <Modal close={() => this.props.note.editing = false}>
            <NoteUpdateForm note={this.props.note} handleUpdateNote={this.props.handleUpdateNote} />
          </Modal>
        )}
      </li>
    );
  }
}

export default NoteItem;
