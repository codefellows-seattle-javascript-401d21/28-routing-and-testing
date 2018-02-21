import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Dashboard from '../dashboard/index.js';
import Landing from '../landing/index.js';

class App extends React.Component{
  render(){
    return(
      <div className='app'>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/dashboard' component={Dashboard}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default App;