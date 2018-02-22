import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Landing from '../landing/index';
import Dashboard from '../dashboard/index';

class App extends React.Component {
  render() {
    return (
      <div className='application'>
        <Route exact path='/' component={Landing} />
        <Route exact path='/dashboard' component={Dashboard} />
      </div>
    );
  }
};

export default App;
