import React from 'react';
import NoteUpdateForm from '../note-update-form/index';
import { renderIf } from '../../lib/utils';

class NoteItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.note.title,
      content: this.props.note.content,
      id: this.props.note.id

    }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleDoubleClink = this.handleDoubleClink.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.delete_note(this.state.id);
    this.setState({
      id: '',
    });
  }
  handleDoubleClink(e){
    e.preventDefault();
    this.setState({
      editing: true,
    })
    
    this.props.update_note(this.state);

  }
  render() {
    // console.log('in note item render')
    return (
   
        !this.state.editing ?
         <li onDoubleClick={this.handleDoubleClink}><p>{this.state.title}</p><p>{this.state.content}</p> 
         <button type='submit' id={this.state.id} onClick={this.handleSubmit}>Delete Note</button>
         </li>
        :
        <NoteUpdateForm note={this.state} update_note={this.props.update_note} />
 
  );
  }
};

export default NoteItem;