import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Landing from "../landing/index";
import Dashboard from "../dashboard/index";


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <header>
              <h1> Dashboard </h1>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                </ul>
              </nav>
            </header>
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
