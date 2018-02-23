import React from 'react';

class NoteCreateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title : '',
      content: '',
    }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleSubmit(e){
    e.preventDefault();
    console.log('this state in handleSumbit create form', this.state)
    this.props.handleAddNote(this.state);
    this.setState({
      title: '',
      content: '',
    });
  }

  handleChange(e){
  
    if(e.target.name === 'title') this.setState({title: e.target.value});
    if(e.target.name === 'content') this.setState({content: e.target.value});

  }




  render(){
    return(
      <form className='add-note-form' onSubmit={this.handleSubmit}>
      <input
        type='text'
        name='title'
        placeholder='title'
        value={this.state.title}
        onChange={this.handleChange}
      />
      <input
        type='text'
        name='content'
        placeholder='content'
        value={this.state.content}
        onChange={this.handleChange}
      />
      <button type='submit'>Create Note</button>
      </form>
      

    );
  }

};

export default NoteCreateForm;