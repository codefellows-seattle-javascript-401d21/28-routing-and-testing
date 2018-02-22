import React from 'react';
import ExpenseForm from '../expense-form/expense-form';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expenses: [],
    }
    //binding handlers
    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for(let functionName of memberFunctions) {
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
handleAddExpense(expense) {
  expense.createdOn = new Date();//capturing data from thje user
  exoense.id = Math.random();

  this.setState(previousState => {
    return {expenses: [...previousState,expense]};
  })
}

  render(){
    return(
      <div>
      <h1>Dashboard</h1>
      <ExpenseForm handleAddExpense = {this.handleAddExpense}/>
      <ul>
        {
          this.state.expenses.map((expense, index) => 
        <li key={index}>{expense.name}:${expense.price}</li>
      )
        }
        </ul>
        </div>
    );
  }
}

export default Dashboard;