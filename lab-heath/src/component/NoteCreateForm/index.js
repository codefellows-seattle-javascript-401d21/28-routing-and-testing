import React from 'react';

class ExpenseForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title : '',
      content : '',
    };

    let memberFunctions = Object.getOwnPropertyNames(ExpenseForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }

  }

  handleSubmit(event){
    event.preventDefault();
    this.props.handleAddNotes(this.state);
    //resets the form to empty
    this.setState({
      title : '',
      content: '',
    });
  }

  handleChange(event){
    let {name,value} = event.target;

    this.setState({
      [name]: value,
    });
  }

  //------------------------------------------------------
  // Lifecycle hooks
  //------------------------------------------------------
  render(){
    return(
      <form className='expense-form' onSubmit={this.handleSubmit}>
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
          placeholder='your note here'
          value={this.state.content}
          onChange={this.handleChange}  
        />
        <button type='submit'> make that note! </button>
      </form>
    );
  }
};

export default ExpenseForm;