import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component {
  render () {
    return (
      <ul className="nav">
        <li className="grid-cell">
          <Link className="navigation-link navigation-brand" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="grid-cell">
        <Link className="navigation-link navigation-brand" to="/">
            Landing - About App
          </Link>
          
        </li>
      </ul>
    );
  }
}

export default Navigation;