import React from 'react';
import ExpenseForm from '../expense-form/expense-form';

class Dashboard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      expenses: [],
    };

    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for (let functionName in memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleAddExpense (expense) {
    expense.createdOn = new Date();
    expense.id = Math.random();
    this.setState(state => ({ expenses: [...state, expense]}));
  }

  handleRemove (e) {
    let ind = e.target.ind;
    this.setState(state => {
      let newState = Object.assign(state);
      newState.expenses.splice(ind, 0);
    });
  }

  render () {
    return (
      <div>
        <h1>Dashboard</h1>
        <ExpenseForm handleAddExpense={this.handleAddExpense}/>
        <ul>
          {
            this.state.expenses.map((exp, ind) => <li key={ind}><p>Expense Name: {exp.name}</p><p>Price: ${exp.price}</p><button ind={ind} onClick={this.handleRemove}>Remove</button></li>)
          }
        </ul>
      </div>
    );
  }
}

export default Dashboard;