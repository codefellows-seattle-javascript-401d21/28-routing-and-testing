import React from 'react';

class NoteForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
    let memberFunctions = Object.getOwnPropertyNames(NoteForm.prototype);
    for (let functionName in memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  //--------------
  // Handlers
  //--------------
  
  handleSubmit (e) {
    e.preventDefault();
    this.props.handleAddNote(this.state);
    this.setState({
      title: '',
      content: '',
    });
  }
  handleChange (e) {
    let {title, value} = e.target;
    this.setState({[title]: value});
  }




  //--------------
  // Hooks
  //--------------
  render () {
    return (
      <form className='expense_form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          title='title'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type='textarea'
          title='content'
          placeholder='content'
          value={this.state.content}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default NoteForm;