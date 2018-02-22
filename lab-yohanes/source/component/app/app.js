import React from 'react';
//import ReactDom from 'reat-dom'; this renders our page but in main js we already rendiring app and render dom
import {BrowserRouter,Route,Link} from 'react-router-dom' //this is how we are going to define our routes and link will allows us to sewitch routes without reloading the application
import Dashboard from '../dashboard/dashboard';

class App extends React.Component {
  render() {
    return(
    <div className='app'>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={() => <h1>Home</h1>}/>
          <Route exact path='/dashboard' component={Dashboard}/>
        </div>
      </BrowserRouter>
    </div>
  );
  }
};


export default App; //this only works when you want to export one element
//works the same as module.exports = App