import React from 'react';

class ExpenseForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
    };
    let memberFunctions = Object.getOwnPropertyNames(ExpenseForm.prototype);
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
    this.props.handleAddExpense(this.state);
    this.setState({
      name: '',
      price: 0,
    });
  }
  handleChange (e) {
    let {name, value} = e.target;
    this.setState({[name]: value});
  }




  //--------------
  // Hooks
  //--------------
  render () {
    return (
      <form className='expense_form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type='number'
          name='price'
          placeholder='price'
          value={this.state.price}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default ExpenseForm;