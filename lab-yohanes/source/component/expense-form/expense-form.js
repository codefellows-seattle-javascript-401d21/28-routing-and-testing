import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      price: 0,
    };
    let memberFunctions = Object.getOwnPropertyNames(ExpenseForm.prototype);
    for (let functionName of memberFunctions) {
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this)
      }
    }
  }
  handleChange(event){
    let {name, value} = event.target //smae thing as let name = name.event.value. this will be the name the user inputs in the browser
    this.setState({
      [name]: value,
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.handleAddExpense(this.state)

    this.setState= {
      name: '',
      price: 0,
    }
  }
    render() {
      return(
        <form className='expense-form' onSubmit={this.handleSubmit}>
        <input
        type="text"
        name="name"
        placeholder="name"
      value={this.state.name} //might be this.setSate
      onChange={this.handleChange}
        />
        <input
            type="number"
          name="price"
          placeholder="price"
      value={this.state.price} //mnight be this.setState
          onChange={this.handleChange}
        />
        <button type='submit'> create Expense </button>
        </form>
      )
    }

}

export default ExpenseForm;

//dashboard keeps the list of array of all our expenses
//it will also control how to create new expenses 