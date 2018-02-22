import React from 'react';
import ExpenseForm from '../expense-form/expense-form.js';


class Dashboard extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      expenses: [],
    };
    let menberFunctions = Object.getOwnPropertyNames(Dashboard.prototype)
    for(let functionName of menberFunctions) {
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  
  handleAddExpense() {
    expense.createdON = new Date();
    expense.id = Math.random();
    this.setState(preState => {
      return {expenses: [...preState,expense]};
    });
  }
  render() { 
    return (
      <div>
        <h1>Dashboard</h1>
        <ExpenseForm handleAddExpense={this.handleAddExpense}/>
        <ul>
          {
            this.state.expenses.map((expense,index) =>
              <li key={index}>{expense.name}:${expense.price}</li>
            )
          }
        </ul>
      </div>
    );
  }
}
export default Dashboard;