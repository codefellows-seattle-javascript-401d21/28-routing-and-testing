import React from 'react';
import NoteUpdateForm from '../note-update-form/index';

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
    
    this.props.update_note();

  }
  render() {
    // console.log('in note item render')
    return (
      // <p>hi</p>
      <li onDoubleClick={this.handleDoubleClink}><p>{this.state.title}</p><p>{this.state.content}</p> 
      <button type='submit' id={this.state.id} onClick={this.handleSubmit}>Delete Note</button>
      </li>
     
    );
  }
};

export default NoteItem;