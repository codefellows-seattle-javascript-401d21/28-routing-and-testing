import React from 'react';

class NoteItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.note.title,
      content: this.props.note.content,
      id: this.props.note.id

    }
  this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
   
    e.preventDefault();
    
    this.props.delete_note(this.state.id);
    this.setState({
      id: '',
    });
  }
  render() {
    // console.log('in note item render')
    return (
      // <p>hi</p>
      <li><p>{this.state.title}</p><p>{this.state.content}</p> 
      <button type='submit' id={this.state.id} onClick={this.handleSubmit}>Delete Note</button>
      </li>
     
    );
  }
};

export default NoteItem;