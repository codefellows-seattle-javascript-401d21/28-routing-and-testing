import React from 'react'

class NoteUpdateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.note.title,
      content: this.props.note.content,
      id: this.props.note.id

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    if(e.target.name === 'cancel'){
      this.setState({
        editing: false
      })
    }

    console.log('this state in handlesumbit on update form', this.state)
    this.props.update_note(this.state);
    this.setState({
      title: '',
      content: '',
      id: '',
      editing: false
    });
  }

  handleChange(e){
  
    if(e.target.name === 'title') this.setState({title: e.target.value});
    if(e.target.name === 'content') this.setState({content: e.target.value});

  }
  render () {
    return (
      <form>
        <input 
          type='text'
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='content'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type='submit' name='update' id={this.state.id} onClick={this.handleSubmit}>Update</button>
        <button type='submit' name='cancel' id={this.state.id} onClick={this.handleSubmit}>Cancel</button>
      </form>
    )
  }
}

export default NoteUpdateForm;