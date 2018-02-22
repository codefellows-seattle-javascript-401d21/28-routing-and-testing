import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Landing from '../landing/index';
import Dashboard from '../dashboard/index';

class App extends React.Component {
  render() {
    return (
      <div className='application'>
        <BrowserRouter>
          <div>
            <header className="header">
              <ul className="navbar">
                <li>
                  <Link to="/">Landing</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </ul>
            </header>
            <Route exact path='/' component={Landing} />
            <Route exact path='/dashboard' component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
